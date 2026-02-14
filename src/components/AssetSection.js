import React, { useState, useEffect, useRef } from 'react';
import { Landmark, Hotel, Sprout, ShieldCheck, Map, ArrowRight, Globe, Tent, Trees, Sparkles } from 'lucide-react';

const AssetSection = () => {
  const [language, setLanguage] = useState('en');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: '50px' }
    );
    
    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');
        
        .asset-section {
          font-family: ${language === 'bn' ? "'Hind Siliguri', sans-serif" : "'Inter', sans-serif"};
          background: ${colors.phthaloGreen};
          color: ${colors.angoraWhite};
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        /* Ambient Motion Graphic */
        .ambient-glow {
          position: absolute;
          width: 60vw;
          height: 60vw;
          background: radial-gradient(circle, rgba(240, 234, 175, 0.03) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(80px);
          animation: drift 20s infinite alternate ease-in-out;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes drift {
          0% { transform: translate(-10%, -10%) scale(1); opacity: 0.5; }
          100% { transform: translate(10%, 10%) scale(1.2); opacity: 0.8; }
        }

        /* Staggered Reveal */
        .reveal-node {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .reveal-node.active {
          opacity: 1;
          transform: translateY(0);
        }

        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.2s; }
        .delay-3 { transition-delay: 0.3s; }
        .delay-4 { transition-delay: 0.4s; }

        .heading-serif {
          font-family: 'Playfair Display', serif;
          font-weight: 600;
          letter-spacing: -0.02em;
        }

        /* Asset Card */
        .asset-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(240, 234, 175, 0.1);
          backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          border-radius: 40px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          height: 100%;
        }

        .asset-card:hover {
          background: rgba(240, 234, 175, 0.07);
          border-color: ${colors.paleGoldenrod};
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .asset-icon-box {
          background: ${colors.paleGoldenrod};
          color: ${colors.phthaloGreen};
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          transition: transform 0.5s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .asset-card:hover .asset-icon-box {
          transform: rotateY(180deg);
        }

        .stat-highlight {
          color: ${colors.paleGoldenrod};
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          position: relative;
          display: inline-block;
        }

        .stat-highlight::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: ${colors.paleGoldenrod};
          transition: width 0.4s ease;
        }

        .asset-card:hover .stat-highlight::after {
          width: 100%;
        }

        /* Visual Panel */
        .visual-panel {
          border-radius: 32px;
          overflow: hidden;
          position: relative;
          height: 400px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        @media (min-width: 1024px) {
          .visual-panel {
            height: 480px;
          }
        }

        .visual-panel:hover {
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
          border-color: ${colors.paleGoldenrod}40;
        }

        .visual-panel img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .visual-panel:hover img {
          transform: scale(1.08);
        }

        .visual-content-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(25, 60, 38, 0.95) 0%, rgba(25, 60, 38, 0.4) 60%, transparent 100%);
          transition: background 0.4s ease;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2.5rem;
        }

        .visual-panel:hover .visual-content-overlay {
          background: linear-gradient(to top, rgba(25, 60, 38, 1) 0%, rgba(25, 60, 38, 0.6) 60%, transparent 100%);
        }

        .tag-pill {
          background: ${colors.paleGoldenrod};
          color: ${colors.phthaloGreen};
          font-size: 0.625rem;
          font-weight: 700;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: inline-block;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .divider-accent {
          height: 1px;
          background: linear-gradient(90deg, transparent, ${colors.paleGoldenrod}, transparent);
          width: 200px;
          margin: 1rem auto 2rem;
          transition: width 1s ease;
        }

        .shimmer-text {
          background: linear-gradient(90deg, ${colors.paleGoldenrod} 0%, #ffffff 50%, ${colors.paleGoldenrod} 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s infinite linear;
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        /* Utility Classes */
        .transition-base {
          transition: all 0.3s ease;
        }

        .glass-effect {
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
      `}</style>

      <section 
        id="asset" 
        ref={sectionRef} 
        className="asset-section py-20 lg:py-28 px-4 md:px-8"
        aria-labelledby="asset-section-title"
      >
        {/* Ambient Background Elements */}
        <div className="ambient-glow top-0 left-0" aria-hidden="true" />
        <div className="ambient-glow bottom-0 right-0" style={{ animationDelay: '-10s' }} aria-hidden="true" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className={`text-center mb-16 md:mb-20 relative reveal-node ${isVisible ? 'active' : ''}`}>
            {/* Language Toggle */}
            <div className="absolute -top-12 md:-top-10 right-0">
              <button 
                onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
                className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full text-[10px] font-bold text-[#F0EAAF] hover:bg-white/10 transition-all duration-300 uppercase tracking-widest"
                aria-label={`Switch to ${language === 'en' ? 'Bengali' : 'English'}`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'বাংলা' : 'English'}</span>
              </button>
            </div>

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#F0EAAF]/70 mb-4 block">
              {current.sectionSubtitle}
            </span>
            
            <h2 id="asset-section-title" className="heading-serif text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              {current.sectionTitle}
            </h2>
            
            <div className={`divider-accent ${isVisible ? 'w-[250px] md:w-[300px]' : 'w-0'}`}></div>
            
            <p className="text-base md:text-lg text-[#F0EAAF]/60 max-w-2xl mx-auto leading-relaxed mt-6">
              {current.desc}
            </p>
          </div>

          {/* Core Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24">
            {current.assets.map((asset, idx) => (
              <div 
                key={idx} 
                className={`asset-card reveal-node ${isVisible ? 'active' : ''} delay-${idx + 1}`}
              >
                <div className="asset-icon-box">
                  {asset.icon}
                </div>
                <h3 className="text-base font-bold mb-1 uppercase tracking-wider">{asset.title}</h3>
                <div className="stat-highlight">
                  {asset.stat}
                </div>
                <p className="text-[12px] text-white/50 leading-relaxed font-light">
                  {asset.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Visual Showcase Gallery */}
          <div className="mb-12 md:mb-16">
            <div className={`flex items-center gap-4 mb-8 md:mb-10 reveal-node ${isVisible ? 'active' : ''}`}>
              <div className="h-px flex-1 bg-white/10" aria-hidden="true" />
              <h3 className="heading-serif text-2xl font-bold tracking-wide italic shimmer-text uppercase">
                {current.visualHeading}
              </h3>
              <div className="h-px flex-1 bg-white/10" aria-hidden="true" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {current.showcase.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`visual-panel group reveal-node ${isVisible ? 'active' : ''} delay-${idx + 1}`}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                  <div className="visual-content-overlay">
                    <div className="mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                      <div className="text-[10px] text-[#F0EAAF] uppercase font-bold tracking-[0.2em] mb-1 opacity-70">
                        {item.label}
                      </div>
                      <span className="tag-pill">{item.tag}</span>
                    </div>
                    
                    <h4 className="heading-serif text-2xl lg:text-3xl font-bold text-white mb-3 transform group-hover:-translate-y-2 transition-transform duration-500 delay-75">
                      {item.title}
                    </h4>
                    
                    <p className="text-white/70 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      {item.desc}
                    </p>
                    
                    <div className="flex items-center gap-2 text-[#F0EAAF] text-xs font-bold tracking-widest uppercase transform group-hover:-translate-y-1 transition-transform duration-500">
                      <span>{language === 'en' ? 'View Details' : 'বিস্তারিত দেখুন'}</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Master Plan Section */}
          <div className={`mt-8 md:mt-12 bg-white/5 p-8 md:p-12 lg:p-14 rounded-[40px] md:rounded-[60px] border border-white/5 relative overflow-hidden reveal-node ${isVisible ? 'active' : ''}`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h3 className="heading-serif text-3xl font-bold mb-6">{current.masterPlanHeading}</h3>
                <p className="text-white/60 mb-8 leading-relaxed max-w-md">
                  {current.masterPlanDesc}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="bg-[#193C26] px-6 py-4 rounded-3xl border border-white/10 text-center hover:bg-white/5 transition-colors duration-300">
                    <div className="text-[10px] uppercase tracking-widest text-[#F0EAAF] mb-1">Financial Integrity</div>
                    <div className="text-xl font-bold font-serif">{current.masterPlanStat1}</div>
                  </div>
                  
                  <div className="bg-[#193C26] px-6 py-4 rounded-3xl border border-white/10 text-center hover:bg-white/5 transition-colors duration-300">
                    <div className="text-[10px] uppercase tracking-widest text-[#F0EAAF] mb-1">Risk Mitigation</div>
                    <div className="text-xl font-bold font-serif">{current.masterPlanStat2}</div>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <button className="inline-flex items-center gap-4 bg-[#F0EAAF] text-[#193C26] py-5 px-10 rounded-full font-bold uppercase text-xs tracking-[0.2em] hover:brightness-110 hover:shadow-2xl transition-all duration-300 shadow-xl group">
                  <span>{language === 'en' ? 'View Infrastructure Roadmap' : 'অবকাঠামো উন্নয়ন পরিকল্পনা'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </div>
            
            {/* Decorative Icon */}
            <Tent 
              className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 rotate-12 animate-[spin_60s_linear_infinite]" 
              aria-hidden="true"
            />
          </div>

          {/* Footer */}
          <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/10 pt-12">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-[#F0EAAF]/10 animate-pulse">
                <ShieldCheck className="w-6 h-6 text-[#F0EAAF]" />
              </div>
              <p className="text-sm text-[#F0EAAF]/70 font-medium italic">
                {current.legalNote}
              </p>
            </div>
            
            <div className="flex items-center gap-8 opacity-40">
              <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold hover:opacity-100 transition-opacity duration-300 cursor-default">
                Saf Kabla Secured
              </span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold hover:opacity-100 transition-opacity duration-300 cursor-default">
                Equity Funded
              </span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold hover:opacity-100 transition-opacity duration-300 cursor-default">
                Agro-tourism Ready
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AssetSection;