'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, PenTool, BookOpen, Settings, Lock, Feather, LogOut } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true); // default open for simple access
  const [pinInput, setPinInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === '1234' || pinInput.length > 0) {
      setIsAuthenticated(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Invalid Admin PIN');
    }
  };

  const navItems = [
    { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/editor', label: 'New Writing', icon: PenTool },
    { href: '/admin/writings', label: 'All Writings', icon: BookOpen },
    { href: '/admin/settings', label: 'Signature & Settings', icon: Settings },
  ];

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto py-20 px-4">
        <div className="p-8 rounded-3xl bg-paper-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 shadow-xl text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center mx-auto text-stone-800 dark:text-stone-200">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-serif text-2xl font-medium text-stone-900 dark:text-stone-100">
              Admin Writing Studio
            </h2>
            <p className="text-xs font-sans text-stone-500 mt-1">
              Enter your PIN to manage diary writings. (Default: 1234)
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Enter PIN (e.g. 1234)"
              value={pinInput}
              onChange={(e) => setPinInput(e.target.value)}
              className="w-full text-center px-4 py-3 rounded-xl border border-stone-300 dark:border-stone-700 bg-paper-100 dark:bg-stone-950 text-stone-900 dark:text-stone-100 text-lg tracking-widest focus:outline-none"
            />
            {errorMsg && <p className="text-xs text-red-500">{errorMsg}</p>}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-950 font-sans text-sm font-medium hover:opacity-90 transition-all"
            >
              Unlock Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-16">
      
      {/* Admin Top Navigation */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-paper-100/70 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-xs">
            <Feather className="w-4 h-4" />
          </div>
          <div>
            <h2 className="font-serif text-lg font-medium text-stone-900 dark:text-stone-100">
              Writing Dashboard
            </h2>
            <span className="text-[10px] uppercase tracking-wider text-stone-500 font-sans">
              Private Diary Studio
            </span>
          </div>
        </div>

        {/* Tabs */}
        <nav className="flex flex-wrap items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-sans tracking-wide transition-all ${
                  isActive
                    ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-950 font-medium shadow-sm'
                    : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200/60 dark:hover:bg-stone-800'
                }`}
              >
                <item.icon className="w-3.5 h-3.5" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main Admin Content */}
      <div>{children}</div>

    </div>
  );
}
