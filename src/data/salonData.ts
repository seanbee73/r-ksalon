import {
  BrandInfo,
  AnnouncementInfo,
  HeroInfo,
  HeritageInfo,
  ServicesInfo,
  FeaturedQuote,
  CraftsmenInfo,
  LookbookInfo,
  ReviewsInfo,
  HoursAndLocationInfo,
  FooterInfo,
  SalonPost,
} from '../types';

export const BRAND_DATA: BrandInfo = {
  name: "R&K Salon North York",
  shortName: "R&K Salon",
  tag: "Hair Salon & Styling · North York",
  logoInitials: "RK",
  phone: "(416) 229-1818",
  phoneTel: "tel:4162291818",
  address: "1 Holmes Ave",
  plazaLocation: "1 Holmes Ave, North York, ON M2N 5S1 (Yonge &Finch Area)",
  postalCity: "North York, ON M2N 5S1",
  plusCode: "QHHP+45 North York, Ontario",
  mapsUrl: "https://maps.app.goo.gl/hdXFY8pog2nbQJpN9",
  appointmentNote: "Appointments recommended. Walk-ins accommodated when available."
};

export const ANNOUNCEMENT_DATA: AnnouncementInfo = {
  show: true,
  badge: "Top 1 Salon in North York",
  text: "“Great atmosphere, very nice staff and service. Enjoy relaxing massage chairs during wash treatments & complimentary tea!”",
  subtext: "Conveniently located at 1 Holmes Ave (Yonge & Finch area) · Open daily 12 PM – 9 PM."
};

export const HERO_DATA: HeroInfo = {
  badge: "1 Holmes Ave · North York, ON M2N 5S1",
  headlinePrefix: "Exceptional Craft.",
  headlineAccent: "Personalized Beauty.",
  description: "Premier hair styling, vibrant color transformations, and precision cuts led by Kulio, Stanley, Tyler, and our expert team in the heart of North York.",
  heroImage: "https://ik.imagekit.io/kevfun/AHRPTWngopjMitS-dDt7sgetiILkEJU-HjGBN5-YmuNgQugz0Yb5PWxxRcYhXl1yKRsqfsow6m2cY-TwfCclRVkVCO5xJo1EeAhzfufrkTQ7SrilqT1vxip-fRSHfEvPUk6vI_njb3Jgrww2208-h1475-k-no.jpg?updatedAt=1788221083886?w=1600&q=80",
  ratingScore: "4.3",
  reviewCountText: "(132 Google Reviews)",
  stat1Number: "4.3 ★",
  stat1Label: "Google Rating",
  stat2Number: "132",
  stat2Label: "Client Reviews",
  stat3Number: "12-9 PM",
  stat3Label: "Open Daily"
};

export const HERITAGE_DATA: HeritageInfo = {
  tag: "The Sanctuary",
  title: "Luxurious Comfort. Masterful Styling.",
  paragraph1: "R&K Salon North York is renowned for its elegant European decor, relaxing massage shampoo chairs, and attentive stylists who take the time to listen and tailor every cut, color, and blowout to your personal style.",
  quote: "“Stanley listens and will try his best to give you whatever style you’d like. The hair washing area with massage chairs is wonderful!”",
  quoteAuthor: "Andy Liu, Local Guide & Verified Google Review",
  pillars: [
    {
      id: "p1",
      title: "Massage Chair Hair Washes",
      description: "Enjoy luxurious, therapeutic massage chairs while our team provides invigorating scalp washes and conditioning treatments.",
      iconName: "smile"
    },
    {
      id: "p2",
      title: "Master Styling & Color",
      description: "Expert color blending, balayage, vibrant fashion tones, precision cuts, and flawless styling by Kulio, Stanley, and Tyler.",
      iconName: "scissors"
    },
    {
      id: "p3",
      title: "Attentive Consultations",
      description: "We listen carefully to your goals, check in throughout the process, and ensure your vision comes to life with precision.",
      iconName: "userCheck"
    },
    {
      id: "p4",
      title: "Yonge & Finch Location",
      description: "Conveniently situated at 1 Holmes Ave with easy access via TTC Line 1 subway and surrounding parking options.",
      iconName: "clock"
    }
  ]
};

