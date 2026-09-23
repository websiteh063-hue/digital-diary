'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Category, WritingStatus } from '@/types/diary';
import { Sparkles, Save, Send, Tag, Check, AlertCircle, ArrowLeft, Bold, Italic, Quote as QuoteIcon, AlignLeft, Eye, Edit3 } from 'lucide-react';


import { detectCategory } from '@/lib/tagging';
import FormattedContent from '@/components/FormattedContent';
import RichTextEditor from '@/components/RichTextEditor';

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
  const [isAutoCategory, setIsAutoCategory] = useState(true);
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [status, setStatus] = useState<WritingStatus>('published');
  
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSuggestingTags, setIsSuggestingTags] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    if (editId) {
      fetchWritingToEdit(editId);
    }
  }, [editId]);

  // Auto-detect category dynamically when typing title or content
  useEffect(() => {
    if (isAutoCategory && (title || content) && !editId) {
      const detected = detectCategory(title, content);
      setCategory(detected);
    }
  }, [title, content, isAutoCategory, editId]);

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
        setIsAutoCategory(false);
      }
    } catch (err) {
      console.error('Error fetching writing:', err);
    }
  };

  // Auto Tag & Category Suggestion Engine trigger
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
      if (data.success) {
        if (data.tags) {
          const merged = Array.from(new Set([...tags, ...data.tags]));
          setTags(merged);
        }
        if (data.category) {
          setCategory(data.category);
          setIsAutoCategory(true);
        }
        setMessage({ type: 'success', text: `Auto-selected "${data.category || category}" category & suggested ${data.tags?.length || 0} tags!` });
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
        if (data.data && typeof window !== 'undefined') {
          try {
            const raw = localStorage.getItem('digital_diary_user_posts');
            const localPosts = raw ? JSON.parse(raw) : [];
            const filtered = localPosts.filter((w: any) => w.id !== data.data.id && w.slug !== data.data.slug);
            filtered.unshift(data.data);
            localStorage.setItem('digital_diary_user_posts', JSON.stringify(filtered));
          } catch (e) {
            console.warn('LocalStorage save error:', e);
          }
        }
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
          
          {/* Title with Fancy Calligraphy font */}
          <div className="md:col-span-8 space-y-1">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-sans uppercase tracking-wider text-stone-500 font-semibold">
                Title
              </label>
              <span className="text-[11px] font-calligraphy italic text-amber-700 dark:text-amber-400 font-medium">
                ✨ Calligraphy Font Active
              </span>
            </div>
            <input
              type="text"
              placeholder="Enter writing title (English or Hindi)..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-stone-700 bg-paper-100/50 dark:bg-stone-950 text-stone-950 dark:text-stone-50 font-calligraphy italic text-3xl font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500/50 placeholder:font-serif placeholder:not-italic placeholder:text-lg"
            />
          </div>

          {/* Category Dropdown with Auto Detection */}
          <div className="md:col-span-4 space-y-1">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-sans uppercase tracking-wider text-stone-500 font-semibold">
                Category
              </label>
              {isAutoCategory ? (
                <span className="text-[10px] font-sans font-medium text-amber-700 dark:text-amber-400 bg-amber-500/15 px-2 py-0.5 rounded-full flex items-center gap-1 border border-amber-500/30">
                  <Sparkles className="w-3 h-3 text-amber-600" /> Auto Detected
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setIsAutoCategory(true);
                    setCategory(detectCategory(title, content));
                  }}
                  className="text-[10px] font-sans font-medium text-stone-500 hover:text-amber-600 dark:hover:text-amber-400 flex items-center gap-1 transition-colors"
                  title="Click to auto-select category based on title & text"
                >
                  <Sparkles className="w-3 h-3" /> Auto Select
                </button>
              )}
            </div>
            <select
              value={category}
              onChange={(e: any) => {
                setCategory(e.target.value);
                setIsAutoCategory(false);
              }}
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

        {/* Writing Content Field with Rich Text WYSIWYG Editor */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-sans uppercase tracking-wider text-stone-500 font-semibold flex items-center gap-1.5">
              <span>Writing Content</span>
            </label>
            
            <button
              type="button"
              onClick={() => setIsPreviewMode(!isPreviewMode)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-colors border ${
                isPreviewMode 
                  ? 'bg-amber-500/20 text-amber-800 dark:text-amber-300 border-amber-500/40' 
                  : 'bg-stone-200/60 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-700'
              }`}
            >
              {isPreviewMode ? <Edit3 className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              {isPreviewMode ? 'Back to Rich Editor' : 'Live Preview'}
            </button>
          </div>

          {isPreviewMode ? (
            <div className="w-full min-h-[320px] p-6 rounded-2xl border border-stone-300 dark:border-stone-700 bg-paper-100/70 dark:bg-stone-950 font-serif text-lg leading-relaxed shadow-inner">
              <div className="font-calligraphy italic text-3xl font-semibold text-stone-950 dark:text-stone-50 pb-4 border-b border-stone-200 dark:border-stone-800 mb-4">
                {title || 'Untitled Writing'}
              </div>
              <FormattedContent content={content || 'Nothing to preview yet. Start typing...'} />
            </div>
          ) : (
            <RichTextEditor
              value={content}
              onChange={setContent}
              placeholder="Write your poem, quote, or story here... Highlight any text in the middle to make it bold, italic, underlined, centered, or colored!"
            />
          )}
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

export default function WritingEditorClient() {
  return (
    <Suspense fallback={<div className="py-20 text-center font-serif italic text-stone-500">Loading Editor...</div>}>
      <WritingEditorContent />
    </Suspense>
  );
}
