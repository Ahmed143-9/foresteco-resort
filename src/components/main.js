import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { 
  Leaf, Shield, TrendingUp, Users, ArrowRight, 
  Menu, X, Check, Calculator, Lock, Phone, 
  Mail, MapPin, Globe, Download, ChevronRight,
  Star, Award, Home, Clock, Calendar, Building,
  FileText, Share2, Target, PieChart
} from 'lucide-react';
import heroImage from '../images/hero.jpg';

// --- BRAND CONSTANTS (Strictly from PDF) ---
const COLORS = {
  phthaloGreen: '#193C26',
  paleGoldenrod: '#F0EAAF',
  eerieBlack: '#191819',
  angoraWhite: '#F6F6F7',
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
};

// --- Enhanced TRANSLATIONS DATABASE ---
const TRANSLATIONS = {
  en: {
    nav: { 
      vision: "The Vision", 
      asset: "The Asset", 
      membership: "Membership", 
      yield: "Yield", 
      join: "Join Pilot"
    },
    hero: { 
      subtitle: "Whisper of the Forest", 
      title: "OWN A PIECE\nOF THE EARTH", 
      desc: "A fractional ownership model secured by land, engineered for yield, and designed for legacy.", 
      cta1: "View The Tiers", 
      cta2: "How It Works",
      stats: {
        investors: "Investors",
        landArea: "Land Area",
        returns: "Projected Returns",
        shares: "Shares Left"
      }
    },
    value: {
      hardAsset: "Hard Asset", 
      hardAssetDesc: "Not just paper equity. You receive a registered Saf Kabla Deed for 1 Decimal of land per share in Gazipur. Permanent, heritable, and secure.",
      yield: "Operational Yield", 
      yieldDesc: "Earn 50% of Net Profits from the Agro-Farm, Resort, and Adventure Zone. An asset that pays for its own maintenance.",
      access: "Elite Access", 
      accessDesc: "Join the 600 Club. Unlock lifetime vacation benefits, voting rights, and a private sanctuary for your family just an hour from Dhaka."
    },
    portfolio: {
      title: "Legacy of Delivery",
      subtitle: "Completed Project: Lifeline Lodge and Resort",
      desc: "We don't just promise; we build. Explore our flagship completed project that set the standard for eco-luxury.",
      viewGallery: "View Gallery",
      viewProject: "View Project Details"
    },
    calc: {
      title: "Wealth Engine",
      desc: "The 600 Club model is designed for dual-velocity returns: annual operating dividends plus historical land appreciation.",
      selectTier: "Select Your Tier",
      holdingPeriod: "Holding Period",
      years: "Years",
      totalValue: "Total Projected Value",
      totalRoi: "Total ROI",
      estDiv: "Est. Total Dividends",
      estAppr: "Est. Land Appreciation",
      initInv: "Initial Investment",
      disclaimer: "*Projections based on Business Model v2026. Assumes 12% annual land appreciation in Gazipur and Year 3 stabilized occupancy. Past performance does not guarantee future results.",
      scenario: "Best Case Scenario",
      moderate: "Moderate Scenario",
      conservative: "Conservative Scenario"
    },
    tiers: {
      title: "The Collection",
      desc: "Limited to 600 shares lifetime. Choose your level of access and ownership.",
      reqAccess: "Request Access",
      shares: "Shares",
      boardroom: "Boardroom",
      features: "Key Features",
      mostPopular: "Most Popular",
      bestValue: "Best Value"
    },
    process: {
      title: "Investment Process",
      steps: [
        { title: "Consultation", desc: "Schedule a meeting with our investment team" },
        { title: "Documentation", desc: "Complete KYC and legal formalities" },
        { title: "Payment", desc: "Secure payment via bank transfer" },
        { title: "Deed Transfer", desc: "Receive your Saf Kabla Deed" },
        { title: "Membership", desc: "Access your 600 Club benefits" }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "What is a Saf Kabla Deed?",
          a: "Saf Kabla is a registered land deed recognized by Bangladesh law, providing you with legal ownership rights to your portion of the land."
        },
        {
          q: "How are dividends distributed?",
          a: "Dividends are distributed annually based on 50% of net profits, directly to your registered bank account."
        },
        {
          q: "Can I sell my shares?",
          a: "Yes, shares can be transferred to other eligible buyers after one year, subject to board approval."
        },
        {
          q: "What happens after 600 shares are sold?",
          a: "No further shares will be issued. The 600 Club becomes exclusive to the founding members."
        }
      ]
    },
    footer: {
      contact: "Contact",
      legal: "Legal",
      address: "Bhabanipur, Gazipur.\nAn Agro-Tourism Project established under the joint management of YESS Cooperative Society and NEXCENT.",
      rights: "© 2026 Forest Eco Resort Ltd. All rights reserved.",
      links: { 
        privacy: "Privacy Policy", 
        terms: "Terms of Use", 
        deed: "Saf Kabla Explained", 
        brochure: "Download Brochure",
        faq: "FAQ",
        blog: "Blog"
      },
      newsletter: {
        title: "Stay Updated",
        placeholder: "Enter your email",
        button: "Subscribe"
      }
    },
    ctaBar: {
      title: "Pilot Phase Closing Soon",
      desc: "Only 50 shares available at discounted Executive rates.",
      btn: "Download Investment Dossier"
    }
  },
  bn: {
    nav: { 
      vision: "রূপকল্প", 
      asset: "সম্পদ বিবরণী", 
      membership: "সদস্যপদ", 
      yield: "বিনিয়োগ ও মুনাফা", 
      join: "সদস্য হন"
    },
    hero: { 
      subtitle: "অরণ্যের স্নিগ্ধ স্পন্দন", 
      title: "গড়ে তুলুন নিজের\nএক টুকরো পৃথিবী", 
      desc: "সাফ কবলা দলিলে জমির মালিকানা ও নিশ্চিত আয়ের এক যুগান্তকারী মডেল, যা আপনার এবং আপনার পরবর্তী প্রজন্মের জন্য এক গর্বিত উত্তরাধিকার।", 
      cta1: "মালিকানা ধরণ দেখুন", 
      cta2: "কার্যপদ্ধতি জানুন",
      stats: {
        investors: "বিনিয়োগকারী",
        landArea: "জমির পরিমাণ",
        returns: "আনুমানিক মুনাফা",
        shares: "শেয়ার অবশিষ্ট"
      }
    },
    value: {
      hardAsset: "নিষ্কণ্টক মালিকানা", 
      hardAssetDesc: "কেবলমাত্র কাগুজে শেয়ার নয়। গাজীপুরের ভবানিপুরে প্রতি শেয়ারের বিপরীতে পাচ্ছেন ১ শতাংশ জমির রেজিস্টার্ড সাফ কবলা দলিল। যা সম্পূর্ণ স্থায়ী, হস্তান্তরযোগ্য ও নিরাপদ।",
      yield: "পরিচালন লভ্যাংশ", 
      yieldDesc: "এগ্রো-ফার্ম, রিসোর্ট এবং অ্যাডভেঞ্চার পার্ক থেকে অর্জিত নিট মুনাফার ৫০% লভ্যাংশ উপভোগ করুন। এমন একটি সম্পদ যা নিজের রক্ষণাবেক্ষণ ব্যয় নিজেই বহন করে।",
      access: "এক্সক্লুসিভ লাইফস্টাইল", 
      accessDesc: "৬০০ ক্লাবের অভিজাত সদস্য হন। আজীবন অবকাশ যাপন, ভোটিং অধিকার এবং ঢাকা থেকে মাত্র এক ঘণ্টা দূরত্বে আপনার পরিবারের জন্য নিশ্চিত করুন এক নিভৃত আপনালয়।"
    },
    portfolio: {
      title: "আমাদের সাফল্যের স্বাক্ষর",
      subtitle: "সম্পন্ন প্রকল্প: লাইফলাইন লজ এবং রিসোর্ট",
      desc: "আমরা কেবল প্রতিশ্রুতিতে নয়, নির্মাণে বিশ্বাসী। আমাদের সম্পন্ন করা ফ্ল্যাগশিপ প্রজেক্টটি দেখুন যা ইকো-লাক্সারির নতুন মানদণ্ড স্থাপন করেছে।",
      viewGallery: "গ্যালারী দেখুন",
      viewProject: "প্রকল্প বিস্তারিত"
    },
    calc: {
      title: "সম্পদ প্রবৃদ্ধি ক্যালকুলেটর",
      desc: "৬০০ ক্লাব মডেলটি এমনভাবে সাজানো হয়েছে যা আপনাকে দেবে দ্বিমুখী লাভ: বাৎসরিক লভ্যাংশ এবং জমির ক্রমবর্মান মূল্যবৃদ্ধি।",
      selectTier: "আপনার পছন্দের টায়ার",
      holdingPeriod: "বিনিয়োগের সময়কাল",
      years: "বছর",
      totalValue: "প্রাক্কলিত মোট সম্পদ মূল্য",
      totalRoi: "মোট রিটার্ন (ROI)",
      estDiv: "আনুমানিক মোট লভ্যাংশ",
      estAppr: "আনুমানিক জমির মূল্যবৃদ্ধি",
      initInv: "প্রাথমিক বিনিয়োগ",
      disclaimer: "*প্রাক্কলনটি বিজনেস মডেল ২০২৬-এর ওপর ভিত্তি করে তৈরি। গাজীপুরে জমির বার্ষিক ১২% মূল্যবৃদ্ধি এবং ৩য় বছরে রিসোর্টের স্থিতিশীল আয়ের ওপর এটি নির্ভরশীল। জমির অতীত বাজারদর ভবিষ্যতের নিশ্চয়তা প্রদান করে না।",
      scenario: "সেরা সম্ভাব্য অবস্থা",
      moderate: "মধ্যম অবস্থা",
      conservative: "সাবধানতামূলক অবস্থা"
    },
    tiers: {
      title: "মেম্বারশিপ কালেকশন",
      desc: "আজীবন মেয়াদের জন্য মাত্র ৬০০টি শেয়ার। বেছে নিন আপনার পছন্দের মালিকানা ও সুবিধাসমূহ।",
      reqAccess: "বিস্তারিত জানতে চাই",
      shares: "টি শেয়ার",
      boardroom: "বোর্ড মেম্বার",
      features: "গুরুত্বপূর্ণ বৈশিষ্ট্য",
      mostPopular: "সর্বাধিক জনপ্রিয়",
      bestValue: "সেরা মূল্য"
    },
    process: {
      title: "বিনিয়োগ প্রক্রিয়া",
      steps: [
        { title: "পরামর্শ", desc: "আমাদের বিনিয়োগ টিমের সাথে সাক্ষাৎ করুন" },
        { title: "কাগজপত্র", desc: "KYC এবং আইনি ফর্মালিটি সম্পন্ন করুন" },
        { title: "পেমেন্ট", desc: "ব্যাংক ট্রান্সফারের মাধ্যমে নিরাপদ পেমেন্ট" },
        { title: "দলিল হস্তান্তর", desc: "আপনার সাফ কবলা দলিল গ্রহণ করুন" },
        { title: "সদস্যপদ", desc: "৬০০ ক্লাব সুবিধা উপভোগ করুন" }
      ]
    },
    faq: {
      title: "সচরাচর জিজ্ঞাস্য",
      items: [
        {
          q: "সাফ কবলা দলিল কি?",
          a: "সাফ কবলা হলো বাংলাদেশ আইনে স্বীকৃত রেজিস্টার্ড জমির দলিল, যা আপনাকে জমির আইনগত মালিকানা অধিকার প্রদান করে।"
        },
        {
          q: "লভ্যাংশ কিভাবে বন্টন করা হয়?",
          a: "লভ্যাংশ বাৎসরিকভাবে নিট মুনাফার ৫০% ভিত্তিতে সরাসরি আপনার রেজিস্টার্ড ব্যাংক অ্যাকাউন্টে পাঠানো হয়।"
        },
        {
          q: "আমি কি আমার শেয়ার বিক্রি করতে পারি?",
          a: "হ্যাঁ, এক বছর পর বোর্ডের অনুমোদন সাপেক্ষে শেয়ার অন্যান্য যোগ্য ক্রেতাদের কাছে হস্তান্তর করা যাবে।"
        },
        {
          q: "৬০০ শেয়ার বিক্রি হওয়ার পর কি হবে?",
          a: "এরপর আর কোন শেয়ার ইস্যু করা হবে না। ৬০০ ক্লাব প্রতিষ্ঠাতা সদস্যদের জন্য এক্সক্লুসিভ হয়ে যাবে।"
        }
      ]
    },
    footer: {
      contact: "যোগাযোগ",
      legal: "আইনি তথ্য",
      address: "ভবানীপুর, গাজীপুর।\nYESS কো-অপারেটিভ সোসাইটি এবং নেক্সেন্ট (NEXCENT)-এর যৌথ ব্যবস্থাপনায় পরিচালিত একটি এগ্রো-ট্যুরিজম প্রকল্প।",
      rights: "© ২০২৬ ফরেস্ট ইকো রিসোর্ট লিমিটেড। সর্বস্বত্ব সংরক্ষিত।",
      links: { 
        privacy: "গোপনীয়তা নীতি", 
        terms: "শর্তাবলী", 
        deed: "সাফ কবলা বিস্তারিত", 
        brochure: "ব্রোশিওর সংগ্রহ করুন",
        faq: "প্রশ্নোত্তর",
        blog: "ব্লগ"
      },
      newsletter: {
        title: "আপডেট থাকুন",
        placeholder: "ইমেইল ঠিকানা লিখুন",
        button: "সাবস্ক্রাইব"
      }
    },
    ctaBar: {
      title: "পাইলট ফেজ শীঘ্রই শেষ হচ্ছে",
      desc: "ডিসকাউন্টেড এক্সিকিউটিভ মূল্যে আর মাত্র ৫০টি শেয়ার বাকি।",
      btn: "ইনভেস্টমেন্ট বিস্তারিত দেখুন"
    }
  }
};

