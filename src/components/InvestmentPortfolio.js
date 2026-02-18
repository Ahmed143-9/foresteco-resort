// InvestmentPortfolioRebuilt.js
import React, { useState } from 'react';

const InvestmentPortfolioRebuilt = ({ language = 'en' }) => {
  const [shareCount, setShareCount] = useState(5);

  const translations = {
    en: {
      hero_badge: "By Invitation Only",
      hero_title: "The Exclusive 600",
      hero_subtitle: "A private sanctuary where land ownership meets living legacy. Debt-free. Asset-backed. Yours forever.",
      strategy_badge: "THE BUSINESS OF LEISURE",
      strategy_title: "Twin Pillars of Wealth",
      agro_title: "The Organic Soul",
      agro_subtitle: "10-Bigha Agro Zone",
      agro_desc: "High-yield Dragon Fruit and Malta orchards generating sustainable revenue while feeding our farm-to-table restaurants.",
      complex_title: "The Commercial Engine",
      complex_subtitle: "400-Pax Multipurpose Complex",
      complex_desc: "Corporate retreats and grand weddings ensuring year-round occupancy and massive single-check revenue.",
      gallery_title: "Your Estate Portfolio",
      gallery_subtitle: "Tangible ownership. Saf Kabla Registration.",
      calc_title: "Design Your Legacy",
      calc_desc: "Join a circle of visionaries. As a shareholder, you unlock lifestyle privileges, international travel, and recognition.",
      calc_keys: "Number of Keys (Shares)",
      calc_investment: "Your Investment",
      calc_value: "5-Year Asset Value",
      calc_cta: "Secure Your Allocation",
      tiers: {
        executive: "Executive Member",
        silver: "Silver Member",
        golden: "Golden Member",
        platinum: "Platinum Founder"
      }
    },
    bn: {
      hero_badge: "শুধুমাত্র আমন্ত্রিতদের জন্য",
      hero_title: "এক্সক্লুসিভ ৬০০",
      hero_subtitle: "ইট-পাথরের জঙ্গল থেকে দূরে, আপনার নিজস্ব এক নিভৃত স্বর্গ। যেখানে জমির মালিকানা আর আভিজাত্য মিলেমিশে একাকার।",
      strategy_badge: "অবকাশ যাপনের অর্থনীতি",
      strategy_title: "সমৃদ্ধির দুই স্তম্ভ",
      agro_title: "প্রাণের স্পন্দন",
      agro_subtitle: "১০ বিঘার অর্গানিক অ্যাগ্রো জোন",
      agro_desc: "ড্রাগন ফ্রুট আর মাল্টা বাগান শুধু মুনাফাই দেয় না, রিসোর্টের অতিথিদের জন্য জোগান দেয় সতেজ অর্গানিক খাবার।",
      complex_title: "বাণিজ্যিক শক্তি",
      complex_subtitle: "৪০০ জনের মাল্টিপারপাস কমপ্লেক্স",
      complex_desc: "কর্পোরেট রিট্রিট এবং রাজকীয় বিয়ে আয়োজনের মাধ্যমে আমরা নিশ্চিত করি সারা বছর জমজমাট অকুপেন্সি।",
      gallery_title: "আপনার এস্টেট পোর্টফোলিও",
      gallery_subtitle: "দৃশ্যমান মালিকানা। সাফ কবলা রেজিস্ট্রি।",
      calc_title: "সাজিয়ে নিন আপনার উত্তরাধিকার",
      calc_desc: "যুক্ত হোন ৬০০ জন স্বপ্নদ্রষ্টার অভিজাত বৃত্তে। একজন শেয়ারহোল্ডার হিসেবে আপনি কেবল মুনাফাই পাবেন না; উপভোগ করবেন আন্তর্জাতিক ভ্রমণ ও বিশেষ মর্যাদা।",
      calc_keys: "শেয়ার সংখ্যা (চাবি)",
      calc_investment: "আপনার বিনিয়োগ",
      calc_value: "৫ বছর পর সম্পদের মূল্য",
      calc_cta: "আপনার বরাদ্দ নিশ্চিত করুন",
      tiers: {
        executive: "এক্সিকিউটিভ মেম্বার",
        silver: "সিলভার মেম্বার",
        golden: "গোল্ডেন মেম্বার",
        platinum: "প্লাটিনাম ফাউন্ডার"
      }
    }
  };

  const t = translations[language];

  // Calculator logic
  const BASE_PRICE = 750000;
  const APPRECIATION_RATE = 1.15; // 15% annual

  const calculateTier = (shares) => {
    if (shares >= 50) return { name: t.tiers.platinum, discount: 0.15, perks: "Board Eligibility + Audit Rights" };
    if (shares >= 10) return { name: t.tiers.golden, discount: 0.10, perks: "Founder Recognition + Thailand Tour" };
    if (shares >= 5) return { name: t.tiers.silver, discount: 0.0533, perks: "Complimentary Thailand Tour (3N/4D)" };
    return { name: t.tiers.executive, discount: 0, perks: "Cox's Bazar Tour (2N/3D)" };
  };

  const tier = calculateTier(shareCount);
  const investment = shareCount * BASE_PRICE * (1 - tier.discount);
  const futureValue = investment * Math.pow(APPRECIATION_RATE, 5);

  const formatCurrency = (value) => {
    if (value >= 10000000) {
      return `BDT ${(value / 10000000).toFixed(2)} Cr`;
    }
    return `BDT ${(value / 100000).toFixed(2)} Lakh`;
  };

  // Gallery images
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000",
      title: language === 'en' ? "The Guest House" : "দ্য গেস্ট হাউস",
      subtitle: language === 'en' ? "30 Premium Suites" : "৩০টি প্রিমিয়াম স্যুট",
      span: "col-span-2 row-span-2"
    },
    {
      url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800",
      title: language === 'en' ? "The Grand Hall" : "দ্য গ্র্যান্ড হল",
      subtitle: language === 'en' ? "Weddings & Retreats" : "বিয়ে এবং কর্পোরেট ইভেন্ট",
      span: "col-span-2"
    },
    {
      url: "https://images.unsplash.com/photo-1559828854-1fa99042c16c?auto=format&fit=crop&q=80&w=600",
      title: language === 'en' ? "Organic Agro" : "অর্গানিক অ্যাগ্রো",
      subtitle: language === 'en' ? "Dragon Fruit Yields" : "ড্রাগন ফলের ফলন",
      span: ""
    },
    {
      url: "https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?auto=format&fit=crop&q=80&w=600",
      title: language === 'en' ? "Attractions" : "অ্যাট্রাকশন জোন",
      subtitle: language === 'en' ? "Ferris Wheel & Base Camp" : "নাগরদোলা এবং বেস ক্যাম্প",
      span: ""
    }
  ];

  const styles = `
    /* Font Imports */
    @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap');

    /* Base Styles */
    .portfolio-section {
      background-color: #F9F9F5;
      color: #0D261E;
      line-height: 1.5;
    }

    .portfolio-section .font-serif-custom {
      font-family: ${language === 'bn' ? "'Hind Siliguri', serif" : "'Montserrat', serif"};
      font-weight: 600;
    }

    .portfolio-section .font-sans-custom {
      font-family: ${language === 'bn' ? "'Hind Siliguri', sans-serif" : "'Lora', serif"};
    }

    /* Text Colors */
    .portfolio-section .text-gold {
      color: #D4AF37;
    }

    .portfolio-section .text-gold-light {
      color: #F3E5AB;
    }

    .portfolio-section .text-forest {
      color: #1B4D3E;
    }

    .portfolio-section .text-forest-dark {
      color: #0D261E;
    }

    .portfolio-section .text-ivory {
      color: #F9F9F5;
    }

    /* Background Colors */
    .portfolio-section .bg-gold {
      background-color: #D4AF37;
    }

    .portfolio-section .bg-forest {
      background-color: #1B4D3E;
    }

    .portfolio-section .bg-forest-dark {
      background-color: #0D261E;
    }

    .portfolio-section .bg-ivory {
      background-color: #F9F9F5;
    }

    /* Glass Effects */
    .portfolio-section .dark-glass {
      background: rgba(13, 38, 30, 0.85);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(212, 175, 55, 0.2);
    }

    /* Hover Effects */
    .portfolio-section .hover-lift {
      transition: transform 0.3s ease;
    }

    .portfolio-section .hover-lift:hover {
      transform: translateY(-4px);
    }

    /* Range Slider */
    .portfolio-section input[type=range] {
      -webkit-appearance: none;
      width: 100%;
      height: 4px;
      background: rgba(255,255,255,0.2);
      border-radius: 2px;
      outline: none;
    }

    .portfolio-section input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #D4AF37;
      cursor: pointer;
      border: 2px solid white;
      box-shadow: 0 0 15px rgba(212, 175, 55, 0.6);
      margin-top: -10px;
    }

    .portfolio-section input[type=range]::-webkit-slider-runnable-track {
      width: 100%;
      height: 4px;
      background: rgba(255,255,255,0.2);
      border-radius: 2px;
    }

    /* Utility Classes */
    .portfolio-section .tracking-widest {
      letter-spacing: 0.2em;
    }

    .portfolio-section .border-gold {
      border-color: #D4AF37;
    }

    .portfolio-section .hover-gold:hover {
      color: #D4AF37;
    }

    /* Gallery Grid */
    .portfolio-section .gallery-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: minmax(200px, auto);
      gap: 1.5rem;
    }

    .portfolio-section .col-span-2 {
      grid-column: span 2;
    }

    .portfolio-section .row-span-2 {
      grid-row: span 2;
    }

    @media (max-width: 768px) {
      .portfolio-section .gallery-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
      
      .portfolio-section .col-span-2,
      .portfolio-section .row-span-2 {
        grid-column: span 1;
        grid-row: span 1;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="portfolio-section font-sans-custom">

        {/* Strategy Section - Twin Pillars */}
        <section style={{ backgroundColor: '#F9F9F5', padding: '6rem 1rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ 
                color: '#1B4D3E', 
                fontSize: '0.75rem', 
                fontWeight: 'bold',
                letterSpacing: '0.2em',
                textTransform: 'uppercase'
              }}>
                {t.strategy_badge}
              </span>
              <h2 style={{ 
                fontSize: 'clamp(2rem, 5vw, 3rem)', 
                color: '#0D261E', 
                marginTop: '0.75rem',
                fontFamily: language === 'bn' ? "'Hind Siliguri', serif" : "'Cormorant Garamond', serif",
                fontWeight: 600
              }}>
                {t.strategy_title}
              </h2>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {/* Agro Pillar */}
              <div style={{ position: 'relative' }}>
                <div style={{ 
                  position: 'absolute', 
                  inset: '-0.5rem',
                  background: 'linear-gradient(to right, rgba(212, 175, 55, 0.2), rgba(27, 77, 62, 0.2))',
                  borderRadius: '0.75rem',
                  filter: 'blur(8px)',
                  opacity: 0.5,
                  transition: 'opacity 0.5s'
                }}></div>
                <div style={{ 
                  position: 'relative',
                  background: 'white',
                  padding: '3rem',
                  borderRadius: '0.75rem',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #f3f4f6'
                }}>
                  <div style={{ 
                    width: '4rem',
                    height: '4rem',
                    background: 'rgba(27, 77, 62, 0.05)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    fontSize: '1.5rem',
                    color: '#1B4D3E'
                  }}>
                    🌿
                  </div>
                  <h3 style={{ 
                    fontSize: '1.875rem',
                    color: '#0D261E',
                    marginBottom: '0.5rem',
                    fontFamily: language === 'bn' ? "'Hind Siliguri', serif" : "'Cormorant Garamond', serif"
                  }}>
                    {t.agro_title}
                  </h3>
                  <h4 style={{ 
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    color: '#D4AF37',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    marginBottom: '1.5rem'
                  }}>
                    {t.agro_subtitle}
                  </h4>
                  <p style={{ color: '#4b5563', lineHeight: '1.625' }}>
                    {t.agro_desc}
                  </p>
                </div>
              </div>

              {/* Complex Pillar */}
              <div style={{ position: 'relative' }}>
                <div style={{ 
                  position: 'absolute', 
                  inset: '-0.5rem',
                  background: 'linear-gradient(to right, rgba(27, 77, 62, 0.2), rgba(212, 175, 55, 0.2))',
                  borderRadius: '0.75rem',
                  filter: 'blur(8px)',
                  opacity: 0.5,
                  transition: 'opacity 0.5s'
                }}></div>
                <div style={{ 
                  position: 'relative',
                  background: 'white',
                  padding: '3rem',
                  borderRadius: '0.75rem',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #f3f4f6'
                }}>
                  <div style={{ 
                    width: '4rem',
                    height: '4rem',
                    background: 'rgba(212, 175, 55, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    fontSize: '1.5rem',
                    color: '#D4AF37'
                  }}>
                    🏛️
                  </div>
                  <h3 style={{ 
                    fontSize: '1.875rem',
                    color: '#0D261E',
                    marginBottom: '0.5rem',
                    fontFamily: language === 'bn' ? "'Hind Siliguri', serif" : "'Cormorant Garamond', serif"
                  }}>
                    {t.complex_title}
                  </h3>
                  <h4 style={{ 
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    color: '#1B4D3E',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    marginBottom: '1.5rem'
                  }}>
                    {t.complex_subtitle}
                  </h4>
                  <p style={{ color: '#4b5563', lineHeight: '1.625' }}>
                    {t.complex_desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section style={{ backgroundColor: '#0D261E', padding: '6rem 1rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ 
              display: 'flex',
              flexDirection: window.innerWidth > 768 ? 'row' : 'column',
              justifyContent: 'space-between',
              alignItems: window.innerWidth > 768 ? 'flex-end' : 'flex-start',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              paddingBottom: '2rem',
              marginBottom: '3rem'
            }}>
              <div>
                <h2 style={{ 
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  color: 'white',
                  fontFamily: language === 'bn' ? "'Hind Siliguri', serif" : "'Cormorant Garamond', serif"
                }}>
                  {t.gallery_title}
                </h2>
                <p style={{ color: '#9ca3af', marginTop: '0.5rem', fontWeight: 300 }}>
                  {t.gallery_subtitle}
                </p>
              </div>
              <button style={{ 
                color: '#D4AF37',
                fontSize: '0.875rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                marginTop: window.innerWidth > 768 ? '0' : '1rem'
              }}>
                View Master Plan →
              </button>
            </div>

            <div style={{ 
              display: 'grid',
              gridTemplateColumns: window.innerWidth > 768 ? 'repeat(4, 1fr)' : '1fr',
              gap: '1.5rem',
              minHeight: window.innerWidth > 768 ? '600px' : 'auto'
            }}>
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  style={{ 
                    gridColumn: window.innerWidth > 768 ? img.span.includes('col-span-2') ? 'span 2' : 'span 1' : 'span 1',
                    gridRow: window.innerWidth > 768 ? img.span.includes('row-span-2') ? 'span 2' : 'span 1' : 'span 1',
                    position: 'relative',
                    borderRadius: '0.125rem',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    height: window.innerWidth > 768 ? 'auto' : '300px'
                  }}
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    style={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.7s',
                      opacity: 0.8
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{ 
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)'
                  }}></div>
                  <div style={{ 
                    position: 'absolute',
                    bottom: '1.5rem',
                    left: '1.5rem'
                  }}>
                    <h3 style={{ 
                      fontSize: '1.25rem',
                      color: 'white',
                      fontFamily: language === 'bn' ? "'Hind Siliguri', serif" : "'Cormorant Garamond', serif"
                    }}>
                      {img.title}
                    </h3>
                    <p style={{ 
                      color: '#D4AF37',
                      fontSize: '0.75rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      marginTop: '0.25rem'
                    }}>
                      {img.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legacy Calculator */}
        <section style={{ 
          backgroundColor: '#0D261E', 
          position: 'relative',
          padding: '6rem 1rem'
        }}>
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '600px',
            height: '600px',
            background: '#D4AF37',
            borderRadius: '50%',
            filter: 'blur(150px)',
            opacity: 0.1,
            pointerEvents: 'none'
          }}></div>

          {/* <div style={{ maxWidth: '1152px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: window.innerWidth > 1024 ? 'repeat(12, 1fr)' : '1fr',
              gap: '4rem',
              alignItems: 'center'
            }}>
             
              <div style={{ gridColumn: window.innerWidth > 1024 ? 'span 5' : 'span 1', color: 'white' }}>
                <h2 style={{ 
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontFamily: language === 'bn' ? "'Hind Siliguri', serif" : "'Cormorant Garamond', serif",
                  marginBottom: '1.5rem'
                }}>
                  {t.calc_title}
                </h2>
                <p style={{ color: '#9ca3af', fontWeight: 300, lineHeight: '1.625', marginBottom: '1.5rem' }}>
                  {t.calc_desc}
                </p>

                <div style={{ 
                  paddingTop: '1.5rem',
                  borderTop: '1px solid rgba(255,255,255,0.1)'
                }}>
                  <div style={{ 
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#D4AF37',
                    marginBottom: '0.5rem'
                  }}>
                    {language === 'en' ? 'Your Privileges' : 'আপনার বিশেষ সুবিধাসমূহ'}
                  </div>
                  <h3 style={{ 
                    fontSize: '1.5rem',
                    fontFamily: language === 'bn' ? "'Hind Siliguri', serif" : "'Cormorant Garamond', serif",
                    marginBottom: '0.5rem'
                  }}>
                    {tier.name}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
                    {tier.perks}
                  </p>
                </div>
              </div>

              
              <div style={{ gridColumn: window.innerWidth > 1024 ? 'span 7' : 'span 1' }}>
                <div style={{
                  background: 'rgba(13, 38, 30, 0.85)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  padding: '2.5rem',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}>
                
                  <div style={{ marginBottom: '2.5rem' }}>
                    <div style={{ 
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-end',
                      marginBottom: '1rem'
                    }}>
                      <label style={{ 
                        fontSize: '0.75rem',
                        color: '#D4AF37',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em'
                      }}>
                        {t.calc_keys}
                      </label>
                      <div style={{ 
                        fontSize: '3rem',
                        fontFamily: language === 'bn' ? "'Hind Siliguri', serif" : "'Cormorant Garamond', serif",
                        color: 'white'
                      }}>
                        {shareCount}
                      </div>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="60"
                      value={shareCount}
                      onChange={(e) => setShareCount(parseInt(e.target.value))}
                      step="1"
                      style={{ width: '100%' }}
                    />
                    <div style={{ 
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginTop: '0.75rem',
                      fontSize: '0.625rem',
                      color: '#6b7280',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em'
                    }}>
                      <span>{t.tiers.executive} (1)</span>
                      <span>{t.tiers.platinum} (50+)</span>
                    </div>
                  </div>

                 
                  <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '2rem',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '2rem',
                    marginBottom: '2rem'
                  }}>
                    <div>
                      <span style={{ 
                        fontSize: '0.75rem',
                        color: '#6b7280',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        display: 'block',
                        marginBottom: '0.25rem'
                      }}>
                        {t.calc_investment}
                      </span>
                      <div style={{ 
                        fontSize: '1.875rem',
                        fontFamily: language === 'bn' ? "'Hind Siliguri', serif" : "'Montserrat', serif",
                        color: 'white'
                      }}>
                        {formatCurrency(investment)}
                      </div>
                      {tier.discount > 0 && (
                        <div style={{ 
                          fontSize: '0.75rem',
                          color: '#D4AF37',
                          marginTop: '0.25rem'
                        }}>
                          {(tier.discount * 100).toFixed(1)}% {language === 'en' ? 'Privilege Applied' : 'ছাড় প্রযোজ্য'}
                        </div>
                      )}
                    </div>
                    <div>
                      <span style={{ 
                        fontSize: '0.75rem',
                        color: '#6b7280',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        display: 'block',
                        marginBottom: '0.25rem'
                      }}>
                        {t.calc_value}
                      </span>
                      <div style={{ 
                        fontSize: '1.875rem',
                        fontFamily: language === 'bn' ? "'Hind Siliguri', serif" : "'Montserrat', serif",
                        color: '#D4AF37'
                      }}>
                        {formatCurrency(futureValue)}
                      </div>
                      <div style={{ 
                        fontSize: '0.75rem',
                        color: '#6b7280',
                        marginTop: '0.25rem'
                      }}>
                        {language === 'en' ? 'With Capital Appreciation' : 'জমির মূল্যবৃদ্ধি সহ'}
                      </div>
                    </div>
                  </div>

                  <button style={{
                    width: '100%',
                    padding: '1.25rem',
                    backgroundColor: '#D4AF37',
                    border: 'none',
                    color: '#0D261E',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'white';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#D4AF37';
                    e.target.style.transform = 'translateY(0)';
                  }}>
                    {t.calc_cta}
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </section>
      </div>
    </>
  );
};

export default InvestmentPortfolioRebuilt;