import fs from 'fs';
import path from 'path';
import { Writing, SiteSettings } from '@/types/diary';

const DATA_DIR = path.join(process.cwd(), 'data');
const DB_FILE = path.join(DATA_DIR, 'diary.json');

export const DEFAULT_TAGLINE = `Tag someone special
क्योंकि कुछ एहसास कहे नहीं जाते — दिखा दिए जाते हैं।
May the right eyes read at the right time.`;

const DEFAULT_SETTINGS: SiteSettings = {
  signature_image: "/signature.png",
  tagline: DEFAULT_TAGLINE,
  author_name: "Aman",
  author_bio: "A quiet observer of human emotions, writing down thoughts, silence, unsaid words, and fragments of memories.",
  writing_philosophy: "Words become memories. Memories become stories. Stories become something someone else feels.",
  contact_email: "aman@diary.me",
  social_links: {
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
    pinterest: "https://pinterest.com"
  },
  admin_pin: "1234"
};

const SEED_WRITINGS: Writing[] = [
  {
    id: "post-1",
    title: "The Unsent Letter",
    slug: "the-unsent-letter",
    category: "Heartbreak",
    content: `I wrote your name on the margin of a book I never finished.
    
Some nights, I re-read the chapters we never got to live.
You became a song I listen to when nobody is watching,
a quiet echo in an empty corridor of my heart.

We didn't end with a battle or a storm;
we simply dissolved like morning mist—
leaving behind only damp grass and silence.`,
    excerpt: "I wrote your name on the margin of a book I never finished. Some nights, I re-read the chapters we never got to live...",
    tags: ["heartbreak", "memories", "silence", "poetry"],
    cover_image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
    status: "published",
    view_count: 342,
    created_at: "2026-09-10T14:30:00Z",
    updated_at: "2026-09-10T14:30:00Z",
    published_at: "2026-09-10T14:30:00Z",
    featured: true
  },
  {
    id: "post-2",
    title: "खामोश मोहब्बत",
    slug: "khamosh-mohabbat",
    category: "Love",
    content: `कुछ बातें होठों तक आकर रुक जाती हैं,
मानो हवा ने सांसों का रास्ता रोक लिया हो।

तुम पूछती हो हाल मेरा हर दफा,
और मैं मुस्कुरा कर कह देता हूँ—
"सब ठीक है..."

काश तुम समझ पातीं कि 'सब ठीक है' का मतलब
सिर्फ इतना होता है कि तुम आसपास हो।`,
    excerpt: "कुछ बातें होठों तक आकर रुक जाती हैं, मानो हवा ने सांसों का रास्ता रोक लिया हो...",
    tags: ["hindi", "love", "shayari", "unspoken"],
    status: "published",
    view_count: 512,
    created_at: "2026-09-12T18:20:00Z",
    updated_at: "2026-09-12T18:20:00Z",
    published_at: "2026-09-12T18:20:00Z",
    featured: true
  },
  {
    id: "post-3",
    title: "Fragments of Midnight",
    slug: "fragments-of-midnight",
    category: "Micro Poems",
    content: `You left,
and the clock forgot how to tick.

Now time is just a room
where I sit waiting for your shadow.`,
    excerpt: "You left, and the clock forgot how to tick...",
    tags: ["micro-poem", "solitude", "poetry"],
    status: "published",
    view_count: 189,
    created_at: "2026-09-14T23:15:00Z",
    updated_at: "2026-09-14T23:15:00Z",
    published_at: "2026-09-14T23:15:00Z",
    featured: false
  },
  {
    id: "post-4",
    title: "On Learning to Stay Still",
    slug: "on-learning-to-stay-still",
    category: "Life",
    content: `We spend half our lives running away from feelings we cannot name, only to realize that peace was never at the destination. It was in stopping long enough to feel the rain on our skin.

Sometimes the bravest thing you can do is not to fight the tide, but to float until the waters calm down.`,
    excerpt: "We spend half our lives running away from feelings we cannot name...",
    tags: ["life", "philosophy", "healing", "hope"],
    status: "published",
    view_count: 275,
    created_at: "2026-09-15T09:45:00Z",
    updated_at: "2026-09-15T09:45:00Z",
    published_at: "2026-09-15T09:45:00Z",
    featured: true
  },
  {
    id: "post-5",
    title: "The Art of Let Go",
    slug: "the-art-of-let-go",
    category: "Quotes",
    content: `Holding on to a ghost doesn't make it alive. It only makes you haunting your own home.`,
    excerpt: "Holding on to a ghost doesn't make it alive...",
    tags: ["quote", "healing", "heartbreak"],
    status: "published",
    view_count: 421,
    created_at: "2026-09-16T11:00:00Z",
    updated_at: "2026-09-16T11:00:00Z",
    published_at: "2026-09-16T11:00:00Z",
    featured: false
  },
  {
    id: "post-6",
    title: "A Railway Station at 3 AM",
    slug: "a-railway-station-at-3-am",
    category: "Stories",
    content: `The fog hung low over Platform 2. Tea smoke curled upward from a rusted brass kettle, carrying the rich scent of boiled cardamom and wet mud.

He sat on a cold wooden bench with a leather bag between his knees. Inside that bag was a letter he had spent three weeks trying to write, and a ticket to a city he had never seen.

When the train headlight finally pierced through the haze, he realized he wasn't running towards a new beginning—he was just trying to leave behind the sound of her voice saying goodbye.`,
    excerpt: "The fog hung low over Platform 2. Tea smoke curled upward from a rusted brass kettle...",
    tags: ["story", "memories", "solitude", "narrative"],
    cover_image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1200&auto=format&fit=crop",
    status: "published",
    view_count: 388,
    created_at: "2026-09-16T16:20:00Z",
    updated_at: "2026-09-16T16:20:00Z",
    published_at: "2026-09-16T16:20:00Z",
    featured: true
  },
  {
    id: "post-7",
    title: "अधूरा ख्वाब",
    slug: "adhura-khwaab",
    category: "Thoughts",
    content: `कभी-कभी सोचता हूँ कि अगर हम उस दिन मिले न होते,
तो क्या आज ये रातें इतनी खामोश होतीं?

शायद दर्द कम होता,
पर सुकून भी तो तुम्हारे साथ ही चला गया।`,
    excerpt: "कभी-कभी सोचता हूँ कि अगर हम उस दिन मिले न होते...",
    tags: ["hindi", "midnight-thoughts", "emotions"],
    status: "published",
    view_count: 295,
    created_at: "2026-09-17T02:10:00Z",
    updated_at: "2026-09-17T02:10:00Z",
    published_at: "2026-09-17T02:10:00Z",
    featured: false
  },
  {
    id: "post-8",
    title: "Whispers of Autumn",
    slug: "whispers-of-autumn",
    category: "Poems",
    content: `The leaves drop softly, without a sound,
A golden carpet upon the ground.
They do not fight the wind that blows,
They simply trust where the river flows.

Perhaps in letting go of green,
They find a beauty yet unseen.
And so must I, when seasons turn,
Unlearn the things I thought I'd learn.`,
    excerpt: "The leaves drop softly, without a sound, A golden carpet upon the ground...",
    tags: ["poetry", "life", "healing"],
    status: "published",
    view_count: 310,
    created_at: "2026-09-17T06:00:00Z",
    updated_at: "2026-09-17T06:00:00Z",
    published_at: "2026-09-17T06:00:00Z",
    featured: false
  }
];