export const SERVICES_DATA: ServicesInfo = {
  tag: "Menu & Offerings",
  title: "Hair Salon & Styling Services",
  subtitle: "Professional Care & Vibrant Transformations",
  priceSubtitle: "Professional Care & Vibrant Transformations",
  signatureServices: [
    {
      id: "s1",
      title: "Precision Haircut & Styling",
      subtitle: "Tailored cuts by Kulio, Stanley & Tyler",
      price: "From $36",
      badge: "Signature Cut",
      image: "https://ik.imagekit.io/kevfun/78592380_164368194958162_8266163906934734848_n.jpg?w=800&q=80",
      description: "Personalized haircut including relaxing shampoo wash on therapeutic massage chairs, custom consultation, and styling.",
      features: [
        "Therapeutic massage chair hair wash",
        "Head shape and texture consultation",
        "Expert blowout and finish"
      ]
    },
    {
      id: "s2",
      title: "Custom Color, Balayage & Highlights",
      subtitle: "Vibrant dimensional tones & root retouch",
      price: "From $120",
      badge: "Color Specialist",
      image: "https://ik.imagekit.io/kevfun/76893623_163349518393363_2864590225466720256_n.jpg?w=800&q=80",
      description: "Full spectrum coloring, balayage, highlights, and vivid fashion shades crafted with premium professional products.",
      features: [
        "Custom shade formulation",
        "Glossing & toning treatment",
        "Moisture retention finishing"
      ]
    },
    {
      id: "s3",
      title: "Signature Blowout & Treatment",
      subtitle: "Deep conditioning & glossy volume",
      price: "From $45",
      badge: "Care & Polish",
      image: "https://ik.imagekit.io/kevfun/AHRPTWnHVHh_63TyXf0fedEkCAPFDnbI5HddwMFJiFoYIffEz6ITCK01cFlpxF15lqoATeSuvzLyQvacSst4K0VGhAX8O6Hkr5lREyS16p35cgvxKXcqB7QZUY1fcI-4Ihnz9_sOrYD3w1247-h1356-k-no.jpg?updatedAt=1788221084068?w=800&q=80",
      description: "Revitalizing deep conditioning mask paired with a smoothing blowout and scalp massage.",
      features: [
        "Deep repair conditioning",
        "Scalp massage wash",
        "Gloss finish styling"
      ]
    }
  ],
  additionalServices: [
    {
      id: "as1",
      title: "Root Touch-Up & Toner",
      name: "Root Touch-Up & Toner",
      price: "$85+",
      description: "Seamless root blending and glossy toner refresh."
    },
    {
      id: "as2",
      title: "Scalp Massage & Conditioning Wash",
      name: "Scalp Massage & Conditioning Wash",
      price: "$30",
      description: "Relaxing massage chair treatment with organic botanical conditioning."
    },
    {
      id: "as3",
      title: "Special Occasion Styling",
      name: "Special Occasion Styling",
      price: "$90+",
      description: "Updos, event blowouts, and intricate styling for weddings and parties."
    }
  ]
};

export const FEATURED_QUOTE: FeaturedQuote = {
  quote: "“Stanley is very experienced and he listened to my instructions attentively, with checks and confirmations along the way. Overall satisfied and wonderful decor!”",
  author: "Andy Liu",
  badge: "Local Guide · Google Review"
};

