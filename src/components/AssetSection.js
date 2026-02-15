import React, { useState, useEffect, useRef } from 'react';
import { Landmark, Hotel, Sprout, ShieldCheck, Map, ArrowRight, Globe, Tent, Trees, Sparkles, Award, Gem, Crown } from 'lucide-react';

const AssetSection = () => {
  const [language, setLanguage] = useState('en');
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: '50px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const colors = {
    phthaloGreen: "#193C26",
    paleGoldenrod: "#F0EAAF",
    eerieBlack: "#191819",
    angoraWhite: "#F6F6F7"
  };

  const content = {
    en: {
      sectionTitle: "The Asset Structure",
      sectionSubtitle: "Tangible. Secured. Productive.",
      desc: "Our asset model is built on physical security. Your investment is backed by registered land and revenue-generating infrastructure that hedges against inflation and market volatility.",
      visualHeading: "The Triple-Engine Asset Base",
      assets: [
        {
          title: "The Land",
          stat: "32.84 Bighas",
          detail: "Registered Saf Kabla land in the high-growth Bhabanipur-Gazipur corridor. A tangible 'Capital Floor'.",
          icon: <Map className="w-8 h-8" />
        },
        {
          title: "Hospitality Infra",
          stat: "36 Rooms + 400 Pax",
          detail: "A 6-story guest house and a multipurpose hall designed for the premium corporate market.",
          icon: <Hotel className="w-8 h-8" />
        },
        {
          title: "The Revenue Engine",
          stat: "10 Bigha Agro-Zone",
          detail: "High-density intercropping of BARI Malta-1 and Dragon Fruit, projected for long-term operational yield.",
          icon: <Sprout className="w-8 h-8" />
        },
        {
          title: "The Legal Shield",
          stat: "99-Year Waiver",
          detail: "Indivisibility of Utility structure prevents land fragmentation, protecting commercial value.",
          icon: <ShieldCheck className="w-8 h-8" />
        }
      ],
      showcase: [
        {
          label: "Lifestyle Focus",
          title: "The Forest Lodge",
          desc: "A signature 6-story sanctuary featuring 36 premium rooms, blending modern luxury with forest serenity.",
          image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200",
          tag: "Hospitality Pillar"
        },
        {
          label: "Event Focus",
          title: "The Gathering Grounds",
          desc: "400-pax Multipurpose Complex and an iconic Ferris Wheel offering panoramic views of the Gazipur canopy.",
          image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
          tag: "MICE & Recreation"
        },
        {
          label: "Yield Focus",
          title: "The Auspicious Zone",
          desc: "Our high-yield agro-engine: home to 1,100 BARI Malta-1 trees and 2,200 Dragon Fruit pillars.",
          image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=1200",
          tag: "The Revenue Driver"
        }
      ],
      masterPlanHeading: "Sustainable Prosperity",
      masterPlanDesc: "We believe in gradual, phased development. Every Taka of your investment is secured within the embrace of the soil—completely free from the shadow of bank debt.",
      masterPlanStat1: "100% Equity Funded",
      masterPlanStat2: "Zero Debt Liability",
      legalNote: "All assets are debt-free and equity-funded for absolute security."
    },
    bn: {
      sectionTitle: "বিনিয়োগের নিষ্কণ্টক সুরক্ষা",
      sectionSubtitle: "আপনার আমানত। আমাদের দায়বদ্ধতা।",
      desc: "আমাদের সম্পদ মডেলটি আপনার বিনিয়োগের নিরাপত্তার কথা মাথায় রেখেই তৈরি। এখানে প্রতিটি শেয়ারের বিপরীতে রয়েছে নিষ্কণ্টক জমি এবং লাভজনক অবকাঠামো, যা আপনার পুঁজিকে রাখে সম্পূর্ণ ঝুঁকিমুক্ত।",
      visualHeading: "বিনিয়োগের বহুমুখী সমৃদ্ধি",
      assets: [
        {
          title: "জমির স্থায়ী নিশ্চয়তা",
          stat: "৩২.৮৪ বিঘা জমি",
          detail: "গাজীপুরের বুকে আপনার এক টুকরো নিজস্ব ঠিকানা; যা সাফ কবলা দলিলে সুরক্ষিত এবং সময়ের সাথে ক্রমবর্ধমান।",
          icon: <Map className="w-8 h-8" />
        },
        {
          title: "আভিজাত্য ও আতিথেয়তা",
          stat: "৩৬ রুম + ৪০০ আসন",
          detail: "আধুনিক ফিটিংস সমৃদ্ধ গেস্ট হাউস এবং বিশাল কনভেনশন হল, যা প্রিমিয়াম ইভেন্ট থেকে আয়ের স্থায়ী উৎস।",
          icon: <Hotel className="w-8 h-8" />
        },
        {
          title: "মাটির মায়া ও ফলন",
          stat: "১০ বিঘা অ্যাগ্রো-জোন",
          detail: "উচ্চ ফলনশীল বারি মাল্টা-১ এবং ড্রাগন ফলের বাগান, যা আপনাকে দেবে বছরজুড়ে নিশ্চিত 'অপারেশনাল ইল্ড'।",
          icon: <Sprout className="w-8 h-8" />
        },
        {
          title: "মালিকানার অখণ্ডতা",
          stat: "৯৯ বছরের নিশ্চয়তা",
          detail: "জমির বিভাজন রোধকারী আইনি সুরক্ষা, যা আপনার এই সম্পদের বাণিজ্যিক মূল্য প্রজন্মের পর প্রজন্ম অক্ষুণ্ণ রাখবে।",
          icon: <ShieldCheck className="w-8 h-8" />
        }
      ],
      showcase: [
        {
          label: "আভিজাত্য ও জীবনধারা",
          title: "দ্য ফরেস্ট লজ",
          desc: "বনের নিস্তব্ধতায় আধুনিকতার ছোঁয়া—৩৬টি প্রিমিয়াম রুম নিয়ে আমাদের এই সিগনেচার গেস্ট হাউস।",
          image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200",
          tag: "হসপিটালিটি পিলার"
        },
        {
          label: "উৎসব ও ইভেন্ট",
          title: "দ্য গ্যাদারিং গ্রাউন্ডস",
          desc: "৪০০ আসনের বিশাল কমপ্লেক্স এবং দৃষ্টিনন্দন নাগরদোলা, যা পর্যটকদের জন্য এক অনন্য আকর্ষণ।",
          image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
          tag: "ইভেন্ট ও বিনোদন"
        },
        {
          label: "নিশ্চিত মুনাফা",
          title: "দ্য অসপিশাস জোন",
          desc: "আমাদের অর্থনীতির মূল চালিকাশক্তি: ১,১০০টি মাল্টা গাছ এবং ২,২০০টি ড্রাগন ফলের পিলারে সাজানো বাগান।",
          image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=1200",
          tag: "আয়ের মূল উৎস"
        }
      ],
      masterPlanHeading: "টেকসই সমৃদ্ধি",
      masterPlanDesc: "আমরা ধাপে ধাপে উন্নয়নে বিশ্বাসী। আপনার বিনিয়োগের প্রতিটি টাকা এখানে মাটির মায়ায় নিরাপদ—যেখানে ব্যাংক ঋণের কোনো ছায়া নেই।",
      masterPlanStat1: "১০০% নিজস্ব অর্থায়ন",
      masterPlanStat2: "ঋণমুক্ত প্রজেক্টের নিশ্চয়তা",
      legalNote: "আমাদের প্রতিটি সম্পদ নিজস্ব পুঁজি দিয়ে গড়া, যেখানে ব্যাংক ঋণের কোনো ঝুঁকি বা দায়বদ্ধতা নেই।"
    }
  };

  const current = content[language];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');
        
        .asset-section {
          font-family: ${language === 'bn' ? "'Hind Siliguri', sans-serif" : "'Inter', sans-serif"};
          background: ${colors.phthaloGreen};
          color: ${colors.angoraWhite};
          position: relative;
          overflow: hidden;
        }

        /* Premium Ambient Effects */
        .premium-glow {
          position: absolute;
          width: 80vw;
          height: 80vw;
          background: radial-gradient(circle at center, ${colors.paleGoldenrod}08 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(100px);
          animation: premiumFloat 25s infinite alternate ease-in-out;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes premiumFloat {
          0% { transform: translate(-15%, -15%) scale(1); opacity: 0.3; }
          100% { transform: translate(15%, 15%) scale(1.3); opacity: 0.5; }
        }

        .gold-dust {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(${colors.paleGoldenrod}15 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
          opacity: 0.3;
          animation: dustFloat 60s linear infinite;
        }

        @keyframes dustFloat {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
        }

        /* Premium Reveal Animation */
        .premium-reveal {
          opacity: 0;
          transform: translateY(40px) scale(0.98);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .premium-reveal.active {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.2s; }
        .delay-3 { transition-delay: 0.3s; }
        .delay-4 { transition-delay: 0.4s; }

        /* Premium Typography */
        .premium-serif {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .premium-gold-text {
          background: linear-gradient(135deg, ${colors.paleGoldenrod} 0%, #FFFFFF 50%, ${colors.paleGoldenrod} 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% auto;
          animation: premiumShine 4s linear infinite;
        }

        @keyframes premiumShine {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }

        /* Premium Cards */
        .premium-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(240, 234, 175, 0.1);
          backdrop-filter: blur(12px);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .premium-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(240, 234, 175, 0.1), transparent);
          transition: left 0.8s ease;
        }

        .premium-card:hover::before {
          left: 100%;
        }

        .premium-card:hover {
          border-color: ${colors.paleGoldenrod};
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 30px 50px -20px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(240, 234, 175, 0.2);
        }

        .premium-icon-wrapper {
          background: linear-gradient(135deg, ${colors.paleGoldenrod}20, ${colors.paleGoldenrod}05);
          border: 1px solid ${colors.paleGoldenrod}30;
          color: ${colors.paleGoldenrod};
          transition: all 0.5s ease;
          position: relative;
          overflow: hidden;
        }

        .premium-icon-wrapper::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, ${colors.paleGoldenrod}40, transparent 70%);
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .premium-card:hover .premium-icon-wrapper::after {
          opacity: 1;
        }

        .premium-card:hover .premium-icon-wrapper {
          transform: rotateY(180deg) scale(1.1);
          background: ${colors.paleGoldenrod};
          color: ${colors.phthaloGreen};
        }

        .premium-stat {
          color: ${colors.paleGoldenrod};
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          position: relative;
          display: inline-block;
        }

        .premium-stat::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, ${colors.paleGoldenrod}, transparent);
          transition: width 0.4s ease;
        }

        .premium-card:hover .premium-stat::after {
          width: 100%;
        }

        /* Premium Divider */
        .premium-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, ${colors.paleGoldenrod}80, ${colors.paleGoldenrod}, ${colors.paleGoldenrod}80, transparent);
          width: 200px;
          margin: 1.5rem auto;
          transition: width 1s ease;
        }

        /* Premium Panels */
        .premium-panel {
          border-radius: 48px;
          overflow: hidden;
          position: relative;
          height: 550px;
          border: 1px solid rgba(240, 234, 175, 0.1);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .premium-panel:hover {
          border-color: ${colors.paleGoldenrod}60;
          box-shadow: 0 40px 70px -20px rgba(0, 0, 0, 0.6);
        }

        .premium-panel img {
          transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .premium-panel:hover img {
          transform: scale(1.1);
        }

        .premium-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, ${colors.phthaloGreen}F2 0%, ${colors.phthaloGreen}80 40%, transparent 100%);
          transition: all 0.5s ease;
        }

        .premium-panel:hover .premium-overlay {
          background: linear-gradient(to top, ${colors.phthaloGreen} 0%, ${colors.phthaloGreen}CC 40%, transparent 100%);
        }

        .premium-tag {
          background: ${colors.paleGoldenrod};
          color: ${colors.phthaloGreen};
          font-size: 0.625rem;
          font-weight: 700;
          padding: 0.375rem 1rem;
          border-radius: 30px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.3);
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
        }

        /* Premium Button */
        .premium-button {
          background: linear-gradient(135deg, ${colors.paleGoldenrod}, #FFFFFF);
          color: ${colors.phthaloGreen};
          padding: 1.25rem 2.5rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          transition: all 0.4s ease;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.4);
        }

        .premium-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.6s ease;
        }

        .premium-button:hover::before {
          left: 100%;
        }

        .premium-button:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 30px 40px -10px rgba(0, 0, 0, 0.5);
        }

        /* Premium Footer */
        .premium-footer-badge {
          background: rgba(240, 234, 175, 0.05);
          border: 1px solid rgba(240, 234, 175, 0.1);
          transition: all 0.3s ease;
        }

        .premium-footer-badge:hover {
          background: rgba(240, 234, 175, 0.1);
          border-color: ${colors.paleGoldenrod}40;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: ${colors.phthaloGreen};
        }

        ::-webkit-scrollbar-thumb {
          background: ${colors.paleGoldenrod}40;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: ${colors.paleGoldenrod}60;
        }
      `}</style>

      <section 
        id="asset" 
        ref={sectionRef} 
        className="asset-section py-28 lg:py-36 px-6"
      >
        {/* Premium Ambient Background */}
        <div className="premium-glow top-0 left-0"></div>
        <div className="premium-glow bottom-0 right-0" style={{ animationDelay: '-12s' }}></div>
        <div className="gold-dust"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header with Premium Styling */}
          <div className={`text-center mb-24 relative premium-reveal ${isVisible ? 'active' : ''}`}>
            {/* Language Toggle - Premium Version */}
            <div className="absolute -top-12 right-0">
              <button 
                onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
                className="flex items-center gap-3 bg-white/5 border border-[#F0EAAF]/20 px-6 py-3 rounded-full text-[11px] font-bold text-[#F0EAAF] hover:bg-white/10 transition-all duration-500 uppercase tracking-widest backdrop-blur-sm"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? 'বাংলা' : 'English'}</span>
                <Crown className="w-3.5 h-3.5 opacity-50" />
              </button>
            </div>

            <div className="inline-flex items-center gap-3 mb-6">
              <Award className="w-5 h-5 text-[#F0EAAF]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F0EAAF]/80">
                {current.sectionSubtitle}
              </span>
              <Award className="w-5 h-5 text-[#F0EAAF]" />
            </div>

            <h2 className="premium-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 premium-gold-text">
              {current.sectionTitle}
            </h2>
            
            <div className={`premium-divider ${isVisible ? '!w-[400px]' : ''}`}></div>
            
            <p className="text-lg text-[#F0EAAF]/70 max-w-3xl mx-auto leading-relaxed font-light">
              {current.desc}
            </p>
          </div>

          {/* Premium Asset Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            {current.assets.map((asset, idx) => (
              <div 
                key={idx} 
                className={`premium-card p-8 rounded-[48px] flex flex-col items-center text-center premium-reveal ${isVisible ? 'active' : ''} delay-${idx + 1}`}
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="premium-icon-wrapper w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                  {asset.icon}
                </div>
                
                <h3 className="text-sm font-bold mb-2 uppercase tracking-wider text-white/90">
                  {asset.title}
                </h3>
                
                <div className="premium-stat mb-4">
                  {asset.stat}
                </div>
                
                <p className="text-xs text-white/40 leading-relaxed font-light">
                  {asset.detail}
                </p>

                {activeCard === idx && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <Gem className="w-4 h-4 text-[#F0EAAF] animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Premium Visual Showcase */}
          <div className="mb-24">
            <div className={`flex items-center gap-4 mb-16 premium-reveal ${isVisible ? 'active' : ''}`}>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-[#F0EAAF]" />
                <h3 className="premium-serif text-3xl font-bold tracking-wide premium-gold-text">
                  {current.visualHeading}
                </h3>
                <Sparkles className="w-5 h-5 text-[#F0EAAF]" />
              </div>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {current.showcase.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`premium-panel group premium-reveal ${isVisible ? 'active' : ''} delay-${idx + 1}`}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="premium-overlay">
                    <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
                      <div className="mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                        <div className="text-[10px] text-[#F0EAAF] uppercase font-bold tracking-[0.2em] mb-2 opacity-80">
                          {item.label}
                        </div>
                        <span className="premium-tag">
                          <Award className="w-3 h-3" />
                          {item.tag}
                        </span>
                      </div>
                      
                      <h4 className="premium-serif text-2xl lg:text-3xl font-bold text-white mb-3 transform group-hover:-translate-y-2 transition-transform duration-500 delay-75">
                        {item.title}
                      </h4>
                      
                      <p className="text-white/60 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        {item.desc}
                      </p>
                      
                      <div className="flex items-center gap-2 text-[#F0EAAF] text-xs font-bold tracking-widest uppercase transform group-hover:-translate-y-1 transition-transform duration-500">
                        <span>{language === 'en' ? 'View Details' : 'বিস্তারিত দেখুন'}</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Master Plan Section */}
          <div className={`mt-12 bg-white/5 backdrop-blur-xl p-12 lg:p-20 rounded-[80px] border border-white/10 relative overflow-hidden premium-reveal ${isVisible ? 'active' : ''}`}>
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F0EAAF]/5 to-transparent"></div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="w-5 h-5 text-[#F0EAAF]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F0EAAF]/70">
                    {language === 'en' ? 'Legacy Built' : 'ঐতিহ্য গড়ার প্রতিশ্রুতি'}
                  </span>
                </div>
                
                <h3 className="premium-serif text-4xl lg:text-5xl font-bold mb-6 premium-gold-text">
                  {current.masterPlanHeading}
                </h3>
                
                <p className="text-white/50 mb-10 leading-relaxed max-w-md text-lg">
                  {current.masterPlanDesc}
                </p>
                
                <div className="flex flex-wrap gap-6">
                  <div className="bg-white/5 px-8 py-6 rounded-[40px] border border-white/10 hover:border-[#F0EAAF]/30 transition-all duration-500">
                    <div className="text-[10px] uppercase tracking-widest text-[#F0EAAF]/70 mb-2">Financial Integrity</div>
                    <div className="text-2xl font-bold premium-serif text-white">{current.masterPlanStat1}</div>
                  </div>
                  
                  <div className="bg-white/5 px-8 py-6 rounded-[40px] border border-white/10 hover:border-[#F0EAAF]/30 transition-all duration-500">
                    <div className="text-[10px] uppercase tracking-widest text-[#F0EAAF]/70 mb-2">Risk Mitigation</div>
                    <div className="text-2xl font-bold premium-serif text-white">{current.masterPlanStat2}</div>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <button className="premium-button group">
                  <span className="relative z-10 flex items-center gap-3">
                    {language === 'en' ? 'View Infrastructure Roadmap' : 'অবকাঠামো উন্নয়ন পরিকল্পনা'}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
            
            {/* Premium Decorative Icon */}
            <Tent className="absolute -bottom-16 -right-16 w-80 h-80 text-white/5 rotate-12 animate-[spin_50s_linear_infinite]" />
          </div>

          {/* Premium Security Footer */}
          <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/10 pt-12">
            <div className="flex items-center gap-4 premium-footer-badge px-6 py-3 rounded-full">
              <div className="p-2 rounded-full bg-[#F0EAAF]/20">
                <ShieldCheck className="w-5 h-5 text-[#F0EAAF]" />
              </div>
              <p className="text-sm text-[#F0EAAF]/80 font-medium">
                {current.legalNote}
              </p>
            </div>
            
            <div className="flex items-center gap-8">
              {[
                { icon: <Gem className="w-3 h-3" />, text: 'Saf Kabla Secured' },
                { icon: <Crown className="w-3 h-3" />, text: 'Equity Funded' },
                { icon: <Award className="w-3 h-3" />, text: 'Agro-tourism Ready' }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-2 text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-white/30 hover:text-[#F0EAAF]/70 transition-all duration-300 cursor-default group"
                >
                  <span className="group-hover:scale-110 transition-transform">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AssetSection;