// --- Enhanced DATA GENERATOR ---
const getTiersData = (lang) => [
  {
    id: 'executive',
    name: lang === 'en' ? 'Executive' : 'এক্সিকিউটিভ',
    shares: 1,
    price: 637500,
    officialPrice: 750000,
    land: lang === 'en' ? '1 Decimal' : '১ শতাংশ',
    benefits: lang === 'en'
      ? ['One-time Domestic Tour', 'Lifetime 20% Resort Discount', 'Voting Weight: 1', 'Annual Dividend']
      : ['এককালীন ডোমেস্টিক ট্যুর', 'আজীবন ২০% রিসোর্ট ডিসকাউন্ট', 'ভোটিং ওয়েট: ১', 'বাৎসরিক লভ্যাংশ'],
    color: 'bg-white',
    text: 'text-gray-900',
    border: 'border-gray-200',
    tag: null
  },
  {
    id: 'silver',
    name: lang === 'en' ? 'Silver' : 'সিলভার',
    shares: 5,
    price: 3187500,
    officialPrice: 3750000,
    land: lang === 'en' ? '5 Decimals' : '৫ শতাংশ',
    benefits: lang === 'en'
      ? ['One-time International Tour', 'Extended Resort Access', 'Voting Weight: 5', 'Higher Dividend Share', 'Priority Booking']
      : ['এককালীন ইন্টারন্যাশনাল ট্যুর', 'বর্ধিত রিসোর্ট অ্যাক্সেস', 'ভোটিং ওয়েট: ৫', 'উচ্চতর লভ্যাংশ', 'অগ্রাধিকার বুকিং'],
    color: 'bg-gray-50',
    text: 'text-gray-900',
    border: 'border-gray-300',
    tag: 'mostPopular'
  },
  {
    id: 'golden',
    name: lang === 'en' ? 'Golden' : 'গোল্ডেন',
    shares: 10,
    price: 6375000,
    officialPrice: 7500000,
    land: lang === 'en' ? '10 Decimals' : '১০ শতাংশ',
    benefits: lang === 'en'
      ? ['Founder Privilege', 'Premium Villa Access', 'Name on Founder Wall', 'Voting Weight: 10', 'VIP Events']
      : ['ফাউন্ডার প্রিভিলেজ', 'প্রিমিয়াম ভিলা অ্যাক্সেস', 'ফাউন্ডার ওয়ালে নাম', 'ভোটিং ওয়েট: ১০', 'ভিআইপি ইভেন্ট'],
    color: 'bg-[#F0EAAF]',
    text: 'text-[#193C26]',
    border: 'border-[#F0EAAF]',
    tag: 'bestValue'
  },
  {
    id: 'platinum',
    name: lang === 'en' ? 'Platinum' : 'প্লাটিনাম',
    shares: 50,
    price: 30000000,
    officialPrice: 37500000,
    land: lang === 'en' ? '50 Decimals' : '৫০ শতাংশ',
    benefits: lang === 'en'
      ? ['Director Eligibility', 'Board Advisory Seat', 'Veto Rights', 'Voting Weight: 50', 'Revenue Sharing+']
      : ['পরিচালক হওয়ার যোগ্যতা', 'বোর্ড অ্যাডভাইজরি সিট', 'ভেটো অধিকার', 'ভোটিং ওয়েট: ৫০', 'রাজস্ব শেয়ারিং+'],
    color: 'bg-[#193C26]',
    text: 'text-[#F0EAAF]',
    border: 'border-[#193C26]',
    tag: null
  }
];