const CRAFTSMEN_LIST = [
  {
    id: "st1",
    name: "Kulio",
    role: "Master Stylist & Director",
    subtitle: "Master of Craft & Color Blends",
    experienceBadge: "Master Stylist",
    image: "https://ik.imagekit.io/kevfun/74177064_149896483072000_6381854002040012800_n.jpg?updatedAt=1788224335247",
    quote: "Every client deserves a tailored style that matches their lifestyle, face shape, and personal confidence.",
    bio: "Kulio leads the R&K Salon team with exceptional expertise in precision cutting, dimensional coloring, and creating an exceptionally welcoming, relaxing environment for every guest.",
    highlights: [
      "Specialist in total hair transformations and color blending",
      "Celebrated for warm, attentive consultations and impeccable technique",
      "Passionate about healthy, vibrant hair finishes"
    ],
    specialties: [
      "Precision Cuts",
      "Dimensional Color",
      "Balayage",
      "Bridal & Event Styling",
      "Texture Control"
    ]
  },
  {
    id: "st2",
    name: "Stanley",
    role: "Senior Hair Stylist",
    subtitle: "Detail-Oriented Sculpting & Consultation",
    experienceBadge: "Senior Stylist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1000&q=80",
    quote: "I listen closely to what you want and check in throughout the cut to make sure everything is perfect.",
    bio: "Stanley is highly praised by clients across North York for his gentle patience, meticulous attention to detail, and ability to deliver exactly what clients envision.",
    highlights: [
      "Known for careful listening and step-by-step confirmation",
      "Expert in men's and women's modern cuts and styling",
      "Friendly and professional demeanor"
    ],
    specialties: [
      "Men's & Women's Cuts",
      "Consultative Styling",
      "Layered Textures",
      "Blowouts",
      "Refined Trims"
    ]
  },
  {
    id: "st3",
    name: "Tyler",
    role: "Stylist & Grooming Specialist",
    subtitle: "Clean Execution & Modern Styles",
    experienceBadge: "Stylist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&q=80",
    quote: "Clean execution and great customer care make every salon visit a highlight of your week.",
    bio: "Tyler brings fast, highly polished service with wonderful reviews for family cuts, clean fades, and effortless daily styles.",
    highlights: [
      "Excellent reviews for family and men's styling",
      "Efficient, friendly, and detail-driven",
      "Expert in modern youth and adult styles"
    ],
    specialties: [
      "Modern Cuts",
      "Family Grooming",
      "Fade Tapers",
      "Styling Finish"
    ]
  }
];

export const CRAFTSMEN_DATA: CraftsmenInfo = {
  tag: "Our Stylists",
  title: "Talented Artists Dedicated to Your Look",
  description: "Meet Kulio, Stanley, Tyler, and our expert stylists at R&K Salon. We combine technical precision with genuine hospitality to ensure you look and feel your absolute best.",
  stylists: CRAFTSMEN_LIST,
  craftsmen: CRAFTSMEN_LIST
};

