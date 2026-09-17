'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Category, WritingStatus } from '@/types/diary';
import { Sparkles, Save, Send, Image as ImageIcon, Tag, Check, AlertCircle, ArrowLeft, Bold, Italic, Quote as QuoteIcon, AlignLeft } from 'lucide-react';

const CATEGORIES: Category[] = [
  "Micro Poems", "Poems", "Quotes", "Stories",
  "Love", "Heartbreak", "Life", "Thoughts"
];

function WritingEditorContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get('edit');

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<Category>('Poems');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [status, setStatus] = useState<WritingStatus>('published');
  
  const [loading, setLoading] = useState(false);
  const [isSuggestingTags, setIsSuggestingTags] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    if (editId) {
      fetchWritingToEdit(editId);
    }
  }, [editId]);

  const fetchWritingToEdit = async (id: string) => {
    try {
      const res = await fetch(`/api/writings/${id}`);
      const data = await res.json();
      if (data.success) {
        const w = data.data;
        setTitle(w.title);
        setCategory(w.category);
        setContent(w.content);
        setCoverImage(w.cover_image || '');
        setTags(w.tags || []);
        setStatus(w.status || 'published');
      }
    } catch (err) {
      console.error('Error fetching writing:', err);
    }
  };

  // Auto Tag Suggestion Engine trigger
  const handleSuggestTags = async () => {
    if (!content && !title) return;
    setIsSuggestingTags(true);
    try {
      const res = await fetch('/api/suggest-tags', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content, category }),
      });
      const data = await res.json();
      if (data.success && data.tags) {
        // Merge without duplicates
        const merged = Array.from(new Set([...tags, ...data.tags]));
        setTags(merged);
        setMessage({ type: 'success', text: `Suggested ${data.tags.length} relevant tags!` });
        setTimeout(() => setMessage(null), 3000);
      }
    } catch (err) {
      console.error('Failed to generate tags:', err);
    } finally {
      setIsSuggestingTags(false);
    }
  };

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const val = tagInput.trim().toLowerCase().replace(/^#/, '');
      if (val && !tags.includes(val)) {
        setTags([...tags, val]);
        setTagInput('');
      }
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(t => t !== tagToRemove));
  };

  // Content formatting helpers
  const insertFormatting = (type: 'bold' | 'italic' | 'quote' | 'stanza') => {
    if (type === 'stanza') {
      setContent(content + '\n\n');
    } else if (type === 'quote') {
      setContent(content + '\n"Your quote here..."\n');
    } else if (type === 'bold') {
      setContent(content + ' **bold text** ');
    } else if (type === 'italic') {
      setContent(content + ' *italic text* ');
    }
  };

  const handleSave = async (targetStatus: WritingStatus) => {
    if (!title.trim() || !content.trim()) {
      setMessage({ type: 'error', text: 'Title and content cannot be empty.' });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const payload = {
        title,
        category,
        content,
        cover_image: coverImage || undefined,
        tags,
        status: targetStatus,
      };

      const url = editId ? `/api/writings/${editId}` : '/api/writings';
      const method = editId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setMessage({ type: 'success', text: targetStatus === 'published' ? 'Writing published successfully!' : 'Draft saved successfully!' });
        setTimeout(() => {
          router.push('/diary');
        }, 1200);
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to save writing.' });
      }
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message || 'Error occurred.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-stone-200/80 dark:border-stone-800/80 pb-4">
        <div>
          <h1 className="font-serif text-3xl font-medium text-stone-950 dark:text-stone-50">
            {editId ? 'Edit Writing' : 'New Writing Studio'}
          </h1>
          <p className="text-xs font-sans text-stone-500 mt-1">
            Write poems, quotes, or stories. Your tagline and signature will automatically append when published.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => handleSave('draft')}
            disabled={loading}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 text-xs font-sans font-medium text-stone-700 dark:text-stone-300 hover:bg-stone-200/50 dark:hover:bg-stone-800 transition-colors"
          >
            <Save className="w-4 h-4" />
            Save Draft
          </button>

          <button
            onClick={() => handleSave('published')}
            disabled={loading}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-stone-900 text-stone-50 dark:bg-amber-400 dark:text-stone-950 text-xs font-sans font-medium uppercase tracking-wider hover:opacity-90 transition-all shadow-md"
          >
            <Send className="w-4 h-4" />
            {editId ? 'Update & Publish' : 'Publish Writing'}
          </button>
        </div>
      </div>

      {/* Alert message if any */}
      {message && (
        <div className={`p-4 rounded-xl text-xs font-sans flex items-center gap-2 ${
          message.type === 'success' ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300' : 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300'
        }`}>
          {message.type === 'success' ? <Check className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
          {message.text}
        </div>
      )}

      {/* Editor Form */}
      <div className="space-y-6 bg-paper-50 dark:bg-stone-900/40 p-6 sm:p-8 rounded-3xl border border-stone-200/90 dark:border-stone-800/80 shadow-sm">
        
        {/* Title & Category Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Title */}
          <div className="md:col-span-8 space-y-1">
            <label className="block text-xs font-sans uppercase tracking-wider text-stone-500 font-semibold">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter writing title (English or Hindi)..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-stone-700 bg-paper-100/50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-serif text-xl focus:outline-none focus:ring-2 focus:ring-stone-400"
            />
          </div>

          {/* Category Dropdown */}
          <div className="md:col-span-4 space-y-1">
            <label className="block text-xs font-sans uppercase tracking-wider text-stone-500 font-semibold">
              Category
            </label>
            <select
              value={category}
              onChange={(e: any) => setCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-stone-700 bg-paper-100/50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Content Formatting Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-2 p-2 rounded-xl bg-paper-100 dark:bg-stone-950 border border-stone-200/80 dark:border-stone-800 text-xs font-sans">
          <div className="flex items-center gap-1 text-stone-600 dark:text-stone-400">
            <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 px-2">Quick Helpers:</span>
            <button
              onClick={() => insertFormatting('bold')}
              className="p-1.5 rounded hover:bg-stone-200 dark:hover:bg-stone-800 flex items-center gap-1"
              title="Add Bold"
            >
              <Bold className="w-3.5 h-3.5" /> Bold
            </button>
            <button
              onClick={() => insertFormatting('italic')}
              className="p-1.5 rounded hover:bg-stone-200 dark:hover:bg-stone-800 flex items-center gap-1"
              title="Add Italic"
            >
              <Italic className="w-3.5 h-3.5" /> Italic
            </button>
            <button
              onClick={() => insertFormatting('quote')}
              className="p-1.5 rounded hover:bg-stone-200 dark:hover:bg-stone-800 flex items-center gap-1"
              title="Insert Quote"
            >
              <QuoteIcon className="w-3.5 h-3.5" /> Quote
            </button>
            <button
              onClick={() => insertFormatting('stanza')}
              className="p-1.5 rounded hover:bg-stone-200 dark:hover:bg-stone-800 flex items-center gap-1"
              title="Poetry Stanza Break"
            >
              <AlignLeft className="w-3.5 h-3.5" /> Stanza Break
            </button>
          </div>

          <span className="text-[10px] text-stone-400 font-mono">
            {content.length} chars
          </span>
        </div>

        {/* Writing Content Textarea */}
        <div className="space-y-1">
          <label className="block text-xs font-sans uppercase tracking-wider text-stone-500 font-semibold">
            Writing Content
          </label>
          <textarea
            rows={12}
            placeholder="Write your poem, quote, or story here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-5 py-4 rounded-2xl border border-stone-300 dark:border-stone-700 bg-paper-100/50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-serif text-lg leading-relaxed focus:outline-none focus:ring-2 focus:ring-stone-400 placeholder:italic"
          />
        </div>

        {/* Cover Image URL (Optional) */}
        <div className="space-y-1">
          <label className="block text-xs font-sans uppercase tracking-wider text-stone-500 font-semibold flex items-center gap-1.5">
            <ImageIcon className="w-3.5 h-3.5" /> Cover Image URL (Optional)
          </label>
          <input
            type="text"
            placeholder="https://images.unsplash.com/..."
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-paper-100/50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 text-xs font-sans focus:outline-none"
          />
        </div>

        {/* AUTOMATIC TAG SUGGESTION SECTION */}
        <div className="space-y-3 pt-4 border-t border-stone-200 dark:border-stone-800">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-sans uppercase tracking-wider text-stone-500 font-semibold flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" /> Tags
            </label>
            <button
              type="button"
              onClick={handleSuggestTags}
              disabled={isSuggestingTags || (!title && !content)}
              className="flex items-center gap-1.5 text-xs font-sans font-medium text-amber-700 dark:text-amber-400 hover:underline"
            >
              <Sparkles className="w-3.5 h-3.5" />
              {isSuggestingTags ? 'Analyzing content...' : 'Suggest Tags Automatically'}
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-sans"
              >
                #{tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="hover:text-red-500 text-stone-400 ml-1 font-bold"
                >
                  &times;
                </button>
              </span>
            ))}
            <input
              type="text"
              placeholder="Add tag & press Enter..."
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleAddTag}
              className="px-3 py-1 text-xs font-sans bg-transparent border-none focus:outline-none text-stone-800 dark:text-stone-200 placeholder:text-stone-400"
            />
          </div>
        </div>

        {/* Automatic Branding Note */}
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-sans text-stone-700 dark:text-stone-300 flex items-start gap-2">
          <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-stone-900 dark:text-stone-100">Automatic Branding & Signature:</span> Every published piece automatically appends your fixed tagline and saved default signature image at the bottom.
          </div>
        </div>

      </div>

    </div>
  );
}

export default function WritingEditorPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center font-serif italic text-stone-500">Loading Editor...</div>}>
      <WritingEditorContent />
    </Suspense>
  );
}
