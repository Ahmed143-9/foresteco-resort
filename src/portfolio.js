<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Exclusive 600 | Forest Eco Resort</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Fonts: Montserrat (English), Cormorant Garamond (English Serif), Hind Siliguri (Bangla) -->
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600&family=Hind+Siliguri:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        forest: '#1B4D3E',    
                        forestDark: '#0D261E',
                        gold: '#D4AF37',      
                        goldLight: '#F3E5AB',
                        ivory: '#F9F9F5',     
                    },
                    fontFamily: {
                        sans: ['Montserrat', 'Hind Siliguri', 'sans-serif'],
                        serif: ['Cormorant Garamond', 'Hind Siliguri', 'serif'],
                        bangla: ['Hind Siliguri', 'sans-serif']
                    }
                }
            }
        }
    </script>
    <style>
        html { scroll-behavior: smooth; }
        .text-glow { text-shadow: 0 0 25px rgba(212, 175, 55, 0.4); }
        .glass-card { background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); }
        .dark-glass { background: rgba(13, 38, 30, 0.85); backdrop-filter: blur(12px); border: 1px solid rgba(212, 175, 55, 0.2); }
        
        /* Language Toggle Switch */
        .toggle-checkbox:checked {
            right: 0;
            border-color: #D4AF37;
        }
        .toggle-checkbox:checked + .toggle-label {
            background-color: #D4AF37;
        }
        
        /* Slider Styling */
        input[type=range] { -webkit-appearance: none; width: 100%; background: transparent; }
        input[type=range]::-webkit-slider-thumb {
            -webkit-appearance: none; height: 24px; width: 24px; border-radius: 50%; 
            background: #D4AF37; cursor: pointer; margin-top: -10px; 
            border: 2px solid white; box-shadow: 0 0 15px rgba(212, 175, 55, 0.6);
        }
        input[type=range]::-webkit-slider-runnable-track {
            width: 100%; height: 4px; cursor: pointer; background: rgba(255,255,255,0.2); border-radius: 2px;
        }

        .fade-up { opacity: 0; transform: translateY(30px); animation: fadeInUp 1s forwards; }
        @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
    </style>