export const LOOKBOOK_DATA: LookbookInfo = {
  tag: "Style Archive",
  title: "Recent Creations & Transformations",
  subtitle: "Hover to pause · Click to inspect",
  items: [
    {
      id: "look-1",
      title: "Vibrant Sunset Orange",
      tag: "Color Transformation",
      category: "Color Transformation",
      src: "https://ik.imagekit.io/kevfun/76893623_163349518393363_2864590225466720256_n.jpg?updatedAt=1788224335244?w=800&q=80",
      image: "https://ik.imagekit.io/kevfun/76893623_163349518393363_2864590225466720256_n.jpg?updatedAt=1788224335244?w=800&q=80",
      alt: "Vibrant orange hair color transformation",
      description: "Stunning vibrant copper orange tone with soft layered ends and glossy finish.",
      technique: "Custom lightening & semi-permanent gloss glaze",
      maintenance: "4-6 weeks",
      suitability: "Bold fashion statement & warm skin tones"
    },
    {
      id: "look-2",
      title: "Rich Burgundy Red",
      tag: "Color Specialist",
      category: "Color Specialist",
      src: "https://ik.imagekit.io/kevfun/AHRPTWnIwPDfxZ2nvTTP-3438rlGANVws60-nIIAXiA7pbV8cLnyfRfv1tgLpZlYId9zaOGK-DzTmbINvebyFxc9Y5ACQlKi1XDtPmtPcD1OfurB89B2238dVbHgvOtnATjI_l_VarNasQw3024-h4032-k-no.jpg?updatedAt=1788221084654?w=800&q=80",
      image: "https://ik.imagekit.io/kevfun/AHRPTWnIwPDfxZ2nvTTP-3438rlGANVws60-nIIAXiA7pbV8cLnyfRfv1tgLpZlYId9zaOGK-DzTmbINvebyFxc9Y5ACQlKi1XDtPmtPcD1OfurB89B2238dVbHgvOtnATjI_l_VarNasQw3024-h4032-k-no.jpg?updatedAt=1788221084654?w=800&q=80",
      alt: "Deep burgundy red long hair style",
      description: "Deep, lustrous burgundy red with mirror-like shine and cascading movement.",
      technique: "Root-to-tip dimensional color infusion",
      maintenance: "5-7 weeks",
      suitability: "All hair lengths seeking rich jewel tones"
    },
    {
      id: "look-3",
      title: "Platinum Silver Precision",
      tag: "Master Cut & Color",
      category: "Master Cut & Color",
      src: "https://ik.imagekit.io/kevfun/AHRPTWlyjzNwjEn9UJ01zvBtu-YBO_s_uIQ8CA-VGzXzQMMKk40SGadZ8m84YoQVle8qECVLZrHVipKr8KR4K4DWgclduH0mcpTjsBv1gFZUvBIZP3TWupflXCXS_Uh0HVdgbaYXzBxck8A8fA39w4284-h5712-k-no.jpg?updatedAt=1788221084094?w=800&q=80",
      image: "https://ik.imagekit.io/kevfun/AHRPTWlyjzNwjEn9UJ01zvBtu-YBO_s_uIQ8CA-VGzXzQMMKk40SGadZ8m84YoQVle8qECVLZrHVipKr8KR4K4DWgclduH0mcpTjsBv1gFZUvBIZP3TWupflXCXS_Uh0HVdgbaYXzBxck8A8fA39w4284-h5712-k-no.jpg?updatedAt=1788221084094?w=800&q=80",
      alt: "Platinum silver modern cut",
      description: "Sleek, icy platinum silver tailored crop with clean, sharp graduation.",
      technique: "Double-process lightening & precision shear scissor work",
      maintenance: "3-4 weeks",
      suitability: "Modern avant-garde styling"
    },
    {
      id: "look-4",
      title: "Ash Blonde Layered Wave",
      tag: "Signature Blowout",
      category: "Signature Blowout",
      src: "https://ik.imagekit.io/kevfun/571848597_18516771928064241_1445702385194798917_n.jpg?w=800&q=80",
      image: "https://ik.imagekit.io/kevfun/571848597_18516771928064241_1445702385194798917_n.jpg?w=800&q=80",
      alt: "Ash blonde layered wave styling",
      description: "Soft smoky ash blonde highlights with voluminous bouncy waves.",
      technique: "Balayage highlights & round-brush blowout",
      maintenance: "6-8 weeks",
      suitability: "Versatile everyday elegance"
    },
    {
      id: "look-5",
      title: "Ocean Blue Fantasy",
      tag: "Vivid Color",
      category: "Vivid Color",
      src: "https://ik.imagekit.io/kevfun/72716557_135468514514797_4499446746182582272_n.jpg?updatedAt=1788224335281?w=800&q=80",
      image: "https://ik.imagekit.io/kevfun/72716557_135468514514797_4499446746182582272_n.jpg?updatedAt=1788224335281?w=800&q=80",
      alt: "Ocean blue wave hair styling",
      description: "Vibrant multi-dimensional blue shades with soft textured curls.",
      technique: "Custom pre-lightening & vivid direct dye application",
      maintenance: "3-5 weeks",
      suitability: "Creative fashion expression"
    },
    {
      id: "look-6",
      title: "Salon Interior & Comfort",
      tag: "Atmosphere",
      category: "Atmosphere",
      src: "https://ik.imagekit.io/kevfun/AHRPTWlaQ3DE-hOeu08RvUDqEk6BaUx80KPNLIlCiE_DAdkw8dFej__FKDDBAEbCmnwv8ohrAPukpJUdbqtv-ucy0Kx5GqoA-y1Q1M6HthNIgKqwDwNoUeWlCXmVyX2Ot7vfbPNKjmSDCQw1486-h947-k-no.jpg?updatedAt=1788221084381?w=800&q=80",
      image: "https://ik.imagekit.io/kevfun/AHRPTWlaQ3DE-hOeu08RvUDqEk6BaUx80KPNLIlCiE_DAdkw8dFej__FKDDBAEbCmnwv8ohrAPukpJUdbqtv-ucy0Kx5GqoA-y1Q1M6HthNIgKqwDwNoUeWlCXmVyX2Ot7vfbPNKjmSDCQw1486-h947-k-no.jpg?updatedAt=1788221084381?w=800&q=80",
      alt: "R&K Salon luxurious interior",
      description: "Our elegant North York salon featuring gold-framed mirrors and massage shampoo chairs.",
      technique: "European luxury interior design",
      maintenance: "Always pristine",
      suitability: "Welcoming and relaxing client sanctuary"
    }
  ]
};

