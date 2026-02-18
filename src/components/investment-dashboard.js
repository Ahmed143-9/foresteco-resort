import React, { useState, useEffect } from 'react';
import { Leaf, Shield, TrendingUp, Users, ArrowRight, Menu, X, Calculator, Lock, Phone, Mail, MapPin, Globe, Download, ChevronRight, Star, Award, Home, Clock, Calendar, Building, FileText, Share2, Target, PieChart, BarChart3, DollarSign, Activity } from 'lucide-react';
import reverseLogo from '../images/Forest Eco Resort_Reverse Color Logo.png';
import navLogo from '../images/Forest Eco Resort_Reverse Color Logo.png';

const TRANSLATIONS = {
  en: {
    nav: { 
      vision: "Vision", 
      asset: "Investment Dashboard", 
      membership: "Membership", 
      yield: "Yield", 
      join: "Apply for membership"
    },
    hero: { 
      subtitle: "Eco-Luxury for the Modern Elite", 
      title: "Relax, recharge, and reconnect with nature.", 
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
    vision: {
      title: "Our Vision",
      description: "We believe in creating a sustainable ecosystem where luxury meets nature, providing a sanctuary for those who seek peace, prosperity, and environmental harmony. Forest Eco Resort is more than an investment; it's a commitment to a greener future.",
      hardAsset: "Land Ownership",
      hardAssetDesc: "Your share comes with a registered deed to 1 Decimal of land in Gazipur. This isn't just an investment; it's a tangible asset that appreciates over time.",
      yield: "Operational Yield",
      yieldDesc: "Our Agro-Farm, Resort, and Adventure Zone generate revenue that's shared with investors. You earn while you own.",
      legacy: "Legacy Building",
      legacyDesc: "Build assets that provide lasting value for families, creating a legacy of environmental consciousness and financial security."
    },
    tiers: {
      title: "The 600 Club Tiers",
      membership: "Membership",
      shares: "Shares",
      features: "Features",
      reqAccess: "Request Access",
      mostPopular: "Most Popular",
      bestValue: "Best Value",
      boardroom: "Boardroom"
    },
    calc: {
      title: "ROI Calculator",
      subtitle: "See your potential returns",
      initialInvestment: "Initial Investment",
      holdingPeriod: "Holding Period",
      years: "Years",
      scenario: "Best Case",
      moderate: "Moderate",
      conservative: "Conservative",
      totalReturn: "Total Return",
      netProfit: "Net Profit",
      annualYield: "Annual Yield"
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know"
    },
    cta: {
      title: "Ready to Secure Your Legacy?",
      subtitle: "Join the 600 Club today",
      cta: "Apply for Membership"
    },
    footer: {
      title: "Forest Eco Resort",
      desc: "Creating sustainable wealth through eco-tourism and land ownership.",
      legal: "Legal",
      contact: "Contact Us",
      social: "Follow Us",
      links: {
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        disclaimer: "Disclaimer",
        kyc: "KYC Guidelines"
      }
    },
    about: {
      desc: "Forest Eco Resort is an agro-tourism destination in Bhabanipur, Gazipur, Bangladesh, jointly managed by YESS Cooperative Society and NEXCENT. The resort blends eco-luxury with sustainable living, offering a peaceful retreat for nature lovers. With organic farming, adventure activities, and comfortable accommodations, we promote environmental conservation and community development while redefiving eco-friendly tourism. Experience forest tranquility, farm-to-table dining, and outdoor activities that reconnect you with nature."
    }
  },
  bn: {
    nav: { 
      vision: "রূপকল্প", 
      asset: "বিনিয়োগ ড্যাশবোর্ড", 
      membership: "সদস্যপদ", 
      yield: "বিনিয়োগ ও মুনাফা", 
      join: "সদস্য হন"
    },
    hero: { 
      subtitle: "আধুনিক নির্বাচনের জন্য ইকো-লাক্সারি", 
      title: "বিশ্রাম নিন, পুনরুদ্ধার করুন এবং প্রকৃতির সাথে পুনরায় সংযোগ করুন।", 
      desc: "ভূমি দ্বারা নিরাপদ, উপার্জনের জন্য প্রকৌশল, এবং উত্তরাধিকার জন্য ডিজাইন করা একটি ভগ্নাংশ মালিকানা মডেল।", 
      cta1: "টিয়ার দেখুন", 
      cta2: "কিভাবে কাজ করে",
      stats: {
        investors: "বিনিয়োগকারী",
        landArea: "জমির পরিমাণ",
        returns: "প্রক্ষেপিত রিটার্ন",
        shares: "শেয়ার বাকি"
      }
    },
    value: {
      hardAsset: "হার্ড অ্যাসেট", 
      hardAssetDesc: "শুধুমাত্র কাগজের ইক্যুইটি নয়। আপনি গাজীপুরে 1 ডেসিমল জমির জন্য একটি নিবন্ধিত সাফ কাবলা ডিডি পাবেন। স্থায়ী, উত্তরাধিকারসূত্রে প্রাপ্ত, এবং নিরাপদ।",
      yield: "অপারেশনাল ইয়িল্ড", 
      yieldDesc: "আগ্রো-ফার্ম, রিসোর্ট এবং অ্যাডভেঞ্চার জোন থেকে নেট লাভের 50% উপার্জন করুন। একটি সম্পদ যা নিজের রক্ষণাবেক্ষণের জন্য অর্থ উপার্জন করে।",
      access: "এলিট অ্যাক্সেস", 
      accessDesc: "600 ক্লাবে যোগ দিন। জীবনভর ছুটির সুবিধা, ভোটাধিকার এবং ঢাকার এক ঘন্টার দূরে আপনার পরিবারের জন্য একটি ব্যক্তিগত আশ্রয় আনলক করুন।"
    },
    vision: {
      title: "আমাদের রূপকল্প",
      description: "আমরা এমন একটি টেকসই বাস্তুতন্ত্র তৈরির বিশ্বাস করি যেখানে অস্থায়ীতা প্রকৃতির সাথে মিলিত হয়, যারা শান্তি, সম্প্রসারণ এবং পারিবেশিক সুসংগতি খুঁজছেন তাদের জন্য একটি আশ্রয় স্থল প্রদান করে। ফরেস্ট ইকো রিসোর্ট কেবল একটি বিনিয়োগ নয়; এটি একটি সবুজ ভবিষ্যতের প্রতি প্রতিশ্রুতি।",
      hardAsset: "জমি মালিকানা",
      hardAssetDesc: "আপনার শেয়ারের সাথে গাজীপুরে 1 ডেসিমল জমির একটি নিবন্ধিত ডিডি পাবেন। এটি শুধুমাত্র একটি বিনিয়োগ নয়; এটি একটি স্পর্শকাতর সম্পদ যা সময়ের সাথে মূল্যবৃদ্ধি পায়।",
      yield: "অপারেশনাল ইয়িল্ড",
      yieldDesc: "আমাদের আগ্রো-ফার্ম, রিসোর্ট এবং অ্যাডভেঞ্চার জোন রাজস্ব উত্পন্ন করে যা বিনিয়োগকারীদের সাথে ভাগ করা হয়। আপনি মালিক হিসাবে উপার্জন করেন।",
      legacy: "উত্তরাধিকার নির্মাণ",
      legacyDesc: "পারিবারিক জন্য স্থায়ী মূল্যের সম্পদ নির্মাণ করুন, পারিবেশিক সচেতনতা এবং আর্থিক নিরাপত্তার উত্তরাধিকার তৈরি করুন।"
    },
    tiers: {
      title: "600 ক্লাব টিয়ার",
      membership: "সদস্যপদ",
      shares: "শেয়ার",
      features: "বৈশিষ্ট্য",
      reqAccess: "অ্যাক্সেস অনুরোধ",
      mostPopular: "সবচেয়ে জনপ্রিয়",
      bestValue: "সেরা মূল্য",
      boardroom: "বোর্ডরুম"
    },
    calc: {
      title: "ROI ক্যালকুলেটর",
      subtitle: "আপনার সম্ভাব্য রিটার্ন দেখুন",
      initialInvestment: "প্রাথমিক বিনিয়োগ",
      holdingPeriod: "হোল্ডিং পিরিয়ড",
      years: "বছর",
      scenario: "সেরা ক্ষেত্র",
      moderate: "মাঝারি",
      conservative: "সংরক্ষণশীল",
      totalReturn: "মোট রিটার্ন",
      netProfit: "নেট লাভ",
      annualYield: "বাৎসরিক ইয়িল্ড"
    },
    faq: {
      title: "প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী",
      subtitle: "আপনার যা জানা দরকার"
    },
    cta: {
      title: "আপনার উত্তরাধিকার নিরাপদ করতে প্রস্তুত?",
      subtitle: "আজই 600 ক্লাবে যোগ দিন",
      cta: "সদস্যপদের জন্য আবেদন করুন"
    },
    footer: {
      title: "ফরেস্ট ইকো রিসোর্ট",
      desc: "ইকো-টুরিজম এবং জমি মালিকানার মাধ্যমে টেকসই সম্পদ তৈরি করা।",
      legal: "আইনী",
      contact: "যোগাযোগ করুন",
      social: "আমাদের অনুসরণ করুন",
      links: {
        privacy: "গোপনীয়তা নীতি",
        terms: "পরিষেবার শর্তাবলী",
        disclaimer: "ডিসক্লেইমার",
        kyc: "KYC নির্দেশিকা"
      }
    },
    about: {
      desc: "ফরেস্ট ইকো রিসোর্ট বাংলাদেশের গাজীপুরের ভবানিপুরে একটি এগ্রো-টুরিজম গন্তব্য, যা ইউইএসএস কোঅপারেটিভ সোসাইটি এবং নেক্সসেন্ট কর্তৃক যৌথভাবে পরিচালিত। রিসোর্টটি ইকো-লাক্সারি এবং টেকসই বসবাসের সংমিশ্রণ ঘটায়, প্রকৃতি প্রেমীদের জন্য একটি শান্তিপূর্ণ আশ্রয়স্থল অফার করে। জৈব চাষ, অ্যাডভেঞ্চার ক্রিয়াকলাপ এবং আরামদায়ক আবাসনের মাধ্যমে আমরা পরিবেশ সংরক্ষণ এবং সম্প্রদায় উন্নয়ন প্রচার করি যখন ইকো-বান্ধব পর্যটনকে পুনরায় নির্ধারণ করি। প্রকৃতির শান্তি, ফার্ম-টু-টেবিল ডাইনিং এবং বাইরের ক্রিয়াকলাপের অভিজ্ঞতা যা আপনাকে প্রকৃতির সাথে পুনরায় সংযোগ করে।"
    }
  }
};

const InvestmentDashboard = ({ language, t }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [navBgColor, setNavBgColor] = useState('#F6F6F7');
  const [navTextColor, setNavTextColor] = useState('#193C26');
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [logoError, setLogoError] = useState(false);
  
  const reverseLogo = '/src/images/Forest Eco Resort_Reverse Color Logo.png';
  
  const [dashboardData, setDashboardData] = useState({
    totalInvestment: 0,
    projectedReturns: 0,
    roiPercentage: 0,
    sharesOwned: 0,
    lastUpdated: new Date()
  });

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  };
  
  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.getElementById('home');
      
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const isVisible = rect.top <= 100 && rect.bottom >= 100;
        setIsHeroVisible(isVisible);
        
        if (isVisible) {
          setNavBgColor('#F6F6F7');
          setNavTextColor('#193C26');
        } else {
          setNavBgColor('rgba(246, 246, 247, 0.95)');
          setNavTextColor('#193C26');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Clean up body overflow on unmount
      document.body.style.overflow = 'visible';
    };
  }, []);
  
  // Mock data for the dashboard
  useEffect(() => {
    // Simulate loading dashboard data
    const loadData = () => {
      setDashboardData({
        totalInvestment: 30000000, // 3 crore BDT
        projectedReturns: 45000000, // 4.5 crore BDT
        roiPercentage: 150,
        sharesOwned: 50,
        lastUpdated: new Date()
      });
    };

    loadData();
  }, []);

  // Navigation items
  const navItems = [
    { id: 'overview', label: language === 'en' ? 'Overview' : 'ওভারভিউ', icon: Home },
    { id: 'analytics', label: language === 'en' ? 'Analytics' : 'বিশ্লেষণ', icon: BarChart3 },
    { id: 'returns', label: language === 'en' ? 'Returns' : 'রিটার্ন', icon: TrendingUp },
    { id: 'portfolio', label: language === 'en' ? 'Portfolio' : 'পোর্টফোলিও', icon: FileText },
    { id: 'documents', label: language === 'en' ? 'Documents' : 'ডকুমেন্ট', icon: FileText }
  ];

  return (
    <div className={`min-h-screen ${language === 'bn' ? 'font-bengali' : ''}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap');
        
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
          font-family: 'Lora', serif;
          background-color: #F6F6F7;
          scroll-behavior: smooth;
          overflow-y: auto;
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
          font-family: 'Montserrat', sans-serif;
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
      
      {/* Replicating the exact same Navigation as main site */}
      <nav className="navbar fixed-top navbar-expand-lg" style={{
        backgroundColor: navBgColor,
        padding: isHeroVisible ? '1.5rem 0' : '1rem 0',
        transition: 'all 0.5s ease',
        backdropFilter: isHeroVisible ? 'none' : 'blur(10px)',
        boxShadow: isHeroVisible ? 'none' : '0 4px 20px rgba(0,0,0,0.1)',
        borderBottom: isHeroVisible ? 'none' : '1px solid rgba(240, 234, 175, 0.1)'
      }}>
        <div className="container-fluid px-4 px-lg-5">
          <a href="#home" className="navbar-brand d-flex align-items-center">
            {!logoError ? (
              <img
                src={reverseLogo}
                alt="Forest Eco Resort"
                className="img-fluid"
                style={{ 
                  height: '40px', 
                  transition: 'transform 0.2s',
                  marginRight: '10px'
                }}
                onError={() => setLogoError(true)}
              />
            ) : (
              <Leaf className="me-3" style={{ 
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
              <style>{`
                @media (min-width: 992px) {
                  .navbar-nav .nav-item {
                    margin-left: 0.5rem;
                    margin-right: 0.5rem;
                  }
                  .navbar-nav .nav-link {
                    padding-left: 1rem;
                    padding-right: 1rem;
                  }
                }
              `}</style>
              <li className="nav-item mx-2 mx-lg-1">
                <a 
                  href="#hero" 
                  className="nav-link" 
                  style={{ 
                    color: navTextColor,
                    fontWeight: '500',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                    fontSize: '1.1rem'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(240, 234, 175, 0.1)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  onClick={(e) => {
                    // For anchor links, close the menu after a small delay to allow navigation to complete
                    setTimeout(() => {
                      toggleMenu();
                      // Ensure scrolling is enabled after menu closes
                      setTimeout(() => {
                        document.body.style.overflow = 'visible';
                      }, 50);
                    }, 100);
                  }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item mx-2 mx-lg-1">
                <a 
                  href="#overview" 
                  className="nav-link" 
                  style={{ 
                    color: navTextColor,
                    fontWeight: '500',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                    fontSize: '1.1rem'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(240, 234, 175, 0.1)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  onClick={(e) => {
                    // For anchor links, close the menu after a small delay to allow navigation to complete
                    setTimeout(() => {
                      toggleMenu();
                      // Ensure scrolling is enabled after menu closes
                      setTimeout(() => {
                        document.body.style.overflow = 'visible';
                      }, 50);
                    }, 100);
                  }}
                >
                  Dashboard
                </a>
              </li>
              <li className="nav-item mx-2 mx-lg-1">
                <a 
                  href="#analytics" 
                  className="nav-link" 
                  style={{ 
                    color: navTextColor,
                    fontWeight: '500',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                    fontSize: '1.1rem'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(240, 234, 175, 0.1)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  onClick={(e) => {
                    // For anchor links, close the menu after a small delay to allow navigation to complete
                    setTimeout(() => {
                      toggleMenu();
                      // Ensure scrolling is enabled after menu closes
                      setTimeout(() => {
                        document.body.style.overflow = 'visible';
                      }, 50);
                    }, 100);
                  }}
                >
                  Analytics
                </a>
              </li>
              <li className="nav-item mx-2 mx-lg-1">
                <a 
                  href="#returns" 
                  className="nav-link" 
                  style={{ 
                    color: navTextColor,
                    fontWeight: '500',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                    fontSize: '1.1rem'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(240, 234, 175, 0.1)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  onClick={(e) => {
                    // For anchor links, close the menu after a small delay to allow navigation to complete
                    setTimeout(() => {
                      toggleMenu();
                      // Ensure scrolling is enabled after menu closes
                      setTimeout(() => {
                        document.body.style.overflow = 'visible';
                      }, 50);
                    }, 100);
                  }}
                >
                  Returns
                </a>
              </li>
              <li className="nav-item mx-2 mx-lg-1">
                <a 
                  href="#portfolio" 
                  className="nav-link" 
                  style={{ 
                    color: navTextColor,
                    fontWeight: '500',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                    fontSize: '1.1rem'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(240, 234, 175, 0.1)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  onClick={(e) => {
                    // For anchor links, close the menu after a small delay to allow navigation to complete
                    setTimeout(() => {
                      toggleMenu();
                      // Ensure scrolling is enabled after menu closes
                      setTimeout(() => {
                        document.body.style.overflow = 'visible';
                      }, 50);
                    }, 100);
                  }}
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item mx-2 mx-lg-1">
                <a 
                  href="#documents" 
                  className="nav-link" 
                  style={{ 
                    color: navTextColor,
                    fontWeight: '500',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                    fontSize: '1.1rem'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(240, 234, 175, 0.1)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  onClick={(e) => {
                    // For anchor links, close the menu after a small delay to allow navigation to complete
                    setTimeout(() => {
                      toggleMenu();
                      // Ensure scrolling is enabled after menu closes
                      setTimeout(() => {
                        document.body.style.overflow = 'visible';
                      }, 50);
                    }, 100);
                  }}
                >
                  Documents
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-8 py-md-12" style={{
        background: 'linear-gradient(135deg, #F0EAAF, #e6de9a)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\"500\" height=\"500\" viewBox=\"0 0 500 500\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\" %3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\" opacity=\"0.15\"/%3E%3C/svg%3E")',
          opacity: 0.3,
          zIndex: 1
        }}></div>
        <div className="container-fluid px-4 px-lg-5 position-relative" style={{ zIndex: 2 }}>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 text-center">
              <h1 className="display-4 fw-bold mb-4" style={{ color: '#193C26' }}>
                {language === 'en' ? 'Investment Dashboard' : 'বিনিয়োগ ড্যাশবোর্ড'}
              </h1>
              <p className="lead fs-4 mb-5 text-dark">
                {language === 'en' 
                  ? 'Monitor your investment performance and portfolio analytics' 
                  : 'আপনার বিনিয়োগ কর্মক্ষমতা এবং পোর্টফোলিও বিশ্লেষণ পর্যবেক্ষণ করুন'
                }
              </p>
              
              <div className="row g-4 justify-content-center">
                <div className="col-6 col-md-3">
                  <div className="card border-0 bg-transparent text-center">
                    <div className="display-5 fw-bold" style={{ color: '#193C26' }}>12%</div>
                    <small className="text-muted">Avg. Annual Return</small>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="card border-0 bg-transparent text-center">
                    <div className="display-5 fw-bold" style={{ color: '#193C26' }}>500+</div>
                    <small className="text-muted">Active Investors</small>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="card border-0 bg-transparent text-center">
                    <div className="display-5 fw-bold" style={{ color: '#193C26' }}>250</div>
                    <small className="text-muted">Acres Land</small>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="card border-0 bg-transparent text-center">
                    <div className="display-5 fw-bold" style={{ color: '#193C26' }}>98%</div>
                    <small className="text-muted">Satisfaction</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <main className="container-fluid px-4 px-lg-5 pt-5" style={{ marginTop: '50px' }}>
        <div className="mb-5">
          <h2 className="h2 fw-bold mb-3" style={{ color: '#193C26' }}>
            {language === 'en' ? 'Dashboard Overview' : 'ড্যাশবোর্ড ওভারভিউ'}
          </h2>
          <p className="text-muted">
            {language === 'en' 
              ? 'Track your investments and performance metrics' 
              : 'আপনার বিনিয়োগ এবং কর্মক্ষমতা মেট্রিক্স ট্র্যাক করুন'
            }
          </p>
        </div>

        {/* Stats Cards */}
        <div className="row g-4 g-md-5 mb-5">
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm" style={{
              backgroundColor: '#FFFFFF',
              transition: 'all 0.3s ease',
              borderLeft: '4px solid #193C26'
            }}>
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: 'rgba(25, 60, 38, 0.1)'
                  }}>
                    <DollarSign size={24} style={{ color: '#193C26' }} />
                  </div>
                  <h4 className="mb-0" style={{ color: '#193C26', fontSize: '1rem' }}>{language === 'en' ? 'Total Investment' : 'মোট বিনিয়োগ'}</h4>
                </div>
                <p className="h3 fw-bold mb-0" style={{ color: '#193C26' }}>৳ 3.00 Cr</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm" style={{
              backgroundColor: '#FFFFFF',
              transition: 'all 0.3s ease',
              borderLeft: '4px solid #10B981'
            }}>
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)'
                  }}>
                    <TrendingUp size={24} style={{ color: '#10B981' }} />
                  </div>
                  <h4 className="mb-0" style={{ color: '#193C26', fontSize: '1rem' }}>{language === 'en' ? 'Projected Returns' : 'প্রক্ষেপিত রিটার্ন'}</h4>
                </div>
                <p className="h3 fw-bold mb-0" style={{ color: '#10B981' }}>৳ 4.50 Cr</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm" style={{
              backgroundColor: '#FFFFFF',
              transition: 'all 0.3s ease',
              borderLeft: '4px solid #8B5CF6'
            }}>
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: 'rgba(139, 92, 246, 0.1)'
                  }}>
                    <Activity size={24} style={{ color: '#8B5CF6' }} />
                  </div>
                  <h4 className="mb-0" style={{ color: '#193C26', fontSize: '1rem' }}>{language === 'en' ? 'ROI' : 'ROI'}</h4>
                </div>
                <p className="h3 fw-bold mb-0" style={{ color: '#8B5CF6' }}>150%</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm" style={{
              backgroundColor: '#FFFFFF',
              transition: 'all 0.3s ease',
              borderLeft: '4px solid #F59E0B'
            }}>
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: 'rgba(245, 158, 11, 0.1)'
                  }}>
                    <Share2 size={24} style={{ color: '#F59E0B' }} />
                  </div>
                  <h4 className="mb-0" style={{ color: '#193C26', fontSize: '1rem' }}>{language === 'en' ? 'Shares Owned' : 'অধিকার প্রাপ্ত শেয়ার'}</h4>
                </div>
                <p className="h3 fw-bold mb-0" style={{ color: '#F59E0B' }}>50</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="card border-0 shadow-sm mb-5" style={{
          backgroundColor: '#FFFFFF',
          transition: 'all 0.3s ease',
          border: '1px solid #e9ecef'
        }}>
          <div className="card-header p-0" style={{ borderBottom: '1px solid #e9ecef' }}>
            <ul className="nav nav-tabs" style={{ borderTopLeftRadius: '0.375rem', borderTopRightRadius: '0.375rem' }}>
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li className="nav-item" key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
                      style={{
                        backgroundColor: activeTab === item.id ? '#FFFFFF' : 'transparent',
                        border: 'none',
                        borderBottom: activeTab === item.id ? '3px solid #193C26' : 'none',
                        color: activeTab === item.id ? '#193C26' : '#6c757d',
                        fontWeight: activeTab === item.id ? '600' : '400',
                        padding: '1rem 1.5rem',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Icon size={16} className="me-2" />
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Tab Content */}
          <div className="card-body p-5">
            {activeTab === 'overview' && (
              <div>
                <h3 className="h3 fw-bold mb-4" style={{ color: '#193C26' }}>{language === 'en' ? 'Investment Overview' : 'বিনিয়োগ ওভারভিউ'}</h3>
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="card h-100 border-0 shadow-sm" style={{
                      backgroundColor: '#F8F9FA',
                      transition: 'all 0.3s ease',
                      borderLeft: '4px solid #193C26'
                    }}>
                      <div className="card-body p-4">
                        <h4 className="h5 fw-bold mb-3" style={{ color: '#193C26' }}>{language === 'en' ? 'Performance Summary' : 'কর্মক্ষমতা সারাংশ'}</h4>
                        <p className="text-muted mb-0">
                          {language === 'en' 
                            ? 'Your investment in Forest Eco Resort is showing strong performance with consistent returns.' 
                            : 'ফরেস্ট ইকো রিসোর্টে আপনার বিনিয়োগ ধারাবাহিক রিটার্নের সাথে শক্তিশালী কর্মক্ষমতা প্রদর্শন করছে।'
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="card h-100 border-0 shadow-sm" style={{
                      backgroundColor: '#F8F9FA',
                      transition: 'all 0.3s ease',
                      borderLeft: '4px solid #10B981'
                    }}>
                      <div className="card-body p-4">
                        <h4 className="h5 fw-bold mb-3" style={{ color: '#193C26' }}>{language === 'en' ? 'Next Milestone' : 'পরবর্তী মাইলফলক'}</h4>
                        <p className="text-muted mb-0">
                          {language === 'en' 
                            ? 'Reach 200% ROI milestone by December 2025.' 
                            : 'ডিসেম্বর 2025 এর মধ্যে 200% ROI মাইলফলকে পৌঁছানো।'
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div>
                <h3 className="h3 fw-bold mb-4" style={{ color: '#193C26' }}>{language === 'en' ? 'Analytics & Insights' : 'বিশ্লেষণ ও অন্তর্দৃষ্টি'}</h3>
                <div className="text-center py-5">
                  <div className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-4" style={{ width: '80px', height: '80px' }}>
                    <BarChart3 size={40} style={{ color: '#193C26', opacity: 0.3 }} />
                  </div>
                  <p className="text-muted">
                    {language === 'en' 
                      ? 'Analytics charts and data visualization coming soon.' 
                      : 'শীঘ্রই আসছে বিশ্লেষণ চার্ট এবং ডেটা ভিজ্যুয়ালাইজেশন।'
                    }
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'returns' && (
              <div>
                <h3 className="h3 fw-bold mb-4" style={{ color: '#193C26' }}>{language === 'en' ? 'Returns & Dividends' : 'রিটার্ন এবং লভ্যাংশ'}</h3>
                <div className="text-center py-5">
                  <div className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-4" style={{ width: '80px', height: '80px' }}>
                    <TrendingUp size={40} style={{ color: '#193C26', opacity: 0.3 }} />
                  </div>
                  <p className="text-muted">
                    {language === 'en' 
                      ? 'Return projections and dividend information coming soon.' 
                      : 'রিটার্ন প্রক্ষেপণ এবং লভ্যাংশ তথ্য শীঘ্রই আসছে।'
                    }
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'portfolio' && (
              <div>
                <h3 className="h3 fw-bold mb-4" style={{ color: '#193C26' }}>{language === 'en' ? 'Portfolio Management' : 'পোর্টফোলিও ব্যবস্থাপনা'}</h3>
                <div className="text-center py-5">
                  <div className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-4" style={{ width: '80px', height: '80px' }}>
                    <FileText size={40} style={{ color: '#193C26', opacity: 0.3 }} />
                  </div>
                  <p className="text-muted">
                    {language === 'en' 
                      ? 'Portfolio details and asset allocation coming soon.' 
                      : 'পোর্টফোলিও বিবরণ এবং সম্পদ বন্টন শীঘ্রই আসছে।'
                    }
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'documents' && (
              <div>
                <h3 className="h3 fw-bold mb-4" style={{ color: '#193C26' }}>{language === 'en' ? 'Documents & Reports' : 'ডকুমেন্ট এবং প্রতিবেদন'}</h3>
                <div className="text-center py-5">
                  <div className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-4" style={{ width: '80px', height: '80px' }}>
                    <Download size={40} style={{ color: '#193C26', opacity: 0.3 }} />
                  </div>
                  <p className="text-muted">
                    {language === 'en' 
                      ? 'Investment documents and quarterly reports coming soon.' 
                      : 'বিনিয়োগ ডকুমেন্ট এবং ত্রৈমাসিক প্রতিবেদন শীঘ্রই আসছে।'
                    }
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer matching main site */}
      <footer className="py-5 py-md-6" style={{
        background: 'linear-gradient(to bottom, #FFFFFF, #F6F6F7)'
      }}>
        <div className="container-fluid px-4 px-lg-5">
          <div className="row g-4 g-md-5">
            <div className="col-12 col-md-3">
              <div className="d-flex align-items-center mb-4">
                <Leaf className="me-2" style={{ 
                  color: '#193C26',
                  filter: 'drop-shadow(0 0 2px rgba(240, 234, 175, 0.5))'
                }} />
                <h4 className="fw-bold mb-0" style={{ color: '#193C26' }}>
                  FOREST ECO <span style={{ fontWeight: 'normal' }}>RESORT</span>
                </h4>
              </div>
              <p className="text-muted small">
                {language === 'en' 
                  ? 'Creating sustainable wealth through eco-tourism and land ownership.' 
                  : 'ইকো-টুরিজম এবং জমি মালিকানার মাধ্যমে টেকসই সম্পদ তৈরি করা।'
                }
              </p>
              
              <div className="d-flex gap-3 mt-4">
                <a href="#" className="text-decoration-none" style={{ color: '#193C26', opacity: 0.8 }}>
                  <Globe style={{ width: '20px', height: '20px' }} />
                </a>
                <a href="#" className="text-decoration-none" style={{ color: '#193C26', opacity: 0.8 }}>
                  <Mail style={{ width: '20px', height: '20px' }} />
                </a>
                <a href="#" className="text-decoration-none" style={{ color: '#193C26', opacity: 0.8 }}>
                  <Phone style={{ width: '20px', height: '20px' }} />
                </a>
              </div>
            </div>
            
            <div className="col-12 col-md-3">
              <h5 className="fw-bold mb-4" style={{ color: '#193C26' }}>{t.footer.contact}</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <div className="d-flex align-items-center gap-2">
                    <MapPin size={16} style={{ color: '#193C26', opacity: 0.8 }} />
                    <span className="text-muted small">Bhabanipur, Gazipur, Bangladesh</span>
                  </div>
                </li>
                <li className="mb-2">
                  <div className="d-flex align-items-center gap-2">
                    <Phone size={16} style={{ color: '#193C26', opacity: 0.8 }} />
                    <span className="text-muted small">+880-XXX-XXXXXX</span>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center gap-2">
                    <Mail size={16} style={{ color: '#193C26', opacity: 0.8 }} />
                    <span className="text-muted small">info@forestecoresort.com</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="col-12 col-md-3">
              <h5 className="fw-bold mb-4" style={{ color: '#193C26' }}>{t.footer.legal}</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a 
                    href="#" 
                    className="text-decoration-none text-muted d-flex align-items-center gap-2"
                    style={{
                      transition: 'color 0.3s ease',
                      opacity: 0.8
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#193C26'}
                    onMouseLeave={(e) => e.target.style.color = '#6c757d'}
                  >
                    <ChevronRight className="" style={{width: '12px', height: '12px'}} />
                    {t.footer.links.privacy}
                  </a>
                </li>
                <li className="mb-2">
                  <a 
                    href="#" 
                    className="text-decoration-none text-muted d-flex align-items-center gap-2"
                    style={{
                      transition: 'color 0.3s ease',
                      opacity: 0.8
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#193C26'}
                    onMouseLeave={(e) => e.target.style.color = '#6c757d'}
                  >
                    <ChevronRight className="" style={{width: '12px', height: '12px'}} />
                    {t.footer.links.terms}
                  </a>
                </li>
                <li className="mb-2">
                  <a 
                    href="#" 
                    className="text-decoration-none text-muted d-flex align-items-center gap-2"
                    style={{
                      transition: 'color 0.3s ease',
                      opacity: 0.8
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#193C26'}
                    onMouseLeave={(e) => e.target.style.color = '#6c757d'}
                  >
                    <ChevronRight className="" style={{width: '12px', height: '12px'}} />
                    {t.footer.links.disclaimer}
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-decoration-none text-muted d-flex align-items-center gap-2"
                    style={{
                      transition: 'color 0.3s ease',
                      opacity: 0.8
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#193C26'}
                    onMouseLeave={(e) => e.target.style.color = '#6c757d'}
                  >
                    <ChevronRight className="" style={{width: '12px', height: '12px'}} />
                    {t.footer.links.kyc}
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="col-12 col-md-3">
              <h5 className="fw-bold mb-4" style={{ color: '#193C26' }}>{t.footer.social}</h5>
              <p className="text-muted small mb-4">
                {language === 'en' 
                  ? 'Stay connected with us for the latest updates and offers.' 
                  : 'সর্বশেষ আপডেট এবং অফারগুলির জন্য আমাদের সাথে সংযুক্ত থাকুন।'
                }
              </p>
              
              <form onSubmit={(e) => e.preventDefault()} className="mb-4">
                <div className="input-group">
                  <input 
                    type="email" 
                    className="form-control border-0 py-2 px-3"
                    placeholder={language === 'en' ? 'Enter your email' : 'আপনার ইমেইল লিখুন'}
                    style={{
                      backgroundColor: 'rgba(25, 60, 38, 0.05)',
                      border: '1px solid rgba(25, 60, 38, 0.1) !important',
                      borderRadius: '30px',
                      fontSize: '0.9rem'
                    }}
                  />
                  <button 
                    className="btn text-white py-2 px-4" 
                    type="submit"
                    style={{
                      backgroundColor: '#193C26',
                      borderRadius: '30px',
                      border: 'none',
                      fontSize: '0.9rem'
                    }}
                  >
                    {language === 'en' ? 'Subscribe' : 'সাবস্ক্রাইব'}
                  </button>
                </div>
              </form>
              
              <div className="d-flex gap-3">
                <button className="btn btn-outline-secondary border-0 p-0" style={{ width: '36px', height: '36px' }}>
                  <Share2 size={18} style={{ color: '#193C26' }} />
                </button>
                <button className="btn btn-outline-secondary border-0 p-0" style={{ width: '36px', height: '36px' }}>
                  <Globe size={18} style={{ color: '#193C26' }} />
                </button>
                <button className="btn btn-outline-secondary border-0 p-0" style={{ width: '36px', height: '36px' }}>
                  <FileText size={18} style={{ color: '#193C26' }} />
                </button>
              </div>
            </div>
          </div>
          
          <hr className="my-4 my-md-5" style={{ borderColor: 'rgba(25, 60, 38, 0.1)' }} />
          
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-center text-md-start">
              <p className="text-muted small mb-0">
                &copy; {new Date().getFullYear()} Forest Eco Resort. {language === 'en' ? 'All rights reserved.' : 'সমস্ত অধিকার সংরক্ষিত।'}
              </p>
            </div>
            <div className="col-12 col-md-6 text-center text-md-end mt-3 mt-md-0">
              <div className="d-flex justify-content-center justify-content-md-end gap-4">
                <a href="#" className="text-decoration-none text-muted" style={{ fontSize: '0.8rem' }}>
                  {language === 'en' ? 'Terms of Service' : 'পরিষেবার শর্তাবলী'}
                </a>
                <a href="#" className="text-decoration-none text-muted" style={{ fontSize: '0.8rem' }}>
                  {language === 'en' ? 'Privacy Policy' : 'গোপনীয়তা নীতি'}
                </a>
                <a href="#" className="text-decoration-none text-muted" style={{ fontSize: '0.8rem' }}>
                  {language === 'en' ? 'Cookie Policy' : 'কুকি নীতি'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InvestmentDashboard;