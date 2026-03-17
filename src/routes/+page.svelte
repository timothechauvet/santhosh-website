<script>
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import { Mail } from "lucide-svelte";

  const translations = {
    en: {
      chatNow: "Chat now",
      dce: "D.C.E. Diploma in Civil Engineering",
      heroDesc:
        "Crafting modern residential landmarks and high-performance commercial spaces throughout <b>Karnataka, India</b>.",
      waInquiry: "WhatsApp Inquiry",
      servicesTitle: "Engineering Services",
      consulting: "Consulting",
      consultingDesc:
        "Expert structural advisory and project feasibility studies for long-term viability.",
      planning: "Planning",
      planningDesc:
        "Innovative architectural layouts and precise 2D/3D civil blueprints.",
      estimation: "Estimation",
      estimationDesc:
        "Accurate BOQ and cost management to optimize your construction budget.",
      quality: "Quality Audits",
      qualityDesc:
        "Rigorous material testing and site inspections for guaranteed excellence.",
      buildIdea: "Build your idea",
      dreamHome: "Build Your Dream Home",
      dreamHomeDesc:
        "From foundation to finishing, we turn your residential vision into a masterpiece.",
      inquireWa: "Inquire now on WhatsApp",
      commercial: "Commercial Space",
      commercialDesc:
        "Optimized business layouts with structural integrity and modern aesthetics.",
      footerDesc:
        "Dedicated to engineering excellence across Karnataka. Shaping the future through sustainable and modern construction practices.",
      footerYears: "Based in Karnataka, India since 2002",
      contactDetails: "Contact Details",
      location: "Bengaluru & Coastal Regions,<br/>Karnataka, India",
      rights:
        "Built for Karnataka. No personal data is collected. All rights reserved.",
      projects: [
        { title: "Modern Villa", location: "Mysuru, KA", img: "villa.jpg" },
        {
          title: "Commercial Plaza",
          location: "Hubballi, KA",
          img: "plaza.jpg",
        },
        {
          title: "Smart Residency",
          location: "Mangaluru, KA",
          img: "residency.jpg",
        },
      ],
    },
    kn: {
      chatNow: "ಈಗ ಚಾಟ್ ಮಾಡಿ",
      dce: "ಡಿ.ಸಿ.ಇ. ಸಿವಿಲ್ ಎಂಜಿನಿಯರಿಂಗ್‌ ಡಿಪ್ಲೊಮಾ",
      heroDesc:
        "<b>ಕರ್ನಾಟಕದಾದ್ಯಂತ</b> ಆಧುನಿಕ ವಸತಿ ಮತ್ತು ವಾಣಿಜ್ಯ ಕಟ್ಟಡಗಳ ನಿರ್ಮಾಣ.",
      waInquiry: "ವಾಟ್ಸಾಪ್ ವಿಚಾರಣೆ",
      servicesTitle: "ಎಂಜಿನಿಯರಿಂಗ್ ಸೇವೆಗಳು",
      consulting: "ಸಲಹೆ",
      consultingDesc:
        "ದೀರ್ಘಾವಧಿಯ ಬಾಳಿಕೆಗೆ ತಜ್ಞರ ರಚನಾತ್ಮಕ ಸಲಹೆ ಮತ್ತು ಯೋಜನೆಗಳ ಅಧ್ಯಯನ.",
      planning: "ಯೋಜನೆ",
      planningDesc:
        "ನವೀನ ವಾಸ್ತುಶಿಲ್ಪ ವಿನ್ಯಾಸಗಳು ಮತ್ತು ನಿಖರವಾದ 2D/3D ಸಿವಿಲ್ ನೀಲನಕ್ಷೆಗಳು.",
      estimation: "ಅಂದಾಜು",
      estimationDesc:
        "ನಿಮ್ಮ ಬಜೆಟ್ ಅನ್ನು ಉತ್ತಮಗೊಳಿಸಲು ನಿಖರವಾದ ಬಿಲ್‌ ಆಫ್ ಕ್ವಾಂಟಿಟೀಸ್ (BOQ).",
      quality: "ಗುಣಮಟ್ಟ ಪರಿಶೀಲನೆ",
      qualityDesc:
        "ಉತ್ತಮ ಗುಣಮಟ್ಟವನ್ನು ಖಚಿತಪಡಿಸಲು ಕಠಿಣ ವಸ್ತು ಪರೀಕ್ಷೆ ಮತ್ತು ಸೈಟ್ ತಪಾಸಣೆ.",
      buildIdea: "ನಿಮ್ಮ ಕನಸನ್ನು ನನಸಾಗಿಸಿ",
      dreamHome: "ನಿಮ್ಮ ಕನಸಿನ ಮನೆ ನಿರ್ಮಿಸಿ",
      dreamHomeDesc:
        "ಬುನಾದಿಯಿಂದ ಪೂರ್ಣಗೊಳ್ಳುವವರೆಗೆ, ನಿಮ್ಮ ವಸತಿ ದೃಷ್ಟಿಕೋನವನ್ನು ಮೇರುಕೃತಿಯಾಗಿ ಪರಿವರ್ತಿಸುತ್ತೇವೆ.",
      inquireWa: "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ವಿಚಾರಿಸಿ",
      commercial: "ವಾಣಿಜ್ಯ ಸ್ಥಳ",
      commercialDesc:
        "ರಚನಾತ್ಮಕ ಸಮಗ್ರತೆ ಮತ್ತು ಆಧುನಿಕ ಸೌಂದರ್ಯದೊಂದಿಗೆ ವಾಣಿಜ್ಯ ವಿನ್ಯಾಸಗಳು.",
      footerDesc:
        "ಕರ್ನಾಟಕದಾದ್ಯಂತ ಎಂಜಿನಿಯರಿಂಗ್ ಶ್ರೇಷ್ಠತೆಗೆ ಸಮರ್ಪಿತ. ಸುಸ್ಥಿರ ಮತ್ತು ಆಧುನಿಕ ನಿರ್ಮಾಣ ಅಭ್ಯಾಸಗಳ ಮೂಲಕ ಭವಿಷ್ಯವನ್ನು ರೂಪಿಸುವುದು.",
      footerYears: "ಕರ್ನಾಟಕದಲ್ಲಿ 2002 ರಿಂದ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದೆ",
      contactDetails: "ಸಂಪರ್ಕ ವಿವರಗಳು",
      location: "ಬೆಂಗಳೂರು ಮತ್ತು ಕರಾವಳಿ ಪ್ರದೇಶಗಳು,<br/>ಕರ್ನಾಟಕ, ಭಾರತ",
      rights:
        "ಕರ್ನಾಟಕಕ್ಕಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ. ಯಾವುದೇ ವೈಯಕ್ತಿಕ ಡೇಟಾವನ್ನು ಸಂಗ್ರಹಿಸಲಾಗಿಲ್ಲ. ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
      projects: [
        {
          title: "ಆಧುನಿಕ ವಿಲ್ಲಾ",
          location: "ಮೈಸೂರು, ಕರ್ನಾಟಕ",
          img: "villa.jpg",
        },
        {
          title: "ವಾಣಿಜ್ಯ ಪ್ಲಾಜಾ",
          location: "ಹುಬ್ಬಳ್ಳಿ, ಕರ್ನಾಟಕ",
          img: "plaza.jpg",
        },
        {
          title: "ಸ್ಮಾರ್ಟ್ ರೆಸಿಡೆನ್ಸಿ",
          location: "ಮಂಗಳೂರು, ಕರ್ನಾಟಕ",
          img: "residency.jpg",
        },
      ],
    },
    hi: {
      chatNow: "अभी चैट करें",
      dce: "डी.सी.ई. सिविल इंजीनियरिंग में डिप्लोमा",
      heroDesc:
        "<b>कर्नाटक, भारत</b> भर में आधुनिक आवासीय लैंडमार्क और उच्च प्रदर्शन वाले वाणिज्यिक स्थानों का निर्माण।",
      waInquiry: "व्हाट्सएप पूछताछ",
      servicesTitle: "इंजीनियरिंग सेवाएं",
      consulting: "परामर्श",
      consultingDesc:
        "दीर्घकालिक व्यवहार्यता के लिए विशेषज्ञ संरचनात्मक सलाह और व्यवहार्यता अध्ययन।",
      planning: "योजना",
      planningDesc: "अभिनव वास्तुशिल्प लेआउट और सटीक 2D/3D सिविल ब्लूप्रिंट।",
      estimation: "आकलन",
      estimationDesc:
        "आपके निर्माण बजट को अनुकूलित करने के लिए सटीक BOQ और लागत प्रबंधन।",
      quality: "गुणवत्ता ऑडिट",
      qualityDesc:
        "गारंटीकृत उत्कृष्टता के लिए कठोर सामग्री परीक्षण और साइट निरीक्षण।",
      buildIdea: "अपना विचार बनाएं",
      dreamHome: "अपने सपनों का घर बनाएं",
      dreamHomeDesc:
        "नींव से लेकर फिनिशिंग तक, हम आपके आवासीय दृष्टिकोण को एक उत्कृष्ट कृति में बदलते हैं।",
      inquireWa: "व्हाट्सएप पर पूछताछ करें",
      commercial: "वाणिज्यिक स्थान",
      commercialDesc:
        "संरचनात्मक अखंडता और आधुनिक सौंदर्यशास्त्र के साथ अनुकूलित व्यापार लेआउट।",
      footerDesc:
        "पूरे कर्नाटक में इंजीनियरिंग उत्कृष्टता के लिए समर्पित। टिकाऊ और आधुनिक निर्माण प्रथाओं के माध्यम से भविष्य को आकार देना।",
      footerYears: "कर्नाटक, भारत में 2002 से आधारित",
      contactDetails: "संपर्क विवरण",
      location: "बेंगलुरु और तटीय क्षेत्र,<br/>कर्नाटक, भारत",
      rights:
        "कर्नाटक के लिए निर्मित। कोई व्यक्तिगत डेटा एकत्र नहीं किया जाता है। सर्वाधिकार सुरक्षित।",
      projects: [
        { title: "आधुनिक विला", location: "मैसूर, कर्नाटक", img: "villa.jpg" },
        {
          title: "वाणिज्यिक प्लाजा",
          location: "हुबली, कर्नाटक",
          img: "plaza.jpg",
        },
        {
          title: "स्मार्ट रेजीडेंसी",
          location: "मैंगलोर, कर्नाटक",
          img: "residency.jpg",
        },
      ],
    },
    tcy: {
      chatNow: "ಇತ್ತೆ ಚಾಟ್ ಮಲ್ಪುಲೆ",
      dce: "ಡಿ.ಸಿ.ಇ. ಸಿವಿಲ್ ಎಂಜಿನಿಯರಿಂಗ್‌ ಡಿಪ್ಲೊಮಾ",
      heroDesc:
        "<b>ಕರ್ನಾಟಕದಾದ್ಯಂತ</b> ಆಧುನಿಕ ವಸತಿ ಬೊಕ್ಕ ವಾಣಿಜ್ಯ ಕಟ್ಟಡೊಲೆನ ನಿರ್ಮಾಣ.",
      waInquiry: "ವಾಟ್ಸಾಪ್ ವಿಚಾರಣೆ",
      servicesTitle: "ಎಂಜಿನಿಯರಿಂಗ್ ಸೇವೆಲು",
      consulting: "ಸಲಹೆ",
      consultingDesc: "ಎಡ್ಡೆ ಬಾಳಿಕೆಗ್ ತಜ್ಞರ ಸಲಹೆ ಬೊಕ್ಕ ಯೋಜನೆಲೆನ ಅಧ್ಯಯನ.",
      planning: "ಯೋಜನೆ",
      planningDesc:
        "ಪೊಸ ವಾಸ್ತುಶಿಲ್ಪ ವಿನ್ಯಾಸಲು ಬೊಕ್ಕ ನಿಖರವಾದ್ 2D/3D ಸಿವಿಲ್ ನೀಲನಕ್ಷೆಲು.",
      estimation: "ಅಂದಾಜು",
      estimationDesc:
        "ಬಜೆಟ್ ನಿರ್ವಹಣೆಗಾದ್ ನಿಖರವಾದ್ ಬಿಲ್‌ ಆಫ್ ಕ್ವಾಂಟಿಟೀಸ್ (BOQ).",
      quality: "ಗುಣಮಟ್ಟ ಪರಿಶೀಲನೆ",
      qualityDesc:
        "ಉತ್ತಮ ಗುಣಮಟ್ಟ ಖಚಿತ ಮಲ್ಪೆರೆ ಕಠಿಣ ವಸ್ತು ಪರೀಕ್ಷೆ ಬೊಕ್ಕ ಸೈಟ್ ತಪಾಸಣೆ.",
      buildIdea: "ನಿಕ್ಲೆನ ಕನಸು ನನಸ್ ಮಲ್ಪುಲೆ",
      dreamHome: "ನಿಕ್ಲೆನ ಕನಸುದ ಇಲ್ಲ್ ಕಟ್ಟುಲೆ",
      dreamHomeDesc:
        "ಬುನಾದಿರ್ದ್ ಪೂರ್ಣ ಆಪುನೆಟ್ಟ್, ನಿಕ್ಲೆನ ವಸತಿ ಕನಸುನು ನನಸ್ ಮಲ್ಪುವ. ",
      inquireWa: "ವಾಟ್ಸಾಪ್‌ಡ್ ವಿಚಾರಿಸಾಲೆ",
      commercial: "ವಾಣಿಜ್ಯ ಸ್ಥಳ",
      commercialDesc:
        "ರಚನಾತ್ಮಕ ಬೊಕ್ಕ ಆಧುನಿಕ ಸೌಂದರ್ಯದೊಟ್ಟುಗು ವಾಣಿಜ್ಯ ವಿನ್ಯಾಸಲು.",
      footerDesc:
        "ಕರ್ನಾಟಕದಾದ್ಯಂತ ಎಂಜಿನಿಯರಿಂಗ್ ಶ್ರೇಷ್ಠತೆಗ್ ಸಮರ್ಪಿತ. ಸುಸ್ಥಿರ ಬೊಕ್ಕ ಆಧುನಿಕ ನಿರ್ಮಾಣ ಅಭ್ಯಾಸೊಲೆನ ಮೂಲಕ ಭವಿಷ್ಯೊನು ರೂಪಿಸುವುನೆ.",
      footerYears: "ಕರ್ನಾಟಕೊಡು 2002 ರ್ದ್ ಕಾರ್ಯಾಚರಣೆ",
      contactDetails: "ಸಂಪರ್ಕ ವಿವರೊಲು",
      location: "ಬೆಂಗಳೂರು ಬೊಕ್ಕ ಕರಾವಳಿ ಪ್ರದೇಶೊಲು,<br/>ಕರ್ನಾಟಕ, ಭಾರತ",
      rights:
        "ಕರ್ನಾಟಕೊಗಾದ್ ನಿರ್ಮಾಣ. ಓವ್ವೇ ವೈಯಕ್ತಿಕ ಡೇಟಾ ಮಲ್ತ್‌ಜಿ. ಮಾತ ಹಕ್ಕು ಕಾಪಾಡ್‌ದ್ಂಡ್.",
      projects: [
        {
          title: "ಆಧುನಿಕ ವಿಲ್ಲಾ",
          location: "ಮೈಸೂರು, ಕರ್ನಾಟಕ",
          img: "villa.jpg",
        },
        {
          title: "ವಾಣಿಜ್ಯ ಪ್ಲಾಜಾ",
          location: "ಹುಬ್ಬಳ್ಳಿ, ಕರ್ನಾಟಕ",
          img: "plaza.jpg",
        },
        {
          title: "ಸ್ಮಾರ್ಟ್ ರೆಸಿಡೆನ್ಸಿ",
          location: "ಕುಡ್ಲ, ಕರ್ನಾಟಕ",
          img: "residency.jpg",
        },
      ],
    },
  };

  /** @type {'en' | 'kn' | 'hi' | 'tcy'} */
  let currentLang = "en";

  $: t = translations[currentLang];
  $: projects = t.projects;

  let currentIndex = 0;
  let isLangMenuOpen = false;

  onMount(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % projects.length;
    }, 3500);

    /** @param {MouseEvent} e */
    const handleOutsideClick = (e) => {
      const fab = document.getElementById("lang-fab");
      const menu = document.getElementById("lang-menu-floating");
      const target = /** @type {Node} */ (e.target);
      if (menu && fab && !fab.contains(target) && !menu.contains(target)) {
        isLangMenuOpen = false;
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      clearInterval(interval);
      document.removeEventListener("click", handleOutsideClick);
    };
  });

  /**
   * @param {number} index
   * @param {number} current
   */
  function getCardClass(index, current) {
    if (index === current) return "card-active";
    if (index === (current + 1) % projects.length) return "card-next";
    if (index === (current - 1 + projects.length) % projects.length)
      return "card-exit";
    return "card-hidden";
  }

  function toggleLangMenu() {
    isLangMenuOpen = !isLangMenuOpen;
  }

  /** @param {'en' | 'kn' | 'hi' | 'tcy'} lang */
  function selectLang(lang) {
    currentLang = lang;
    isLangMenuOpen = false;
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
      box-shadow:
        0 8px 32px 0 rgba(31, 38, 135, 0.07),
        inset 0 0 15px rgba(255, 255, 255, 0.5);
    }

    .glossy-card {
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.7) 0%,
        rgba(255, 255, 255, 0.3) 100%
      );
      backdrop-filter: blur(8px);
      border-radius: 24px;
      border: 1px solid rgba(255, 255, 255, 0.8);
      box-shadow:
        0 10px 25px -5px rgba(0, 0, 0, 0.05),
        inset 0 2px 4px rgba(255, 255, 255, 0.9);
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
      background: radial-gradient(
        circle at 30% 30%,
        rgba(255, 255, 255, 0.8) 0%,
        rgba(255, 255, 255, 0) 70%
      );
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
      background: linear-gradient(180deg, #39d353 0%, #22c55e 100%);
      border: 1px solid rgba(255, 255, 255, 0.4);
      box-shadow:
        0 4px 12px rgba(34, 197, 94, 0.3),
        inset 0 2px 4px rgba(255, 255, 255, 0.4);
      transition: all 0.3s ease;
    }

    .solar-cta:hover {
      transform: translateY(-2px);
      filter: brightness(1.05);
      box-shadow:
        0 6px 16px rgba(34, 197, 94, 0.4),
        inset 0 2px 4px rgba(255, 255, 255, 0.5);
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
      from {
        opacity: 0;
        transform: translateY(10px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
  </style>
</svelte:head>

{#snippet WhatsAppIcon(/** @type {string} */ className)}
  <svg
    class={className}
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <title>WhatsApp</title>
    <path
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
    />
  </svg>
{/snippet}

<div class="pt-24 min-h-screen flex flex-col">
  <!-- BEGIN: Hero Orbs Background -->
  <div class="fixed inset-0 overflow-hidden pointer-events-none -z-10">
    <div
      class="hero-orb bg-aero-green w-[500px] h-[500px] -top-48 -left-48"
    ></div>
    <div
      class="hero-orb bg-blue-300 w-[400px] h-[400px] top-1/2 -right-24"
    ></div>
  </div>
  <!-- END: Hero Orbs Background -->

  <!-- BEGIN: Sticky Header -->
  <header
    class="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-xl border-b border-white/40 z-[100] glossy-surface"
  >
    <div class="container mx-auto px-6 h-20 flex justify-between items-center">
      <div class="flex items-center gap-3">
        <div
          class="w-10 h-10 bg-aero-green-gradient rounded-xl flex items-center justify-center p-1 shadow-lg relative overflow-hidden group"
        >
          <div class="absolute inset-0 icon-gloss opacity-40"></div>
          <span class="text-white font-black text-xl relative z-10">GV</span>
        </div>
        <span
          class="font-bold text-xl tracking-tight text-aero-dark hidden sm:block"
          >Golden Village</span
        >
      </div>
      <a
        class="solar-cta text-white px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all"
        href="https://wa.me/919916936115"
      >
        {@render WhatsAppIcon("w-5 h-5")}
        <span>{t.chatNow}</span>
      </a>
    </div>
  </header>
  <!-- END: Sticky Header -->

  <main class="flex-grow">
    <!-- BEGIN: Hero Section -->
    <section class="container mx-auto px-6 py-12 md:py-32">
      <div
        class="flex flex-col lg:flex-row items-center justify-between gap-20 lg:gap-32"
      >
        <div
          class="flex-1 space-y-10 text-center lg:text-left"
          data-purpose="hero-content"
        >
          <div class="space-y-4">
            <h1
              class="text-5xl md:text-8xl font-extrabold text-slate-900 leading-tight"
            >
              Santhosh <span class="text-aero-green">.D</span>
            </h1>
            <p
              class="text-xl md:text-2xl font-bold text-aero-dark/60 tracking-widest uppercase"
            >
              {t.dce}
            </p>
            <p
              class="text-lg md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              {@html t.heroDesc}
            </p>
          </div>
          <div
            class="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
          >
            <a
              class="solar-cta text-white px-10 py-5 rounded-full font-bold text-xl flex items-center justify-center gap-3 transition-all"
              href="https://wa.me/919916936115"
            >
              {@render WhatsAppIcon("w-7 h-7")}
              {t.waInquiry}
            </a>
          </div>
        </div>

        <div
          class="relative h-[450px] w-full max-w-sm flex items-center justify-center perspective-1000"
          data-purpose="hero-slider"
        >
          <div class="relative w-full h-[450px]" id="project-slider">
            {#each projects as project, i}
              <div class="project-card {getCardClass(i, currentIndex)}">
                <div class="glossy-card w-full h-full p-4 flex flex-col">
                  <img
                    alt={project.title}
                    class="w-full h-2/3 object-cover rounded-2xl mb-4"
                    src="{base}/images/{project.img}"
                  />
                  <h3 class="text-2xl font-bold text-slate-800 text-left">
                    {project.title}
                  </h3>
                  <p class="text-aero-green font-medium text-left">
                    {project.location}
                  </p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </section>
    <!-- END: Hero Section -->

    <!-- BEGIN: Services Grid -->
    <section
      class="container mx-auto px-6 py-20 bg-white/30 backdrop-blur-sm rounded-[50px] my-10 border border-white/40"
    >
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          {t.servicesTitle}
        </h2>
        <div
          class="w-24 h-2 bg-aero-green-gradient mx-auto rounded-full shadow-sm"
        ></div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Service 1 -->
        <div
          class="service-card glossy-card p-10 text-center group hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-200/50 hover:bg-white/60"
        >
          <div
            class="w-24 h-24 mx-auto mb-8 flex items-center justify-center overflow-visible"
          >
            <div class="squircle-container relative">
              <div
                class="absolute inset-0 squircle-bg bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-lg"
              ></div>
              <div
                class="relative w-full h-full flex items-center justify-center text-white icon-gloss rounded-2xl service-icon"
              >
                <span class="material-symbols-outlined text-4xl font-light"
                  >straighten</span
                >
              </div>
            </div>
          </div>
          <h3
            class="text-2xl font-bold mb-4 text-slate-800 transition-colors group-hover:text-cyan-600"
          >
            {t.consulting}
          </h3>
          <p class="text-slate-600 text-base leading-relaxed">
            {t.consultingDesc}
          </p>
        </div>
        <!-- Service 2 -->
        <div
          class="service-card glossy-card p-10 text-center group hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200/50 hover:bg-white/60"
        >
          <div
            class="w-24 h-24 mx-auto mb-8 flex items-center justify-center overflow-visible"
          >
            <div class="squircle-container relative">
              <div
                class="absolute inset-0 squircle-bg bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg"
              ></div>
              <div
                class="relative w-full h-full flex items-center justify-center text-white icon-gloss rounded-2xl service-icon"
              >
                <span class="material-symbols-outlined text-4xl font-light"
                  >architecture</span
                >
              </div>
            </div>
          </div>
          <h3
            class="text-2xl font-bold mb-4 text-slate-800 transition-colors group-hover:text-blue-600"
          >
            {t.planning}
          </h3>
          <p class="text-slate-600 text-base leading-relaxed">
            {t.planningDesc}
          </p>
        </div>
        <!-- Service 3 -->
        <div
          class="service-card glossy-card p-10 text-center group hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-200/50 hover:bg-white/60"
        >
          <div
            class="w-24 h-24 mx-auto mb-8 flex items-center justify-center overflow-visible"
          >
            <div class="squircle-container relative">
              <div
                class="absolute inset-0 squircle-bg bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg"
              ></div>
              <div
                class="relative w-full h-full flex items-center justify-center text-white icon-gloss rounded-2xl service-icon"
              >
                <span class="material-symbols-outlined text-4xl font-light"
                  >monitoring</span
                >
              </div>
            </div>
          </div>
          <h3
            class="text-2xl font-bold mb-4 text-slate-800 transition-colors group-hover:text-yellow-600"
          >
            {t.estimation}
          </h3>
          <p class="text-slate-600 text-base leading-relaxed">
            {t.estimationDesc}
          </p>
        </div>
        <!-- Service 4 -->
        <div
          class="service-card glossy-card p-10 text-center group hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl hover:shadow-red-200/50 hover:bg-white/60"
        >
          <div
            class="w-24 h-24 mx-auto mb-8 flex items-center justify-center overflow-visible"
          >
            <div class="squircle-container relative">
              <div
                class="absolute inset-0 squircle-bg bg-gradient-to-br from-red-400 to-red-600 shadow-lg"
              ></div>
              <div
                class="relative w-full h-full flex items-center justify-center text-white icon-gloss rounded-2xl service-icon"
              >
                <span class="material-symbols-outlined text-4xl font-light"
                  >verified</span
                >
              </div>
            </div>
          </div>
          <h3
            class="text-2xl font-bold mb-4 text-slate-800 transition-colors group-hover:text-red-600"
          >
            {t.quality}
          </h3>
          <p class="text-slate-600 text-base leading-relaxed">
            {t.qualityDesc}
          </p>
        </div>
      </div>
    </section>
    <!-- END: Services Grid -->

    <!-- BEGIN: Mid-Section Pathways -->
    <section class="container mx-auto px-6 py-20 sm:py-32">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          {t.buildIdea}
        </h2>
        <div
          class="w-24 h-2 bg-aero-green-gradient mx-auto rounded-full shadow-sm"
        ></div>
      </div>
      <div class="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
        <!-- Residential Card -->
        <div
          class="relative overflow-hidden rounded-[40px] group aspect-[4/5] sm:aspect-square md:aspect-[4/5] lg:aspect-[4/3] glossy-surface p-2 shadow-xl"
        >
          <div class="relative w-full h-full overflow-hidden rounded-[34px]">
            <img
              alt={t.dreamHome}
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              src="{base}/images/luxury-home.jpg"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-6 sm:p-10 flex flex-col justify-end"
            >
              <div
                class="mb-4 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-lg border border-white/30 group-hover:scale-110 transition-transform"
              >
                <span class="material-symbols-outlined text-3xl">home</span>
              </div>
              <h3
                class="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 leading-tight"
              >
                {t.dreamHome}
              </h3>
              <p
                class="text-white/80 mb-6 sm:mb-8 max-w-xs sm:max-w-sm text-sm sm:text-base lg:text-lg leading-relaxed line-clamp-3"
              >
                {t.dreamHomeDesc}
              </p>
              <div class="flex">
                <a
                  class="solar-cta text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base transition-all inline-block whitespace-nowrap flex items-center gap-2"
                  href="https://wa.me/919916936115"
                >
                  {@render WhatsAppIcon("w-4 h-4 sm:w-5 sm:h-5")}
                  {t.inquireWa}
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- Commercial Card -->
        <div
          class="relative overflow-hidden rounded-[40px] group aspect-[4/5] sm:aspect-square md:aspect-[4/5] lg:aspect-[4/3] glossy-surface p-2 shadow-xl"
        >
          <div class="relative w-full h-full overflow-hidden rounded-[34px]">
            <img
              alt={t.commercial}
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              src="{base}/images/commercial-project.jpg"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-aero-dark/95 via-aero-dark/40 to-transparent p-6 sm:p-10 flex flex-col justify-end"
            >
              <div
                class="mb-4 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-lg border border-white/30 group-hover:scale-110 transition-transform"
              >
                <span class="material-symbols-outlined text-3xl"
                  >corporate_fare</span
                >
              </div>
              <h3
                class="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 leading-tight"
              >
                {t.commercial}
              </h3>
              <p
                class="text-white/80 mb-6 sm:mb-8 max-w-xs sm:max-w-sm text-sm sm:text-base lg:text-lg leading-relaxed line-clamp-3"
              >
                {t.commercialDesc}
              </p>
              <div class="flex">
                <a
                  class="solar-cta text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base transition-all inline-block whitespace-nowrap flex items-center gap-2"
                  href="https://wa.me/919916936115"
                >
                  {@render WhatsAppIcon("w-4 h-4 sm:w-5 sm:h-5")}
                  {t.inquireWa}
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
  <footer
    class="bg-white/50 border-t border-white py-20 px-6 md:px-12 mt-20 glossy-surface mt-auto"
  >
    <div
      class="container mx-auto grid md:grid-cols-2 gap-16 text-center md:text-left"
    >
      <div class="space-y-8">
        <div class="flex items-center justify-center md:justify-start gap-3">
          <div
            class="w-12 h-12 bg-aero-green-gradient rounded-xl flex items-center justify-center p-1 shadow-lg relative overflow-hidden"
          >
            <div class="absolute inset-0 icon-gloss opacity-40"></div>
            <span class="text-white font-black text-2xl relative z-10">GV</span>
          </div>
          <span class="font-bold text-2xl text-aero-dark">Golden Village</span>
        </div>
        <p class="text-slate-500 leading-relaxed text-lg max-w-md">
          {t.footerDesc}
        </p>
        <p class="text-sm font-bold text-aero-green uppercase tracking-[0.2em]">
          {t.footerYears}
        </p>
      </div>
      <div class="space-y-8">
        <h4 class="font-bold text-xl text-slate-800">{t.contactDetails}</h4>
        <div class="space-y-6">
          <p
            class="flex items-start justify-center md:justify-start gap-4 text-slate-600 text-lg"
          >
            <span class="text-2xl">📍</span>
            <span>{@html t.location}</span>
          </p>
          <a
            class="flex items-center justify-center md:justify-start gap-4 text-slate-600 hover:text-aero-green text-lg group"
            href="mailto:abcdef@gmail.com"
          >
            <Mail class="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span>abcdef@gmail.com</span>
          </a>
          <div class="pt-4">
            <a
              class="w-full flex items-center justify-center gap-2 solar-cta text-white font-bold py-5 rounded-full transition-all"
              href="https://wa.me/919916936115"
            >
              {@render WhatsAppIcon("w-5 h-5")}
              {t.inquireWa}
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="container mx-auto mt-20 pt-10 border-t border-slate-200/50 text-center text-slate-400 text-sm"
    >
      © {new Date().getFullYear()} Santhosh D. DCE. {t.rights}
    </div>
  </footer>

  <!-- BEGIN: Floating Language Toggle -->
  <div class="fixed bottom-6 right-6 z-[200] flex flex-col items-end gap-3">
    {#if isLangMenuOpen}
      <div
        class="flex flex-col items-stretch min-w-[140px] mb-2 bg-white/90 backdrop-blur-2xl border border-white/50 rounded-3xl shadow-2xl overflow-hidden glossy-surface"
        id="lang-menu-floating"
      >
        <button
          on:click={() => selectLang("en")}
          class="w-full text-left px-5 py-3 {currentLang === 'en'
            ? 'bg-aero-green/20'
            : ''} text-slate-700 hover:bg-aero-green/10 font-semibold transition-colors border-b border-slate-100/50"
          >English</button
        >
        <button
          on:click={() => selectLang("kn")}
          class="w-full text-left px-5 py-3 {currentLang === 'kn'
            ? 'bg-aero-green/20'
            : ''} text-slate-700 hover:bg-aero-green/10 font-semibold transition-colors border-b border-slate-100/50"
          >ಕನ್ನಡ</button
        >
        <button
          on:click={() => selectLang("hi")}
          class="w-full text-left px-5 py-3 {currentLang === 'hi'
            ? 'bg-aero-green/20'
            : ''} text-slate-700 hover:bg-aero-green/10 font-semibold transition-colors border-b border-slate-100/50"
          >हिंदी</button
        >
        <button
          on:click={() => selectLang("tcy")}
          class="w-full text-left px-5 py-3 {currentLang === 'tcy'
            ? 'bg-aero-green/20'
            : ''} text-slate-700 hover:bg-aero-green/10 font-semibold transition-colors"
          >ತುಳು</button
        >
      </div>
    {/if}
    <button
      class="w-16 h-16 rounded-full bg-aero-green-gradient flex items-center justify-center text-white shadow-2xl border border-white/40 relative overflow-hidden active:scale-95 transition-transform"
      id="lang-fab"
      on:click={toggleLangMenu}
    >
      <div class="absolute inset-0 icon-gloss opacity-40"></div>
      <span class="material-symbols-outlined text-3xl font-light relative z-10"
        >language</span
      >
    </button>
  </div>
  <!-- END: Floating Language Toggle -->
</div>