const REVIEWS_LIST = [
  {
    id: "rev-1",
    author: "Andy Liu",
    badge: "Local Guide · 19 reviews · 26 photos",
    reviewerBadge: "Local Guide · 19 reviews",
    rating: 5,
    timeAgo: "8 months ago",
    date: "8 months ago",
    category: "Friendly Staff",
    text: "Cozy shop in the Yonge and Finch area, very nice deco (especially the hair washing area and washroom), Stanley is very experienced and he listened to my instructions attentively, with checks and confirmations along the way, overall satisfied and would recommend this place to others!",
    content: "Cozy shop in the Yonge and Finch area, very nice deco (especially the hair washing area and washroom), Stanley is very experienced and he listened to my instructions attentively, with checks and confirmations along the way, overall satisfied and would recommend this place to others!",
    highlightTags: ["Friendly Staff", "Massage Chair", "Stanley"]
  },
  {
    id: "rev-2",
    author: "Grace Wang",
    badge: "4 reviews · 1 photo",
    reviewerBadge: "4 reviews",
    rating: 5,
    timeAgo: "2 weeks ago",
    date: "2 weeks ago",
    category: "Styling",
    text: "Great atmosphere, very nice staff and service. Beautiful cut and color styling in North York!",
    content: "Great atmosphere, very nice staff and service. Beautiful cut and color styling in North York!",
    highlightTags: ["Styling", "Great Atmosphere", "New"]
  },
  {
    id: "rev-3",
    author: "Ibby Chica",
    badge: "Local Guide · 33 reviews · 49 photos",
    reviewerBadge: "Local Guide · 33 reviews",
    rating: 5,
    timeAgo: "3 months ago",
    date: "3 months ago",
    category: "Atmosphere",
    text: "Randomly discovered this place on Google Maps because they were the only salon still open past 8 PM. I asked if they had room for a walk-in, and they accommodated me even without an appointment. Excellent service!",
    content: "Randomly discovered this place on Google Maps because they were the only salon still open past 8 PM. I asked if they had room for a walk-in, and they accommodated me even without an appointment. Excellent service!",
    highlightTags: ["Walk-ins", "Open Late", "Friendly Staff"]
  },
  {
    id: "rev-4",
    author: "Tonya Mann",
    badge: "Local Guide · 15 reviews · 4 photos",
    reviewerBadge: "Local Guide · 15 reviews",
    rating: 5,
    timeAgo: "a year ago",
    date: "1 year ago",
    category: "Haircut",
    text: "Shout out to Kulio for freshening up my hair and giving it volume, shape and the best hair colour blend! His scalp massage during my shampoo and conditioning was a highlight :)",
    content: "Shout out to Kulio for freshening up my hair and giving it volume, shape and the best hair colour blend! His scalp massage during my shampoo and conditioning was a highlight :)",
    highlightTags: ["Kulio", "Scalp Massage", "Color Blend"]
  },
  {
    id: "rev-5",
    author: "Jasmin Hristov",
    badge: "10 reviews",
    reviewerBadge: "10 reviews",
    rating: 5,
    timeAgo: "2 years ago",
    date: "2 years ago",
    category: "Haircut",
    text: "My two sons got their haircut here with Tyler. Quick and excellent service, clean place, and the haircuts were AMAZING! We haven't been this satisfied in a long time.",
    content: "My two sons got their haircut here with Tyler. Quick and excellent service, clean place, and the haircuts were AMAZING! We haven't been this satisfied in a long time.",
    highlightTags: ["Tyler", "Family Service", "Clean Place"]
  },
  {
    id: "rev-6",
    author: "George Liu",
    badge: "4 reviews · 6 photos",
    reviewerBadge: "4 reviews",
    rating: 5,
    timeAgo: "a year ago",
    date: "1 year ago",
    category: "Friendly Staff",
    text: "Awesome! Excellent service, they even gave us complimentary tea. 👌",
    content: "Awesome! Excellent service, they even gave us complimentary tea. 👌",
    highlightTags: ["Complimentary Tea", "Excellent Service"]
  },
  {
    id: "rev-7",
    author: "Diyi Yuan",
    badge: "7 reviews · 6 photos",
    reviewerBadge: "7 reviews",
    rating: 5,
    timeAgo: "a year ago",
    date: "1 year ago",
    category: "Atmosphere",
    text: "The service was excellent! I love their massage chairs, haha.",
    content: "The service was excellent! I love their massage chairs, haha.",
    highlightTags: ["Massage Chairs", "Atmosphere"]
  },
  {
    id: "rev-8",
    author: "Edith Lau",
    badge: "1 review",
    reviewerBadge: "Verified Client",
    rating: 5,
    timeAgo: "a year ago",
    date: "1 year ago",
    category: "Styling",
    text: "I want to extend a huge thank you to Kulio and his amazing team for the incredible hair styling! They went above and beyond to ensure everyone looked their best.",
    content: "I want to extend a huge thank you to Kulio and his amazing team for the incredible hair styling! They went above and beyond to ensure everyone looked their best.",
    highlightTags: ["Kulio", "Styling", "Outstanding Team"]
  }
];

