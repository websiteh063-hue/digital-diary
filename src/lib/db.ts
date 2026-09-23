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
  {
    "id": "post-1",
    "title": "Constellations in Your Eyes",
    "slug": "constellations-in-your-eyes",
    "category": "Love",
    "content": "<p>I have searched through quiet galaxies and starry skies,<br/>Yet nothing shines quite like the light within your eyes.</p>\n<p>When the world grows heavy and the night grows long,<br/>Your voice becomes my favorite quiet song.<br/>You hold my hands like sacred thread and gold,<br/>Writing stories that our hearts have never told.</p>\n<blockquote>\"In a universe of fading lights and passing storms,<br/>Your gentle arms remain my only home.\"</blockquote>\n<p>Every soft breath you take beside me in the dusk,<br/>Carries the fragrance of jasmine, rain, and musk.<br/>We are two souls who found their way through rain,<br/>Finding joy in love and beauty beyond pain.</p>",
    "excerpt": "I have searched through quiet galaxies and starry skies, yet nothing shines quite like the light within your eyes...",
    "tags": [
      "love",
      "romance",
      "poetry",
      "english",
      "soulmate"
    ],
    "cover_image": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1200&auto=format&fit=crop",
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-15T09:42:02.236Z",
    "updated_at": "2026-09-15T09:42:02.236Z",
    "published_at": "2026-09-15T09:42:02.236Z",
    "featured": true
  },
  {
    "id": "post-2",
    "title": "तुम और मेरी ख़ामोश रातें",
    "slug": "tum-aur-meri-khamosh-raaten",
    "category": "Love",
    "content": "<p>जब शाम ढलती है और चांद फलक पर आता है,<br/>तुम्हारा चेहरा मेरी आंखों के आगे मुस्कुराता है।</p>\n<p>ना कोई शिकवा, ना कोई शिकायत है ज़माने से,<br/>मुझे तो इश्क़ हुआ है बस तुम्हारे मुस्कुराने से।<br/>तुम्हारी हँसी में छुपा है मेरा सारा जहान,<br/>तुम ही मेरी बंदगी हो, तुम ही मेरा इमान।</p>\n<blockquote>\"कुछ रिश्ते लफ़्ज़ों के मोहताज नहीं होते,<br/>जो दिल से जुड़े हों, वो कभी उदास नहीं होते।\"</blockquote>\n<p>हर सांस में तेरी खुशबू बिखरी सी लगती है,<br/>ये ज़िंदगी अब सिर्फ़ तेरी मोहब्बत में सजती है।</p>",
    "excerpt": "जब शाम ढलती है और चांद फलक पर आता है, तुम्हारा चेहरा मेरी आंखों के आगे मुस्कुराता है...",
    "tags": [
      "hindi",
      "love",
      "shayari",
      "poetry",
      "romantic"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-08T04:03:14.589Z",
    "updated_at": "2026-09-08T04:03:14.589Z",
    "published_at": "2026-09-08T04:03:14.589Z",
    "featured": true
  },
  {
    "id": "post-3",
    "title": "Tere Sath Gujri Woh Har Ek Sham",
    "slug": "tere-sath-gujri-woh-har-ek-sham",
    "category": "Love",
    "content": "<p>Tum jab paas hote ho toh waqt tham sa jata hai,<br/>Dil ka har ek taar bas tumhare geet gata hai.</p>\n<p>Chahe kitni bhi dooriyan ho hamare darmiyan,<br/>Mere har khwab mein bas tera hi naam aata hai.<br/>Teri zulfon ki chhaon mein thoda sa sukoon hai,<br/>Tujhe behad chahna bas mera ek junoon hai.</p>\n<blockquote>\"Log kehte hain mohabbat ek baar hoti hai,<br/>Par mujhe toh har roz bas tumse hi hoti hai.\"</blockquote>\n<p>Har baar jab tum muskura kar mujhe dekhte ho,<br/>Meri duniya wahan hi mehak uthti hai.</p>",
    "excerpt": "Tum jab paas hote ho toh waqt tham sa jata hai, dil ka har ek taar bas tumhare geet gata hai...",
    "tags": [
      "hinglish",
      "love",
      "romance",
      "poetry",
      "dil-se"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-08-27T02:55:23.574Z",
    "updated_at": "2026-08-27T02:55:23.574Z",
    "published_at": "2026-08-27T02:55:23.574Z",
    "featured": true
  },
  {
    "id": "post-4",
    "title": "The Physics of Falling for You",
    "slug": "the-physics-of-falling-for-you",
    "category": "Quotes",
    "content": "<p>If I had a single flower for every time I thought of you, I could walk through my garden forever.</p>\n<blockquote>\"You are my dynamic constant in a world full of unpredictable variables.\"</blockquote>",
    "excerpt": "If I had a single flower for every time I thought of you, I could walk through my garden forever...",
    "tags": [
      "quote",
      "love",
      "english",
      "romantic"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-08-21T09:52:38.017Z",
    "updated_at": "2026-08-21T09:52:38.017Z",
    "published_at": "2026-08-21T09:52:38.017Z",
    "featured": false
  },
  {
    "id": "post-5",
    "title": "इश्क़ का साया",
    "slug": "ishq-ka-saaya",
    "category": "Quotes",
    "content": "<p>मोहब्बत कोई वजह नहीं ढूंढती,<br/>मोहब्बत तो वो एहसास है जो बिना कहे सब समझ लेती है।</p>\n<blockquote>\"तेरी मौजूदगी ही मेरी हर ख़ुशी की वजह है।\"</blockquote>",
    "excerpt": "मोहब्बत कोई वजह नहीं ढूंढती, मोहब्बत तो वो एहसास है जो बिना कहे सब समझ लेती है...",
    "tags": [
      "hindi",
      "quote",
      "love",
      "feeling"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-08-12T03:07:23.055Z",
    "updated_at": "2026-08-12T03:07:23.055Z",
    "published_at": "2026-08-12T03:07:23.055Z",
    "featured": false
  },
  {
    "id": "post-6",
    "title": "Mere Dil Ki Har Ek Dhadkan",
    "slug": "mere-dil-ki-har-ek-dhadkan",
    "category": "Quotes",
    "content": "<p>Tumhare sath chalna hi meri sabse khoobsurat manzil hai.</p>\n<blockquote>\"Tere muskuraney se shuru aur tere khayalon pe khatam... Aisi hi toh hai meri chhoti si duniya.\"</blockquote>",
    "excerpt": "Tumhare sath chalna hi meri sabse khoobsurat manzil hai...",
    "tags": [
      "hinglish",
      "quote",
      "romance",
      "love-lines"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-08-08T23:13:34.933Z",
    "updated_at": "2026-08-08T23:13:34.933Z",
    "published_at": "2026-08-08T23:13:34.933Z",
    "featured": false
  },
  {
    "id": "post-7",
    "title": "Silent Symphony",
    "slug": "silent-symphony",
    "category": "Micro Poems",
    "content": "<p>Your breath against my collarbone,<br/>The quietest song I've ever known.</p>",
    "excerpt": "Your breath against my collarbone, the quietest song I've ever known...",
    "tags": [
      "micro-poem",
      "love",
      "english",
      "tender"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-08-01T20:26:46.205Z",
    "updated_at": "2026-08-01T20:26:46.205Z",
    "published_at": "2026-08-01T20:26:46.205Z",
    "featured": false
  },
  {
    "id": "post-8",
    "title": "तेरा लम्स",
    "slug": "tera-lams",
    "category": "Micro Poems",
    "content": "<p>तेरा एक छूना ही काफ़ी था,<br/>मेरी रूह के सारे ज़ख्म भरने के लिए।</p>",
    "excerpt": "तेरा एक छूना ही काफ़ी था, मेरी रूह के सारे ज़ख्म भरने के लिए...",
    "tags": [
      "hindi",
      "micro-poem",
      "love",
      "touch"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-07-30T01:44:51.553Z",
    "updated_at": "2026-07-30T01:44:51.553Z",
    "published_at": "2026-07-30T01:44:51.553Z",
    "featured": false
  },
  {
    "id": "post-9",
    "title": "Chhoti Si Khwahish",
    "slug": "chhoti-si-khwahish",
    "category": "Micro Poems",
    "content": "<p>Bas ek shaam ho aur tum sath ho,<br/>Hathon mein tera haath aur dher saari baat ho.</p>",
    "excerpt": "Bas ek shaam ho aur tum sath ho, hathon mein tera haath aur dher saari baat ho...",
    "tags": [
      "hinglish",
      "micro-poem",
      "desire",
      "romance"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-07-21T15:01:12.587Z",
    "updated_at": "2026-07-21T15:01:12.587Z",
    "published_at": "2026-07-21T15:01:12.587Z",
    "featured": false
  },
  {
    "id": "post-10",
    "title": "When Rain Met Romance",
    "slug": "when-rain-met-romance",
    "category": "Poems",
    "content": "<p>The clouds rolled in with silver grace,<br/>And raindrops danced upon your face.<br/>I watched you laugh beneath the storm,<br/>Where cold winds made our refuge warm.</p>\n<p>We shared an umbrella under the tree,<br/>Where all the world belonged to we.<br/>No words were spoken, none were required,<br/>For in your gaze, my soul transpired.</p>\n<blockquote>\"Some love affairs are written in gold,<br/>Ours was written in rain drops and moments retold.\"</blockquote>\n<p>Hold my hand till the clouds clear away,<br/>And let me stay in your heart every day.</p>",
    "excerpt": "The clouds rolled in with silver grace, and raindrops danced upon your face...",
    "tags": [
      "poetry",
      "rain",
      "romance",
      "english"
    ],
    "cover_image": "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=1200&auto=format&fit=crop",
    "status": "published",
    "view_count": 0,
    "created_at": "2026-07-19T01:46:53.756Z",
    "updated_at": "2026-07-19T01:46:53.756Z",
    "published_at": "2026-07-19T01:46:53.756Z",
    "featured": true
  },
  {
    "id": "post-11",
    "title": "इश्क़ की पहली बारिश",
    "slug": "ishq-ki-pehli-baarish",
    "category": "Poems",
    "content": "<p>पहली बारिश की बूंदों की तरह हो तुम,<br/>जो सूखी ज़मीन को भी सांस दे जाती हैं।</p>\n<p>तेरी हँसी में वो मिठास है,<br/>जो मेरे हर ग़म को भुला जाती है।<br/>जब तुम पास आती हो तो लगता है,<br/>जैसे कोई पुरानी दुआ कुबूल हो गई हो।</p>\n<blockquote>\"मोहब्बत में रंग चढ़ने लगा है तेरा,<br/>अब हर लम्हा सिर्फ़ नाम लेता है तेरा।\"</blockquote>\n<p>आओ मिलकर एक ऐसी दुनिया बनाएं,<br/>जहाँ सिर्फ़ तुम, मैं और हमारी मोहब्बत हो।</p>",
    "excerpt": "पहली बारिश की बूंदों की तरह हो तुम, जो सूखी ज़मीन को भी सांस दे जाती हैं...",
    "tags": [
      "hindi",
      "poetry",
      "barish",
      "ishq"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-07-18T19:18:01.802Z",
    "updated_at": "2026-07-18T19:18:01.802Z",
    "published_at": "2026-07-18T19:18:01.802Z",
    "featured": false
  },
  {
    "id": "post-12",
    "title": "Tum Mere Paas Raho Na",
    "slug": "tum-mere-paas-raho-na",
    "category": "Poems",
    "content": "<p>Jab raat gehri ho aur khamoshi cha jaye,<br/>Tumhari yaadon ki khushbu fizao mein simat aaye.</p>\n<p>Mai kitna bhi bhoolna chahoon is duniya ko,<br/>Tera chehra meri aankhon ke aage muskuraye.<br/>Dil chahta hai bass ruk jaun wahan hi,<br/>Jahan tera haath mere haath mein ho.</p>\n<blockquote>\"Chahe zindagii kitni bhi mushkil kyun na ho,<br/>Tera sath ho toh har rasta aasan lagta hai.\"</blockquote>\n<p>Tum mere paas raho na hamesha ke liye.</p>",
    "excerpt": "Jab raat gehri ho aur khamoshi cha jaye, tumhari yaadon ki khushbu fizao mein simat aaye...",
    "tags": [
      "hinglish",
      "poetry",
      "love-poem",
      "dil-ki-baat"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-06-27T14:18:42.281Z",
    "updated_at": "2026-06-27T14:18:42.281Z",
    "published_at": "2026-06-27T14:18:42.281Z",
    "featured": false
  },
  {
    "id": "post-13",
    "title": "Coffee Cups and Unspoken Vows",
    "slug": "coffee-cups-and-unspoken-vows",
    "category": "Stories",
    "content": "<p>We met at a small corner cafe when the rain was pouring outside. You were reading a vintage book with worn yellow pages, and I was trying to write a poem that refused to come together.</p>\n<p>When you spilled a drop of coffee on your sleeve and laughed at your own clumsiness, I realized that some moments don't need perfection—they just need your presence.</p>\n<blockquote>\"That afternoon, over two warm mugs of cappuccino, I gave you my heart without saying a single word.\"</blockquote>\n<p>Three years later, every morning still feels like that gentle rainy afternoon in September.</p>",
    "excerpt": "We met at a small corner cafe when the rain was pouring outside. You were reading a vintage book...",
    "tags": [
      "story",
      "coffee",
      "romance",
      "meet-cute"
    ],
    "cover_image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop",
    "status": "published",
    "view_count": 0,
    "created_at": "2026-06-20T17:07:04.732Z",
    "updated_at": "2026-06-20T17:07:04.732Z",
    "published_at": "2026-06-20T17:07:04.732Z",
    "featured": true
  },
  {
    "id": "post-14",
    "title": "चाय का वो आखिरी घूंट",
    "slug": "chai-ka-woh-aakhri-ghoont",
    "category": "Stories",
    "content": "<p>सर्दी की गुलाबी शाम थी। हम दोनों टपरी पर खड़े कुल्हड़ की चाय पी रहे थे। हाथ ठंड से ठिठुर रहे थे, पर दिल में एक अजीब सी गर्माहट थी।</p>\n<p>जब उसने अपनी चाय ख़त्म करके मुस्कुराते हुए मुझे देखा, तो मुझे लगा कि पूरी कायनात ठहर गई है। उसने कहा— \"अगली चाय भी तुम्हारे साथ ही पीनी है।\"</p>\n<blockquote>\"बस उसी एक छोटी सी बात में मेरी पूरी उम्र सिमट गई थी।\"</blockquote>",
    "excerpt": "सर्दी की गुलाबी शाम थी। हम दोनों टपरी पर खड़े कुल्हड़ की चाय पी रहे थे...",
    "tags": [
      "hindi",
      "story",
      "chai",
      "romance"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-06-18T19:10:25.293Z",
    "updated_at": "2026-06-18T19:10:25.293Z",
    "published_at": "2026-06-18T19:10:25.293Z",
    "featured": false
  },
  {
    "id": "post-15",
    "title": "Woh Pehli Mulaqat Ka Magic",
    "slug": "woh-pehli-mulaqat-ka-magic",
    "category": "Stories",
    "content": "<p>Woh dost ki birthday party thi jahan hum pehli baar mile the. Shor bohot tha, par jab tumne mud kar dekha, toh baki sab blurred ho gaya.</p>\n<p>Tumne purple kurti pehni thi aur aakhon mein thoda sa kajal tha. Humne shaam bhar bas dher saari baatein ki, jaise hum ek dusre ko barso se jaante hon.</p>\n<blockquote>\"Kuch log aise milte hain jaise purane adhoore khwab poore hone aaye hon.\"</blockquote>",
    "excerpt": "Woh dost ki birthday party thi jahan hum pehli baar mile the. Shor bohot tha, par...",
    "tags": [
      "hinglish",
      "story",
      "pehli-mulaqat",
      "magic"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-06-12T07:11:32.202Z",
    "updated_at": "2026-06-12T07:11:32.202Z",
    "published_at": "2026-06-12T07:11:32.202Z",
    "featured": false
  },
  {
    "id": "post-16",
    "title": "An Ode to Your Smile",
    "slug": "an-ode-to-your-smile",
    "category": "Love",
    "content": "<p>Your smile is a quiet sunrise after a prolonged dark storm,<br/>A touch that keeps my restless heart protected, safe, and warm.</p>\n<p>I find in you the beauty of the things I could not see,<br/>The poetry of passion that brings out the best in me.</p>\n<blockquote>\"If forever is a promise made of moments soft and true,<br/>I want to spend each breath of it holding close to you.\"</blockquote>",
    "excerpt": "Your smile is a quiet sunrise after a prolonged dark storm, a touch that keeps my restless heart...",
    "tags": [
      "love",
      "poetry",
      "ode",
      "english"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-06-07T00:28:52.888Z",
    "updated_at": "2026-06-07T00:28:52.888Z",
    "published_at": "2026-06-07T00:28:52.888Z",
    "featured": false
  },
  {
    "id": "post-17",
    "title": "तेरी आँखों का जादू",
    "slug": "teri-aankhon-ka-jaadu",
    "category": "Love",
    "content": "<p>तेरी आँखों में डूब जाने को दिल चाहता है,<br/>तेरी ज़ुल्फ़ों की छांव में सो जाने को दिल चाहता है।</p>\n<p>तू वो गज़ल है जिसे मैं ता-उम्र गाता रहूँ,<br/>तेरे लम्स में अपनी पहचान भूल जाने को दिल चाहता है।</p>\n<blockquote>\"तुम हो तो दुनिया हसीन लगती है,<br/>वरना हर रात उदास और तन्हा लगती है।\"</blockquote>",
    "excerpt": "तेरी आँखों में डूब जाने को दिल चाहता है, तेरी ज़ुल्फ़ों की छांव में सो जाने को दिल चाहता है...",
    "tags": [
      "hindi",
      "love",
      "aankhen",
      "shayari"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-05-28T15:26:18.806Z",
    "updated_at": "2026-05-28T15:26:18.806Z",
    "published_at": "2026-05-28T15:26:18.806Z",
    "featured": false
  },
  {
    "id": "post-18",
    "title": "Tu Meri Zindagi Ka Noor Hai",
    "slug": "tu-meri-zindagi-ka-noor-hai",
    "category": "Love",
    "content": "<p>Har roz subah jab meri aankhein khulti hain,<br/>Dil mein bass ek tera hi khayal hota hai.</p>\n<p>Kaise bataun ki kitna pyar karta hoon tumse,<br/>Mera har alfaaz bass tere aage kam pad jata hai.</p>\n<blockquote>\"Tu paas hai toh har lamha ek jashn hai,<br/>Tu nahi toh poora shehar bhi suna lagta hai.\"</blockquote>",
    "excerpt": "Har roz subah jab meri aankhein khulti hain, dil mein bass ek tera hi khayal hota hai...",
    "tags": [
      "hinglish",
      "love",
      "noor",
      "dil-se"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-05-25T06:26:55.772Z",
    "updated_at": "2026-05-25T06:26:55.772Z",
    "published_at": "2026-05-25T06:26:55.772Z",
    "featured": false
  },
  {
    "id": "post-19",
    "title": "The Unsent Letter",
    "slug": "the-unsent-letter",
    "category": "Heartbreak",
    "content": "<p>I wrote your name on the margin of a book I never finished.</p>\n<p>Some nights, I re-read the chapters we never got to live.<br/>You became a song I listen to when nobody is watching,<br/>a quiet echo in an empty corridor of my heart.</p>\n<blockquote>\"We didn't end with a battle or a storm;<br/>we simply dissolved like morning mist—leaving behind only damp grass and silence.\"</blockquote>",
    "excerpt": "I wrote your name on the margin of a book I never finished. Some nights, I re-read the chapters we never got to live...",
    "tags": [
      "heartbreak",
      "memories",
      "silence",
      "poetry"
    ],
    "cover_image": "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
    "status": "published",
    "view_count": 0,
    "created_at": "2026-05-22T19:50:06.307Z",
    "updated_at": "2026-05-22T19:50:06.307Z",
    "published_at": "2026-05-22T19:50:06.307Z",
    "featured": true
  },
  {
    "id": "post-20",
    "title": "अधूरा अफ़साना",
    "slug": "adhura-afsana",
    "category": "Heartbreak",
    "content": "<p>कुछ रास्ते बीच में ही छूट जाते हैं,<br/>और कुछ मुसाफ़िर दिल में हमेशा के लिए बस जाते हैं।</p>\n<p>तेरा ना होना भी अब तेरी याद दिलाता है,<br/>ये शहर तेरी ख़ामोशी से महकता है।</p>\n<blockquote>\"इश्क़ अधूरा रह गया तो क्या हुआ,<br/>एहसास तो आज भी पूरा है।\"</blockquote>",
    "excerpt": "कुछ रास्ते बीच में ही छूट जाते हैं, और कुछ मुसाफ़िर दिल में हमेशा के लिए बस जाते हैं...",
    "tags": [
      "hindi",
      "heartbreak",
      "yaadein",
      "dard"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-05-20T19:15:17.516Z",
    "updated_at": "2026-05-20T19:15:17.516Z",
    "published_at": "2026-05-20T19:15:17.516Z",
    "featured": false
  },
  {
    "id": "post-21",
    "title": "Yaadon Ka Silsila",
    "slug": "yaadon-ka-silsila",
    "category": "Heartbreak",
    "content": "<p>Raat bhar baarishein hoti rahi aur mai tera naam likhta raha.</p>\n<p>Pata nahi kyun ab bhi jab purane songs sunta hoon,<br/>Toh bas tera hi chehra samne aata hai.</p>\n<blockquote>\"Kuch riste door hone ke baad bhi kabhi khatam nahi hote.\"</blockquote>",
    "excerpt": "Raat bhar baarishein hoti rahi aur mai tera naam likhta raha. Pata nahi kyun...",
    "tags": [
      "hinglish",
      "heartbreak",
      "rain",
      "remembering"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-05-17T11:43:01.526Z",
    "updated_at": "2026-05-17T11:43:01.526Z",
    "published_at": "2026-05-17T11:43:01.526Z",
    "featured": false
  },
  {
    "id": "post-22",
    "title": "Written in the Stars",
    "slug": "written-in-the-stars",
    "category": "Love",
    "content": "<p>Before I knew your name, my soul knew your rhythm.<br/>Before I touched your hand, my heart felt your pulse.</p>\n<p>You are the quiet poetry in a noisy world,<br/>The gentle stillness after a long chaotic day.</p>\n<blockquote>\"I loved you yesterday, I love you still,<br/>I always have, I always will.\"</blockquote>",
    "excerpt": "Before I knew your name, my soul knew your rhythm. Before I touched your hand...",
    "tags": [
      "love",
      "poetry",
      "forever",
      "english"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-05-15T20:11:12.226Z",
    "updated_at": "2026-05-15T20:11:12.226Z",
    "published_at": "2026-05-15T20:11:12.226Z",
    "featured": false
  },
  {
    "id": "post-23",
    "title": "इश्क़ की मिठास",
    "slug": "ishq-ki-mithaas",
    "category": "Love",
    "content": "<p>तेरी एक झलक से दिन संवर जाता है,<br/>तेरी एक मुस्कान से दिल झूम जाता है।</p>\n<p>क्या जादू है तेरी इन नशीली आँखों में,<br/>जो देखता है बस तेरा ही हो जाता है।</p>\n<blockquote>\"तुम मेरी वो ख़ुशी हो जो मैं किसी से बांट नहीं सकता।\"</blockquote>",
    "excerpt": "तेरी एक झलक से दिन संवर जाता है, तेरी एक मुस्कान से दिल झूम जाता है...",
    "tags": [
      "hindi",
      "love",
      "muskaan",
      "shayari"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-05-11T02:14:50.061Z",
    "updated_at": "2026-05-11T02:14:50.061Z",
    "published_at": "2026-05-11T02:14:50.061Z",
    "featured": false
  },
  {
    "id": "post-24",
    "title": "Tum Aur Main",
    "slug": "tum-aur-main",
    "category": "Love",
    "content": "<p>Ek pyari si shaam, thandi hawa aur tumhara haath mere haath mein.</p>\n<p>Bas itna hi toh chahiye mujhe is zindagi se.<br/>Baki sab toh bass aane jaane wale mausam hain.</p>\n<blockquote>\"Tera sath hi mera sabse khoobsurat tohfa hai.\"</blockquote>",
    "excerpt": "Ek pyari si shaam, thandi hawa aur tumhara haath mere haath mein...",
    "tags": [
      "hinglish",
      "love",
      "romantic-moments"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-05-02T04:25:26.529Z",
    "updated_at": "2026-05-02T04:25:26.529Z",
    "published_at": "2026-05-02T04:25:26.529Z",
    "featured": false
  },
  {
    "id": "post-25",
    "title": "Forever Is a Place",
    "slug": "forever-is-a-place",
    "category": "Quotes",
    "content": "<p>Forever is not a measure of time, but a sanctuary built by two souls in love.</p>\n<blockquote>\"Home is not four walls; home is wherever you smile at me.\"</blockquote>",
    "excerpt": "Forever is not a measure of time, but a sanctuary built by two souls in love...",
    "tags": [
      "quote",
      "love",
      "home",
      "english"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-04-20T09:58:26.333Z",
    "updated_at": "2026-04-20T09:58:26.333Z",
    "published_at": "2026-04-20T09:58:26.333Z",
    "featured": false
  },
  {
    "id": "post-26",
    "title": "सच्ची मोहब्बत",
    "slug": "sacchi-mohabbat",
    "category": "Quotes",
    "content": "<p>सच्ची मोहब्बत वो नहीं जो दूरियों में खत्म हो जाए,<br/>सच्ची मोहब्बत तो वो है जो फासलों में और गहरी हो जाए।</p>\n<blockquote>\"तेरा ख्याल ही मेरी सबसे बड़ी दौलत है।\"</blockquote>",
    "excerpt": "सच्ची मोहब्बत वो नहीं जो दूरियों में खत्म हो जाए, सच्ची मोहब्बत तो वो है...",
    "tags": [
      "hindi",
      "quote",
      "mohabbat"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-04-15T02:26:54.579Z",
    "updated_at": "2026-04-15T02:26:54.579Z",
    "published_at": "2026-04-15T02:26:54.579Z",
    "featured": false
  },
  {
    "id": "post-27",
    "title": "Tera Muskurana",
    "slug": "tera-muskurana",
    "category": "Quotes",
    "content": "<p>Jab tum muskura kar meri taraf dekhte ho, toh mere sare dard gayab ho jate hain.</p>\n<blockquote>\"Teri khushi hi meri sabse badi khwahish hai.\"</blockquote>",
    "excerpt": "Jab tum muskura kar meri taraf dekhte ho, toh mere sare dard gayab ho jate hain...",
    "tags": [
      "hinglish",
      "quote",
      "muskaan"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-04-12T04:55:37.330Z",
    "updated_at": "2026-04-12T04:55:37.330Z",
    "published_at": "2026-04-12T04:55:37.330Z",
    "featured": false
  },
  {
    "id": "post-28",
    "title": "Whispers in the Dark",
    "slug": "whispers-in-the-dark",
    "category": "Micro Poems",
    "content": "<p>You whispered my name in the dark,<br/>And lit an eternal spark.</p>",
    "excerpt": "You whispered my name in the dark, and lit an eternal spark...",
    "tags": [
      "micro-poem",
      "spark",
      "love"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-04-10T12:16:59.140Z",
    "updated_at": "2026-04-10T12:16:59.140Z",
    "published_at": "2026-04-10T12:16:59.140Z",
    "featured": false
  },
  {
    "id": "post-29",
    "title": "चांदनी रात",
    "slug": "chaandni-raat",
    "category": "Micro Poems",
    "content": "<p>चांद भी आज रश्क करता है तुम पर,<br/>कि तुम उससे भी ज़्यादा खूबसूरत लगती हो।</p>",
    "excerpt": "चांद भी आज रश्क करता है तुम पर, कि तुम उससे भी ज़्यादा खूबसूरत लगती हो...",
    "tags": [
      "hindi",
      "micro-poem",
      "chand"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-04-04T21:46:46.602Z",
    "updated_at": "2026-04-04T21:46:46.602Z",
    "published_at": "2026-04-04T21:46:46.602Z",
    "featured": false
  },
  {
    "id": "post-30",
    "title": "Teri Aahat",
    "slug": "teri-aahat",
    "category": "Micro Poems",
    "content": "<p>Teri aahat se hi mehak uthti hai meri hawa,<br/>Tu mera rog hai aur tu hi meri dawa.</p>",
    "excerpt": "Teri aahat se hi mehak uthti hai meri hawa, tu mera rog hai aur tu hi meri dawa...",
    "tags": [
      "hinglish",
      "micro-poem",
      "aahat"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-04-02T13:31:49.992Z",
    "updated_at": "2026-04-02T13:31:49.992Z",
    "published_at": "2026-04-02T13:31:49.992Z",
    "featured": false
  },
  {
    "id": "post-31",
    "title": "Symphony of Two Hearts",
    "slug": "symphony-of-two-hearts",
    "category": "Poems",
    "content": "<p>We walked along the silver shore,<br/>Where waves sang legends of old lore.</p>\n<p>My hand in yours, the warm night breeze,<br/>Bringing our wandering hearts to ease.<br/>I saw the sunrise in your eyes,<br/>Stripped of all masks and all disguise.</p>\n<blockquote>\"To love you is to breathe the spring,<br/>To hear the song that angels sing.\"</blockquote>\n<p>And when tomorrow turns to yesterday,<br/>My love for you will forever stay.</p>",
    "excerpt": "We walked along the silver shore, where waves sang legends of old lore...",
    "tags": [
      "poetry",
      "symphony",
      "love-poem",
      "english"
    ],
    "cover_image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    "status": "published",
    "view_count": 0,
    "created_at": "2026-03-30T20:36:53.268Z",
    "updated_at": "2026-03-30T20:36:53.268Z",
    "published_at": "2026-03-30T20:36:53.268Z",
    "featured": true
  },
  {
    "id": "post-32",
    "title": "तेरे नाम का चिराग़",
    "slug": "tere-naam-ka-chiraag",
    "category": "Poems",
    "content": "<p>हर शाम जलाता हूँ तेरे नाम का चिराग़,<br/>कि रौशन रहे मेरी तन्हाई का ये बाग़।</p>\n<p>तेरी यादों का इत्र बिखर जाता है सांसों में,<br/>जब भी तेरा नाम आता है इन लफ़्ज़ों में।<br/>तू दूर सही पर दिल के सबसे करीब है,<br/>तेरा प्यार ही मेरा सबसे बड़ा नसीब है।</p>\n<blockquote>\"कोई शिकवा नहीं कि तू पास नहीं,<br/>तेरा एहसास ही मेरे लिए बेहद खास है।\"</blockquote>",
    "excerpt": "हर शाम जलाता हूँ तेरे नाम का चिराग़, कि रौशन रहे मेरी तन्हाई का ये बाग़...",
    "tags": [
      "hindi",
      "poetry",
      "chiraag",
      "shambhakti"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-03-24T21:20:25.641Z",
    "updated_at": "2026-03-24T21:20:25.641Z",
    "published_at": "2026-03-24T21:20:25.641Z",
    "featured": false
  },
  {
    "id": "post-33",
    "title": "Zindagi Ki Kitab Mein Tum",
    "slug": "zindagi-ki-kitab-mein-tum",
    "category": "Poems",
    "content": "<p>Meri zindagi ki kitab ke har panno pe tera hi zikr hai,<br/>Tu mera gujra hua kal aur aane wala kal hai.</p>\n<p>Mai chahe kitna bhi likhun tumhare bare mein,<br/>Lagta hai abhi bohot kuch kehna baki hai.<br/>Tera ek baar muskura kar dekhna hi,<br/>Mere sare gham ko mitane ke liye kafi hai.</p>\n<blockquote>\"Tujhse shuru aur tujhpe khatam mera safar hai.\"</blockquote>",
    "excerpt": "Meri zindagi ki kitab ke har panno pe tera hi zikr hai, tu mera gujra hua kal...",
    "tags": [
      "hinglish",
      "poetry",
      "kitab",
      "romantic"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-03-20T23:32:53.543Z",
    "updated_at": "2026-03-20T23:32:53.543Z",
    "published_at": "2026-03-20T23:32:53.543Z",
    "featured": false
  },
  {
    "id": "post-34",
    "title": "Eternal Promise",
    "slug": "eternal-promise",
    "category": "Love",
    "content": "<p>I promise to love you when the sun rises high,<br/>And when shadow falls low across the twilight sky.</p>\n<p>Through every laughter, through every tear,<br/>I will hold you close, eliminating every fear.</p>\n<blockquote>\"You are my today and all of my tomorrows.\"</blockquote>",
    "excerpt": "I promise to love you when the sun rises high, and when shadow falls low...",
    "tags": [
      "love",
      "promise",
      "romantic",
      "english"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-03-12T22:06:37.099Z",
    "updated_at": "2026-03-12T22:06:37.099Z",
    "published_at": "2026-03-12T22:06:37.099Z",
    "featured": false
  },
  {
    "id": "post-35",
    "title": "मोहब्बत का अहसास",
    "slug": "mohabbat-ka-ahsaas",
    "category": "Love",
    "content": "<p>तेरी हँसी से ही मेरी सुबह होती है,<br/>तेरी बातों में ही मेरी शाम खोती है।</p>\n<p>तू मिले तो लगे जैसे जन्नत मिल गई,<br/>मेरी हर एक सांस तेरे नाम होती है।</p>\n<blockquote>\"तुम हो तो हर मौसम सुहाना लगता है।\"</blockquote>",
    "excerpt": "तेरी हँसी से ही मेरी सुबह होती है, तेरी बातों में ही मेरी शाम खोती है...",
    "tags": [
      "hindi",
      "love",
      "ahsaas"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-03-04T01:14:43.016Z",
    "updated_at": "2026-03-04T01:14:43.016Z",
    "published_at": "2026-03-04T01:14:43.016Z",
    "featured": false
  },
  {
    "id": "post-36",
    "title": "Bas Tum Aur Main",
    "slug": "bas-tum-aur-main",
    "category": "Love",
    "content": "<p>Kahi door jahan koi shor na ho,<br/>Bas tumhara haath aur mera haath ho.</p>\n<p>Duniya chahe kitni bhi badal jaye,<br/>Mera pyar tumhare liye kabhi kam na ho.</p>\n<blockquote>\"Tera sath hi meri sabse badi taqat hai.\"</blockquote>",
    "excerpt": "Kahi door jahan koi shor na ho, bas tumhara haath aur mera haath ho...",
    "tags": [
      "hinglish",
      "love",
      "saath"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-03-03T00:51:42.116Z",
    "updated_at": "2026-03-03T00:51:42.116Z",
    "published_at": "2026-03-03T00:51:42.116Z",
    "featured": false
  },
  {
    "id": "post-37",
    "title": "The Art of Loving You",
    "slug": "the-art-of-loving-you",
    "category": "Quotes",
    "content": "<p>To love you is as effortless as breathing and as necessary as water.</p>\n<blockquote>\"In your arms, I found a shelter from every storm.\"</blockquote>",
    "excerpt": "To love you is as effortless as breathing and as necessary as water...",
    "tags": [
      "quote",
      "love",
      "english"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-02-28T07:57:43.883Z",
    "updated_at": "2026-02-28T07:57:43.883Z",
    "published_at": "2026-02-28T07:57:43.883Z",
    "featured": false
  },
  {
    "id": "post-38",
    "title": "दिल की बात",
    "slug": "dil-ki-baat",
    "category": "Quotes",
    "content": "<p>जब से तुमसे मोहब्बत हुई है,<br/>खुद से भी ज्यादा तुम्हारी परवाह रहने लगी है।</p>\n<blockquote>\"तुम मेरी वो चाहत हो जो कभी पुरानी नहीं होती।\"</blockquote>",
    "excerpt": "जब से तुमसे मोहब्बत हुई है, खुद से भी ज्यादा तुम्हारी परवाह रहने लगी है...",
    "tags": [
      "hindi",
      "quote",
      "chahat"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-02-27T03:44:32.555Z",
    "updated_at": "2026-02-27T03:44:32.555Z",
    "published_at": "2026-02-27T03:44:32.555Z",
    "featured": false
  },
  {
    "id": "post-39",
    "title": "Tera Muskurata Chehra",
    "slug": "tera-muskurata-chehra",
    "category": "Quotes",
    "content": "<p>Tumhari ek smile hi mera din bana deti hai.</p>\n<blockquote>\"Love is not about finding perfection, it is about creating magic together.\"</blockquote>",
    "excerpt": "Tumhari ek smile hi mera din bana deti hai...",
    "tags": [
      "hinglish",
      "quote",
      "smile"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-02-21T06:14:50.014Z",
    "updated_at": "2026-02-21T06:14:50.014Z",
    "published_at": "2026-02-21T06:14:50.014Z",
    "featured": false
  },
  {
    "id": "post-40",
    "title": "Starlight Vows",
    "slug": "starlight-vows",
    "category": "Micro Poems",
    "content": "<p>Underneath the quiet midnight rain,<br/>Your love removed my every pain.</p>",
    "excerpt": "Underneath the quiet midnight rain, your love removed my every pain...",
    "tags": [
      "micro-poem",
      "starlight",
      "love"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-02-10T22:21:44.969Z",
    "updated_at": "2026-02-10T22:21:44.969Z",
    "published_at": "2026-02-10T22:21:44.969Z",
    "featured": false
  },
  {
    "id": "post-41",
    "title": "रूही एहसास",
    "slug": "roohi-ehsaas",
    "category": "Micro Poems",
    "content": "<p>तेरा नाम लेते ही लब मुस्कुरा देते हैं,<br/>तुम वो ख्वाब हो जो हर रात जगा देते हो।</p>",
    "excerpt": "तेरा नाम लेते ही लब मुस्कुरा देते हैं, तुम वो ख्वाब हो जो हर रात जगा देते हो...",
    "tags": [
      "hindi",
      "micro-poem",
      "khwaab"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-02-08T14:07:54.091Z",
    "updated_at": "2026-02-08T14:07:54.091Z",
    "published_at": "2026-02-08T14:07:54.091Z",
    "featured": false
  },
  {
    "id": "post-42",
    "title": "Tum Aur Khwaab",
    "slug": "tum-aur-khwaab",
    "category": "Micro Poems",
    "content": "<p>Har khwaab mein bas tera hi fitoor hai,<br/>Tu paas hai toh sab kuch manzoor hai.</p>",
    "excerpt": "Har khwaab mein bas tera hi fitoor hai, tu paas hai toh sab kuch manzoor hai...",
    "tags": [
      "hinglish",
      "micro-poem",
      "fitoor"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-01-29T00:47:10.352Z",
    "updated_at": "2026-01-29T00:47:10.352Z",
    "published_at": "2026-01-29T00:47:10.352Z",
    "featured": false
  },
  {
    "id": "post-43",
    "title": "The Garden of Our Love",
    "slug": "the-garden-of-our-love",
    "category": "Love",
    "content": "<p>We planted seeds of kindness in the quiet early spring,<br/>And watched the golden blossoms that the summer days would bring.</p>\n<p>Through every changing season and through every rising tide,<br/>I walk with total confidence when you are by my side.</p>\n<blockquote>\"You are the flower that never fades,<br/>The sun that brightens shadowed glades.\"</blockquote>",
    "excerpt": "We planted seeds of kindness in the quiet early spring, and watched the golden blossoms...",
    "tags": [
      "love",
      "poetry",
      "garden",
      "english"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-01-22T15:15:37.875Z",
    "updated_at": "2026-01-22T15:15:37.875Z",
    "published_at": "2026-01-22T15:15:37.875Z",
    "featured": false
  },
  {
    "id": "post-44",
    "title": "सांसों का बन्धन",
    "slug": "saanson-ka-bandhan",
    "category": "Love",
    "content": "<p>तेरी सांसों की गर्माहट में खो जाना चाहता हूँ,<br/>मैं ता-उम्र सिर्फ़ तुम्हारा हो जाना चाहता हूँ।</p>\n<p>ना कोई तमन्ना है अब इस जहां से,<br/>बस तेरी बांहों में चैन से सो जाना चाहता हूँ।</p>\n<blockquote>\"मोहब्बत नाम है उस बेपनाह चाहत का,<br/>जो तुम्हें देखकर मेरे चेहरे पर आती है।\"</blockquote>",
    "excerpt": "तेरी सांसों की गर्माहट में खो जाना चाहता हूँ, मैं ता-उम्र सिर्फ़ तुम्हारा हो जाना चाहता हूँ...",
    "tags": [
      "hindi",
      "love",
      "saans",
      "bandhan"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-01-20T19:27:20.903Z",
    "updated_at": "2026-01-20T19:27:20.903Z",
    "published_at": "2026-01-20T19:27:20.903Z",
    "featured": true
  },
  {
    "id": "post-45",
    "title": "Tumse Pyar Hua Hai Jab Se",
    "slug": "tumse-pyar-hua-hai-jab-se",
    "category": "Love",
    "content": "<p>Jab se tumse pyar hua hai, saari duniya haseen lagne lagi hai.<br/>Khushboo jise kehte hain log, ab teri saanson mein milne lagi hai.</p>\n<p>Mai akele bhi jab chalta hoon raahon mein,<br/>Lagta hai tera haath mere haath mein hai.</p>\n<blockquote>\"Tujhe dekh kar jo sukoon milta hai,<br/>Woh pure jahan mein kahi nahi milta.\"</blockquote>",
    "excerpt": "Jab se tumse pyar hua hai, saari duniya haseen lagne lagi hai...",
    "tags": [
      "hinglish",
      "love",
      "pyar",
      "sukoon"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-12-18T07:54:04.149Z",
    "updated_at": "2025-12-18T07:54:04.149Z",
    "published_at": "2025-12-18T07:54:04.149Z",
    "featured": false
  },
  {
    "id": "post-46",
    "title": "My Favorite Story",
    "slug": "my-favorite-story",
    "category": "Quotes",
    "content": "<p>Out of seven billion people on this planet, my heart chose you without a moment of hesitation.</p>\n<blockquote>\"You are my favorite chapter and my sweetest ending.\"</blockquote>",
    "excerpt": "Out of seven billion people on this planet, my heart chose you without a moment of hesitation...",
    "tags": [
      "quote",
      "love",
      "story",
      "english"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-11-29T20:05:05.721Z",
    "updated_at": "2025-11-29T20:05:05.721Z",
    "published_at": "2025-11-29T20:05:05.721Z",
    "featured": false
  },
  {
    "id": "post-47",
    "title": "इश्क़ की बंदगी",
    "slug": "ishq-ki-bandagi",
    "category": "Quotes",
    "content": "<p>मोहब्बत अगर इबादत है, तो तुम मेरी सबसे पाक दुआ हो।</p>\n<blockquote>\"तेरी ख़ुशी में ही मेरी दुनिया की सारी रौनक़ है।\"</blockquote>",
    "excerpt": "मोहब्बत अगर इबादत है, तो तुम मेरी सबसे पाक दुआ हो...",
    "tags": [
      "hindi",
      "quote",
      "ibadat"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-11-27T15:19:29.009Z",
    "updated_at": "2025-11-27T15:19:29.009Z",
    "published_at": "2025-11-27T15:19:29.009Z",
    "featured": false
  },
  {
    "id": "post-48",
    "title": "Humsafar",
    "slug": "humsafar",
    "category": "Quotes",
    "content": "<p>Zindagi ke har safar mein bas tera hi sath chahiye.</p>\n<blockquote>\"You are not just my love; you are my safe haven.\"</blockquote>",
    "excerpt": "Zindagi ke har safar mein bas tera hi sath chahiye...",
    "tags": [
      "hinglish",
      "quote",
      "humsafar"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-11-15T20:28:17.155Z",
    "updated_at": "2025-11-15T20:28:17.155Z",
    "published_at": "2025-11-15T20:28:17.155Z",
    "featured": false
  },
  {
    "id": "post-49",
    "title": "Eternal Echo",
    "slug": "eternal-echo",
    "category": "Micro Poems",
    "content": "<p>In every beat my heart repeats,<br/>The love that makes my life complete.</p>",
    "excerpt": "In every beat my heart repeats, the love that makes my life complete...",
    "tags": [
      "micro-poem",
      "heartbeat",
      "english"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-11-15T03:25:41.351Z",
    "updated_at": "2025-11-15T03:25:41.351Z",
    "published_at": "2025-11-15T03:25:41.351Z",
    "featured": false
  },
  {
    "id": "post-50",
    "title": "दिल का साज़",
    "slug": "dil-ka-saaz",
    "category": "Micro Poems",
    "content": "<p>तेरी हँसी से बजता है मेरे दिल का साज़,<br/>तुम ही हो मेरी हर ख़ुशी का नवां राज़।</p>",
    "excerpt": "तेरी हँसी से बजता है मेरे दिल का साज़, तुम ही हो मेरी हर ख़ुशी का नवां राज़...",
    "tags": [
      "hindi",
      "micro-poem",
      "saaz"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-11-11T16:01:41.176Z",
    "updated_at": "2025-11-11T16:01:41.176Z",
    "published_at": "2025-11-11T16:01:41.176Z",
    "featured": false
  },
  {
    "id": "post-51",
    "title": "Tere Naal Pyar",
    "slug": "tere-naal-pyar",
    "category": "Micro Poems",
    "content": "<p>Tere sath guzra har ek lamha khoobsurat hai,<br/>Mujhe bass ab teri hi zaroorat hai.</p>",
    "excerpt": "Tere sath guzra har ek lamha khoobsurat hai, mujhe bass ab teri hi zaroorat hai...",
    "tags": [
      "hinglish",
      "micro-poem",
      "lamha"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-11-04T15:06:53.164Z",
    "updated_at": "2025-11-04T15:06:53.164Z",
    "published_at": "2025-11-04T15:06:53.164Z",
    "featured": false
  },
  {
    "id": "post-52",
    "title": "The Tapestry of You and Me",
    "slug": "the-tapestry-of-you-and-me",
    "category": "Love",
    "content": "<p>We weave our dreams in golden threads of conversations at midnight,<br/>Where every word you whisper fills my darkness with warm light.</p>\n<p>I see our future written in the gentle way you care,<br/>The way your presence fills the room like sweet perfumed air.<br/>No storm can shake the fortress that we built with quiet trust,<br/>Where love turns simple moments into gold from everyday dust.</p>\n<blockquote>\"You are my anchor in deep waters, my light upon the hill,<br/>The one my restless heart will love, and always, forever will.\"</blockquote>\n<p>Together we will write each verse until the story's end,<br/>My lover, my soulmate, my constant lifetime friend.</p>",
    "excerpt": "We weave our dreams in golden threads of conversations at midnight, where every word you whisper fills my darkness...",
    "tags": [
      "love",
      "tapestry",
      "romance",
      "poetry",
      "soulmate"
    ],
    "cover_image": "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
    "status": "published",
    "view_count": 0,
    "created_at": "2025-11-01T09:13:04.759Z",
    "updated_at": "2025-11-01T09:13:04.759Z",
    "published_at": "2025-11-01T09:13:04.759Z",
    "featured": true
  },
  {
    "id": "post-53",
    "title": "सख्त लौंडा और उसकी पहली मोहब्बत",
    "slug": "sakht-launda-aur-uski-pehli-mohabbat",
    "category": "Love",
    "content": "<p>हम वो लोग हैं जो दोस्तों के सामने शेर बनते हैं। हर छोटी बात पर कहते हैं— \"अरे भाई, अपुन को फर्क नहीं पड़ता!\" लेकिन उस दिन जब तुम सामने से गुजरीं, और हवा में तुम्हारी वही हल्की सी इलायची वाली खुशबू आई... सच कहूं, मेरा पूरा एटीट्यूड एक सेकेंड में पिघल गया।</p>\n<p>मैंने दोस्तों से कहा— \"अरे कुछ नहीं बे, बस ऐसी ही देख रहा था।\" पर दिल अंदर से चिल्ला रहा था कि भाई, खत्म! खेल खत्म हो चुका है। तुम्हारे मुस्कुराने में वो एक अजीब सी सादगी थी जो किसी फिल्टर या बनावट की मोहताज नहीं थी।</p>\n<blockquote>\"हम पिघलते नहीं थे किसी के हुस्न पर,<br/>पर तुम्हारी उस एक हँसी ने हमारे सारे उसूल तोड़ दिए।\"</blockquote>\n<p>उस दिन के बाद से मैंने चाय की दुकान पर बैठना बढ़ा दिया, सिर्फ इस उम्मीद में कि शायद तुम कॉलेज से लौटते वक्त एक बार उस रास्ते से गुजरोगी। मोहब्बत कोई शेर-ओ-शायरी नहीं होती, मोहब्बत तो वो खामोश इंतजार है जो बिना किसी उम्मीद के भी खूबसूरत लगता है।</p>",
    "excerpt": "हम वो लोग हैं जो दोस्तों के सामने शेर बनते हैं। पर उस दिन जब तुम सामने से गुजरीं...",
    "tags": [
      "zakir-khan-style",
      "sakht-launda",
      "love",
      "hindi",
      "long-story"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-11-01T00:42:24.761Z",
    "updated_at": "2025-11-01T00:42:24.761Z",
    "published_at": "2025-11-01T00:42:24.761Z",
    "featured": true
  },
  {
    "id": "post-54",
    "title": "Woh Tapri Wali Chai Aur Tumhari Baatein",
    "slug": "woh-tapri-wali-chai-aur-tumhari-baatein",
    "category": "Stories",
    "content": "<p>Nukkad ki us purani chai ki dukan par hum roz milte the. 10 rupaye ki kulhad wali chai, dhalta hua sooraj, aur tumhara bina ruke ghanton bolte rehna. Mai bas chupchap chai ke ghoont leta aur tumhe sunta rehta.</p>\n<p>Tum kehti thi— \"Aman, tum kitne kam bolte ho!\" Par tumhe kya pata tha ki jab tum bolti ho, toh mera bolna gunah lagta tha. Tumhari baaton mein ek aisi raw nami thi jo aaj kal ki duniya mein kahin milti hi nahi.</p>\n<blockquote>\"Aise log zindagi mein baar baar nahi milte,<br/>Jo bina kisi matlab ke aapki har chhoti baat yaad rakhein.\"</blockquote>\n<p>Aaj bhi jab mai akela kisi chai ki tapri par baithta hoon, toh kullad ki saondhi khushbu mein bas tumhari aawaz gungunati hai.</p>",
    "excerpt": "Nukkad ki us purani chai ki dukan par hum roz milte the. 10 rupaye ki kulhad wali chai...",
    "tags": [
      "zakir-khan-style",
      "hinglish",
      "chai",
      "stories",
      "romance"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-10-29T13:26:28.156Z",
    "updated_at": "2025-10-29T13:26:28.156Z",
    "published_at": "2025-10-29T13:26:28.156Z",
    "featured": true
  },
  {
    "id": "post-55",
    "title": "बिला वजह का रास्ता और तुम",
    "slug": "bila-wajah-ka-raasta-aur-tum",
    "category": "Thoughts",
    "content": "<p>मेरा घर उल्टा पड़ता था, पर रोज शाम को मैं उसी रास्ते से अपनी बाइक निकालता था जहाँ तुम्हारा कोचिंग सेंटर था। दोस्त पूछते— \"अबे उधर क्यों जा रहा है?\" मैं हंसकर टाल देता कि थोड़ा काम है।</p>\n<p>पर काम सिर्फ इतना था कि लाल बत्ती पर अगर तुम अपनी सहेली के साथ स्कूटी पर दिख जाओ, तो वो 30 सेकेंड का रेड लाइट सिग्नल मेरी पूरी दिन भर की थकान मिटा देता था।</p>\n<blockquote>\"इश्क़ में इंसान बड़ा बेवकूफ बन जाता है,<br/>पर वो बेवकूफी दुनिया की सबसे हसीन चीज़ लगती है।\"</blockquote>\n<p>ना मैंने कभी तुम्हें रोका, ना कभी अपना नाम बताया। बस एक खामोश मौजूदगी थी जो मुझे ये अहसास दिलाती थी कि जिंदगी अभी भी खूबसूरत है।</p>",
    "excerpt": "मेरा घर उल्टा पड़ता था, पर रोज शाम को मैं उसी रास्ते से अपनी बाइक निकालता था...",
    "tags": [
      "zakir-khan-style",
      "thoughts",
      "hindi",
      "unspoken-love"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-10-21T16:08:50.400Z",
    "updated_at": "2025-10-21T16:08:50.400Z",
    "published_at": "2025-10-21T16:08:50.400Z",
    "featured": false
  },
  {
    "id": "post-56",
    "title": "Purane Screenshots Aur Woh Midnight Chats",
    "slug": "purane-screenshots-aur-woh-midnight-chats",
    "category": "Heartbreak",
    "content": "<p>Aaj raat gallery saaf karte karte tumhare purane chats ke screenshots samne aa gaye. 2:30 baje ki woh baatein— \"Tum soye nahi abhi tak?\", \"Nahi, tumse baat kar raha tha.\"</p>\n<p>Kitni aasan lagti thi na tab zindagi. Na koi Ego, na koi formalities. Bas do log jo ek dusre se baat kiye bina so nahi paate the. Aur aaj dekho... Hum dono online hain, par message bhejne ki himmat dono mein nahi hai.</p>\n<blockquote>\"Sabse zyada dard tab hota hai,<br/>Jab do janne wale log sudden strangers ban jate hain.\"</blockquote>\n<p>Maine woh screenshots delete nahi kiye. Kyunki woh is baat ka saboot hain ki kabhi koi tha jo mere har khayal ki parwah karta tha.</p>",
    "excerpt": "Aaj raat gallery saaf karte karte tumhare purane chats ke screenshots samne aa gaye...",
    "tags": [
      "zakir-khan-style",
      "heartbreak",
      "hinglish",
      "chats",
      "nostalgia"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-10-17T01:05:25.030Z",
    "updated_at": "2025-10-17T01:05:25.030Z",
    "published_at": "2025-10-17T01:05:25.030Z",
    "featured": false
  },
  {
    "id": "post-57",
    "title": "बालकनी की हवा और तुम्हारा खयाल",
    "slug": "balcony-ki-hawa-aur-tumhara-khayal",
    "category": "Love",
    "content": "<p>रात के 12 बजे जब पूरा शहर सो जाता है, मैं अपनी छत की बालकनी में आकर खड़ा हो जाता हूँ। ठंडी हवा चलती है, और दूर कहीं सड़क की लाइट जलती-बुझती दिखती है।</p>\n<p>ऐसी रातों में तुम्हारा खयाल आना कोई इत्तफाक नहीं होता। तुम वो ख्वाब बन चुकी हो जो आंखें बंद करने पर नहीं, बल्कि खुली आंखों से दिखता है। तुम्हारी सादगी, तुम्हारा वो झिझक कर बात करना, और बात करते-करते अपनी जुल्फों को कान के पीछे हटाना... ये सब मेरे दिल में छप चुका है।</p>\n<blockquote>\"कोई पूछे कि मोहब्बत क्या है,<br/>तो मैं मुस्कुरा कर तुम्हारा नाम ले लूँ।\"</blockquote>\n<p>अब मुझे फर्क नहीं पड़ता कि कल क्या होगा। आज इस पल में तुम मेरी सोच का सबसे खूबसूरत हिस्सा हो।</p>",
    "excerpt": "रात के 12 बजे जब पूरा शहर सो जाता है, मैं अपनी छत की बालकनी में आकर खड़ा हो जाता हूँ...",
    "tags": [
      "zakir-khan-style",
      "love",
      "hindi",
      "poetic-prose"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-10-12T13:08:38.917Z",
    "updated_at": "2025-10-12T13:08:38.917Z",
    "published_at": "2025-10-12T13:08:38.917Z",
    "featured": true
  },
  {
    "id": "post-58",
    "title": "Tumhari Pehli Muskaan Aur Mera Pighalna",
    "slug": "tumhari-pehli-muskaan-aur-mera-pighalna",
    "category": "Love",
    "content": "<p>Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai. Hum grand gestures nahi kar paate, par jab tumhare paas aate hain toh humara pura attitude ek taraf ho jata hai.</p>\n<p>Mujhe yaad hai woh din jab tumne mera favorite song sun kar bola tha— \"Aman, yeh toh mera bhi favorite hai!\" Bus wahi 5 seconds mein mujhe laga ki haan... Khuda ne thoda waqt nikal kar humare baare mein socha tha.</p>\n<blockquote>\"Pyar wo nahi jo duniya ko dikhaya jaye,<br/>Pyar toh wo hai jo chupchap dil ke ek kone mein zinda rahe.\"</blockquote>\n<p>Tum jab muskurati ho na, toh baki saare stress gayab ho jate hain. Aur sach bolun, toh mujhe bas yahi chahiye zindagi se.</p>",
    "excerpt": "Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai...",
    "tags": [
      "zakir-khan-style",
      "hinglish",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-09-19T23:46:40.114Z",
    "updated_at": "2025-09-19T23:46:40.114Z",
    "published_at": "2025-09-19T23:46:40.114Z",
    "featured": true
  },
  {
    "id": "post-59",
    "title": "दोस्ती और मोहब्बत के बीच का वो महीन धागा",
    "slug": "post-zakir-59",
    "category": "Stories",
    "content": "<p>हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों या महंगे तोहफों से नहीं आती। हमारी मोहब्बत तो बहुत छोटी-छोटी चीज़ों में छुपी होती है— जैसे तुम्हारे लिए ऑटो रोकना, तुम्हारे बैग का ज़िप बंद करना, या जब तुम सड़क पार करो तो तुम्हें अपनी राइट साइड कर लेना।</p>\n<p>लोग कहते हैं कि सख्त लौंडे पिघलते नहीं। पर सच तो ये है कि जब सही इंसान सामने आता है, तो इंसान पिघलना नहीं चाहता... वो बस बह जाना चाहता है। तुम्हारी बातों में वो एक सुकून है जो दिन भर की भागदौड़ के बाद किसी शांत पेड़ की छांव जैसा लगता है।</p>\n<blockquote>\"इश्क़ में कोई बड़ा कारनामा नहीं करना पड़ता,<br/>बस किसी का हाथ थाम कर उसके हर सुख-दुख में साथ खड़े रहना होता है।\"</blockquote>\n<p>आज जब मैं ये लिख रहा हूँ, तो बाहर हल्की सी बारिश हो रही है। और मेरे चाय के कप से उठते धुएं में सिर्फ तुम्हारा ही चेहरा दिख रहा है।</p>",
    "excerpt": "हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों से नहीं आती...",
    "tags": [
      "zakir-khan-style",
      "hindi",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-09-12T07:01:52.204Z",
    "updated_at": "2025-09-12T07:01:52.204Z",
    "published_at": "2025-09-12T07:01:52.204Z",
    "featured": false
  },
  {
    "id": "post-60",
    "title": "Metro Ka Safar Aur Tumhara Samne Baithna",
    "slug": "metro-ka-safar-aur-tumhara-samne-baithna",
    "category": "Stories",
    "content": "<p>Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai. Hum grand gestures nahi kar paate, par jab tumhare paas aate hain toh humara pura attitude ek taraf ho jata hai.</p>\n<p>Mujhe yaad hai woh din jab tumne mera favorite song sun kar bola tha— \"Aman, yeh toh mera bhi favorite hai!\" Bus wahi 5 seconds mein mujhe laga ki haan... Khuda ne thoda waqt nikal kar humare baare mein socha tha.</p>\n<blockquote>\"Pyar wo nahi jo duniya ko dikhaya jaye,<br/>Pyar toh wo hai jo chupchap dil ke ek kone mein zinda rahe.\"</blockquote>\n<p>Tum jab muskurati ho na, toh baki saare stress gayab ho jate hain. Aur sach bolun, toh mujhe bas yahi chahiye zindagi se.</p>",
    "excerpt": "Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai...",
    "tags": [
      "zakir-khan-style",
      "hinglish",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-09-09T09:02:32.310Z",
    "updated_at": "2025-09-09T09:02:32.310Z",
    "published_at": "2025-09-09T09:02:32.310Z",
    "featured": false
  },
  {
    "id": "post-61",
    "title": "जब इंसान का दिल सच में टूटता है",
    "slug": "post-zakir-61",
    "category": "Heartbreak",
    "content": "<p>हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों या महंगे तोहफों से नहीं आती। हमारी मोहब्बत तो बहुत छोटी-छोटी चीज़ों में छुपी होती है— जैसे तुम्हारे लिए ऑटो रोकना, तुम्हारे बैग का ज़िप बंद करना, या जब तुम सड़क पार करो तो तुम्हें अपनी राइट साइड कर लेना।</p>\n<p>लोग कहते हैं कि सख्त लौंडे पिघलते नहीं। पर सच तो ये है कि जब सही इंसान सामने आता है, तो इंसान पिघलना नहीं चाहता... वो बस बह जाना चाहता है। तुम्हारी बातों में वो एक सुकून है जो दिन भर की भागदौड़ के बाद किसी शांत पेड़ की छांव जैसा लगता है।</p>\n<blockquote>\"इश्क़ में कोई बड़ा कारनामा नहीं करना पड़ता,<br/>बस किसी का हाथ थाम कर उसके हर सुख-दुख में साथ खड़े रहना होता है।\"</blockquote>\n<p>आज जब मैं ये लिख रहा हूँ, तो बाहर हल्की सी बारिश हो रही है। और मेरे चाय के कप से उठते धुएं में सिर्फ तुम्हारा ही चेहरा दिख रहा है।</p>",
    "excerpt": "हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों से नहीं आती...",
    "tags": [
      "zakir-khan-style",
      "hindi",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-09-08T01:06:30.613Z",
    "updated_at": "2025-09-08T01:06:30.613Z",
    "published_at": "2025-09-08T01:06:30.613Z",
    "featured": false
  },
  {
    "id": "post-62",
    "title": "Woh WhatsApp Ka Last Seen Aur Mera Intezar",
    "slug": "woh-whatsapp-ka-last-seen-aur-mera-intezar",
    "category": "Thoughts",
    "content": "<p>Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai. Hum grand gestures nahi kar paate, par jab tumhare paas aate hain toh humara pura attitude ek taraf ho jata hai.</p>\n<p>Mujhe yaad hai woh din jab tumne mera favorite song sun kar bola tha— \"Aman, yeh toh mera bhi favorite hai!\" Bus wahi 5 seconds mein mujhe laga ki haan... Khuda ne thoda waqt nikal kar humare baare mein socha tha.</p>\n<blockquote>\"Pyar wo nahi jo duniya ko dikhaya jaye,<br/>Pyar toh wo hai jo chupchap dil ke ek kone mein zinda rahe.\"</blockquote>\n<p>Tum jab muskurati ho na, toh baki saare stress gayab ho jate hain. Aur sach bolun, toh mujhe bas yahi chahiye zindagi se.</p>",
    "excerpt": "Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai...",
    "tags": [
      "zakir-khan-style",
      "hinglish",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-09-03T11:09:38.010Z",
    "updated_at": "2025-09-03T11:09:38.010Z",
    "published_at": "2025-09-03T11:09:38.010Z",
    "featured": false
  },
  {
    "id": "post-63",
    "title": "तुम मुस्कुराई तो सारा जहां संवर गया",
    "slug": "post-zakir-63",
    "category": "Love",
    "content": "<p>हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों या महंगे तोहफों से नहीं आती। हमारी मोहब्बत तो बहुत छोटी-छोटी चीज़ों में छुपी होती है— जैसे तुम्हारे लिए ऑटो रोकना, तुम्हारे बैग का ज़िप बंद करना, या जब तुम सड़क पार करो तो तुम्हें अपनी राइट साइड कर लेना।</p>\n<p>लोग कहते हैं कि सख्त लौंडे पिघलते नहीं। पर सच तो ये है कि जब सही इंसान सामने आता है, तो इंसान पिघलना नहीं चाहता... वो बस बह जाना चाहता है। तुम्हारी बातों में वो एक सुकून है जो दिन भर की भागदौड़ के बाद किसी शांत पेड़ की छांव जैसा लगता है।</p>\n<blockquote>\"इश्क़ में कोई बड़ा कारनामा नहीं करना पड़ता,<br/>बस किसी का हाथ थाम कर उसके हर सुख-दुख में साथ खड़े रहना होता है।\"</blockquote>\n<p>आज जब मैं ये लिख रहा हूँ, तो बाहर हल्की सी बारिश हो रही है। और मेरे चाय के कप से उठते धुएं में सिर्फ तुम्हारा ही चेहरा दिख रहा है।</p>",
    "excerpt": "हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों से नहीं आती...",
    "tags": [
      "zakir-khan-style",
      "hindi",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-08-31T01:16:36.268Z",
    "updated_at": "2025-08-31T01:16:36.268Z",
    "published_at": "2025-08-31T01:16:36.268Z",
    "featured": true
  },
  {
    "id": "post-64",
    "title": "Bina Baat Ke Muskurane Ki Wajah Tum Ho",
    "slug": "bina-baat-ke-muskurane-ki-wajah-tum-ho",
    "category": "Love",
    "content": "<p>Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai. Hum grand gestures nahi kar paate, par jab tumhare paas aate hain toh humara pura attitude ek taraf ho jata hai.</p>\n<p>Mujhe yaad hai woh din jab tumne mera favorite song sun kar bola tha— \"Aman, yeh toh mera bhi favorite hai!\" Bus wahi 5 seconds mein mujhe laga ki haan... Khuda ne thoda waqt nikal kar humare baare mein socha tha.</p>\n<blockquote>\"Pyar wo nahi jo duniya ko dikhaya jaye,<br/>Pyar toh wo hai jo chupchap dil ke ek kone mein zinda rahe.\"</blockquote>\n<p>Tum jab muskurati ho na, toh baki saare stress gayab ho jate hain. Aur sach bolun, toh mujhe bas yahi chahiye zindagi se.</p>",
    "excerpt": "Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai...",
    "tags": [
      "zakir-khan-style",
      "hinglish",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-08-28T08:11:02.005Z",
    "updated_at": "2025-08-28T08:11:02.005Z",
    "published_at": "2025-08-28T08:11:02.005Z",
    "featured": false
  },
  {
    "id": "post-65",
    "title": "पुराने खतों में छुपा हुआ एक अधूरा इक़रार",
    "slug": "post-zakir-65",
    "category": "Poems",
    "content": "<p>हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों या महंगे तोहफों से नहीं आती। हमारी मोहब्बत तो बहुत छोटी-छोटी चीज़ों में छुपी होती है— जैसे तुम्हारे लिए ऑटो रोकना, तुम्हारे बैग का ज़िप बंद करना, या जब तुम सड़क पार करो तो तुम्हें अपनी राइट साइड कर लेना।</p>\n<p>लोग कहते हैं कि सख्त लौंडे पिघलते नहीं। पर सच तो ये है कि जब सही इंसान सामने आता है, तो इंसान पिघलना नहीं चाहता... वो बस बह जाना चाहता है। तुम्हारी बातों में वो एक सुकून है जो दिन भर की भागदौड़ के बाद किसी शांत पेड़ की छांव जैसा लगता है।</p>\n<blockquote>\"इश्क़ में कोई बड़ा कारनामा नहीं करना पड़ता,<br/>बस किसी का हाथ थाम कर उसके हर सुख-दुख में साथ खड़े रहना होता है।\"</blockquote>\n<p>आज जब मैं ये लिख रहा हूँ, तो बाहर हल्की सी बारिश हो रही है। और मेरे चाय के कप से उठते धुएं में सिर्फ तुम्हारा ही चेहरा दिख रहा है।</p>",
    "excerpt": "हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों से नहीं आती...",
    "tags": [
      "zakir-khan-style",
      "hindi",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-08-18T03:00:41.973Z",
    "updated_at": "2025-08-18T03:00:41.973Z",
    "published_at": "2025-08-18T03:00:41.973Z",
    "featured": false
  },
  {
    "id": "post-66",
    "title": "Jab Tumne Mera Haath Pehli Baar Pakda Tha",
    "slug": "jab-tumne-mera-haath-pehli-baar-pakda-tha",
    "category": "Love",
    "content": "<p>Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai. Hum grand gestures nahi kar paate, par jab tumhare paas aate hain toh humara pura attitude ek taraf ho jata hai.</p>\n<p>Mujhe yaad hai woh din jab tumne mera favorite song sun kar bola tha— \"Aman, yeh toh mera bhi favorite hai!\" Bus wahi 5 seconds mein mujhe laga ki haan... Khuda ne thoda waqt nikal kar humare baare mein socha tha.</p>\n<blockquote>\"Pyar wo nahi jo duniya ko dikhaya jaye,<br/>Pyar toh wo hai jo chupchap dil ke ek kone mein zinda rahe.\"</blockquote>\n<p>Tum jab muskurati ho na, toh baki saare stress gayab ho jate hain. Aur sach bolun, toh mujhe bas yahi chahiye zindagi se.</p>",
    "excerpt": "Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai...",
    "tags": [
      "zakir-khan-style",
      "hinglish",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-08-13T12:27:29.710Z",
    "updated_at": "2025-08-13T12:27:29.710Z",
    "published_at": "2025-08-13T12:27:29.710Z",
    "featured": false
  },
  {
    "id": "post-67",
    "title": "खामोशी भी कितनी सुरीली हो सकती है",
    "slug": "post-zakir-67",
    "category": "Thoughts",
    "content": "<p>हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों या महंगे तोहफों से नहीं आती। हमारी मोहब्बत तो बहुत छोटी-छोटी चीज़ों में छुपी होती है— जैसे तुम्हारे लिए ऑटो रोकना, तुम्हारे बैग का ज़िप बंद करना, या जब तुम सड़क पार करो तो तुम्हें अपनी राइट साइड कर लेना।</p>\n<p>लोग कहते हैं कि सख्त लौंडे पिघलते नहीं। पर सच तो ये है कि जब सही इंसान सामने आता है, तो इंसान पिघलना नहीं चाहता... वो बस बह जाना चाहता है। तुम्हारी बातों में वो एक सुकून है जो दिन भर की भागदौड़ के बाद किसी शांत पेड़ की छांव जैसा लगता है।</p>\n<blockquote>\"इश्क़ में कोई बड़ा कारनामा नहीं करना पड़ता,<br/>बस किसी का हाथ थाम कर उसके हर सुख-दुख में साथ खड़े रहना होता है।\"</blockquote>\n<p>आज जब मैं ये लिख रहा हूँ, तो बाहर हल्की सी बारिश हो रही है। और मेरे चाय के कप से उठते धुएं में सिर्फ तुम्हारा ही चेहरा दिख रहा है।</p>",
    "excerpt": "हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों से नहीं आती...",
    "tags": [
      "zakir-khan-style",
      "hindi",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-08-11T11:24:31.097Z",
    "updated_at": "2025-08-11T11:24:31.097Z",
    "published_at": "2025-08-11T11:24:31.097Z",
    "featured": false
  },
  {
    "id": "post-68",
    "title": "Rainy Afternoon Aur Maggi Ki Dukan",
    "slug": "rainy-afternoon-aur-maggi-ki-dukan",
    "category": "Stories",
    "content": "<p>Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai. Hum grand gestures nahi kar paate, par jab tumhare paas aate hain toh humara pura attitude ek taraf ho jata hai.</p>\n<p>Mujhe yaad hai woh din jab tumne mera favorite song sun kar bola tha— \"Aman, yeh toh mera bhi favorite hai!\" Bus wahi 5 seconds mein mujhe laga ki haan... Khuda ne thoda waqt nikal kar humare baare mein socha tha.</p>\n<blockquote>\"Pyar wo nahi jo duniya ko dikhaya jaye,<br/>Pyar toh wo hai jo chupchap dil ke ek kone mein zinda rahe.\"</blockquote>\n<p>Tum jab muskurati ho na, toh baki saare stress gayab ho jate hain. Aur sach bolun, toh mujhe bas yahi chahiye zindagi se.</p>",
    "excerpt": "Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai...",
    "tags": [
      "zakir-khan-style",
      "hinglish",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-08-08T22:11:39.107Z",
    "updated_at": "2025-08-08T22:11:39.107Z",
    "published_at": "2025-08-08T22:11:39.107Z",
    "featured": true
  },
  {
    "id": "post-69",
    "title": "तुम्हारी आवाज़ में वो सुकून है जो दवा में नहीं",
    "slug": "post-zakir-69",
    "category": "Love",
    "content": "<p>हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों या महंगे तोहफों से नहीं आती। हमारी मोहब्बत तो बहुत छोटी-छोटी चीज़ों में छुपी होती है— जैसे तुम्हारे लिए ऑटो रोकना, तुम्हारे बैग का ज़िप बंद करना, या जब तुम सड़क पार करो तो तुम्हें अपनी राइट साइड कर लेना।</p>\n<p>लोग कहते हैं कि सख्त लौंडे पिघलते नहीं। पर सच तो ये है कि जब सही इंसान सामने आता है, तो इंसान पिघलना नहीं चाहता... वो बस बह जाना चाहता है। तुम्हारी बातों में वो एक सुकून है जो दिन भर की भागदौड़ के बाद किसी शांत पेड़ की छांव जैसा लगता है।</p>\n<blockquote>\"इश्क़ में कोई बड़ा कारनामा नहीं करना पड़ता,<br/>बस किसी का हाथ थाम कर उसके हर सुख-दुख में साथ खड़े रहना होता है।\"</blockquote>\n<p>आज जब मैं ये लिख रहा हूँ, तो बाहर हल्की सी बारिश हो रही है। और मेरे चाय के कप से उठते धुएं में सिर्फ तुम्हारा ही चेहरा दिख रहा है।</p>",
    "excerpt": "हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों से नहीं आती...",
    "tags": [
      "zakir-khan-style",
      "hindi",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-07-26T08:07:50.921Z",
    "updated_at": "2025-07-26T08:07:50.921Z",
    "published_at": "2025-07-26T08:07:50.921Z",
    "featured": false
  },
  {
    "id": "post-70",
    "title": "Self Respect Aur Mohabbat Ka Balance",
    "slug": "self-respect-aur-mohabbat-ka-balance",
    "category": "Thoughts",
    "content": "<p>Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai. Hum grand gestures nahi kar paate, par jab tumhare paas aate hain toh humara pura attitude ek taraf ho jata hai.</p>\n<p>Mujhe yaad hai woh din jab tumne mera favorite song sun kar bola tha— \"Aman, yeh toh mera bhi favorite hai!\" Bus wahi 5 seconds mein mujhe laga ki haan... Khuda ne thoda waqt nikal kar humare baare mein socha tha.</p>\n<blockquote>\"Pyar wo nahi jo duniya ko dikhaya jaye,<br/>Pyar toh wo hai jo chupchap dil ke ek kone mein zinda rahe.\"</blockquote>\n<p>Tum jab muskurati ho na, toh baki saare stress gayab ho jate hain. Aur sach bolun, toh mujhe bas yahi chahiye zindagi se.</p>",
    "excerpt": "Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai...",
    "tags": [
      "zakir-khan-style",
      "hinglish",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-07-19T01:15:13.412Z",
    "updated_at": "2025-07-19T01:15:13.412Z",
    "published_at": "2025-07-19T01:15:13.412Z",
    "featured": false
  },
  {
    "id": "post-71",
    "title": "जब हम पहली बार सच में मिले थे",
    "slug": "post-zakir-71",
    "category": "Stories",
    "content": "<p>हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों या महंगे तोहफों से नहीं आती। हमारी मोहब्बत तो बहुत छोटी-छोटी चीज़ों में छुपी होती है— जैसे तुम्हारे लिए ऑटो रोकना, तुम्हारे बैग का ज़िप बंद करना, या जब तुम सड़क पार करो तो तुम्हें अपनी राइट साइड कर लेना।</p>\n<p>लोग कहते हैं कि सख्त लौंडे पिघलते नहीं। पर सच तो ये है कि जब सही इंसान सामने आता है, तो इंसान पिघलना नहीं चाहता... वो बस बह जाना चाहता है। तुम्हारी बातों में वो एक सुकून है जो दिन भर की भागदौड़ के बाद किसी शांत पेड़ की छांव जैसा लगता है।</p>\n<blockquote>\"इश्क़ में कोई बड़ा कारनामा नहीं करना पड़ता,<br/>बस किसी का हाथ थाम कर उसके हर सुख-दुख में साथ खड़े रहना होता है।\"</blockquote>\n<p>आज जब मैं ये लिख रहा हूँ, तो बाहर हल्की सी बारिश हो रही है। और मेरे चाय के कप से उठते धुएं में सिर्फ तुम्हारा ही चेहरा दिख रहा है।</p>",
    "excerpt": "हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों से नहीं आती...",
    "tags": [
      "zakir-khan-style",
      "hindi",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-07-17T23:58:45.705Z",
    "updated_at": "2025-07-17T23:58:45.705Z",
    "published_at": "2025-07-17T23:58:45.705Z",
    "featured": false
  },
  {
    "id": "post-72",
    "title": "Woh Black Kurti Aur Tumhari Bindi",
    "slug": "woh-black-kurti-aur-tumhari-bindi",
    "category": "Love",
    "content": "<p>Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai. Hum grand gestures nahi kar paate, par jab tumhare paas aate hain toh humara pura attitude ek taraf ho jata hai.</p>\n<p>Mujhe yaad hai woh din jab tumne mera favorite song sun kar bola tha— \"Aman, yeh toh mera bhi favorite hai!\" Bus wahi 5 seconds mein mujhe laga ki haan... Khuda ne thoda waqt nikal kar humare baare mein socha tha.</p>\n<blockquote>\"Pyar wo nahi jo duniya ko dikhaya jaye,<br/>Pyar toh wo hai jo chupchap dil ke ek kone mein zinda rahe.\"</blockquote>\n<p>Tum jab muskurati ho na, toh baki saare stress gayab ho jate hain. Aur sach bolun, toh mujhe bas yahi chahiye zindagi se.</p>",
    "excerpt": "Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai...",
    "tags": [
      "zakir-khan-style",
      "hinglish",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-07-14T15:45:45.022Z",
    "updated_at": "2025-07-14T15:45:45.022Z",
    "published_at": "2025-07-14T15:45:45.022Z",
    "featured": false
  },
  {
    "id": "post-73",
    "title": "आधी रात का सन्नाटा और तुम्हारी यादें",
    "slug": "post-zakir-73",
    "category": "Heartbreak",
    "content": "<p>हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों या महंगे तोहफों से नहीं आती। हमारी मोहब्बत तो बहुत छोटी-छोटी चीज़ों में छुपी होती है— जैसे तुम्हारे लिए ऑटो रोकना, तुम्हारे बैग का ज़िप बंद करना, या जब तुम सड़क पार करो तो तुम्हें अपनी राइट साइड कर लेना।</p>\n<p>लोग कहते हैं कि सख्त लौंडे पिघलते नहीं। पर सच तो ये है कि जब सही इंसान सामने आता है, तो इंसान पिघलना नहीं चाहता... वो बस बह जाना चाहता है। तुम्हारी बातों में वो एक सुकून है जो दिन भर की भागदौड़ के बाद किसी शांत पेड़ की छांव जैसा लगता है।</p>\n<blockquote>\"इश्क़ में कोई बड़ा कारनामा नहीं करना पड़ता,<br/>बस किसी का हाथ थाम कर उसके हर सुख-दुख में साथ खड़े रहना होता है।\"</blockquote>\n<p>आज जब मैं ये लिख रहा हूँ, तो बाहर हल्की सी बारिश हो रही है। और मेरे चाय के कप से उठते धुएं में सिर्फ तुम्हारा ही चेहरा दिख रहा है।</p>",
    "excerpt": "हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों से नहीं आती...",
    "tags": [
      "zakir-khan-style",
      "hindi",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-07-12T15:09:11.237Z",
    "updated_at": "2025-07-12T15:09:11.237Z",
    "published_at": "2025-07-12T15:09:11.237Z",
    "featured": true
  },
  {
    "id": "post-74",
    "title": "Kabhi Zikr Nahi Kiya Par Pyar Bohot Tha",
    "slug": "kabhi-zikr-nahi-kiya-par-pyar-bohot-tha",
    "category": "Love",
    "content": "<p>Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai. Hum grand gestures nahi kar paate, par jab tumhare paas aate hain toh humara pura attitude ek taraf ho jata hai.</p>\n<p>Mujhe yaad hai woh din jab tumne mera favorite song sun kar bola tha— \"Aman, yeh toh mera bhi favorite hai!\" Bus wahi 5 seconds mein mujhe laga ki haan... Khuda ne thoda waqt nikal kar humare baare mein socha tha.</p>\n<blockquote>\"Pyar wo nahi jo duniya ko dikhaya jaye,<br/>Pyar toh wo hai jo chupchap dil ke ek kone mein zinda rahe.\"</blockquote>\n<p>Tum jab muskurati ho na, toh baki saare stress gayab ho jate hain. Aur sach bolun, toh mujhe bas yahi chahiye zindagi se.</p>",
    "excerpt": "Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai...",
    "tags": [
      "zakir-khan-style",
      "hinglish",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-07-01T20:07:40.848Z",
    "updated_at": "2025-07-01T20:07:40.848Z",
    "published_at": "2025-07-01T20:07:40.848Z",
    "featured": false
  },
  {
    "id": "post-75",
    "title": "अधूरी कहानियों की अपनी एक अलग मिठास होती है",
    "slug": "post-zakir-75",
    "category": "Thoughts",
    "content": "<p>हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों या महंगे तोहफों से नहीं आती। हमारी मोहब्बत तो बहुत छोटी-छोटी चीज़ों में छुपी होती है— जैसे तुम्हारे लिए ऑटो रोकना, तुम्हारे बैग का ज़िप बंद करना, या जब तुम सड़क पार करो तो तुम्हें अपनी राइट साइड कर लेना।</p>\n<p>लोग कहते हैं कि सख्त लौंडे पिघलते नहीं। पर सच तो ये है कि जब सही इंसान सामने आता है, तो इंसान पिघलना नहीं चाहता... वो बस बह जाना चाहता है। तुम्हारी बातों में वो एक सुकून है जो दिन भर की भागदौड़ के बाद किसी शांत पेड़ की छांव जैसा लगता है।</p>\n<blockquote>\"इश्क़ में कोई बड़ा कारनामा नहीं करना पड़ता,<br/>बस किसी का हाथ थाम कर उसके हर सुख-दुख में साथ खड़े रहना होता है।\"</blockquote>\n<p>आज जब मैं ये लिख रहा हूँ, तो बाहर हल्की सी बारिश हो रही है। और मेरे चाय के कप से उठते धुएं में सिर्फ तुम्हारा ही चेहरा दिख रहा है।</p>",
    "excerpt": "हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों से नहीं आती...",
    "tags": [
      "zakir-khan-style",
      "hindi",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-06-27T18:44:44.046Z",
    "updated_at": "2025-06-27T18:44:44.046Z",
    "published_at": "2025-06-27T18:44:44.046Z",
    "featured": false
  },
  {
    "id": "post-76",
    "title": "Tumhari Hasrat Mein Khoya Hua Mai",
    "slug": "tumhari-hasrat-mein-khoya-hua-mai",
    "category": "Love",
    "content": "<p>Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai. Hum grand gestures nahi kar paate, par jab tumhare paas aate hain toh humara pura attitude ek taraf ho jata hai.</p>\n<p>Mujhe yaad hai woh din jab tumne mera favorite song sun kar bola tha— \"Aman, yeh toh mera bhi favorite hai!\" Bus wahi 5 seconds mein mujhe laga ki haan... Khuda ne thoda waqt nikal kar humare baare mein socha tha.</p>\n<blockquote>\"Pyar wo nahi jo duniya ko dikhaya jaye,<br/>Pyar toh wo hai jo chupchap dil ke ek kone mein zinda rahe.\"</blockquote>\n<p>Tum jab muskurati ho na, toh baki saare stress gayab ho jate hain. Aur sach bolun, toh mujhe bas yahi chahiye zindagi se.</p>",
    "excerpt": "Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai...",
    "tags": [
      "zakir-khan-style",
      "hinglish",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-06-23T16:11:40.424Z",
    "updated_at": "2025-06-23T16:11:40.424Z",
    "published_at": "2025-06-23T16:11:40.424Z",
    "featured": false
  },
  {
    "id": "post-77",
    "title": "गुलाबी ठंड और चाय का वो कुल्हड़",
    "slug": "post-zakir-77",
    "category": "Stories",
    "content": "<p>हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों या महंगे तोहफों से नहीं आती। हमारी मोहब्बत तो बहुत छोटी-छोटी चीज़ों में छुपी होती है— जैसे तुम्हारे लिए ऑटो रोकना, तुम्हारे बैग का ज़िप बंद करना, या जब तुम सड़क पार करो तो तुम्हें अपनी राइट साइड कर लेना।</p>\n<p>लोग कहते हैं कि सख्त लौंडे पिघलते नहीं। पर सच तो ये है कि जब सही इंसान सामने आता है, तो इंसान पिघलना नहीं चाहता... वो बस बह जाना चाहता है। तुम्हारी बातों में वो एक सुकून है जो दिन भर की भागदौड़ के बाद किसी शांत पेड़ की छांव जैसा लगता है।</p>\n<blockquote>\"इश्क़ में कोई बड़ा कारनामा नहीं करना पड़ता,<br/>बस किसी का हाथ थाम कर उसके हर सुख-दुख में साथ खड़े रहना होता है।\"</blockquote>\n<p>आज जब मैं ये लिख रहा हूँ, तो बाहर हल्की सी बारिश हो रही है। और मेरे चाय के कप से उठते धुएं में सिर्फ तुम्हारा ही चेहरा दिख रहा है।</p>",
    "excerpt": "हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों से नहीं आती...",
    "tags": [
      "zakir-khan-style",
      "hindi",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-06-23T15:39:41.760Z",
    "updated_at": "2025-06-23T15:39:41.760Z",
    "published_at": "2025-06-23T15:39:41.760Z",
    "featured": false
  },
  {
    "id": "post-78",
    "title": "Unsent Messages Ka Ek Bada Folder",
    "slug": "unsent-messages-ka-ek-bada-folder",
    "category": "Heartbreak",
    "content": "<p>Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai. Hum grand gestures nahi kar paate, par jab tumhare paas aate hain toh humara pura attitude ek taraf ho jata hai.</p>\n<p>Mujhe yaad hai woh din jab tumne mera favorite song sun kar bola tha— \"Aman, yeh toh mera bhi favorite hai!\" Bus wahi 5 seconds mein mujhe laga ki haan... Khuda ne thoda waqt nikal kar humare baare mein socha tha.</p>\n<blockquote>\"Pyar wo nahi jo duniya ko dikhaya jaye,<br/>Pyar toh wo hai jo chupchap dil ke ek kone mein zinda rahe.\"</blockquote>\n<p>Tum jab muskurati ho na, toh baki saare stress gayab ho jate hain. Aur sach bolun, toh mujhe bas yahi chahiye zindagi se.</p>",
    "excerpt": "Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai...",
    "tags": [
      "zakir-khan-style",
      "hinglish",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-06-20T01:58:14.727Z",
    "updated_at": "2025-06-20T01:58:14.727Z",
    "published_at": "2025-06-20T01:58:14.727Z",
    "featured": true
  },
  {
    "id": "post-79",
    "title": "तुमसे प्यार करना मेरी सबसे बड़ी ताक़त है",
    "slug": "post-zakir-79",
    "category": "Love",
    "content": "<p>हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों या महंगे तोहफों से नहीं आती। हमारी मोहब्बत तो बहुत छोटी-छोटी चीज़ों में छुपी होती है— जैसे तुम्हारे लिए ऑटो रोकना, तुम्हारे बैग का ज़िप बंद करना, या जब तुम सड़क पार करो तो तुम्हें अपनी राइट साइड कर लेना।</p>\n<p>लोग कहते हैं कि सख्त लौंडे पिघलते नहीं। पर सच तो ये है कि जब सही इंसान सामने आता है, तो इंसान पिघलना नहीं चाहता... वो बस बह जाना चाहता है। तुम्हारी बातों में वो एक सुकून है जो दिन भर की भागदौड़ के बाद किसी शांत पेड़ की छांव जैसा लगता है।</p>\n<blockquote>\"इश्क़ में कोई बड़ा कारनामा नहीं करना पड़ता,<br/>बस किसी का हाथ थाम कर उसके हर सुख-दुख में साथ खड़े रहना होता है।\"</blockquote>\n<p>आज जब मैं ये लिख रहा हूँ, तो बाहर हल्की सी बारिश हो रही है। और मेरे चाय के कप से उठते धुएं में सिर्फ तुम्हारा ही चेहरा दिख रहा है।</p>",
    "excerpt": "हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों से नहीं आती...",
    "tags": [
      "zakir-khan-style",
      "hindi",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-06-19T02:31:57.608Z",
    "updated_at": "2025-06-19T02:31:57.608Z",
    "published_at": "2025-06-19T02:31:57.608Z",
    "featured": false
  },
  {
    "id": "post-80",
    "title": "Bus Ki Khidki Wali Seat Aur Khayal Tumhara",
    "slug": "bus-ki-khidki-wali-seat-aur-khayal-tumhara",
    "category": "Stories",
    "content": "<p>Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai. Hum grand gestures nahi kar paate, par jab tumhare paas aate hain toh humara pura attitude ek taraf ho jata hai.</p>\n<p>Mujhe yaad hai woh din jab tumne mera favorite song sun kar bola tha— \"Aman, yeh toh mera bhi favorite hai!\" Bus wahi 5 seconds mein mujhe laga ki haan... Khuda ne thoda waqt nikal kar humare baare mein socha tha.</p>\n<blockquote>\"Pyar wo nahi jo duniya ko dikhaya jaye,<br/>Pyar toh wo hai jo chupchap dil ke ek kone mein zinda rahe.\"</blockquote>\n<p>Tum jab muskurati ho na, toh baki saare stress gayab ho jate hain. Aur sach bolun, toh mujhe bas yahi chahiye zindagi se.</p>",
    "excerpt": "Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai...",
    "tags": [
      "zakir-khan-style",
      "hinglish",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-06-11T13:59:30.374Z",
    "updated_at": "2025-06-11T13:59:30.374Z",
    "published_at": "2025-06-11T13:59:30.374Z",
    "featured": false
  },
  {
    "id": "post-81",
    "title": "सख्त लौंडे की नरम आदतें",
    "slug": "post-zakir-81",
    "category": "Love",
    "content": "<p>हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों या महंगे तोहफों से नहीं आती। हमारी मोहब्बत तो बहुत छोटी-छोटी चीज़ों में छुपी होती है— जैसे तुम्हारे लिए ऑटो रोकना, तुम्हारे बैग का ज़िप बंद करना, या जब तुम सड़क पार करो तो तुम्हें अपनी राइट साइड कर लेना।</p>\n<p>लोग कहते हैं कि सख्त लौंडे पिघलते नहीं। पर सच तो ये है कि जब सही इंसान सामने आता है, तो इंसान पिघलना नहीं चाहता... वो बस बह जाना चाहता है। तुम्हारी बातों में वो एक सुकून है जो दिन भर की भागदौड़ के बाद किसी शांत पेड़ की छांव जैसा लगता है।</p>\n<blockquote>\"इश्क़ में कोई बड़ा कारनामा नहीं करना पड़ता,<br/>बस किसी का हाथ थाम कर उसके हर सुख-दुख में साथ खड़े रहना होता है।\"</blockquote>\n<p>आज जब मैं ये लिख रहा हूँ, तो बाहर हल्की सी बारिश हो रही है। और मेरे चाय के कप से उठते धुएं में सिर्फ तुम्हारा ही चेहरा दिख रहा है।</p>",
    "excerpt": "हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों से नहीं आती...",
    "tags": [
      "zakir-khan-style",
      "hindi",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-06-05T12:53:03.888Z",
    "updated_at": "2025-06-05T12:53:03.888Z",
    "published_at": "2025-06-05T12:53:03.888Z",
    "featured": false
  },
  {
    "id": "post-82",
    "title": "Tum Jab Nazrein Jhuka Kar Muskurati Ho",
    "slug": "tum-jab-nazrein-jhuka-kar-muskurati-ho",
    "category": "Love",
    "content": "<p>Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai. Hum grand gestures nahi kar paate, par jab tumhare paas aate hain toh humara pura attitude ek taraf ho jata hai.</p>\n<p>Mujhe yaad hai woh din jab tumne mera favorite song sun kar bola tha— \"Aman, yeh toh mera bhi favorite hai!\" Bus wahi 5 seconds mein mujhe laga ki haan... Khuda ne thoda waqt nikal kar humare baare mein socha tha.</p>\n<blockquote>\"Pyar wo nahi jo duniya ko dikhaya jaye,<br/>Pyar toh wo hai jo chupchap dil ke ek kone mein zinda rahe.\"</blockquote>\n<p>Tum jab muskurati ho na, toh baki saare stress gayab ho jate hain. Aur sach bolun, toh mujhe bas yahi chahiye zindagi se.</p>",
    "excerpt": "Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai...",
    "tags": [
      "zakir-khan-style",
      "hinglish",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-05-21T03:40:25.535Z",
    "updated_at": "2025-05-21T03:40:25.535Z",
    "published_at": "2025-05-21T03:40:25.535Z",
    "featured": false
  },
  {
    "id": "post-83",
    "title": "यादों के पुराने पन्ने और चाय का धुआं",
    "slug": "post-zakir-83",
    "category": "Thoughts",
    "content": "<p>हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों या महंगे तोहफों से नहीं आती। हमारी मोहब्बत तो बहुत छोटी-छोटी चीज़ों में छुपी होती है— जैसे तुम्हारे लिए ऑटो रोकना, तुम्हारे बैग का ज़िप बंद करना, या जब तुम सड़क पार करो तो तुम्हें अपनी राइट साइड कर लेना।</p>\n<p>लोग कहते हैं कि सख्त लौंडे पिघलते नहीं। पर सच तो ये है कि जब सही इंसान सामने आता है, तो इंसान पिघलना नहीं चाहता... वो बस बह जाना चाहता है। तुम्हारी बातों में वो एक सुकून है जो दिन भर की भागदौड़ के बाद किसी शांत पेड़ की छांव जैसा लगता है।</p>\n<blockquote>\"इश्क़ में कोई बड़ा कारनामा नहीं करना पड़ता,<br/>बस किसी का हाथ थाम कर उसके हर सुख-दुख में साथ खड़े रहना होता है।\"</blockquote>\n<p>आज जब मैं ये लिख रहा हूँ, तो बाहर हल्की सी बारिश हो रही है। और मेरे चाय के कप से उठते धुएं में सिर्फ तुम्हारा ही चेहरा दिख रहा है।</p>",
    "excerpt": "हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों से नहीं आती...",
    "tags": [
      "zakir-khan-style",
      "hindi",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-05-21T02:02:28.434Z",
    "updated_at": "2025-05-21T02:02:28.434Z",
    "published_at": "2025-05-21T02:02:28.434Z",
    "featured": true
  },
  {
    "id": "post-84",
    "title": "Dil Chahta Hai Bass Tumhe Sunte Rehna",
    "slug": "dil-chahta-hai-bass-tumhe-sunte-rehna",
    "category": "Love",
    "content": "<p>Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai. Hum grand gestures nahi kar paate, par jab tumhare paas aate hain toh humara pura attitude ek taraf ho jata hai.</p>\n<p>Mujhe yaad hai woh din jab tumne mera favorite song sun kar bola tha— \"Aman, yeh toh mera bhi favorite hai!\" Bus wahi 5 seconds mein mujhe laga ki haan... Khuda ne thoda waqt nikal kar humare baare mein socha tha.</p>\n<blockquote>\"Pyar wo nahi jo duniya ko dikhaya jaye,<br/>Pyar toh wo hai jo chupchap dil ke ek kone mein zinda rahe.\"</blockquote>\n<p>Tum jab muskurati ho na, toh baki saare stress gayab ho jate hain. Aur sach bolun, toh mujhe bas yahi chahiye zindagi se.</p>",
    "excerpt": "Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai...",
    "tags": [
      "zakir-khan-style",
      "hinglish",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-05-20T00:32:56.832Z",
    "updated_at": "2025-05-20T00:32:56.832Z",
    "published_at": "2025-05-20T00:32:56.832Z",
    "featured": false
  },
  {
    "id": "post-85",
    "title": "वो पहली नज़र का धोखा नहीं, सच्चा अहसास था",
    "slug": "post-zakir-85",
    "category": "Stories",
    "content": "<p>हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों या महंगे तोहफों से नहीं आती। हमारी मोहब्बत तो बहुत छोटी-छोटी चीज़ों में छुपी होती है— जैसे तुम्हारे लिए ऑटो रोकना, तुम्हारे बैग का ज़िप बंद करना, या जब तुम सड़क पार करो तो तुम्हें अपनी राइट साइड कर लेना।</p>\n<p>लोग कहते हैं कि सख्त लौंडे पिघलते नहीं। पर सच तो ये है कि जब सही इंसान सामने आता है, तो इंसान पिघलना नहीं चाहता... वो बस बह जाना चाहता है। तुम्हारी बातों में वो एक सुकून है जो दिन भर की भागदौड़ के बाद किसी शांत पेड़ की छांव जैसा लगता है।</p>\n<blockquote>\"इश्क़ में कोई बड़ा कारनामा नहीं करना पड़ता,<br/>बस किसी का हाथ थाम कर उसके हर सुख-दुख में साथ खड़े रहना होता है।\"</blockquote>\n<p>आज जब मैं ये लिख रहा हूँ, तो बाहर हल्की सी बारिश हो रही है। और मेरे चाय के कप से उठते धुएं में सिर्फ तुम्हारा ही चेहरा दिख रहा है।</p>",
    "excerpt": "हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों से नहीं आती...",
    "tags": [
      "zakir-khan-style",
      "hindi",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-04-24T03:33:25.117Z",
    "updated_at": "2025-04-24T03:33:25.117Z",
    "published_at": "2025-04-24T03:33:25.117Z",
    "featured": false
  },
  {
    "id": "post-86",
    "title": "Late Night Playlist Aur Tera Naam",
    "slug": "late-night-playlist-aur-tera-naam",
    "category": "Thoughts",
    "content": "<p>Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai. Hum grand gestures nahi kar paate, par jab tumhare paas aate hain toh humara pura attitude ek taraf ho jata hai.</p>\n<p>Mujhe yaad hai woh din jab tumne mera favorite song sun kar bola tha— \"Aman, yeh toh mera bhi favorite hai!\" Bus wahi 5 seconds mein mujhe laga ki haan... Khuda ne thoda waqt nikal kar humare baare mein socha tha.</p>\n<blockquote>\"Pyar wo nahi jo duniya ko dikhaya jaye,<br/>Pyar toh wo hai jo chupchap dil ke ek kone mein zinda rahe.\"</blockquote>\n<p>Tum jab muskurati ho na, toh baki saare stress gayab ho jate hain. Aur sach bolun, toh mujhe bas yahi chahiye zindagi se.</p>",
    "excerpt": "Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai...",
    "tags": [
      "zakir-khan-style",
      "hinglish",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-04-20T12:14:35.607Z",
    "updated_at": "2025-04-20T12:14:35.607Z",
    "published_at": "2025-04-20T12:14:35.607Z",
    "featured": false
  },
  {
    "id": "post-87",
    "title": "तुम्हारी हँसी मेरे ग़मों का इलाज है",
    "slug": "post-zakir-87",
    "category": "Love",
    "content": "<p>हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों या महंगे तोहफों से नहीं आती। हमारी मोहब्बत तो बहुत छोटी-छोटी चीज़ों में छुपी होती है— जैसे तुम्हारे लिए ऑटो रोकना, तुम्हारे बैग का ज़िप बंद करना, या जब तुम सड़क पार करो तो तुम्हें अपनी राइट साइड कर लेना।</p>\n<p>लोग कहते हैं कि सख्त लौंडे पिघलते नहीं। पर सच तो ये है कि जब सही इंसान सामने आता है, तो इंसान पिघलना नहीं चाहता... वो बस बह जाना चाहता है। तुम्हारी बातों में वो एक सुकून है जो दिन भर की भागदौड़ के बाद किसी शांत पेड़ की छांव जैसा लगता है।</p>\n<blockquote>\"इश्क़ में कोई बड़ा कारनामा नहीं करना पड़ता,<br/>बस किसी का हाथ थाम कर उसके हर सुख-दुख में साथ खड़े रहना होता है।\"</blockquote>\n<p>आज जब मैं ये लिख रहा हूँ, तो बाहर हल्की सी बारिश हो रही है। और मेरे चाय के कप से उठते धुएं में सिर्फ तुम्हारा ही चेहरा दिख रहा है।</p>",
    "excerpt": "हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों से नहीं आती...",
    "tags": [
      "zakir-khan-style",
      "hindi",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-04-16T03:32:18.088Z",
    "updated_at": "2025-04-16T03:32:18.088Z",
    "published_at": "2025-04-16T03:32:18.088Z",
    "featured": false
  },
  {
    "id": "post-88",
    "title": "Tumhare Sath Guzra Har Ek Lamha",
    "slug": "tumhare-sath-guzra-har-ek-lamha",
    "category": "Love",
    "content": "<p>Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai. Hum grand gestures nahi kar paate, par jab tumhare paas aate hain toh humara pura attitude ek taraf ho jata hai.</p>\n<p>Mujhe yaad hai woh din jab tumne mera favorite song sun kar bola tha— \"Aman, yeh toh mera bhi favorite hai!\" Bus wahi 5 seconds mein mujhe laga ki haan... Khuda ne thoda waqt nikal kar humare baare mein socha tha.</p>\n<blockquote>\"Pyar wo nahi jo duniya ko dikhaya jaye,<br/>Pyar toh wo hai jo chupchap dil ke ek kone mein zinda rahe.\"</blockquote>\n<p>Tum jab muskurati ho na, toh baki saare stress gayab ho jate hain. Aur sach bolun, toh mujhe bas yahi chahiye zindagi se.</p>",
    "excerpt": "Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai...",
    "tags": [
      "zakir-khan-style",
      "hinglish",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-04-14T00:59:48.992Z",
    "updated_at": "2025-04-14T00:59:48.992Z",
    "published_at": "2025-04-14T00:59:48.992Z",
    "featured": true
  },
  {
    "id": "post-89",
    "title": "जब हम चुपचाप एक दूसरे को देखते थे",
    "slug": "post-zakir-89",
    "category": "Stories",
    "content": "<p>हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों या महंगे तोहफों से नहीं आती। हमारी मोहब्बत तो बहुत छोटी-छोटी चीज़ों में छुपी होती है— जैसे तुम्हारे लिए ऑटो रोकना, तुम्हारे बैग का ज़िप बंद करना, या जब तुम सड़क पार करो तो तुम्हें अपनी राइट साइड कर लेना।</p>\n<p>लोग कहते हैं कि सख्त लौंडे पिघलते नहीं। पर सच तो ये है कि जब सही इंसान सामने आता है, तो इंसान पिघलना नहीं चाहता... वो बस बह जाना चाहता है। तुम्हारी बातों में वो एक सुकून है जो दिन भर की भागदौड़ के बाद किसी शांत पेड़ की छांव जैसा लगता है।</p>\n<blockquote>\"इश्क़ में कोई बड़ा कारनामा नहीं करना पड़ता,<br/>बस किसी का हाथ थाम कर उसके हर सुख-दुख में साथ खड़े रहना होता है।\"</blockquote>\n<p>आज जब मैं ये लिख रहा हूँ, तो बाहर हल्की सी बारिश हो रही है। और मेरे चाय के कप से उठते धुएं में सिर्फ तुम्हारा ही चेहरा दिख रहा है।</p>",
    "excerpt": "हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों से नहीं आती...",
    "tags": [
      "zakir-khan-style",
      "hindi",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-04-08T13:03:07.404Z",
    "updated_at": "2025-04-08T13:03:07.404Z",
    "published_at": "2025-04-08T13:03:07.404Z",
    "featured": false
  },
  {
    "id": "post-90",
    "title": "Woh Library Ka Corner Aur Padhai Se Jyada Tum",
    "slug": "woh-library-ka-corner-aur-padhai-se-jyada-tum",
    "category": "Stories",
    "content": "<p>Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai. Hum grand gestures nahi kar paate, par jab tumhare paas aate hain toh humara pura attitude ek taraf ho jata hai.</p>\n<p>Mujhe yaad hai woh din jab tumne mera favorite song sun kar bola tha— \"Aman, yeh toh mera bhi favorite hai!\" Bus wahi 5 seconds mein mujhe laga ki haan... Khuda ne thoda waqt nikal kar humare baare mein socha tha.</p>\n<blockquote>\"Pyar wo nahi jo duniya ko dikhaya jaye,<br/>Pyar toh wo hai jo chupchap dil ke ek kone mein zinda rahe.\"</blockquote>\n<p>Tum jab muskurati ho na, toh baki saare stress gayab ho jate hain. Aur sach bolun, toh mujhe bas yahi chahiye zindagi se.</p>",
    "excerpt": "Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai...",
    "tags": [
      "zakir-khan-style",
      "hinglish",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-04-01T04:46:00.314Z",
    "updated_at": "2025-04-01T04:46:00.314Z",
    "published_at": "2025-04-01T04:46:00.314Z",
    "featured": false
  },
  {
    "id": "post-91",
    "title": "इश्क़ में पड़ी वो खूबसूरत आदतें",
    "slug": "post-zakir-91",
    "category": "Love",
    "content": "<p>हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों या महंगे तोहफों से नहीं आती। हमारी मोहब्बत तो बहुत छोटी-छोटी चीज़ों में छुपी होती है— जैसे तुम्हारे लिए ऑटो रोकना, तुम्हारे बैग का ज़िप बंद करना, या जब तुम सड़क पार करो तो तुम्हें अपनी राइट साइड कर लेना।</p>\n<p>लोग कहते हैं कि सख्त लौंडे पिघलते नहीं। पर सच तो ये है कि जब सही इंसान सामने आता है, तो इंसान पिघलना नहीं चाहता... वो बस बह जाना चाहता है। तुम्हारी बातों में वो एक सुकून है जो दिन भर की भागदौड़ के बाद किसी शांत पेड़ की छांव जैसा लगता है।</p>\n<blockquote>\"इश्क़ में कोई बड़ा कारनामा नहीं करना पड़ता,<br/>बस किसी का हाथ थाम कर उसके हर सुख-दुख में साथ खड़े रहना होता है।\"</blockquote>\n<p>आज जब मैं ये लिख रहा हूँ, तो बाहर हल्की सी बारिश हो रही है। और मेरे चाय के कप से उठते धुएं में सिर्फ तुम्हारा ही चेहरा दिख रहा है।</p>",
    "excerpt": "हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों से नहीं आती...",
    "tags": [
      "zakir-khan-style",
      "hindi",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-03-30T03:02:36.040Z",
    "updated_at": "2025-03-30T03:02:36.040Z",
    "published_at": "2025-03-30T03:02:36.040Z",
    "featured": false
  },
  {
    "id": "post-92",
    "title": "Tumse Milne Ke Baad Badal Gaya Sab Kuch",
    "slug": "tumse-milne-ke-baad-badal-gaya-sab-kuch",
    "category": "Love",
    "content": "<p>Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai. Hum grand gestures nahi kar paate, par jab tumhare paas aate hain toh humara pura attitude ek taraf ho jata hai.</p>\n<p>Mujhe yaad hai woh din jab tumne mera favorite song sun kar bola tha— \"Aman, yeh toh mera bhi favorite hai!\" Bus wahi 5 seconds mein mujhe laga ki haan... Khuda ne thoda waqt nikal kar humare baare mein socha tha.</p>\n<blockquote>\"Pyar wo nahi jo duniya ko dikhaya jaye,<br/>Pyar toh wo hai jo chupchap dil ke ek kone mein zinda rahe.\"</blockquote>\n<p>Tum jab muskurati ho na, toh baki saare stress gayab ho jate hain. Aur sach bolun, toh mujhe bas yahi chahiye zindagi se.</p>",
    "excerpt": "Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai...",
    "tags": [
      "zakir-khan-style",
      "hinglish",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-03-23T04:47:36.044Z",
    "updated_at": "2025-03-23T04:47:36.044Z",
    "published_at": "2025-03-23T04:47:36.044Z",
    "featured": false
  },
  {
    "id": "post-93",
    "title": "खामोश मोहब्बत का अपना ही मज़ा है",
    "slug": "post-zakir-93",
    "category": "Thoughts",
    "content": "<p>हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों या महंगे तोहफों से नहीं आती। हमारी मोहब्बत तो बहुत छोटी-छोटी चीज़ों में छुपी होती है— जैसे तुम्हारे लिए ऑटो रोकना, तुम्हारे बैग का ज़िप बंद करना, या जब तुम सड़क पार करो तो तुम्हें अपनी राइट साइड कर लेना।</p>\n<p>लोग कहते हैं कि सख्त लौंडे पिघलते नहीं। पर सच तो ये है कि जब सही इंसान सामने आता है, तो इंसान पिघलना नहीं चाहता... वो बस बह जाना चाहता है। तुम्हारी बातों में वो एक सुकून है जो दिन भर की भागदौड़ के बाद किसी शांत पेड़ की छांव जैसा लगता है।</p>\n<blockquote>\"इश्क़ में कोई बड़ा कारनामा नहीं करना पड़ता,<br/>बस किसी का हाथ थाम कर उसके हर सुख-दुख में साथ खड़े रहना होता है।\"</blockquote>\n<p>आज जब मैं ये लिख रहा हूँ, तो बाहर हल्की सी बारिश हो रही है। और मेरे चाय के कप से उठते धुएं में सिर्फ तुम्हारा ही चेहरा दिख रहा है।</p>",
    "excerpt": "हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों से नहीं आती...",
    "tags": [
      "zakir-khan-style",
      "hindi",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-03-21T18:54:47.126Z",
    "updated_at": "2025-03-21T18:54:47.126Z",
    "published_at": "2025-03-21T18:54:47.126Z",
    "featured": true
  },
  {
    "id": "post-94",
    "title": "College Ki Canteen Aur Tumhara Intezar",
    "slug": "college-ki-canteen-aur-tumhara-intezar",
    "category": "Stories",
    "content": "<p>Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai. Hum grand gestures nahi kar paate, par jab tumhare paas aate hain toh humara pura attitude ek taraf ho jata hai.</p>\n<p>Mujhe yaad hai woh din jab tumne mera favorite song sun kar bola tha— \"Aman, yeh toh mera bhi favorite hai!\" Bus wahi 5 seconds mein mujhe laga ki haan... Khuda ne thoda waqt nikal kar humare baare mein socha tha.</p>\n<blockquote>\"Pyar wo nahi jo duniya ko dikhaya jaye,<br/>Pyar toh wo hai jo chupchap dil ke ek kone mein zinda rahe.\"</blockquote>\n<p>Tum jab muskurati ho na, toh baki saare stress gayab ho jate hain. Aur sach bolun, toh mujhe bas yahi chahiye zindagi se.</p>",
    "excerpt": "Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai...",
    "tags": [
      "zakir-khan-style",
      "hinglish",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-03-09T19:10:49.392Z",
    "updated_at": "2025-03-09T19:10:49.392Z",
    "published_at": "2025-03-09T19:10:49.392Z",
    "featured": false
  },
  {
    "id": "post-95",
    "title": "तुम्हारी आँखों की वो गहरी नदियाँ",
    "slug": "post-zakir-95",
    "category": "Love",
    "content": "<p>हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों या महंगे तोहफों से नहीं आती। हमारी मोहब्बत तो बहुत छोटी-छोटी चीज़ों में छुपी होती है— जैसे तुम्हारे लिए ऑटो रोकना, तुम्हारे बैग का ज़िप बंद करना, या जब तुम सड़क पार करो तो तुम्हें अपनी राइट साइड कर लेना।</p>\n<p>लोग कहते हैं कि सख्त लौंडे पिघलते नहीं। पर सच तो ये है कि जब सही इंसान सामने आता है, तो इंसान पिघलना नहीं चाहता... वो बस बह जाना चाहता है। तुम्हारी बातों में वो एक सुकून है जो दिन भर की भागदौड़ के बाद किसी शांत पेड़ की छांव जैसा लगता है।</p>\n<blockquote>\"इश्क़ में कोई बड़ा कारनामा नहीं करना पड़ता,<br/>बस किसी का हाथ थाम कर उसके हर सुख-दुख में साथ खड़े रहना होता है।\"</blockquote>\n<p>आज जब मैं ये लिख रहा हूँ, तो बाहर हल्की सी बारिश हो रही है। और मेरे चाय के कप से उठते धुएं में सिर्फ तुम्हारा ही चेहरा दिख रहा है।</p>",
    "excerpt": "हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों से नहीं आती...",
    "tags": [
      "zakir-khan-style",
      "hindi",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-03-03T16:21:46.650Z",
    "updated_at": "2025-03-03T16:21:46.650Z",
    "published_at": "2025-03-03T16:21:46.650Z",
    "featured": false
  },
  {
    "id": "post-96",
    "title": "Bina Shart Ke Chahna Tumhe",
    "slug": "bina-shart-ke-chahna-tumhe",
    "category": "Love",
    "content": "<p>Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai. Hum grand gestures nahi kar paate, par jab tumhare paas aate hain toh humara pura attitude ek taraf ho jata hai.</p>\n<p>Mujhe yaad hai woh din jab tumne mera favorite song sun kar bola tha— \"Aman, yeh toh mera bhi favorite hai!\" Bus wahi 5 seconds mein mujhe laga ki haan... Khuda ne thoda waqt nikal kar humare baare mein socha tha.</p>\n<blockquote>\"Pyar wo nahi jo duniya ko dikhaya jaye,<br/>Pyar toh wo hai jo chupchap dil ke ek kone mein zinda rahe.\"</blockquote>\n<p>Tum jab muskurati ho na, toh baki saare stress gayab ho jate hain. Aur sach bolun, toh mujhe bas yahi chahiye zindagi se.</p>",
    "excerpt": "Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai...",
    "tags": [
      "zakir-khan-style",
      "hinglish",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-02-24T13:51:01.954Z",
    "updated_at": "2025-02-24T13:51:01.954Z",
    "published_at": "2025-02-24T13:51:01.954Z",
    "featured": false
  },
  {
    "id": "post-97",
    "title": "वो बारिश की पहली बूंद और तुम्हारा ख्याल",
    "slug": "post-zakir-97",
    "category": "Poems",
    "content": "<p>हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों या महंगे तोहफों से नहीं आती। हमारी मोहब्बत तो बहुत छोटी-छोटी चीज़ों में छुपी होती है— जैसे तुम्हारे लिए ऑटो रोकना, तुम्हारे बैग का ज़िप बंद करना, या जब तुम सड़क पार करो तो तुम्हें अपनी राइट साइड कर लेना।</p>\n<p>लोग कहते हैं कि सख्त लौंडे पिघलते नहीं। पर सच तो ये है कि जब सही इंसान सामने आता है, तो इंसान पिघलना नहीं चाहता... वो बस बह जाना चाहता है। तुम्हारी बातों में वो एक सुकून है जो दिन भर की भागदौड़ के बाद किसी शांत पेड़ की छांव जैसा लगता है।</p>\n<blockquote>\"इश्क़ में कोई बड़ा कारनामा नहीं करना पड़ता,<br/>बस किसी का हाथ थाम कर उसके हर सुख-दुख में साथ खड़े रहना होता है।\"</blockquote>\n<p>आज जब मैं ये लिख रहा हूँ, तो बाहर हल्की सी बारिश हो रही है। और मेरे चाय के कप से उठते धुएं में सिर्फ तुम्हारा ही चेहरा दिख रहा है।</p>",
    "excerpt": "हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों से नहीं आती...",
    "tags": [
      "zakir-khan-style",
      "hindi",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-02-13T22:55:18.490Z",
    "updated_at": "2025-02-13T22:55:18.490Z",
    "published_at": "2025-02-13T22:55:18.490Z",
    "featured": false
  },
  {
    "id": "post-98",
    "title": "Tere Sath Har Safar Aasan Lagta Hai",
    "slug": "tere-sath-har-safar-aasan-lagta-hai",
    "category": "Love",
    "content": "<p>Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai. Hum grand gestures nahi kar paate, par jab tumhare paas aate hain toh humara pura attitude ek taraf ho jata hai.</p>\n<p>Mujhe yaad hai woh din jab tumne mera favorite song sun kar bola tha— \"Aman, yeh toh mera bhi favorite hai!\" Bus wahi 5 seconds mein mujhe laga ki haan... Khuda ne thoda waqt nikal kar humare baare mein socha tha.</p>\n<blockquote>\"Pyar wo nahi jo duniya ko dikhaya jaye,<br/>Pyar toh wo hai jo chupchap dil ke ek kone mein zinda rahe.\"</blockquote>\n<p>Tum jab muskurati ho na, toh baki saare stress gayab ho jate hain. Aur sach bolun, toh mujhe bas yahi chahiye zindagi se.</p>",
    "excerpt": "Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai...",
    "tags": [
      "zakir-khan-style",
      "hinglish",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-02-02T23:00:02.763Z",
    "updated_at": "2025-02-02T23:00:02.763Z",
    "published_at": "2025-02-02T23:00:02.763Z",
    "featured": true
  },
  {
    "id": "post-99",
    "title": "दिल के किसी कोने में छुपा हुआ तेरा नाम",
    "slug": "post-zakir-99",
    "category": "Love",
    "content": "<p>हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों या महंगे तोहफों से नहीं आती। हमारी मोहब्बत तो बहुत छोटी-छोटी चीज़ों में छुपी होती है— जैसे तुम्हारे लिए ऑटो रोकना, तुम्हारे बैग का ज़िप बंद करना, या जब तुम सड़क पार करो तो तुम्हें अपनी राइट साइड कर लेना।</p>\n<p>लोग कहते हैं कि सख्त लौंडे पिघलते नहीं। पर सच तो ये है कि जब सही इंसान सामने आता है, तो इंसान पिघलना नहीं चाहता... वो बस बह जाना चाहता है। तुम्हारी बातों में वो एक सुकून है जो दिन भर की भागदौड़ के बाद किसी शांत पेड़ की छांव जैसा लगता है।</p>\n<blockquote>\"इश्क़ में कोई बड़ा कारनामा नहीं करना पड़ता,<br/>बस किसी का हाथ थाम कर उसके हर सुख-दुख में साथ खड़े रहना होता है।\"</blockquote>\n<p>आज जब मैं ये लिख रहा हूँ, तो बाहर हल्की सी बारिश हो रही है। और मेरे चाय के कप से उठते धुएं में सिर्फ तुम्हारा ही चेहरा दिख रहा है।</p>",
    "excerpt": "हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों से नहीं आती...",
    "tags": [
      "zakir-khan-style",
      "hindi",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-01-30T04:37:56.671Z",
    "updated_at": "2025-01-30T04:37:56.671Z",
    "published_at": "2025-01-30T04:37:56.671Z",
    "featured": false
  },
  {
    "id": "post-100",
    "title": "Tumhari Care Aur Mera Smile Karna",
    "slug": "tumhari-care-aur-mera-smile-karna",
    "category": "Love",
    "content": "<p>Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai. Hum grand gestures nahi kar paate, par jab tumhare paas aate hain toh humara pura attitude ek taraf ho jata hai.</p>\n<p>Mujhe yaad hai woh din jab tumne mera favorite song sun kar bola tha— \"Aman, yeh toh mera bhi favorite hai!\" Bus wahi 5 seconds mein mujhe laga ki haan... Khuda ne thoda waqt nikal kar humare baare mein socha tha.</p>\n<blockquote>\"Pyar wo nahi jo duniya ko dikhaya jaye,<br/>Pyar toh wo hai jo chupchap dil ke ek kone mein zinda rahe.\"</blockquote>\n<p>Tum jab muskurati ho na, toh baki saare stress gayab ho jate hain. Aur sach bolun, toh mujhe bas yahi chahiye zindagi se.</p>",
    "excerpt": "Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai...",
    "tags": [
      "zakir-khan-style",
      "hinglish",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-01-22T04:59:44.801Z",
    "updated_at": "2025-01-22T04:59:44.801Z",
    "published_at": "2025-01-22T04:59:44.801Z",
    "featured": false
  },
  {
    "id": "post-101",
    "title": "जब तुम बिना कहे सब समझ लेती हो",
    "slug": "post-zakir-101",
    "category": "Love",
    "content": "<p>हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों या महंगे तोहफों से नहीं आती। हमारी मोहब्बत तो बहुत छोटी-छोटी चीज़ों में छुपी होती है— जैसे तुम्हारे लिए ऑटो रोकना, तुम्हारे बैग का ज़िप बंद करना, या जब तुम सड़क पार करो तो तुम्हें अपनी राइट साइड कर लेना।</p>\n<p>लोग कहते हैं कि सख्त लौंडे पिघलते नहीं। पर सच तो ये है कि जब सही इंसान सामने आता है, तो इंसान पिघलना नहीं चाहता... वो बस बह जाना चाहता है। तुम्हारी बातों में वो एक सुकून है जो दिन भर की भागदौड़ के बाद किसी शांत पेड़ की छांव जैसा लगता है।</p>\n<blockquote>\"इश्क़ में कोई बड़ा कारनामा नहीं करना पड़ता,<br/>बस किसी का हाथ थाम कर उसके हर सुख-दुख में साथ खड़े रहना होता है।\"</blockquote>\n<p>आज जब मैं ये लिख रहा हूँ, तो बाहर हल्की सी बारिश हो रही है। और मेरे चाय के कप से उठते धुएं में सिर्फ तुम्हारा ही चेहरा दिख रहा है।</p>",
    "excerpt": "हम मिडिल क्लास लड़कों की ज़िंदगी में मोहब्बत कोई बड़े वादों से नहीं आती...",
    "tags": [
      "zakir-khan-style",
      "hindi",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-01-21T09:49:00.653Z",
    "updated_at": "2025-01-21T09:49:00.653Z",
    "published_at": "2025-01-21T09:49:00.653Z",
    "featured": false
  },
  {
    "id": "post-102",
    "title": "Hamari Adhuri Kahani Ka Khoobsurat Hissa",
    "slug": "hamari-adhuri-kahani-ka-khoobsurat-hissa",
    "category": "Stories",
    "content": "<p>Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai. Hum grand gestures nahi kar paate, par jab tumhare paas aate hain toh humara pura attitude ek taraf ho jata hai.</p>\n<p>Mujhe yaad hai woh din jab tumne mera favorite song sun kar bola tha— \"Aman, yeh toh mera bhi favorite hai!\" Bus wahi 5 seconds mein mujhe laga ki haan... Khuda ne thoda waqt nikal kar humare baare mein socha tha.</p>\n<blockquote>\"Pyar wo nahi jo duniya ko dikhaya jaye,<br/>Pyar toh wo hai jo chupchap dil ke ek kone mein zinda rahe.\"</blockquote>\n<p>Tum jab muskurati ho na, toh baki saare stress gayab ho jate hain. Aur sach bolun, toh mujhe bas yahi chahiye zindagi se.</p>",
    "excerpt": "Hum middle class ladkon ki zindagi mein pyar thoda alag hota hai...",
    "tags": [
      "zakir-khan-style",
      "hinglish",
      "romantic",
      "raw-feelings",
      "conversational"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2025-01-11T12:21:15.004Z",
    "updated_at": "2025-01-11T12:21:15.004Z",
    "published_at": "2025-01-11T12:21:15.004Z",
    "featured": false
  },
  {
    "id": "post-103",
    "title": "STORY - Two Faces of a Coin",
    "slug": "story-two-faces-of-a-coin",
    "category": "Stories",
    "content": "<p>You are the reason to bring smile on my face.<br/>You are the one that makes me blush.<br/>But, there's two face of coin, I don't know what am I doing.<br/>Loving you is my mistake or expecting it from you is?<br/>Do you have any reason to leave me alone?<br/>Or you've set up your mind that you are done?<br/>I'm confused here OVERTHINKING!</p><p>Are you that same for whom I was wishing?<br/>I don't think you are the same whom I loved.<br/>You are changed and I'm dumb<br/>I'm dumb in your love<br/>I'm dumb in love</p>blockquote\"But, if it's you, I'll be dumb forever.<br/>Because even if it's you hurt me,<br/>That hurts are God-gifted to me. (I deserve that).\"</blockquote><p>I've started loving your hate for me,<br/>I don't know why but I think only about you.<br/>It seems that I don't have anything to do,<br/>Except loving the moment we spent together...</p><p>We can make it again.<br/>We can be that ONE again.<br/>We can love again.<br/>We can be together again.<br/>But can be...<br/>But, I can't convince you for doing so again and again...</p>",
    "excerpt": "You are the reason to bring smile on my face. You are the one that makes me blush. But, there's two face of coin, I d...",
    "tags": [
      "dear-diary",
      "love",
      "english",
      "story",
      "overthinking",
      "relationship"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T02:57:47.448Z",
    "updated_at": "2026-09-23T02:57:47.448Z",
    "published_at": "2026-09-23T02:57:47.448Z",
    "featured": false
  },
  {
    "id": "post-104",
    "title": "Har Kisi Ke Kahaniyon Hoti Hai",
    "slug": "har-kisi-ke-kahaniyon-hoti-hai",
    "category": "Micro Poems",
    "content": "<p>Har kisi ke kahaniyon hoti hai,<br/>Kisi ki puri hoti hai to kisi ki adhoori...</p>",
    "excerpt": "Har kisi ke kahaniyon hoti hai, Kisi ki puri hoti hai to kisi ki adhoori...",
    "tags": [
      "dear-diary",
      "hinglish",
      "adhoori-kahani",
      "micro-poem"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T07:30:52.273Z",
    "updated_at": "2026-09-23T07:30:52.273Z",
    "published_at": "2026-09-23T07:30:52.273Z",
    "featured": false
  },
  {
    "id": "post-105",
    "title": "Expecting Love in Return, Hurts!",
    "slug": "expecting-love-in-return-hurts",
    "category": "Quotes",
    "content": "<p>Some say love hurts.<br/>Some say expectations hurt.<br/><blockquote>\"Expecting love in return, hurts!\"<br/>Whispered the one sided lover.</blockquote></p>",
    "excerpt": "Some say love hurts. Some say expectations hurt. \"Expecting love in return, hurts!\" Whispered the one sided lover.",
    "tags": [
      "dear-diary",
      "quotes",
      "love",
      "one-sided-love",
      "expectations"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T03:19:38.674Z",
    "updated_at": "2026-09-23T03:19:38.674Z",
    "published_at": "2026-09-23T03:19:38.674Z",
    "featured": false
  },
  {
    "id": "post-106",
    "title": "Difference Between Attachment and Love",
    "slug": "difference-between-attachment-and-love",
    "category": "Quotes",
    "content": "<p>Someone asked me what is the difference between attachment and Love?<br/>I replied:</p><p>It's attachment when you're in a relationship without having an ascent of true friendship.</p><blockquote>\"It's Love when you're beyond the tags of priorities, formalities, insecurities, judgement etc.\"</blockquote>",
    "excerpt": "Someone asked me what is the difference between attachment and Love? I replied: It's attachment when you're in a rela...",
    "tags": [
      "dear-diary",
      "quotes",
      "attachment",
      "true-love",
      "friendship"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T02:33:34.549Z",
    "updated_at": "2026-09-23T02:33:34.549Z",
    "published_at": "2026-09-23T02:33:34.549Z",
    "featured": false
  },
  {
    "id": "post-107",
    "title": "Mile Toh Hazar Log The",
    "slug": "mile-toh-hazar-log-the",
    "category": "Micro Poems",
    "content": "<p>Mile toh hazar log the par woh sabse alag thei,<br/>Jo kismat mein nahi thai...</p>",
    "excerpt": "Mile toh hazar log the par woh sabse alag thei, Jo kismat mein nahi thai...",
    "tags": [
      "dear-diary",
      "hinglish",
      "kismat",
      "micro-poem"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T08:37:26.570Z",
    "updated_at": "2026-09-23T08:37:26.570Z",
    "published_at": "2026-09-23T08:37:26.570Z",
    "featured": false
  },
  {
    "id": "post-108",
    "title": "Kisi Ka Sath Chhodne Se Pehle",
    "slug": "kisi-ka-sath-chhodne-se-pehle",
    "category": "Quotes",
    "content": "<p>Kisi ka sath chhodne se pehle ek bar zaroor sochna,<br/>Ke ab tak uske sath kyu the?</p>",
    "excerpt": "Kisi ka sath chhodne se pehle ek bar zaroor sochna, Ke ab tak uske sath kyu the?",
    "tags": [
      "dear-diary",
      "hinglish",
      "quotes",
      "relationship"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T06:37:01.269Z",
    "updated_at": "2026-09-23T06:37:01.269Z",
    "published_at": "2026-09-23T06:37:01.269Z",
    "featured": false
  },
  {
    "id": "post-109",
    "title": "Tum Meri Nahi Ho Fir Bhi",
    "slug": "tum-meri-nahi-ho-fir-bhi",
    "category": "Micro Poems",
    "content": "<p>Tum meri nahi ho fir bhi na jane kyu,<br/>Dil kerta hai ki unn sab ka muu tod du jinse tum baat kerti hoo...</p>",
    "excerpt": "Tum meri nahi ho fir bhi na jane kyu, Dil kerta hai ki unn sab ka muu tod du jinse tum baat kerti hoo...",
    "tags": [
      "dear-diary",
      "hinglish",
      "possessive",
      "micro-poem"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T05:25:23.481Z",
    "updated_at": "2026-09-23T05:25:23.481Z",
    "published_at": "2026-09-23T05:25:23.481Z",
    "featured": false
  },
  {
    "id": "post-110",
    "title": "Mujhe Pyaar Ka Matlab Nahi Pata",
    "slug": "mujhe-pyaar-ka-matlab-nahi-pata",
    "category": "Love",
    "content": "<p>Mujhe pyaar ka matlab nahi pata,<br/>Bas tumhara khayal rakhna acha lagta hai...</p>",
    "excerpt": "Mujhe pyaar ka matlab nahi pata, Bas tumhara khayal rakhna acha lagta hai...",
    "tags": [
      "dear-diary",
      "hinglish",
      "love",
      "care"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T01:09:18.526Z",
    "updated_at": "2026-09-23T01:09:18.526Z",
    "published_at": "2026-09-23T01:09:18.526Z",
    "featured": false
  },
  {
    "id": "post-111",
    "title": "Kabhi Ye Na Sochna",
    "slug": "kabhi-ye-na-sochna",
    "category": "Micro Poems",
    "content": "<p>Kabhi ye na sochna ki tujhe chor dil kahi aur lga liya,<br/>Bss teri khushi ke liye maine apne dil ko samjha liya...</p>",
    "excerpt": "Kabhi ye na sochna ki tujhe chor dil kahi aur lga liya, Bss teri khushi ke liye maine apne dil ko samjha liya...",
    "tags": [
      "dear-diary",
      "hinglish",
      "sacrifice",
      "micro-poem"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T00:03:06.945Z",
    "updated_at": "2026-09-23T00:03:06.945Z",
    "published_at": "2026-09-23T00:03:06.945Z",
    "featured": false
  },
  {
    "id": "post-112",
    "title": "Sacchi Mohabbat",
    "slug": "sacchi-mohabbat-1",
    "category": "Quotes",
    "content": "<p>Sacchi mohabbat to wohi hai jisme paane ki koi ummeed no ho,<br/>Phir bhi be'inteha pyaar ho...</p>",
    "excerpt": "Sacchi mohabbat to wohi hai jisme paane ki koi ummeed no ho, Phir bhi be'inteha pyaar ho...",
    "tags": [
      "dear-diary",
      "hinglish",
      "mohabbat",
      "quotes"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T07:22:11.271Z",
    "updated_at": "2026-09-23T07:22:11.271Z",
    "published_at": "2026-09-23T07:22:11.271Z",
    "featured": false
  },
  {
    "id": "post-113",
    "title": "Ocean in Your Eyes",
    "slug": "ocean-in-your-eyes",
    "category": "Poems",
    "content": "<p>Your eyes shine in the dark.<br/>Your arms provide the warmth in winters.<br/>Your lap is the most comforting pillow.<br/>Your lips quench my thirst.<br/>Flowering with the rhythm of your heart.<br/>Closing my eyes, I go deeper in your ocean.</p>",
    "excerpt": "Your eyes shine in the dark. Your arms provide the warmth in winters. Your lap is the most comforting pillow. Your li...",
    "tags": [
      "dear-diary",
      "english",
      "poetry",
      "romance"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T01:41:23.924Z",
    "updated_at": "2026-09-23T01:41:23.924Z",
    "published_at": "2026-09-23T01:41:23.924Z",
    "featured": false
  },
  {
    "id": "post-114",
    "title": "Addicted to The Pain",
    "slug": "addicted-to-the-pain",
    "category": "Quotes",
    "content": "<p>I think I'm addicted to the pain of wanting someone I can't have in my life.</p>",
    "excerpt": "I think I'm addicted to the pain of wanting someone I can't have in my life.",
    "tags": [
      "dear-diary",
      "english",
      "quotes",
      "pain",
      "unrequited-love"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T05:57:46.834Z",
    "updated_at": "2026-09-23T05:57:46.834Z",
    "published_at": "2026-09-23T05:57:46.834Z",
    "featured": false
  },
  {
    "id": "post-115",
    "title": "My Kind of Perfect",
    "slug": "my-kind-of-perfect",
    "category": "Love",
    "content": "<p>No! I'm not going to lose feelings. No, I'm not going to find someone better.<br/>No, I'm not going to cheat on you.<br/>And no, I'm not going to leave you.<br/>I have already made up my mind.</p><p>I want you and only you. No one else...<br/>Because to me, you are my kind of PERFECT...</p>",
    "excerpt": "No! I'm not going to lose feelings. No, I'm not going to find someone better. No, I'm not going to cheat on you. And ...",
    "tags": [
      "dear-diary",
      "english",
      "love",
      "devotion",
      "perfect"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T02:41:24.160Z",
    "updated_at": "2026-09-23T02:41:24.160Z",
    "published_at": "2026-09-23T02:41:24.160Z",
    "featured": false
  },
  {
    "id": "post-116",
    "title": "Her Silence",
    "slug": "her-silence",
    "category": "Quotes",
    "content": "<p>Best friend asked: \"What hurts you more, her anger or her ignorance?\"<br/>I answer:</p><blockquote>\"Her Silence.<br/>Because I know there is always hidden care in anger, but a hidden pain in silence.\"</blockquote>",
    "excerpt": "Best friend asked: \"What hurts you more, her anger or her ignorance?\" I answer: \"Her Silence. Because I know there is...",
    "tags": [
      "dear-diary",
      "english",
      "silence",
      "quotes",
      "pain"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T01:11:08.350Z",
    "updated_at": "2026-09-23T01:11:08.350Z",
    "published_at": "2026-09-23T01:11:08.350Z",
    "featured": false
  },
  {
    "id": "post-117",
    "title": "I Miss This Person",
    "slug": "i-miss-this-person",
    "category": "Quotes",
    "content": "<p>I may not be the most important person in your life, but I just hope that one day when you hear my name, you would just smile and say \"I miss this person\".</p>",
    "excerpt": "I may not be the most important person in your life, but I just hope that one day when you hear my name, you would ju...",
    "tags": [
      "dear-diary",
      "english",
      "memories",
      "quotes"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T02:07:42.135Z",
    "updated_at": "2026-09-23T02:07:42.135Z",
    "published_at": "2026-09-23T02:07:42.135Z",
    "featured": false
  },
  {
    "id": "post-118",
    "title": "True Happiness",
    "slug": "true-happiness",
    "category": "Quotes",
    "content": "<p>True happiness is getting married to your loved one with your parents' support.</p>",
    "excerpt": "True happiness is getting married to your loved one with your parents' support.",
    "tags": [
      "dear-diary",
      "english",
      "happiness",
      "marriage",
      "family"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T06:28:34.278Z",
    "updated_at": "2026-09-23T06:28:34.278Z",
    "published_at": "2026-09-23T06:28:34.278Z",
    "featured": false
  },
  {
    "id": "post-119",
    "title": "Is There a Word Called Unlove?",
    "slug": "is-there-a-word-called-unlove",
    "category": "Quotes",
    "content": "<p>\"You still love him, don't you?\" best friend asked.</p><blockquote>\"Is there a word called UNLOVE in any dictionary?\"</blockquote>",
    "excerpt": "\"You still love him, don't you?\" best friend asked. \"Is there a word called UNLOVE in any dictionary?\"",
    "tags": [
      "dear-diary",
      "english",
      "unlove",
      "quotes",
      "forever-love"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T06:55:03.278Z",
    "updated_at": "2026-09-23T06:55:03.278Z",
    "published_at": "2026-09-23T06:55:03.278Z",
    "featured": false
  },
  {
    "id": "post-120",
    "title": "Looking at The Moon",
    "slug": "looking-at-the-moon",
    "category": "Quotes",
    "content": "<p>One day someone will look at you the same way you look at the MOON...</p>",
    "excerpt": "One day someone will look at you the same way you look at the MOON...",
    "tags": [
      "dear-diary",
      "english",
      "moon",
      "hope",
      "quotes"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T07:46:25.544Z",
    "updated_at": "2026-09-23T07:46:25.544Z",
    "published_at": "2026-09-23T07:46:25.544Z",
    "featured": false
  },
  {
    "id": "post-121",
    "title": "Memories Still Pulled Me Back",
    "slug": "memories-still-pulled-me-back",
    "category": "Micro Poems",
    "content": "<p>Every time I wished to move on,<br/>Your memories still pulled me back,<br/>Wanting the more of you,<br/>Though you'd break me down.</p>",
    "excerpt": "Every time I wished to move on, Your memories still pulled me back, Wanting the more of you, Though you'd break me down.",
    "tags": [
      "dear-diary",
      "english",
      "moving-on",
      "memories",
      "micro-poem"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T08:36:24.032Z",
    "updated_at": "2026-09-23T08:36:24.032Z",
    "published_at": "2026-09-23T08:36:24.032Z",
    "featured": false
  },
  {
    "id": "post-122",
    "title": "Pyaar Karna Usi Din Chhor Diya",
    "slug": "pyaar-karna-usi-din-chhor-diya",
    "category": "Micro Poems",
    "content": "<p>Pyaar karna usi din chhor diya humne,<br/>Jab unki aankhon mein pyaar kisi aur ke liye dekha.</p>",
    "excerpt": "Pyaar karna usi din chhor diya humne, Jab unki aankhon mein pyaar kisi aur ke liye dekha.",
    "tags": [
      "dear-diary",
      "hinglish",
      "heartbreak",
      "micro-poem"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T04:55:30.488Z",
    "updated_at": "2026-09-23T04:55:30.488Z",
    "published_at": "2026-09-23T04:55:30.488Z",
    "featured": false
  },
  {
    "id": "post-123",
    "title": "When Destiny Played a Cruel Game",
    "slug": "when-destiny-played-a-cruel-game",
    "category": "Love",
    "content": "<p>His mistake to love her truly.<br/>Her mistake to love him truly.<br/>AND this purest feeling was considered a mistake when destiny played a cruel game with their love.</p>",
    "excerpt": "His mistake to love her truly. Her mistake to love him truly. AND this purest feeling was considered a mistake when d...",
    "tags": [
      "dear-diary",
      "english",
      "destiny",
      "love",
      "fate"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T01:04:33.319Z",
    "updated_at": "2026-09-23T01:04:33.319Z",
    "published_at": "2026-09-23T01:04:33.319Z",
    "featured": false
  },
  {
    "id": "post-124",
    "title": "I Still Do",
    "slug": "i-still-do",
    "category": "Quotes",
    "content": "<p>I'm not a cheater in the game of love.<br/>I said I'll love you forever, and I still do.<br/>But now, I just don't express.</p>",
    "excerpt": "I'm not a cheater in the game of love. I said I'll love you forever, and I still do. But now, I just don't express.",
    "tags": [
      "dear-diary",
      "english",
      "forever",
      "quotes"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T03:39:15.322Z",
    "updated_at": "2026-09-23T03:39:15.322Z",
    "published_at": "2026-09-23T03:39:15.322Z",
    "featured": false
  },
  {
    "id": "post-125",
    "title": "Your Happiness Over Mine",
    "slug": "your-happiness-over-mine",
    "category": "Quotes",
    "content": "<p>Your happiness will always be more important than mine...</p>",
    "excerpt": "Your happiness will always be more important than mine...",
    "tags": [
      "dear-diary",
      "english",
      "selfless",
      "quotes"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T06:32:17.996Z",
    "updated_at": "2026-09-23T06:32:17.996Z",
    "published_at": "2026-09-23T06:32:17.996Z",
    "featured": false
  },
  {
    "id": "post-126",
    "title": "Anmol Haath Aur Insaan",
    "slug": "anmol-haath-aur-insaan",
    "category": "Quotes",
    "content": "<p>Wo haath or insaan bohot anmol hai,<br/>Jo aapko girte waqt sambhal leta hai...</p>",
    "excerpt": "Wo haath or insaan bohot anmol hai, Jo aapko girte waqt sambhal leta hai...",
    "tags": [
      "dear-diary",
      "hinglish",
      "support",
      "quotes"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T00:00:51.994Z",
    "updated_at": "2026-09-23T00:00:51.994Z",
    "published_at": "2026-09-23T00:00:51.994Z",
    "featured": false
  },
  {
    "id": "post-127",
    "title": "The More I Remember You",
    "slug": "the-more-i-remember-you",
    "category": "Poems",
    "content": "<p>The more I remember you, my eyes make tears to fall;<br/>The more I remember you, want to have you by my side;<br/>The more I remember you, my heart make me remember our moments;<br/>The more I remember you, I laugh for the craziest masti that we have done;<br/>The more I remember you, my mind thinks of being with you... forever!! ever...</p>",
    "excerpt": "The more I remember you, my eyes make tears to fall; The more I remember you, want to have you by my side; The more I...",
    "tags": [
      "dear-diary",
      "english",
      "remember",
      "poetry",
      "tears"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T00:11:20.798Z",
    "updated_at": "2026-09-23T00:11:20.798Z",
    "published_at": "2026-09-23T00:11:20.798Z",
    "featured": false
  },
  {
    "id": "post-128",
    "title": "एक जैसा हाल बनाकर दोनों बैठे हैं",
    "slug": "dear-diary-entry-128",
    "category": "Poems",
    "content": "<p>एक जैसा हाल बनाकर दोनों बैठे हैं,<br/>अपने दिल में जज़्बात छुपाकर दोनों बैठे हैं<br/>इश्क में बिखरे हुए हैं तो इजहार से,<br/>दोनों डरते हैं दूर से ही दिल लगाकर दोनों बैठे हैं...!</p>",
    "excerpt": "एक जैसा हाल बनाकर दोनों बैठे हैं, अपने दिल में जज़्बात छुपाकर दोनों बैठे हैं इश्क में बिखरे हुए हैं तो इजहार से, दोनों...",
    "tags": [
      "dear-diary",
      "hindi",
      "shayari",
      "ishq"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T05:32:36.608Z",
    "updated_at": "2026-09-23T05:32:36.608Z",
    "published_at": "2026-09-23T05:32:36.608Z",
    "featured": false
  },
  {
    "id": "post-129",
    "title": "Tu Sirf Ishq Hota To",
    "slug": "tu-sirf-ishq-hota-to",
    "category": "Love",
    "content": "<p>Tu sirf ishq hota to bat kuch aur thi,<br/>Magr tu meri rooh mein bas chuki hai, ab tujhes juda matlb meri maut aur mujhe dardnaak mout nahi chahiya...!!</p>",
    "excerpt": "Tu sirf ishq hota to bat kuch aur thi, Magr tu meri rooh mein bas chuki hai, ab tujhes juda matlb meri maut aur mujhe...",
    "tags": [
      "dear-diary",
      "hinglish",
      "rooh",
      "love"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T00:08:40.411Z",
    "updated_at": "2026-09-23T00:08:40.411Z",
    "published_at": "2026-09-23T00:08:40.411Z",
    "featured": false
  },
  {
    "id": "post-130",
    "title": "I Want to Hug You Until...",
    "slug": "i-want-to-hug-you-until",
    "category": "Poems",
    "content": "<p>I want to hug you until my clothes smell like you.<br/>I want to hug you until I feel the heartbeat of you.<br/>I want to hug you everytime when I feel low and depressed.<br/>I want to hug you until I take my last breath with you.<br/>And I want to hug you until you hug me tighter than me.<br/>Will you hug me back?</p>",
    "excerpt": "I want to hug you until my clothes smell like you. I want to hug you until I feel the heartbeat of you. I want to hug...",
    "tags": [
      "dear-diary",
      "english",
      "hug",
      "poetry",
      "romance"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T04:15:42.978Z",
    "updated_at": "2026-09-23T04:15:42.978Z",
    "published_at": "2026-09-23T04:15:42.978Z",
    "featured": false
  },
  {
    "id": "post-131",
    "title": "The Quiet Observer",
    "slug": "the-quiet-observer",
    "category": "Poems",
    "content": "<p>The clock ignores the frantic pace of shadows chasing light across the floor.<br/>I sit within this hollow, breathing space, and watch the wind come knocking at the door.</p><p>It brings the scent of rain from distant lands, A tale of mountains lost in morning grey.<br/>I hold the silence softly in my hands, And let the restless world just drift aways.</p><blockquote>- Aman Singh</blockquote>",
    "excerpt": "The clock ignores the frantic pace of shadows chasing light across the floor. I sit within this hollow, breathing spa...",
    "tags": [
      "dear-diary",
      "english",
      "poetry",
      "quiet-observer",
      "aman-singh"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T02:48:16.644Z",
    "updated_at": "2026-09-23T02:48:16.644Z",
    "published_at": "2026-09-23T02:48:16.644Z",
    "featured": false
  },
  {
    "id": "post-132",
    "title": "Waqt Ka Safar",
    "slug": "waqt-ka-safar",
    "category": "Poems",
    "content": "<p>Ye lamhe jo haathon se phisalte ja rahe hain, Jaise ret mutthi mein bandh na pa rahi ho.<br/>Shor bahut hai bahar ki is duniya mein, Par andar ki khamoshi kahan shanti la rahi ho?</p><p>Ek purani kitab, ek chai ka pyala aur main, Sochta hoon kya khoya, aur kya pa liya? Is bheed-bhaad mein khud ko dhoondhte-dhoondhte.<br/>Akelepan ko hi apna hamsafar bana liya...</p><blockquote>- Aman Singh</blockquote>",
    "excerpt": "Ye lamhe jo haathon se phisalte ja rahe hain, Jaise ret mutthi mein bandh na pa rahi ho. Shor bahut hai bahar ki is d...",
    "tags": [
      "dear-diary",
      "hinglish",
      "waqt",
      "poetry",
      "aman-singh"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T02:20:56.956Z",
    "updated_at": "2026-09-23T02:20:56.956Z",
    "published_at": "2026-09-23T02:20:56.956Z",
    "featured": false
  },
  {
    "id": "post-133",
    "title": "Khwabon Ka Karwan",
    "slug": "khwabon-ka-karwan",
    "category": "Poems",
    "content": "<p>Raat ki chadar ab failegi har taraf, Sapne bunne ka waqt ho gaya hai shuru. Duniya ke bheed se hum huye hain taraf.<br/>Taaron ki roshni mein chamkega aasman, Dil mein chhupi baatein mehangi phir taza, Mil jayega humein apna naya jahan.</p><p>Khamosh labon se koi dua nikalegi, Sukoon milega is thake huye dil ko, Nayi subah pir ek ummeed palegi.</p><blockquote>- Aman Singh</blockquote>",
    "excerpt": "Raat ki chadar ab failegi har taraf, Sapne bunne ka waqt ho gaya hai shuru. Duniya ke bheed se hum huye hain taraf. T...",
    "tags": [
      "dear-diary",
      "hinglish",
      "khwabon-ka-karwan",
      "poetry",
      "aman-singh"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T08:03:27.288Z",
    "updated_at": "2026-09-23T08:03:27.288Z",
    "published_at": "2026-09-23T08:03:27.288Z",
    "featured": false
  },
  {
    "id": "post-134",
    "title": "Purani Yaadein",
    "slug": "purani-yaadein",
    "category": "Poems",
    "content": "<p>Purani tasveeron ko dekhta hoon jab main, kuch chehre dhundhle se nazar aate hain, Beete huye lamhe phir se yaad aate hain.<br/>Ghar ki purani deewarein bolti hain ab, Bachpan ki wo shararatein yaad dilati hain, Thodi hasi aur thodi nami le aati hain.</p><p>Waqt badal gaya hai, hum bhi badal gaye, Par wo yaadein dil mein basi rehti hai.<br/>Khamosh hokar bhi bahut kuch kehti hai.</p><blockquote>- Aman Singh</blockquote>",
    "excerpt": "Purani tasveeron ko dekhta hoon jab main, kuch chehre dhundhle se nazar aate hain, Beete huye lamhe phir se yaad aate...",
    "tags": [
      "dear-diary",
      "hinglish",
      "purani-yaadein",
      "poetry",
      "aman-singh"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T05:01:40.698Z",
    "updated_at": "2026-09-23T05:01:40.698Z",
    "published_at": "2026-09-23T05:01:40.698Z",
    "featured": false
  },
  {
    "id": "post-135",
    "title": "Uska Ehsaas",
    "slug": "uska-ehsaas",
    "category": "Poems",
    "content": "<p>Wo jab hansti hai toh mausam badal jata hai, Jaise phoolon mein rang naya bhar gaya ho, Dil ka har ek kona khushiyon se bhar jata hai.<br/>Uski aankhon mein ek ajeeb si gehrai hai, Jismein doob kar main khud ko bhool jata hoon. Jaise usne hi meri har mushkil suljhayi hai.</p><p>Chupi rehti hai wo par bahut kuch kehti hai, Uske hone se hi meri duniya raushan hai, Wo mere khwabon mein har pal sang rehti hai...</p><blockquote>- Aman Singh</blockquote>",
    "excerpt": "Wo jab hansti hai toh mausam badal jata hai, Jaise phoolon mein rang naya bhar gaya ho, Dil ka har ek kona khushiyon ...",
    "tags": [
      "dear-diary",
      "hinglish",
      "ehsaas",
      "poetry",
      "aman-singh"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T00:55:19.373Z",
    "updated_at": "2026-09-23T00:55:19.373Z",
    "published_at": "2026-09-23T00:55:19.373Z",
    "featured": false
  },
  {
    "id": "post-136",
    "title": "This Is For You.....",
    "slug": "this-is-for-you",
    "category": "Stories",
    "content": "<p>I got attached to you without planning it. It just happened. One day you were there, and suddenly you mattered too much.</p><p>I think about you in small quiet movements, when nothing is happening. I care in ways I don't know how to explain without sounding foolish.</p><p>You stay in my head, in my habits, in my feelings. Even when I try not to, it's always you.</p><p>That's the truth I don't hide anymore.</p>blockquote>- Aman Singh</blockquote>",
    "excerpt": "I got attached to you without planning it. It just happened. One day you were there, and suddenly you mattered too mu...",
    "tags": [
      "dear-diary",
      "english",
      "story",
      "attached",
      "aman-singh"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T06:11:04.081Z",
    "updated_at": "2026-09-23T06:11:04.081Z",
    "published_at": "2026-09-23T06:11:04.081Z",
    "featured": false
  },
  {
    "id": "post-137",
    "title": "Aapki Mohabbat",
    "slug": "aapki-mohabbat",
    "category": "Poems",
    "content": "<p>Aapki aankhon mein khud ko dhoondte hai, Ishq ki gehraiyon main kho gaye hum.<br/>Aapki har baat mein sukoon milta hai, Aapke hone se hi dil khilta hai. Aapka hi zikr har pal lab par milta hai.<br/>Aapki parchhayi ban kar saath rahenge, Har mushkil mein aapke paas rahenge. Zindagi bhar bas aapke hi hum rahenge.</p><blockquote>- Aman Singh</blockquote>",
    "excerpt": "Aapki aankhon mein khud ko dhoondte hai, Ishq ki gehraiyon main kho gaye hum. Aapki har baat mein sukoon milta hai, A...",
    "tags": [
      "dear-diary",
      "hinglish",
      "mohabbat",
      "poetry",
      "aman-singh"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T03:18:23.562Z",
    "updated_at": "2026-09-23T03:18:23.562Z",
    "published_at": "2026-09-23T03:18:23.562Z",
    "featured": false
  },
  {
    "id": "post-138",
    "title": "Taqdeer",
    "slug": "taqdeer",
    "category": "Poems",
    "content": "<p>Har koi mera ho jaye, Aisi meri taqdeer nahi...<br/>Main wo kitaab hoon, Jise kisi ne pura padha nahi...<br/>Dil se sabka hua main, Par koi mera hua nahi...<br/>Muskurahat to sabni dekhi, Mere dard ko kisi ne samjha nahi..!!</p><blockquote>- Aman Singh</blockquote>",
    "excerpt": "Har koi mera ho jaye, Aisi meri taqdeer nahi... Main wo kitaab hoon, Jise kisi ne pura padha nahi... Dil se sabka hua...",
    "tags": [
      "dear-diary",
      "hinglish",
      "taqdeer",
      "poetry",
      "aman-singh"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T05:10:05.576Z",
    "updated_at": "2026-09-23T05:10:05.576Z",
    "published_at": "2026-09-23T05:10:05.576Z",
    "featured": false
  },
  {
    "id": "post-139",
    "title": "Thank You & Sorry",
    "slug": "thank-you-sorry",
    "category": "Stories",
    "content": "<p>If we still had time to sit together and talk face to face, I think I would only say two things. Thank you, & I am Sorry.</p><p>I am Sorry if I ever felt like too much. Sorry if my presence became something You no longer wanted.</p><p>And thankyou for being part of my life. For every lesson that come with tears.</p><p>You once made me feel like the luckiest Person in the world.</p><p>Even though we ended quietly, without a real goodbye, I still carry the good memories along with the Pain.</p>blockquote>- Aman Singh</blockquote>",
    "excerpt": "If we still had time to sit together and talk face to face, I think I would only say two things. Thank you, & I am So...",
    "tags": [
      "dear-diary",
      "english",
      "thank-you",
      "sorry",
      "story",
      "aman-singh"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T02:58:39.305Z",
    "updated_at": "2026-09-23T02:58:39.305Z",
    "published_at": "2026-09-23T02:58:39.305Z",
    "featured": false
  },
  {
    "id": "post-140",
    "title": "Aap aur Main",
    "slug": "aap-aur-main",
    "category": "Stories",
    "content": "<p>Aapke hone ka matlab, jaise thandi Chai ka wo pehla ghoont, Jo hathon ko jalaye nahi, bas sukoon ki tasalli de jaye.<br/>Aapki khamoshi mein bhi, wo purana kissa chhupa hai jo mujhe yaad hai.<br/>Bheed mein jab aapka haath mere haath mein hota hai, Toh lagta hai jaise waqt ne thoda ruk kar humein dekha hai.<br/>Aapka mehkura dena, mera har thake huye din ka inaam hai.</p><p>Kayi baar socha hai, ki shabd kam pad jayein toh kya karoon, Par aapki aankhon ki wo sadgi... mere sab sawalon ka jawab hai.<br/>Aapka hona, jaise bina wajah ke ghar lautne ka bahana hai...</p>blockquote>- Aman Singh</blockquote>",
    "excerpt": "Aapke hone ka matlab, jaise thandi Chai ka wo pehla ghoont, Jo hathon ko jalaye nahi, bas sukoon ki tasalli de jaye. ...",
    "tags": [
      "dear-diary",
      "hinglish",
      "story",
      "chai",
      "aman-singh"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T06:21:54.145Z",
    "updated_at": "2026-09-23T06:21:54.145Z",
    "published_at": "2026-09-23T06:21:54.145Z",
    "featured": false
  },
  {
    "id": "post-141",
    "title": "वो जो ज़ुल्फ़ें खोल कर बिखेर दे",
    "slug": "dear-diary-entry-141",
    "category": "Quotes",
    "content": "<p>वो जो ज़ुल्फ़ें खोल कर बिखेर दे,<br/>तो दिन रात में बदल जाए।</p>",
    "excerpt": "वो जो ज़ुल्फ़ें खोल कर बिखेर दे, तो दिन रात में बदल जाए।",
    "tags": [
      "dear-diary",
      "hindi",
      "zulfen",
      "shayari"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T04:38:56.055Z",
    "updated_at": "2026-09-23T04:38:56.055Z",
    "published_at": "2026-09-23T04:38:56.055Z",
    "featured": false
  },
  {
    "id": "post-142",
    "title": "इश्क़ चाय से साँवले रंग से होना चाहिए",
    "slug": "dear-diary-entry-142",
    "category": "Quotes",
    "content": "<p>इश्क़ चाय से साँवले रंग से होना चाहिए,<br/>ये हुस्न से भरे चेहरे इतराते बहुत हैं।</p>",
    "excerpt": "इश्क़ चाय से साँवले रंग से होना चाहिए, ये हुस्न से भरे चेहरे इतराते बहुत हैं।",
    "tags": [
      "dear-diary",
      "hindi",
      "chai",
      "ishq"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T08:10:48.455Z",
    "updated_at": "2026-09-23T08:10:48.455Z",
    "published_at": "2026-09-23T08:10:48.455Z",
    "featured": false
  },
  {
    "id": "post-143",
    "title": "Teri Aankhe",
    "slug": "teri-aankhe",
    "category": "Love",
    "content": "<p>Ye chehara tera aankho me utaar gya hai,<br/>Tere aane se pehle kharab tha,<br/>Aab ye ladka sudhar gya hai,<br/>Jo ho bol dena kabhi mere aage mazboor na hona,<br/>Aur mujhe tere pass rahana hai mujhse kabhi door na hona..!!</p><blockquote>- Aman Singh</blockquote>",
    "excerpt": "Ye chehara tera aankho me utaar gya hai, Tere aane se pehle kharab tha, Aab ye ladka sudhar gya hai, Jo ho bol dena k...",
    "tags": [
      "dear-diary",
      "hinglish",
      "aankhe",
      "love",
      "aman-singh"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T06:36:25.941Z",
    "updated_at": "2026-09-23T06:36:25.941Z",
    "published_at": "2026-09-23T06:36:25.941Z",
    "featured": false
  },
  {
    "id": "post-144",
    "title": "मेरे आँसूओं पर खड़ा है गुरूर तुम्हारा",
    "slug": "dear-diary-entry-144",
    "category": "Quotes",
    "content": "<p>मेरे आँसूओं पर खड़ा है गुरूर तुम्हारा,<br/>पल भर में इसे ज़मी पर गिरा दूँगा।</p>",
    "excerpt": "मेरे आँसूओं पर खड़ा है गुरूर तुम्हारा, पल भर में इसे ज़मी पर गिरा दूँगा।",
    "tags": [
      "dear-diary",
      "hindi",
      "gurur",
      "shayari"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T00:15:04.753Z",
    "updated_at": "2026-09-23T00:15:04.753Z",
    "published_at": "2026-09-23T00:15:04.753Z",
    "featured": false
  },
  {
    "id": "post-145",
    "title": "Tum Chahte Ho Ki Dil Dukhe",
    "slug": "tum-chahte-ho-ki-dil-dukhe",
    "category": "Micro Poems",
    "content": "<p>Tum chahte ho ki dil dukhe par bhi koi shikayat naa karu...<br/>Matlab tumse rishta bhi rakhu aur umeed bhi na karu..!!</p>",
    "excerpt": "Tum chahte ho ki dil dukhe par bhi koi shikayat naa karu... Matlab tumse rishta bhi rakhu aur umeed bhi na karu..!!",
    "tags": [
      "dear-diary",
      "hinglish",
      "shikayat",
      "micro-poem"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T03:45:58.975Z",
    "updated_at": "2026-09-23T03:45:58.975Z",
    "published_at": "2026-09-23T03:45:58.975Z",
    "featured": false
  },
  {
    "id": "post-146",
    "title": "Haqikat Kahu To Tujhe Khwab Lagta Hai",
    "slug": "haqikat-kahu-to-tujhe-khwab-lagta-hai",
    "category": "Micro Poems",
    "content": "<p>Haqikat kahu to tujhe khwab lagta hai, Shikayat karu to tujhe mazak lagta hai.<br/>Kitni shiddat se yaad karta hu tujhe Lekin tujhe ye sab ittefaq lagta hai.</p>",
    "excerpt": "Haqikat kahu to tujhe khwab lagta hai, Shikayat karu to tujhe mazak lagta hai. Kitni shiddat se yaad karta hu tujhe L...",
    "tags": [
      "dear-diary",
      "hinglish",
      "haqikat",
      "shiddat"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T06:23:33.494Z",
    "updated_at": "2026-09-23T06:23:33.494Z",
    "published_at": "2026-09-23T06:23:33.494Z",
    "featured": false
  },
  {
    "id": "post-147",
    "title": "इस हक़ीक़त का क्या करूँ",
    "slug": "dear-diary-entry-147",
    "category": "Quotes",
    "content": "<p>इस हक़ीक़त का क्या करूँ,<br/>मेरे ख़्वाब तो कुछ और थे।</p>",
    "excerpt": "इस हक़ीक़त का क्या करूँ, मेरे ख़्वाब तो कुछ और थे।",
    "tags": [
      "dear-diary",
      "hindi",
      "khwab",
      "haqiqat"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T07:08:47.747Z",
    "updated_at": "2026-09-23T07:08:47.747Z",
    "published_at": "2026-09-23T07:08:47.747Z",
    "featured": false
  },
  {
    "id": "post-148",
    "title": "Kuch Kehna Tha Tumse",
    "slug": "kuch-kehna-tha-tumse",
    "category": "Stories",
    "content": "<p>Kuch kehna tha tumse, Tum sunna chahogi kya?<br/>\"Zindagi ek chhota sa safar hai, Tum mere sath chalna chohogi kya?</p><p>\"Aur jb kabhi mujhe neend na aaye, Tum mujhe apni godi mein sulaogi kya?<br/>\"Kaise toh maine gawaya hai apni chiz ko, Tum phir bhi wo pyaari chiz banna Chohogi kya..!!</p>",
    "excerpt": "Kuch kehna tha tumse, Tum sunna chahogi kya? \"Zindagi ek chhota sa safar hai, Tum mere sath chalna chohogi kya? \"Aur ...",
    "tags": [
      "dear-diary",
      "hinglish",
      "story",
      "safar"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T00:47:33.340Z",
    "updated_at": "2026-09-23T00:47:33.340Z",
    "published_at": "2026-09-23T00:47:33.340Z",
    "featured": false
  },
  {
    "id": "post-149",
    "title": "कोई सूखे गुलाब सजा गया किताबों में",
    "slug": "dear-diary-entry-149",
    "category": "Quotes",
    "content": "<p>कोई सूखे गुलाब सजा गया किताबों में,<br/>किसी ने महकते गुलाब फेक दिए;</p>",
    "excerpt": "कोई सूखे गुलाब सजा गया किताबों में, किसी ने महकते गुलाब फेक दिए;",
    "tags": [
      "dear-diary",
      "hindi",
      "gulab",
      "kitab"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T06:33:01.813Z",
    "updated_at": "2026-09-23T06:33:01.813Z",
    "published_at": "2026-09-23T06:33:01.813Z",
    "featured": false
  },
  {
    "id": "post-150",
    "title": "Ek Tarfa Pyaar",
    "slug": "ek-tarfa-pyaar",
    "category": "Stories",
    "content": "<p>Mujhe usse ek tarfa pyaar hai...<br/>Ek tarfa pyaar ka matlab samajhte ho?</p><p>Woh pyaar jo \"kaash\" se shuru hota hai, aur \"khair\" pe khatam ho jaata hai.<br/>Kaash woh bhi mujhe chahti, kaash meri tarah bechain hoti...<br/>Khair, Shayad meri kismat mein uska saath mana nahi likha tha.</p><p>Par ajeeb baat dekho na, Duaa aaj bhi uske liye hi nikalta hai,<br/>Chahe woh mera ho ya no ho...</p>",
    "excerpt": "Mujhe usse ek tarfa pyaar hai... Ek tarfa pyaar ka matlab samajhte ho? Woh pyaar jo \"kaash\" se shuru hota hai, aur \"k...",
    "tags": [
      "dear-diary",
      "hinglish",
      "ek-tarfa-pyaar",
      "story",
      "aman-singh"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T06:41:15.716Z",
    "updated_at": "2026-09-23T06:41:15.716Z",
    "published_at": "2026-09-23T06:41:15.716Z",
    "featured": false
  },
  {
    "id": "post-151",
    "title": "दुनिया में 1% लोग धूप से जलते हैं",
    "slug": "1",
    "category": "Quotes",
    "content": "<p>दुनिया में 1% लोग धूप से जलते हैं,<br/>बाकी के सब एक दूसरे से जलते हैं!</p>",
    "excerpt": "दुनिया में 1% लोग धूप से जलते हैं, बाकी के सब एक दूसरे से जलते हैं!",
    "tags": [
      "dear-diary",
      "hindi",
      "duniya",
      "quotes"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T05:48:11.172Z",
    "updated_at": "2026-09-23T05:48:11.172Z",
    "published_at": "2026-09-23T05:48:11.172Z",
    "featured": false
  },
  {
    "id": "post-152",
    "title": "Being Ignored Hurts Me More",
    "slug": "being-ignored-hurts-me-more",
    "category": "Stories",
    "content": "<p>I told you that being ignored hurts me more than anything. Not because I need attention all the time, but because silence makes me overthink everything.</p><p>So when your replies became colder, when hours turned into days, when I had to guess whether you still cared or not. It slowly ruined me.</p><p>And maybe you never meant to hurt me. Maybe for you, it was just distance. But for me, it felt like watching someone slowly stop choosing me while I was still choosing them everyday.</p>",
    "excerpt": "I told you that being ignored hurts me more than anything. Not because I need attention all the time, but because sil...",
    "tags": [
      "dear-diary",
      "english",
      "ignored",
      "silence",
      "story"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T04:58:10.888Z",
    "updated_at": "2026-09-23T04:58:10.888Z",
    "published_at": "2026-09-23T04:58:10.888Z",
    "featured": false
  },
  {
    "id": "post-153",
    "title": "Confession - I Like You!",
    "slug": "confession-i-like-you",
    "category": "Love",
    "content": "<p>I've kept this in my heart for so long, afraid of how you might feel.<br/>But today, I just want to be honest...</p><p>You make my world brighter just by being in it. Your SMILE, Your words, Your PRESENCE - Everything about you stays with me.</p>blockquote>\"I LIKE YOU!\"</blockquote><p>Maybe one day, you'll feel the same.</p>",
    "excerpt": "I've kept this in my heart for so long, afraid of how you might feel. But today, I just want to be honest... You make...",
    "tags": [
      "dear-diary",
      "english",
      "confession",
      "love",
      "i-like-you"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T01:16:53.763Z",
    "updated_at": "2026-09-23T01:16:53.763Z",
    "published_at": "2026-09-23T01:16:53.763Z",
    "featured": false
  },
  {
    "id": "post-154",
    "title": "Mat Dhoondho Mujhe Mere Pehle Se Kirdaar Mein",
    "slug": "mat-dhoondho-mujhe-mere-pehle-se-kirdaar-mein",
    "category": "Micro Poems",
    "content": "<p>\"Mat dhoondho mujhe mere pehle se kirdaar mein,<br/>Kho diya maine khud ko logon se bhare bazaar mein.<br/>Kyunki aksar nahi rakhte log,<br/>Zang lagi talwar apne meyaar mein...</p>",
    "excerpt": "\"Mat dhoondho mujhe mere pehle se kirdaar mein, Kho diya maine khud ko logon se bhare bazaar mein. Kyunki aksar nahi ...",
    "tags": [
      "dear-diary",
      "hinglish",
      "kirdaar",
      "micro-poem"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T04:32:33.076Z",
    "updated_at": "2026-09-23T04:32:33.076Z",
    "published_at": "2026-09-23T04:32:33.076Z",
    "featured": false
  },
  {
    "id": "post-155",
    "title": "हर प्रेम 'हमें साथ रहना है' तक नहीं पहुँचता",
    "slug": "dear-diary-entry-155",
    "category": "Quotes",
    "content": "<p>\"हर प्रेम 'हमें साथ रहना है' तक नहीं पहुँचता।<br/>कुछ प्रेम 'तुम खुश रहो, चाहे जहाँ रहो' तक पहुँचकर खत्म हो जाते हैं।\"</p>",
    "excerpt": "\"हर प्रेम 'हमें साथ रहना है' तक नहीं पहुँचता। कुछ प्रेम 'तुम खुश रहो, चाहे जहाँ रहो' तक पहुँचकर खत्म हो जाते हैं।\"",
    "tags": [
      "dear-diary",
      "hindi",
      "prem",
      "quotes"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T05:53:37.721Z",
    "updated_at": "2026-09-23T05:53:37.721Z",
    "published_at": "2026-09-23T05:53:37.721Z",
    "featured": false
  },
  {
    "id": "post-156",
    "title": "Dear You,",
    "slug": "dear-you",
    "category": "Love",
    "content": "<p>Some days, I miss you a little more than usual.<br/>Not because you're far away, but because I can't turn around and find you beside me.</p><p>Still, every sunrise brings me one day closer to the next time I see you.</p><p>Until then, I'll keep finding you in every memory we made.</p>blockquote>With love,<br/>Between Us.</blockquote>",
    "excerpt": "Some days, I miss you a little more than usual. Not because you're far away, but because I can't turn around and find...",
    "tags": [
      "dear-diary",
      "english",
      "dear-you",
      "love",
      "sunrise"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T00:53:37.083Z",
    "updated_at": "2026-09-23T00:53:37.083Z",
    "published_at": "2026-09-23T00:53:37.083Z",
    "featured": false
  },
  {
    "id": "post-157",
    "title": "I Have To Be Honest With You...",
    "slug": "i-have-to-be-honest-with-you",
    "category": "Love",
    "content": "<p>I think about you a lot, more than I ever admit out loud.<br/>Morning starts with your name in my head, nights end with thoughts of you that won't let me sleep.</p><p>Even during the day, when I try to stay busy, it still comes back to you.</p><p>It's always you somehow.<br/>I wonder what you're doing, how you're feeling, if you think of me too, because my mind never really leaves you...</p>",
    "excerpt": "I think about you a lot, more than I ever admit out loud. Morning starts with your name in my head, nights end with t...",
    "tags": [
      "dear-diary",
      "english",
      "honest",
      "love",
      "thoughts"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T05:22:21.123Z",
    "updated_at": "2026-09-23T05:22:21.123Z",
    "published_at": "2026-09-23T05:22:21.123Z",
    "featured": false
  },
  {
    "id": "post-158",
    "title": "Everything I Feel For You Is Genuine",
    "slug": "everything-i-feel-for-you-is-genuine",
    "category": "Love",
    "content": "<p>Everything I feel for you is genuine. My intentions are pure -<br/>I simply want to see you happy and make sure you never doubt how deeply you're loved.</p><p>I know I'm not perfect, and I'll never pretend to be, but I promise to always give you the best of me.</p><p>Even on the hardest days, I won't walk away.<br/>I'm here for you, always, and I'm never giving up on us...</p>",
    "excerpt": "Everything I feel for you is genuine. My intentions are pure - I simply want to see you happy and make sure you never...",
    "tags": [
      "dear-diary",
      "english",
      "genuine",
      "love",
      "pure"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T07:56:41.516Z",
    "updated_at": "2026-09-23T07:56:41.516Z",
    "published_at": "2026-09-23T07:56:41.516Z",
    "featured": false
  },
  {
    "id": "post-159",
    "title": "Main Khafa Hu Tujhse",
    "slug": "main-khafa-hu-tujhse",
    "category": "Micro Poems",
    "content": "<p>Main khafa hu tujhse, Tu mana toh Sahi,<br/>Na manu phir bi, Ek baar gale laga toh Sahi,<br/>Tere liye hi naraz hu,<br/>Tu bss apna pyaar jata toh sahi...</p>",
    "excerpt": "Main khafa hu tujhse, Tu mana toh Sahi, Na manu phir bi, Ek baar gale laga toh Sahi, Tere liye hi naraz hu, Tu bss ap...",
    "tags": [
      "dear-diary",
      "hinglish",
      "khafa",
      "micro-poem"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T06:20:32.943Z",
    "updated_at": "2026-09-23T06:20:32.943Z",
    "published_at": "2026-09-23T06:20:32.943Z",
    "featured": false
  },
  {
    "id": "post-160",
    "title": "वो उसके माथे की बिंदी है",
    "slug": "dear-diary-entry-160",
    "category": "Quotes",
    "content": "<p>\"वो उसके माथे की बिंदी है,<br/>जिसे तुम चाँद समझ रहे हो।\"</p>",
    "excerpt": "\"वो उसके माथे की बिंदी है, जिसे तुम चाँद समझ रहे हो।\"",
    "tags": [
      "dear-diary",
      "hindi",
      "bindi",
      "chand"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T01:11:21.810Z",
    "updated_at": "2026-09-23T01:11:21.810Z",
    "published_at": "2026-09-23T01:11:21.810Z",
    "featured": false
  },
  {
    "id": "post-161",
    "title": "जब आप किसी मूर्ख से उलझते हैं",
    "slug": "dear-diary-entry-161",
    "category": "Quotes",
    "content": "<p>\"जब आप किसी मूर्ख से उलझते हैं<br/>तो बेवकूफों की गिनती एक से दो हो जाती है।\"</p>",
    "excerpt": "\"जब आप किसी मूर्ख से उलझते हैं तो बेवकूफों की गिनती एक से दो हो जाती है।\"",
    "tags": [
      "dear-diary",
      "hindi",
      "quotes",
      "wisdom"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T07:35:10.635Z",
    "updated_at": "2026-09-23T07:35:10.635Z",
    "published_at": "2026-09-23T07:35:10.635Z",
    "featured": false
  },
  {
    "id": "post-162",
    "title": "Dear Favourite Person",
    "slug": "dear-favourite-person",
    "category": "Love",
    "content": "<p>I don't talk much with anyone, But you are someone with whom I can talk for hours,<br/>You are someone I don't want to lose you, Because I feel like something important is missing without you.<br/>Just stay with me forever.</p>",
    "excerpt": "I don't talk much with anyone, But you are someone with whom I can talk for hours, You are someone I don't want to lo...",
    "tags": [
      "dear-diary",
      "english",
      "favourite-person",
      "love"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T02:38:58.045Z",
    "updated_at": "2026-09-23T02:38:58.045Z",
    "published_at": "2026-09-23T02:38:58.045Z",
    "featured": false
  },
  {
    "id": "post-163",
    "title": "Jante Ho Fir Bhi Anjaan Bante Ho",
    "slug": "jante-ho-fir-bhi-anjaan-bante-ho",
    "category": "Micro Poems",
    "content": "<p>Jante Ho Fir Bhi Anjaan Bante Ho,<br/>Is Tarha kyo Mujhe Pareshan Karte Ho.<br/>Puchte Ho Mujhe kya Pasand Hai,<br/>Jawab khud Ho Phir Bhi Sawal karte Ho.</p>",
    "excerpt": "Jante Ho Fir Bhi Anjaan Bante Ho, Is Tarha kyo Mujhe Pareshan Karte Ho. Puchte Ho Mujhe kya Pasand Hai, Jawab khud Ho...",
    "tags": [
      "dear-diary",
      "hinglish",
      "anjaan",
      "micro-poem"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T00:05:34.560Z",
    "updated_at": "2026-09-23T00:05:34.560Z",
    "published_at": "2026-09-23T00:05:34.560Z",
    "featured": false
  },
  {
    "id": "post-164",
    "title": "Tu Kaun... Main Kaun",
    "slug": "tu-kaun-main-kaun",
    "category": "Poems",
    "content": "<p>Shikayat tabhi hoti hai, jab kisi se apnapan hota hai,<br/>Jab dil usse ek jagah deta hai, jab uski baatein, uske lafz, hamare andar tak utar jaate hain,<br/>Jahan koi ehsaas hi na ho, Wahan na gila hota hai, na koi shikwa... bas tu apni jagah, or main apni jagah.</p><p>Log milte bahut hain Zindagi me, par har kisi se dil nahi milta / lagta.<br/>Jo dil ke kareeb hote hai, Unhi se ummeedein hoti hain, aur wahi ummeedein kabhi kabhi Shikayaton ka roop le leti hain.<br/>Logao hai to shikayatein bhi hain, Warna tu kaun... main kaun.</p>",
    "excerpt": "Shikayat tabhi hoti hai, jab kisi se apnapan hota hai, Jab dil usse ek jagah deta hai, jab uski baatein, uske lafz, h...",
    "tags": [
      "dear-diary",
      "hinglish",
      "tu-kaun-main-kaun",
      "poetry",
      "aman-singh"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T06:46:57.068Z",
    "updated_at": "2026-09-23T06:46:57.068Z",
    "published_at": "2026-09-23T06:46:57.068Z",
    "featured": false
  },
  {
    "id": "post-165",
    "title": "Feelings...",
    "slug": "feelings",
    "category": "Poems",
    "content": "<p>Bahut kuch likh likh kar mitaya hai maine...<br/>Theek na hone par bhi, apna haal theek bataya hai maine...<br/>Baat baat par apne dil ko, behlaaya hai maine...</p><p>Apni soch me hi khokar, na jaane kitni raato ko jaag jaag kar, bitaya hai maine...<br/>Koi samjhega nahi haal mera, bas isi fikar me,<br/>Sab se sab kuch chipaya hai main...</p>",
    "excerpt": "Bahut kuch likh likh kar mitaya hai maine... Theek na hone par bhi, apna haal theek bataya hai maine... Baat baat par...",
    "tags": [
      "dear-diary",
      "hinglish",
      "feelings",
      "poetry",
      "aman-singh"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T05:35:25.296Z",
    "updated_at": "2026-09-23T05:35:25.296Z",
    "published_at": "2026-09-23T05:35:25.296Z",
    "featured": false
  },
  {
    "id": "post-166",
    "title": "Tohfa",
    "slug": "tohfa",
    "category": "Quotes",
    "content": "<p>Tum kisi ke liye kya ho mujhe koi fark nahi padta,<br/>Lekin tum mere liye duniya ka sabse behtreen \"TOHFA\" ho...</p>",
    "excerpt": "Tum kisi ke liye kya ho mujhe koi fark nahi padta, Lekin tum mere liye duniya ka sabse behtreen \"TOHFA\" ho...",
    "tags": [
      "dear-diary",
      "hinglish",
      "tohfa",
      "love"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T02:08:10.308Z",
    "updated_at": "2026-09-23T02:08:10.308Z",
    "published_at": "2026-09-23T02:08:10.308Z",
    "featured": false
  },
  {
    "id": "post-167",
    "title": "Meri Nazar Ki Talaash",
    "slug": "meri-nazar-ki-talaash",
    "category": "Love",
    "content": "<p>Meri nazar ki talaash ho tum...<br/>Maine jo chaha, wo pyaar ho tum.<br/>Tu hai to duniya hai meri...<br/>kaise kahu ki sirf pyaar nahi, Meri jaan ho tum...</p>",
    "excerpt": "Meri nazar ki talaash ho tum... Maine jo chaha, wo pyaar ho tum. Tu hai to duniya hai meri... kaise kahu ki sirf pyaa...",
    "tags": [
      "dear-diary",
      "hinglish",
      "meri-nazar",
      "love"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T00:19:41.856Z",
    "updated_at": "2026-09-23T00:19:41.856Z",
    "published_at": "2026-09-23T00:19:41.856Z",
    "featured": false
  },
  {
    "id": "post-168",
    "title": "Ke Tum Itni Sundar Ho",
    "slug": "ke-tum-itni-sundar-ho",
    "category": "Micro Poems",
    "content": "<p>Ke tum itni sundar ho kya hi tarif karu tumhari main,<br/>Log raato main khwab dekhte hai, main hakikat main dekhum tumhen,<br/>Tum mujhe bs ek baar dekho main sari zindagi bhar dekhun tumhen...!</p>",
    "excerpt": "Ke tum itni sundar ho kya hi tarif karu tumhari main, Log raato main khwab dekhte hai, main hakikat main dekhum tumhe...",
    "tags": [
      "dear-diary",
      "hinglish",
      "sundar",
      "micro-poem"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T03:09:58.472Z",
    "updated_at": "2026-09-23T03:09:58.472Z",
    "published_at": "2026-09-23T03:09:58.472Z",
    "featured": false
  },
  {
    "id": "post-169",
    "title": "Raat Bhar Socha Kya Pasand Hai Usme",
    "slug": "raat-bhar-socha-kya-pasand-hai-usme",
    "category": "Love",
    "content": "<p>Raat bhar socha, kya pasand hai usme,<br/>Par jitna socha, utna samajh aaya,<br/>Shakal, aadatein, harkatein sab baad mein hain,<br/>Sabse pehle uska hono hi acha lagta hai..</p>",
    "excerpt": "Raat bhar socha, kya pasand hai usme, Par jitna socha, utna samajh aaya, Shakal, aadatein, harkatein sab baad mein ha...",
    "tags": [
      "dear-diary",
      "hinglish",
      "raat-bhar-socha",
      "love"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T00:47:04.646Z",
    "updated_at": "2026-09-23T00:47:04.646Z",
    "published_at": "2026-09-23T00:47:04.646Z",
    "featured": false
  },
  {
    "id": "post-170",
    "title": "Sometimes Its Needed",
    "slug": "sometimes-its-needed",
    "category": "Stories",
    "content": "<p>Most of the time, I deal with things on my own. I dont really know how to explain what's going on in my head, So I just stay quiet instead.</p><p>When I'm not okay, I tend to pull away from everyone. Not because I don't care, but because I don't want people to see me struggling that badly.</p><p>I know disappearing isn't always fair, but sometimes its needed.</p>",
    "excerpt": "Most of the time, I deal with things on my own. I dont really know how to explain what's going on in my head, So I ju...",
    "tags": [
      "dear-diary",
      "english",
      "quiet",
      "story"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T02:42:41.187Z",
    "updated_at": "2026-09-23T02:42:41.187Z",
    "published_at": "2026-09-23T02:42:41.187Z",
    "featured": false
  },
  {
    "id": "post-171",
    "title": "Staying Silent",
    "slug": "staying-silent",
    "category": "Quotes",
    "content": "<p>Sometimes you just have to stay silent because no words can explain what is going on in your mind and heart.</p>",
    "excerpt": "Sometimes you just have to stay silent because no words can explain what is going on in your mind and heart.",
    "tags": [
      "dear-diary",
      "english",
      "silent",
      "quotes"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T04:36:14.828Z",
    "updated_at": "2026-09-23T04:36:14.828Z",
    "published_at": "2026-09-23T04:36:14.828Z",
    "featured": false
  },
  {
    "id": "post-172",
    "title": "Zaroori Nahi Kuch Galat Karne Ka Dukh Mile",
    "slug": "zaroori-nahi-kuch-galat-karne-ka-dukh-mile",
    "category": "Quotes",
    "content": "<p>Zaroori nahi kuch galat karne ka dukh mile...<br/>Had se zyada achhe hone ki be keemat chukani padti hai...</p>",
    "excerpt": "Zaroori nahi kuch galat karne ka dukh mile... Had se zyada achhe hone ki be keemat chukani padti hai...",
    "tags": [
      "dear-diary",
      "hinglish",
      "quotes",
      "life-lesson"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T02:40:01.552Z",
    "updated_at": "2026-09-23T02:40:01.552Z",
    "published_at": "2026-09-23T02:40:01.552Z",
    "featured": false
  },
  {
    "id": "post-173",
    "title": "Faaslon Ka Ehsaas (Gulzar)",
    "slug": "faaslon-ka-ehsaas-gulzar",
    "category": "Quotes",
    "content": "<p>\"Faaslon ka ehsaas tab hua,<br/>Jab mine kaha, 'Theek hoon'<br/>aur usne maan liya.\"</p>blockquote>- by Gulzar sahib.</blockquote>",
    "excerpt": "\"Faaslon ka ehsaas tab hua, Jab mine kaha, 'Theek hoon' aur usne maan liya.\" blockquote>- by Gulzar sahib.",
    "tags": [
      "dear-diary",
      "hinglish",
      "gulzar",
      "faaslon-ka-ehsaas"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T00:25:14.544Z",
    "updated_at": "2026-09-23T00:25:14.544Z",
    "published_at": "2026-09-23T00:25:14.544Z",
    "featured": false
  },
  {
    "id": "post-174",
    "title": "Lens of Insecurities",
    "slug": "lens-of-insecurities",
    "category": "Quotes",
    "content": "<p>No matter how good you are, people will judge you through the lens of their own insecurities...</p>",
    "excerpt": "No matter how good you are, people will judge you through the lens of their own insecurities...",
    "tags": [
      "dear-diary",
      "english",
      "insecurities",
      "quotes"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T05:50:40.410Z",
    "updated_at": "2026-09-23T05:50:40.410Z",
    "published_at": "2026-09-23T05:50:40.410Z",
    "featured": false
  },
  {
    "id": "post-175",
    "title": "Every Person is a Teacher",
    "slug": "every-person-is-a-teacher",
    "category": "Quotes",
    "content": "<p>Every person in your life is a Teacher.<br/>Some teach lessons, others teach you what to avoid...</p>",
    "excerpt": "Every person in your life is a Teacher. Some teach lessons, others teach you what to avoid...",
    "tags": [
      "dear-diary",
      "english",
      "teacher",
      "lessons"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T06:26:47.886Z",
    "updated_at": "2026-09-23T06:26:47.886Z",
    "published_at": "2026-09-23T06:26:47.886Z",
    "featured": false
  },
  {
    "id": "post-176",
    "title": "To, The One Who Means My World",
    "slug": "to-the-one-who-means-my-world",
    "category": "Stories",
    "content": "<p>Mujhe tumse kuch kehna hai...<br/>Sahi words dhoondna thoda mushkil hai, par main apni poori koshish karunga jis moment se tum meri life mein aaye ho, sab kuch badal gaya hai.<br/>Tum normal se moments ko bhi bohot special bana dete ho.</p>blockquote>I Like You.<br/>Ek dost se bhi zyada, itna zyada jitna maine kabhi socha bhi nahi tha.</blockquote><p>Main badle mein kuch expect nahi kar raha hoon...<br/>Main bas chahta tha ki tumhe pata ho.. Tum mere liye bohot maayne rakhte ho.</p>",
    "excerpt": "Mujhe tumse kuch kehna hai... Sahi words dhoondna thoda mushkil hai, par main apni poori koshish karunga jis moment s...",
    "tags": [
      "dear-diary",
      "hinglish",
      "my-world",
      "story"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T01:01:16.603Z",
    "updated_at": "2026-09-23T01:01:16.603Z",
    "published_at": "2026-09-23T01:01:16.603Z",
    "featured": false
  },
  {
    "id": "post-177",
    "title": "Chahe Se Koi Cheez Apni Nahi Hoti",
    "slug": "chahe-se-koi-cheez-apni-nahi-hoti",
    "category": "Micro Poems",
    "content": "<p>Chahe se koi cheez apni nahi hoti,<br/>Har muskan ke peeche khushi nahi hoti.<br/>Pana toh sab chahte hain sab kuch \"Magar\"<br/>Kabhi waqt toh kabhi kismat saath nahi hoti...!!</p>",
    "excerpt": "Chahe se koi cheez apni nahi hoti, Har muskan ke peeche khushi nahi hoti. Pana toh sab chahte hain sab kuch \"Magar\" K...",
    "tags": [
      "dear-diary",
      "hinglish",
      "kismat",
      "micro-poem"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T08:15:47.078Z",
    "updated_at": "2026-09-23T08:15:47.078Z",
    "published_at": "2026-09-23T08:15:47.078Z",
    "featured": false
  },
  {
    "id": "post-178",
    "title": "Bahut Udaas Hai Koi",
    "slug": "bahut-udaas-hai-koi",
    "category": "Micro Poems",
    "content": "<p>Bahut udaas hai koi, tere chup ho jaane se,<br/>Ho sake to baat kar le, mujhse koi bahaane se...!<br/>Tu laakh khafa hi sahi, magar itna to dekh,<br/>Koi toot raha hai, tere rooth jaane se...!</p>",
    "excerpt": "Bahut udaas hai koi, tere chup ho jaane se, Ho sake to baat kar le, mujhse koi bahaane se...! Tu laakh khafa hi sahi,...",
    "tags": [
      "dear-diary",
      "hinglish",
      "udaas",
      "micro-poem"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T05:53:59.694Z",
    "updated_at": "2026-09-23T05:53:59.694Z",
    "published_at": "2026-09-23T05:53:59.694Z",
    "featured": false
  },
  {
    "id": "post-179",
    "title": "Tum To Chand Ho Mere Bager Bhi",
    "slug": "tum-to-chand-ho-mere-bager-bhi",
    "category": "Micro Poems",
    "content": "<p>Tum to chand ho mere bager bhi chamko gi...<br/>Main wo asman hu jo tere bagair bilkul tanha hu...!</p>",
    "excerpt": "Tum to chand ho mere bager bhi chamko gi... Main wo asman hu jo tere bagair bilkul tanha hu...!",
    "tags": [
      "dear-diary",
      "hinglish",
      "chand",
      "micro-poem"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T05:03:42.413Z",
    "updated_at": "2026-09-23T05:03:42.413Z",
    "published_at": "2026-09-23T05:03:42.413Z",
    "featured": false
  },
  {
    "id": "post-180",
    "title": "Pasandida Shaks",
    "slug": "pasandida-shaks",
    "category": "Love",
    "content": "<p>Tum toh mere pasandida shaks ho,<br/>Tumhare zikr par toh meri rooh bhi muskurati hai...</p>",
    "excerpt": "Tum toh mere pasandida shaks ho, Tumhare zikr par toh meri rooh bhi muskurati hai...",
    "tags": [
      "dear-diary",
      "hinglish",
      "pasandida-shaks",
      "love"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T04:22:37.078Z",
    "updated_at": "2026-09-23T04:22:37.078Z",
    "published_at": "2026-09-23T04:22:37.078Z",
    "featured": false
  },
  {
    "id": "post-181",
    "title": "Butterfly in a Jar",
    "slug": "butterfly-in-a-jar",
    "category": "Quotes",
    "content": "<p>You can't force someone to stay, just like you can't keep butterfly in jar..</p>",
    "excerpt": "You can't force someone to stay, just like you can't keep butterfly in jar..",
    "tags": [
      "dear-diary",
      "english",
      "butterfly",
      "freedom",
      "quotes"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T04:06:13.416Z",
    "updated_at": "2026-09-23T04:06:13.416Z",
    "published_at": "2026-09-23T04:06:13.416Z",
    "featured": false
  },
  {
    "id": "post-182",
    "title": "Dosti ke Baad Mohabbat",
    "slug": "dosti-ke-baad-mohabbat",
    "category": "Quotes",
    "content": "<p>Dosti ke baad mohabbat ho sakti hai. Mohabbat ke baad dosti nhi.<br/>Kyu ki dawa marne se pehle kaam aati hai. Marne ke baad nhi...</p>",
    "excerpt": "Dosti ke baad mohabbat ho sakti hai. Mohabbat ke baad dosti nhi. Kyu ki dawa marne se pehle kaam aati hai. Marne ke b...",
    "tags": [
      "dear-diary",
      "hinglish",
      "dosti",
      "mohabbat",
      "quotes"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T01:50:10.422Z",
    "updated_at": "2026-09-23T01:50:10.422Z",
    "published_at": "2026-09-23T01:50:10.422Z",
    "featured": false
  },
  {
    "id": "post-183",
    "title": "Koi Wada Na Kar",
    "slug": "koi-wada-na-kar",
    "category": "Poems",
    "content": "<p>Koi wada na kar, koi irada na kar<br/>Khwaishon mein khud ko aadha na kar<br/>Ye zindagi degi utna hi jitna likha hai khuda ne<br/>Ab use paane ki zidd jyada na kar...!!</p>",
    "excerpt": "Koi wada na kar, koi irada na kar Khwaishon mein khud ko aadha na kar Ye zindagi degi utna hi jitna likha hai khuda n...",
    "tags": [
      "dear-diary",
      "hinglish",
      "wada",
      "poetry"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T05:03:27.678Z",
    "updated_at": "2026-09-23T05:03:27.678Z",
    "published_at": "2026-09-23T05:03:27.678Z",
    "featured": false
  },
  {
    "id": "post-184",
    "title": "Dil Ko Sukoon De Deta Hai",
    "slug": "dil-ko-sukoon-de-deta-hai",
    "category": "Love",
    "content": "<p>Kabhi kabhi zindagi mein ek aisa insaan mil jaata hai....<br/>Jise paana zaroori nahi hota, bas uska hona hi dil ko sukoon de deta hai.<br/>Aur jab woh saath na ho, to har khushi bhi adhoori lagne lagti hai...</p>",
    "excerpt": "Kabhi kabhi zindagi mein ek aisa insaan mil jaata hai.... Jise paana zaroori nahi hota, bas uska hona hi dil ko sukoo...",
    "tags": [
      "dear-diary",
      "hinglish",
      "sukoon",
      "love"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T04:34:47.719Z",
    "updated_at": "2026-09-23T04:34:47.719Z",
    "published_at": "2026-09-23T04:34:47.719Z",
    "featured": false
  },
  {
    "id": "post-185",
    "title": "Ek Din Khud Se Milunga",
    "slug": "ek-din-khud-se-milunga",
    "category": "Quotes",
    "content": "<p>Ek din khud se milunga... aur poochunga,<br/>'Itna sab seh kar bhi tu muskura kaise leta hai'?</p>",
    "excerpt": "Ek din khud se milunga... aur poochunga, 'Itna sab seh kar bhi tu muskura kaise leta hai'?",
    "tags": [
      "dear-diary",
      "hinglish",
      "smile-through-pain",
      "quotes"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T04:05:28.316Z",
    "updated_at": "2026-09-23T04:05:28.316Z",
    "published_at": "2026-09-23T04:05:28.316Z",
    "featured": false
  },
  {
    "id": "post-186",
    "title": "Adjustment Between Feelings and Reality",
    "slug": "adjustment-between-feelings-and-reality",
    "category": "Quotes",
    "content": "<p>Life is about adjustment between your feelings and reality.<br/>There come many situations in your life where you have to leave your emotions and accept the reality.</p>",
    "excerpt": "Life is about adjustment between your feelings and reality. There come many situations in your life where you have to...",
    "tags": [
      "dear-diary",
      "english",
      "feelings-and-reality",
      "quotes"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T01:56:55.011Z",
    "updated_at": "2026-09-23T01:56:55.011Z",
    "published_at": "2026-09-23T01:56:55.011Z",
    "featured": false
  },
  {
    "id": "post-187",
    "title": "Tired of Too Much Love",
    "slug": "tired-of-too-much-love",
    "category": "Quotes",
    "content": "<p>Maybe it's true that people get tired of you when you show them to much love.</p>",
    "excerpt": "Maybe it's true that people get tired of you when you show them to much love.",
    "tags": [
      "dear-diary",
      "english",
      "too-much-love",
      "quotes"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T02:04:09.563Z",
    "updated_at": "2026-09-23T02:04:09.563Z",
    "published_at": "2026-09-23T02:04:09.563Z",
    "featured": false
  },
  {
    "id": "post-188",
    "title": "When Effort is Ignored",
    "slug": "when-effort-is-ignored",
    "category": "Quotes",
    "content": "<p>It hurts when your biggest effort is ignored and your smallest mistake is judged.</p>",
    "excerpt": "It hurts when your biggest effort is ignored and your smallest mistake is judged.",
    "tags": [
      "dear-diary",
      "english",
      "effort",
      "quotes"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T06:00:15.653Z",
    "updated_at": "2026-09-23T06:00:15.653Z",
    "published_at": "2026-09-23T06:00:15.653Z",
    "featured": false
  },
  {
    "id": "post-189",
    "title": "Bas Apna Hi Masla Sambhala Naa Gya (Jaun Elia)",
    "slug": "bas-apna-hi-masla-sambhala-naa-gya-jaun-elia",
    "category": "Quotes",
    "content": "<p>\"Bas apna hi masla sambhala naa gya,<br/>Warna yun to kitno ke kaam aaye the hum\"..</p>blockquote>- Jaun Elia</blockquote>",
    "excerpt": "\"Bas apna hi masla sambhala naa gya, Warna yun to kitno ke kaam aaye the hum\".. blockquote>- Jaun Elia",
    "tags": [
      "dear-diary",
      "hinglish",
      "jaun-elia",
      "masla"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T01:27:03.119Z",
    "updated_at": "2026-09-23T01:27:03.119Z",
    "published_at": "2026-09-23T01:27:03.119Z",
    "featured": false
  },
  {
    "id": "post-190",
    "title": "Khud Ko Teri Yaadon Ka Gulam Kar Diya",
    "slug": "khud-ko-teri-yaadon-ka-gulam-kar-diya",
    "category": "Micro Poems",
    "content": "<p>Khud ko teri yaadon ka gulam kar diya,<br/>Tere khatir khudko badnaam kar diya...!!<br/>Aur kya saboot du apni mohabbat ka,<br/>Mere pass ek hi dil tha wo bhi tere naam kar diya...!!</p>",
    "excerpt": "Khud ko teri yaadon ka gulam kar diya, Tere khatir khudko badnaam kar diya...!! Aur kya saboot du apni mohabbat ka, M...",
    "tags": [
      "dear-diary",
      "hinglish",
      "gulam",
      "yaadon"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T06:38:22.940Z",
    "updated_at": "2026-09-23T06:38:22.940Z",
    "published_at": "2026-09-23T06:38:22.940Z",
    "featured": false
  },
  {
    "id": "post-191",
    "title": "Time is Like a River",
    "slug": "time-is-like-a-river",
    "category": "Quotes",
    "content": "<p>Time is like a river. You can't touch the same water twice, because the flow that has passed, will never pass again.<br/>Enjoy every moment of your Life.</p>",
    "excerpt": "Time is like a river. You can't touch the same water twice, because the flow that has passed, will never pass again. ...",
    "tags": [
      "dear-diary",
      "english",
      "time",
      "river",
      "quotes"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T05:11:48.968Z",
    "updated_at": "2026-09-23T05:11:48.968Z",
    "published_at": "2026-09-23T05:11:48.968Z",
    "featured": false
  },
  {
    "id": "post-192",
    "title": "Woh Tumhe Kitna Pasand Hai?",
    "slug": "woh-tumhe-kitna-pasand-hai",
    "category": "Stories",
    "content": "<p>Someone Ask: \"Woh tumhe kitna pasand hai?\"</p><p>Mai yehi kahunga ki itna, ke lakho bar bhi mujhe takleef pahuchaye, To bhi agar ek dafa awaaz de de toh mai usse fir pehle jaisi mohabbat bhari nigha se dekhunga !!!</p>",
    "excerpt": "Someone Ask: \"Woh tumhe kitna pasand hai?\" Mai yehi kahunga ki itna, ke lakho bar bhi mujhe takleef pahuchaye, To bhi...",
    "tags": [
      "dear-diary",
      "hinglish",
      "pasand",
      "story"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T01:55:32.270Z",
    "updated_at": "2026-09-23T01:55:32.270Z",
    "published_at": "2026-09-23T01:55:32.270Z",
    "featured": false
  },
  {
    "id": "post-193",
    "title": "Umbrella Becomes Heavy",
    "slug": "umbrella-becomes-heavy",
    "category": "Quotes",
    "content": "<p>When the rain stops, the umbrella becomes heavy for everyone.</p>",
    "excerpt": "When the rain stops, the umbrella becomes heavy for everyone.",
    "tags": [
      "dear-diary",
      "english",
      "umbrella",
      "rain",
      "quotes"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T06:36:05.297Z",
    "updated_at": "2026-09-23T06:36:05.297Z",
    "published_at": "2026-09-23T06:36:05.297Z",
    "featured": false
  },
  {
    "id": "post-194",
    "title": "Value You and Mean a Lot",
    "slug": "value-you-and-mean-a-lot",
    "category": "Quotes",
    "content": "<p>I don't allow many people in my life.<br/>So, if you're a part of it just know that, I actually value you and mean a lot to me.!</p>",
    "excerpt": "I don't allow many people in my life. So, if you're a part of it just know that, I actually value you and mean a lot ...",
    "tags": [
      "dear-diary",
      "english",
      "value",
      "quotes"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T05:58:49.496Z",
    "updated_at": "2026-09-23T05:58:49.496Z",
    "published_at": "2026-09-23T05:58:49.496Z",
    "featured": false
  },
  {
    "id": "post-195",
    "title": "Spiderman and Lone Souls",
    "slug": "spiderman-and-lone-souls",
    "category": "Stories",
    "content": "<p>Spiderman ko dekh ke yeh toh samajh aa gaya, ki doosron ki zindagi sawarne wale aksar khud akele reh jaate hain.<br/>Chehre par muskaan ka mukhota pehan kar mehfil mein hansne wale, raat ko band kamron mein na jaane kitne dard chhupakar ro jaate hain.</p>",
    "excerpt": "Spiderman ko dekh ke yeh toh samajh aa gaya, ki doosron ki zindagi sawarne wale aksar khud akele reh jaate hain. Cheh...",
    "tags": [
      "dear-diary",
      "hinglish",
      "spiderman",
      "lone-souls",
      "story"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T05:11:21.576Z",
    "updated_at": "2026-09-23T05:11:21.576Z",
    "published_at": "2026-09-23T05:11:21.576Z",
    "featured": false
  },
  {
    "id": "post-196",
    "title": "Suna Hai Bahot Baarish Hai (Jaun Elia)",
    "slug": "suna-hai-bahot-baarish-hai-jaun-elia",
    "category": "Quotes",
    "content": "<p>\"Suna hai bahot baarish hai tumhare shehar mein zyada bhigna matt,<br/>Galat fehmiyaan dhul gayi toh hum bhi bahot yaad aayenge...\"</p>blockquote>- Jaun Elia</blockquote>",
    "excerpt": "\"Suna hai bahot baarish hai tumhare shehar mein zyada bhigna matt, Galat fehmiyaan dhul gayi toh hum bhi bahot yaad a...",
    "tags": [
      "dear-diary",
      "hinglish",
      "jaun-elia",
      "baarish"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T03:54:35.439Z",
    "updated_at": "2026-09-23T03:54:35.439Z",
    "published_at": "2026-09-23T03:54:35.439Z",
    "featured": false
  },
  {
    "id": "post-197",
    "title": "Tujhe Paa Na Sake",
    "slug": "tujhe-paa-na-sake",
    "category": "Micro Poems",
    "content": "<p>Tujhe paa na sake to bhi saari zindagi tujhe pyar karenge...<br/>Ye jaroori to nahi ki jo mil na sake usey bhula diya jaye...</p>",
    "excerpt": "Tujhe paa na sake to bhi saari zindagi tujhe pyar karenge... Ye jaroori to nahi ki jo mil na sake usey bhula diya jay...",
    "tags": [
      "dear-diary",
      "hinglish",
      "pyar",
      "micro-poem"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T04:48:09.615Z",
    "updated_at": "2026-09-23T04:48:09.615Z",
    "published_at": "2026-09-23T04:48:09.615Z",
    "featured": false
  },
  {
    "id": "post-198",
    "title": "Likhta Hun Jiske Liye",
    "slug": "likhta-hun-jiske-liye",
    "category": "Micro Poems",
    "content": "<p>Likhta hun jiske liye use khabar tak nahi,<br/>Padhte hein vo log jo mujhe jante bhi nahi.</p>",
    "excerpt": "Likhta hun jiske liye use khabar tak nahi, Padhte hein vo log jo mujhe jante bhi nahi.",
    "tags": [
      "dear-diary",
      "hinglish",
      "likhta-hun",
      "micro-poem"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T04:47:31.020Z",
    "updated_at": "2026-09-23T04:47:31.020Z",
    "published_at": "2026-09-23T04:47:31.020Z",
    "featured": false
  },
  {
    "id": "post-199",
    "title": "Mai Chahta Hoon Woh Reh Na Payee",
    "slug": "mai-chahta-hoon-woh-reh-na-payee",
    "category": "Micro Poems",
    "content": "<p>Main nahi chahta woh mere bulaane se aaye,<br/>Mai chahta hoon woh reh na payee aur kisi bahane se aaye.</p>",
    "excerpt": "Main nahi chahta woh mere bulaane se aaye, Mai chahta hoon woh reh na payee aur kisi bahane se aaye.",
    "tags": [
      "dear-diary",
      "hinglish",
      "bahane",
      "micro-poem"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T07:58:46.836Z",
    "updated_at": "2026-09-23T07:58:46.836Z",
    "published_at": "2026-09-23T07:58:46.836Z",
    "featured": false
  },
  {
    "id": "post-200",
    "title": "Effort is Never Useless",
    "slug": "effort-is-never-useless",
    "category": "Stories",
    "content": "<p>Others Say, \"Effort is useless when you're not the one they want.\"</p><p>But I think -<br/>It was never about being chosen. I gave my effort because I cared, because my heart wanted to.<br/>Maybe it changed nothing, but that doesn't make it useless.</p><p>Some efforts aren't meant to make someone stay - they're simply proof that you loved with a sincere heart.</p>",
    "excerpt": "Others Say, \"Effort is useless when you're not the one they want.\" But I think - It was never about being chosen. I g...",
    "tags": [
      "dear-diary",
      "english",
      "effort",
      "story",
      "sincere-heart"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T03:26:29.694Z",
    "updated_at": "2026-09-23T03:26:29.694Z",
    "published_at": "2026-09-23T03:26:29.694Z",
    "featured": false
  },
  {
    "id": "post-201",
    "title": "Blame Myself",
    "slug": "blame-myself",
    "category": "Stories",
    "content": "<p>I blame myself for expecting too much, for caring too deeply, for holding on when I should have let go.</p><p>I blame myself for nights I overthink, for the tears I hide, for the hurt I pretend I'm fine with.</p><p>I blame myself for every broken piece, for every lesson I had to learn the hard way.</p><p>But maybe... I blame myself because I still hope things could have been different...</p>",
    "excerpt": "I blame myself for expecting too much, for caring too deeply, for holding on when I should have let go. I blame mysel...",
    "tags": [
      "dear-diary",
      "english",
      "blame",
      "story",
      "overthink"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T00:09:11.666Z",
    "updated_at": "2026-09-23T00:09:11.666Z",
    "published_at": "2026-09-23T00:09:11.666Z",
    "featured": false
  },
  {
    "id": "post-202",
    "title": "Switch From Expect To Accept",
    "slug": "switch-from-expect-to-accept",
    "category": "Quotes",
    "content": "<p>Life become more peaceful when you switch from expect to accept.</p>",
    "excerpt": "Life become more peaceful when you switch from expect to accept.",
    "tags": [
      "dear-diary",
      "english",
      "expect-to-accept",
      "quotes"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T02:40:53.156Z",
    "updated_at": "2026-09-23T02:40:53.156Z",
    "published_at": "2026-09-23T02:40:53.156Z",
    "featured": false
  },
  {
    "id": "post-203",
    "title": "Konsi Baat Likhu...",
    "slug": "konsi-baat-likhu",
    "category": "Poems",
    "content": "<p>Thoda sochu fir ek baat likhu,<br/>Jazbat likhu ya halat likhu,<br/>Tere ishq ko apne sath likhu,<br/>Ya mere hatho me tera haath likhu,<br/>Tujhe dekhu fir ek baat likhu,<br/>Tariff likhu ya fariyad likhu,<br/>Tere piche khudko abad likhu,<br/>Ya tanhayi me khud ko barbad likhu,<br/>Tujhe din ya khud ko raat likhu,<br/>Tu hi bata aaj konsi baat likhu..!</p>",
    "excerpt": "Thoda sochu fir ek baat likhu, Jazbat likhu ya halat likhu, Tere ishq ko apne sath likhu, Ya mere hatho me tera haath...",
    "tags": [
      "dear-diary",
      "hinglish",
      "konsi-baat-likhu",
      "poetry",
      "aman-singh"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T01:36:19.577Z",
    "updated_at": "2026-09-23T01:36:19.577Z",
    "published_at": "2026-09-23T01:36:19.577Z",
    "featured": false
  },
  {
    "id": "post-204",
    "title": "Ek Neend Hai Jo Raat Bhar Nahi Aati",
    "slug": "ek-neend-hai-jo-raat-bhar-nahi-aati",
    "category": "Micro Poems",
    "content": "<p>Ek neend hai jo raat bhar nahi aati,<br/>Ek kismat hai jo pata nahi kab se soo rhi hai.</p>",
    "excerpt": "Ek neend hai jo raat bhar nahi aati, Ek kismat hai jo pata nahi kab se soo rhi hai.",
    "tags": [
      "dear-diary",
      "hinglish",
      "neend",
      "kismat"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T03:19:09.219Z",
    "updated_at": "2026-09-23T03:19:09.219Z",
    "published_at": "2026-09-23T03:19:09.219Z",
    "featured": false
  },
  {
    "id": "post-205",
    "title": "Tu Haq Jataya Kar",
    "slug": "tu-haq-jataya-kar",
    "category": "Love",
    "content": "<p>Tu haq jataya kar, achha lagta hai,<br/>Yun apna sa bataya kar, achha lagta hai,<br/>Duniya bhar ki mohabbat nahi chahiye mujhe,<br/>Bas kabhi kabhi mujhe ab apna kaha kar achha lagta hai...</p>",
    "excerpt": "Tu haq jataya kar, achha lagta hai, Yun apna sa bataya kar, achha lagta hai, Duniya bhar ki mohabbat nahi chahiye muj...",
    "tags": [
      "dear-diary",
      "hinglish",
      "haq",
      "love"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T03:27:51.615Z",
    "updated_at": "2026-09-23T03:27:51.615Z",
    "published_at": "2026-09-23T03:27:51.615Z",
    "featured": false
  },
  {
    "id": "post-206",
    "title": "Stay True To Yourself",
    "slug": "stay-true-to-yourself",
    "category": "Quotes",
    "content": "<p>You don't have to be understood by everyone.<br/>You just have to stay true to yourself and keep moving forward.<br/>The right people will find you along the way...</p>",
    "excerpt": "You don't have to be understood by everyone. You just have to stay true to yourself and keep moving forward. The righ...",
    "tags": [
      "dear-diary",
      "english",
      "stay-true",
      "quotes"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T03:03:43.668Z",
    "updated_at": "2026-09-23T03:03:43.668Z",
    "published_at": "2026-09-23T03:03:43.668Z",
    "featured": false
  },
  {
    "id": "post-207",
    "title": "Be Someone's Eraser",
    "slug": "be-someones-eraser",
    "category": "Quotes",
    "content": "<p>Be someone's Eraser.<br/>The world already has enough Pencils pointing out mistakes..</p>",
    "excerpt": "Be someone's Eraser. The world already has enough Pencils pointing out mistakes..",
    "tags": [
      "dear-diary",
      "english",
      "eraser",
      "pencils",
      "quotes"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T03:06:29.435Z",
    "updated_at": "2026-09-23T03:06:29.435Z",
    "published_at": "2026-09-23T03:06:29.435Z",
    "featured": false
  },
  {
    "id": "post-208",
    "title": "You'll Never Know",
    "slug": "youll-never-know",
    "category": "Stories",
    "content": "<p>Pata nahi kab se, but somewhere between us, things started feeling different.<br/>Pehle tumse baat karna easy lagta tha, ab sochna padta hai, ki kya bolu, kitna bolun.</p><p>I still care, probably more than I should, but ab har cheez explain karna ka mann nhi karta.<br/>Kabhi kabhi bas itna chahta hoon ki tum khud notice karo ki main thoda door ho raha hoon.<br/>Not because I want attention, but because I want to know if my absence would ever matter to you.</p><p>Shayad kuch log life mein hamesha rehne ke liye nahi aate. They just leave behind a feeling that takes much longer to leave than they do. Aur shayad tum bhi mere liye wohi ho... a beautiful part of my life, jo ab meri life ka part nahi hai. Someone I still care about, but can no longer keep waiting for.</p><p>Kabhi kabhi dil karta hai tumse keh doon ki I still miss our old you and me, but then I remember... kuch feelings kehne ke liye nahi hoti... bas khamoshi se jeene ke liye hoti hai.</p><p>I don't blame you for changing, bas thoda dukh hai ki jis insaan ke saath itna kuch feel kiya, usi ke saath aaj itna kuch unsaid reh gaya...</p>",
    "excerpt": "Pata nahi kab se, but somewhere between us, things started feeling different. Pehle tumse baat karna easy lagta tha, ...",
    "tags": [
      "dear-diary",
      "hinglish",
      "youll-never-know",
      "story",
      "aman-singh"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T02:37:12.888Z",
    "updated_at": "2026-09-23T02:37:12.888Z",
    "published_at": "2026-09-23T02:37:12.888Z",
    "featured": false
  },
  {
    "id": "post-209",
    "title": "Maybe That Someone Will Always Be Me",
    "slug": "maybe-that-someone-will-always-be-me",
    "category": "Stories",
    "content": "<p>Kabhi kabhi sochta hoon, tumhe pata bhi hai ki tum mere liye kitni special ho?<br/>It's not just that I love talking to you, it's the way your presence somehow makes ordinary moments feel different.</p><p>Tumhari ek smile, ek chhoti si baat, and suddenly my entire day feels a little lighter.<br/>I don't know what the future holds for us, aur na hi main tumse koi promise maangta hoon.</p><p>Bas itna chahta hoon ki jab bhi tum apni life mein thoda sa ruk kar peeche dekho, You remember there was someone who genuinely cared for you.<br/>Aur agar kabhi tumhe lage ki duniya mein koi tumhe poori tarah samajh nahi paaya... Just remember, there was someone who always tried.<br/>Maybe that someone will always be Me.</p>",
    "excerpt": "Kabhi kabhi sochta hoon, tumhe pata bhi hai ki tum mere liye kitni special ho? It's not just that I love talking to y...",
    "tags": [
      "dear-diary",
      "hinglish",
      "special",
      "story",
      "aman-singh"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T05:38:22.573Z",
    "updated_at": "2026-09-23T05:38:22.573Z",
    "published_at": "2026-09-23T05:38:22.573Z",
    "featured": false
  },
  {
    "id": "post-210",
    "title": "Sirf Tumhare Liye......",
    "slug": "sirf-tumhare-liye",
    "category": "Love",
    "content": "<p>Pata nahi tumhe kab samajh aayega... ki tum mere liye sirf ek khoobsurat ladki nahi ho, tum wo ehsaas ho jiske aane se dil thoda aur zinda sa lagta hai.</p><p>Tum pass hoti ho, to waqt rukta nahi... bas thoda khoobsurat ho jaata hai.</p><p>Aur sach kahun, mujhe tumse kuch chahiye bhi nahi - bas kabhi yunhi mera haath pakad lena, mere kandhe par sar rakh dena... Taaki mujhe yakeen rahe ki kuch pal sach mein mere bhi the.</p>",
    "excerpt": "Pata nahi tumhe kab samajh aayega... ki tum mere liye sirf ek khoobsurat ladki nahi ho, tum wo ehsaas ho jiske aane s...",
    "tags": [
      "dear-diary",
      "hinglish",
      "sirf-tumhare-liye",
      "love",
      "aman-singh"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T01:47:23.619Z",
    "updated_at": "2026-09-23T01:47:23.619Z",
    "published_at": "2026-09-23T01:47:23.619Z",
    "featured": false
  },
  {
    "id": "post-211",
    "title": "The Lesson Life Leaves Behind",
    "slug": "the-lesson-life-leaves-behind",
    "category": "Stories",
    "content": "<p>You can give someone your whole heart and still not be enough for them.<br/>That's the painfull truth life teaches.</p><p>Don't keep watering a tree that has already decided not to bloom for you.<br/>Some people are lessons, not lifelong homes.</p><p>Love deeply, stay genuine - but never let someone's inability to value you become the reson you stop valuing yourself.</p>",
    "excerpt": "You can give someone your whole heart and still not be enough for them. That's the painfull truth life teaches. Don't...",
    "tags": [
      "dear-diary",
      "english",
      "life-lesson",
      "story",
      "aman-singh"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T02:54:18.449Z",
    "updated_at": "2026-09-23T02:54:18.449Z",
    "published_at": "2026-09-23T02:54:18.449Z",
    "featured": false
  },
  {
    "id": "post-212",
    "title": "Inside....",
    "slug": "inside",
    "category": "Stories",
    "content": "<p>Feeling the most disturbed inside, not knowing where the life is taking me.<br/>Trying my best to be okay but everyday is just so hard...</p>",
    "excerpt": "Feeling the most disturbed inside, not knowing where the life is taking me. Trying my best to be okay but everyday is...",
    "tags": [
      "dear-diary",
      "english",
      "inside",
      "disturbed",
      "story"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T04:06:17.789Z",
    "updated_at": "2026-09-23T04:06:17.789Z",
    "published_at": "2026-09-23T04:06:17.789Z",
    "featured": false
  },
  {
    "id": "post-213",
    "title": "Silence is the Wisest Response",
    "slug": "silence-is-the-wisest-response",
    "category": "Quotes",
    "content": "<p>Silence doesn't always mean you have nothing to say.<br/>It may mean you realize that no matter what you say, it won't change anythings and that sometimes, silence is the wisest response...</p>",
    "excerpt": "Silence doesn't always mean you have nothing to say. It may mean you realize that no matter what you say, it won't ch...",
    "tags": [
      "dear-diary",
      "english",
      "silence",
      "wisest-response",
      "quotes"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T06:03:35.688Z",
    "updated_at": "2026-09-23T06:03:35.688Z",
    "published_at": "2026-09-23T06:03:35.688Z",
    "featured": false
  },
  {
    "id": "post-214",
    "title": "जब उसे पहली बार साड़ी में देखा",
    "slug": "dear-diary-entry-214",
    "category": "Micro Poems",
    "content": "<p>जब उसे पहली बार साड़ी में देखा, तब लगा...<br/>जो 'शृंगार' में 'श्र' के ऊपर बिंदी है, वो वो बिंदी उसके माथे की है।<br/>जो 'श्र' में दो लाइन है, वो उसकी लहराती जुल्फ़ें...</p>",
    "excerpt": "जब उसे पहली बार साड़ी में देखा, तब लगा... जो 'शृंगार' में 'श्र' के ऊपर बिंदी है, वो वो बिंदी उसके माथे की है। जो 'श्र'...",
    "tags": [
      "dear-diary",
      "hindi",
      "saree",
      "shringaar",
      "micro-poem"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T04:36:01.039Z",
    "updated_at": "2026-09-23T04:36:01.039Z",
    "published_at": "2026-09-23T04:36:01.039Z",
    "featured": false
  },
  {
    "id": "post-215",
    "title": "लड़ने दीजिए जुल्फ़ों और हवाओं को",
    "slug": "dear-diary-entry-215",
    "category": "Micro Poems",
    "content": "<p>लड़ने दीजिए जुल्फ़ों और हवाओं को आपस में,<br/>तुम क्यों हाथ से उनमें सुलह कराने लगती हो।</p>",
    "excerpt": "लड़ने दीजिए जुल्फ़ों और हवाओं को आपस में, तुम क्यों हाथ से उनमें सुलह कराने लगती हो।",
    "tags": [
      "dear-diary",
      "hindi",
      "zulfen",
      "hawa",
      "micro-poem"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T06:15:54.560Z",
    "updated_at": "2026-09-23T06:15:54.560Z",
    "published_at": "2026-09-23T06:15:54.560Z",
    "featured": false
  },
  {
    "id": "post-216",
    "title": "मैं तो सिर्फ उसका ही हूँ",
    "slug": "dear-diary-entry-216",
    "category": "Micro Poems",
    "content": "<p>मैं तो सिर्फ उसका ही हूँ,<br/>मगर ये सोच लूँ कि वो किसका है,<br/>तो पूरी रात नींद नहीं आती।</p>",
    "excerpt": "मैं तो सिर्फ उसका ही हूँ, मगर ये सोच लूँ कि वो किसका है, तो पूरी रात नींद नहीं आती।",
    "tags": [
      "dear-diary",
      "hindi",
      "neend",
      "possessive",
      "micro-poem"
    ],
    "status": "published",
    "view_count": 0,
    "created_at": "2026-09-23T07:14:20.242Z",
    "updated_at": "2026-09-23T07:14:20.242Z",
    "published_at": "2026-09-23T07:14:20.242Z",
    "featured": false
  }
];

interface DBData {
  writings: Writing[];
  settings: SiteSettings;
}

let memoryCache: DBData | null = null;

function ensureDB(): DBData {
  if (memoryCache) {
    dedupeAndSortWritings(memoryCache.writings);
    return memoryCache;
  }

  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    if (fs.existsSync(DB_FILE)) {
      const content = fs.readFileSync(DB_FILE, 'utf-8');
      memoryCache = JSON.parse(content);
      if (memoryCache && memoryCache.writings) {
        if (memoryCache.writings.length < SEED_WRITINGS.length) {
          const existingIds = new Set(memoryCache.writings.map(w => w.id));
          const missingSeeds = SEED_WRITINGS.filter(s => !existingIds.has(s.id));
          memoryCache.writings = [...memoryCache.writings, ...missingSeeds];
        }
        dedupeAndSortWritings(memoryCache.writings);
        saveDB(memoryCache);
        return memoryCache!;
      }
    }
  } catch (err) {
    console.warn("FileSystem database warning, falling back to memory:", err);
  }

  memoryCache = {
    writings: SEED_WRITINGS,
    settings: DEFAULT_SETTINGS
  };

  dedupeAndSortWritings(memoryCache.writings);
  saveDB(memoryCache);
  return memoryCache;
}

function dedupeAndSortWritings(list: Writing[]): void {
  // 1. Safe deduplication by unique ID (keep most recent)
  const seen = new Map<string, Writing>();
  for (const item of list) {
    if (!item || !item.id) continue;
    if (!seen.has(item.id)) {
      seen.set(item.id, item);
    } else {
      const existing = seen.get(item.id)!;
      const timeExisting = Math.max(Date.parse(existing.updated_at || '0') || 0, Date.parse(existing.created_at || '0') || 0);
      const timeNew = Math.max(Date.parse(item.updated_at || '0') || 0, Date.parse(item.created_at || '0') || 0);
      if (timeNew > timeExisting) {
        seen.set(item.id, item);
      }
    }
  }

  const unique = Array.from(seen.values());
  // 2. Sort newest created/updated first
  unique.sort((a, b) => {
    const timeA = Math.max(Date.parse(a.updated_at || '0') || 0, Date.parse(a.created_at || '0') || 0);
    const timeB = Math.max(Date.parse(b.updated_at || '0') || 0, Date.parse(b.created_at || '0') || 0);
    return timeB - timeA;
  });

  list.length = 0;
  list.push(...unique);
}

function saveDB(data: DBData) {
  memoryCache = data;
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
    
    // Asynchronously commit to GitHub repo if GITHUB_TOKEN environment variable is present
    if (process.env.GITHUB_TOKEN) {
      syncToGitHub(data).catch((e) => console.warn("GitHub sync error:", e));
    }
  } catch (err) {
    console.warn("Unable to save DB to disk:", err);
  }
}

async function syncToGitHub(data: DBData) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return;
  try {
    const owner = "websiteh063-hue";
    const repo = "digital-diary";
    const path = "data/diary.json";

    const getRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Digital-Diary-App'
      }
    });

    if (!getRes.ok) return;
    const fileInfo = await getRes.json();
    const sha = fileInfo.sha;

    const contentEncoded = Buffer.from(JSON.stringify(data, null, 2)).toString('base64');
    await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
        'User-Agent': 'Digital-Diary-App'
      },
      body: JSON.stringify({
        message: 'Auto-save writing from admin live site',
        content: contentEncoded,
        sha
      })
    });
  } catch (err) {
    console.warn("GitHub auto-sync exception:", err);
  }
}

export function getAllWritings(includeDrafts = false): Writing[] {
  const db = ensureDB();
  let list = db.writings;
  if (!includeDrafts) {
    list = list.filter(w => w.status === 'published');
  }
  return list.sort((a, b) => {
    const timeA = Math.max(Date.parse(a.updated_at || '0') || 0, Date.parse(a.created_at || '0') || 0);
    const timeB = Math.max(Date.parse(b.updated_at || '0') || 0, Date.parse(b.created_at || '0') || 0);
    return timeB - timeA;
  });
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

export function saveWriting(data: Partial<Writing> & { title?: string; category?: Writing['category']; content?: string }): Writing {
  const db = ensureDB();
  const now = new Date().toISOString();

  // Search for existing record by ID or title+content duplicate check
  let existingIndex = -1;
  if (data.id) {
    existingIndex = db.writings.findIndex(w => w.id === data.id);
  }

  // Fallback title+content duplicate check if ID not passed
  if (existingIndex === -1 && data.title && data.content) {
    const normTitle = data.title.trim().toLowerCase();
    const normContent = data.content.trim().toLowerCase();
    existingIndex = db.writings.findIndex(w =>
      w.title.trim().toLowerCase() === normTitle &&
      w.content.trim().toLowerCase() === normContent
    );
  }

  // 1. UPDATE EXISTING RECORD (PATCH MERGE - NEVER DELETE FIELDS OR CREATE DUPLICATES)
  if (existingIndex !== -1) {
    const existing = db.writings[existingIndex];

    let excerpt = existing.excerpt;
    if (data.content !== undefined) {
      const plain = data.content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
      excerpt = plain.length > 160 ? plain.slice(0, 157) + '...' : plain;
    }

    const updated: Writing = {
      ...existing,
      ...data,
      id: existing.id, // IMMUTABLE ID
      created_at: existing.created_at || now, // IMMUTABLE createdAt
      updated_at: now, // Always refresh updatedAt
      title: data.title !== undefined ? data.title : existing.title,
      category: data.category !== undefined ? data.category : existing.category,
      content: data.content !== undefined ? data.content : existing.content,
      excerpt: excerpt,
      tags: data.tags !== undefined ? data.tags : existing.tags,
      status: data.status !== undefined ? data.status : existing.status,
      published_at: data.status === "published" ? (existing.published_at || now) : existing.published_at,
      cover_image: data.cover_image !== undefined ? data.cover_image : existing.cover_image,
      featured: data.featured !== undefined ? data.featured : (existing.featured || false),
      view_count: existing.view_count || 0,
      signature: existing.signature || db.settings.signature_image,
      tagline: existing.tagline || db.settings.tagline,
    };

    db.writings[existingIndex] = updated;
    dedupeAndSortWritings(db.writings);
    saveDB(db);
    return updated;
  }

  // 2. CREATE NEW RECORD
  const newId = data.id || `post-${Date.now()}`;
  let slug = data.slug || (data.title ? data.title.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-') : `writing-${Date.now()}`);
  if (!slug) slug = `writing-${Date.now()}`;

  let originalSlug = slug;
  let counter = 1;
  while (db.writings.some(w => w.slug === slug)) {
    slug = `${originalSlug}-${counter++}`;
  }

  const plainContent = (data.content || '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  const excerpt = data.excerpt || (plainContent.length > 160 ? plainContent.slice(0, 157) + '...' : plainContent);

  const newWriting: Writing = {
    id: newId,
    title: data.title || "Untitled Writing",
    slug,
    category: data.category || "Poems",
    content: data.content || "",
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
  dedupeAndSortWritings(db.writings);
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
