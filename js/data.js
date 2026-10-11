/**
 * VoltEdge Fashion Store - Data & Configurations
 * متجر فولت إدج للأزياء والإكسسوارات - ملف البيانات والتهيئة
 * All texts, products, numbers, and settings are easily customizable here.
 */

// 1. Store Global Settings
export const STORE_SETTINGS = {
  STORE_NAME_AR: "فولت إدج",
  STORE_NAME_EN: "VoltEdge",
  TAGLINE_AR: "أناقة معاصرة بخامات طبيعية فاخرة",
  TAGLINE_EN: "Contemporary Elegance in Fine Natural Fabrics",
  PHONE_DISPLAY: "+20 10 1234 5678",
  WHATSAPP_NUMBER: "201012345678", // WhatsApp direct format wa.me/20XXXXXXXXXX
  FORMSPREE_URL: "https://formspree.io/f/sample_voltedge", // Editable Formspree endpoint
  EMAIL: "contact@voltedge-fashion.eg",
  LOCATION_AR: "القاهرة الجديدة، مصر • شحن لجميع محافظات مصر",
  LOCATION_EN: "New Cairo, Egypt • Shipping to all Egyptian Governorates",
  WORKING_HOURS_AR: "يومياً من 10:00 صباحاً حتى 10:00 مساءً",
  WORKING_HOURS_EN: "Daily: 10:00 AM - 10:00 PM",
  CURRENCY_AR: "ج.م",
  CURRENCY_EN: "EGP",
  HERO_VIDEO: "./videos/hero-video.mp4",
  HERO_POSTER: "./images/hero-main.jpg",
  LOGO_IMG: "./images/logo-icon.png",
  DEFAULT_FALLBACK_IMAGE: "./images/hero-main.jpg",
  DEMO_NOTICE: {
    ar: "هذا موقع تجريبي (ديمو). المنتجات والصور والأسعار لأغراض العرض فقط، والموديلز مولّدة بالذكاء الاصطناعي.",
    en: "This is a demonstration preview. Products, imagery, and prices are for display purposes only. Models are AI-generated."
  }
};

// 2. Statistics (About Us page)
export const STORE_STATS = [
  { value: "6+", label_ar: "سنوات من التميز والأصالة", label_en: "Years of Refined Craft" },
  { value: "15,000+", label_ar: "عميل يثقون في ذوقنا", label_en: "Delighted Clients across Egypt" },
  { value: "100%", label_ar: "خامات طبيعية ومعاينة قبل الاستلام", label_en: "Natural Fabrics & Inspection on Delivery" },
  { value: "27", label_ar: "محافظة نصل إليها أينما كنت", label_en: "Governorates Covered with Fast Delivery" }
];

// 3. Store Core Features (Features Bar)
export const STORE_FEATURES = [
  {
    id: "fast-shipping",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>`,
    title_ar: "شحن سريع لكل المحافظات",
    title_en: "Fast Shipping across Egypt",
    desc_ar: "توصيل خلال 2 - 4 أيام عمل للقاهرة، الجيزة، والإسكندرية وجميع مدن مصر.",
    desc_en: "Delivery within 2-4 business days across Cairo, Giza, Alexandria & all cities."
  },
  {
    id: "try-before-pay",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>`,
    title_ar: "معاينة الطلب عند الاستلام",
    title_en: "Inspect Before Receiving",
    desc_ar: "افتح شحنتك وعاين الخامة والمقاس بحرية تامة مع مندوب التوصيل.",
    desc_en: "Inspect material and sizing at your doorstep with the courier."
  },
  {
    id: "natural-fabrics",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>`,
    title_ar: "خامات طبيعية فاخرة",
    title_en: "Premium Natural Materials",
    desc_ar: "كتان نقي، حرير طبيعي، وجلود مصرية مدبوغة يدوياً بأعلى مقاييس الجودة.",
    desc_en: "Pure breathable linen, natural silk, and hand-tanned genuine leather."
  },
  {
    id: "whatsapp-service",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`,
    title_ar: "خدمة فورية عبر واتساب",
    title_en: "Direct WhatsApp Assistance",
    desc_ar: "فريق استشاري لمساعدتك في اختيار المقاس المناسب ومتابعة شحنتك لحظة بلحظة.",
    desc_en: "Styling team ready to help you with sizes, fit advice, and immediate updates."
  }
];

