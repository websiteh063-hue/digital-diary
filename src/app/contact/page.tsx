import { Mail, Instagram, Twitter, Facebook, Send } from 'lucide-react';
import { getSettings } from '@/lib/db';

export const revalidate = 0;

export default function ContactPage() {
  const settings = getSettings();

  return (
    <div className="max-w-2xl mx-auto space-y-12 pb-16 animate-fade-in">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-stone-300 dark:border-stone-800 text-stone-600 dark:text-stone-400 text-xs font-sans tracking-widest uppercase">
          <Mail className="w-3.5 h-3.5" />
          Connect
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl font-medium text-stone-950 dark:text-stone-50">
          Contact & Socials
        </h1>
        <p className="font-serif italic text-base sm:text-lg text-stone-600 dark:text-stone-400">
          If my words found a place in your heart, feel free to reach out.
        </p>
      </div>

      {/* Main Card */}
      <div className="p-8 sm:p-10 rounded-3xl bg-paper-50 dark:bg-stone-900/40 border border-stone-200/90 dark:border-stone-800/80 shadow-sm space-y-8 text-center">
        
        {/* Email */}
        <div className="space-y-2">
          <span className="text-xs uppercase font-sans tracking-widest text-stone-400 font-medium">Direct Email</span>
          <p className="font-serif text-2xl text-stone-900 dark:text-stone-100">
            <a href={`mailto:${settings.contact_email}`} className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors">
              {settings.contact_email}
            </a>
          </p>
        </div>

        {/* Social Links */}
        <div className="pt-6 border-t border-stone-200/80 dark:border-stone-800/80 space-y-4">
          <span className="text-xs uppercase font-sans tracking-widest text-stone-400 font-medium">Social Connections</span>
          
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            {settings.social_links.instagram && (
              <a
                href={settings.social_links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-stone-300 dark:border-stone-700 text-xs font-sans text-stone-800 dark:text-stone-200 hover:bg-stone-900 hover:text-stone-50 dark:hover:bg-stone-100 dark:hover:text-stone-950 transition-all"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            )}

            {settings.social_links.twitter && (
              <a
                href={settings.social_links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-stone-300 dark:border-stone-700 text-xs font-sans text-stone-800 dark:text-stone-200 hover:bg-stone-900 hover:text-stone-50 dark:hover:bg-stone-100 dark:hover:text-stone-950 transition-all"
              >
                <Twitter className="w-4 h-4" />
                X / Twitter
              </a>
            )}

            {settings.social_links.facebook && (
              <a
                href={settings.social_links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-stone-300 dark:border-stone-700 text-xs font-sans text-stone-800 dark:text-stone-200 hover:bg-stone-900 hover:text-stone-50 dark:hover:bg-stone-100 dark:hover:text-stone-950 transition-all"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </a>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
