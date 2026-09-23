'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Writing, Category } from '@/types/diary';
import WritingCard from '@/components/WritingCard';
import { Search, SlidersHorizontal, Feather } from 'lucide-react';

const CATEGORIES: Category[] = [
  "Micro Poems", "Poems", "Quotes", "Stories",
  "Love", "Heartbreak", "Life", "Thoughts"
];

function DiaryContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [writings, setWritings] = useState<Writing[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<'newest' | 'oldest' | 'most_read'>('newest');

  useEffect(() => {
    fetchWritings();
  }, [selectedCategory, searchQuery, sortOption]);

  const fetchWritings = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (selectedCategory !== 'All') params.append('category', selectedCategory);
      if (searchQuery) params.append('search', searchQuery);
      params.append('sort', sortOption);

      const res = await fetch(`/api/writings?${params.toString()}`);
      const data = await res.json();
      if (data.success) {
        let fetched: Writing[] = data.data;
        if (typeof window !== 'undefined') {
          try {
            const raw = localStorage.getItem('digital_diary_user_posts');
            if (raw) {
              const localPosts: Writing[] = JSON.parse(raw);
              const fetchedIds = new Set(fetched.map(w => w.id));
              const missingLocal = localPosts.filter(w => !fetchedIds.has(w.id));
              fetched = [...missingLocal, ...fetched];
            }
          } catch (e) {}
        }
        setWritings(fetched);
      }
    } catch (err) {
      console.error("Failed to load writings:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-10 pb-12">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-stone-300 dark:border-stone-800 text-stone-600 dark:text-stone-400 text-xs font-sans tracking-widest uppercase">
          <Feather className="w-3.5 h-3.5" />
          The Archive
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl font-medium text-stone-950 dark:text-stone-50">
          My Diary
        </h1>
        <p className="font-serif italic text-base sm:text-lg text-stone-600 dark:text-stone-400">
          Every published verse, quote, story, and unsaid thought in one place.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="space-y-6 bg-paper-100/40 dark:bg-stone-900/40 p-6 rounded-2xl border border-stone-200/80 dark:border-stone-800">
        
        {/* Search & Sort */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          
          {/* Search Bar */}
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search words, titles, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-paper-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400 dark:focus:ring-stone-600 transition-all placeholder:text-stone-400"
            />
          </div>

          {/* Sort Select */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <SlidersHorizontal className="w-4 h-4 text-stone-500" />
            <span className="text-xs uppercase font-sans tracking-wider text-stone-500">Sort:</span>
            <select
              value={sortOption}
              onChange={(e: any) => setSortOption(e.target.value)}
              className="px-3 py-2 rounded-xl border border-stone-300 dark:border-stone-700 bg-paper-50 dark:bg-stone-900 text-stone-800 dark:text-stone-200 text-xs font-sans focus:outline-none"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="most_read">Most Read</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-stone-200/60 dark:border-stone-800/60">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-sans tracking-wide transition-all ${
              selectedCategory === 'All'
                ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-950 font-medium shadow-sm'
                : 'bg-paper-50 dark:bg-stone-900 text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-800 hover:border-stone-400'
            }`}
          >
            All Writings
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-sans tracking-wide transition-all ${
                selectedCategory === cat
                  ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-950 font-medium shadow-sm'
                  : 'bg-paper-50 dark:bg-stone-900 text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-800 hover:border-stone-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Writings Grid */}
      {loading ? (
        <div className="py-20 text-center font-serif italic text-stone-500">
          Turning pages...
        </div>
      ) : writings.length === 0 ? (
        <div className="py-20 text-center space-y-3">
          <p className="font-serif text-2xl text-stone-600 dark:text-stone-400">
            No writings found in this chapter.
          </p>
          <button
            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
            className="text-xs uppercase font-sans tracking-wider text-amber-700 dark:text-amber-400 hover:underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {writings.map((writing) => (
            <WritingCard key={writing.id} writing={writing} />
          ))}
        </div>
      )}

    </div>
  );
}

export default function DiaryPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center font-serif italic text-stone-500">Loading Diary...</div>}>
      <DiaryContent />
    </Suspense>
  );
}