// 4. Products Master Array
export const PRODUCTS = [
  {
    id: "linen-blazer",
    name_ar: "بليزر كتان صيفي فاخر",
    name_en: "Summer Luxury Linen Blazer",
    price: 2450,
    rating: 5.0,
    reviewCount: 48,
    category: "men",
    tags: ["featured", "exclusive", "bestseller"],
    hasSizes: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    desc_ar: "بليزر رجالي مصنوع من الكتان الطبيعي المصري النقي، بقَصّة إيطالية معاصرة تمنحك إطلالة راقية ومريحة في أيام الصيف والمناسبات الرسمية وشبه الرسمية. يتميز ببطانة داخلية خفيفة وقابلة للتنفس.",
    desc_en: "Tailored from pure Egyptian natural linen with an Italian unstructured cut. Breathable, lightweight lining designed for effortless elegance in summer and semi-formal events.",
    material_ar: "100% كتان طبيعي عالي النقاء • بطانة بولي-فسكوز خفيفة مسامية",
    material_en: "100% Pure Natural Linen • Lightweight breathable inner half-lining",
    colors: [
      {
        id: "beige",
        name_ar: "بيج طبيعي",
        name_en: "Natural Beige",
        hex: "#D8C3A5",
        image: "./images/product-linen-blazer.jpg"
      },
      {
        id: "navy",
        name_ar: "كحلي كلاسيكي",
        name_en: "Classic Navy",
        hex: "#1F2A44",
        image: "./images/product-linen-blazer-navy.jpg"
      },
      {
        id: "olive",
        name_ar: "زيتي ترابي",
        name_en: "Earthy Olive",
        hex: "#6B6B3A",
        image: "./images/product-linen-blazer-olive.jpg"
      }
    ]
  },
  {
    id: "silk-dress",
    name_ar: "فستان حرير انسيابي راقٍ",
    name_en: "Flowing Pure Silk Dress",
    price: 3950,
    rating: 4.9,
    reviewCount: 62,
    category: "women",
    tags: ["featured", "exclusive", "bestseller"],
    hasSizes: true,
    sizes: ["S", "M", "L", "XL"],
    desc_ar: "فستان مصمم من الحرير الطبيعي الناعم بلمسة أنثوية انسيابية تنبض بالفخامة. حزام خصر رقيق يبرز القوام مع ثنيات ناعمة تضفي بريقاً هادئاً في السهرات والمناسبات الخاصة.",
    desc_en: "Crafted from lustrous natural silk with an ethereal drape. Includes a delicate self-tie belt and subtle pleating that captures light with captivating understated beauty.",
    material_ar: "حرير طبيعي 100% بنعومة فائقة ولمعان حريري خافت",
    material_en: "100% Pure Natural Silk with a supple soft-sheen finish",
    colors: [
      {
        id: "ivory",
        name_ar: "عاجي كريمي",
        name_en: "Creamy Ivory",
        hex: "#F1E8D6",
        image: "./images/product-silk-dress.jpg"
      },
      {
        id: "rose",
        name_ar: "وردي هادئ",
        name_en: "Dusty Rose",
        hex: "#D9A5A0",
        image: "./images/product-silk-dress-rose.jpg"
      },
      {
        id: "emerald",
        name_ar: "أخضر زمردي",
        name_en: "Emerald Green",
        hex: "#0F6B4F",
        image: "./images/product-silk-dress-emerald.jpg"
      }
    ]
  },
  {
    id: "leather-sandal",
    name_ar: "صندل جلدي كلاسيكي مريح",
    name_en: "Artisan Leather Strappy Sandal",
    price: 1350,
    rating: 5.0,
    reviewCount: 39,
    category: "accessories",
    tags: ["featured", "women", "accessories"],
    hasSizes: true,
    sizes: ["37", "38", "39", "40", "41"],
    desc_ar: "صندل يدوي الصنع من الجلد الطبيعي المدبوغ نباتياً بنعل داخلي مبطن لراحة فائقة أثناء المشي طوال اليوم. تصميم بسيط يتناغم مع الإطلالات الصيفية والشاطئية واليومية.",
    desc_en: "Handcrafted from vegetable-tanned genuine leather with cushioned footbed for all-day comfort. Clean minimal silhouette pairs effortlessly with dresses and linen trousers.",
    material_ar: "جلد طبيعي بقري مدبوغ نباتياً • نعل خفيف مقاوم للانزلاق",
    material_en: "Vegetable-tanned genuine leather • Non-slip lightweight sole",
    colors: [
      {
        id: "tan",
        name_ar: "عسلي طبيعي",
        name_en: "Natural Tan",
        hex: "#A47148",
        image: "./images/product-leather-sandal.jpg"
      }
    ]
  },
  {
    id: "sunglasses",
    name_ar: "نظارة شمسية بإطار هندسي معاصر",
    name_en: "Geometric Contemporary Sunglasses",
    price: 950,
    rating: 4.7,
    reviewCount: 31,
    category: "accessories",
    tags: ["featured", "accessories"],
    hasSizes: false,
    sizes: [],
    desc_ar: "نظارة شمسية عصرية بعدسات مستقطبة تحمي 100% من الأشعة فوق البنفسجية UV400. إطار خفيف الوزن من الأسيتات المعالج مع لمسات نحاسية مطفية تضفي تميزاً فورياً.",
    desc_en: "Contemporary silhouette featuring polarized UV400 protective lenses. Ultra-lightweight handcrafted acetate frame with muted bronze hinges and refined detailing.",
    material_ar: "أسيتات عالي الجودة • عدسات UV400 مستقطبة مقاومة للخدش",
    material_en: "Handmade cellulose acetate • Scratch-resistant UV400 polarized lenses",
    colors: [
      {
        id: "tortoise",
        name_ar: "بني عسلي مدرج",
        name_en: "Amber Gradient",
        hex: "#5C3A21",
        image: "./images/product-sunglasses.jpg"
      }
    ]
  },
  {
    id: "leather-bag",
    name_ar: "شنطة يد جلدية فاخرة",
    name_en: "Structured Luxury Leather Tote",
    price: 2900,
    rating: 4.8,
    reviewCount: 54,
    category: "women",
    tags: ["exclusive", "women", "accessories"],
    hasSizes: false,
    sizes: [],
    desc_ar: "حقيبة يد كلاسيكية بتصميم هندسي متماسك من الجلد الطبيعي المحبب. تتضمن حزام كتف قابل للفصل ومقصورة داخلية منظمة تسع أجهزتك ومقتنياتك اليومية بأناقة بالغة.",
    desc_en: "Structured everyday tote sculpted from supple pebbled full-grain leather. Features detachable shoulder strap and organized interior compartments with brass hardware.",
    material_ar: "جلد طبيعي محبب فاخر 100% • إكسسوارات نحاسية معالجة ضد الأكسدة",
    material_en: "100% Full-grain pebbled leather • Anti-tarnish brushed brass hardware",
    colors: [
      {
        id: "cognac",
        name_ar: "هافان دافئ",
        name_en: "Warm Cognac",
        hex: "#8B4E2B",
        image: "./images/product-leather-bag.jpg"
      }
    ]
  },
  {
    id: "loafers",
    name_ar: "حذاء لوفر جلدي إيطالي الطراز",
    name_en: "Classic Italian-Style Leather Loafers",
    price: 1850,
    rating: 4.8,
    reviewCount: 42,
    category: "men",
    tags: ["men"],
    hasSizes: true,
    sizes: ["40", "41", "42", "43", "44", "45"],
    desc_ar: "حذاء لوفر بدون رباط من الجلد الطبيعي المصقول بنعل مرن يوفر أعلى درجات الراحة اليومية. مثالي مع البناطيل الكتان والجينز لإطلالة صيفية ذكية وغير متكلفة.",
    desc_en: "Hand-stitched leather penny loafers built for sophisticated all-day mobility. Flexible cushioned insole that pairs seamlessly with linen trousers and relaxed tailoring.",
    material_ar: "جلد طبيعي ناعم مصقول يدوياً • نعل داخلي رغوي لامتصاص الصدمات",
    material_en: "Hand-burnished genuine leather • Shock-absorbing memory foam footbed",
    colors: [
      {
        id: "brown",
        name_ar: "بني محروق",
        name_en: "Rich Dark Brown",
        hex: "#42281A",
        image: "./images/product-loafers.jpg"
      }
    ]
  },
  {
    id: "watch",
    name_ar: "ساعة كلاسيكية بحزام جلدي فاخر",
    name_en: "Heritage Minimalist Leather Watch",
    price: 3200,
    rating: 4.9,
    reviewCount: 37,
    category: "accessories",
    tags: ["men", "accessories", "exclusive"],
    hasSizes: false,
    sizes: [],
    desc_ar: "ساعة يد كلاسيكية بمينا عاجي نقي وعقارب برونزية دقيقة مع حزام من الجلد الطبيعي الفاخر. ماكينة كوارتز يابانية فائقة الدقة ومقاومة لرذاذ الماء.",
    desc_en: "Heritage dress watch featuring a clean ivory dial with refined bronze hands and genuine calfskin strap. Powered by ultra-precise quartz movement with 5ATM water resistance.",
    material_ar: "فولاذ مقاوم للصدأ 316L • زجاج ياقوتي مضاد للخدش • حزام جلد طبيعي",
    material_en: "316L Stainless steel casing • Scratch-resistant sapphire crystal • Calfskin strap",
    colors: [
      {
        id: "bronze-brown",
        name_ar: "برونزي مع حزام بني",
        name_en: "Bronze & Brown Strap",
        hex: "#784B27",
        image: "./images/product-watch.jpg"
      }
    ]
  }
];

