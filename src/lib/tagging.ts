import { Category } from '@/types/diary';

export const DEFAULT_TAG_POOL = [
  "poetry", "micro-poem", "love", "heartbreak", "one-sided-love", 
  "memories", "life", "sadness", "hope", "relationships", "emotions", 
  "healing", "solitude", "midnight-thoughts", "destiny", "silence",
  "hindi", "lines", "unspoken", "heartfelt", "philosophy"
];

export function detectCategory(title: string, content: string): Category {
  const combined = (title + " " + content).toLowerCase().trim();
  if (!combined) return "Poems";

  const charCount = content.trim().length;
  const lineCount = content.split('\n').filter(l => l.trim().length > 0).length;

  // 1. Life & Life Lessons (e.g. "The Lesson Life Teaches")
  const lifeKeywords = [
    "life", "lesson", "lessons", "teach", "teaches", "learn", "learned", "learning",
    "journey", "path", "destiny", "wisdom", "future", "growth", "purpose", "reality",
    "zindagi", "जिंदगी", "सीख", "सफर", "रास्ता", "सबक"
  ];
  if (lifeKeywords.some(kw => combined.includes(kw))) {
    return "Life";
  }

  // 2. Heartbreak
  const heartbreakKeywords = [
    "heartbreak", "broke", "broken", "tear", "tears", "pain", "goodbye", "hurt",
    "lost", "lonely", "alone", "sadness", "crying", "unrequited", "grief",
    "दर्द", "याद", "अधूरा", "जुदाई", "तन्हाई", "टूटा", "रोया", "गम", "अकेला"
  ];
  if (heartbreakKeywords.some(kw => combined.includes(kw))) {
    return "Heartbreak";
  }

  // 3. Love
  const loveKeywords = [
    "love", "heart", "soul", "romance", "forever", "beloved", "kiss", "passion",
    "प्यार", "इश्क", "मोहब्बत", "दिल", "आंखें", "दीवाना", "सपना", "हमसफर"
  ];
  if (loveKeywords.some(kw => combined.includes(kw))) {
    return "Love";
  }

  // 4. Micro Poems (Short text under ~180 chars with line breaks or micro keywords)
  if (charCount > 0 && charCount <= 180 && (lineCount >= 2 || combined.includes("micro"))) {
    return "Micro Poems";
  }

  // 5. Quotes (Short single statement, quotes around text, or quote keywords)
  if ((charCount > 0 && charCount <= 220 && lineCount <= 2) || combined.includes("quote") || content.trim().startsWith('"')) {
    return "Quotes";
  }

  // 6. Stories (Long form prose > 350 chars)
  if (charCount > 350) {
    return "Stories";
  }

  // 7. Thoughts
  const thoughtsKeywords = [
    "thought", "thoughts", "think", "thinking", "mind", "wonder", "silence",
    "feeling", "midnight", "unspoken", "soch", "सोच", "विचार", "खामोशी"
  ];
  if (thoughtsKeywords.some(kw => combined.includes(kw))) {
    return "Thoughts";
  }

  // 8. Poems (Multiple lines / stanzas)
  if (lineCount >= 3) {
    return "Poems";
  }

  return "Life";
}

export function generateSuggestedTags(title: string, content: string, category: string): string[] {
  const combined = (title + " " + content).toLowerCase();
  const tags = new Set<string>();

  // Category tags
  if (category === "Micro Poems") tags.add("micro-poem").add("poetry");
  if (category === "Poems") tags.add("poetry");
  if (category === "Quotes") tags.add("quote").add("thoughts");
  if (category === "Stories") tags.add("story").add("narrative");
  if (category === "Love") tags.add("love").add("romance");
  if (category === "Heartbreak") tags.add("heartbreak").add("pain");
  if (category === "Life") tags.add("life").add("philosophy");
  if (category === "Thoughts") tags.add("midnight-thoughts").add("emotions");

  // Language check (Devanagari range check)
  if (/[\u0900-\u097F]/.test(title + content)) {
    tags.add("hindi");
    tags.add("shayari");
  }

  // Keyword associations
  const dictionary: Record<string, string[]> = {
    love: ["love", "heart", "soul", "romance", "forever", "प्यार", "इश्क", "मोहब्बत", "दिल", "आंखें"],
    heartbreak: ["tear", "broke", "lost", "pain", "goodbye", "memory", "दर्द", "याद", "अधूरा", "जुदाई", "तन्हाई"],
    "one-sided-love": ["unrequited", "silent", "secret", "never told", "खामोश", "एकतरफा"],
    silence: ["quiet", "silent", "silence", "unspoken", "खामोशी", "सन्नाटा"],
    memories: ["remember", "yesterday", "passed", "past", "recollect", "यादें", "लम्हे"],
    solitude: ["alone", "lonely", "darkness", "midnight", "night", "अकेला", "रात"],
    healing: ["recover", "heal", "peace", "breath", "grow", "आगे बढ़ना", "सुकून"],
    hope: ["tomorrow", "sun", "light", "dream", "believe", "उम्मीद", "रोशनी"],
    relationships: ["you and me", "us", "together", "hand", "walk", "साथ", "तुम"],
  };

  for (const [tag, keywords] of Object.entries(dictionary)) {
    if (keywords.some(kw => combined.includes(kw))) {
      tags.add(tag);
    }
  }

  // Fallbacks if tags list is small
  if (tags.size === 0) {
    tags.add("emotions").add("thoughts");
  }

  return Array.from(tags).slice(0, 6);
}

