import React, { useState, useEffect, useRef } from 'react';
import { Landmark, Hotel, Sprout, ShieldCheck, Map, ArrowRight } from 'lucide-react';

const AssetSection = ({ language = 'en' }) => {
  const [isVisible, setIsVisible] = useState(false);
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

  const content = {
    en: {
      topLabel: "TANGIBLE. SECURED. PRODUCTIVE.",
      mainHeading: "The Asset Structure",
      description: "Your investment is backed by registered land and revenue-generating infrastructure that hedges against inflation and market volatility.",
      
      assets: [
        {
          label: "THE LAND",
          stat: "32.84 Bighas",
          description: "Registered Saf Kabla land in the high-growth Bhabanipur-Gazipur corridor.",
          icon: <Map className="w-8 h-8" />
        },
        {
          label: "HOSPITALITY INFRA",
          stat: "36 Rooms + 400 Pax",
          description: "A 6-story guest house and multipurpose hall for the premium corporate market.",
          icon: <Hotel className="w-8 h-8" />
        },
        {
          label: "THE REVENUE ENGINE",
          stat: "10 Bigha Agro-Zone",
          description: "High-density intercropping of BARI Malta-1 and Dragon Fruit.",
          icon: <Sprout className="w-8 h-8" />
        },
        {
          label: "THE LEGAL SHIELD",
          stat: "99-Year Waiver",
          description: "Indivisibility structure prevents land fragmentation.",
          icon: <ShieldCheck className="w-8 h-8" />
        }
      ],

      tripleEngineHeading: "The Triple-Engine Asset Base",

      showcase: [
        {
          category: "LIFESTYLE FOCUS",
          badge: "Hospitality Pillar",
          title: "The Forest Lodge",
          image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200"
        },
        {
          category: "EVENT FOCUS",
          badge: "MICE & Recreation",
          title: "The Gathering Grounds",
          image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200"
        },
        {
          category: "YIELD FOCUS",
          badge: "Revenue Driver",
          title: "The Auspicious Zone",
          image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=1200"
        }
      ],

      ctaHeading: "Sustainable Prosperity",
      ctaDescription: "We believe in gradual, phased development. Every Taka of your investment is secured within the embrace of the soil—completely free from the shadow of bank debt.",
      badge1: "100% Equity Funded",
      badge2: "Zero Debt Liability",
      ctaButton: "VIEW INFRASTRUCTURE ROADMAP"
    },
    bn: {
      topLabel: "বাস্তব। সুরক্ষিত। উৎপাদনশীল।",
      mainHeading: "সম্পদের কাঠামো",
      description: "আপনার বিনিয়োগ রেজিস্টার্ড জমি এবং রাজস্ব-উৎপাদনকারী অবকাঠামো দ্বারা সমর্থিত।",
      
      assets: [
        {
          label: "জমি",
          stat: "৩২.৮৪ বিঘা",
          description: "উচ্চ-বৃদ্ধি ভবানীপুর-গাজীপুর করিডোরে রেজিস্টার্ড সাফ কবলা জমি।",
          icon: <Map className="w-8 h-8" />
        },
        {
          label: "আতিথেয়তা অবকাঠামো",
          stat: "৩৬ রুম + ৪০০ জন",
          description: "প্রিমিয়াম কর্পোরেট বাজারের জন্য ৬-তলা গেস্ট হাউস।",
          icon: <Hotel className="w-8 h-8" />
        },
        {
          label: "রাজস্ব ইঞ্জিন",
          stat: "১০ বিঘা এগ্রো-জোন",
          description: "বারি মাল্টা-১ এবং ড্রাগন ফলের উচ্চ-ঘনত্ব ইন্টারক্রপিং।",
          icon: <Sprout className="w-8 h-8" />
        },
        {
          label: "আইনি ঢাল",
          stat: "৯৯-বছর মওকুফ",
          description: "অবিভাজ্যতা কাঠামো জমির বিভাজন প্রতিরোধ করে।",
          icon: <ShieldCheck className="w-8 h-8" />
        }
      ],

      tripleEngineHeading: "তিন-ইঞ্জিন সম্পদ ভিত্তি",

      showcase: [
        {
          category: "জীবনযাত্রার ফোকাস",
          badge: "আতিথেয়তা স্তম্ভ",
          title: "দ্য ফরেস্ট লজ",
          image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200"
        },
        {
          category: "ইভেন্ট ফোকাস",
          badge: "MICE এবং বিনোদন",
          title: "দ্য গ্যাদারিং গ্রাউন্ডস",
          image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200"
        },
        {
          category: "ফলন ফোকাস",
          badge: "রাজস্ব চালক",
          title: "দ্য অসপিশাস জোন",
          image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=1200"
        }
      ],

      ctaHeading: "টেকসই সমৃদ্ধি",
      ctaDescription: "আমরা ক্রমান্বয়ে, পর্যায়ক্রমিক উন্নয়নে বিশ্বাস করি। আপনার বিনিয়োগের প্রতিটি টাকা মাটির আলিঙ্গনের মধ্যে সুরক্ষিত।",
      badge1: "১০০% ইক্যুইটি অর্থায়িত",
      badge2: "শূন্য ঋণ দায়",
      ctaButton: "অবকাঠামো রোডম্যাপ দেখুন"
    }
  };

  const current = content[language];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');
        
        .luxury-asset-section {
          font-family: ${language === 'bn' ? "'Hind Siliguri', sans-serif" : "'Inter', sans-serif"};
          background: linear-gradient(180deg, #0f2f1f 0%, #143d29 50%, #0c2619 100%);
          position: relative;
          overflow: hidden;
          color: #f5f3ed;
        }

        .luxury-serif {
          font-family: 'Playfair Display', serif;
        }

        .luxury-top-label {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #d8c98f;
          opacity: 0.9;
        }

        .luxury-main-heading {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 700;
          color: #f5f3ed;
          margin: 2rem 0;
          line-height: 1.1;
        }

        .luxury-description {
          font-size: 1.125rem;
          color: #c9c5b8;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* HORIZONTAL SCROLLING CONTAINER FOR BOXES */
        .horizontal-scroll-container {
          overflow-x: auto;
          overflow-y: hidden;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
          scrollbar-color: #d8c98f #143d29;
          padding-bottom: 1rem;
        }

        .horizontal-scroll-container::-webkit-scrollbar {
          height: 8px;
        }

        .horizontal-scroll-container::-webkit-scrollbar-track {
          background: rgba(20, 61, 41, 0.5);
          border-radius: 10px;
        }

        .horizontal-scroll-container::-webkit-scrollbar-thumb {
          background: #d8c98f;
          border-radius: 10px;
        }

        .horizontal-scroll-container::-webkit-scrollbar-thumb:hover {
          background: #c4b67f;
        }

        /* Asset Cards - Single Line */
        .asset-cards-row {
          display: flex;
          gap: 1.5rem;
          min-width: min-content;
        }

        .luxury-asset-card {
          background: rgba(20, 61, 41, 0.6);
          border: 1px solid rgba(216, 201, 143, 0.15);
          border-radius: 28px;
          padding: 3rem 2rem;
          text-align: center;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          flex: 0 0 280px;
          min-width: 280px;
        }

        .luxury-asset-card:hover {
          transform: translateY(-12px);
          border-color: rgba(216, 201, 143, 0.4);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(216, 201, 143, 0.1);
          background: rgba(20, 61, 41, 0.8);
        }

        .luxury-icon-container {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #d8c98f, #c4b67f);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
          color: #0f2f1f;
          transition: all 0.5s ease;
        }

        .luxury-asset-card:hover .luxury-icon-container {
          transform: rotateY(180deg) scale(1.1);
        }

        .luxury-asset-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #d8c98f;
          margin-bottom: 1rem;
        }

        .luxury-asset-stat {
          font-size: 2rem;
          font-weight: 700;
          color: #d8c98f;
          margin-bottom: 1rem;
          font-family: 'Playfair Display', serif;
        }

        .luxury-asset-desc {
          font-size: 0.9rem;
          color: #b5b1a3;
          line-height: 1.6;
        }

        /* Triple Engine Cards - Single Line */
        .showcase-cards-row {
          display: flex;
          gap: 2rem;
          min-width: min-content;
        }

        .luxury-divider-heading {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          margin: 5rem 0 3rem;
        }

        .luxury-divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(216, 201, 143, 0.3), transparent);
        }

        .luxury-divider-text {
          font-size: 2rem;
          font-weight: 700;
          color: #f5f3ed;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-family: 'Playfair Display', serif;
          white-space: nowrap;
        }

        .luxury-showcase-card {
          position: relative;
          border-radius: 32px;
          overflow: hidden;
          height: 550px;
          cursor: pointer;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          flex: 0 0 400px;
          min-width: 400px;
        }

        .luxury-showcase-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
        }

        .luxury-showcase-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .luxury-showcase-card:hover .luxury-showcase-image {
          transform: scale(1.15);
        }

        .luxury-showcase-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15, 47, 31, 0.95) 0%, rgba(15, 47, 31, 0.6) 40%, transparent 100%);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .luxury-showcase-category {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #d8c98f;
          margin-bottom: 0.75rem;
        }

        .luxury-showcase-badge {
          display: inline-block;
          background: #d8c98f;
          color: #0f2f1f;
          padding: 0.5rem 1.25rem;
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1.5rem;
          width: fit-content;
        }

        .luxury-showcase-title {
          font-size: 2.25rem;
          font-weight: 700;
          color: #f5f3ed;
          margin-bottom: 1.5rem;
          font-family: 'Playfair Display', serif;
        }

        .luxury-showcase-link {
          font-size: 0.85rem;
          font-weight: 600;
          color: #d8c98f;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: gap 0.3s ease;
        }

        .luxury-showcase-card:hover .luxury-showcase-link {
          gap: 1rem;
        }

        /* CTA Box */
        .luxury-cta-box {
          background: rgba(20, 61, 41, 0.5);
          border: 1px solid rgba(216, 201, 143, 0.2);
          border-radius: 40px;
          padding: 4rem;
          margin-top: 5rem;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3), 0 0 40px rgba(216, 201, 143, 0.05);
        }

        .luxury-cta-heading {
          font-size: 3rem;
          font-weight: 700;
          color: #f5f3ed;
          margin-bottom: 1.5rem;
          font-family: 'Playfair Display', serif;
        }

        .luxury-cta-description {
          font-size: 1.125rem;
          color: #c9c5b8;
          line-height: 1.8;
          margin-bottom: 2.5rem;
        }

        .luxury-badge-container {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .luxury-badge {
          background: rgba(216, 201, 143, 0.1);
          border: 1px solid rgba(216, 201, 143, 0.3);
          padding: 1.25rem 2rem;
          border-radius: 20px;
          flex: 1;
          min-width: 200px;
        }

        .luxury-badge-label {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #b5b1a3;
          margin-bottom: 0.5rem;
        }

        .luxury-badge-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #d8c98f;
          font-family: 'Playfair Display', serif;
        }

        .luxury-cta-button {
          background: linear-gradient(135deg, #d8c98f, #c4b67f);
          color: #0f2f1f;
          padding: 1.5rem 3rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 10px 30px rgba(216, 201, 143, 0.3);
          display: inline-flex;
          align-items: center;
          gap: 1rem;
        }

        .luxury-cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(216, 201, 143, 0.4);
          background: linear-gradient(135deg, #e6d9a3, #d8c98f);
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

        /* Responsive */
        @media (min-width: 1280px) {
          .asset-cards-row {
            justify-content: center;
          }
          
          .showcase-cards-row {
            justify-content: center;
          }
        }

        @media (max-width: 1024px) {
          .luxury-main-heading {
            font-size: 3rem;
          }
          
          .luxury-cta-heading {
            font-size: 2.5rem;
          }
          
          .luxury-cta-box {
            padding: 3rem 2rem;
          }

          .luxury-showcase-card {
            flex: 0 0 350px;
            min-width: 350px;
            height: 500px;
          }
        }

        @media (max-width: 768px) {
          .luxury-asset-card {
            flex: 0 0 260px;
            min-width: 260px;
            padding: 2.5rem 1.5rem;
          }

          .luxury-showcase-card {
            flex: 0 0 320px;
            min-width: 320px;
            height: 450px;
          }
          
          .luxury-showcase-title {
            font-size: 1.75rem;
          }

          .luxury-divider-text {
            font-size: 1.5rem;
          }

          .luxury-cta-box {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>

      <section 
        id="the-asset" 
        ref={sectionRef} 
        className="luxury-asset-section py-20 lg:py-32 px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto">
          
          {/* 1️⃣ Asset Structure Intro Area */}
          <div className={`text-center mb-20 fade-in ${isVisible ? 'visible' : ''}`}>
            <p className="luxury-top-label mb-6">
              {current.topLabel}
            </p>
            
            <h2 className="luxury-main-heading luxury-serif">
              {current.mainHeading}
            </h2>
            
            <p className="luxury-description">
              {current.description}
            </p>
          </div>

          {/* 2️⃣ Four Asset Feature Cards - SINGLE LINE */}
          <div className={`mb-20 fade-in ${isVisible ? 'visible' : ''}`}>
            <div className="horizontal-scroll-container">
              <div className="asset-cards-row">
                {current.assets.map((asset, idx) => (
                  <div 
                    key={idx} 
                    className="luxury-asset-card"
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <div className="luxury-icon-container">
                      {asset.icon}
                    </div>
                    
                    <p className="luxury-asset-label">
                      {asset.label}
                    </p>
                    
                    <div className="luxury-asset-stat">
                      {asset.stat}
                    </div>
                    
                    <p className="luxury-asset-desc">
                      {asset.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3️⃣ Triple Engine Asset Base - SINGLE LINE */}
          <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
            <div className="luxury-divider-heading">
              <div className="luxury-divider-line"></div>
              <h3 className="luxury-divider-text luxury-serif">
                {current.tripleEngineHeading}
              </h3>
              <div className="luxury-divider-line"></div>
            </div>

            <div className="horizontal-scroll-container">
              <div className="showcase-cards-row">
                {current.showcase.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="luxury-showcase-card"
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="luxury-showcase-image"
                    />
                    
                    <div className="luxury-showcase-overlay">
                      <p className="luxury-showcase-category">
                        {item.category}
                      </p>
                      
                      <span className="luxury-showcase-badge">
                        {item.badge}
                      </span>
                      
                      <h4 className="luxury-showcase-title luxury-serif">
                        {item.title}
                      </h4>
                      
                      <div className="luxury-showcase-link">
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4️⃣ Sustainable Prosperity CTA Box */}
          <div className={`luxury-cta-box fade-in ${isVisible ? 'visible' : ''}`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="luxury-cta-heading luxury-serif">
                  {current.ctaHeading}
                </h3>
                
                <p className="luxury-cta-description">
                  {current.ctaDescription}
                </p>
                
                <div className="luxury-badge-container">
                  <div className="luxury-badge">
                    <p className="luxury-badge-label">Financial Integrity</p>
                    <div className="luxury-badge-value">{current.badge1}</div>
                  </div>
                  
                  <div className="luxury-badge">
                    <p className="luxury-badge-label">Risk Mitigation</p>
                    <div className="luxury-badge-value">{current.badge2}</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <button className="luxury-cta-button">
                  <span>{current.ctaButton}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default AssetSection;