'use client';

import { useState, useEffect, useRef } from 'react';
import { SiteSettings } from '@/types/diary';
import { Upload, Image as ImageIcon, Trash2, RefreshCw, Check, AlertCircle, Sparkles, Feather } from 'lucide-react';

export default function SettingsPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Form states
  const [signatureImage, setSignatureImage] = useState('/signature.png');
  const [tagline, setTagline] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorBio, setAuthorBio] = useState('');
  const [philosophy, setPhilosophy] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/settings');
      const data = await res.json();
      if (data.success && data.data) {
        const s = data.data;
        setSettings(s);
        setSignatureImage(s.signature_image || '/signature.png');
        setTagline(s.tagline || '');
        setAuthorName(s.author_name || '');
        setAuthorBio(s.author_bio || '');
        setPhilosophy(s.writing_philosophy || '');
        setEmail(s.contact_email || '');
      }
    } catch (err) {
      console.error('Failed to load settings:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    setSaving(true);
    try {
      const res = await fetch('/api/upload-signature', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setSignatureImage(data.signature_url);
        setMsg({ type: 'success', text: 'Signature image uploaded and saved as default signature!' });
        setTimeout(() => setMsg(null), 3000);
      } else {
        setMsg({ type: 'error', text: data.error || 'Failed to upload signature' });
      }
    } catch (err: any) {
      setMsg({ type: 'error', text: err.message });
    } finally {
      setSaving(false);
    }
  };

  const handleRemoveSignature = async () => {
    if (!confirm('Are you sure you want to remove your default signature?')) return;
    setSignatureImage('');
    setMsg({ type: 'success', text: 'Signature image removed.' });
    setTimeout(() => setMsg(null), 3000);
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          signature_image: signatureImage,
          tagline,
          author_name: authorName,
          author_bio: authorBio,
          writing_philosophy: philosophy,
          contact_email: email,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setMsg({ type: 'success', text: 'Settings & Branding updated successfully!' });
        setTimeout(() => setMsg(null), 3000);
      } else {
        setMsg({ type: 'error', text: 'Failed to update settings.' });
      }
    } catch (err: any) {
      setMsg({ type: 'error', text: err.message });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="py-20 text-center font-serif italic text-stone-500">Loading settings...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto space-y-10 animate-fade-in">
      
      {/* Header */}
      <div className="border-b border-stone-200/80 dark:border-stone-800/80 pb-4">
        <h1 className="font-serif text-3xl font-medium text-stone-950 dark:text-stone-50">
          Default Signature & Site Settings
        </h1>
        <p className="text-xs font-sans text-stone-500 mt-1">
          Configure your personal signature image, automatic branding tagline, and writer bio.
        </p>
      </div>

      {msg && (
        <div className={`p-4 rounded-xl text-xs font-sans flex items-center gap-2 ${
          msg.type === 'success' ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300' : 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300'
        }`}>
          {msg.type === 'success' ? <Check className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
          {msg.text}
        </div>
      )}

      <form onSubmit={handleSaveSettings} className="space-y-8">
        
        {/* AUTOMATIC SIGNATURE IMAGE SECTION */}
        <div className="p-6 sm:p-8 rounded-3xl bg-paper-50 dark:bg-stone-900/40 border border-stone-200/90 dark:border-stone-800/80 shadow-sm space-y-6">
          
          <div className="flex items-center justify-between border-b border-stone-200/80 dark:border-stone-800/80 pb-4">
            <div>
              <h2 className="font-serif text-xl font-medium text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <Feather className="w-4 h-4 text-amber-500" />
                Default Signature
              </h2>
              <p className="text-xs font-sans text-stone-500">
                Your uploaded signature image will automatically appear at the bottom of every published post.
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 text-[10px] font-sans font-bold tracking-wider uppercase">
              Auto-Appended
            </span>
          </div>

          {/* Signature Preview */}
          <div className="space-y-3">
            <label className="block text-xs font-sans uppercase tracking-wider text-stone-500 font-semibold">
              Preview Signature
            </label>

            <div className="p-6 rounded-2xl bg-paper-100/60 dark:bg-stone-950/80 border border-dashed border-stone-300 dark:border-stone-700 flex flex-col items-center justify-center min-h-[120px]">
              {signatureImage ? (
                <div className="text-center space-y-2">
                  <img
                    src={signatureImage}
                    alt="Default Signature Preview"
                    className="h-16 w-auto max-w-[280px] object-contain filter drop-shadow-sm mx-auto"
                  />
                  <p className="text-[10px] font-sans text-green-600 dark:text-green-400 font-medium">
                    ✓ Active Default Signature Image
                  </p>
                </div>
              ) : (
                <div className="text-center text-stone-400 space-y-1">
                  <ImageIcon className="w-8 h-8 mx-auto opacity-50" />
                  <p className="text-xs font-sans">No signature image uploaded.</p>
                </div>
              )}
            </div>
          </div>

          {/* Upload / Replace / Remove Buttons */}
          <div className="flex flex-wrap gap-3">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept="image/*"
              className="hidden"
            />

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-950 text-xs font-sans font-medium hover:opacity-90 transition-all shadow-sm"
            >
              <Upload className="w-4 h-4" />
              {signatureImage ? 'Replace Signature' : 'Upload Signature'}
            </button>

            {signatureImage && (
              <button
                type="button"
                onClick={handleRemoveSignature}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-red-300 dark:border-red-900/60 text-red-700 dark:text-red-400 text-xs font-sans font-medium hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Remove Signature
              </button>
            )}
          </div>

        </div>

        {/* AUTOMATIC BRANDING TAGLINE SECTION */}
        <div className="p-6 sm:p-8 rounded-3xl bg-paper-50 dark:bg-stone-900/40 border border-stone-200/90 dark:border-stone-800/80 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <h2 className="font-serif text-xl font-medium text-stone-900 dark:text-stone-100">
              Automatic Tagline / Branding Text
            </h2>
          </div>
          <p className="text-xs font-sans text-stone-500">
            This tagline is automatically appended above your signature on every published writing.
          </p>

          <textarea
            rows={4}
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-stone-700 bg-paper-100/50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-sans text-sm leading-relaxed focus:outline-none"
          />
        </div>

        {/* AUTHOR BIO & PHILOSOPHY */}
        <div className="p-6 sm:p-8 rounded-3xl bg-paper-50 dark:bg-stone-900/40 border border-stone-200/90 dark:border-stone-800/80 shadow-sm space-y-4">
          <h2 className="font-serif text-xl font-medium text-stone-900 dark:text-stone-100">
            Writer Profile & Philosophy
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block text-xs font-sans uppercase tracking-wider text-stone-500 font-semibold">
                Author Name
              </label>
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-paper-100/50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 text-sm focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-sans uppercase tracking-wider text-stone-500 font-semibold">
                Contact Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-paper-100/50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 text-sm focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-sans uppercase tracking-wider text-stone-500 font-semibold">
              Short Writer Biography
            </label>
            <textarea
              rows={3}
              value={authorBio}
              onChange={(e) => setAuthorBio(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-paper-100/50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 text-xs font-sans focus:outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-sans uppercase tracking-wider text-stone-500 font-semibold">
              Writing Philosophy
            </label>
            <textarea
              rows={2}
              value={philosophy}
              onChange={(e) => setPhilosophy(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-paper-100/50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 text-xs font-serif italic focus:outline-none"
            />
          </div>
        </div>

        {/* DATABASE BACKUP & PERSISTENCE TOOLS */}
        <div className="p-6 sm:p-8 rounded-3xl bg-amber-500/10 border border-amber-500/20 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-amber-500/20 pb-3">
            <h2 className="font-serif text-xl font-medium text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              Database Backup & Cloud Persistence
            </h2>
            <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-800 dark:text-amber-300 text-[10px] font-sans font-bold tracking-wider uppercase">
              Data Safety
            </span>
          </div>
          
          <p className="text-xs font-sans text-stone-700 dark:text-stone-300 leading-relaxed">
            Your writings are automatically preserved in your browser's local memory on phone and computer. For zero-maintenance serverless persistence across all devices:
          </p>

          <div className="bg-paper-100/80 dark:bg-stone-950 p-4 rounded-xl border border-stone-200 dark:border-stone-800 space-y-2 text-xs font-sans text-stone-800 dark:text-stone-200">
            <p className="font-semibold text-amber-700 dark:text-amber-400">💡 Tip for Permanent Auto-Saving across all phones & devices:</p>
            <p className="text-stone-600 dark:text-stone-400">
              Add your <code className="bg-stone-200 dark:bg-stone-800 px-1.5 py-0.5 rounded text-amber-600 dark:text-amber-300">GITHUB_TOKEN</code> in Vercel Environment Variables. When present, every post created from your phone automatically commits back to GitHub!
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="button"
              onClick={async () => {
                try {
                  const res = await fetch('/api/writings?drafts=true');
                  const data = await res.json();
                  if (data.success) {
                    const blob = new Blob([JSON.stringify(data.data, null, 2)], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `digital_diary_backup_${new Date().toISOString().slice(0,10)}.json`;
                    a.click();
                  }
                } catch (e) {
                  alert('Error downloading backup: ' + e);
                }
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-950 text-xs font-sans font-medium hover:opacity-90 transition-all shadow-sm"
            >
              📥 Download Full JSON Backup (216+ Writings)
            </button>
          </div>
        </div>

        {/* Save Settings Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-stone-900 text-stone-50 dark:bg-amber-400 dark:text-stone-950 font-sans text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-all shadow-md"
          >
            <Check className="w-4 h-4" />
            {saving ? 'Saving Changes...' : 'Save Settings & Signature'}
          </button>
        </div>

      </form>

    </div>
  );
}