// 5. Category Meta
export const CATEGORIES = {
  men: {
    id: "men",
    name_ar: "المجموعة الرجالية",
    name_en: "Men's Collection",
    subtitle_ar: "قصات عصرية بخامات الكتان والجلد الطبيعي لأناقة متكاملة",
    subtitle_en: "Contemporary tailoring, natural linen & leather for refined masculinity",
    image: "./images/cat-men.jpg",
    link: "./men.html",
    productIds: ["linen-blazer", "loafers", "watch"]
  },
  women: {
    id: "women",
    name_ar: "المجموعة النسائية",
    name_en: "Women's Collection",
    subtitle_ar: "فساتين حريرية وحقائب جلدية صُممت لتبرز رقيك في كل لحظة",
    subtitle_en: "Flowing silks and artisan leather crafted to elevate every moment",
    image: "./images/cat-women.jpg",
    link: "./women.html",
    productIds: ["silk-dress", "leather-bag", "leather-sandal"]
  },
  accessories: {
    id: "accessories",
    name_ar: "عالم الإكسسوارات",
    name_en: "Accessories & Leather Goods",
    subtitle_ar: "تفاصيل متقنة تكتمل بها إطلالتك: نظارات، ساعات، وحقائب جلدية",
    subtitle_en: "The crowning accents: artisanal watches, eyewear & handcrafted leather",
    image: "./images/cat-accessories.jpg",
    link: "./accessories.html",
    productIds: ["sunglasses", "watch", "leather-bag", "leather-sandal"]
  },
  exclusive: {
    id: "exclusive",
    name_ar: "المجموعة الحصرية",
    name_en: "Exclusive Capsule",
    subtitle_ar: "إصدارات محدودة مختارة بعناية لأصحاب الذوق الاستثنائي",
    subtitle_en: "Limited edition creations selected for discerning connoisseurs",
    image: "./images/exclusive-collection.jpg",
    link: "./exclusive.html",
    productIds: ["silk-dress", "linen-blazer", "leather-bag", "watch"]
  }
};