export const REVIEWS_DATA: ReviewsInfo = {
  tag: "Client Reviews & Reputation",
  title: "4.3 Stars Across 132 Google Reviews",
  ratingScore: "4.3",
  score: "4.3",
  reviewCountText: "132 Reviews",
  reviewCount: "132 Reviews",
  badges: [
    "Massage Chair Wash Stations",
    "Complimentary Tea",
    "Open Daily until 9 PM"
  ],
  categories: [
    "All",
    "Friendly Staff",
    "Styling",
    "Atmosphere",
    "Haircut"
  ],
  items: REVIEWS_LIST,
  reviews: REVIEWS_LIST,
  featuredQuote: "“Cozy shop in the Yonge and Finch area, very nice deco (especially the hair washing area and washroom), Stanley is very experienced and he listened attentively!”",
  featuredAuthor: "Andy Liu",
  featuredBadge: "Local Guide · Google Review"
};

const SCHEDULE_LIST = [
  {
    day: "Monday",
    hours: "12:00 PM – 9:00 PM",
    closed: false,
    isClosed: false
  },
  {
    day: "Tuesday",
    hours: "12:00 PM – 9:00 PM",
    closed: false,
    isClosed: false
  },
  {
    day: "Wednesday",
    hours: "Closed",
    closed: true,
    isClosed: true
  },
  {
    day: "Thursday",
    hours: "12:00 PM – 9:00 PM",
    closed: false,
    isClosed: false
  },
  {
    day: "Friday",
    hours: "12:00 PM – 9:00 PM",
    closed: false,
    isClosed: false
  },
  {
    day: "Saturday",
    hours: "12:00 PM – 9:00 PM",
    closed: false,
    isClosed: false
  },
  {
    day: "Sunday",
    hours: "12:00 PM – 9:00 PM",
    closed: false,
    isClosed: false
  }
];