</head>
<body class="bg-ivory text-gray-800 antialiased font-sans">

    <!-- LANGUAGE FLOATING TOGGLE -->
    <div class="fixed top-24 right-4 z-50 flex items-center bg-forestDark/90 backdrop-blur border border-gold/30 rounded-full px-1 py-1 shadow-2xl">
        <button onclick="setLanguage('en')" id="btn-en" class="px-3 py-1 text-xs font-bold text-forestDark bg-gold rounded-full transition-all duration-300">ENG</button>
        <button onclick="setLanguage('bn')" id="btn-bn" class="px-3 py-1 text-xs font-bold text-gray-400 hover:text-white transition-all duration-300 font-bangla">বাংলা</button>
    </div>

    <!-- START HEADER SECTION -->
    <section class="relative w-full overflow-hidden">
        
        <!-- 1. HERO: THE VISION -->
        <div class="relative h-screen min-h-[750px] flex items-center justify-center bg-forestDark">
            <div class="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=2000" 
                     alt="Forest Eco Resort" 
                     class="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_12s_ease-in-out_infinite]">
                <div class="absolute inset-0 bg-gradient-to-t from-forestDark via-forestDark/50 to-transparent"></div>
            </div>

            <div class="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-8 fade-up" style="animation-delay: 0.2s;">
                <div class="inline-flex items-center gap-3 border-b border-gold/40 pb-3 mb-2">
                    <span class="w-1.5 h-1.5 bg-gold rounded-full"></span>
                    <span class="text-goldLight text-xs md:text-sm tracking-[0.3em] uppercase font-medium" data-i18n="hero_badge">By Invitation Only</span>
                    <span class="w-1.5 h-1.5 bg-gold rounded-full"></span>
                </div>
                
                <h1 class="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-none">
                    <span data-i18n="hero_title_1">The Exclusive</span> <span class="text-transparent bg-clip-text bg-gradient-to-r from-gold to-goldLight text-glow">600</span>
                </h1>
                
                <p class="text-xl md:text-2xl text-gray-200 font-serif italic max-w-3xl mx-auto leading-relaxed font-light" data-i18n="hero_subtitle">
                    "A private sanctuary where <span class="text-gold">land ownership</span> meets <span class="text-gold">living legacy</span>. <br class="hidden md:block">Debt-free. Asset-backed. Yours forever."
                </p>

                <div class="flex flex-col sm:flex-row gap-6 justify-center pt-10">
                    <button onclick="document.getElementById('strategy-section').scrollIntoView()" 
                            class="px-10 py-4 bg-gold hover:bg-white hover:text-forestDark text-forestDark font-bold tracking-widest uppercase text-xs transition-all duration-500 shadow-[0_0_25px_rgba(212,175,55,0.3)]"
                            data-i18n="cta_asset">
                        Discover The Asset
                    </button>
                    <button onclick="document.getElementById('legacy-calculator').scrollIntoView()" 
                            class="px-10 py-4 border border-white/30 text-white hover:bg-white/5 font-bold tracking-widest uppercase text-xs transition-all duration-300"
                            data-i18n="cta_calc">
                        Calculate Returns
                    </button>
                </div>
            </div>
        </div>

        <!-- 2. THE STRATEGY: TWIN PILLARS -->
        <div id="strategy-section" class="bg-ivory py-24 px-4">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16">
                    <span class="text-forest text-xs font-bold tracking-[0.2em] uppercase" data-i18n="strategy_badge">The Business of Leisure</span>
                    <h2 class="text-4xl md:text-5xl font-serif text-forestDark mt-3" data-i18n="strategy_title">Twin Pillars of Wealth</h2>
                    <p class="text-gray-500 max-w-2xl mx-auto mt-4 font-light" data-i18n="strategy_desc">
                        We don't just sell land; we cultivate a self-sustaining ecosystem. Your legacy is secured by two powerful engines working in harmony.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
                    
                    <!-- Pillar 1: AGRO (The Soul) -->
                    <div class="relative group">
                        <div class="absolute -inset-2 bg-gradient-to-r from-gold/20 to-forest/20 rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition duration-500"></div>
                        <div class="relative bg-white p-8 md:p-12 rounded-xl shadow-xl border border-gray-100">
                            <div class="w-16 h-16 bg-forest/5 rounded-full flex items-center justify-center mb-6 text-forest text-3xl">🌿</div>
                            <h3 class="text-3xl font-serif text-forestDark mb-4" data-i18n="agro_title">The Organic Soul</h3>
                            <h4 class="text-xs font-bold text-gold uppercase tracking-widest mb-6" data-i18n="agro_subtitle">10-Bigha Agro Zone</h4>
                            
                            <p class="text-gray-600 leading-relaxed mb-6" data-i18n="agro_text">
                                This is not just farming; it is a <strong>Farm-to-Table luxury</strong>. Our Dragon Fruit and Malta orchards don't just generate profit—they feed the resort's restaurants with premium organic produce.
                            </p>
                            <ul class="space-y-3">
                                <li class="flex items-start text-sm text-gray-500">
                                    <span class="text-gold mr-3">✦</span>
                                    <span data-i18n="agro_pt1"><strong>Home Delivery:</strong> Shareholders receive seasonal organic hampers delivered directly to their Dhaka residence.</span>
                                </li>
                                <li class="flex items-start text-sm text-gray-500">
                                    <span class="text-gold mr-3">✦</span>
                                    <span data-i18n="agro_pt2"><strong>High-Yield Cash Crops:</strong> Red Dragon Fruit yields maximize land utility, creating a steady dividend stream.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Pillar 2: COMPLEX (The Engine) -->
                    <div class="relative group">
                        <div class="absolute -inset-2 bg-gradient-to-r from-forest/20 to-gold/20 rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition duration-500"></div>
                        <div class="relative bg-white p-8 md:p-12 rounded-xl shadow-xl border border-gray-100">
                            <div class="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 text-gold text-3xl">🏛️</div>
                            <h3 class="text-3xl font-serif text-forestDark mb-4" data-i18n="complex_title">The Commercial Engine</h3>
                            <h4 class="text-xs font-bold text-forest uppercase tracking-widest mb-6" data-i18n="complex_subtitle">400-Pax Multipurpose Complex</h4>
                            
                            <p class="text-gray-600 leading-relaxed mb-6" data-i18n="complex_text">
                                While the Agro zone feeds the soul, the Complex funds the dream. By hosting <strong>Corporate Retreats and Grand Weddings</strong>, we ensure high occupancy even on weekdays.
                            </p>
                            <ul class="space-y-3">
                                <li class="flex items-start text-sm text-gray-500">
                                    <span class="text-forest mr-3">✦</span>
                                    <span data-i18n="complex_pt1"><strong>The "Lump-Sum" Model:</strong> Events generate massive single-check revenue, covering operational costs instantly.</span>
                                </li>
                                <li class="flex items-start text-sm text-gray-500">
                                    <span class="text-forest mr-3">✦</span>
                                    <span data-i18n="complex_pt2"><strong>Zero-Vacancy Strategy:</strong> Event attendees fill the 36-room Guest House, maximizing room & F&B revenue.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- 3. THE ASSET GALLERY -->
        <div class="bg-forestDark py-24 px-4 overflow-hidden">
            <div class="max-w-7xl mx-auto space-y-12">
                <div class="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8">
                    <div>
                        <h2 class="text-4xl md:text-5xl font-serif text-white" data-i18n="gallery_title">Your Estate Portfolio</h2>
                        <p class="text-gray-400 mt-2 font-light" data-i18n="gallery_subtitle">Tangible ownership. Saf Kabla Registration.</p>
                    </div>
                    <button class="text-gold text-sm tracking-widest uppercase hover:text-white transition mt-4 md:mt-0" data-i18n="gallery_cta">View Master Plan &rarr;</button>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-[800px] md:h-[600px]">
                    
                    <!-- Guest House (Anchor) -->
                    <div class="md:col-span-2 md:row-span-2 relative group rounded-sm overflow-hidden cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000" class="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                        <div class="absolute bottom-8 left-8">
                            <h3 class="text-2xl font-serif text-white" data-i18n="img_guest_title">The Guest House</h3>
                            <p class="text-gold text-xs tracking-widest uppercase mt-1" data-i18n="img_guest_desc">30 Premium Suites</p>
                        </div>
                    </div>

                    <!-- Complex (Engine) -->
                    <div class="md:col-span-2 relative group rounded-sm overflow-hidden cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div class="absolute bottom-6 left-6">
                            <h3 class="text-xl font-serif text-white" data-i18n="img_hall_title">The Grand Hall</h3>
                            <p class="text-gold text-xs tracking-widest uppercase mt-1" data-i18n="img_hall_desc">Weddings & Retreats</p>
                        </div>
                    </div>

                    <!-- Agro (Soul) -->
                    <div class="relative group rounded-sm overflow-hidden cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1559828854-1fa99042c16c?auto=format&fit=crop&q=80&w=600" class="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div class="absolute bottom-6 left-6">
                            <h3 class="text-lg font-serif text-white" data-i18n="img_agro_title">Organic Agro</h3>
                            <p class="text-gold text-xs tracking-widest uppercase mt-1" data-i18n="img_agro_desc">Dragon Fruit Yields</p>
                        </div>
                    </div>

                    <!-- Ferris Wheel (Attraction) -->
                    <div class="relative group rounded-sm overflow-hidden cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?auto=format&fit=crop&q=80&w=600" class="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div class="absolute bottom-6 left-6">
                            <h3 class="text-lg font-serif text-white" data-i18n="img_fun_title">Attractions</h3>
                            <p class="text-gold text-xs tracking-widest uppercase mt-1" data-i18n="img_fun_desc">Ferris Wheel & Base Camp</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 4. LEGACY CALCULATOR -->
        <div id="legacy-calculator" class="bg-forestDark relative py-24">
            <!-- Ambient Glow -->
            <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

            <div class="max-w-6xl mx-auto px-4 relative z-10">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    
                    <!-- Text Side -->
                    <div class="lg:col-span-5 text-white space-y-6">
                        <h2 class="text-4xl md:text-5xl font-serif">
                            <span data-i18n="calc_title_1">Design Your</span> <br><span class="text-gold italic" data-i18n="calc_title_2">Legacy</span>
                        </h2>
                        <p class="text-gray-400 font-light leading-relaxed" data-i18n="calc_desc">
                            Join a circle of visionaries. As a shareholder, you don't just earn returns; you unlock a lifestyle of privileges, international travel, and recognition.
                        </p>
                        
                        <div class="pt-6 border-t border-white/10">
                            <div class="text-xs uppercase tracking-widest text-gold mb-2" data-i18n="calc_privilege">Your Privileges</div>
                            <h3 id="tier-name" class="text-2xl font-serif text-white">Silver Member</h3>
                            <p id="tier-desc" class="text-sm text-gray-400 mt-2">Includes: Thailand Tour (3N/4D)</p>
                        </div>
                    </div>

                    <!-- Interactive Card -->
                    <div class="lg:col-span-7">
                        <div class="dark-glass p-10 rounded-sm shadow-2xl">
                            <div class="space-y-10">
                                <!-- Slider -->
                                <div>
                                    <div class="flex justify-between items-end mb-4">
                                        <label class="text-xs text-gold uppercase tracking-widest" data-i18n="calc_keys">Number of Keys (Shares)</label>
                                        <div class="text-5xl font-serif text-white" id="share-display">5</div>
                                    </div>
                                    <input type="range" id="share-slider" min="1" max="60" value="5" step="1" class="w-full">
                                    <div class="flex justify-between mt-3 text-[10px] text-gray-500 uppercase tracking-widest">
                                        <span data-i18n="calc_tier_1">Executive (1)</span>
                                        <span data-i18n="calc_tier_3">Platinum (50+)</span>
                                    </div>
                                </div>

                                <!-- Financials -->
                                <div class="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                                    <div>
                                        <span class="text-xs text-gray-500 uppercase tracking-widest block mb-1" data-i18n="calc_inv_label">Your Investment</span>
                                        <div id="investment-display" class="text-3xl font-serif text-white">35.50 Lakh</div>
                                        <div id="discount-display" class="text-xs text-gold mt-1">Silver Privilege Applied</div>
                                    </div>
                                    <div>
                                        <span class="text-xs text-gray-500 uppercase tracking-widest block mb-1" data-i18n="calc_val_label">5-Year Asset Value</span>
                                        <div id="value-display" class="text-3xl font-serif text-gold">62.10 Lakh</div>
                                        <div class="text-xs text-gray-500 mt-1" data-i18n="calc_val_sub">With Capital Appreciation</div>
                                    </div>
                                </div>

                                <button class="w-full py-5 bg-gold hover:bg-white text-forestDark font-bold uppercase tracking-widest text-xs transition-all duration-300" data-i18n="calc_cta">
                                    Secure Your Allocation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <!-- LOGIC SCRIPT -->
    <script>
        // --- TRANSLATION DATA (Thematic) ---
        const translations = {
            en: {
                hero_badge: "By Invitation Only",
                hero_title_1: "The Exclusive",
                hero_subtitle: `"A private sanctuary where <span class="text-gold">land ownership</span> meets <span class="text-gold">living legacy</span>. <br class="hidden md:block">Debt-free. Asset-backed. Yours forever."`,
                cta_asset: "Discover The Asset",
                cta_calc: "Calculate Returns",
                strategy_badge: "The Business of Leisure",
                strategy_title: "Twin Pillars of Wealth",
                strategy_desc: "We don't just sell land; we cultivate a self-sustaining ecosystem. Your legacy is secured by two powerful engines working in harmony.",
                agro_title: "The Organic Soul",
                agro_subtitle: "10-Bigha Agro Zone",
                agro_text: "This is not just farming; it is a <strong>Farm-to-Table luxury</strong>. Our Dragon Fruit and Malta orchards don't just generate profit—they feed the resort's restaurants with premium organic produce.",
                agro_pt1: "<strong>Home Delivery:</strong> Shareholders receive seasonal organic hampers delivered directly to their Dhaka residence.",
                agro_pt2: "<strong>High-Yield Cash Crops:</strong> Red Dragon Fruit yields maximize land utility, creating a steady dividend stream.",
                complex_title: "The Commercial Engine",
                complex_subtitle: "400-Pax Multipurpose Complex",
                complex_text: "While the Agro zone feeds the soul, the Complex funds the dream. By hosting <strong>Corporate Retreats and Grand Weddings</strong>, we ensure high occupancy even on weekdays.",
                complex_pt1: "<strong>The 'Lump-Sum' Model:</strong> Events generate massive single-check revenue, covering operational costs instantly.",
                complex_pt2: "<strong>Zero-Vacancy Strategy:</strong> Event attendees fill the 36-room Guest House, maximizing room & F&B revenue.",
                gallery_title: "Your Estate Portfolio",
                gallery_subtitle: "Tangible ownership. Saf Kabla Registration.",
                gallery_cta: "View Master Plan →",
                img_guest_title: "The Guest House",
                img_guest_desc: "30 Premium Suites",
                img_hall_title: "The Grand Hall",
                img_hall_desc: "Weddings & Retreats",
                img_agro_title: "Organic Agro",
                img_agro_desc: "Dragon Fruit Yields",
                img_fun_title: "Attractions",
                img_fun_desc: "Ferris Wheel & Base Camp",
                calc_title_1: "Design Your",
                calc_title_2: "Legacy",
                calc_desc: "Join a circle of visionaries. As a shareholder, you don't just earn returns; you unlock a lifestyle of privileges, international travel, and recognition.",
                calc_privilege: "Your Privileges",
                calc_keys: "Number of Keys (Shares)",
                calc_tier_1: "Executive (1)",
                calc_tier_3: "Platinum (50+)",
                calc_inv_label: "Your Investment",
                calc_val_label: "5-Year Asset Value",
                calc_val_sub: "With Capital Appreciation",
                calc_cta: "Secure Your Allocation"
            },
            bn: {
                hero_badge: "শুধুমাত্র আমন্ত্রিতদের জন্য",
                hero_title_1: "এক্সক্লুসিভ",
                hero_subtitle: `"ইট-পাথরের জঙ্গল থেকে দূরে, আপনার নিজস্ব এক <span class="text-gold">নিভৃত স্বর্গ</span>। <br class="hidden md:block">যেখানে জমির মালিকানা আর আভিজাত্য মিলেমিশে একাকার।"`,
                cta_asset: "সম্পদ দেখুন",
                cta_calc: "রিটার্ন হিসাব করুন",
                strategy_badge: "অবকাশ যাপনের অর্থনীতি",
                strategy_title: "সমৃদ্ধির দুই স্তম্ভ",
                strategy_desc: "আমরা শুধু জমি বিক্রি করছি না; আমরা গড়ে তুলছি একটি স্বয়ংসম্পূর্ণ ইকো-সিস্টেম। আপনার উত্তরাধিকার সুরক্ষিত থাকবে দুটি শক্তিশালী আয়ের উৎসে।",
                agro_title: "প্রাণের স্পন্দন",
                agro_subtitle: "১০ বিঘার অর্গানিক অ্যাগ্রো জোন",
                agro_text: "এটি কেবল কৃষি নয়, এটি একটি <strong>পরিশুদ্ধ জীবনাচরণ</strong>। ড্রাগন ফ্রুট আর মাল্টা বাগান শুধু মুনাফাই দেয় না, রিসোর্টের অতিথিদের জন্য জোগান দেয় সতেজ অর্গানিক খাবার।",
                agro_pt1: "<strong>হোম ডেলিভারি:</strong> শেয়ারহোল্ডাররা পাবেন মৌসুমী অর্গানিক ফসলের উপহার, সরাসরি তাদের ঢাকার বাসভবনে।",
                agro_pt2: "<strong>উচ্চ ফলনশীল ফসল:</strong> রেড ড্রাগন ফ্রুটের বাম্পার ফলন জমির সর্বোচ্চ ব্যবহার নিশ্চিত করে এবং নিয়মিত লভ্যাংশ প্রদান করে।",
                complex_title: "বাণিজ্যিক শক্তি",
                complex_subtitle: "৪০০ জনের মাল্টিপারপাস কমপ্লেক্স",
                complex_text: "অ্যাগ্রো যদি হয় প্রকল্পের প্রাণ, তবে কমপ্লেক্স হলো তার ইঞ্জিন। <strong>কর্পোরেট রিট্রিট এবং রাজকীয় বিয়ে</strong> আয়োজনের মাধ্যমে আমরা নিশ্চিত করি সারা বছর জমজমাট অকুপেন্সি।",
                complex_pt1: "<strong>'লাম্প-সাম' মডেল:</strong> বড় ইভেন্টগুলো থেকে আসে বিশাল অংকের এককালীন আয়, যা দিয়ে পরিচালন ব্যয় সহজেই মিটে যায়।",
                complex_pt2: "<strong>শূন্য-ভ্যাকেন্সি কৌশল:</strong> ইভেন্টের অতিথিরাই গেস্ট হাউসের ৩৬টি রুম পূর্ণ রাখে, ফলে রুম ও খাবারের আয় বহুগুণ বেড়ে যায়।",
                gallery_title: "আপনার এস্টেট পোর্টফোলিও",
                gallery_subtitle: "দৃশ্যমান মালিকানা। সাফ কবলা রেজিস্ট্রি।",
                gallery_cta: "মাস্টার প্ল্যান দেখুন →",
                img_guest_title: "দ্য গেস্ট হাউস",
                img_guest_desc: "৩০টি প্রিমিয়াম স্যুট",
                img_hall_title: "দ্য গ্র্যান্ড হল",
                img_hall_desc: "বিয়ে এবং কর্পোরেট ইভেন্ট",
                img_agro_title: "অর্গানিক অ্যাগ্রো",
                img_agro_desc: "ড্রাগন ফলের ফলন",
                img_fun_title: "অ্যাট্রাকশন জোন",
                img_fun_desc: "নাগরদোলা এবং বেস ক্যাম্প",
                calc_title_1: "সাজিয়ে নিন আপনার",
                calc_title_2: "উত্তরাধিকার",
                calc_desc: "যুক্ত হোন ৬০০ জন স্বপ্নদ্রষ্টার অভিজাত বৃত্তে। একজন শেয়ারহোল্ডার হিসেবে আপনি কেবল মুনাফাই পাবেন না; উপভোগ করবেন আন্তর্জাতিক ভ্রমণ ও বিশেষ মর্যাদা।",
                calc_privilege: "আপনার বিশেষ সুবিধাসমূহ",
                calc_keys: "শেয়ার সংখ্যা (চাবি)",
                calc_tier_1: "এক্সিকিউটিভ (১)",
                calc_tier_3: "প্লাটিনাম (৫০+)",
                calc_inv_label: "আপনার বিনিয়োগ",
                calc_val_label: "৫ বছর পর সম্পদের মূল্য",
                calc_val_sub: "জমির মূল্যবৃদ্ধি সহ",
                calc_cta: "আপনার বরাদ্দ নিশ্চিত করুন"
            }
        };

        let currentLang = 'en';

        // --- CALCULATOR LOGIC ---
        const slider = document.getElementById('share-slider');
        const shareDisplay = document.getElementById('share-display');
        const investmentDisplay = document.getElementById('investment-display');
        const valueDisplay = document.getElementById('value-display');
        const tierName = document.getElementById('tier-name');
        const tierDesc = document.getElementById('tier-desc');
        const discountDisplay = document.getElementById('discount-display');

        const BASE_PRICE = 750000;
        const APPRECIATION = 1.15; // 15% Annual

        const formatMoney = (val) => {
            if (val >= 10000000) return (val / 10000000).toFixed(2) + " Cr";
            return (val / 100000).toFixed(2) + " Lakh";
        };

        const updateCalc = () => {
            const shares = parseInt(slider.value);
            shareDisplay.innerText = shares;

            let discount = 0;
            // Define Tier Names & Perks based on Language
            let tier = currentLang === 'en' ? "Executive Member" : "এক্সিকিউটিভ মেম্বার";
            let perks = currentLang === 'en' ? "Cox's Bazar Tour (2N/3D)" : "কক্সবাজার ভ্রমণ (২ রাত/৩ দিন)";

            if (shares >= 50) {
                tier = currentLang === 'en' ? "Platinum Founder" : "প্লাটিনাম ফাউন্ডার";
                perks = currentLang === 'en' ? "Board Eligibility + Audit Rights" : "বোর্ড মেম্বারশিপ যোগ্যতা + অডিট অধিকার";
                discount = 0.15; // 15%
            } else if (shares >= 10) {
                tier = currentLang === 'en' ? "Golden Member" : "গোল্ডেন মেম্বার";
                perks = currentLang === 'en' ? "Founder Recognition + Thailand Tour" : "ফাউন্ডার স্বীকৃতি + থাইল্যান্ড ভ্রমণ";
                discount = 0.10; // 10%
            } else if (shares >= 5) {
                tier = currentLang === 'en' ? "Silver Member" : "সিলভার মেম্বার";
                perks = currentLang === 'en' ? "Complimentary Thailand Tour (3N/4D)" : "থাইল্যান্ড ভ্রমণ (৩ রাত/৪ দিন)";
                discount = 0.0533; // ~5.33%
            }

            const total = shares * BASE_PRICE * (1 - discount);
            const future = total * Math.pow(APPRECIATION, 5);

            tierName.innerText = tier;
            tierDesc.innerText = (currentLang === 'en' ? "Privileges: " : "সুবিধাসমূহ: ") + perks;
            
            investmentDisplay.innerText = "BDT " + formatMoney(total);
            valueDisplay.innerText = "BDT " + formatMoney(future);

            if(discount > 0) {
                const discText = currentLang === 'en' ? "Privilege Applied" : "ছাড় প্রযোজ্য হয়েছে";
                discountDisplay.innerText = `${(discount*100).toFixed(1)}% ${discText}`;
                discountDisplay.style.color = '#D4AF37'; 
            } else {
                discountDisplay.innerText = currentLang === 'en' ? "Standard Access" : "স্ট্যান্ডার্ড অ্যাক্সেস";
                discountDisplay.style.color = '#9CA3AF'; 
            }
        };

        // --- LANGUAGE TOGGLE FUNCTION ---
        const setLanguage = (lang) => {
            currentLang = lang;
            
            // Toggle Button Styles
            const btnEn = document.getElementById('btn-en');
            const btnBn = document.getElementById('btn-bn');
            
            if (lang === 'en') {
                btnEn.className = "px-3 py-1 text-xs font-bold text-forestDark bg-gold rounded-full transition-all duration-300";
                btnBn.className = "px-3 py-1 text-xs font-bold text-gray-400 hover:text-white transition-all duration-300 font-bangla";
                document.body.classList.remove('font-bangla');
            } else {
                btnEn.className = "px-3 py-1 text-xs font-bold text-gray-400 hover:text-white transition-all duration-300";
                btnBn.className = "px-3 py-1 text-xs font-bold text-forestDark bg-gold rounded-full transition-all duration-300 font-bangla";
                document.body.classList.add('font-bangla');
            }

            // Update Text Elements
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if(translations[lang][key]) {
                    el.innerHTML = translations[lang][key];
                }
            });

            // Update Calculator
            updateCalc();
        }

        slider.addEventListener('input', updateCalc);
        updateCalc(); // Initial Calc Run
    </script>
</body>
</html>