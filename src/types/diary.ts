export type Category = 
  | "Micro Poems"
  | "Poems"
  | "Quotes"
  | "Stories"
  | "Love"
  | "Heartbreak"
  | "Life"
  | "Thoughts";

export type WritingStatus = "published" | "draft";

export interface Writing {
  id: string;
  title: string;
  slug: string;
  category: Category;
  content: string;
  excerpt: string;
  tags: string[];
  cover_image?: string;
  signature?: string;
  tagline?: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  status: WritingStatus;
  view_count: number;
  featured?: boolean;
}

export interface SiteSettings {
  signature_image: string;
  tagline: string;
  author_name: string;
  author_bio: string;
  writing_philosophy: string;
  contact_email: string;
  social_links: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
    pinterest?: string;
  };
  admin_pin: string;
}

export type AspectRatio = "1:1" | "4:5" | "9:16" | "16:9";

export type CardTheme = "paper" | "obsidian" | "sepia" | "crimson" | "indigo" | "slate";

export interface ShareCardConfig {
  aspectRatio: AspectRatio;
  theme: CardTheme;
  fontFamily: "serif" | "display" | "hindi" | "sans";
  textAlignment: "left" | "center" | "right";
  showSignature: boolean;
  showTagline: boolean;
  customTitle?: string;
}
