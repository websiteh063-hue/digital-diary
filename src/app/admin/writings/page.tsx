'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Writing } from '@/types/diary';
import { Trash2, Edit, Eye, Plus, Search, Check, AlertCircle } from 'lucide-react';

export default function ManageWritingsPage() {
  const [writings, setWritings] = useState<Writing[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    fetchWritings();
  }, []);

  const fetchWritings = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/writings?drafts=true');
      const data = await res.json();
      if (data.success) {
        setWritings(data.data);
      }
    } catch (err) {
      console.error('Failed to load writings:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;

    try {
      const res = await fetch(`/api/writings/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setWritings(writings.filter(w => w.id !== id));
        setMsg(`Deleted "${title}" successfully.`);
        setTimeout(() => setMsg(null), 3000);
      }
    } catch (err) {
      console.error('Failed to delete:', err);
    }
  };

  const filtered = writings.filter(w => {
    const matchesSearch = w.title.toLowerCase().includes(search.toLowerCase()) || w.content.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = filterCategory === 'All' || w.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-stone-200/80 dark:border-stone-800/80 pb-6">
        <div>
          <h1 className="font-serif text-3xl font-medium text-stone-950 dark:text-stone-50">
            All Writings ({writings.length})
          </h1>
          <p className="text-xs font-sans text-stone-500 mt-1">
            Manage, edit, publish, or delete your diary entries.
          </p>
        </div>

        <Link
          href="/admin/editor"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 text-stone-50 dark:bg-amber-400 dark:text-stone-950 text-xs font-sans font-medium uppercase tracking-wider hover:opacity-90 transition-all shadow-md"
        >
          <Plus className="w-4 h-4" />
          Create New
        </Link>
      </div>

      {msg && (
        <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 text-xs font-sans">
          {msg}
        </div>
      )}

      {/* Filter controls */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-paper-100/50 dark:bg-stone-900/40 p-4 rounded-xl border border-stone-200 dark:border-stone-800">
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            placeholder="Search by title or text..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-stone-300 dark:border-stone-700 bg-paper-50 dark:bg-stone-900 text-xs font-sans text-stone-900 dark:text-stone-100 focus:outline-none"
          />
        </div>

        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="px-3 py-2 rounded-lg border border-stone-300 dark:border-stone-700 bg-paper-50 dark:bg-stone-900 text-xs font-sans text-stone-800 dark:text-stone-200 focus:outline-none"
        >
          <option value="All">All Categories</option>
          <option value="Micro Poems">Micro Poems</option>
          <option value="Poems">Poems</option>
          <option value="Quotes">Quotes</option>
          <option value="Stories">Stories</option>
          <option value="Love">Love</option>
          <option value="Heartbreak">Heartbreak</option>
          <option value="Life">Life</option>
          <option value="Thoughts">Thoughts</option>
        </select>
      </div>

      {/* Table */}
      {loading ? (
        <div className="py-20 text-center font-serif italic text-stone-500">Loading entries...</div>
      ) : filtered.length === 0 ? (
        <div className="py-20 text-center text-stone-500 font-serif">No writings match your filter.</div>
      ) : (
        <div className="rounded-2xl border border-stone-200 dark:border-stone-800 overflow-hidden bg-paper-50 dark:bg-stone-900/40 shadow-sm">
          <table className="w-full text-left border-collapse text-xs font-sans">
            <thead>
              <tr className="border-b border-stone-200 dark:border-stone-800 bg-paper-100/60 dark:bg-stone-950/60 text-stone-500">
                <th className="p-4 font-semibold uppercase tracking-wider">Title</th>
                <th className="p-4 font-semibold uppercase tracking-wider">Category</th>
                <th className="p-4 font-semibold uppercase tracking-wider">Status</th>
                <th className="p-4 font-semibold uppercase tracking-wider">Reads</th>
                <th className="p-4 font-semibold uppercase tracking-wider">Date</th>
                <th className="p-4 font-semibold uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200/70 dark:divide-stone-800/70 text-stone-800 dark:text-stone-200">
              {filtered.map((w) => (
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
                  <td className="p-4 text-stone-500 text-[11px]">{new Date(w.created_at).toLocaleDateString()}</td>
                  <td className="p-4 text-right space-x-2">
                    <Link href={`/admin/editor?edit=${w.id}`} className="p-1.5 inline-block text-amber-600 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900/40 rounded transition-colors" title="Edit">
                      <Edit className="w-3.5 h-3.5" />
                    </Link>
                    <Link href={`/diary/${w.slug}`} className="p-1.5 inline-block text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 rounded transition-colors" title="View">
                      <Eye className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      onClick={() => handleDelete(w.id, w.title)}
                      className="p-1.5 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 rounded transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
}
