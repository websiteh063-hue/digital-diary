export const DEFAULT_TAG_POOL = [
  "poetry", "micro-poem", "love", "heartbreak", "one-sided-love", 
  "memories", "life", "sadness", "hope", "relationships", "emotions", 
  "healing", "solitude", "midnight-thoughts", "destiny", "silence",
  "hindi", "lines", "unspoken", "heartfelt", "philosophy"
];

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
