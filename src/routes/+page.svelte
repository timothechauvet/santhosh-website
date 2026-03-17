<script>
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { MessageCircle } from 'lucide-svelte';

  const projects = [
    { title: 'Modern Villa', location: 'Mysuru, KA', img: 'villa.jpg' },
    { title: 'Commercial Plaza', location: 'Hubballi, KA', img: 'plaza.jpg' },
    { title: 'Smart Residency', location: 'Mangaluru, KA', img: 'residency.jpg' }
  ];

  let currentIndex = 0;
  let isLangMenuOpen = false;

  onMount(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % projects.length;
    }, 3500);

    /** @param {MouseEvent} e */
    const handleOutsideClick = (e) => {
      const fab = document.getElementById('lang-fab');
      const menu = document.getElementById('lang-menu-floating');
      if (menu && fab && !fab.contains(e.target) && !menu.contains(e.target)) {
        isLangMenuOpen = false;
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      clearInterval(interval);
      document.removeEventListener('click', handleOutsideClick);
    };
  });

  /** 
   * @param {number} index 
   * @param {number} current 
   */
  function getCardClass(index, current) {
    if (index === current) return 'card-active';
    if (index === (current + 1) % projects.length) return 'card-next';
    if (index === (current - 1 + projects.length) % projects.length) return 'card-exit';
    return 'card-hidden';
  }

  function toggleLangMenu() {
    isLangMenuOpen = !isLangMenuOpen;
  }
</script>