// 6. Testimonials from Egyptian Customers
export const TESTIMONIALS = [
  {
    name_ar: "ياسمين الشريف",
    name_en: "Yasmine El Sherif",
    city_ar: "الشيخ زايد، الجيزة",
    city_en: "Sheikh Zayed, Giza",
    rating: 5,
    comment_ar: "الفستان الحرير العاجي فاق كل توقعاتي! خامته ناعمة جداً ولونه راقي للغاية. طلبت المقاس عبر واتساب وساعدوني باحترافية، وعاينت الفستان مع المندوب قبل الاستلام.",
    comment_en: "The ivory silk dress exceeded all expectations! The fabric is buttery soft and the drape is stunning. The WhatsApp sizing consultation was so helpful."
  },
  {
    name_ar: "م. كريم عبد الرحمن",
    name_en: "Eng. Karim Abdelrahman",
    city_ar: "مصر الجديدة، القاهرة",
    city_en: "Heliopolis, Cairo",
    rating: 5,
    comment_ar: "البليزر الكتان خفيف جداً ومريح في حر الصيف. قَصته ممتازة كأنه مفصل مخصوص. طلبت لون بيج وبعد ما عاينته قررت أطلب الكحلي كمان. خدمة ممتازة وسريعة.",
    comment_en: "The linen blazer is remarkably breathable and comfortable. Tailoring looks bespoke. After inspecting the beige one, I immediately ordered the navy as well."
  },
  {
    name_ar: "سارة مصطفى",
    name_en: "Sara Moustafa",
    city_ar: "سموحة، الإسكندرية",
    city_en: "Smouha, Alexandria",
    rating: 5,
    comment_ar: "الشنطة الجلد والصندل وصلوا خلال 3 أيام لإسكندرية. ريحة الجلد الطبيعي ونظافة التشطيب تثبت إن فولت إدج علامة مصرية بمستوى عالمي حقيقي.",
    comment_en: "The leather tote and sandals arrived in Alexandria within 3 days. Genuine leather smell and finish quality prove VoltEdge is truly world-class."
  },
  {
    name_ar: "د. طارق السعدني",
    name_en: "Dr. Tarek El Saadany",
    city_ar: "المعادي، القاهرة",
    city_en: "Maadi, Cairo",
    rating: 5,
    comment_ar: "الساعة كلاسيكية وهادية جداً بدون أي بهرجة زيادة. شكر خاص لمندوب التوصيل المحترم اللي انتظر لما عاينت كل حاجة. تجربة تسوق راقية بكل المقاييس.",
    comment_en: "The watch is exceptionally understated and elegant. Special thanks to the courier who waited patiently while I inspected. A top-tier experience."
  }
];

