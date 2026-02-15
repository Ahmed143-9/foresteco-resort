import React, { useState, useEffect, useRef } from 'react';
import { Landmark, Hotel, Sprout, ShieldCheck, Map, ArrowRight, Globe, TreePine, Calculator, TrendingUp, Users, Award } from 'lucide-react';

const InvestmentPortfolio = () => {
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
      sectionTitle: "Investment Portfolio",
      sectionSubtitle: "Secured by Land. Driven by Yield.",
      desc: "Our investment model is built on physical security. Every share is backed by registered land and revenue-generating infrastructure that hedges against inflation and market volatility.",
      stats: [
        { label: "Total Land", value: "32.84", unit: "Bighas", icon: <Map className="w-5 h-5" /> },
        { label: "Premium Rooms", value: "36", unit: "Keys", icon: <Hotel className="w-5 h-5" /> },
        { label: "Event Capacity", value: "400", unit: "Pax", icon: <Users className="w-5 h-5" /> },
        { label: "Fruit Trees", value: "3,300+", unit: "Trees", icon: <TreePine className="w-5 h-5" /> }
      ],
      pillars: [
        {
          title: "Land Asset",
          stat: "32.84 Bighas",
          detail: "Registered Saf Kabla land in Gazipur's high-growth corridor. Provides intrinsic value floor with 15% projected annual appreciation.",
          icon: <Landmark className="w-6 h-6" />,
          highlight: "Deed Secured"
        },
        {
          title: "Hospitality",
          stat: "36 Rooms + 400 Pax",
          detail: "Six-story guest house and multipurpose hall designed for premium corporate and social events. 65% target occupancy.",
          icon: <Hotel className="w-6 h-6" />,
          highlight: "Operational"
        },
        {
          title: "Agriculture",
          stat: "10 Bigha Agro-Zone",
          detail: "High-density intercropping with BARI Malta-1 and Dragon Fruit. Projected 22% operational margin with sustainable yield.",
          icon: <Sprout className="w-6 h-6" />,
          highlight: "Revenue Generator"
        },
        {
          title: "Legal Structure",
          stat: "99-Year Protection",
          detail: "Indivisible utility structure prevents land fragmentation. Full regulatory compliance with 600 exclusive shares.",
          icon: <ShieldCheck className="w-6 h-6" />,
          highlight: "Protected"
        }
      ],
      metricsTitle: "Investment Metrics",
      metrics: [
        { label: "Projected ROI", value: "18-24%", desc: "Annual returns at maturity" },
        { label: "Land Appreciation", value: "12-15%", desc: "Annual compound growth" },
        { label: "Dividend Yield", value: "8-12%", desc: "From operations" },
        { label: "Holding Period", value: "3-7", desc: "Years to peak value" }
      ],
      ctaTitle: "Secure Your Legacy",
      ctaDesc: "Join 600 founding members building sustainable wealth through tangible assets.",
      ctaButton: "View Investment Tiers"
    },
    bn: {
      sectionTitle: "বিনিয়োগ পোর্টফোলিও",
      sectionSubtitle: "জমির নিশ্চয়তা। মুনাফার চালিকাশক্তি।",
      desc: "আমাদের বিনিয়োগ মডেলটি নিরাপত্তার উপর ভিত্তি করে তৈরি। প্রতিটি শেয়ার নিষ্কণ্টক জমি এবং রাজস্ব উৎপাদনকারী অবকাঠামো দ্বারা সুরক্ষিত।",
      stats: [
        { label: "মোট জমি", value: "32.84", unit: "বিঘা", icon: <Map className="w-5 h-5" /> },
        { label: "প্রিমিয়াম রুম", value: "36", unit: "টি", icon: <Hotel className="w-5 h-5" /> },
        { label: "ইভেন্ট ক্ষমতা", value: "400", unit: "জন", icon: <Users className="w-5 h-5" /> },
        { label: "ফলের গাছ", value: "3,300+", unit: "টি", icon: <TreePine className="w-5 h-5" /> }
      ],
      pillars: [
        {
          title: "জমি সম্পদ",
          stat: "32.84 বিঘা",
          detail: "গাজীপুরের উচ্চ-বৃদ্ধি করিডোরে নিবন্ধিত সাফ কবলা জমি। ১৫% বার্ষিক প্রশংসা সহ অন্তর্নিহিত মূল্য প্রদান করে।",
          icon: <Landmark className="w-6 h-6" />,
          highlight: "দলিল নিশ্চিত"
        },
        {
          title: "আতিথেয়তা",
          stat: "৩৬ রুম + ৪০০ জন",
          detail: "প্রিমিয়াম কর্পোরেট এবং সামাজিক ইভেন্টের জন্য ডিজাইন করা ছয় তলা গেস্ট হাউস এবং মাল্টিপারপাস হল।",
          icon: <Hotel className="w-6 h-6" />,
          highlight: "পরিচালনাধীন"
        },
        {
          title: "কৃষি",
          stat: "১০ বিঘা এগ্রো-জোন",
          detail: "বারি মাল্টা-১ এবং ড্রাগন ফ্রুটের সাথে উচ্চ-ঘনত্বের ইন্টারক্রপিং। টেকসই ফলন সহ ২২% অপারেশনাল মার্জিন প্রত্যাশিত।",
          icon: <Sprout className="w-6 h-6" />,
          highlight: "রাজস্ব উৎপাদক"
        },
        {
          title: "আইনি কাঠামো",
          stat: "৯৯ বছর সুরক্ষা",
          detail: "বিভাজন রোধে অবিভাজ্য ইউটিলিটি কাঠামো। ৬০০ এক্সক্লুসিভ শেয়ার সহ সম্পূর্ণ নিয়ন্ত্রক সম্মতি।",
          icon: <ShieldCheck className="w-6 h-6" />,
          highlight: "সুরক্ষিত"
        }
      ],
      metricsTitle: "বিনিয়োগ মেট্রিক্স",
      metrics: [
        { label: "প্রত্যাশিত ROI", value: "১৮-২৪%", desc: "পরিপক্কতায় বার্ষিক রিটার্ন" },
        { label: "জমির প্রশংসা", value: "১২-১৫%", desc: "বার্ষিক কম্পাউন্ড গ্রোথ" },
        { label: "লভ্যাংশ ইয়েল্ড", value: "৮-১২%", desc: "অপারেশন থেকে" },
        { label: "ধরে রাখার সময়", value: "৩-৭", desc: "শীর্ষ মূল্যে পৌঁছাতে বছর" }
      ],
      ctaTitle: "আপনার উত্তরাধিকার নিশ্চিত করুন",
      ctaDesc: "নির্বচনীয় সম্পদের মাধ্যমে টেকসই সম্পদ তৈরি করে ৬০০ প্রতিষ্ঠাতা সদস্যে যোগ দিন।",
      ctaButton: "বিনিয়োগ স্তর দেখুন"
    }
  };

  const current = content[language];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');
        
        .portfolio-section {
          font-family: ${language === 'bn' ? "'Hind Siliguri', sans-serif" : "'Inter', sans-serif"};
          background: linear-gradient(180deg, ${colors.phthaloGreen} 0%, #0f2419 100%);
          color: ${colors.angoraWhite};
          position: relative;
          overflow: hidden;
        }

        .portfolio-glow {
          position: absolute;
          width: 50vw;
          height: 50vw;
          background: radial-gradient(circle, rgba(240, 234, 175, 0.05) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(60px);
          animation: pulse 15s infinite alternate ease-in-out;
          pointer-events: none;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.3; }
          100% { transform: scale(1.2); opacity: 0.6; }
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          padding: 1.5rem;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .stat-card:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: ${colors.paleGoldenrod}30;
          transform: translateY(-4px);
        }

        .pillar-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 2rem;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .pillar-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, ${colors.paleGoldenrod}, transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .pillar-card:hover::before {
          opacity: 1;
        }

        .pillar-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: ${colors.paleGoldenrod}20;
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .metric-card {
          background: linear-gradient(135deg, rgba(240, 234, 175, 0.08) 0%, rgba(240, 234, 175, 0.02) 100%);
          border: 1px solid ${colors.paleGoldenrod}20;
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
        }

        .heading-serif {
          font-family: 'Playfair Display', serif;
        }

        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section 
        id="investment-portfolio" 
        ref={sectionRef} 
        className="portfolio-section py-20 lg:py-28 px-4 md:px-8"
      >
        {/* Background Effects */}
        <div className="portfolio-glow top-0 left-0" aria-hidden="true" />
        <div className="portfolio-glow bottom-0 right-0" style={{ animationDelay: '-7.5s' }} aria-hidden="true" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className={`text-center mb-16 md:mb-20 fade-in ${isVisible ? 'visible' : ''}`}>
            {/* Language Toggle */}
            <div className="flex justify-end mb-8">
              <button 
                onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
                className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full text-[10px] font-bold text-[#F0EAAF] hover:bg-white/10 transition-all duration-300 uppercase tracking-widest"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'বাংলা' : 'English'}</span>
              </button>
            </div>

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#F0EAAF]/70 mb-4 block">
              {current.sectionSubtitle}
            </span>
            
            <h2 className="heading-serif text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              {current.sectionTitle}
            </h2>
            
            <div className="w-24 h-0.5 bg-[#F0EAAF] mx-auto mb-6"></div>
            
            <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              {current.desc}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {current.stats.map((stat, idx) => (
              <div 
                key={idx} 
                className={`stat-card fade-in ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="text-[#F0EAAF] mb-3">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-white/50 uppercase tracking-wider">{stat.unit}</div>
                <div className="text-xs text-white/40 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Investment Pillars */}
          <div className="mb-16">
            <h3 className="heading-serif text-xl md:text-2xl font-bold text-center mb-10 text-[#F0EAAF]">
              {language === 'en' ? 'Four Pillars of Value' : 'মূল্যের চারটি স্তম্ভ'}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {current.pillars.map((pillar, idx) => (
                <div 
                  key={idx} 
                  className={`pillar-card fade-in ${isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F0EAAF]/10 flex items-center justify-center text-[#F0EAAF]">
                      {pillar.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#F0EAAF] bg-[#F0EAAF]/10 px-3 py-1 rounded-full">
                      {pillar.highlight}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-bold mb-2">{pillar.title}</h4>
                  <div className="text-xl font-bold text-[#F0EAAF] mb-3">{pillar.stat}</div>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Investment Metrics */}
          <div className="mb-12">
            <h3 className="heading-serif text-xl md:text-2xl font-bold text-center mb-10">
              {current.metricsTitle}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {current.metrics.map((metric, idx) => (
                <div 
                  key={idx} 
                  className={`metric-card fade-in ${isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-[#F0EAAF] mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm font-bold text-white mb-1">{metric.label}</div>
                  <div className="text-xs text-white/50">{metric.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className={`text-center fade-in ${isVisible ? 'visible' : ''}`}>
            <h3 className="heading-serif text-2xl md:text-3xl font-bold mb-4">
              {current.ctaTitle}
            </h3>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              {current.ctaDesc}
            </p>
            <button className="bg-[#F0EAAF] text-[#193C26] px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white transition-all duration-300 hover:scale-105">
              {current.ctaButton}
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default InvestmentPortfolio;