<svelte:head>
  <style data-purpose="aero-effects">
    /* Frutiger Aero Glossy Effects */
    .glossy-surface {
      background: rgba(255, 255, 255, 0.4);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.6);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07), inset 0 0 15px rgba(255, 255, 255, 0.5);
    }
    
    .glossy-card {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.3) 100%);
      backdrop-filter: blur(8px);
      border-radius: 24px;
      border: 1px solid rgba(255, 255, 255, 0.8);
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), inset 0 2px 4px rgba(255, 255, 255, 0.9);
    }

    .hero-orb {
      position: absolute;
      filter: blur(60px);
      z-index: -1;
      opacity: 0.6;
    }

    /* Card Slider Animations */
    #project-slider .project-card {
      transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .card-active {
      transform: translateY(0) scale(1);
      z-index: 30;
      opacity: 1;
    }

    .card-next {
      transform: translateY(40px) scale(0.9) rotateX(-5deg);
      z-index: 20;
      opacity: 0.6;
    }

    .card-hidden {
      transform: translateY(100px) scale(0.8);
      z-index: 10;
      opacity: 0;
    }

    .card-exit {
      transform: translateY(200px) scale(0.8);
      z-index: 0;
      opacity: 0;
    }

    /* Icon Gloss */
    .icon-gloss {
      background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
    }

    .squircle-bg {
      mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M0,50 C0,10 10,0 50,0 C90,0 100,10 100,50 C100,90 90,100 50,100 C10,100 0,90 0,50' fill='%23000'/%3E%3C/svg%3E");
      -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M0,50 C0,10 10,0 50,0 C90,0 100,10 100,50 C100,90 90,100 50,100 C10,100 0,90 0,50' fill='%23000'/%3E%3C/svg%3E");
      mask-size: contain;
      -webkit-mask-size: contain;
      transition: transform 0.3s ease;
    }

    /* Service Icon Hover Animation */
    .service-card:hover .squircle-container {
      transform: rotate(12deg) scale(1.1);
    }
    
    .service-card:hover .service-icon {
      transform: rotate(-12deg);
    }

    .squircle-container {
      transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      width: 90px;
      height: 90px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .service-icon {
      transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Simplified Solar Button */
    .solar-cta {
      background: linear-gradient(180deg, #39D353 0%, #22C55E 100%);
      border: 1px solid rgba(255,255,255,0.4);
      box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3), inset 0 2px 4px rgba(255,255,255,0.4);
      transition: all 0.3s ease;
    }

    .solar-cta:hover {
      transform: translateY(-2px);
      filter: brightness(1.05);
      box-shadow: 0 6px 16px rgba(34, 197, 94, 0.4), inset 0 2px 4px rgba(255,255,255,0.5);
    }

    .solar-cta:active {
      transform: translateY(1px);
      box-shadow: 0 2px 8px rgba(34, 197, 94, 0.3);
    }

    /* Floating Lang Styles */
    #lang-menu-floating {
      animation: menuFadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    @keyframes menuFadeIn {
      from { opacity: 0; transform: translateY(10px) scale(0.95); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
  </style>
</svelte:head>

<div class="pt-24 min-h-screen flex flex-col">
  <!-- BEGIN: Hero Orbs Background -->
  <div class="fixed inset-0 overflow-hidden pointer-events-none -z-10">
    <div class="hero-orb bg-aero-green w-[500px] h-[500px] -top-48 -left-48"></div>
    <div class="hero-orb bg-blue-300 w-[400px] h-[400px] top-1/2 -right-24"></div>
  </div>
  <!-- END: Hero Orbs Background -->

  <!-- BEGIN: Sticky Header -->
  <header class="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-xl border-b border-white/40 z-[100] glossy-surface">
    <div class="container mx-auto px-6 h-20 flex justify-between items-center">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-aero-green-gradient rounded-xl flex items-center justify-center p-1 shadow-lg relative overflow-hidden group">
          <div class="absolute inset-0 icon-gloss opacity-40"></div>
          <span class="text-white font-black text-xl relative z-10">GV</span>
        </div>
        <span class="font-bold text-xl tracking-tight text-aero-dark hidden sm:block">Golden Village</span>
      </div>
      <a class="solar-cta text-white px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all" href="https://wa.me/#">
        <MessageCircle class="w-5 h-5" />
        <span>Chat now</span>
      </a>
    </div>
  </header>
  <!-- END: Sticky Header -->

  <main class="flex-grow">
    <!-- BEGIN: Hero Section -->
    <section class="container mx-auto px-6 py-12 md:py-32">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-20 lg:gap-32">
        <div class="flex-1 space-y-10 text-center lg:text-left" data-purpose="hero-content">
          <div class="space-y-4">
            <h1 class="text-5xl md:text-8xl font-extrabold text-slate-900 leading-tight">
              Santhosh <span class="text-aero-green">.D</span>
            </h1>
            <p class="text-xl md:text-2xl font-bold text-aero-dark/60 tracking-widest uppercase">
              D.C.E. Diploma in Civil Engineering
            </p>
            <p class="text-lg md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Crafting modern residential landmarks and high-performance commercial spaces throughout <b>Karnataka, India</b>.
            </p>
          </div>
          <div class="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <a class="solar-cta text-white px-10 py-5 rounded-full font-bold text-xl flex items-center justify-center gap-3 transition-all" href="https://wa.me/#">
              <MessageCircle class="w-7 h-7" />
              WhatsApp Inquiry
            </a>
          </div>
        </div>

        <div class="relative h-[450px] w-full max-w-sm flex items-center justify-center perspective-1000" data-purpose="hero-slider">
          <div class="relative w-full h-[450px]" id="project-slider">
            {#each projects as project, i}
              <div class="project-card {getCardClass(i, currentIndex)}">
                <div class="glossy-card w-full h-full p-4 flex flex-col">
                  <img alt="{project.title}" class="w-full h-2/3 object-cover rounded-2xl mb-4" src="{base}/images/{project.img}" />
                  <h3 class="text-2xl font-bold text-slate-800 text-left">{project.title}</h3>
                  <p class="text-aero-green font-medium text-left">{project.location}</p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </section>
    <!-- END: Hero Section -->

    <!-- BEGIN: Services Grid -->
    <section class="container mx-auto px-6 py-20 bg-white/30 backdrop-blur-sm rounded-[50px] my-10 border border-white/40">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Engineering Services</h2>
        <div class="w-24 h-2 bg-aero-green-gradient mx-auto rounded-full shadow-sm"></div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Service 1 -->
        <div class="service-card glossy-card p-10 text-center group hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-200/50 hover:bg-white/60">
          <div class="w-24 h-24 mx-auto mb-8 flex items-center justify-center overflow-visible">
            <div class="squircle-container relative">
              <div class="absolute inset-0 squircle-bg bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-lg"></div>
              <div class="relative w-full h-full flex items-center justify-center text-white icon-gloss rounded-2xl service-icon">
                <span class="material-symbols-outlined text-4xl font-light">straighten</span>
              </div>
            </div>
          </div>
          <h3 class="text-2xl font-bold mb-4 text-slate-800 transition-colors group-hover:text-cyan-600">Consulting</h3>
          <p class="text-slate-600 text-base leading-relaxed">Expert structural advisory and project feasibility studies for long-term viability.</p>
        </div>
        <!-- Service 2 -->
        <div class="service-card glossy-card p-10 text-center group hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200/50 hover:bg-white/60">
          <div class="w-24 h-24 mx-auto mb-8 flex items-center justify-center overflow-visible">
            <div class="squircle-container relative">
              <div class="absolute inset-0 squircle-bg bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg"></div>
              <div class="relative w-full h-full flex items-center justify-center text-white icon-gloss rounded-2xl service-icon">
                <span class="material-symbols-outlined text-4xl font-light">architecture</span>
              </div>
            </div>
          </div>
          <h3 class="text-2xl font-bold mb-4 text-slate-800 transition-colors group-hover:text-blue-600">Planning</h3>
          <p class="text-slate-600 text-base leading-relaxed">Innovative architectural layouts and precise 2D/3D civil blueprints.</p>
        </div>
        <!-- Service 3 -->
        <div class="service-card glossy-card p-10 text-center group hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-200/50 hover:bg-white/60">
          <div class="w-24 h-24 mx-auto mb-8 flex items-center justify-center overflow-visible">
            <div class="squircle-container relative">
              <div class="absolute inset-0 squircle-bg bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg"></div>
              <div class="relative w-full h-full flex items-center justify-center text-white icon-gloss rounded-2xl service-icon">
                <span class="material-symbols-outlined text-4xl font-light">monitoring</span>
              </div>
            </div>
          </div>
          <h3 class="text-2xl font-bold mb-4 text-slate-800 transition-colors group-hover:text-yellow-600">Estimation</h3>
          <p class="text-slate-600 text-base leading-relaxed">Accurate BOQ and cost management to optimize your construction budget.</p>
        </div>
        <!-- Service 4 -->
        <div class="service-card glossy-card p-10 text-center group hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl hover:shadow-red-200/50 hover:bg-white/60">
          <div class="w-24 h-24 mx-auto mb-8 flex items-center justify-center overflow-visible">
            <div class="squircle-container relative">
              <div class="absolute inset-0 squircle-bg bg-gradient-to-br from-red-400 to-red-600 shadow-lg"></div>
              <div class="relative w-full h-full flex items-center justify-center text-white icon-gloss rounded-2xl service-icon">
                <span class="material-symbols-outlined text-4xl font-light">verified</span>
              </div>
            </div>
          </div>
          <h3 class="text-2xl font-bold mb-4 text-slate-800 transition-colors group-hover:text-red-600">Quality Audits</h3>
          <p class="text-slate-600 text-base leading-relaxed">Rigorous material testing and site inspections for guaranteed excellence.</p>
        </div>
      </div>
    </section>
    <!-- END: Services Grid -->

    <!-- BEGIN: Mid-Section Pathways -->
    <section class="container mx-auto px-6 py-20 sm:py-32">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Build your idea</h2>
        <div class="w-24 h-2 bg-aero-green-gradient mx-auto rounded-full shadow-sm"></div>
      </div>
      <div class="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
        <!-- Residential Card -->
        <div class="relative overflow-hidden rounded-[40px] group aspect-[4/5] sm:aspect-square md:aspect-[4/5] lg:aspect-[4/3] glossy-surface p-2 shadow-xl">
          <div class="relative w-full h-full overflow-hidden rounded-[34px]">
            <img alt="Luxury Home" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="{base}/images/luxury-home.jpg" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-6 sm:p-10 flex flex-col justify-end">
              <div class="mb-4 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-lg border border-white/30 group-hover:scale-110 transition-transform">
                <span class="material-symbols-outlined text-3xl">home</span>
              </div>
              <h3 class="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 leading-tight">Build Your Dream Home</h3>
              <p class="text-white/80 mb-6 sm:mb-8 max-w-xs sm:max-w-sm text-sm sm:text-base lg:text-lg leading-relaxed line-clamp-3">From foundation to finishing, we turn your residential vision into a masterpiece.</p>
              <div class="flex">
                <a class="solar-cta text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base transition-all inline-block whitespace-nowrap flex items-center gap-2" href="https://wa.me/#">
                  <MessageCircle class="w-4 h-4 sm:w-5 sm:h-5" />
                  Inquire now on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- Commercial Card -->
        <div class="relative overflow-hidden rounded-[40px] group aspect-[4/5] sm:aspect-square md:aspect-[4/5] lg:aspect-[4/3] glossy-surface p-2 shadow-xl">
          <div class="relative w-full h-full overflow-hidden rounded-[34px]">
            <img alt="Commercial Project" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="{base}/images/commercial-project.jpg" />
            <div class="absolute inset-0 bg-gradient-to-t from-aero-dark/95 via-aero-dark/40 to-transparent p-6 sm:p-10 flex flex-col justify-end">
              <div class="mb-4 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-lg border border-white/30 group-hover:scale-110 transition-transform">
                <span class="material-symbols-outlined text-3xl">corporate_fare</span>
              </div>
              <h3 class="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 leading-tight">Commercial Space</h3>
              <p class="text-white/80 mb-6 sm:mb-8 max-w-xs sm:max-w-sm text-sm sm:text-base lg:text-lg leading-relaxed line-clamp-3">Optimized business layouts with structural integrity and modern aesthetics.</p>
              <div class="flex">
                <a class="solar-cta text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base transition-all inline-block whitespace-nowrap flex items-center gap-2" href="https://wa.me/#">
                  <MessageCircle class="w-4 h-4 sm:w-5 sm:h-5" />
                  Inquire now on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- END: Mid-Section Pathways -->
  </main>

  <!-- BEGIN: Footer -->
  <footer class="bg-white/50 border-t border-white py-20 px-6 md:px-12 mt-20 glossy-surface mt-auto">
    <div class="container mx-auto grid md:grid-cols-2 gap-16 text-center md:text-left">
      <div class="space-y-8">
        <div class="flex items-center justify-center md:justify-start gap-3">
          <div class="w-12 h-12 bg-aero-green-gradient rounded-xl flex items-center justify-center p-1 shadow-lg relative overflow-hidden">
            <div class="absolute inset-0 icon-gloss opacity-40"></div>
            <span class="text-white font-black text-2xl relative z-10">GV</span>
          </div>
          <span class="font-bold text-2xl text-aero-dark">Golden Village</span>
        </div>
        <p class="text-slate-500 leading-relaxed text-lg max-w-md">
          Dedicated to engineering excellence across Karnataka. Shaping the future through sustainable and modern construction practices.
        </p>
        <p class="text-sm font-bold text-aero-green uppercase tracking-[0.2em]">Based in Karnataka, India Since Years</p>
      </div>
      <div class="space-y-8">
        <h4 class="font-bold text-xl text-slate-800">Contact Details</h4>
        <div class="space-y-6">
          <p class="flex items-start justify-center md:justify-start gap-4 text-slate-600 text-lg">
            <span class="text-2xl">📍</span>
            <span>Bengaluru &amp; Coastal Regions,<br/>Karnataka, India</span>
          </p>
          <a class="flex items-center justify-center md:justify-start gap-4 text-slate-600 hover:text-aero-green text-lg group" href="https://wa.me/#">
            <MessageCircle class="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span>9916936115</span>
          </a>
          <div class="pt-4">
            <a class="w-full flex items-center justify-center gap-2 solar-cta text-white font-bold py-5 rounded-full transition-all" href="https://wa.me/#">
              <MessageCircle class="w-5 h-5" />
              Inquire Now on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto mt-20 pt-10 border-t border-slate-200/50 text-center text-slate-400 text-sm">
      © {new Date().getFullYear()} Santhosh D. DCE. Built for Karnataka. All rights reserved.
    </div>
  </footer>

  <!-- BEGIN: Floating Language Toggle -->
  <div class="fixed bottom-6 right-6 z-[200] flex flex-col items-end gap-3">
    {#if isLangMenuOpen}
      <div class="flex flex-col items-stretch min-w-[140px] mb-2 bg-white/90 backdrop-blur-2xl border border-white/50 rounded-3xl shadow-2xl overflow-hidden glossy-surface" id="lang-menu-floating">
        <button class="w-full text-left px-5 py-3 text-slate-700 hover:bg-aero-green/10 font-semibold transition-colors border-b border-slate-100/50">English</button>
        <button class="w-full text-left px-5 py-3 text-slate-700 hover:bg-aero-green/10 font-semibold transition-colors border-b border-slate-100/50">ಕನ್ನಡ</button>
        <button class="w-full text-left px-5 py-3 text-slate-700 hover:bg-aero-green/10 font-semibold transition-colors border-b border-slate-100/50">हिंदी</button>
        <button class="w-full text-left px-5 py-3 text-slate-700 hover:bg-aero-green/10 font-semibold transition-colors">ತುಳು</button>
      </div>
    {/if}
    <button class="w-16 h-16 rounded-full bg-aero-green-gradient flex items-center justify-center text-white shadow-2xl border border-white/40 relative overflow-hidden active:scale-95 transition-transform" id="lang-fab" on:click={toggleLangMenu}>
      <div class="absolute inset-0 icon-gloss opacity-40"></div>
      <span class="material-symbols-outlined text-3xl font-light relative z-10">language</span>
    </button>
  </div>
  <!-- END: Floating Language Toggle -->
</div>