// --- UTILITY FUNCTIONS ---
const formatCurrency = (amount, language = 'en') => {
  if (language === 'bn') {
    const lakh = amount / 100000;
    return `৳ ${lakh.toFixed(2)} লাখ`;
  }
  return `BDT ${(amount / 100000).toFixed(2)} Lakh`;
};

const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// --- ENHANCED COMPONENTS ---

const JoinPilotModal = ({ isOpen, onClose, language }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', mobile: '', email: '' });
      onClose();
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div 
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" 
      style={{
        zIndex: 9999,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(5px)',
        animation: 'fadeIn 0.3s ease'
      }}
      onClick={onClose}
    >
      <div 
        className="position-relative rounded-4 overflow-hidden shadow-lg"
        style={{
          width: '90%',
          maxWidth: '500px',
          maxHeight: '90vh',
          animation: 'slideUp 0.3s ease'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background Image */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: !imageError ? 'url(/form.jpg)' : 'linear-gradient(135deg, #193C26, #2a5238)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)'
          }}
        >
          <img 
            src="/form.jpg" 
            alt="" 
            style={{ display: 'none' }}
            onError={() => setImageError(true)}
          />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="position-absolute top-0 end-0 m-3 btn btn-link text-white p-2"
          style={{
            zIndex: 10,
            opacity: 0.8,
            transition: 'opacity 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
          onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}
        >
          <X style={{ width: '24px', height: '24px' }} />
        </button>

        {/* Form Content */}
        <div className="position-relative p-4 p-md-5" style={{ zIndex: 1 }}>
          {!submitted ? (
            <>
              <h2 className="h2 fw-bold mb-2 text-center" style={{ color: '#F0EAAF' }}>
                {language === 'en' ? 'Join the 600 Club' : '৬০০ ক্লাবে যোগ দিন'}
              </h2>
              <p className="text-center mb-4 mb-md-5" style={{ color: '#F0EAAF', opacity: 0.9 }}>
                {language === 'en' 
                  ? 'Secure your exclusive membership today' 
                  : 'আজই আপনার এক্সক্লুসিভ সদস্যপদ নিশ্চিত করুন'}
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="form-label fw-bold" style={{ color: '#F0EAAF' }}>
                    {language === 'en' ? 'Full Name' : 'পূর্ণ নাম'}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control form-control-lg"
                    placeholder={language === 'en' ? 'Enter your full name' : 'আপনার পূর্ণ নাম লিখুন'}
                    required
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      border: '2px solid rgba(240, 234, 175, 0.3)',
                      color: '#193C26',
                      fontWeight: '500'
                    }}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-bold" style={{ color: '#F0EAAF' }}>
                    {language === 'en' ? 'Mobile Number' : 'মোবাইল নম্বর'}
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="form-control form-control-lg"
                    placeholder={language === 'en' ? '+880 1XXX XXXXXX' : '+৮৮০ ১XXX XXXXXX'}
                    required
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      border: '2px solid rgba(240, 234, 175, 0.3)',
                      color: '#193C26',
                      fontWeight: '500'
                    }}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-bold" style={{ color: '#F0EAAF' }}>
                    {language === 'en' ? 'Email Address' : 'ইমেইল ঠিকানা'}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control form-control-lg"
                    placeholder={language === 'en' ? 'your.email@example.com' : 'your.email@example.com'}
                    required
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      border: '2px solid rgba(240, 234, 175, 0.3)',
                      color: '#193C26',
                      fontWeight: '500'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-lg w-100 fw-bold py-3"
                  style={{
                    background: 'linear-gradient(135deg, #F0EAAF, #e6de9a)',
                    color: '#193C26',
                    border: 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 20px rgba(240, 234, 175, 0.4)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 25px rgba(240, 234, 175, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(240, 234, 175, 0.4)';
                  }}
                >
                  {language === 'en' ? 'Submit Application' : 'আবেদন জমা দিন'}
                </button>
              </form>

              <p className="text-center mt-4 small" style={{ color: '#F0EAAF', opacity: 0.8 }}>
                {language === 'en' 
                  ? 'Our team will contact you within 24 hours' 
                  : 'আমাদের টিম ২৪ ঘন্টার মধ্যে আপনার সাথে যোগাযোগ করবে'}
              </p>
            </>
          ) : (
            <div className="text-center py-5">
              <div 
                className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#10B981'
                }}
              >
                <Check style={{ width: '48px', height: '48px', color: 'white' }} />
              </div>
              <h3 className="h3 fw-bold mb-3" style={{ color: '#F0EAAF' }}>
                {language === 'en' ? 'Application Submitted!' : 'আবেদন সফল হয়েছে!'}
              </h3>
              <p style={{ color: '#F0EAAF', opacity: 0.9 }}>
                {language === 'en' 
                  ? 'Thank you for your interest. We will be in touch soon.' 
                  : 'আপনার আগ্রহের জন্য ধন্যবাদ। আমরা শীঘ্রই যোগাযোগ করব।'}
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};