export const HOURS_AND_LOCATION: HoursAndLocationInfo = {
  tag: "Find Us in North York",
  title: "1 Holmes Ave, North York",
  subtitle: "Yonge & Finch Area · North York, ON M2N 5S1",
  address: "1 Holmes Ave, North York, ON M2N 5S1",
  plusCode: "QHHP+45 North York, Ontario",
  mapsLink: "https://maps.app.goo.gl/hdXFY8pog2nbQJpN9",
  parkingNote: "Mixed parking — salons on Yonge Street may have limited street parking, while plaza locations have free lots. Accessible via TTC Line 1 subway and bus service.",
  bookingNote: "Appointments recommended. Walk-ins accommodated when available.",
  appointmentPolicy: "Open daily from 12:00 PM to 9:00 PM (Wednesday closed).",
  weeklyHours: SCHEDULE_LIST,
  schedule: SCHEDULE_LIST
};

export const FOOTER_DATA: FooterInfo = {
  aboutText: "R&K Salon North York is a premier hair salon located at 1 Holmes Ave in North York. Offering expert cuts, vibrant color, and relaxing massage chair hair wash treatments.",
  description: "R&K Salon North York is a premier hair salon located at 1 Holmes Ave in North York. Offering expert cuts, vibrant color, and relaxing massage chair hair wash treatments.",
  copyrightText: "© R&K Salon North York. All Rights Reserved.",
  copyright: "© R&K Salon North York. All Rights Reserved.",
  subline: "North York, Ontario · 1 Holmes Ave",
  tagline: "Hair Salon & Styling · Yonge & Finch Area"
};

export const ADMIN_CONFIG = {
  authorizedEmails: ["kevfun73@gmail.com", "admin@rksalonnorthyork.com"],
  defaultMasterPasscode: "rksalon2026",
  demoPasscode: "admin123"
};

export const DEFAULT_POSTS: SalonPost[] = [
  {
    id: "post-1",
    title: "Experience Our Luxurious Massage Chair Hair Washes",
    category: "Shop News",
    author: "Kulio (Master Stylist)",
    date: "August 28, 2026",
    excerpt: "Unwind during your shampoo treatment with our therapeutic massage chairs and complimentary hot tea.",
    content: "At R&K Salon North York (1 Holmes Ave), we believe a hair appointment should be a true oasis of relaxation. That's why every haircut and color service includes our signature shampoo wash on state-of-the-art therapeutic massage chairs.\n\nSip on a cup of complimentary hot tea while our stylists wash away the stress of the day. Stop by or book your session today!",
    imageUrl: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1000&q=80",
    tags: ["Massage Chairs", "Relaxation", "Complimentary Tea"],
    isPinned: true,
    isPublished: true,
    createdAt: "2026-08-28T10:00:00.000Z"
  },
  {
    id: "post-2",
    title: "Stanley's Guide to Consultative Styling & Precision Color",
    category: "Style Showcase",
    author: "Stanley (Senior Stylist)",
    date: "August 20, 2026",
    excerpt: "Why step-by-step communication and attentive listening are the secrets to the perfect hairstyle.",
    content: "Every client has a unique vision for their hair. Whether you are looking for a subtle trim, textured layers, or a bold color transformation like rich burgundy or vibrant copper, listening carefully is our top priority.\n\nWe check in with you at every stage of the cut to ensure you are 100% delighted with your new look.",
    imageUrl: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=1000&q=80",
    tags: ["Consultation", "Color Blends", "Styling"],
    isPinned: false,
    isPublished: true,
    createdAt: "2026-08-20T14:30:00.000Z"
  },
  {
    id: "post-3",
    title: "Conveniently Located at 1 Holmes Ave (Yonge & Finch Area)",
    category: "Announcement",
    author: "R&K Salon Team",
    date: "August 15, 2026",
    excerpt: "Open daily from 12 PM to 9 PM (Wednesday closed) with easy access near TTC Line 1 subway.",
    content: "Conveniently situated in the vibrant Yonge & Finch neighborhood at 1 Holmes Ave, R&K Salon is easily accessible by TTC Line 1 subway and local transit.\n\nWe welcome walk-ins and appointments daily from 12:00 PM to 9:00 PM (Closed Wednesdays). Come experience North York's top-rated salon atmosphere!",
    imageUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1000&q=80",
    tags: ["Location", "Yonge & Finch", "Hours"],
    isPinned: false,
    isPublished: true,
    createdAt: "2026-08-15T09:00:00.000Z"
  }
];