// 7. I18N Dictionary
export const I18N = {
  ar: {
    // Top bar
    top_bar_phone: "خدمة العملاء: ",
    top_bar_shipping: "شحن سريع لجميع محافظات مصر • معاينة عند الاستلام",
    
    // Navigation
    nav_home: "الرئيسية",
    nav_men: "رجال",
    nav_women: "نساء",
    nav_accessories: "إكسسوارات",
    nav_exclusive: "المجموعة الحصرية",
    nav_about: "من نحن",
    nav_contact: "تواصل معنا",
    nav_lang_toggle: "EN",
    nav_lang_toggle_aria: "Switch to English",
    nav_menu_toggle_aria: "فتح القائمة الرئيسية",
    
    // Hero
    hero_title: "أناقة مشرقة: اكتشف مجموعة الصيف",
    hero_subtitle: "تألق بأناقة مع VoltEdge",
    hero_btn: "تسوق الآن",
    
    // Section Headers
    featured_title: "قطع مختارة مميزة",
    featured_subtitle: "إبداعات حصرية تجسد الفخامة الهادئة والراحة المطلقة",
    categories_title: "استكشف تشكيلاتنا",
    categories_subtitle: "تصاميم مصممة بعناية لتناسب كل الأوقات والمناسبات",
    exclusive_banner_title: "المجموعة الحصرية الصيفية",
    exclusive_banner_desc: "قطع محدودة مصنوعة يدوياً من أنقى الخامات الطبيعية لتعكس شخصيتك المتفردة.",
    exclusive_btn: "اكتشف المجموعة الحصرية",
    testimonials_title: "آراء عملائنا في مصر",
    testimonials_subtitle: "ثقة نعتز بها من عملائنا في مختلف المحافظات",
    cta_title: "هل تحتاج مساعدة في اختيار المقاس أو التنسيق؟",
    cta_desc: "فريق مستشاري الأزياء لدينا جاهز للرد على استفساراتك وتجهيز طلبك مباشرة على واتساب.",
    cta_btn: "تحدث مع مستشار الأزياء عبر واتساب",
    
    // Product Cards & Badges
    order_via_whatsapp: "اطلب عبر واتساب",
    view_details: "تفاصيل القطعة",
    reviews_count: "تقييم",
    color_label: "اللون:",
    size_label: "المقاس:",
    material_label: "الخامة:",
    exclusive_badge: "حصري",
    bestseller_badge: "الأكثر طلباً",
    price_egp: "ج.م",
    
    // Filters & Sorting
    filter_all: "جميع القطع",
    sort_label: "ترتيب حسب:",
    sort_default: "المقترح افتراضياً",
    sort_price_low: "السعر: من الأقل للأعلى",
    sort_price_high: "السعر: من الأعلى للأقل",
    sort_rating: "الأعلى تقييماً",
    items_count: "منتجات",
    
    // Product Details Page
    back_to_shop: "← العودة للمتجر",
    select_size: "اختر مقاسك:",
    size_guide: "دليل المقاسات",
    in_stock_eg: "متوفر للشحن الفوري لجميع المحافظات",
    inspection_guarantee: "معاينة مجانية عند الاستلام قبل السداد",
    similar_products: "منتجات قد تنال إعجابك",
    product_features_title: "مميزات القطعة وتفاصيل الصناعة",
    cash_on_delivery: "الدفع عند الاستلام متاح نقداً للمندوب",
    
    // About Page
    about_title: "قصة فولت إدج (VoltEdge)",
    about_subtitle: "شغف مصري بالأناقة المعاصرة والخامات الطبيعية النقية",
    about_story_p1: "انطلقت علامة 'فولت إدج' من قلب القاهرة برؤية واضحة: تقديم أزياء وإكسسوارات فاخرة تنافس أرقى بيوت الموضة العالمية، مع الحفاظ على روح الهوية المصرية وجودة أقمشتها وتراثها الحرفي.",
    about_story_p2: "نؤمن بالفخامة الهادئة (Quiet Luxury) — التصاميم التي لا تحتاج لصخب لتلفت الأنظار، بل تتحدث عن نفسها من خلال نقاء الكتان الطبيعي، وانسيابية الحرير الخالص، ومتانة الجلود المدبوغة بعناية.",
    about_story_p3: "لكي نمنح عميلنا أقصى درجات الراحة والثقة، جعلنا تجربة الطلب سلسة ومباشرة عبر محادثة ودودة على واتساب، مع ضمان المعاينة الكاملة للقطعة عند وصول المندوب لباب منزلك قبل السداد.",
    about_values_title: "قيمنا الأساسية",
    value1_title: "أصالة الخامات",
    value1_desc: "نرفض الألياف الصناعية الرخيصة؛ كل خامة نستخدمها طبيعية، مريحة، وصديقة للجلد.",
    value2_title: "تفصيل متقن",
    value2_desc: "اهتمام بالغ بكل غرزة، وقصات مدروسة تمنحك الثقة في كل خطوة.",
    value3_title: "ثقة متبادلة",
    value3_desc: "لا نطلب منك دفعاً مسبقاً؛ شحنتك تصل لباب بيتك لتعاينها بنفسك.",
    
    // Contact Page
    contact_title: "تواصل مع فريق فولت إدج",
    contact_subtitle: "يسعدنا دائماً استقبال استفساراتكم وملاحظاتكم",
    contact_form_title: "أرسل لنا رسالة",
    contact_name: "الاسم بالكامل",
    contact_name_placeholder: "مثال: أحمد محمود",
    contact_phone: "رقم الموبايل / واتساب",
    contact_phone_placeholder: "010XXXXXXXX",
    contact_city: "المحافظة",
    contact_city_placeholder: "القاهرة، الجيزة، الإسكندرية...",
    contact_message: "نص الرسالة أو الاستفسار",
    contact_message_placeholder: "اكتب رسالتك أو استفسارك بخصوص المنتجات والمقاسات...",
    contact_submit: "إرسال الرسالة",
    contact_sending: "جاري الإرسال...",
    contact_success: "شكراً لتواصلك معنا! سنرد عليك في أقرب وقت عبر واتساب أو الهاتف.",
    contact_error: "حدث خطأ أثناء الإرسال، يمكنك التواصل معنا مباشرة عبر واتساب.",
    contact_direct_title: "طرق التواصل المباشر",
    contact_wa_btn: "تواصل فوري عبر واتساب",
    contact_wa_desc: "أسرع وسيلة للحصول على رد فوري ومتابعة المقاسات والشحنات.",
    store_location_label: "الموقع ومناطق الخدمة:",
    working_hours_label: "ساعات العمل الرسمية:",
    
    // Footer
    footer_about: "متجر مصري رائد يقدم تصاميم أزياء وإكسسوارات راقية للرجال والنساء، بالاعتماد على أنقى خامات الكتان والحرير والجلد الطبيعي.",
    footer_quick_links: "روابط سريعة",
    footer_collections: "التشكيلات",
    footer_service: "خدمة العملاء",
    footer_payment_notice: "الدفع متاح نقداً عند الاستلام لجميع محافظات مصر بعد معاينة الشحنة.",
    footer_copyright: "جميع الحقوق محفوظة © متجر فولت إدج (VoltEdge)",
    
    // WhatsApp default pre-filled text
    wa_msg_template: "مرحباً متجر VoltEdge، أود الاستفسار وطلب قطعة: {productName} - اللون: {color} - المقاس: {size} - السعر: {price} ج.م. هل هي متوفرة للشحن؟",
    wa_msg_general: "مرحباً متجر VoltEdge، أود الاستفسار عن التشكيلة الصيفية والمقاسات المتاحة للشحن."
  },
  
  en: {
    // Top bar
    top_bar_phone: "Client Care: ",
    top_bar_shipping: "Fast shipping to all Egyptian Governorates • Inspection on delivery",
    
    // Navigation
    nav_home: "Home",
    nav_men: "Men",
    nav_women: "Women",
    nav_accessories: "Accessories",
    nav_exclusive: "Exclusive",
    nav_about: "About Us",
    nav_contact: "Contact",
    nav_lang_toggle: "عربي",
    nav_lang_toggle_aria: "التبديل إلى اللغة العربية",
    nav_menu_toggle_aria: "Toggle navigation menu",
    
    // Hero
    hero_title: "Radiant Elegance: Discover the Summer Collection",
    hero_subtitle: "Shine with VoltEdge",
    hero_btn: "Shop Now",
    
    // Section Headers
    featured_title: "Featured Creations",
    featured_subtitle: "Exclusive pieces reflecting quiet luxury and breathable ease",
    categories_title: "Explore Collections",
    categories_subtitle: "Thoughtfully curated tailoring designed for enduring distinction",
    exclusive_banner_title: "Summer Exclusive Capsule",
    exclusive_banner_desc: "Limited-edition artisan garments sculpted from pure natural textiles.",
    exclusive_btn: "Discover Exclusive Line",
    testimonials_title: "What Our Clients Say",
    testimonials_subtitle: "Heartfelt feedback from esteemed clients across Egypt",
    cta_title: "Need Assistance with Sizing or Styling?",
    cta_desc: "Our styling advisors are at your service for personal advice and quick ordering via WhatsApp.",
    cta_btn: "Chat with a Stylist on WhatsApp",
    
    // Product Cards & Badges
    order_via_whatsapp: "Order via WhatsApp",
    view_details: "View Details",
    reviews_count: "reviews",
    color_label: "Color:",
    size_label: "Size:",
    material_label: "Material:",
    exclusive_badge: "Exclusive",
    bestseller_badge: "Bestseller",
    price_egp: "EGP",
    
    // Filters & Sorting
    filter_all: "All Items",
    sort_label: "Sort by:",
    sort_default: "Featured",
    sort_price_low: "Price: Low to High",
    sort_price_high: "Price: High to Low",
    sort_rating: "Top Rated",
    items_count: "items",
    
    // Product Details Page
    back_to_shop: "← Back to Collection",
    select_size: "Select Size:",
    size_guide: "Size Guide",
    in_stock_eg: "In stock for express delivery across Egypt",
    inspection_guarantee: "Complimentary inspection before payment with the courier",
    similar_products: "You May Also Admire",
    product_features_title: "Craftsmanship & Specifications",
    cash_on_delivery: "Cash on delivery available upon arrival",
    
    // About Page
    about_title: "The VoltEdge Heritage",
    about_subtitle: "Egyptian passion for understated elegance & noble natural fibers",
    about_story_p1: "VoltEdge was founded in Cairo with a clear purpose: to craft sophisticated ready-to-wear garments and accessories that stand shoulder-to-shoulder with international luxury maisons, honoring local artisanal mastery.",
    about_story_p2: "We embrace quiet luxury — aesthetics that need no clamor, speaking through the breathable purity of natural Egyptian linen, the effortless drape of pure silk, and the rich patina of hand-finished leather.",
    about_story_p3: "To provide our clients complete serenity and trust, orders are handled through conversational WhatsApp care, backed by the freedom to inspect every piece upon arrival before payment.",
    about_values_title: "Our Guiding Values",
    value1_title: "Noble Textiles",
    value1_desc: "No synthetic shortcuts. Every fiber is natural, comfortable, and kind to the skin.",
    value2_title: "Tailored Finesse",
    value2_desc: "Rigorous attention to every stitch and proportion designed to empower your posture.",
    value3_title: "Earned Trust",
    value3_desc: "No mandatory upfront fees. Your package arrives for personal doorstep inspection.",
    
    // Contact Page
    contact_title: "Connect with VoltEdge",
    contact_subtitle: "We welcome your inquiries, custom requests, and feedback",
    contact_form_title: "Send Us a Note",
    contact_name: "Full Name",
    contact_name_placeholder: "e.g., Ahmed Mahmoud",
    contact_phone: "Mobile / WhatsApp",
    contact_phone_placeholder: "010XXXXXXXX",
    contact_city: "Governorate / City",
    contact_city_placeholder: "Cairo, Giza, Alexandria...",
    contact_message: "Your Message or Inquiry",
    contact_message_placeholder: "Share your sizing questions or specific requests...",
    contact_submit: "Submit Inquiry",
    contact_sending: "Sending...",
    contact_success: "Thank you for reaching out! Our team will respond promptly via WhatsApp or phone.",
    contact_error: "An error occurred while sending. Please contact us directly on WhatsApp.",
    contact_direct_title: "Direct Client Assistance",
    contact_wa_btn: "Instant WhatsApp Chat",
    contact_wa_desc: "Fastest way to get immediate sizing advice and order tracking.",
    store_location_label: "Showroom & Coverage:",
    working_hours_label: "Hours of Service:",
    
    // Footer
    footer_about: "Premier Egyptian fashion house offering elevated menswear, womenswear, and leathercraft anchored in pure linen, lustrous silk, and authentic leather.",
    footer_quick_links: "Quick Navigation",
    footer_collections: "Collections",
    footer_service: "Client Care",
    footer_payment_notice: "Cash on delivery available across all Egyptian Governorates upon personal package inspection.",
    footer_copyright: "All rights reserved © VoltEdge Fashion Store",
    
    // WhatsApp default pre-filled text
    wa_msg_template: "Hello VoltEdge, I would like to order: {productName} - Color: {color} - Size: {size} - Price: {price} EGP. Is it available for shipping?",
    wa_msg_general: "Hello VoltEdge, I would like to inquire about the summer collection and available sizes."
  }
};
