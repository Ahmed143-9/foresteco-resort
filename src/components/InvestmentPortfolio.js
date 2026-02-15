import React, { useState, useEffect, useRef } from 'react';
import { 
  Map, Hotel, Users, TreePine, ArrowRight, Shield, 
  TrendingUp, Award, Gem, Crown, Sparkles, ChevronRight,
  Building, Sprout, Landmark, CheckCircle, Star
} from 'lucide-react';

const InvestmentPortfolio = ({ language = 'en' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activePillar, setActivePillar] = useState(null);
  const sectionRef = useRef(null);
  const observerRef = useRef(null);

  // Fixed: Simplified intersection observer
  useEffect(() => {
    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create new observer with optimal settings
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        // Use requestAnimationFrame to prevent blocking
        requestAnimationFrame(() => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { 
        threshold: 0.1, 
        rootMargin: '50px',
        // Added to improve performance
        passive: true 
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observerRef.current.observe(currentRef);
    }
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []); // Empty dependency array - only run once

  // Fixed: Optimized content structure
  const content = {
    en: {
      topLabel: "INVESTMENT PORTFOLIO",
      heading: "Secured by Land. Driven by Yield.",
      description: "A disciplined approach to wealth creation. Every investment is backed by tangible assets—registered land and revenue-generating infrastructure—designed to deliver consistent returns while preserving capital.",
      
      stats: [
        { value: "32.84", unit: "Bighas", label: "Total Land Bank", icon: <Map className="w-5 h-5" /> },
        { value: "36", unit: "Rooms", label: "Hospitality Keys", icon: <Hotel className="w-5 h-5" /> },
        { value: "400", unit: "Pax", label: "Event Capacity", icon: <Users className="w-5 h-5" /> },
        { value: "3,300+", unit: "Trees", label: "Fruit Plantation", icon: <TreePine className="w-5 h-5" /> }
      ],

      pillarsHeading: "Asset Pillars",
      
      pillars: [
        {
          label: "LAND ASSET",
          title: "Registered Land Bank",
          stat: "32.84 Bighas",
          desc: "Prime agricultural land in Gazipur's growth corridor. Registered Saf Kabla deeds provide legal ownership and intrinsic value floor.",
          highlight: "Deed Secured"
        },
        {
          label: "HOSPITALITY",
          title: "Premium Resort",
          stat: "36 Rooms + 400 Pax",
          desc: "Six-story guest house and multipurpose hall targeting premium corporate and social events with consistent occupancy.",
          highlight: "Operational"
        },
        {
          label: "AGRICULTURE",
          title: "Revenue Orchards",
          stat: "10 Bigha Zone",
          desc: "High-density BARI Malta-1 and Dragon Fruit cultivation generating sustainable operational yields.",
          highlight: "Revenue Generator"
        },
        {
          label: "LEGAL STRUCTURE",
          title: "Protected Structure",
          stat: "99-Year Term",
          desc: "Indivisible utility structure prevents fragmentation. Full regulatory compliance with 600 exclusive shares.",
          highlight: "Compliant"
        }
      ],

      showcaseHeading: "Asset Showcase",
      
      showcase: [
        {
          category: "HOSPITALITY",
          title: "The Forest Lodge",
          desc: "36 premium rooms blending luxury with nature",
          image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200",
          tag: "Operational"
        },
        {
          category: "EVENTS",
          title: "The Gathering Grounds",
          desc: "400-pax capacity for corporate and social events",
          image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
          tag: "MICE Venue"
        },
        {
          category: "AGRICULTURE",
          title: "The Auspicious Zone",
          desc: "1,100 Malta trees & 2,200 Dragon Fruit pillars",
          image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=1200",
          tag: "Revenue"
        }
      ],

      metricsHeading: "Investment Metrics",
      
      metrics: [
        { value: "18-24%", label: "Projected ROI", desc: "At maturity" },
        { value: "12-15%", label: "Land Appreciation", desc: "Annual compound" },
        { value: "8-12%", label: "Dividend Yield", desc: "From operations" },
        { value: "3-7 Years", label: "Holding Period", desc: "To peak value" }
      ],

      ctaHeading: "Investment Thesis",
      ctaDesc: "100% equity-funded. Zero debt liability. Your capital is secured within tangible assets—free from bank debt and financial leverage.",
      ctaButton: "VIEW INVESTMENT TIERS"
    },
    bn: {
      topLabel: "বিনিয়োগ পোর্টফোলিও",
      heading: "জমি দ্বারা নিশ্চিত। মুনাফা দ্বারা চালিত।",
      description: "সম্পদ সৃষ্টির একটি শৃঙ্খলাবদ্ধ পদ্ধতি। প্রতিটি বিনিয়োগ মূর্ত ভৌত সম্পদ—নিবন্ধিত জমি এবং রাজস্ব উৎপাদনকারী অবকাঠামো—দ্বারা সুরক্ষিত।",
      
      stats: [
        { value: "৩২.৮৪", unit: "বিঘা", label: "মোট জমি ব্যাংক", icon: <Map className="w-5 h-5" /> },
        { value: "৩৬", unit: "টি রুম", label: "আতিথেয়তা কী", icon: <Hotel className="w-5 h-5" /> },
        { value: "৪০০", unit: "জন", label: "ইভেন্ট ক্ষমতা", icon: <Users className="w-5 h-5" /> },
        { value: "৩,৩০০+", unit: "টি", label: "ফলের গাছ", icon: <TreePine className="w-5 h-5" /> }
      ],

      pillarsHeading: "সম্পদ স্তম্ভ",
      
      pillars: [
        {
          label: "জমি সম্পদ",
          title: "নিবন্ধিত জমি ব্যাংক",
          stat: "৩২.৮৪ বিঘা",
          desc: "গাজীপুরের বৃদ্ধি করিডোরে প্রিমিয়াম কৃষি জমি। নিবন্ধিত সাফ কবলা দলিল আইনি মালিকানা প্রদান করে।",
          highlight: "দলিল সুরক্ষিত"
        },
        {
          label: "আতিথেয়তা",
          title: "প্রিমিয়াম রিসোর্ট",
          stat: "৩৬ রুম + ৪০০ জন",
          desc: "ছয় তলা গেস্ট হাউস এবং মাল্টিপারপাস হল প্রিমিয়াম কর্পোরেট ও সামাজিক ইভেন্টের জন্য।",
          highlight: "পরিচালনাধীন"
        },
        {
          label: "কৃষি",
          title: "রাজস্ব বাগান",
          stat: "১০ বিঘা জোন",
          desc: "উচ্চ-ঘনত্বের বারি মাল্টা-১ এবং ড্রাগন ফ্রুট চাষ টেকসই রাজস্ব উৎপাদন করে।",
          highlight: "রাজস্ব উৎপাদক"
        },
        {
          label: "আইনি কাঠামো",
          title: "সুরক্ষিত কাঠামো",
          stat: "৯৯ বছর মেয়াদ",
          desc: "অবিভাজ্য ইউটিলিটি কাঠামো বিভাজন রোধ করে। ৬০০ এক্সক্লুসিভ শেয়ার সহ সম্পূর্ণ নিয়ন্ত্রক সম্মতি।",
          highlight: "অনুমোদিত"
        }
      ],

      showcaseHeading: "সম্পদ প্রদর্শনী",
      
      showcase: [
        {
          category: "আতিথেয়তা",
          title: "দ্য ফরেস্ট লজ",
          desc: "৩৬টি প্রিমিয়াম রুম প্রকৃতির সাথে বিলাসিতার মিলন",
          image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200",
          tag: "পরিচালনাধীন"
        },
        {
          category: "ইভেন্ট",
          title: "দ্য গাদারিং গ্রাউন্ডস",
          desc: "কর্পোরেট ও সামাজিক ইভেন্টের জন্য ৪০০ জন ক্ষমতা",
          image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
          tag: "MICE ভেন্যু"
        },
        {
          category: "কৃষি",
          title: "দ্য অশুভ জোন",
          desc: "১,১০০ মাল্টা গাছ ও ২,২০০ ড্রাগন ফ্রুট পিলার",
          image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=1200",
          tag: "রাজস্ব"
        }
      ],

      metricsHeading: "বিনিয়োগ মেট্রিক্স",
      
      metrics: [
        { value: "১৮-২৪%", label: "প্রত্যাশিত ROI", desc: "পরিপক্কতায়" },
        { value: "১২-১৫%", label: "জমির মূল্যবৃদ্ধি", desc: "বার্ষিক কম্পাউন্ড" },
        { value: "৮-১২%", label: "লভ্যাংশ ইয়েল্ড", desc: "অপারেশন থেকে" },
        { value: "৩-৭ বছর", label: "ধরে রাখার সময়", desc: "শীর্ষ মূল্যে" }
      ],

      ctaHeading: "বিনিয়োগ থিসিস",
      ctaDesc: "১০০% ইক্যুইটি অর্থায়িত। শূন্য ঋণ দায়। আপনার পুঁজি মূর্ত সম্পদের মধ্যে নিরাপদ—ব্যাংক ঋণ এবং আর্থিক লিভারেজ থেকে মুক্ত।",
      ctaButton: "বিনিয়োগ স্তর দেখুন"
    }
  };

  const current = content[language];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');
        
        .portfolio-section {
          font-family: ${language === 'bn' ? "'Hind Siliguri', sans-serif" : "'Inter', sans-serif"};
          background: linear-gradient(135deg, #0a1f17 0%, #0d2a20 50%, #0a1f17 100%);
          color: #e8ebe4;
          position: relative;
          overflow: hidden;
          /* Fixed: Ensure hardware acceleration doesn't block scrolling */
          transform: translateZ(0);
          will-change: transform;
        }

        .font-serif-luxury {
          font-family: ${language === 'bn' ? "'Hind Siliguri', serif" : "'Cormorant Garamond', serif"};
        }

        /* Fixed: Optimized animations - use transform only, no layout triggers */
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          /* Fixed: Use will-change sparingly */
        }

        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Fixed: Reduced animation complexity */
        .stat-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01));
          border: 1px solid rgba(212, 175, 55, 0.1);
          border-radius: 24px;
          padding: 1.75rem;
          transition: transform 0.3s ease, border-color 0.3s ease;
          min-width: 200px;
          /* Fixed: Prevent layout shift during animation */
          backface-visibility: hidden;
        }

        .stat-card:hover {
          border-color: rgba(212, 175, 55, 0.3);
          transform: translateY(-4px);
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #d4af37, #b38f2c);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0a1f17;
          margin-bottom: 1.25rem;
        }

        /* Fixed: Simplified pillar cards */
        .pillar-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.01));
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 28px;
          padding: 2rem;
          transition: transform 0.3s ease, border-color 0.3s ease;
          min-width: 280px;
          backface-visibility: hidden;
        }

        .pillar-card:hover {
          border-color: rgba(212, 175, 55, 0.2);
          transform: translateY(-4px);
        }

        .pillar-highlight {
          background: rgba(212, 175, 55, 0.1);
          color: #d4af37;
          padding: 0.25rem 1rem;
          border-radius: 50px;
          font-size: 0.7rem;
          font-weight: 600;
          display: inline-block;
        }

        /* Fixed: Optimized showcase cards */
        .showcase-card {
          border-radius: 28px;
          overflow: hidden;
          position: relative;
          height: 450px;
          min-width: 350px;
          cursor: pointer;
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5);
          /* Fixed: Use transform for performance */
          transform: translateZ(0);
        }

        .showcase-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .showcase-card:hover img {
          transform: scale(1.05);
        }

        .showcase-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, 
            rgba(10, 31, 23, 0.95) 0%, 
            rgba(10, 31, 23, 0.7) 40%, 
            transparent 100%
          );
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2rem;
        }

        .showcase-tag {
          background: #d4af37;
          color: #0a1f17;
          padding: 0.4rem 1rem;
          border-radius: 50px;
          font-size: 0.7rem;
          font-weight: 700;
          display: inline-block;
          width: fit-content;
          margin-bottom: 1rem;
        }

        /* Fixed: Optimized metric cards */
        .metric-card {
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.08), rgba(212, 175, 55, 0.02));
          border: 1px solid rgba(212, 175, 55, 0.15);
          border-radius: 24px;
          padding: 2rem 1.5rem;
          text-align: center;
          min-width: 200px;
          transition: transform 0.3s ease;
          backface-visibility: hidden;
        }

        .metric-card:hover {
          transform: translateY(-4px);
        }

        /* Fixed: Simplified CTA section */
        .cta-premium {
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.03) 0%, 
            rgba(212, 175, 55, 0.05) 100%
          );
          border: 1px solid rgba(212, 175, 55, 0.15);
          border-radius: 32px;
          padding: 3rem;
        }

        .cta-button {
          background: linear-gradient(135deg, #d4af37, #b38f2c);
          color: #0a1f17;
          padding: 1.25rem 2.5rem;
          border-radius: 60px;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: transform 0.3s ease;
          box-shadow: 0 20px 30px -10px rgba(212, 175, 55, 0.3);
        }

        .cta-button:hover {
          transform: translateY(-2px);
        }

        /* Fixed: Custom scrollbar - lighter weight */
        .overflow-x-auto {
          scrollbar-width: thin;
          scrollbar-color: rgba(212, 175, 55, 0.3) rgba(255, 255, 255, 0.05);
          -webkit-overflow-scrolling: touch; /* Fixed: Smooth iOS scrolling */
        }

        .overflow-x-auto::-webkit-scrollbar {
          height: 4px;
        }

        .overflow-x-auto::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }

        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: rgba(212, 175, 55, 0.3);
          border-radius: 10px;
        }

        /* Fixed: Prevent layout shift during loading */
        .gold-divider {
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #d4af37, #d4af37, #d4af37, transparent);
          margin: 2rem auto;
          transition: width 0.5s ease;
        }

        .gold-divider.active {
          width: 200px;
        }
      `}</style>

      <section 
        id="investment-portfolio" 
        ref={sectionRef} 
        className="portfolio-section py-24 lg:py-32 px-4 md:px-6"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* === 1. Portfolio Intro === */}
          <div className={`fade-in ${isVisible ? 'visible' : ''} text-center mb-16 lg:mb-20`}>
            <div className="inline-flex items-center gap-3 mb-4">
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d4af37]/70">
                {current.topLabel}
              </span>
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
            </div>
            
            <h2 className="font-serif-luxury text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              {current.heading}
            </h2>
            
            <div className={`gold-divider ${isVisible ? 'active' : ''}`} />
            
            <p className="text-base md:text-lg text-[#9ca8a0] max-w-3xl mx-auto leading-relaxed font-light">
              {current.description}
            </p>
          </div>

          {/* === 2. Stats Horizontal === */}
          <div className="overflow-x-auto flex gap-6 mb-20 lg:mb-24 pb-6 justify-start lg:justify-center">
            {current.stats.map((stat, idx) => (
              <div 
                key={idx}
                className={`stat-card flex-shrink-0 fade-in ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="stat-icon">
                  {stat.icon}
                </div>
                
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-3xl md:text-4xl font-bold text-[#d4af37]">
                    {stat.value}
                  </span>
                  <span className="text-xs text-[#9ca8a0] uppercase tracking-wider pb-1">
                    {stat.unit}
                  </span>
                </div>
                
                <div className="text-sm font-medium text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* === 3. Asset Pillars === */}
          <div className="mb-20 lg:mb-24">
            <div className={`fade-in ${isVisible ? 'visible' : ''} text-center mb-12`}>
              <h3 className="font-serif-luxury text-3xl md:text-4xl font-bold text-white">
                {current.pillarsHeading}
              </h3>
            </div>

            <div className="overflow-x-auto flex gap-6 pb-6 justify-start lg:justify-center">
              {current.pillars.map((pillar, idx) => (
                <div 
                  key={idx}
                  className={`pillar-card flex-shrink-0 fade-in ${isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                  onMouseEnter={() => setActivePillar(idx)}
                  onMouseLeave={() => setActivePillar(null)}
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af37]/60 block mb-3">
                    {pillar.label}
                  </span>
                  
                  <h4 className="text-xl font-bold text-white mb-3">{pillar.title}</h4>
                  
                  <div className="text-2xl font-bold text-[#d4af37] mb-4">{pillar.stat}</div>
                  
                  <p className="text-sm text-[#9ca8a0]/80 leading-relaxed mb-4">
                    {pillar.desc}
                  </p>
                  
                  <span className="pillar-highlight">
                    <CheckCircle className="w-3 h-3 inline mr-1" />
                    {pillar.highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* === 4. Showcase Cards === */}
          <div className="mb-20 lg:mb-24">
            <div className={`fade-in ${isVisible ? 'visible' : ''} text-center mb-12`}>
              <h3 className="font-serif-luxury text-3xl md:text-4xl font-bold text-white">
                {current.showcaseHeading}
              </h3>
            </div>

            <div className="overflow-x-auto flex gap-8 pb-6 justify-start lg:justify-center">
              {current.showcase.map((item, idx) => (
                <div 
                  key={idx}
                  className={`showcase-card flex-shrink-0 fade-in ${isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <img src={item.image} alt={item.title} loading="lazy" />
                  
                  <div className="showcase-overlay">
                    <span className="showcase-tag">{item.tag}</span>
                    
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#d4af37]/70 block mb-2">
                      {item.category}
                    </span>
                    
                    <h4 className="font-serif-luxury text-2xl font-bold text-white mb-2">
                      {item.title}
                    </h4>
                    
                    <p className="text-sm text-white/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* === 5. Investment Metrics === */}
          <div className="mb-20 lg:mb-24">
            <div className={`fade-in ${isVisible ? 'visible' : ''} text-center mb-12`}>
              <h3 className="font-serif-luxury text-3xl md:text-4xl font-bold text-white">
                {current.metricsHeading}
              </h3>
            </div>

            <div className="overflow-x-auto flex gap-6 pb-6 justify-start lg:justify-center">
              {current.metrics.map((metric, idx) => (
                <div 
                  key={idx}
                  className={`metric-card flex-shrink-0 fade-in ${isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#d4af37] mb-2">
                    {metric.value}
                  </div>
                  <div className="text-base font-semibold text-white mb-1">{metric.label}</div>
                  <div className="text-xs text-[#9ca8a0]/60">{metric.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* === 6. CTA Section === */}
          <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
            <div className="cta-premium">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Crown className="w-5 h-5 text-[#d4af37]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af37]/70">
                      EXCLUSIVE OFFERING
                    </span>
                  </div>
                  
                  <h3 className="font-serif-luxury text-3xl md:text-4xl font-bold text-white">
                    {current.ctaHeading}
                  </h3>
                  
                  <p className="text-[#9ca8a0] leading-relaxed text-base">
                    {current.ctaDesc}
                  </p>
                </div>
                
                <div className="text-center lg:text-right">
                  <button className="cta-button group">
                    <span className="relative z-10 flex items-center gap-3">
                      {current.ctaButton}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InvestmentPortfolio;