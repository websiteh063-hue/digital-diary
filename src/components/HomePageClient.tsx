'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Writing, Category } from '@/types/diary';
import WritingCard from '@/components/WritingCard';
import EnterDiaryTransition from '@/components/EnterDiaryTransition';
import { Feather, Heart, Flame, Sparkles, BookOpen, ArrowRight, PenTool, Lock, Search, SlidersHorizontal, BookMarked } from 'lucide-react';

const CATEGORIES: string[] = [
  "All", "Dear Diary", "Micro Poems", "Poems", "Quotes", "Stories",
  "Love", "Heartbreak", "Life", "Thoughts"
];

interface HomePageClientProps {
  initialWritings: Writing[];
}

export default function HomePageClient({ initialWritings }: HomePageClientProps) {
  const [allWritings, setAllWritings] = useState<Writing[]>(initialWritings);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState<"newest" | "oldest" | "most_read">("newest");
  const [displayCount, setDisplayCount] = useState<number>(12);

  // Merge client-side localStorage posts if any exist & auto-sync missing posts to server
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const raw = localStorage.getItem('digital_diary_user_posts');
        if (raw) {
          const localPosts: Writing[] = JSON.parse(raw);
          const existingIds = new Set(initialWritings.map(w => w.id));
          const missingLocal = localPosts.filter(w => !existingIds.has(w.id));
          if (missingLocal.length > 0) {
            setAllWritings([...missingLocal, ...initialWritings]);
            // Re-sync missing local posts back to server in background
            missingLocal.forEach(post => {
              fetch('/api/writings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(post)
              }).catch(err => console.warn('Sync missing post failed:', err));
            });
          }
        }
      } catch (e) {}
    }
  }, [initialWritings]);

  // Filter & Sort logic for the main grid
  let filtered = [...allWritings];

  if (selectedCategory === "Dear Diary") {
    filtered = filtered.filter(w => w.tags && w.tags.includes('dear-diary'));
  } else if (selectedCategory !== "All") {
    filtered = filtered.filter(w => w.category.toLowerCase() === selectedCategory.toLowerCase());
  }

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(w =>
      w.title.toLowerCase().includes(q) ||
      w.content.toLowerCase().includes(q) ||
      (w.tags && w.tags.some(t => t.toLowerCase().includes(q)))
    );
  }

  if (sortOption === "oldest") {
    filtered.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
  } else if (sortOption === "most_read") {
    filtered.sort((a, b) => (b.view_count || 0) - (a.view_count || 0));
  } else {
    // newest
    filtered.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  }

  const featuredWritings = allWritings.filter(w => w.featured).slice(0, 4);
  const dearDiaryHighlights = allWritings.filter(w => w.tags && w.tags.includes('dear-diary')).slice(0, 6);
  const emotionalWritings = allWritings.filter(w => ['Heartbreak', 'Love', 'Micro Poems', 'Poems'].includes(w.category)).slice(0, 6);
  const mostReadWritings = [...allWritings].sort((a, b) => (b.view_count || 0) - (a.view_count || 0)).slice(0, 6);

  const categoriesList: { name: string; count: number; desc: string; gradient: string }[] = [
    { name: "Dear Diary", count: allWritings.filter(w => w.tags && w.tags.includes('dear-diary')).length, desc: "Handwritten originals & verses", gradient: "from-amber-500/25 via-rose-500/15 to-transparent border-amber-500/40" },
    { name: "Micro Poems", count: allWritings.filter(w => w.category === "Micro Poems").length, desc: "Brevity wrapped in soul", gradient: "from-indigo-500/20 via-purple-500/10 to-transparent border-indigo-500/30" },
    { name: "Poems", count: allWritings.filter(w => w.category === "Poems").length, desc: "Verses of quiet storms", gradient: "from-amber-500/20 via-yellow-500/10 to-transparent border-amber-500/30" },
    { name: "Quotes", count: allWritings.filter(w => w.category === "Quotes").length, desc: "Single lines that linger", gradient: "from-purple-500/20 via-pink-500/10 to-transparent border-purple-500/30" },
    { name: "Stories", count: allWritings.filter(w => w.category === "Stories").length, desc: "Moments etched in prose", gradient: "from-emerald-500/20 via-teal-500/10 to-transparent border-emerald-500/30" },
    { name: "Love", count: allWritings.filter(w => w.category === "Love").length, desc: "Tenderness and devotion", gradient: "from-rose-500/20 via-pink-500/10 to-transparent border-rose-500/30" },
    { name: "Heartbreak", count: allWritings.filter(w => w.category === "Heartbreak").length, desc: "The echoes of goodbye", gradient: "from-red-500/20 via-rose-500/10 to-transparent border-red-500/30" },
    { name: "Life", count: allWritings.filter(w => w.category === "Life").length, desc: "Lessons learnt along the way", gradient: "from-amber-600/20 via-orange-500/10 to-transparent border-amber-600/30" },
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      
      {/* 1. HERO SECTION WITH AMBIENT GLOW */}
      <section className="relative text-center pt-8 sm:pt-16 pb-12 border-b border-amber-500/20">
        
        {/* Background Ambient Glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-amber-500/20 via-rose-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />

        {/* Top Badges */}
        <div className="flex items-center justify-center flex-wrap gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-purple-500/10 text-amber-900 dark:text-amber-300 text-xs font-sans tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            A Personal Literary Sanctuary
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-900 dark:text-rose-300 text-xs font-sans tracking-widest font-semibold uppercase">
            <BookMarked className="w-3.5 h-3.5 text-rose-500" />
            {allWritings.length} Total Writings Published
          </div>
        </div>

        {/* Main Calligraphy Title */}
        <h1 className="font-serif text-6xl sm:text-8xl lg:text-9xl tracking-tight bg-gradient-to-r from-stone-950 via-amber-950 to-rose-950 dark:from-stone-50 dark:via-amber-200 dark:to-rose-200 bg-clip-text text-transparent font-semibold max-w-5xl mx-auto mb-8 leading-[1.05]">
          My Diary
        </h1>

        {/* Subtitle */}
        <p className="font-serif italic text-2xl sm:text-4xl text-stone-700 dark:text-stone-300 max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-sm">
          "Some feelings are written. Some are lived.<br className="hidden sm:inline" />
          And some stay somewhere between the two."
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <EnterDiaryTransition />

          <Link
            href="/admin"
            className="flex items-center gap-2 px-6 py-4 rounded-full border border-amber-500/40 bg-paper-100/80 dark:bg-stone-900/80 hover:bg-amber-500/10 text-amber-900 dark:text-amber-300 font-sans text-xs tracking-widest uppercase font-bold transition-all shadow-md"
          >
            <PenTool className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            Write For Us &rarr;
          </Link>
        </div>

        {/* Introduction Banner */}
        <div className="max-w-2xl mx-auto p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-paper-100/80 via-paper-50 to-paper-100/80 dark:from-stone-900/80 dark:via-stone-950 dark:to-stone-900/80 border border-amber-500/20 text-stone-700 dark:text-stone-300 text-xs sm:text-sm font-sans leading-relaxed shadow-sm">
          Welcome to my quiet corner of the internet. Here you will find all handwritten diary verses, micro poems, quiet heartbreaks, romantic fragments, unposted thoughts, and stories.
        </div>
      </section>

      {/* 2. DEAR DIARY SPECIAL HIGHLIGHTS */}
      {dearDiaryHighlights.length > 0 && (
        <section className="space-y-8 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-amber-500/15 via-paper-50 to-rose-500/10 dark:from-amber-950/40 dark:via-stone-950 dark:to-rose-950/40 border border-amber-500/30 shadow-md">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                <BookMarked className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-serif text-2xl sm:text-4xl font-semibold text-stone-900 dark:text-stone-100">
                  Dear Diary PDF Collection
                </h2>
                <p className="text-xs font-sans text-stone-600 dark:text-stone-400">
                  114 Original handwritten verses, quotes & stories from the diary.
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setSelectedCategory("Dear Diary");
                const el = document.getElementById("all-writings-section");
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-4 py-2 rounded-full bg-amber-500/20 text-amber-900 dark:text-amber-300 text-xs font-sans font-bold uppercase tracking-wider hover:bg-amber-500/30 transition-all border border-amber-500/40"
            >
              View All 114 Verses &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dearDiaryHighlights.map((writing) => (
              <WritingCard key={writing.id} writing={writing} />
            ))}
          </div>
        </section>
      )}

      {/* 3. COMPLETE HOMEPAGE LITERARY EXPLORER (ALL 216+ WRITINGS) */}
      <section id="all-writings-section" className="space-y-8 pt-6 border-t border-amber-500/20">
        
        {/* Explorer Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-sans uppercase tracking-widest font-bold mb-2">
              <BookOpen className="w-3.5 h-3.5" /> Complete Archive
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-stone-950 dark:text-stone-50">
              Browse All Writings ({filtered.length})
            </h2>
            <p className="text-xs font-sans text-stone-500 dark:text-stone-400 mt-1">
              Read every single published poem, quote, story, and diary entry right here on the homepage.
            </p>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <SlidersHorizontal className="w-4 h-4 text-stone-500" />
            <span className="text-xs uppercase font-sans tracking-wider text-stone-500 font-semibold">Sort:</span>
            <select
              value={sortOption}
              onChange={(e: any) => setSortOption(e.target.value)}
              className="px-3.5 py-2 rounded-xl border border-stone-300 dark:border-stone-700 bg-paper-50 dark:bg-stone-900 text-stone-800 dark:text-stone-200 text-xs font-sans focus:outline-none"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="most_read">Most Read</option>
            </select>
          </div>
        </div>

        {/* Interactive Search & Category Filter Bar */}
        <div className="space-y-5 bg-paper-100/50 dark:bg-stone-900/50 p-6 rounded-3xl border border-stone-200/90 dark:border-stone-800 shadow-sm">
          
          {/* Live Search Input */}
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search words, titles, hindi shayari, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-stone-300 dark:border-stone-700 bg-paper-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 transition-all placeholder:text-stone-400"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-stone-200/60 dark:border-stone-800/60">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setDisplayCount(12);
                }}
                className={`px-4 py-2 rounded-full text-xs font-sans tracking-wide transition-all ${
                  selectedCategory === cat
                    ? 'bg-stone-900 text-stone-50 dark:bg-amber-400 dark:text-stone-950 font-bold shadow-md'
                    : 'bg-paper-50 dark:bg-stone-950 text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-stone-800 hover:border-amber-500'
                }`}
              >
                {cat === "All" ? `All (${allWritings.length})` : cat === "Dear Diary" ? `Dear Diary (114)` : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Writings Grid */}
        {filtered.length === 0 ? (
          <div className="py-20 text-center space-y-3 bg-paper-50 dark:bg-stone-950 rounded-3xl border border-dashed border-stone-300 dark:border-stone-800">
            <p className="font-serif text-2xl text-stone-600 dark:text-stone-400">
              No writings match your search or filter.
            </p>
            <button
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="text-xs uppercase font-sans tracking-wider text-amber-700 dark:text-amber-400 font-bold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.slice(0, displayCount).map((writing) => (
                <WritingCard key={writing.id} writing={writing} />
              ))}
            </div>

            {/* Load More Button */}
            {displayCount < filtered.length && (
              <div className="text-center pt-6">
                <button
                  onClick={() => setDisplayCount(prev => prev + 24)}
                  className="px-8 py-4 rounded-full bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-950 font-sans text-xs uppercase font-bold tracking-widest hover:opacity-90 transition-all shadow-md"
                >
                  Load More Writings ({filtered.length - displayCount} Remaining) &rarr;
                </button>
              </div>
            )}
          </div>
        )}

      </section>

      {/* 4. FROM THE HEART (Emotional / Love / Poems) */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-rose-500/10 via-paper-50 to-amber-500/10 dark:from-rose-950/40 dark:via-stone-950 dark:to-amber-950/40 border border-rose-500/30 space-y-8 shadow-md">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-rose-500/20 text-rose-600 dark:text-rose-400">
            <Heart className="w-6 h-6 fill-current" />
          </div>
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 dark:text-stone-100">
              From the Heart
            </h2>
            <p className="text-xs font-sans text-stone-600 dark:text-stone-400">
              Pieces born from raw emotion, longing, and unsaid words.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {emotionalWritings.map((writing) => (
            <WritingCard key={writing.id} writing={writing} />
          ))}
        </div>
      </section>

      {/* 5. MOST READ */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-300">
              <Flame className="w-5 h-5 fill-current text-amber-600" />
            </div>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 dark:text-stone-100">
                Most Read Verses
              </h2>
              <p className="text-xs font-sans text-stone-500">Popular pieces among readers</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {mostReadWritings.map((writing) => (
            <WritingCard key={writing.id} writing={writing} />
          ))}
        </div>
      </section>

      {/* 6. COLORFUL CATEGORIES GRID */}
      <section className="space-y-8 pt-8 border-t border-amber-500/20">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="font-serif text-3xl font-semibold text-stone-900 dark:text-stone-100">
            Explore by Category
          </h2>
          <p className="text-xs font-sans text-stone-500 dark:text-stone-400">
            Every mood and feeling has its own quiet shelf in the diary.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categoriesList.map((cat) => (
            <button
              key={cat.name}
              onClick={() => {
                setSelectedCategory(cat.name);
                const el = document.getElementById("all-writings-section");
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`group p-6 rounded-3xl border bg-gradient-to-br ${cat.gradient} hover:scale-105 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md text-left`}
            >
              <div>
                <span className="text-[10px] font-sans uppercase tracking-widest text-stone-500 dark:text-stone-400 font-bold block mb-1">
                  {cat.count} {cat.count === 1 ? 'Piece' : 'Pieces'}
                </span>
                <h3 className="font-serif text-xl font-semibold text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                  {cat.name}
                </h3>
              </div>
              <p className="text-xs font-sans text-stone-600 dark:text-stone-400 mt-3 line-clamp-1">
                {cat.desc}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* 7. AUTHOR & WRITE FOR US BANNER */}
      <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-600 via-rose-600 to-amber-700 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-[11px] uppercase tracking-wider font-bold">
            <Lock className="w-3 h-3" /> Author Access
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold">
            Ready to write a new poem or story?
          </h3>
          <p className="text-xs sm:text-sm font-sans text-white/90 max-w-md">
            Go straight to your private Writing Studio to draft, format, auto-suggest tags, and publish with instant branding & default signature.
          </p>
        </div>

        <Link
          href="/admin"
          className="shrink-0 px-6 py-3.5 rounded-full bg-white text-stone-950 font-sans text-xs uppercase font-bold tracking-wider hover:bg-amber-100 hover:scale-105 transition-all shadow-lg flex items-center gap-2"
        >
          <PenTool className="w-4 h-4 text-amber-700" />
          Write For Us &rarr;
        </Link>
      </section>

    </div>
  );
}