interface DBData {
  writings: Writing[];
  settings: SiteSettings;
}

let memoryCache: DBData | null = null;

function ensureDB(): DBData {
  if (memoryCache) return memoryCache;

  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    if (fs.existsSync(DB_FILE)) {
      const content = fs.readFileSync(DB_FILE, 'utf-8');
      memoryCache = JSON.parse(content);
      return memoryCache!;
    }
  } catch (err) {
    console.warn("FileSystem database warning, falling back to memory:", err);
  }

  // Initial seed
  memoryCache = {
    writings: SEED_WRITINGS,
    settings: DEFAULT_SETTINGS
  };

  saveDB(memoryCache);
  return memoryCache;
}

function saveDB(data: DBData) {
  memoryCache = data;
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.warn("Unable to save DB to disk (likely serverless environment):", err);
  }
}

export function getAllWritings(includeDrafts = false): Writing[] {
  const db = ensureDB();
  let list = db.writings;
  if (!includeDrafts) {
    list = list.filter(w => w.status === 'published');
  }
  return list.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
}

export function getWritingBySlug(slug: string): Writing | null {
  const db = ensureDB();
  return db.writings.find(w => w.slug === slug) || null;
}

export function getWritingById(id: string): Writing | null {
  const db = ensureDB();
  return db.writings.find(w => w.id === id) || null;
}

export function incrementViewCount(id: string): void {
  const db = ensureDB();
  const writing = db.writings.find(w => w.id === id);
  if (writing) {
    writing.view_count = (writing.view_count || 0) + 1;
    saveDB(db);
  }
}

export function saveWriting(data: Partial<Writing> & { title: string; category: Writing['category']; content: string }): Writing {
  const db = ensureDB();
  const now = new Date().toISOString();

  let slug = data.slug || data.title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

  if (!slug) slug = `writing-${Date.now()}`;

  // Ensure unique slug if new
  if (!data.id) {
    let originalSlug = slug;
    let counter = 1;
    while (db.writings.some(w => w.slug === slug)) {
      slug = `${originalSlug}-${counter++}`;
    }
  }

  const excerpt = data.excerpt || data.content
    .replace(/\n+/g, ' ')
    .slice(0, 160) + (data.content.length > 160 ? '...' : '');

  if (data.id) {
    // Update
    const idx = db.writings.findIndex(w => w.id === data.id);
    if (idx !== -1) {
      const existing = db.writings[idx];
      const updated: Writing = {
        ...existing,
        ...data,
        slug: existing.slug, // preserve slug unless explicitly changed
        excerpt,
        updated_at: now,
      };
      db.writings[idx] = updated;
      saveDB(db);
      return updated;
    }
  }

  // Create new
  const newWriting: Writing = {
    id: `post-${Date.now()}`,
    title: data.title,
    slug,
    category: data.category,
    content: data.content,
    excerpt,
    tags: data.tags || [],
    cover_image: data.cover_image || undefined,
    status: data.status || "published",
    view_count: 0,
    created_at: now,
    updated_at: now,
    published_at: data.status === "published" ? now : "",
    featured: data.featured || false,
    signature: db.settings.signature_image,
    tagline: db.settings.tagline,
  };

  db.writings.unshift(newWriting);
  saveDB(db);
  return newWriting;
}

export function deleteWriting(id: string): boolean {
  const db = ensureDB();
  const initialLen = db.writings.length;
  db.writings = db.writings.filter(w => w.id !== id);
  if (db.writings.length !== initialLen) {
    saveDB(db);
    return true;
  }
  return false;
}

export function getSettings(): SiteSettings {
  const db = ensureDB();
  return db.settings;
}

export function updateSettings(newSettings: Partial<SiteSettings>): SiteSettings {
  const db = ensureDB();
  db.settings = {
    ...db.settings,
    ...newSettings
  };
  saveDB(db);
  return db.settings;
}
