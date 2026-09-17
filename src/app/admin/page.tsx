import Link from 'next/link';
import { getAllWritings } from '@/lib/db';
import { BookOpen, Feather, Flame, Eye, Plus, PenTool } from 'lucide-react';

export const revalidate = 0;

export default function AdminDashboardPage() {
  const writings = getAllWritings(true); // include drafts

  const totalWritings = writings.length;
  const poemsCount = writings.filter(w => w.category === "Poems" || w.category === "Micro Poems").length;
  const quotesCount = writings.filter(w => w.category === "Quotes").length;
  const storiesCount = writings.filter(w => w.category === "Stories").length;
  const totalReads = writings.reduce((acc, curr) => acc + (curr.view_count || 0), 0);

  const sortedByReads = [...writings].sort((a, b) => (b.view_count || 0) - (a.view_count || 0));
  const mostReadWriting = sortedByReads.length > 0 ? sortedByReads[0] : null;

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Top Header & Quick Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-stone-200/80 dark:border-stone-800/80 pb-6">
        <div>
          <h1 className="font-serif text-3xl font-medium text-stone-950 dark:text-stone-50">
            Overview & Analytics
          </h1>
          <p className="text-xs font-sans text-stone-500 mt-1">
            Real-time statistics of your published writings, quotes, and reading counts.
          </p>
        </div>

        <Link
          href="/admin/editor"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 text-stone-50 dark:bg-amber-400 dark:text-stone-950 text-xs font-sans font-medium uppercase tracking-wider hover:opacity-90 transition-all shadow-md"
        >
          <Plus className="w-4 h-4" />
          Create New Writing
        </Link>
      </div>

      {/* STATS CARDS GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        
        {/* Total Writings */}
        <div className="p-5 rounded-2xl bg-paper-50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 space-y-2">
          <div className="flex items-center justify-between text-stone-500">
            <span className="text-[11px] font-sans uppercase tracking-widest font-semibold">Total Writings</span>
            <BookOpen className="w-4 h-4 text-stone-400" />
          </div>
          <p className="font-serif text-3xl font-medium text-stone-900 dark:text-stone-100">{totalWritings}</p>
        </div>

        {/* Poems */}
        <div className="p-5 rounded-2xl bg-paper-50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 space-y-2">
          <div className="flex items-center justify-between text-stone-500">
            <span className="text-[11px] font-sans uppercase tracking-widest font-semibold">Poems & Micro</span>
            <Feather className="w-4 h-4 text-amber-500" />
          </div>
          <p className="font-serif text-3xl font-medium text-stone-900 dark:text-stone-100">{poemsCount}</p>
        </div>

        {/* Quotes */}
        <div className="p-5 rounded-2xl bg-paper-50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 space-y-2">
          <div className="flex items-center justify-between text-stone-500">
            <span className="text-[11px] font-sans uppercase tracking-widest font-semibold">Quotes</span>
            <PenTool className="w-4 h-4 text-amber-600" />
          </div>
          <p className="font-serif text-3xl font-medium text-stone-900 dark:text-stone-100">{quotesCount}</p>
        </div>

        {/* Stories */}
        <div className="p-5 rounded-2xl bg-paper-50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 space-y-2">
          <div className="flex items-center justify-between text-stone-500">
            <span className="text-[11px] font-sans uppercase tracking-widest font-semibold">Stories</span>
            <BookOpen className="w-4 h-4 text-amber-700" />
          </div>
          <p className="font-serif text-3xl font-medium text-stone-900 dark:text-stone-100">{storiesCount}</p>
        </div>

        {/* Total Reads */}
        <div className="p-5 rounded-2xl bg-paper-50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 space-y-2 col-span-2 sm:col-span-1">
          <div className="flex items-center justify-between text-stone-500">
            <span className="text-[11px] font-sans uppercase tracking-widest font-semibold">Total Reads</span>
            <Eye className="w-4 h-4 text-blue-500" />
          </div>
          <p className="font-serif text-3xl font-medium text-stone-900 dark:text-stone-100">{totalReads}</p>
        </div>

      </div>

      {/* MOST READ WRITING SPOTLIGHT */}
      {mostReadWriting && (
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-paper-100 to-paper-50 dark:from-amber-900/20 dark:via-stone-900 dark:to-stone-950 border border-amber-500/30 space-y-4">
          <div className="flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-amber-700 dark:text-amber-400 font-semibold">
            <Flame className="w-4 h-4 fill-current" />
            Most Read Piece
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="font-serif text-2xl font-medium text-stone-900 dark:text-stone-100">
                {mostReadWriting.title}
              </h3>
              <p className="font-serif italic text-sm text-stone-600 dark:text-stone-400 mt-1 line-clamp-1">
                "{mostReadWriting.excerpt}"
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <span className="text-sm font-sans text-stone-700 dark:text-stone-300 font-medium flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-paper-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                <Eye className="w-4 h-4 text-amber-500" />
                {mostReadWriting.view_count} reads
              </span>

              <Link
                href={`/diary/${mostReadWriting.slug}`}
                className="text-xs font-sans uppercase tracking-wider text-amber-700 dark:text-amber-400 font-bold hover:underline"
              >
                View Piece &rarr;
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* RECENT WRITINGS TABLE */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-xl font-medium text-stone-900 dark:text-stone-100">
            Recent Writings
          </h2>
          <Link href="/admin/writings" className="text-xs font-sans text-stone-500 hover:text-stone-900 dark:hover:text-stone-200">
            View All Writings &rarr;
          </Link>
        </div>

        <div className="rounded-2xl border border-stone-200 dark:border-stone-800 overflow-hidden bg-paper-50 dark:bg-stone-900/40">
          <table className="w-full text-left border-collapse text-xs font-sans">
            <thead>
              <tr className="border-b border-stone-200 dark:border-stone-800 bg-paper-100/60 dark:bg-stone-950/60 text-stone-500">
                <th className="p-4 font-semibold uppercase tracking-wider">Title</th>
                <th className="p-4 font-semibold uppercase tracking-wider">Category</th>
                <th className="p-4 font-semibold uppercase tracking-wider">Status</th>
                <th className="p-4 font-semibold uppercase tracking-wider">Reads</th>
                <th className="p-4 font-semibold uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200/70 dark:divide-stone-800/70 text-stone-800 dark:text-stone-200">
              {writings.slice(0, 5).map((w) => (
                <tr key={w.id} className="hover:bg-paper-100/40 dark:hover:bg-stone-800/40 transition-colors">
                  <td className="p-4 font-serif text-sm font-medium">{w.title}</td>
                  <td className="p-4"><span className="px-2.5 py-0.5 rounded-full bg-stone-200/70 dark:bg-stone-800 text-[10px]">{w.category}</span></td>
                  <td className="p-4">
                    <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider ${
                      w.status === 'published' ? 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300' : 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300'
                    }`}>
                      {w.status}
                    </span>
                  </td>
                  <td className="p-4 font-mono">{w.view_count || 0}</td>
                  <td className="p-4 text-right">
                    <Link href={`/admin/editor?edit=${w.id}`} className="text-amber-600 dark:text-amber-400 font-medium hover:underline mr-3">
                      Edit
                    </Link>
                    <Link href={`/diary/${w.slug}`} className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-100">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
