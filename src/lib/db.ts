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
  author_bio: "A quiet observer of human emotions, writing down thoughts, silence, unsaid words, and romantic fragments of memories.",
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
  // 1. English Romantic Long Poem
  {
    id: "post-1",
    title: "Constellations in Your Eyes",
    slug: "constellations-in-your-eyes",
    category: "Love",
    content: `<p>I have searched through quiet galaxies and starry skies,<br/>Yet nothing shines quite like the light within your eyes.</p>
<p>When the world grows heavy and the night grows long,<br/>Your voice becomes my favorite quiet song.<br/>You hold my hands like sacred thread and gold,<br/>Writing stories that our hearts have never told.</p>
<blockquote>"In a universe of fading lights and passing storms,<br/>Your gentle arms remain my only home."</blockquote>
<p>Every soft breath you take beside me in the dusk,<br/>Carries the fragrance of jasmine, rain, and musk.<br/>We are two souls who found their way through rain,<br/>Finding joy in love and beauty beyond pain.</p>`,
    excerpt: "I have searched through quiet galaxies and starry skies, yet nothing shines quite like the light within your eyes...",
    tags: ["love", "romance", "poetry", "english", "soulmate"],
    cover_image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1200&auto=format&fit=crop",
    status: "published",
    view_count: 742,
    created_at: "2026-09-01T10:00:00Z",
    updated_at: "2026-09-01T10:00:00Z",
    published_at: "2026-09-01T10:00:00Z",
    featured: true
  },

  // 2. Hindi Romantic Long Poem (Devanagari)
  {
    id: "post-2",
    title: "तुम और मेरी ख़ामोश रातें",
    slug: "tum-aur-meri-khamosh-raaten",
    category: "Love",
    content: `<p>जब शाम ढलती है और चांद फलक पर आता है,<br/>तुम्हारा चेहरा मेरी आंखों के आगे मुस्कुराता है।</p>
<p>ना कोई शिकवा, ना कोई शिकायत है ज़माने से,<br/>मुझे तो इश्क़ हुआ है बस तुम्हारे मुस्कुराने से।<br/>तुम्हारी हँसी में छुपा है मेरा सारा जहान,<br/>तुम ही मेरी बंदगी हो, तुम ही मेरा इमान।</p>
<blockquote>"कुछ रिश्ते लफ़्ज़ों के मोहताज नहीं होते,<br/>जो दिल से जुड़े हों, वो कभी उदास नहीं होते।"</blockquote>
<p>हर सांस में तेरी खुशबू बिखरी सी लगती है,<br/>ये ज़िंदगी अब सिर्फ़ तेरी मोहब्बत में सजती है।</p>`,
    excerpt: "जब शाम ढलती है और चांद फलक पर आता है, तुम्हारा चेहरा मेरी आंखों के आगे मुस्कुराता है...",
    tags: ["hindi", "love", "shayari", "poetry", "romantic"],
    status: "published",
    view_count: 819,
    created_at: "2026-09-02T14:20:00Z",
    updated_at: "2026-09-02T14:20:00Z",
    published_at: "2026-09-02T14:20:00Z",
    featured: true
  },

  // 3. Hinglish Romantic Long Poem
  {
    id: "post-3",
    title: "Tere Sath Gujri Woh Har Ek Sham",
    slug: "tere-sath-gujri-woh-har-ek-sham",
    category: "Love",
    content: `<p>Tum jab paas hote ho toh waqt tham sa jata hai,<br/>Dil ka har ek taar bas tumhare geet gata hai.</p>
<p>Chahe kitni bhi dooriyan ho hamare darmiyan,<br/>Mere har khwab mein bas tera hi naam aata hai.<br/>Teri zulfon ki chhaon mein thoda sa sukoon hai,<br/>Tujhe behad chahna bas mera ek junoon hai.</p>
<blockquote>"Log kehte hain mohabbat ek baar hoti hai,<br/>Par mujhe toh har roz bas tumse hi hoti hai."</blockquote>
<p>Har baar jab tum muskura kar mujhe dekhte ho,<br/>Meri duniya wahan hi mehak uthti hai.</p>`,
    excerpt: "Tum jab paas hote ho toh waqt tham sa jata hai, dil ka har ek taar bas tumhare geet gata hai...",
    tags: ["hinglish", "love", "romance", "poetry", "dil-se"],
    status: "published",
    view_count: 654,
    created_at: "2026-09-03T18:30:00Z",
    updated_at: "2026-09-03T18:30:00Z",
    published_at: "2026-09-03T18:30:00Z",
    featured: true
  },

  // 4. English Love Quote
  {
    id: "post-4",
    title: "The Physics of Falling for You",
    slug: "the-physics-of-falling-for-you",
    category: "Quotes",
    content: `<p>If I had a single flower for every time I thought of you, I could walk through my garden forever.</p>
<blockquote>"You are my dynamic constant in a world full of unpredictable variables."</blockquote>`,
    excerpt: "If I had a single flower for every time I thought of you, I could walk through my garden forever...",
    tags: ["quote", "love", "english", "romantic"],
    status: "published",
    view_count: 489,
    created_at: "2026-09-04T09:15:00Z",
    updated_at: "2026-09-04T09:15:00Z",
    published_at: "2026-09-04T09:15:00Z",
    featured: false
  },

  // 5. Hindi Love Quote (Devanagari)
  {
    id: "post-5",
    title: "इश्क़ का साया",
    slug: "ishq-ka-saaya",
    category: "Quotes",
    content: `<p>मोहब्बत कोई वजह नहीं ढूंढती,<br/>मोहब्बत तो वो एहसास है जो बिना कहे सब समझ लेती है।</p>
<blockquote>"तेरी मौजूदगी ही मेरी हर ख़ुशी की वजह है।"</blockquote>`,
    excerpt: "मोहब्बत कोई वजह नहीं ढूंढती, मोहब्बत तो वो एहसास है जो बिना कहे सब समझ लेती है...",
    tags: ["hindi", "quote", "love", "feeling"],
    status: "published",
    view_count: 532,
    created_at: "2026-09-04T12:00:00Z",
    updated_at: "2026-09-04T12:00:00Z",
    published_at: "2026-09-04T12:00:00Z",
    featured: false
  },

  // 6. Hinglish Love Quote
  {
    id: "post-6",
    title: "Mere Dil Ki Har Ek Dhadkan",
    slug: "mere-dil-ki-har-ek-dhadkan",
    category: "Quotes",
    content: `<p>Tumhare sath chalna hi meri sabse khoobsurat manzil hai.</p>
<blockquote>"Tere muskuraney se shuru aur tere khayalon pe khatam... Aisi hi toh hai meri chhoti si duniya."</blockquote>`,
    excerpt: "Tumhare sath chalna hi meri sabse khoobsurat manzil hai...",
    tags: ["hinglish", "quote", "romance", "love-lines"],
    status: "published",
    view_count: 610,
    created_at: "2026-09-05T15:45:00Z",
    updated_at: "2026-09-05T15:45:00Z",
    published_at: "2026-09-05T15:45:00Z",
    featured: false
  },

  // 7. English Micro Poem
  {
    id: "post-7",
    title: "Silent Symphony",
    slug: "silent-symphony",
    category: "Micro Poems",
    content: `<p>Your breath against my collarbone,<br/>The quietest song I've ever known.</p>`,
    excerpt: "Your breath against my collarbone, the quietest song I've ever known...",
    tags: ["micro-poem", "love", "english", "tender"],
    status: "published",
    view_count: 320,
    created_at: "2026-09-05T20:10:00Z",
    updated_at: "2026-09-05T20:10:00Z",
    published_at: "2026-09-05T20:10:00Z",
    featured: false
  },

  // 8. Hindi Micro Poem
  {
    id: "post-8",
    title: "तेरा लम्स",
    slug: "tera-lams",
    category: "Micro Poems",
    content: `<p>तेरा एक छूना ही काफ़ी था,<br/>मेरी रूह के सारे ज़ख्म भरने के लिए।</p>`,
    excerpt: "तेरा एक छूना ही काफ़ी था, मेरी रूह के सारे ज़ख्म भरने के लिए...",
    tags: ["hindi", "micro-poem", "love", "touch"],
    status: "published",
    view_count: 415,
    created_at: "2026-09-06T08:00:00Z",
    updated_at: "2026-09-06T08:00:00Z",
    published_at: "2026-09-06T08:00:00Z",
    featured: false
  },

  // 9. Hinglish Micro Poem
  {
    id: "post-9",
    title: "Chhoti Si Khwahish",
    slug: "chhoti-si-khwahish",
    category: "Micro Poems",
    content: `<p>Bas ek shaam ho aur tum sath ho,<br/>Hathon mein tera haath aur dher saari baat ho.</p>`,
    excerpt: "Bas ek shaam ho aur tum sath ho, hathon mein tera haath aur dher saari baat ho...",
    tags: ["hinglish", "micro-poem", "desire", "romance"],
    status: "published",
    view_count: 590,
    created_at: "2026-09-06T11:20:00Z",
    updated_at: "2026-09-06T11:20:00Z",
    published_at: "2026-09-06T11:20:00Z",
    featured: false
  },

  // 10. English Long Poem
  {
    id: "post-10",
    title: "When Rain Met Romance",
    slug: "when-rain-met-romance",
    category: "Poems",
    content: `<p>The clouds rolled in with silver grace,<br/>And raindrops danced upon your face.<br/>I watched you laugh beneath the storm,<br/>Where cold winds made our refuge warm.</p>
<p>We shared an umbrella under the tree,<br/>Where all the world belonged to we.<br/>No words were spoken, none were required,<br/>For in your gaze, my soul transpired.</p>
<blockquote>"Some love affairs are written in gold,<br/>Ours was written in rain drops and moments retold."</blockquote>
<p>Hold my hand till the clouds clear away,<br/>And let me stay in your heart every day.</p>`,
    excerpt: "The clouds rolled in with silver grace, and raindrops danced upon your face...",
    tags: ["poetry", "rain", "romance", "english"],
    cover_image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=1200&auto=format&fit=crop",
    status: "published",
    view_count: 670,
    created_at: "2026-09-06T16:00:00Z",
    updated_at: "2026-09-06T16:00:00Z",
    published_at: "2026-09-06T16:00:00Z",
    featured: true
  },

  // 11. Hindi Long Poem
  {
    id: "post-11",
    title: "इश्क़ की पहली बारिश",
    slug: "ishq-ki-pehli-baarish",
    category: "Poems",
    content: `<p>पहली बारिश की बूंदों की तरह हो तुम,<br/>जो सूखी ज़मीन को भी सांस दे जाती हैं।</p>
<p>तेरी हँसी में वो मिठास है,<br/>जो मेरे हर ग़म को भुला जाती है।<br/>जब तुम पास आती हो तो लगता है,<br/>जैसे कोई पुरानी दुआ कुबूल हो गई हो।</p>
<blockquote>"मोहब्बत में रंग चढ़ने लगा है तेरा,<br/>अब हर लम्हा सिर्फ़ नाम लेता है तेरा।"</blockquote>
<p>आओ मिलकर एक ऐसी दुनिया बनाएं,<br/>जहाँ सिर्फ़ तुम, मैं और हमारी मोहब्बत हो।</p>`,
    excerpt: "पहली बारिश की बूंदों की तरह हो तुम, जो सूखी ज़मीन को भी सांस दे जाती हैं...",
    tags: ["hindi", "poetry", "barish", "ishq"],
    status: "published",
    view_count: 730,
    created_at: "2026-09-07T09:30:00Z",
    updated_at: "2026-09-07T09:30:00Z",
    published_at: "2026-09-07T09:30:00Z",
    featured: false
  },

  // 12. Hinglish Long Poem
  {
    id: "post-12",
    title: "Tum Mere Paas Raho Na",
    slug: "tum-mere-paas-raho-na",
    category: "Poems",
    content: `<p>Jab raat gehri ho aur khamoshi cha jaye,<br/>Tumhari yaadon ki khushbu fizao mein simat aaye.</p>
<p>Mai kitna bhi bhoolna chahoon is duniya ko,<br/>Tera chehra meri aankhon ke aage muskuraye.<br/>Dil chahta hai bass ruk jaun wahan hi,<br/>Jahan tera haath mere haath mein ho.</p>
<blockquote>"Chahe zindagii kitni bhi mushkil kyun na ho,<br/>Tera sath ho toh har rasta aasan lagta hai."</blockquote>
<p>Tum mere paas raho na hamesha ke liye.</p>`,
    excerpt: "Jab raat gehri ho aur khamoshi cha jaye, tumhari yaadon ki khushbu fizao mein simat aaye...",
    tags: ["hinglish", "poetry", "love-poem", "dil-ki-baat"],
    status: "published",
    view_count: 640,
    created_at: "2026-09-07T14:15:00Z",
    updated_at: "2026-09-07T14:15:00Z",
    published_at: "2026-09-07T14:15:00Z",
    featured: false
  },

  // 13. English Romantic Story
  {
    id: "post-13",
    title: "Coffee Cups and Unspoken Vows",
    slug: "coffee-cups-and-unspoken-vows",
    category: "Stories",
    content: `<p>We met at a small corner cafe when the rain was pouring outside. You were reading a vintage book with worn yellow pages, and I was trying to write a poem that refused to come together.</p>
<p>When you spilled a drop of coffee on your sleeve and laughed at your own clumsiness, I realized that some moments don't need perfection—they just need your presence.</p>
<blockquote>"That afternoon, over two warm mugs of cappuccino, I gave you my heart without saying a single word."</blockquote>
<p>Three years later, every morning still feels like that gentle rainy afternoon in September.</p>`,
    excerpt: "We met at a small corner cafe when the rain was pouring outside. You were reading a vintage book...",
    tags: ["story", "coffee", "romance", "meet-cute"],
    cover_image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop",
    status: "published",
    view_count: 890,
    created_at: "2026-09-07T19:00:00Z",
    updated_at: "2026-09-07T19:00:00Z",
    published_at: "2026-09-07T19:00:00Z",
    featured: true
  },

  // 14. Hindi Romantic Story
  {
    id: "post-14",
    title: "चाय का वो आखिरी घूंट",
    slug: "chai-ka-woh-aakhri-ghoont",
    category: "Stories",
    content: `<p>सर्दी की गुलाबी शाम थी। हम दोनों टपरी पर खड़े कुल्हड़ की चाय पी रहे थे। हाथ ठंड से ठिठुर रहे थे, पर दिल में एक अजीब सी गर्माहट थी।</p>
<p>जब उसने अपनी चाय ख़त्म करके मुस्कुराते हुए मुझे देखा, तो मुझे लगा कि पूरी कायनात ठहर गई है। उसने कहा— "अगली चाय भी तुम्हारे साथ ही पीनी है।"</p>
<blockquote>"बस उसी एक छोटी सी बात में मेरी पूरी उम्र सिमट गई थी।"</blockquote>`,
    excerpt: "सर्दी की गुलाबी शाम थी। हम दोनों टपरी पर खड़े कुल्हड़ की चाय पी रहे थे...",
    tags: ["hindi", "story", "chai", "romance"],
    status: "published",
    view_count: 760,
    created_at: "2026-09-08T08:45:00Z",
    updated_at: "2026-09-08T08:45:00Z",
    published_at: "2026-09-08T08:45:00Z",
    featured: false
  },

  // 15. Hinglish Romantic Story
  {
    id: "post-15",
    title: "Woh Pehli Mulaqat Ka Magic",
    slug: "woh-pehli-mulaqat-ka-magic",
    category: "Stories",
    content: `<p>Woh dost ki birthday party thi jahan hum pehli baar mile the. Shor bohot tha, par jab tumne mud kar dekha, toh baki sab blurred ho gaya.</p>
<p>Tumne purple kurti pehni thi aur aakhon mein thoda sa kajal tha. Humne shaam bhar bas dher saari baatein ki, jaise hum ek dusre ko barso se jaante hon.</p>
<blockquote>"Kuch log aise milte hain jaise purane adhoore khwab poore hone aaye hon."</blockquote>`,
    excerpt: "Woh dost ki birthday party thi jahan hum pehli baar mile the. Shor bohot tha, par...",
    tags: ["hinglish", "story", "pehli-mulaqat", "magic"],
    status: "published",
    view_count: 810,
    created_at: "2026-09-08T13:20:00Z",
    updated_at: "2026-09-08T13:20:00Z",
    published_at: "2026-09-08T13:20:00Z",
    featured: false
  },

  // 16. English Love Poem
  {
    id: "post-16",
    title: "An Ode to Your Smile",
    slug: "an-ode-to-your-smile",
    category: "Love",
    content: `<p>Your smile is a quiet sunrise after a prolonged dark storm,<br/>A touch that keeps my restless heart protected, safe, and warm.</p>
<p>I find in you the beauty of the things I could not see,<br/>The poetry of passion that brings out the best in me.</p>
<blockquote>"If forever is a promise made of moments soft and true,<br/>I want to spend each breath of it holding close to you."</blockquote>`,
    excerpt: "Your smile is a quiet sunrise after a prolonged dark storm, a touch that keeps my restless heart...",
    tags: ["love", "poetry", "ode", "english"],
    status: "published",
    view_count: 520,
    created_at: "2026-09-08T18:00:00Z",
    updated_at: "2026-09-08T18:00:00Z",
    published_at: "2026-09-08T18:00:00Z",
    featured: false
  },

  // 17. Hindi Love Poem
  {
    id: "post-17",
    title: "तेरी आँखों का जादू",
    slug: "teri-aankhon-ka-jaadu",
    category: "Love",
    content: `<p>तेरी आँखों में डूब जाने को दिल चाहता है,<br/>तेरी ज़ुल्फ़ों की छांव में सो जाने को दिल चाहता है।</p>
<p>तू वो गज़ल है जिसे मैं ता-उम्र गाता रहूँ,<br/>तेरे लम्स में अपनी पहचान भूल जाने को दिल चाहता है।</p>
<blockquote>"तुम हो तो दुनिया हसीन लगती है,<br/>वरना हर रात उदास और तन्हा लगती है।"</blockquote>`,
    excerpt: "तेरी आँखों में डूब जाने को दिल चाहता है, तेरी ज़ुल्फ़ों की छांव में सो जाने को दिल चाहता है...",
    tags: ["hindi", "love", "aankhen", "shayari"],
    status: "published",
    view_count: 690,
    created_at: "2026-09-09T07:30:00Z",
    updated_at: "2026-09-09T07:30:00Z",
    published_at: "2026-09-09T07:30:00Z",
    featured: false
  },

  // 18. Hinglish Love Poem
  {
    id: "post-18",
    title: "Tu Meri Zindagi Ka Noor Hai",
    slug: "tu-meri-zindagi-ka-noor-hai",
    category: "Love",
    content: `<p>Har roz subah jab meri aankhein khulti hain,<br/>Dil mein bass ek tera hi khayal hota hai.</p>
<p>Kaise bataun ki kitna pyar karta hoon tumse,<br/>Mera har alfaaz bass tere aage kam pad jata hai.</p>
<blockquote>"Tu paas hai toh har lamha ek jashn hai,<br/>Tu nahi toh poora shehar bhi suna lagta hai."</blockquote>`,
    excerpt: "Har roz subah jab meri aankhein khulti hain, dil mein bass ek tera hi khayal hota hai...",
    tags: ["hinglish", "love", "noor", "dil-se"],
    status: "published",
    view_count: 615,
    created_at: "2026-09-09T11:50:00Z",
    updated_at: "2026-09-09T11:50:00Z",
    published_at: "2026-09-09T11:50:00Z",
    featured: false
  },

  // 19. English Heartbreak / Longing
  {
    id: "post-19",
    title: "The Unsent Letter",
    slug: "the-unsent-letter",
    category: "Heartbreak",
    content: `<p>I wrote your name on the margin of a book I never finished.</p>
<p>Some nights, I re-read the chapters we never got to live.<br/>You became a song I listen to when nobody is watching,<br/>a quiet echo in an empty corridor of my heart.</p>
<blockquote>"We didn't end with a battle or a storm;<br/>we simply dissolved like morning mist—leaving behind only damp grass and silence."</blockquote>`,
    excerpt: "I wrote your name on the margin of a book I never finished. Some nights, I re-read the chapters we never got to live...",
    tags: ["heartbreak", "memories", "silence", "poetry"],
    cover_image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
    status: "published",
    view_count: 940,
    created_at: "2026-09-10T14:30:00Z",
    updated_at: "2026-09-10T14:30:00Z",
    published_at: "2026-09-10T14:30:00Z",
    featured: true
  },

  // 20. Hindi Heartbreak
  {
    id: "post-20",
    title: "अधूरा अफ़साना",
    slug: "adhura-afsana",
    category: "Heartbreak",
    content: `<p>कुछ रास्ते बीच में ही छूट जाते हैं,<br/>और कुछ मुसाफ़िर दिल में हमेशा के लिए बस जाते हैं।</p>
<p>तेरा ना होना भी अब तेरी याद दिलाता है,<br/>ये शहर तेरी ख़ामोशी से महकता है।</p>
<blockquote>"इश्क़ अधूरा रह गया तो क्या हुआ,<br/>एहसास तो आज भी पूरा है।"</blockquote>`,
    excerpt: "कुछ रास्ते बीच में ही छूट जाते हैं, और कुछ मुसाफ़िर दिल में हमेशा के लिए बस जाते हैं...",
    tags: ["hindi", "heartbreak", "yaadein", "dard"],
    status: "published",
    view_count: 780,
    created_at: "2026-09-10T18:10:00Z",
    updated_at: "2026-09-10T18:10:00Z",
    published_at: "2026-09-10T18:10:00Z",
    featured: false
  },

  // 21. Hinglish Heartbreak
  {
    id: "post-21",
    title: "Yaadon Ka Silsila",
    slug: "yaadon-ka-silsila",
    category: "Heartbreak",
    content: `<p>Raat bhar baarishein hoti rahi aur mai tera naam likhta raha.</p>
<p>Pata nahi kyun ab bhi jab purane songs sunta hoon,<br/>Toh bas tera hi chehra samne aata hai.</p>
<blockquote>"Kuch riste door hone ke baad bhi kabhi khatam nahi hote."</blockquote>`,
    excerpt: "Raat bhar baarishein hoti rahi aur mai tera naam likhta raha. Pata nahi kyun...",
    tags: ["hinglish", "heartbreak", "rain", "remembering"],
    status: "published",
    view_count: 570,
    created_at: "2026-09-11T09:40:00Z",
    updated_at: "2026-09-11T09:40:00Z",
    published_at: "2026-09-11T09:40:00Z",
    featured: false
  },

  // 22. English Love Poem
  {
    id: "post-22",
    title: "Written in the Stars",
    slug: "written-in-the-stars",
    category: "Love",
    content: `<p>Before I knew your name, my soul knew your rhythm.<br/>Before I touched your hand, my heart felt your pulse.</p>
<p>You are the quiet poetry in a noisy world,<br/>The gentle stillness after a long chaotic day.</p>
<blockquote>"I loved you yesterday, I love you still,<br/>I always have, I always will."</blockquote>`,
    excerpt: "Before I knew your name, my soul knew your rhythm. Before I touched your hand...",
    tags: ["love", "poetry", "forever", "english"],
    status: "published",
    view_count: 685,
    created_at: "2026-09-11T13:00:00Z",
    updated_at: "2026-09-11T13:00:00Z",
    published_at: "2026-09-11T13:00:00Z",
    featured: false
  },

  // 23. Hindi Love Poem
  {
    id: "post-23",
    title: "इश्क़ की मिठास",
    slug: "ishq-ki-mithaas",
    category: "Love",
    content: `<p>तेरी एक झलक से दिन संवर जाता है,<br/>तेरी एक मुस्कान से दिल झूम जाता है।</p>
<p>क्या जादू है तेरी इन नशीली आँखों में,<br/>जो देखता है बस तेरा ही हो जाता है।</p>
<blockquote>"तुम मेरी वो ख़ुशी हो जो मैं किसी से बांट नहीं सकता।"</blockquote>`,
    excerpt: "तेरी एक झलक से दिन संवर जाता है, तेरी एक मुस्कान से दिल झूम जाता है...",
    tags: ["hindi", "love", "muskaan", "shayari"],
    status: "published",
    view_count: 720,
    created_at: "2026-09-11T17:30:00Z",
    updated_at: "2026-09-11T17:30:00Z",
    published_at: "2026-09-11T17:30:00Z",
    featured: false
  },

  // 24. Hinglish Love Poem
  {
    id: "post-24",
    title: "Tum Aur Main",
    slug: "tum-aur-main",
    category: "Love",
    content: `<p>Ek pyari si shaam, thandi hawa aur tumhara haath mere haath mein.</p>
<p>Bas itna hi toh chahiye mujhe is zindagi se.<br/>Baki sab toh bass aane jaane wale mausam hain.</p>
<blockquote>"Tera sath hi mera sabse khoobsurat tohfa hai."</blockquote>`,
    excerpt: "Ek pyari si shaam, thandi hawa aur tumhara haath mere haath mein...",
    tags: ["hinglish", "love", "romantic-moments"],
    status: "published",
    view_count: 630,
    created_at: "2026-09-12T10:15:00Z",
    updated_at: "2026-09-12T10:15:00Z",
    published_at: "2026-09-12T10:15:00Z",
    featured: false
  },

  // 25. English Quote
  {
    id: "post-25",
    title: "Forever Is a Place",
    slug: "forever-is-a-place",
    category: "Quotes",
    content: `<p>Forever is not a measure of time, but a sanctuary built by two souls in love.</p>
<blockquote>"Home is not four walls; home is wherever you smile at me."</blockquote>`,
    excerpt: "Forever is not a measure of time, but a sanctuary built by two souls in love...",
    tags: ["quote", "love", "home", "english"],
    status: "published",
    view_count: 510,
    created_at: "2026-09-12T14:40:00Z",
    updated_at: "2026-09-12T14:40:00Z",
    published_at: "2026-09-12T14:40:00Z",
    featured: false
  },

  // 26. Hindi Quote
  {
    id: "post-26",
    title: "सच्ची मोहब्बत",
    slug: "sacchi-mohabbat",
    category: "Quotes",
    content: `<p>सच्ची मोहब्बत वो नहीं जो दूरियों में खत्म हो जाए,<br/>सच्ची मोहब्बत तो वो है जो फासलों में और गहरी हो जाए।</p>
<blockquote>"तेरा ख्याल ही मेरी सबसे बड़ी दौलत है।"</blockquote>`,
    excerpt: "सच्ची मोहब्बत वो नहीं जो दूरियों में खत्म हो जाए, सच्ची मोहब्बत तो वो है...",
    tags: ["hindi", "quote", "mohabbat"],
    status: "published",
    view_count: 670,
    created_at: "2026-09-12T18:00:00Z",
    updated_at: "2026-09-12T18:00:00Z",
    published_at: "2026-09-12T18:00:00Z",
    featured: false
  },

  // 27. Hinglish Quote
  {
    id: "post-27",
    title: "Tera Muskurana",
    slug: "tera-muskurana",
    category: "Quotes",
    content: `<p>Jab tum muskura kar meri taraf dekhte ho, toh mere sare dard gayab ho jate hain.</p>
<blockquote>"Teri khushi hi meri sabse badi khwahish hai."</blockquote>`,
    excerpt: "Jab tum muskura kar meri taraf dekhte ho, toh mere sare dard gayab ho jate hain...",
    tags: ["hinglish", "quote", "muskaan"],
    status: "published",
    view_count: 580,
    created_at: "2026-09-13T08:20:00Z",
    updated_at: "2026-09-13T08:20:00Z",
    published_at: "2026-09-13T08:20:00Z",
    featured: false
  },

  // 28. English Micro Poem
  {
    id: "post-28",
    title: "Whispers in the Dark",
    slug: "whispers-in-the-dark",
    category: "Micro Poems",
    content: `<p>You whispered my name in the dark,<br/>And lit an eternal spark.</p>`,
    excerpt: "You whispered my name in the dark, and lit an eternal spark...",
    tags: ["micro-poem", "spark", "love"],
    status: "published",
    view_count: 430,
    created_at: "2026-09-13T12:00:00Z",
    updated_at: "2026-09-13T12:00:00Z",
    published_at: "2026-09-13T12:00:00Z",
    featured: false
  },

  // 29. Hindi Micro Poem
  {
    id: "post-29",
    title: "चांदनी रात",
    slug: "chaandni-raat",
    category: "Micro Poems",
    content: `<p>चांद भी आज रश्क करता है तुम पर,<br/>कि तुम उससे भी ज़्यादा खूबसूरत लगती हो।</p>`,
    excerpt: "चांद भी आज रश्क करता है तुम पर, कि तुम उससे भी ज़्यादा खूबसूरत लगती हो...",
    tags: ["hindi", "micro-poem", "chand"],
    status: "published",
    view_count: 560,
    created_at: "2026-09-13T15:30:00Z",
    updated_at: "2026-09-13T15:30:00Z",
    published_at: "2026-09-13T15:30:00Z",
    featured: false
  },

  // 30. Hinglish Micro Poem
  {
    id: "post-30",
    title: "Teri Aahat",
    slug: "teri-aahat",
    category: "Micro Poems",
    content: `<p>Teri aahat se hi mehak uthti hai meri hawa,<br/>Tu mera rog hai aur tu hi meri dawa.</p>`,
    excerpt: "Teri aahat se hi mehak uthti hai meri hawa, tu mera rog hai aur tu hi meri dawa...",
    tags: ["hinglish", "micro-poem", "aahat"],
    status: "published",
    view_count: 620,
    created_at: "2026-09-13T19:10:00Z",
    updated_at: "2026-09-13T19:10:00Z",
    published_at: "2026-09-13T19:10:00Z",
    featured: false
  },

  // 31. English Long Poem
  {
    id: "post-31",
    title: "Symphony of Two Hearts",
    slug: "symphony-of-two-hearts",
    category: "Poems",
    content: `<p>We walked along the silver shore,<br/>Where waves sang legends of old lore.</p>
<p>My hand in yours, the warm night breeze,<br/>Bringing our wandering hearts to ease.<br/>I saw the sunrise in your eyes,<br/>Stripped of all masks and all disguise.</p>
<blockquote>"To love you is to breathe the spring,<br/>To hear the song that angels sing."</blockquote>
<p>And when tomorrow turns to yesterday,<br/>My love for you will forever stay.</p>`,
    excerpt: "We walked along the silver shore, where waves sang legends of old lore...",
    tags: ["poetry", "symphony", "love-poem", "english"],
    cover_image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    status: "published",
    view_count: 750,
    created_at: "2026-09-14T09:00:00Z",
    updated_at: "2026-09-14T09:00:00Z",
    published_at: "2026-09-14T09:00:00Z",
    featured: true
  },

  // 32. Hindi Long Poem
  {
    id: "post-32",
    title: "तेरे नाम का चिराग़",
    slug: "tere-naam-ka-chiraag",
    category: "Poems",
    content: `<p>हर शाम जलाता हूँ तेरे नाम का चिराग़,<br/>कि रौशन रहे मेरी तन्हाई का ये बाग़।</p>
<p>तेरी यादों का इत्र बिखर जाता है सांसों में,<br/>जब भी तेरा नाम आता है इन लफ़्ज़ों में।<br/>तू दूर सही पर दिल के सबसे करीब है,<br/>तेरा प्यार ही मेरा सबसे बड़ा नसीब है।</p>
<blockquote>"कोई शिकवा नहीं कि तू पास नहीं,<br/>तेरा एहसास ही मेरे लिए बेहद खास है।"</blockquote>`,
    excerpt: "हर शाम जलाता हूँ तेरे नाम का चिराग़, कि रौशन रहे मेरी तन्हाई का ये बाग़...",
    tags: ["hindi", "poetry", "chiraag", "shambhakti"],
    status: "published",
    view_count: 810,
    created_at: "2026-09-14T13:40:00Z",
    updated_at: "2026-09-14T13:40:00Z",
    published_at: "2026-09-14T13:40:00Z",
    featured: false
  },

  // 33. Hinglish Long Poem
  {
    id: "post-33",
    title: "Zindagi Ki Kitab Mein Tum",
    slug: "zindagi-ki-kitab-mein-tum",
    category: "Poems",
    content: `<p>Meri zindagi ki kitab ke har panno pe tera hi zikr hai,<br/>Tu mera gujra hua kal aur aane wala kal hai.</p>
<p>Mai chahe kitna bhi likhun tumhare bare mein,<br/>Lagta hai abhi bohot kuch kehna baki hai.<br/>Tera ek baar muskura kar dekhna hi,<br/>Mere sare gham ko mitane ke liye kafi hai.</p>
<blockquote>"Tujhse shuru aur tujhpe khatam mera safar hai."</blockquote>`,
    excerpt: "Meri zindagi ki kitab ke har panno pe tera hi zikr hai, tu mera gujra hua kal...",
    tags: ["hinglish", "poetry", "kitab", "romantic"],
    status: "published",
    view_count: 730,
    created_at: "2026-09-14T18:15:00Z",
    updated_at: "2026-09-14T18:15:00Z",
    published_at: "2026-09-14T18:15:00Z",
    featured: false
  },

  // 34. English Love Poem
  {
    id: "post-34",
    title: "Eternal Promise",
    slug: "eternal-promise",
    category: "Love",
    content: `<p>I promise to love you when the sun rises high,<br/>And when shadow falls low across the twilight sky.</p>
<p>Through every laughter, through every tear,<br/>I will hold you close, eliminating every fear.</p>
<blockquote>"You are my today and all of my tomorrows."</blockquote>`,
    excerpt: "I promise to love you when the sun rises high, and when shadow falls low...",
    tags: ["love", "promise", "romantic", "english"],
    status: "published",
    view_count: 640,
    created_at: "2026-09-15T08:00:00Z",
    updated_at: "2026-09-15T08:00:00Z",
    published_at: "2026-09-15T08:00:00Z",
    featured: false
  },

  // 35. Hindi Love Poem
  {
    id: "post-35",
    title: "मोहब्बत का अहसास",
    slug: "mohabbat-ka-ahsaas",
    category: "Love",
    content: `<p>तेरी हँसी से ही मेरी सुबह होती है,<br/>तेरी बातों में ही मेरी शाम खोती है।</p>
<p>तू मिले तो लगे जैसे जन्नत मिल गई,<br/>मेरी हर एक सांस तेरे नाम होती है।</p>
<blockquote>"तुम हो तो हर मौसम सुहाना लगता है।"</blockquote>`,
    excerpt: "तेरी हँसी से ही मेरी सुबह होती है, तेरी बातों में ही मेरी शाम खोती है...",
    tags: ["hindi", "love", "ahsaas"],
    status: "published",
    view_count: 710,
    created_at: "2026-09-15T12:30:00Z",
    updated_at: "2026-09-15T12:30:00Z",
    published_at: "2026-09-15T12:30:00Z",
    featured: false
  },

  // 36. Hinglish Love Poem
  {
    id: "post-36",
    title: "Bas Tum Aur Main",
    slug: "bas-tum-aur-main",
    category: "Love",
    content: `<p>Kahi door jahan koi shor na ho,<br/>Bas tumhara haath aur mera haath ho.</p>
<p>Duniya chahe kitni bhi badal jaye,<br/>Mera pyar tumhare liye kabhi kam na ho.</p>
<blockquote>"Tera sath hi meri sabse badi taqat hai."</blockquote>`,
    excerpt: "Kahi door jahan koi shor na ho, bas tumhara haath aur mera haath ho...",
    tags: ["hinglish", "love", "saath"],
    status: "published",
    view_count: 605,
    created_at: "2026-09-15T16:45:00Z",
    updated_at: "2026-09-15T16:45:00Z",
    published_at: "2026-09-15T16:45:00Z",
    featured: false
  },

  // 37. English Quote
  {
    id: "post-37",
    title: "The Art of Loving You",
    slug: "the-art-of-loving-you",
    category: "Quotes",
    content: `<p>To love you is as effortless as breathing and as necessary as water.</p>
<blockquote>"In your arms, I found a shelter from every storm."</blockquote>`,
    excerpt: "To love you is as effortless as breathing and as necessary as water...",
    tags: ["quote", "love", "english"],
    status: "published",
    view_count: 490,
    created_at: "2026-09-16T07:10:00Z",
    updated_at: "2026-09-16T07:10:00Z",
    published_at: "2026-09-16T07:10:00Z",
    featured: false
  },

  // 38. Hindi Quote
  {
    id: "post-38",
    title: "दिल की बात",
    slug: "dil-ki-baat",
    category: "Quotes",
    content: `<p>जब से तुमसे मोहब्बत हुई है,<br/>खुद से भी ज्यादा तुम्हारी परवाह रहने लगी है।</p>
<blockquote>"तुम मेरी वो चाहत हो जो कभी पुरानी नहीं होती।"</blockquote>`,
    excerpt: "जब से तुमसे मोहब्बत हुई है, खुद से भी ज्यादा तुम्हारी परवाह रहने लगी है...",
    tags: ["hindi", "quote", "chahat"],
    status: "published",
    view_count: 540,
    created_at: "2026-09-16T10:30:00Z",
    updated_at: "2026-09-16T10:30:00Z",
    published_at: "2026-09-16T10:30:00Z",
    featured: false
  },

  // 39. Hinglish Quote
  {
    id: "post-39",
    title: "Tera Muskurata Chehra",
    slug: "tera-muskurata-chehra",
    category: "Quotes",
    content: `<p>Tumhari ek smile hi mera din bana deti hai.</p>
<blockquote>"Love is not about finding perfection, it is about creating magic together."</blockquote>`,
    excerpt: "Tumhari ek smile hi mera din bana deti hai...",
    tags: ["hinglish", "quote", "smile"],
    status: "published",
    view_count: 590,
    created_at: "2026-09-16T14:00:00Z",
    updated_at: "2026-09-16T14:00:00Z",
    published_at: "2026-09-16T14:00:00Z",
    featured: false
  },

  // 40. English Micro Poem
  {
    id: "post-40",
    title: "Starlight Vows",
    slug: "starlight-vows",
    category: "Micro Poems",
    content: `<p>Underneath the quiet midnight rain,<br/>Your love removed my every pain.</p>`,
    excerpt: "Underneath the quiet midnight rain, your love removed my every pain...",
    tags: ["micro-poem", "starlight", "love"],
    status: "published",
    view_count: 380,
    created_at: "2026-09-16T18:20:00Z",
    updated_at: "2026-09-16T18:20:00Z",
    published_at: "2026-09-16T18:20:00Z",
    featured: false
  },

  // 41. Hindi Micro Poem
  {
    id: "post-41",
    title: "रूही एहसास",
    slug: "roohi-ehsaas",
    category: "Micro Poems",
    content: `<p>तेरा नाम लेते ही लब मुस्कुरा देते हैं,<br/>तुम वो ख्वाब हो जो हर रात जगा देते हो।</p>`,
    excerpt: "तेरा नाम लेते ही लब मुस्कुरा देते हैं, तुम वो ख्वाब हो जो हर रात जगा देते हो...",
    tags: ["hindi", "micro-poem", "khwaab"],
    status: "published",
    view_count: 670,
    created_at: "2026-09-17T07:00:00Z",
    updated_at: "2026-09-17T07:00:00Z",
    published_at: "2026-09-17T07:00:00Z",
    featured: false
  },

  // 42. Hinglish Micro Poem
  {
    id: "post-42",
    title: "Tum Aur Khwaab",
    slug: "tum-aur-khwaab",
    category: "Micro Poems",
    content: `<p>Har khwaab mein bas tera hi fitoor hai,<br/>Tu paas hai toh sab kuch manzoor hai.</p>`,
    excerpt: "Har khwaab mein bas tera hi fitoor hai, tu paas hai toh sab kuch manzoor hai...",
    tags: ["hinglish", "micro-poem", "fitoor"],
    status: "published",
    view_count: 610,
    created_at: "2026-09-17T11:15:00Z",
    updated_at: "2026-09-17T11:15:00Z",
    published_at: "2026-09-17T11:15:00Z",
    featured: false
  },

  // 43. English Long Poem
  {
    id: "post-43",
    title: "The Garden of Our Love",
    slug: "the-garden-of-our-love",
    category: "Love",
    content: `<p>We planted seeds of kindness in the quiet early spring,<br/>And watched the golden blossoms that the summer days would bring.</p>
<p>Through every changing season and through every rising tide,<br/>I walk with total confidence when you are by my side.</p>
<blockquote>"You are the flower that never fades,<br/>The sun that brightens shadowed glades."</blockquote>`,
    excerpt: "We planted seeds of kindness in the quiet early spring, and watched the golden blossoms...",
    tags: ["love", "poetry", "garden", "english"],
    status: "published",
    view_count: 720,
    created_at: "2026-09-17T15:00:00Z",
    updated_at: "2026-09-17T15:00:00Z",
    published_at: "2026-09-17T15:00:00Z",
    featured: false
  },

  // 44. Hindi Long Poem
  {
    id: "post-44",
    title: "सांसों का बन्धन",
    slug: "saanson-ka-bandhan",
    category: "Love",
    content: `<p>तेरी सांसों की गर्माहट में खो जाना चाहता हूँ,<br/>मैं ता-उम्र सिर्फ़ तुम्हारा हो जाना चाहता हूँ।</p>
<p>ना कोई तमन्ना है अब इस जहां से,<br/>बस तेरी बांहों में चैन से सो जाना चाहता हूँ।</p>
<blockquote>"मोहब्बत नाम है उस बेपनाह चाहत का,<br/>जो तुम्हें देखकर मेरे चेहरे पर आती है।"</blockquote>`,
    excerpt: "तेरी सांसों की गर्माहट में खो जाना चाहता हूँ, मैं ता-उम्र सिर्फ़ तुम्हारा हो जाना चाहता हूँ...",
    tags: ["hindi", "love", "saans", "bandhan"],
    status: "published",
    view_count: 830,
    created_at: "2026-09-18T08:30:00Z",
    updated_at: "2026-09-18T08:30:00Z",
    published_at: "2026-09-18T08:30:00Z",
    featured: true
  },

  // 45. Hinglish Long Poem
  {
    id: "post-45",
    title: "Tumse Pyar Hua Hai Jab Se",
    slug: "tumse-pyar-hua-hai-jab-se",
    category: "Love",
    content: `<p>Jab se tumse pyar hua hai, saari duniya haseen lagne lagi hai.<br/>Khushboo jise kehte hain log, ab teri saanson mein milne lagi hai.</p>
<p>Mai akele bhi jab chalta hoon raahon mein,<br/>Lagta hai tera haath mere haath mein hai.</p>
<blockquote>"Tujhe dekh kar jo sukoon milta hai,<br/>Woh pure jahan mein kahi nahi milta."</blockquote>`,
    excerpt: "Jab se tumse pyar hua hai, saari duniya haseen lagne lagi hai...",
    tags: ["hinglish", "love", "pyar", "sukoon"],
    status: "published",
    view_count: 790,
    created_at: "2026-09-18T12:00:00Z",
    updated_at: "2026-09-18T12:00:00Z",
    published_at: "2026-09-18T12:00:00Z",
    featured: false
  },

  // 46. English Quote
  {
    id: "post-46",
    title: "My Favorite Story",
    slug: "my-favorite-story",
    category: "Quotes",
    content: `<p>Out of seven billion people on this planet, my heart chose you without a moment of hesitation.</p>
<blockquote>"You are my favorite chapter and my sweetest ending."</blockquote>`,
    excerpt: "Out of seven billion people on this planet, my heart chose you without a moment of hesitation...",
    tags: ["quote", "love", "story", "english"],
    status: "published",
    view_count: 650,
    created_at: "2026-09-18T15:20:00Z",
    updated_at: "2026-09-18T15:20:00Z",
    published_at: "2026-09-18T15:20:00Z",
    featured: false
  },

  // 47. Hindi Quote
  {
    id: "post-47",
    title: "इश्क़ की बंदगी",
    slug: "ishq-ki-bandagi",
    category: "Quotes",
    content: `<p>मोहब्बत अगर इबादत है, तो तुम मेरी सबसे पाक दुआ हो।</p>
<blockquote>"तेरी ख़ुशी में ही मेरी दुनिया की सारी रौनक़ है।"</blockquote>`,
    excerpt: "मोहब्बत अगर इबादत है, तो तुम मेरी सबसे पाक दुआ हो...",
    tags: ["hindi", "quote", "ibadat"],
    status: "published",
    view_count: 710,
    created_at: "2026-09-18T18:40:00Z",
    updated_at: "2026-09-18T18:40:00Z",
    published_at: "2026-09-18T18:40:00Z",
    featured: false
  },

  // 48. Hinglish Quote
  {
    id: "post-48",
    title: "Humsafar",
    slug: "humsafar",
    category: "Quotes",
    content: `<p>Zindagi ke har safar mein bas tera hi sath chahiye.</p>
<blockquote>"You are not just my love; you are my safe haven."</blockquote>`,
    excerpt: "Zindagi ke har safar mein bas tera hi sath chahiye...",
    tags: ["hinglish", "quote", "humsafar"],
    status: "published",
    view_count: 640,
    created_at: "2026-09-19T06:10:00Z",
    updated_at: "2026-09-19T06:10:00Z",
    published_at: "2026-09-19T06:10:00Z",
    featured: false
  },

  // 49. English Micro Poem
  {
    id: "post-49",
    title: "Eternal Echo",
    slug: "eternal-echo",
    category: "Micro Poems",
    content: `<p>In every beat my heart repeats,<br/>The love that makes my life complete.</p>`,
    excerpt: "In every beat my heart repeats, the love that makes my life complete...",
    tags: ["micro-poem", "heartbeat", "english"],
    status: "published",
    view_count: 420,
    created_at: "2026-09-19T07:00:00Z",
    updated_at: "2026-09-19T07:00:00Z",
    published_at: "2026-09-19T07:00:00Z",
    featured: false
  },

  // 50. Hindi Micro Poem
  {
    id: "post-50",
    title: "दिल का साज़",
    slug: "dil-ka-saaz",
    category: "Micro Poems",
    content: `<p>तेरी हँसी से बजता है मेरे दिल का साज़,<br/>तुम ही हो मेरी हर ख़ुशी का नवां राज़।</p>`,
    excerpt: "तेरी हँसी से बजता है मेरे दिल का साज़, तुम ही हो मेरी हर ख़ुशी का नवां राज़...",
    tags: ["hindi", "micro-poem", "saaz"],
    status: "published",
    view_count: 530,
    created_at: "2026-09-19T07:30:00Z",
    updated_at: "2026-09-19T07:30:00Z",
    published_at: "2026-09-19T07:30:00Z",
    featured: false
  },

  // 51. Hinglish Micro Poem
  {
    id: "post-51",
    title: "Tere Naal Pyar",
    slug: "tere-naal-pyar",
    category: "Micro Poems",
    content: `<p>Tere sath guzra har ek lamha khoobsurat hai,<br/>Mujhe bass ab teri hi zaroorat hai.</p>`,
    excerpt: "Tere sath guzra har ek lamha khoobsurat hai, mujhe bass ab teri hi zaroorat hai...",
    tags: ["hinglish", "micro-poem", "lamha"],
    status: "published",
    view_count: 590,
    created_at: "2026-09-19T08:00:00Z",
    updated_at: "2026-09-19T08:00:00Z",
    published_at: "2026-09-19T08:00:00Z",
    featured: false
  },

  // 52. Special Romantic Long Poem
  {
    id: "post-52",
    title: "The Tapestry of You and Me",
    slug: "the-tapestry-of-you-and-me",
    category: "Love",
    content: `<p>We weave our dreams in golden threads of conversations at midnight,<br/>Where every word you whisper fills my darkness with warm light.</p>
<p>I see our future written in the gentle way you care,<br/>The way your presence fills the room like sweet perfumed air.<br/>No storm can shake the fortress that we built with quiet trust,<br/>Where love turns simple moments into gold from everyday dust.</p>
<blockquote>"You are my anchor in deep waters, my light upon the hill,<br/>The one my restless heart will love, and always, forever will."</blockquote>
<p>Together we will write each verse until the story's end,<br/>My lover, my soulmate, my constant lifetime friend.</p>`,
    excerpt: "We weave our dreams in golden threads of conversations at midnight, where every word you whisper fills my darkness...",
    tags: ["love", "tapestry", "romance", "poetry", "soulmate"],
    cover_image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
    status: "published",
    view_count: 980,
    created_at: "2026-09-19T08:30:00Z",
    updated_at: "2026-09-19T08:30:00Z",
    published_at: "2026-09-19T08:30:00Z",
    featured: true
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
      // Ensure we have all seed writings if array was smaller
      if (memoryCache && memoryCache.writings && memoryCache.writings.length < SEED_WRITINGS.length) {
        const existingIds = new Set(memoryCache.writings.map(w => w.id));
        const missingSeeds = SEED_WRITINGS.filter(s => !existingIds.has(s.id));
        memoryCache.writings = [...memoryCache.writings, ...missingSeeds];
        saveDB(memoryCache);
      }
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
    .replace(/<[^>]*>/g, '')
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
        slug: existing.slug,
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