const Navigation = ({ toggleMenu, isMenuOpen, language, setLanguage, t, openJoinModal }) => {
  const [logoError, setLogoError] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  // Track hero section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsHeroVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    const heroSection = document.getElementById('hero');
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) observer.unobserve(heroSection);
    };
  }, []);

  const navTextColor = '#F0EAAF';
  const navBgColor = isHeroVisible 
    ? 'transparent'
    : 'rgba(25, 60, 38, 0.95)';

  return (
    <nav className="navbar fixed-top navbar-expand-lg" style={{
      backgroundColor: navBgColor,
      padding: isHeroVisible ? '1.5rem 0' : '1rem 0',
      transition: 'all 0.5s ease',
      backdropFilter: isHeroVisible ? 'none' : 'blur(10px)',
      boxShadow: isHeroVisible ? 'none' : '0 4px 20px rgba(0,0,0,0.1)',
      borderBottom: isHeroVisible ? 'none' : '1px solid rgba(240, 234, 175, 0.1)'
    }}>
      <div className="container">
        <a href="#hero" className="navbar-brand d-flex align-items-center">
          {!logoError ? (
            <img
              src="/Forest Eco Resort_Base Color Logo.png"
              alt="Forest Eco Resort"
              className="img-fluid"
              style={{ 
                height: '40px', 
                transition: 'transform 0.2s',
                filter: 'brightness(0) invert(1)'
              }}
              onError={() => setLogoError(true)}
            />
          ) : (
            <Leaf className="me-2" style={{ 
              color: navTextColor,
              filter: 'drop-shadow(0 0 2px rgba(240, 234, 175, 0.5))'
            }} />
          )}
          <span style={{
            color: navTextColor,
            fontWeight: 'bold',
            fontSize: '1.5rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            FOREST ECO <span style={{ fontWeight: 'normal' }}>RESORT</span>
          </span>
        </a>

        {/* Toggle Button */}
        <button 
          className="navbar-toggler border-0"
          type="button" 
          onClick={toggleMenu}
          style={{
            padding: '0.25rem 0.5rem',
            position: 'relative',
            width: '40px',
            height: '30px'
          }}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          <span style={{
            display: 'block',
            width: '100%',
            height: '2px',
            backgroundColor: navTextColor,
            position: 'absolute',
            left: 0,
            top: isMenuOpen ? '50%' : '25%',
            transform: isMenuOpen ? 'rotate(45deg)' : 'none',
            transition: 'all 0.3s ease'
          }} />
          <span style={{
            display: 'block',
            width: '100%',
            height: '2px',
            backgroundColor: navTextColor,
            position: 'absolute',
            left: 0,
            top: '50%',
            opacity: isMenuOpen ? 0 : 1,
            transition: 'all 0.3s ease'
          }} />
          <span style={{
            display: 'block',
            width: '100%',
            height: '2px',
            backgroundColor: navTextColor,
            position: 'absolute',
            left: 0,
            top: isMenuOpen ? '50%' : '75%',
            transform: isMenuOpen ? 'rotate(-45deg)' : 'none',
            transition: 'all 0.3s ease'
          }} />
        </button>

        {/* Navbar Menu */}
        <div 
          className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
          style={{
            transition: 'all 0.3s ease-in-out'
          }}
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item mx-2">
              <a 
                href="#vision" 
                className="nav-link" 
                style={{ 
                  color: navTextColor,
                  fontWeight: '500',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                  fontSize: '1.1rem'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(240, 234, 175, 0.1)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                onClick={toggleMenu}
              >
                {t.nav.vision}
              </a>
            </li>
            <li className="nav-item mx-2">
              <a 
                href="#asset" 
                className="nav-link" 
                style={{ 
                  color: navTextColor,
                  fontWeight: '500',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                  fontSize: '1.1rem'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(240, 234, 175, 0.1)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                onClick={toggleMenu}
              >
                {t.nav.asset}
              </a>
            </li>
            <li className="nav-item mx-2">
              <a 
                href="#tiers" 
                className="nav-link" 
                style={{ 
                  color: navTextColor,
                  fontWeight: '500',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                  fontSize: '1.1rem'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(240, 234, 175, 0.1)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                onClick={toggleMenu}
              >
                {t.nav.membership}
              </a>
            </li>
            <li className="nav-item mx-2">
              <a 
                href="#calculator" 
                className="nav-link" 
                style={{ 
                  color: navTextColor,
                  fontWeight: '500',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                  fontSize: '1.1rem'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(240, 234, 175, 0.1)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                onClick={toggleMenu}
              >
                {t.nav.yield}
              </a>
            </li>

            {/* Language Toggle */}
            <li className="nav-item mx-2">
              <button
                onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
                className="btn btn-sm border-0 rounded-pill"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  color: navTextColor,
                  padding: '8px 20px',
                  border: '1px solid rgba(240, 234, 175, 0.3)',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(240, 234, 175, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span className={`fw-bold ${language === 'en' ? '' : 'opacity-50 fw-normal'}`}>EN</span>
                <span className="opacity-50 mx-1">|</span>
                <span className={`fw-bold ${language === 'bn' ? '' : 'opacity-50 fw-normal'}`}>বাংলা</span>
              </button>
            </li>

            {/* Join Button */}
            <li className="nav-item ms-2">
              <button 
                className="btn rounded-pill"
                style={{
                  background: 'linear-gradient(135deg, #F0EAAF, #e6de9a)',
                  color: '#193C26',
                  fontWeight: 'bold',
                  border: 'none',
                  padding: '12px 28px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 20px rgba(240, 234, 175, 0.4)',
                  fontSize: '1rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 25px rgba(240, 234, 175, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(240, 234, 175, 0.4)';
                }}
                onClick={() => {
                  if (isMenuOpen) toggleMenu();
                  openJoinModal();
                }}
              >
                {t.nav.join}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ t }) => {
  return (
    <section id="hero" className="position-relative min-vh-100 w-100 overflow-hidden d-flex align-items-center justify-content-center" style={{
      background: 'linear-gradient(to bottom, #F6F6F7, #FFFFFF)'
    }}>
      {/* Background Image */}
      <div className="position-absolute top-0 start-0 w-100 h-100 z-0">
        <img
          src={heroImage}
          alt="Forest Background"
          className="w-100 h-100 object-fit-cover opacity-10"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>

      {/* Animated background elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100 z-0">
        <div className="position-absolute top-25 start-25 w-25 h-25 rounded-circle bg-warning" style={{opacity: 0.1, filter: 'blur(60px)'}}></div>
        <div className="position-absolute bottom-25 end-25 w-37 h-37 rounded-circle bg-success" style={{opacity: 0.05, filter: 'blur(60px)'}}></div>
      </div>

      <div className="position-relative z-10 text-center container px-4">
        <p className="text-success text-lg mb-4 mb-md-6 text-uppercase fw-light" style={{
          letterSpacing: '0.3em',
          opacity: 0.8,
          fontSize: '1.125rem'
        }}>
          {t.hero.subtitle}
        </p>
        
        <h1 className="display-1 display-md-2 display-lg-1 fw-bold text-success mb-4 mb-md-6" style={{
          lineHeight: 1,
          whiteSpace: 'pre-line'
        }}>
          {t.hero.title}
        </h1>
        
        <p className="text-white text-xl mb-6 mb-md-8" style={{
          maxWidth: '75rem',
          margin: '0 auto',
          fontSize: '1.5rem',
          fontWeight: 300
        }}>
          {t.hero.desc}
        </p>

        {/* REMOVED Scroll Indicator */}
        {/* <div className="position-absolute bottom-0 start-50 translate-middle-x animate-bounce mb-4">
          <ChevronRight className="text-success" style={{width: '1.5rem', height: '1.5rem', transform: 'rotate(90deg)'}} />
        </div> */}
      </div>
    </section>
  );
};

const ValueProp = ({ t }) => (
  <section id="asset" className="py-5 py-md-8" style={{
    background: 'linear-gradient(to bottom, #FFFFFF, #F6F6F7)'
  }}>
    <div className="container">
      <div className="text-center mb-5 mb-md-6">
        <h2 className="h1 fw-bold text-success mb-3 mb-md-4">The 600 Club Advantage</h2>
        <p className="text-muted mx-auto" style={{
          maxWidth: '600px',
          fontSize: '1.25rem'
        }}>
          Experience the perfect blend of sustainable investment and luxury lifestyle
        </p>
      </div>

      <div className="row g-4 g-md-5">
        <div className="col-12 col-md-4">
          <div className="card h-100 border-0 shadow p-4 p-md-5 rounded-3" 
            style={{
              backgroundColor: '#FFFFFF',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              border: '1px solid #f8f9fa',
              transform: 'translateY(0)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-8px)';
              e.target.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
              e.target.style.borderColor = '#F0EAAF';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
              e.target.style.borderColor = '#f8f9fa';
            }}
          >
            <div className="rounded-3 d-flex align-items-center justify-content-center mb-4" style={{
              width: '64px',
              height: '64px',
              background: 'linear-gradient(to bottom right, #193C26, #2a5238)',
              color: 'white',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}>
              <Shield className="" style={{width: '32px', height: '32px'}} />
            </div>
            <h3 className="h3 fw-bold text-success mb-3 mb-md-4">{t.value.hardAsset}</h3>
            <p className="text-muted mb-3 mb-md-4" style={{lineHeight: '1.7'}}>{t.value.hardAssetDesc}</p>
            <div className="d-flex align-items-center fw-medium text-success" style={{
              transition: 'transform 0.2s ease'
            }} onMouseEnter={(e) => e.target.style.transform = 'translateX(8px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateX(0)'}>
              Learn more <ArrowRight className="ms-2" style={{width: '16px', height: '16px'}} />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card h-100 border-0 shadow p-4 p-md-5 rounded-3" 
            style={{
              backgroundColor: '#FFFFFF',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              border: '1px solid #f8f9fa',
              transform: 'translateY(0)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-8px)';
              e.target.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
              e.target.style.borderColor = '#F0EAAF';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
              e.target.style.borderColor = '#f8f9fa';
            }}
          >
            <div className="rounded-3 d-flex align-items-center justify-content-center mb-4" style={{
              width: '64px',
              height: '64px',
              background: 'linear-gradient(to bottom right, #F0EAAF, #f8f4d0)',
              color: '#193C26',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}>
              <TrendingUp className="" style={{width: '32px', height: '32px'}} />
            </div>
            <h3 className="h3 fw-bold text-success mb-3 mb-md-4">{t.value.yield}</h3>
            <p className="text-muted mb-3 mb-md-4" style={{lineHeight: '1.7'}}>{t.value.yieldDesc}</p>
            <div className="d-flex align-items-center fw-medium text-success" style={{
              transition: 'transform 0.2s ease'
            }} onMouseEnter={(e) => e.target.style.transform = 'translateX(8px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateX(0)'}>
              View projections <ArrowRight className="ms-2" style={{width: '16px', height: '16px'}} />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card h-100 border-0 shadow p-4 p-md-5 rounded-3" 
            style={{
              backgroundColor: '#FFFFFF',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              border: '1px solid #f8f9fa',
              transform: 'translateY(0)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-8px)';
              e.target.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
              e.target.style.borderColor = '#F0EAAF';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
              e.target.style.borderColor = '#f8f9fa';
            }}
          >
            <div className="rounded-3 d-flex align-items-center justify-content-center mb-4" style={{
              width: '64px',
              height: '64px',
              background: 'linear-gradient(to bottom right, #193C26, #F0EAAF)',
              color: 'white',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}>
              <Users className="" style={{width: '32px', height: '32px'}} />
            </div>
            <h3 className="h3 fw-bold text-success mb-3 mb-md-4">{t.value.access}</h3>
            <p className="text-muted mb-3 mb-md-4" style={{lineHeight: '1.7'}}>{t.value.accessDesc}</p>
            <div className="d-flex align-items-center fw-medium text-success" style={{
              transition: 'transform 0.2s ease'
            }} onMouseEnter={(e) => e.target.style.transform = 'translateX(8px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateX(0)'}>
              Explore benefits <ArrowRight className="ms-2" style={{width: '16px', height: '16px'}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PortfolioGallery = ({ t }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [
    "WhatsApp Image 2025-12-15 at 11.36.15 (2).jpeg",
    "WhatsApp Image 2025-12-15 at 11.36.04 (1).jpeg",
    "WhatsApp Image 2025-12-15 at 11.36.05.jpeg",
    "WhatsApp Image 2025-12-15 at 11.36.15 (1).jpeg"
  ];

  const fallbackImages = [
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ];

  const handleImageError = (index, e) => {
    e.target.src = fallbackImages[index];
  };

  return (
    <section id="portfolio" className="py-5 py-md-8 bg-white">
      <div className="container">
        <div className="text-center mb-5 mb-md-6">
          <span className="text-success text-uppercase fw-bold mb-2 d-block" style={{
            letterSpacing: '0.2em',
            fontSize: '0.875rem'
          }}>
            {t.portfolio.subtitle}
          </span>
          <h2 className="h1 fw-bold text-success mb-3 mb-md-4">{t.portfolio.title}</h2>
          <p className="text-muted mb-4 mb-md-5" style={{
            maxWidth: '600px',
            margin: '0 auto'
          }}>{t.portfolio.desc}</p>
          
          <div className="d-flex justify-content-center gap-3 gap-md-4">
            <button className="btn btn-success d-flex align-items-center gap-2 px-4 px-md-5 py-2 py-md-3 fw-bold">
              {t.portfolio.viewGallery}
              <ArrowRight className="" style={{width: '16px', height: '16px'}} />
            </button>
            <button className="btn btn-outline-success px-4 px-md-5 py-2 py-md-3 fw-bold">
              {t.portfolio.viewProject}
            </button>
          </div>
        </div>

        {/* Main Image */}
        <div className="mb-4 mb-md-5">
          <div className="position-relative rounded-4 overflow-hidden shadow-lg" style={{
            paddingBottom: '56.25%' /* 16:9 aspect ratio */
          }}>
            <img
              src={images[selectedImage]}
              alt={`Project ${selectedImage + 1}`}
              className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
              style={{
                transition: 'transform 0.7s ease',
                transform: 'scale(1)'
              }}
              onError={(e) => handleImageError(selectedImage, e)}
            />
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)'
            }} />
            <div className="position-absolute bottom-0 start-0 p-3 p-md-4 text-white">
              <h3 className="h3 fw-bold">Lifeline Lodge</h3>
              <p className="opacity-90">Gazipur, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="row g-3 g-md-4">
          {images.map((img, idx) => (
            <div key={idx} className="col-6 col-md-3">
              <button
                onClick={() => setSelectedImage(idx)}
                className={`position-relative rounded-3 overflow-hidden d-block w-100 ${
                  selectedImage === idx ? 'border-success border-2' : 'border border-light'
                }`}
                style={{
                  paddingTop: '75%', /* 4:3 aspect ratio */
                  transition: 'transform 0.2s ease',
                  transform: selectedImage === idx ? 'scale(1.05)' : 'scale(1)'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.target.style.transform = selectedImage === idx ? 'scale(1.05)' : 'scale(1)'}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                  onError={(e) => handleImageError(idx, e)}
                />
                <div className={`position-absolute top-0 start-0 w-100 h-100 ${
                  selectedImage === idx ? 'bg-success' : 'bg-dark'
                }`} style={{
                  opacity: selectedImage === idx ? '0.2' : '0',
                  transition: 'opacity 0.3s ease'
                }} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ROICalculator = ({ t, language }) => {
  const TIERS = useMemo(() => getTiersData(language), [language]);
  const [selectedTier, setSelectedTier] = useState(TIERS[0]);
  const [years, setYears] = useState(5);
  const [scenario, setScenario] = useState('best');

  useEffect(() => {
    setSelectedTier(TIERS[0]);
  }, [language]);

  const scenarios = {
    best: { dividend: 115000, appreciation: 0.12 },
    moderate: { dividend: 92000, appreciation: 0.09 },
    conservative: { dividend: 69000, appreciation: 0.06 }
  };

  const currentScenario = scenarios[scenario];
  const totalDividend = currentScenario.dividend * selectedTier.shares * years;
  const initialLandValue = selectedTier.price;
  const futureLandValue = initialLandValue * Math.pow((1 + currentScenario.appreciation), years);
  const totalValue = totalDividend + futureLandValue;
  const roiPercentage = ((totalValue - initialLandValue) / initialLandValue) * 100;

  return (
    <section id="calculator" className="py-5 py-md-8" style={{
      background: 'linear-gradient(to bottom, #F6F6F7, #FFFFFF)'
    }}>
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-12 col-lg-6">
            <h2 className="h1 fw-bold text-success mb-4 mb-md-5">{t.calc.title}</h2>
            <p className="text-muted mb-5 mb-md-6 lead">{t.calc.desc}</p>
            
            <div className="mb-4">
              {/* Tier Selection */}
              <div className="mb-4 mb-md-5">
                <label className="form-label text-uppercase fw-bold text-muted small d-block mb-3">
                  {t.calc.selectTier}
                </label>
                <div className="row g-2 g-md-3">
                  {TIERS.map((tier) => (
                    <div key={tier.id} className="col-6 col-md-3">
                      <button
                        onClick={() => setSelectedTier(tier)}
                        className={`btn w-100 py-3 py-md-4 ${
                          selectedTier.id === tier.id
                            ? 'btn-success'
                            : 'btn-light border'
                        }`}
                        style={{
                          backgroundColor: selectedTier.id === tier.id ? '#193C26' : '#FFFFFF',
                          color: selectedTier.id === tier.id ? '#F0EAAF' : '#6c757d',
                          borderColor: selectedTier.id === tier.id ? '#193C26' : '#dee2e6',
                          transition: 'all 0.3s ease',
                          fontWeight: '500'
                        }}
                      >
                        <div className="fw-bold">{tier.name}</div>
                        <div className="small mt-1">{formatCurrency(tier.price, language)}</div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scenario Selection */}
              <div className="mb-4 mb-md-5">
                <label className="form-label text-uppercase fw-bold text-muted small d-block mb-3">
                  Investment Scenario
                </label>
                <div className="row g-2 g-md-3">
                  {Object.entries(scenarios).map(([key, value]) => (
                    <div key={key} className="col-4">
                      <button
                        onClick={() => setScenario(key)}
                        className={`btn w-100 py-2 py-md-3 ${
                          scenario === key ? 'border-success' : 'border-light'
                        }`}
                        style={{
                          backgroundColor: scenario === key ? '#f8f9fa' : 'transparent',
                          borderColor: scenario === key ? '#193C26' : '#dee2e6',
                          color: scenario === key ? '#193C26' : '#6c757d',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <div className="fw-bold text-success">{key}</div>
                        <div className="small text-muted mt-1">
                          {key === 'best' ? t.calc.scenario :
                           key === 'moderate' ? t.calc.moderate :
                           t.calc.conservative}
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Years Slider */}
              <div className="mb-4 mb-md-5">
                <label className="form-label text-uppercase fw-bold text-muted small d-block mb-3">
                  {t.calc.holdingPeriod}: <span className="text-success fw-bold">{years} {t.calc.years}</span>
                </label>
                <input
                  type="range"
                  min="3"
                  max="15"
                  step="1"
                  value={years}
                  onChange={(e) => setYears(parseInt(e.target.value))}
                  className="form-range mb-2"
                  style={{
                    accentColor: '#193C26'
                  }}
                />
                <div className="d-flex justify-content-between small text-muted">
                  <span>3 {t.calc.years}</span>
                  <span>10 {t.calc.years}</span>
                  <span>15 {t.calc.years}</span>
                </div>
              </div>

              {/* Tier Details */}
              <div className="card border p-4 p-md-5">
                <h4 className="fw-bold text-success mb-4">Selected Tier Details</h4>
                <div className="row">
                  <div className="col-6">
                    <div className="text-muted small">Shares</div>
                    <div className="fw-bold h4">{selectedTier.shares}</div>
                  </div>
                  <div className="col-6">
                    <div className="text-muted small">Land</div>
                    <div className="fw-bold h4">{selectedTier.land}</div>
                  </div>
                  <div className="col-6">
                    <div className="text-muted small">Voting Weight</div>
                    <div className="fw-bold h4">{selectedTier.shares}</div>
                  </div>
                  <div className="col-6">
                    <div className="text-muted small">Annual Dividend</div>
                    <div className="fw-bold h4">
                      {formatCurrency(currentScenario.dividend * selectedTier.shares, language)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="col-12 col-lg-6 mt-5 mt-lg-0">
            <div className="card p-4 p-md-5 border shadow-lg" style={{
              position: 'sticky',
              top: '2rem'
            }}>
              <div className="text-center mb-4 mb-md-5">
                <p className="text-uppercase text-muted small mb-2">
                  {t.calc.totalValue}
                </p>
                <div className="display-4 fw-bold text-success mb-3">
                  {formatCurrency(totalValue, language)}
                </div>
                <div className="d-inline-flex align-items-center gap-2 px-3 px-md-4 py-2 bg-success bg-opacity-10 text-success rounded-pill">
                  <TrendingUp className="" style={{width: '16px', height: '16px'}} />
                  +{roiPercentage.toFixed(0)}% {t.calc.totalRoi}
                </div>
              </div>

              <div className="border-top pt-4 pt-md-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-muted d-flex align-items-center gap-2">
                    <PieChart className="" style={{width: '16px', height: '16px'}} />
                    {t.calc.estDiv}
                  </span>
                  <span className="fw-bold text-success">
                    {formatCurrency(totalDividend, language)}
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-muted d-flex align-items-center gap-2">
                    <Home className="" style={{width: '16px', height: '16px'}} />
                    {t.calc.estAppr}
                  </span>
                  <span className="fw-bold text-success">
                    {formatCurrency(futureLandValue - initialLandValue, language)}
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                  <span className="text-muted">{t.calc.initInv}</span>
                  <span className="text-muted">
                    {formatCurrency(initialLandValue, language)}
                  </span>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="mt-4 mt-md-5">
                <div className="mb-3">
                  <div className="d-flex justify-content-between small text-muted mb-1">
                    <span>Dividend Growth</span>
                    <span>{(currentScenario.dividend/115000*100).toFixed(0)}%</span>
                  </div>
                  <div className="progress" style={{height: '8px'}}>
                    <div
                      className="progress-bar bg-success"
                      style={{ width: `${(currentScenario.dividend/115000*100)}%` }}
                    ></div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="d-flex justify-content-between small text-muted mb-1">
                    <span>Land Appreciation</span>
                    <span>{(currentScenario.appreciation*100).toFixed(0)}%</span>
                  </div>
                  <div className="progress" style={{height: '8px'}}>
                    <div
                      className="progress-bar bg-primary"
                      style={{ width: `${(currentScenario.appreciation*100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <p className="small text-muted text-center">
                {t.calc.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TiersSection = ({ t, language }) => {
  const TIERS = useMemo(() => getTiersData(language), [language]);
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="tiers" className="py-5 py-md-8" style={{
      background: 'linear-gradient(to bottom, #FFFFFF, #F6F6F7)'
    }}>
      <div className="container">
        <div className="text-center mb-5 mb-md-6">
          <h2 className="h1 fw-bold text-success mb-3 mb-md-4">{t.tiers.title}</h2>
          <p className="text-muted mb-4 mb-md-5" style={{
            maxWidth: '600px',
            margin: '0 auto'
          }}>{t.tiers.desc}</p>
          
          <ul className="nav nav-pills d-inline-flex bg-light rounded p-1" style={{maxWidth: 'fit-content', margin: '0 auto'}}>
            {['all', 'mostPopular', 'bestValue'].map((tab) => (
              <li key={tab} className="nav-item">
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                  style={{
                    color: activeTab === tab ? '#193C26' : '#6c757d',
                    backgroundColor: activeTab === tab ? '#193C26' : 'transparent',
                    transition: 'all 0.3s ease',
                    borderRadius: '0.375rem',
                    padding: '0.5rem 1.5rem'
                  }}
                >
                  {tab === 'all' ? 'All Tiers' :
                   tab === 'mostPopular' ? t.tiers.mostPopular :
                   t.tiers.bestValue}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="row g-4 g-md-5">
          {TIERS.map((tier) => (
            <div
              key={tier.id}
              className="col-12 col-md-6 col-lg-3"
            >
              <div className="card h-100 border-2 position-relative" style={{
                backgroundColor: tier.color.includes('#F0EAAF') ? '#F0EAAF' : 
                                tier.color.includes('#193C26') ? '#193C26' : '#FFFFFF',
                color: tier.text.includes('#F0EAAF') ? '#F0EAAF' : '#193C26',
                borderColor: tier.border.includes('#F0EAAF') ? '#F0EAAF' : 
                             tier.border.includes('#193C26') ? '#193C26' : '#dee2e6',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => e.target.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)'}
              onMouseLeave={(e) => e.target.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)'}
              >
                {/* Tags */}
                {tier.id === 'platinum' && (
                  <div className="position-absolute top-0 start-50 translate-middle-x bg-gradient bg-primary text-white text-xs fw-bold px-3 px-md-4 py-1 rounded-pill mt-n3">
                    <Award className="me-1" style={{width: '12px', height: '12px'}} />
                    {t.tiers.boardroom}
                  </div>
                )}
                
                {tier.tag && (
                  <div className="position-absolute top-0 start-50 translate-middle-x bg-gradient bg-warning text-success text-xs fw-bold px-3 px-md-4 py-1 rounded-pill mt-n3">
                    <Star className="me-1" style={{width: '12px', height: '12px'}} />
                    {tier.tag === 'mostPopular' ? t.tiers.mostPopular : t.tiers.bestValue}
                  </div>
                )}

                {/* Header */}
                <div className="card-body text-center pt-5 pb-4">
                  <h3 className="h3 fw-bold mb-2">{tier.name}</h3>
                  <div className="text-uppercase small opacity-75">
                    {tier.shares} {t.tiers.shares} • {tier.land}
                  </div>
                </div>

                {/* Price */}
                <div className="px-4 px-md-5 pb-4 pb-md-5 text-center">
                  <span className="display-5 fw-bold">
                    {formatCurrency(tier.price, language)}
                  </span>
                  {tier.price < tier.officialPrice && (
                    <div className="mt-2">
                      <span className="small text-decoration-line-through opacity-75 me-2">
                        {formatCurrency(tier.officialPrice, language)}
                      </span>
                      <span className="small badge bg-danger">
                        Save {((1 - tier.price/tier.officialPrice)*100).toFixed(0)}%
                      </span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="px-4 px-md-5 pb-4 flex-grow-1">
                  <h4 className="fw-bold mb-3 opacity-80">{t.tiers.features}</h4>
                  <ul className="list-unstyled">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="d-flex align-items-start mb-2">
                        <Check className="me-2 mt-1 flex-shrink-0 opacity-70" style={{width: '20px', height: '20px'}} />
                        <span style={{lineHeight: '1.5'}}>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="px-4 px-md-5 pb-4">
                  <button
                    className="btn w-100 fw-bold py-3 rounded"
                    style={{
                      background: tier.id === 'platinum' ? 
                        'linear-gradient(90deg, #9c27b0, #673ab7)' : 
                        'linear-gradient(90deg, #193C26, #2a5238)',
                      color: tier.id === 'platinum' ? '#FFFFFF' : '#F0EAAF',
                      border: 'none',
                      transition: 'all 0.3s ease',
                      transform: 'translateY(0)'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
                    onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                  >
                    {t.tiers.reqAccess}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Investment Process */}
        <div className="mt-5 mt-md-8">
          <h3 className="h2 fw-bold text-success text-center mb-4 mb-md-5">{t.process.title}</h3>
          <div className="row g-4 g-md-5">
            {t.process.steps.map((step, index) => (
              <div key={index} className="col">
                <div className="card h-100 text-center border shadow-sm">
                  <div className="card-body d-flex flex-column">
                    <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: '#193C26',
                      color: '#FFFFFF'
                    }}>
                      {index + 1}
                    </div>
                    <h4 className="fw-bold text-success mb-3">{step.title}</h4>
                    <p className="text-muted mb-0">{step.desc}</p>
                  </div>
                </div>
                {index < t.process.steps.length - 1 && (
                  <div className="d-none d-md-block position-absolute top-50 end-0 translate-middle-y">
                    <ChevronRight className="text-muted" style={{width: '24px', height: '24px'}} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = ({ t }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-5 py-md-8 bg-white">
      <div className="container" style={{maxWidth: '900px'}}>
        <h2 className="h1 fw-bold text-success text-center mb-5 mb-md-6">{t.faq.title}</h2>
        <div className="accordion" id="faqAccordion">
          {t.faq.items.map((item, index) => (
            <div
              key={index}
              className="accordion-item border rounded-3 mb-3 overflow-hidden"
              style={{
                transition: 'all 0.3s ease',
                borderColor: '#dee2e6',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
              }}
              onMouseEnter={(e) => e.target.style.borderColor = '#F0EAAF'}
              onMouseLeave={(e) => e.target.style.borderColor = '#dee2e6'}
            >
              <h2 className="accordion-header">
                <button
                  className="accordion-button fs-5 fw-bold text-success text-start p-4"
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    boxShadow: 'none',
                    userSelect: 'none'
                  }}
                  aria-expanded={openIndex === index ? 'true' : 'false'}
                >
                  {item.q}
                  <ChevronRight
                    className="ms-auto"
                    style={{
                      width: '20px',
                      height: '20px',
                      transition: 'transform 0.3s ease',
                      transform: openIndex === index ? 'rotate(90deg)' : 'rotate(0deg)'
                    }}
                  />
                </button>
              </h2>
              <div
                className={`${openIndex === index ? 'show' : ''}`}
                style={{
                  transition: 'max-height 0.3s ease',
                  overflow: 'hidden',
                  maxHeight: openIndex === index ? '1000px' : '0'
                }}
              >
                <div className="accordion-body p-4" style={{
                  backgroundColor: '#f8f9fa'
                }}>
                  <p className="text-muted mb-0">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = ({ t }) => {
  const [nexcentError, setNexcentError] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribed:', email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="py-5 py-md-8" style={{
      background: 'linear-gradient(to bottom, #193C26, #122b1b)',
      color: '#F0EAAF'
    }}>
      <div className="container">
        {/* LIMITED INVENTORY ALERT - New Section */}
        <div className="mb-5 mb-md-6 p-4 p-md-5 rounded-3" style={{
          background: 'rgba(240, 234, 175, 0.1)',
          border: '1px solid rgba(240, 234, 175, 0.2)',
          backdropFilter: 'blur(10px)'
        }}>
          <div className="row align-items-center">
            <div className="col-12 col-md-8">
              <h3 className="h4 fw-bold text-warning mb-2">LIMITED INVENTORY ALERT</h3>
              <p className="text-light mb-2">
                Only 50 Shares are released in this Pilot Phase.
              </p>
              <p className="text-light mb-3 mb-md-0">
                Allocation is on a first-come, first-served basis.
              </p>
            </div>
            <div className="col-12 col-md-4 text-md-end">
              <button className="btn btn-warning text-dark fw-bold px-4 py-3">
                Secure Your Share Now
              </button>
            </div>
          </div>
        </div>

        {/* Contact Details - New Section */}
        <div className="row mb-5 mb-md-6">
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="d-flex align-items-center gap-2 mb-3">
              <Globe className="" style={{width: '20px', height: '20px', color: '#F0EAAF'}} />
              <span className="fw-bold text-white">WEB</span>
            </div>
            <a 
              href="https://www.foresteco-resort.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-light text-decoration-none d-block"
              style={{
                transition: 'color 0.3s ease',
                fontSize: '1.1rem'
              }}
              onMouseEnter={(e) => e.target.style.color = '#F0EAAF'}
              onMouseLeave={(e) => e.target.style.color = '#F0EAAF'}
            >
              www.foresteco-resort.com
            </a>
          </div>
          
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="d-flex align-items-center gap-2 mb-3">
              <Mail className="" style={{width: '20px', height: '20px', color: '#F0EAAF'}} />
              <span className="fw-bold text-white">EMAIL</span>
            </div>
            <a 
              href="mailto:invest@foresteco-resort.com" 
              className="text-light text-decoration-none d-block"
              style={{
                transition: 'color 0.3s ease',
                fontSize: '1.1rem'
              }}
              onMouseEnter={(e) => e.target.style.color = '#F0EAAF'}
              onMouseLeave={(e) => e.target.style.color = '#F0EAAF'}
            >
              invest@foresteco-resort.com
            </a>
          </div>
          
          <div className="col-12 col-md-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <Phone className="" style={{width: '20px', height: '20px', color: '#F0EAAF'}} />
              <span className="fw-bold text-white">PHONE</span>
            </div>
            <a 
              href="tel:+8801629024441" 
              className="text-light text-decoration-none d-block"
              style={{
                transition: 'color 0.3s ease',
                fontSize: '1.1rem'
              }}
              onMouseEnter={(e) => e.target.style.color = '#F0EAAF'}
              onMouseLeave={(e) => e.target.style.color = '#F0EAAF'}
            >
              +880 1629 024441
            </a>
          </div>
        </div>

        {/* Office Address */}
        <div className="mb-5 mb-md-6 p-4 p-md-5 rounded-3" style={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div className="d-flex align-items-start gap-3">
            <MapPin className="mt-1" style={{width: '24px', height: '24px', color: '#F0EAAF'}} />
            <div>
              <h4 className="text-white fw-bold mb-2">OFFICE ADDRESS</h4>
              <p className="text-light mb-0" style={{lineHeight: '1.6'}}>
                House 31, Road 1, Block A, Niketan Housing Project,<br />
                Gulshan 1, Dhaka.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="row g-4 g-md-5 mb-5 mb-md-6">
          {/* Brand Info */}
          <div className="col-12 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-4 mb-md-5">
              <Leaf className="" style={{width: '32px', height: '32px', color: '#F0EAAF'}} />
              <span className="h3 fw-bold text-white mb-0">
                FOREST ECO RESORT
              </span>
            </div>
            <p className="text-light mb-4 mb-md-5" style={{maxWidth: '500px'}}>
              {t.footer.address}
            </p>

            {/* Newsletter */}
            <div className="mb-4 mb-md-0" style={{maxWidth: '500px'}}>
              <h4 className="text-white fw-bold mb-3 mb-md-4">{t.footer.newsletter.title}</h4>
              <form onSubmit={handleSubscribe} className="d-flex flex-column flex-md-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.footer.newsletter.placeholder}
                  className="form-control flex-grow-1 py-3 px-4 rounded-2"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#FFFFFF'
                  }}
                  required
                />
                <button
                  type="submit"
                  className="btn btn-warning text-dark fw-bold py-3 px-4 rounded-2"
                  style={{
                    backgroundColor: '#F0EAAF',
                    border: 'none'
                  }}
                >
                  {t.footer.newsletter.button}
                </button>
              </form>
              {subscribed && (
                <p className="mt-2 text-success small">
                  Thank you for subscribing!
                </p>
              )}
            </div>
          </div>

          {/* Contact */}
          <div className="col-12 col-md-3">
            <h4 className="text-white fw-bold mb-4 mb-md-5">{t.footer.contact}</h4>
            <ul className="list-unstyled">
              <li className="d-flex align-items-start gap-3 mb-3 mb-md-4">
                <Phone className="mt-1" style={{width: '20px', height: '20px'}} />
                <div>
                  <div>+880 1629 024441</div>
                  <div className="text-light text-opacity-75 small">Investment Desk</div>
                </div>
              </li>
              <li className="d-flex align-items-start gap-3 mb-3 mb-md-4">
                <Mail className="mt-1" style={{width: '20px', height: '20px'}} />
                <div>
                  <div>info@foresteco-resort.com</div>
                  <div className="text-light text-opacity-75 small">General Inquiries</div>
                </div>
              </li>
              <li className="d-flex align-items-start gap-3">
                <Clock className="mt-1" style={{width: '20px', height: '20px'}} />
                <div>
                  <div>Business Hours</div>
                  <div className="text-light text-opacity-75 small">10:00 AM - 6:00 PM</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="col-12 col-md-3">
            <h4 className="text-white fw-bold mb-4 mb-md-5">{t.footer.legal}</h4>
            <ul className="list-unstyled">
              {Object.entries(t.footer.links).map(([key, value]) => (
                <li key={key} className="mb-2 mb-md-3">
                  <a
                    href="#"
                    className="text-light text-decoration-none d-flex align-items-center gap-2"
                    style={{
                      transition: 'color 0.3s ease',
                      opacity: 0.8
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#F0EAAF'}
                    onMouseLeave={(e) => e.target.style.color = '#F0EAAF'}
                  >
                    <ChevronRight className="" style={{width: '12px', height: '12px'}} />
                    {value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partners */}
        <div className="py-4 py-md-5 border-top border-light border-opacity-10 mb-4 mb-md-5">
          <p className="text-uppercase text-light text-opacity-50 small mb-4 mb-md-5 text-center">
            Jointly Managed By
          </p>
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 gap-md-5">
            <div className="text-center">
              <Building className="mb-2" style={{width: '40px', height: '40px', color: '#FFFFFF'}} />
              <div>
                <span className="fw-bold text-white h5 d-block">YESS</span>
                <div className="text-light text-opacity-75 small">COOPERATIVE SOCIETY</div>
              </div>
            </div>
            <div className="d-none d-md-block" style={{width: '1px', height: '48px', backgroundColor: '#6c757d'}}></div>
            <div className="d-md-none w-100" style={{height: '1px', backgroundColor: '#6c757d'}}></div>
            {!nexcentError ? (
              <img
                src="Untitled design.png"
                alt="NEXCENT"
                className="img-fluid"
                style={{height: '40px', opacity: 0.8, transition: 'opacity 0.3s ease'}}
                onError={() => setNexcentError(true)}
              />
            ) : (
              <div className="text-center">
                <Target className="mb-2" style={{width: '40px', height: '40px', color: '#FFFFFF'}} />
                <div>
                  <span className="fw-bold text-white h5 d-block">NEXCENT</span>
                  <div className="text-light text-opacity-75 small">INVESTMENT GROUP</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-light text-opacity-50 small pt-4 pt-md-5 border-top border-light border-opacity-20">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};

// Enhanced CTA Bar
const CTABar = ({ t }) => (
  <section className="py-4 py-md-5" style={{
    background: 'linear-gradient(90deg, #193C26, #2a5238)'
  }}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-7 text-center text-md-start mb-3 mb-md-0">
          <h3 className="h3 h2-md fw-bold text-white mb-2">
            {t.ctaBar.title}
          </h3>
          <p className="text-warning fs-5">{t.ctaBar.desc}</p>
        </div>
        <div className="col-12 col-md-5 d-flex flex-column flex-sm-row justify-content-center gap-3 gap-md-4">
          <button className="btn btn-warning text-dark fw-bold px-4 px-md-5 py-3 d-flex align-items-center justify-content-center gap-2" style={{
            transition: 'all 0.3s ease',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
            transform: 'translateY(0)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.25)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.2)';
          }}
          >
            <Download className="" style={{width: '20px', height: '20px'}} />
            {t.ctaBar.btn}
          </button>
          <button className="btn btn-outline-light fw-bold px-4 px-md-5 py-3" style={{
            transition: 'all 0.3s ease',
            border: '2px solid #FFFFFF',
            color: '#FFFFFF'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#FFFFFF';
            e.target.style.color = '#193C26';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#FFFFFF';
          }}
          >
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  </section>
);

// Main App Component
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  const t = TRANSLATIONS[language];

  useEffect(() => {
    if (isMenuOpen || isJoinModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen, isJoinModalOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@300;400;500&display=swap');
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        html {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        
        body {
          font-family: 'Outfit', sans-serif;
          background-color: #F6F6F7;
          scroll-behavior: smooth;
          overflow-y: scroll;
        }
        
        body::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
          background: transparent;
        }
        
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
          background: transparent;
        }
        
        ::-webkit-scrollbar-corner {
          background: transparent;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Inter', sans-serif;
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
        
        .hover\:scale-102:hover {
          transform: scale(1.02);
        }
        
        .bg-gradient-vertical {
          background: linear-gradient(180deg, #F6F6F7 0%, #FFFFFF 100%);
        }
        
        .navbar-collapse {
          transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), 
                     opacity 0.3s ease,
                     transform 0.3s ease;
        }
      `}</style>
      
      <div className={`min-h-screen ${language === 'bn' ? 'font-bengali' : ''}`}>
        <Navigation
          toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
          isMenuOpen={isMenuOpen}
          language={language}
          setLanguage={setLanguage}
          t={t}
          openJoinModal={() => setIsJoinModalOpen(true)}
        />
        
        <JoinPilotModal 
          isOpen={isJoinModalOpen}
          onClose={() => setIsJoinModalOpen(false)}
          language={language}
        />
        
        <Hero t={t} />
        <ValueProp t={t} />
        <PortfolioGallery t={t} />
        <ROICalculator t={t} language={language} />
        <TiersSection t={t} language={language} />
        <FAQSection t={t} />
        <CTABar t={t} />
        <Footer t={t} />
      </div>
    </>
  );
}

export default App;

