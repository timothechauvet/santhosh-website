<script>
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import { Mail } from "lucide-svelte";

  const translations = {
    en: {
      chatNow: "Chat now",
      home: "Home",
      aboutGvfi: "About GVFI",
      quickLinks: "Quick Links",
      followUs: "Follow Us",
      dce: "Diploma in Civil Engineering",
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
      location:
        "970/11, 10th Main Raghavendra block Srinagar 50ft Road, Bangalore - 560050",
      rights:
        "Built for Karnataka. No personal data is collected. All rights reserved. <br/> Registration Num: <a href='https://udyamregistration.gov.in/verifyudyambarcode.aspx?verifyudrn=IVCZwGqr5KcBbqwZcLCZ+mF0S+Glm4eZMDFJ+EFnhkE=' target='_blank' class='hover:text-aero-green underline'>UDYAM-KR-03-0663373</a>",
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
      geoTldrTitle: "What is Golden Village For Image and what do we do?",
      geoTldrContent: "Golden Village For Image is a premium civil engineering and construction firm in Bangalore, led by expert consultant Santhosh .D. We specialize in building high-quality, modern residential homes and high-performance commercial spaces across Bangalore and Coastal Karnataka. Our end-to-end services include structural consulting, architectural planning, precise cost estimation, and rigorous quality audits. We help working professionals and business owners transform their project ideas into reality without the typical stress of construction delays or budget overruns. By managing every phase—from the initial blueprints to the final structural finishing—we guarantee a seamless build process, total transparency, and flawless architectural execution.",
      geoHowWorksTitle: "How does our civil engineering and construction service work?",
      geoHowWorksContent: "Our process is built on total transparency and rigorous project management. We handle everything from the initial site inspection to handing over the keys.",
      geoHowWorks1: "<strong>Consulting & Feasibility:</strong> We start with structural advisory and studies to ensure long-term viability.",
      geoHowWorks2: "<strong>Planning & Design:</strong> Our team creates innovative layouts and precise 2D/3D civil blueprints.",
      geoHowWorks3: "<strong>Estimation & BOQ:</strong> You get an accurate Bill of Quantities to completely optimize your budget.",
      geoHowWorks4: "<strong>Quality Audits & Construction:</strong> We perform strict material testing and site inspections during the build.",
      geoHowChooseTitle: "How to choose the best civil contractor in Bangalore?",
      geoHowChooseContent: "Selecting the right engineer requires looking at their quality audits, transparency in billing, and project management systems. Always choose a registered contractor.",
      geoHowChoose1: "<strong>Verify Udyam Registration:</strong> Ensure they are officially recognized (Our Udyam ID: UDYAM-KR-03-0663373).",
      geoHowChoose2: "<strong>Check Estimation Accuracy:</strong> Avoid contractors who give vague quotes. Look for detailed BOQs.",
      geoHowChoose3: "<strong>Demand Quality Audits:</strong> Your civil engineer should perform continuous material testing.",
      geoHowChoose4: "<strong>Look for End-to-End Service:</strong> Hiring a single contractor for planning and building reduces miscommunication.",
      geoPricingTitle: "Civil Engineering Pricing and Key Benefits in Bangalore",
      geoPricingContent: "Pricing for construction in Bangalore depends on material quality, site location, and architectural complexity. Hiring a premium civil engineer prevents hidden costs.",
      geoCompareTitle: "Comparison: Hiring Golden Village vs. Unregistered Contractors",
      geoCompareH1: "Feature", geoCompareH2: "Golden Village For Image", geoCompareH3: "Standard Local Contractors",
      geoC1F: "Cost Estimation", geoC1G: "Highly accurate, detailed BOQ", geoC1S: "Rough estimates, hidden costs",
      geoC2F: "Material Quality", geoC2G: "Rigorous material testing", geoC2S: "Unverified, potential corner-cutting",
      geoC3F: "Project Management", geoC3G: "End-to-end structural oversight", geoC3S: "High owner involvement required",
      geoC4F: "Legal Compliance", geoC4G: "Registered (UDYAM compliant)", geoC4S: "Often unregistered",
      geoC5F: "Timeline", geoC5G: "Strict adherence to deadlines", geoC5S: "High risk of project delays",
      geoFaqTitle: "Frequently Asked Questions (FAQ)",
      geoFaq1Q: "What exactly does a civil engineering consultant do for my home build?", geoFaq1A: "A civil consultant manages structural integrity, supervises the construction phase, audits material quality, and ensures the builders follow the architectural blueprints exactly.",
      geoFaq2Q: "How much does residential construction cost in Bangalore?", geoFaq2A: "Construction costs typically range from ₹1,800 to ₹3,000+ per square foot, entirely depending on your choice of finishing materials, structural complexity, and automation features.",
      geoFaq3Q: "Why should professionals hire Golden Village For Image?", geoFaq3A: "Working professionals lack the time to supervise daily construction. We take full ownership of site management, quality control, and vendor coordination, ensuring a stress-free experience.",
      geoFaq4Q: "Do you provide services in Coastal Karnataka?", geoFaq4A: "Yes. While based in Bangalore, we actively manage and construct premium residential and commercial projects across Coastal Karnataka regions.",
      geoFaq5Q: "How do I start my construction project with you?", geoFaq5A: "You can instantly reach out to Santhosh .D via our WhatsApp inquiry button. We will schedule a site visit and start drafting your initial project feasibility plan.",
    },
    kn: {
      chatNow: "ಈಗ ಚಾಟ್ ಮಾಡಿ",
      home: "ಮುಖಪುಟ",
      aboutGvfi: "GVFI ಬಗ್ಗೆ",
      quickLinks: "ತ್ವರಿತ ಕೊಂಡಿಗಳು",
      followUs: "ನಮ್ಮನ್ನು ಅನುಸರಿಸಿ",
      dce: "ಸಿವಿಲ್ ಎಂಜಿನಿಯರಿಂಗ್‌ ಡಿಪ್ಲೊಮಾ",
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
      location:
        "970/11, 10th Main Raghavendra block Srinagar 50ft Road, Bangalore - 560050",
      rights:
        "ಕರ್ನಾಟಕಕ್ಕಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ. ಯಾವುದೇ ವೈಯಕ್ತಿಕ ಡೇಟಾವನ್ನು ಸಂಗ್ರಹಿಸಲಾಗಿಲ್ಲ. ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ. <br/> ನೋಂದಣಿ ಸಂಖ್ಯೆ: <a href='https://udyamregistration.gov.in/verifyudyambarcode.aspx?verifyudrn=IVCZwGqr5KcBbqwZcLCZ+mF0S+Glm4eZMDFJ+EFnhkE=' target='_blank' class='hover:text-aero-green underline'>UDYAM-KR-03-0663373</a>",
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
      geoTldrTitle: "Golden Village For Image ಎಂದರೇನು ಮತ್ತು ನಾವು ಏನು ಮಾಡುತ್ತೇವೆ?",
      geoTldrContent: "Golden Village For Image ಬೆಂಗಳೂರಿನಲ್ಲಿ ಪ್ರೀಮಿಯಂ ಸಿವಿಲ್ ಎಂಜಿನಿಯರಿಂಗ್ ಮತ್ತು ಉನ್ನತ ಮಟ್ಟದ ನಿರ್ಮಾಣ ಸಂಸ್ಥೆಯಾಗಿದ್ದು, ಇದನ್ನು ಪರಿಣಿತ ಸಲಹೆಗಾರರಾದ Santhosh .D ಮುನ್ನಡೆಸುತ್ತಿದ್ದಾರೆ. ಬೆಂಗಳೂರು ಮತ್ತು ಕರಾವಳಿ ಕರ್ನಾಟಕದಾದ್ಯಂತ ಉನ್ನತ-ಗುಣಮಟ್ಟದ, ಆಧುನಿಕ ವಸತಿ ಮನೆಗಳು ಮತ್ತು ವಾಣಿಜ್ಯ ಸ್ಥಳಗಳನ್ನು ನಿರ್ಮಿಸುವಲ್ಲಿ ನಾವು ಪರಿಣತರಾಗಿದ್ದೇವೆ. ನಮ್ಮ ಸೇವೆಗಳಲ್ಲಿ ರಚನಾತ್ಮಕ ಸಲಹೆಗಳು, ವಾಸ್ತುಶಿಲ್ಪ ವಿನ್ಯಾಸಗಳು, ನಿಖರವಾದ ವೆಚ್ಚ ಅಂದಾಜು ಮತ್ತು ಕಠಿಣ ಗುಣಮಟ್ಟ ಲೆಕ್ಕಪರಿಶೋಧನೆಗಳು ಸೇರಿವೆ. ಆರಂಭಿಕ ನೀಲನಕ್ಷೆಗಳಿಂದ ಹಿಡಿದು ಅಂತಿಮ ಹಂತದವರೆಗಿನ ಪ್ರತಿಯೊಂದು ಹಂತವನ್ನು ನಿರ್ವಹಿಸುವ ಮೂಲಕ ನಾವು ತಡೆರಹಿತ ನಿರ್ಮಾಣ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಖಾತರಿಪಡಿಸುತ್ತೇವೆ.",
      geoHowWorksTitle: "ನಮ್ಮ ಸಿವಿಲ್ ಎಂಜಿನಿಯರಿಂಗ್ ಮತ್ತು ನಿರ್ಮಾಣ ಸೇವೆ ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ?",
      geoHowWorksContent: "ನಮ್ಮ ಪ್ರಕ್ರಿಯೆಯು ಸಂಪೂರ್ಣ ಪಾರದರ್ಶಕತೆ ಮತ್ತು ಕಠಿಣ ಯೋಜನಾ ನಿರ್ವಹಣೆಯ ಮೇಲೆ ನಿರ್ಮಿತವಾಗಿದೆ. ಸೈಟ್ ಪರಿಶೀಲನೆಯಿಂದ ಹಿಡಿದು ಕೀಲಿ ಹಸ್ತಾಂತರಿಸುವವರೆಗೆ ಎಲ್ಲವನ್ನೂ ನಾವು ನಿರ್ವಹಿಸುತ್ತೇವೆ.",
      geoHowWorks1: "<strong>ಸಲಹೆ ಮತ್ತು ಕಾರ್ಯಸಾಧ್ಯತೆ:</strong> ದೀರ್ಘಕಾಲೀನ ಬಾಳಿಕೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ನಾವು ರಚನಾತ್ಮಕ ಸಲಹೆಗಳು ಮತ್ತು ಅಧ್ಯಯನಗಳನ್ನು ಒದಗಿಸುತ್ತೇವೆ.",
      geoHowWorks2: "<strong>ಯೋಜನೆ ಮತ್ತು ವಿನ್ಯಾಸ:</strong> ನಮ್ಮ ತಂಡವು ನವೀನ ಕಟ್ಟಡ ವಿನ್ಯಾಸಗಳನ್ನು ಮತ್ತು ನಿಖರವಾದ 2D/3D ಸಿವಿಲ್ ನೀಲನಕ್ಷೆಗಳನ್ನು ಸೃಷ್ಟಿಸುತ್ತದೆ.",
      geoHowWorks3: "<strong>ಅಂದಾಜು ಮತ್ತು BOQ:</strong> ನಿಮ್ಮ ಬಜೆಟ್ ಅನ್ನು ನಿಖರವಾಗಿ ನಿರ್ವಹಿಸಲು ಬಿಲ್ ಆಫ್ ಕ್ವಾಂಟಿಟಿಸ್ ಅನ್ನು ಒದಗಿಸಲಾಗುತ್ತದೆ.",
      geoHowWorks4: "<strong>ಗುಣಮಟ್ಟ ಲೆಕ್ಕಪರಿಶೋಧನೆ:</strong> ನಿರ್ಮಾಣದ ಸಮಯದಲ್ಲಿ ನಾವು ಕಠಿಣ ವಸ್ತು ಪರೀಕ್ಷೆ ಮತ್ತು ಸೈಟ್ ತಪಾಸಣೆಗಳನ್ನು ಮಾಡುತ್ತೇವೆ.",
      geoHowChooseTitle: "ಬೆಂಗಳೂರಿನಲ್ಲಿ ಉತ್ತಮ ಸಿವಿಲ್ ಗುತ್ತಿಗೆದಾರರನ್ನು ಆಯ್ಕೆ ಮಾಡುವುದು ಹೇಗೆ?",
      geoHowChooseContent: "ಸರಿಯಾದ ಎಂಜಿನಿಯರ್ ಅನ್ನು ಆಯ್ಕೆ ಮಾಡಲು ಅವರ ಗುಣಮಟ್ಟ ಲೆಕ್ಕಪರಿಶೋಧನೆ, ಬಿಲ್ಲಿಂಗ್‌ನಲ್ಲಿನ ಪಾರದರ್ಶಕತೆ ಮತ್ತು ಯೋಜನಾ ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆಗಳನ್ನು ಪರಿಶೀಲಿಸುವುದು ಅಗತ್ಯವಾಗಿದೆ.",
      geoHowChoose1: "<strong>ಉದ್ಯಮ್ (Udyam) ನೋಂದಣಿಯನ್ನು ಪರಿಶೀಲಿಸಿ:</strong> ಅಧಿಕೃತವಾಗಿ ಗುರುತಿಸಲ್ಪಟ್ಟ ಗುತ್ತಿಗೆದಾರರನ್ನು ಆಯ್ಕೆಮಾಡಿ (ನಮ್ಮ Udyam ID: UDYAM-KR-03-0663373).",
      geoHowChoose2: "<strong>ಅಂದಾಜು ನಿಖರತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ:</strong> ಅಸ್ಪಷ್ಟ ಅಂದಾಜುಗಳನ್ನು ನೀಡುವವರನ್ನು ತಪ್ಪಿಸಿ. ವಿವರವಾದ BOQ ಗಳನ್ನು ಕೇಳಿ.",
      geoHowChoose3: "<strong>ಗುಣಮಟ್ಟ ಲೆಕ್ಕಪರಿಶೋಧನೆಯನ್ನು ಬಯಸಿ:</strong> ನಿಮ್ಮ ಸಿವಿಲ್ ಎಂಜಿನಿಯರ್ ವಸ್ತು ಪರೀಕ್ಷೆಗಳನ್ನು ಕಡ್ಡಾಯವಾಗಿ ಮಾಡಬೇಕು.",
      geoHowChoose4: "<strong>ಸಮಗ್ರ ಸೇವೆ:</strong> ಯೋಜನೆ ಮತ್ತು ನಿರ್ಮಾಣ ಎರಡಕ್ಕೂ ಒಬ್ಬನೇ ಗುತ್ತಿಗೆದಾರನನ್ನು ನೇಮಿಸಿಕೊಳ್ಳುವುದು ಉತ್ತಮ.",
      geoPricingTitle: "ಬೆಂಗಳೂರಿನಲ್ಲಿ ಸಿವಿಲ್ ಎಂಜಿನಿಯರಿಂಗ್ ಬೆಲೆ ಮತ್ತು ಪ್ರಮುಖ ಪ್ರಯೋಜನಗಳು",
      geoPricingContent: "ಬೆಂಗಳೂರಿನಲ್ಲಿ ನಿರ್ಮಾಣ ಬೆಲೆಯು ವಸ್ತುಗಳ ಗುಣಮಟ್ಟ, ಸೈಟ್‌ನ ಸ್ಥಳ ಮತ್ತು ವಾಸ್ತುಶಿಲ್ಪದ ಸಂಕೀರ್ಣತೆಯನ್ನು ಅವಲಂಬಿಸಿರುತ್ತದೆ. ಪ್ರೀಮಿಯಂ ಎಂಜಿನಿಯರ್ ಅನ್ನು ನೇಮಿಸಿಕೊಳ್ಳುವುದರಿಂದ ಗುಪ್ತ ವೆಚ್ಚಗಳನ್ನು ತಡೆಯಬಹುದು.",
      geoCompareTitle: "ಹೋಲಿಕೆ: Golden Village ಮತ್ತು ನೋಂದಾಯಿತವಲ್ಲದ ಗುತ್ತಿಗೆದಾರರು",
      geoCompareH1: "ವೈಶಿಷ್ಟ್ಯ", geoCompareH2: "Golden Village For Image", geoCompareH3: "ಸ್ಥಳೀಯ ಗುತ್ತಿಗೆದಾರರು",
      geoC1F: "ವೆಚ್ಚ ಅಂದಾಜು", geoC1G: "ನಿಖರವಾದ, ವಿವರವಾದ BOQ", geoC1S: "ಅಸ್ಪಷ್ಟ ಅಂದಾಜುಗಳು, ಗುಪ್ತ ವೆಚ್ಚಗಳು",
      geoC2F: "ವಸ್ತು ಗುಣಮಟ್ಟ", geoC2G: "ಕಠಿಣ ವಸ್ತು ಪರೀಕ್ಷೆ", geoC2S: "ಪರಿಶೀಲಿಸದ, ಕಳಪೆ ವಸ್ತುಗಳು",
      geoC3F: "ಯೋಜನಾ ನಿರ್ವಹಣೆ", geoC3G: "ಸಂಪೂರ್ಣ ರಚನಾತ್ಮಕ ಮೇಲ್ವಿಚಾರಣೆ", geoC3S: "ಮಾಲೀಕರ ಹೆಚ್ಚಿನ ಪಾಲ್ಗೊಳ್ಳುವಿಕೆ ಅಗತ್ಯವಿದೆ",
      geoC4F: "ಕಾನೂನು ಅನುಸರಣೆ", geoC4G: "ನೋಂದಾಯಿತ (UDYAM)", geoC4S: "ಹೆಚ್ಚಾಗಿ ನೋಂದಾಯಿಸಿಲ್ಲ",
      geoC5F: "ಸಮಯಮಿತಿ", geoC5G: "ಗಡುವಿಗೆ ಕಟ್ಟುನಿಟ್ಟಾದ ಅನುಸರಣೆ", geoC5S: "ಯೋಜನೆ ವಿಳಂಬದ ಹೆಚ್ಚಿನ ಅಪಾಯ",
      geoFaqTitle: "ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು (FAQ)",
      geoFaq1Q: "ನನ್ನ ಮನೆ ನಿರ್ಮಾಣಕ್ಕಾಗಿ ಸಿವಿಲ್ ಎಂಜಿನಿಯರಿಂಗ್ ಸಲಹೆಗಾರರು ಏನು ಮಾಡುತ್ತಾರೆ?", geoFaq1A: "ಸಿವಿಲ್ ಸಲಹೆಗಾರರು ರಚನಾತ್ಮಕ ಸಮಗ್ರತೆಯನ್ನು ನಿರ್ವಹಿಸುತ್ತಾರೆ, ಗುಣಮಟ್ಟವನ್ನು ಪರಿಶೀಲಿಸುತ್ತಾರೆ ಮತ್ತು ವಾಸ್ತುಶಿಲ್ಪಿ ನೀಲನಕ್ಷೆಗಳನ್ನು ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಪಾಲಿಸುವಂತೆ ನೋಡಿಕೊಳ್ಳುತ್ತಾರೆ.",
      geoFaq2Q: "ಬೆಂಗಳೂರಿನಲ್ಲಿ ವಸತಿ ನಿರ್ಮಾಣಕ್ಕೆ ಎಷ್ಟು ವೆಚ್ಚವಾಗುತ್ತದೆ?", geoFaq2A: "ನೀವು ಆಯ್ಕೆ ಮಾಡುವ ಫಿನಿಶಿಂಗ್ ವಸ್ತುಗಳು ಮತ್ತು ರಚನಾತ್ಮಕ ಸಂಕೀರ್ಣತೆಯನ್ನು ಆಧರಿಸಿ, ಪ್ರತಿ ಚದರ ಅಡಿಗೆ ₹1,800 ರಿಂದ ₹3,000+ ವೆಚ್ಚವಾಗಬಹುದು.",
      geoFaq3Q: "ವೃತ್ತಿಪರರು Golden Village For Image ಅನ್ನು ಏಕೆ ನೇಮಿಸಿಕೊಳ್ಳಬೇಕು?", geoFaq3A: "ಕೆಲಸ ಮಾಡುವ ವೃತ್ತಿಪರರಿಗೆ ದಿನನಿತ್ಯದ ನಿರ್ಮಾಣದ ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಲು ಸಮಯವಿರುವುದಿಲ್ಲ. ನಾವು ಸೈಟ್ ನಿರ್ವಹಣೆ, ಗುಣಮಟ್ಟ ನಿಯಂತ್ರಣವನ್ನು ತೆಗೆದುಕೊಂಡು ಒತ್ತಡ-ಮುಕ್ತ ಅನುಭವವನ್ನು ಖಚಿತಪಡಿಸುತ್ತೇವೆ.",
      geoFaq4Q: "ನೀವು ಕರಾವಳಿ ಕರ್ನಾಟಕದಲ್ಲಿ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತೀರಾ?", geoFaq4A: "ಹೌದು. ನಾವು ಬೆಂಗಳೂರಿನ ಮೂಲದಲ್ಲಿದ್ದರೂ, ಕರಾವಳಿ ಕರ್ನಾಟಕದಾದ್ಯಂತ ಪ್ರೀಮಿಯಂ ವಸತಿ ಮತ್ತು ವಾಣಿಜ್ಯ ಯೋಜನೆಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತೇವೆ.",
      geoFaq5Q: "ನಿಮ್ಮೊಂದಿಗೆ ನನ್ನ ನಿರ್ಮಾಣ ಯೋಜನೆಯನ್ನು ಹೇಗೆ ಪ್ರಾರಂಭಿಸುವುದು?", geoFaq5A: "ನೀವು ನಮ್ಮ WhatsApp ಬಟನ್ ಮೂಲಕ Santhosh .D ಅವರನ್ನು ಸಂಪರ್ಕಿಸಬಹುದು. ನಾವು ಸೈಟ್ ಭೇಟಿಯನ್ನು ನಿಗದಿಪಡಿಸುತ್ತೇವೆ.",
    },
    hi: {
      chatNow: "अभी चैट करें",
      home: "होम",
      aboutGvfi: "GVFI के बारे में",
      quickLinks: "त्वरित लिंक",
      followUs: "हमारा अनुसरण करें",
      dce: "सिविल इंजीनियरिंग में डिप्लोमा",
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
      location:
        "970/11, 10th Main Raghavendra block Srinagar 50ft Road, Bangalore - 560050",
      rights:
        "कर्नाटक के लिए निर्मित। कोई व्यक्तिगत डेटा एकत्र नहीं किया जाता है। सर्वाधिकार सुरक्षित। <br/> पंजीकरण संख्या: <a href='https://udyamregistration.gov.in/verifyudyambarcode.aspx?verifyudrn=IVCZwGqr5KcBbqwZcLCZ+mF0S+Glm4eZMDFJ+EFnhkE=' target='_blank' class='hover:text-aero-green underline'>UDYAM-KR-03-0663373</a>",
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
      geoTldrTitle: "Golden Village For Image क्या है और हम क्या करते हैं?",
      geoTldrContent: "Golden Village For Image बैंगलोर में एक प्रीमियम सिविल इंजीनियरिंग और निर्माण फर्म है, जिसका नेतृत्व विशेषज्ञ सलाहकार Santhosh .D करते हैं। हम पूरे बैंगलोर और तटीय कर्नाटक में उच्च गुणवत्ता वाले आधुनिक आवासीय घरों और उच्च प्रदर्शन वाले वाणिज्यिक स्थानों के निर्माण के विशेषज्ञ हैं। हमारी एंड-टू-एंड सेवाओं में संरचनात्मक परामर्श, वास्तुशिल्प योजना, सटीक लागत अनुमान और कठोर गुणवत्ता ऑडिट शामिल हैं। हम शुरुआती ब्लूप्रिंट से लेकर अंतिम फिनिशिंग तक हर चरण का प्रबंधन करते हैं और एक निर्बाध निर्माण प्रक्रिया, पूर्ण पारदर्शिता और दोषरहित वास्तुशिल्प निष्पादन की गारंटी देते हैं।",
      geoHowWorksTitle: "हमारी सिविल इंजीनियरिंग और निर्माण सेवा कैसे काम करती है?",
      geoHowWorksContent: "हमारी प्रक्रिया पूर्ण पारदर्शिता और कठोर परियोजना प्रबंधन पर आधारित है। हम प्रारंभिक साइट निरीक्षण से लेकर चाबियाँ सौंपने तक सब कुछ संभालते हैं।",
      geoHowWorks1: "<strong>परामर्श और व्यवहार्यता:</strong> दीर्घकालिक व्यवहार्यता सुनिश्चित करने के लिए हम संरचनात्मक सलाह और अध्ययन के साथ शुरुआत करते हैं।",
      geoHowWorks2: "<strong>योजना और डिजाइन:</strong> हमारी टीम अभिनव लेआउट और सटीक 2D/3D सिविल ब्लूप्रिंट बनाती है।",
      geoHowWorks3: "<strong>अनुमान और BOQ:</strong> आपको अपने बजट को पूरी तरह से अनुकूलित करने के लिए एक सटीक बिल ऑफ क्वांटिटीज (BOQ) मिलता है।",
      geoHowWorks4: "<strong>गुणवत्ता ऑडिट और निर्माण:</strong> हम निर्माण के दौरान सख्त सामग्री परीक्षण और साइट निरीक्षण करते हैं।",
      geoHowChooseTitle: "बैंगलोर में सर्वश्रेष्ठ सिविल ठेकेदार कैसे चुनें?",
      geoHowChooseContent: "सही इंजीनियर का चयन करने के लिए उनके गुणवत्ता ऑडिट, बिलिंग में पारदर्शिता और परियोजना प्रबंधन प्रणालियों को देखना आवश्यक है। हमेशा एक पंजीकृत ठेकेदार चुनें।",
      geoHowChoose1: "<strong>Udyam पंजीकरण सत्यापित करें:</strong> सुनिश्चित करें कि वे आधिकारिक तौर पर मान्यता प्राप्त हैं (हमारी Udyam ID: UDYAM-KR-03-0663373)।",
      geoHowChoose2: "<strong>अनुमान की सटीकता जांचें:</strong> अस्पष्ट उद्धरण देने वाले ठेकेदारों से बचें। विस्तृत BOQ की मांग करें।",
      geoHowChoose3: "<strong>गुणवत्ता ऑडिट की मांग करें:</strong> आपके सिविल इंजीनियर को निरंतर सामग्री परीक्षण करना चाहिए।",
      geoHowChoose4: "<strong>एंड-टू-एंड सेवा खोजें:</strong> योजना और निर्माण के लिए एक ही ठेकेदार को नियुक्त करने से गलतफहमी कम होती है।",
      geoPricingTitle: "बैंगलोर में सिविल इंजीनियरिंग मूल्य और प्रमुख लाभ",
      geoPricingContent: "बैंगलोर में निर्माण की कीमत सामग्री की गुणवत्ता, स्थल के स्थान और वास्तुशिल्प जटिलता पर निर्भर करती है। प्रीमियम सिविल इंजीनियर को काम पर रखने से छिपी हुई लागतों को रोका जा सकता है।",
      geoCompareTitle: "तुलना: Golden Village और अपंजीकृत ठेकेदार",
      geoCompareH1: "विशेषता", geoCompareH2: "Golden Village For Image", geoCompareH3: "मानक स्थानीय ठेकेदार",
      geoC1F: "लागत अनुमान", geoC1G: "अत्यधिक सटीक, विस्तृत BOQ", geoC1S: "मोटा अनुमान, छिपी हुई लागत",
      geoC2F: "सामग्री की गुणवत्ता", geoC2G: "कठोर सामग्री परीक्षण", geoC2S: "असत्यापित, संभावित समझौता",
      geoC3F: "परियोजना प्रबंधन", geoC3G: "एंड-टू-एंड संरचनात्मक निरीक्षण", geoC3S: "मालिक की उच्च भागीदारी आवश्यक",
      geoC4F: "कानूनी अनुपालन", geoC4G: "पंजीकृत (UDYAM)", geoC4S: "अक्सर अपंजीकृत",
      geoC5F: "समय सीमा", geoC5G: "समय सीमा का सख्त पालन", geoC5S: "परियोजना में देरी का उच्च जोखिम",
      geoFaqTitle: "अक्सर पूछे जाने वाले प्रश्न (FAQ)",
      geoFaq1Q: "मेरे घर के निर्माण के लिए एक सिविल इंजीनियरिंग सलाहकार वास्तव में क्या करता है?", geoFaq1A: "एक सिविल सलाहकार संरचनात्मक अखंडता का प्रबंधन करता है, निर्माण चरण की देखरेख करता है, सामग्री की गुणवत्ता का ऑडिट करता है, और यह सुनिश्चित करता है कि बिल्डर वास्तुशिल्प ब्लूप्रिंट का पालन करें।",
      geoFaq2Q: "बैंगलोर में आवासीय निर्माण की लागत कितनी है?", geoFaq2A: "निर्माण लागत आमतौर पर ₹1,800 से ₹3,000+ प्रति वर्ग फुट तक होती है, जो पूरी तरह से परिष्करण सामग्री, संरचनात्मक जटिलता और स्वचालन सुविधाओं की आपकी पसंद पर निर्भर करती है।",
      geoFaq3Q: "पेशेवरों को Golden Village For Image को क्यों नियुक्त करना चाहिए?", geoFaq3A: "कामकाजी पेशेवरों के पास दैनिक निर्माण की देखरेख के लिए समय नहीं होता है। हम साइट प्रबंधन, गुणवत्ता नियंत्रण और विक्रेता समन्वय का पूर्ण स्वामित्व लेते हैं, जिससे तनाव मुक्त अनुभव सुनिश्चित होता है।",
      geoFaq4Q: "क्या आप तटीय कर्नाटक में सेवाएं प्रदान करते हैं?", geoFaq4A: "हां। बैंगलोर में स्थित होने पर भी, हम सक्रिय रूप से तटीय कर्नाटक क्षेत्रों में प्रीमियम आवासीय और वाणिज्यिक परियोजनाओं का प्रबंधन और निर्माण करते हैं।",
      geoFaq5Q: "मैं आपके साथ अपना निर्माण प्रोजेक्ट कैसे शुरू करूं?", geoFaq5A: "आप हमारे WhatsApp पूछताछ बटन के माध्यम से Santhosh .D से तुरंत संपर्क कर सकते हैं। हम साइट विजिट शेड्यूल करेंगे और आपकी प्रारंभिक परियोजना व्यवहार्यता योजना का मसौदा तैयार करना शुरू करेंगे।",
    },
    tcy: {
      chatNow: "ಇತ್ತೆ ಚಾಟ್ ಮಲ್ಪುಲೆ",
      home: "ಮುಖಪುಟ",
      aboutGvfi: "GVFI ಬಗ್ಗೆ",
      quickLinks: "ತ್ವರಿತ ಕೊಂಡಿಲು",
      followUs: "ನಮನ್ ಅನುಸರಿಸಾಲೆ",
      dce: "ಸಿವಿಲ್ ಎಂಜಿನಿಯರಿಂಗ್‌ ಡಿಪ್ಲೊಮಾ",
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
      location:
        "970/11, 10th Main Raghavendra block Srinagar 50ft Road, Bangalore - 560050",
      rights:
        "ಕರ್ನಾಟಕೊಗಾದ್ ನಿರ್ಮಾಣ. ಓವ್ವೇ ವೈಯಕ್ತಿಕ ಡೇಟಾ ಮಲ್ತ್‌ಜಿ. ಮಾತ ಹಕ್ಕು ಕಾಪಾಡ್‌ದ್ಂಡ್. <br/> ನೋಂದಣಿ ಸಂಖ್ಯೆ: <a href='https://udyamregistration.gov.in/verifyudyambarcode.aspx?verifyudrn=IVCZwGqr5KcBbqwZcLCZ+mF0S+Glm4eZMDFJ+EFnhkE=' target='_blank' class='hover:text-aero-green underline'>UDYAM-KR-03-0663373</a>",
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
      geoTldrTitle: "Golden Village For Image ಪಂಡ ದಾದ ಬೊಕ್ಕ ನಮ ದಾದ ಮಲ್ಪುನ?",
      geoTldrContent: "Golden Village For Image ಕುಡ್ಲ ಬೊಕ್ಕ ಬೆಂಗ್ಲೂರ್‌ಡ್ ಒಂಜಿ ಪ್ರೀಮಿಯಂ ಸಿವಿಲ್ ಎಂಜಿನಿಯರಿಂಗ್ ಸಂಸ್ಥೆ. Santhosh .D ಇಂದೆತ ಮುತಾಲಿಕೆ ಮಲ್ಪುವೆರ್. ಕರಾವಳಿ ಕರ್ನಾಟಕ ಬೊಕ್ಕ ಬೆಂಗ್ಲೂರ್‌ಡ್ ಎಡ್ಡೆ ಗುಣಮಟ್ಟದ ಇಲ್ಲ್ ಬೊಕ್ಕ ವಾಣಿಜ್ಯ ಜಾಗೆಲೆನ್ ಕಟ್ಟುನೆಟ್ ನಮ ಪರಿಣತೆರ್. ನಮ ವಾಸ್ತುಶಿಲ್ಪ, ವೆಚ್ಚದ ಅಂದಾಜು, ಬೊಕ್ಕ ಎಡ್ಡೆ ಮೆಟೀರಿಯಲ್ ಪರೀಕ್ಷೆ ಮಲ್ತ್‌ದ್ ಇಲ್ಲ್ ಕಟ್ಟ್‌ದ್ ಕೊರ್ಪ. ಅಡಿಪಾಯರ್ದ್ ಇಲ್ಲ್ ಮುಗಿಯುನೆಟ್ಟ ಎಡ್ಡೆ ರೀತಿಡ್ ನಮ ಬೇಲೆ ಮಲ್ಪುಗ.",
      geoHowWorksTitle: "ನಮ್ಮ ಸಿವಿಲ್ ಎಂಜಿನಿಯರಿಂಗ್ ಸೇವೆ ಎಂಚ ಬೇಲೆ ಮಲ್ಪುಂಡು?",
      geoHowWorksContent: "ಸೈಟ್ ತುಯಿನೆರ್ದ್ ಕೀ ಕೊರ್ಪುನೆಟ್ಟ ಪೂರ ಬೇಲೆನ್ ನಮನೇ ತೂವೊನುವ. ಪಾರದರ್ಶಕತೆ ಬೊಕ್ಕ ಎಡ್ಡೆ ಯೋಜನಾ ನಿರ್ವಹಣೆ ನಮ್ಮ ಮೂಲೋದ್ದೇಶ.",
      geoHowWorks1: "<strong>ಸಲಹೆ ಬೊಕ್ಕ ಅಧ್ಯಯನ:</strong> ದೀರ್ಘಾವಧಿದ ಬಾಳಿಕೆಗಾತ್ ರಚನಾತ್ಮಕ ಸಲಹೆ ಬೊಕ್ಕ ಸೈಟ್ ಅಧ್ಯಯನ ಮಲ್ಪುವ.",
      geoHowWorks2: "<strong>ಪ್ಲಾನಿಂಗ್ ಬೊಕ್ಕ ಡಿಸೈನ್:</strong> 2D/3D ಸಿವಿಲ್ ಪ್ಲಾನ್ ಬೊಕ್ಕ ಪೊಸ ಡಿಸೈನ್‌ಲೆನ್ ಕೊರ್ಪ.",
      geoHowWorks3: "<strong>ಬೆಲೆ-ಅಂದಾಜು ಬೊಕ್ಕ BOQ:</strong> ಬಜೆಟ್ ಎಂಚ ಉಂಡು ಪಂಡ್‌ದ್ ನಿಖರವಾದ್ ಬಿಲ್ ಆಫ್ ಕ್ವಾಂಟಿಟಿಸ್ ಕೊರ್ಪ.",
      geoHowWorks4: "<strong>ಗುಣಮಟ್ಟ ತಪಾಸಣೆ:</strong> ಕಟ್ಟುನಗ ಮೆಟೀರಿಯಲ್ ಟೆಸ್ಟ್ ಮಲ್ಪುವ.",
      geoHowChooseTitle: "ಬೆಂಗ್ಲೂರ್‌ಡ್ ಎಡ್ಡೆ ಸಿವಿಲ್ ಎಂಜಿನಿಯರ್ ಎಂಚ ಆಯ್ಕೆ ಮಲ್ಪುನ?",
      geoHowChooseContent: "ಸರಿಯಾಯಿನ ಎಂಜಿನಿಯರ್ ಆಯ್ಕೆ ಮಲ್ಪೆರೆ ಅಕ್ಲೆನ ಗುಣಮಟ್ಟದ ಕಟ್ಪಾಡು, ಪಾರದರ್ಶಕತೆ ಬೊಕ್ಕ ರಿಜಿಸ್ಟರ್ಡ್ ಗುತ್ತಿಗೆದಾರರಾ ಪಂಡ್‌ದ್ ತೂವೊಡು.",
      geoHowChoose1: "<strong> ಉದ್ಯಮ್ ರಿಜಿಸ್ಟ್ರೇಶನ್:</strong> ಅಧಿಕೃತವಾದ್ ರಿಜಿಸ್ಟರ್ ಆತೆರಾ ತೂಲೆ (ನಮ್ಮ Udyam ID: UDYAM-KR-03-0663373).",
      geoHowChoose2: "<strong>ಅಂದಾಜು:</strong> ಸರಿಗೆ ಲೆಕ್ಕ ಕೊರ್ಪುನೆನ್ ತೂವೊಡು. ವಿವರವಾಯಿನ BOQ ಕೇನ್‌ಲೆ.",
      geoHowChoose3: "<strong>ಗುಣಮಟ್ಟ ತಪಾಸಣೆ:</strong> ಸಿವಿಲ್ ಎಂಜಿನಿಯರ್ ಕಡ್ಡಾಯವಾದ್ ಮೆಟೀರಿಯಲ್ ಟೆಸ್ಟ್ ಮಲ್ಪೊಡು.",
      geoHowChoose4: "<strong>ಸಮಗ್ರ ಸೇವೆ:</strong> ಪ್ಲಾನಿಂಗ್ ಬೊಕ್ಕ ಇಲ್ಲ್ ಕಟ್ಟುನೆಕ್ಕ್ ಒರಿಯೆನ್ ದೀಂಡ ಎಡ್ಡೆ.",
      geoPricingTitle: "ಸಿವಿಲ್ ಎಂಜಿನಿಯರಿಂಗ್ ಬೆಲೆ ಬೊಕ್ಕ ಪ್ರಯೋಜನೊಲು",
      geoPricingContent: "ನಿರ್ಮಾಣದ ಬೆಲೆ ಮೆಟೀರಿಯಲ್‌ದ ಗುಣಮಟ್ಟ, ಜಾಗೆ ಬೊಕ್ಕ ವಾಸ್ತುಶಿಲ್ಪದ ವಿನ್ಯಾಸದ ಮಿತ್ತ್ ಅವಲಂಬಿತ ಆದುಪ್ಪುಂಡು. ಪ್ರೀಮಿಯಂ ಎಂಜಿನಿಯರ್ ದೀಂಡ ಅಡಗಿನ ಕರ್ಚಿನ್ ತಡೆಗಟೊಲಿ.",
      geoCompareTitle: "ಹೋಲಿಕೆ: Golden Village ಬೊಕ್ಕ ಸಾಮಾನ್ಯ ಗುತ್ತಿಗೆದಾರೆರ್",
      geoCompareH1: "ವಿಶೇಷತೆ", geoCompareH2: "Golden Village For Image", geoCompareH3: "ಸಾಮಾನ್ಯ ಗುತ್ತಿಗೆದಾರೆರ್",
      geoC1F: "ಬೆಲೆ ಅಂದಾಜು", geoC1G: "ನಿಖರವಾದ್ BOQ", geoC1S: "ಸರಿಯಾಯಿನ ಲೆಕ್ಕ ಇಜ್ಜಿ",
      geoC2F: "ಮೆಟೀರಿಯಲ್ ಗುಣಮಟ್ಟ", geoC2G: "ಕಠಿಣ ಮೆಟೀರಿಯಲ್ ಟೆಸ್ಟ್", geoC2S: "ಟೆಸ್ಟ್ ಮಲ್ಪುಜೆರ್",
      geoC3F: "ಯೋಜನಾ ನಿರ್ವಹಣೆ", geoC3G: "ಸಂಪೂರ್ಣ ಜವಾಬ್ದಾರಿ", geoC3S: "ಮಾಲಿಕೆರ್ ಕಾತ್ ಕುಲ್ಲುಡು",
      geoC4F: "ಕಾನೂನು ಪ್ರಕಾರ", geoC4G: "ರಿಜಿಸ್ಟರ್ಡ್ (UDYAM)", geoC4S: "ರಿಜಿಸ್ಟರ್ ಅತ್ತ್",
      geoC5F: "ಟೈಮ್ ಲಿಮಿಟ್", geoC5G: "ಗಡುವುಗ್ ಸರಿಯಾದ್", geoC5S: "ವಿಳಂಬದ ಸಾಧ್ಯತೆ ಲತ್ತ್",
      geoFaqTitle: "ಸಾಮಾನ್ಯವಾದ್ ಕೇನುನ ಪ್ರಶ್ನೆಲು (FAQ)",
      geoFaq1Q: "ಇಲ್ಲ್ ಕಟ್ಟೆರೆ ಸಿವಿಲ್ ಎಂಜಿನಿಯರ್ ದಾದ ಮಲ್ಪುವೆರ್?", geoFaq1A: "ಸಿವಿಲ್ ಎಂಜಿನಿಯರ್ ಇಲ್ಲ್‌ದ ಗಟ್ಟಿ, ಗುಣಮಟ್ಟ ಬೊಕ್ಕ ಕಟ್ಟುನ ಬೇಲೆನ್ ಸಂಪೂರ್ಣವಾದ್ ತೂವೊನುವೆರ್.",
      geoFaq2Q: "ಇಲ್ಲ್ ಕಟ್ಟೆರೆ ಏತ್ ಕರ್ಚಿ ಆಪುಂಡು?", geoFaq2A: "ಗಲಸುನ ಮೆಟೀರಿಯಲ್ ಬೊಕ್ಕ ವಿನ್ಯಾಸದ ಮಿತ್ತ್ ಪ್ರತಿ ಚದರ ಅಡಿಗ್ ₹1,800 ರ್ದ್ ₹3,000+ ಮುಟ್ಟ ಕರ್ಚಾಪುಂಡು.",
      geoFaq3Q: "Golden Village For Image ನ್ ದಾಯೆ ಆಯ್ಕೆ ಮಲ್ಪೊಡು?", geoFaq3A: "ಬೇಲೆಗು ಪೋಪುನಕ್ಲೆಗ್ ಇಲ್ಲ್ ಕಟ್ಟುನಗ ದಿನಾಲ ಕಟ್ಟೊಣ ತೂವೊಲಿಗಾಪುಜಿ. ನಮ ಜವಾಬ್ದಾರಿ ದೆತೊಂದು ನಿಕ್ಲೆಗ್ ಟೆನ್ಶನ್-ಫ್ರೀ ಬೇಲೆ ಮಲ್ತ್‌ದ್ ಕೊರ್ಪ.",
      geoFaq4Q: "ಕರಾವಳಿ ಕರ್ನಾಟಕಡ್ ಸೇವೆ ಕೊರ್ಪರಾ?", geoFaq4A: "ಅಂದ್. ಬೆಂಗ್ಲೂರ್‌ಡ್ ಇತ್ತ್ಂಡಲಾ, ಕರಾವಳಿ ಕರ್ನಾಟಕ (ಕುಡ್ಲ, ಉಡುಪಿ) ಡ್ ನಮ ಇಲ್ಲ್ ಬೊಕ್ಕ ಕಮರ್ಷಿಯಲ್ ಬಿಲ್ಡಿಂಗ್ ಕಟ್ಟ್‌ದ್ ಕೊರ್ಪ.",
      geoFaq5Q: "ಪುದರ್ ಎಂಚ ನೋಂದಣಿ ಮಲ್ಪುನ?", geoFaq5A: "ನಮ್ಮ WhatsApp ಮುಖಾಂತರ Santhosh .D ಅಕ್ಲೆನ್ ಸಂಪರ್ಕ ಮಲ್ಪುಲೆ. ನಮ ಸೈಟ್ ತೂದು ಪ್ಲಾನ್ ಮಲ್ತ್‌ದ್ ಕೊರ್ಪ.",
    },
  };

  /** @type {'en' | 'kn' | 'hi' | 'tcy'} */
  let currentLang = "en";

  $: t = translations[currentLang];
  $: projects = t.projects;

  let currentIndex = 0;
  let isLangMenuOpen = false;

  onMount(() => {
    // Detect preferred browser language
    const detectLanguage = () => {
      const supported = ['en', 'kn', 'hi', 'tcy'];
      const browserLangs = navigator.languages || [navigator.language];
      
      for (const lang of browserLangs) {
        const short = lang.split('-')[0].toLowerCase();
        if (supported.includes(short)) return /** @type {'en' | 'kn' | 'hi' | 'tcy'} */ (short);
      }
      return 'en';
    };

    currentLang = detectLanguage();

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
      -webkit-backdrop-filter: blur(8px);
      border-radius: 24px;
      border: 1px solid rgba(255, 255, 255, 0.8);
      box-shadow:
        0 10px 25px -5px rgba(0, 0, 0, 0.05),
        inset 0 2px 4px rgba(255, 255, 255, 0.9);
      will-change: transform, opacity;
      /* Only transition specific properties to keep the glossy background stable */
      transition:
        transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1),
        opacity 0.5s linear,
        box-shadow 0.5s ease;
    }

    .hero-orb {
      position: absolute;
      filter: blur(60px);
      z-index: -1;
      opacity: 0.6;
    }

    /* Card Slider Animations */
    #project-slider .project-card {
      transition:
        top 0.8s cubic-bezier(0.25, 1, 0.5, 1),
        left 0.8s cubic-bezier(0.25, 1, 0.5, 1),
        width 0.8s cubic-bezier(0.25, 1, 0.5, 1),
        height 0.8s cubic-bezier(0.25, 1, 0.5, 1);
      position: absolute;
      transform: none !important; /* Force off transform to preserve backdrop-filter */
    }

    #project-slider .glossy-card {
      background: linear-gradient(
        135deg,
        var(--card-bg-start, rgba(255, 255, 255, 0.7)) 0%,
        var(--card-bg-end, rgba(255, 255, 255, 0.3)) 100%
      );
      backdrop-filter: blur(var(--card-blur, 8px));
      -webkit-backdrop-filter: blur(var(--card-blur, 8px));
      border: 1px solid var(--card-border, rgba(255, 255, 255, 0.8));
      box-shadow:
        0 10px 25px -5px var(--card-shadow-1, rgba(0, 0, 0, 0.05)),
        inset 0 2px 4px var(--card-shadow-2, rgba(255, 255, 255, 0.9));
      transition:
        background 0.8s cubic-bezier(0.25, 1, 0.5, 1),
        backdrop-filter 0.8s cubic-bezier(0.25, 1, 0.5, 1),
        -webkit-backdrop-filter 0.8s cubic-bezier(0.25, 1, 0.5, 1),
        border-color 0.8s cubic-bezier(0.25, 1, 0.5, 1),
        box-shadow 0.8s cubic-bezier(0.25, 1, 0.5, 1);
    }

    #project-slider .glossy-card > * {
      opacity: var(--card-opacity, 1);
      transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1);
    }

    .card-active {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 30;
      --card-opacity: 1;
      --card-blur: 8px;
      --card-bg-start: rgba(255, 255, 255, 0.7);
      --card-bg-end: rgba(255, 255, 255, 0.3);
      --card-border: rgba(255, 255, 255, 0.8);
      --card-shadow-1: rgba(0, 0, 0, 0.05);
      --card-shadow-2: rgba(255, 255, 255, 0.9);
    }

    .card-next {
      top: 40px;
      left: 5%;
      width: 90%;
      height: 90%;
      z-index: 20;
      --card-opacity: 0.6;
      --card-blur: 4.8px;
      --card-bg-start: rgba(255, 255, 255, 0.42);
      --card-bg-end: rgba(255, 255, 255, 0.18);
      --card-border: rgba(255, 255, 255, 0.48);
      --card-shadow-1: rgba(0, 0, 0, 0.03);
      --card-shadow-2: rgba(255, 255, 255, 0.54);
    }

    .card-hidden,
    .card-exit {
      z-index: 10;
      --card-opacity: 0;
      --card-blur: 0px;
      --card-bg-start: rgba(255, 255, 255, 0);
      --card-bg-end: rgba(255, 255, 255, 0);
      --card-border: rgba(255, 255, 255, 0);
      --card-shadow-1: rgba(0, 0, 0, 0);
      --card-shadow-2: rgba(255, 255, 255, 0);
    }

    .card-hidden {
      top: 100px;
      left: 10%;
      width: 80%;
      height: 80%;
    }

    .card-exit {
      top: 200px;
      left: 10%;
      width: 80%;
      height: 80%;
      z-index: 0;
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
  <div class="fixed inset-0 overflow-hidden pointer-events-none -z-10">
    <div
      class="hero-orb bg-aero-green w-[500px] h-[500px] -top-48 -left-48"
    ></div>
    <div
      class="hero-orb bg-blue-300 w-[400px] h-[400px] top-1/2 -right-24"
    ></div>
  </div>

  <header
    class="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-xl border-b border-white/40 z-[100] glossy-surface"
  >
    <div class="container mx-auto px-6 h-20 flex justify-between items-center">
      <a href="#hero" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <img
          src="{base}/web-app-manifest-512x512.png"
          alt="GV Logo"
          class="w-16 h-16 object-contain"
        />
        <span
          class="font-bold text-xl tracking-tight text-aero-dark hidden sm:block"
          >Golden Village For Image</span
        >
      </a>
      <a
        class="solar-cta text-white px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all"
        href="https://wa.me/919916936115"
      >
        {@render WhatsAppIcon("w-5 h-5")}
        <span>{t.chatNow}</span>
      </a>
    </div>
  </header>

  <main class="flex-grow">
    <section id="hero" class="container mx-auto px-6 py-12 md:py-32">
      <div
        class="flex flex-col lg:flex-row items-center justify-between gap-20 lg:gap-32"
      >
        <div
          class="flex-1 space-y-10 text-center lg:text-left"
          data-purpose="hero-content"
        >
          <div class="space-y-4">
            <h1
              class="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight"
            >
              Golden Village <span class="text-aero-green">For Image</span>
            </h1>
            <h2
              class="text-2xl md:text-3xl font-bold text-slate-700 mt-2"
            >
              Santhosh .D
            </h2>
            <p
              class="text-xl md:text-2xl font-bold text-aero-dark/60 tracking-widest uppercase mt-4"
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

    <section id="services"
      class="container mx-auto px-6 py-20 bg-white/30 backdrop-blur-sm rounded-[50px] my-10 border border-white/40"
    >
      <div class="text-center mb-16">
        <a href="#services" class="inline-block hover:opacity-80 transition-opacity">
          <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            {t.servicesTitle}
          </h2>
        </a>
        <div
          class="w-24 h-2 bg-aero-green-gradient mx-auto rounded-full shadow-sm"
        ></div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div
          class="service-card glossy-card p-10 text-center group hover:-translate-y-3 transition-[transform,opacity,box-shadow] duration-500 hover:shadow-2xl hover:shadow-cyan-200/50"
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

        <div
          class="service-card glossy-card p-10 text-center group hover:-translate-y-3 transition-[transform,opacity,box-shadow] duration-500 hover:shadow-2xl hover:shadow-blue-200/50"
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

        <div
          class="service-card glossy-card p-10 text-center group hover:-translate-y-3 transition-[transform,opacity,box-shadow] duration-500 hover:shadow-2xl hover:shadow-yellow-200/50"
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

        <div
          class="service-card glossy-card p-10 text-center group hover:-translate-y-3 transition-[transform,opacity,box-shadow] duration-500 hover:shadow-2xl hover:shadow-red-200/50"
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

    <section id="geo" class="container mx-auto px-6 py-20 bg-white/30 backdrop-blur-sm rounded-[50px] my-10 border border-white/40">
      <div class="max-w-5xl mx-auto space-y-20">
        
        <article class="space-y-6">
          <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900">{t.geoTldrTitle}</h2>
          <div class="w-16 h-2 bg-aero-green-gradient rounded-full"></div>
          <p class="text-lg text-slate-700 leading-relaxed font-medium">
            {@html t.geoTldrContent}
          </p>
        </article>

        <article class="space-y-6">
          <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900">{t.geoHowWorksTitle}</h2>
          <div class="w-16 h-2 bg-aero-green-gradient rounded-full"></div>
          <p class="text-lg text-slate-700 leading-relaxed font-medium">{t.geoHowWorksContent}</p>
          <ul class="list-disc pl-6 space-y-3 text-slate-700 text-lg">
            <li>{@html t.geoHowWorks1}</li>
            <li>{@html t.geoHowWorks2}</li>
            <li>{@html t.geoHowWorks3}</li>
            <li>{@html t.geoHowWorks4}</li>
          </ul>
        </article>

        <article class="space-y-6">
          <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900">{t.geoHowChooseTitle}</h2>
          <div class="w-16 h-2 bg-aero-green-gradient rounded-full"></div>
          <p class="text-lg text-slate-700 leading-relaxed font-medium">{t.geoHowChooseContent}</p>
          <ul class="list-disc pl-6 space-y-3 text-slate-700 text-lg">
            <li>{@html t.geoHowChoose1}</li>
            <li>{@html t.geoHowChoose2}</li>
            <li>{@html t.geoHowChoose3}</li>
            <li>{@html t.geoHowChoose4}</li>
          </ul>
        </article>

        <article class="space-y-6">
          <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900">{t.geoPricingTitle}</h2>
          <div class="w-16 h-2 bg-aero-green-gradient rounded-full"></div>
          <p class="text-lg text-slate-700 leading-relaxed font-medium">{t.geoPricingContent}</p>
          <div class="overflow-x-auto mt-8 bg-white/50 rounded-3xl p-6 shadow-sm border border-white/60">
            <h3 class="text-xl font-bold mb-4 opacity-0 h-0">{t.geoCompareTitle}</h3>
            <table class="w-full text-left text-slate-700">
              <thead>
                <tr class="border-b-2 border-slate-200">
                  <th class="py-4 px-4 font-bold text-xl">{t.geoCompareH1}</th>
                  <th class="py-4 px-4 font-bold text-xl text-aero-dark">{t.geoCompareH2}</th>
                  <th class="py-4 px-4 font-bold text-xl opacity-60">{t.geoCompareH3}</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200/50">
                <tr>
                  <td class="py-4 px-4 font-semibold">{t.geoC1F}</td>
                  <td class="py-4 px-4 text-aero-dark font-medium">{t.geoC1G}</td>
                  <td class="py-4 px-4 opacity-70">{t.geoC1S}</td>
                </tr>
                <tr>
                  <td class="py-4 px-4 font-semibold">{t.geoC2F}</td>
                  <td class="py-4 px-4 text-aero-dark font-medium">{t.geoC2G}</td>
                  <td class="py-4 px-4 opacity-70">{t.geoC2S}</td>
                </tr>
                <tr>
                  <td class="py-4 px-4 font-semibold">{t.geoC3F}</td>
                  <td class="py-4 px-4 text-aero-dark font-medium">{t.geoC3G}</td>
                  <td class="py-4 px-4 opacity-70">{t.geoC3S}</td>
                </tr>
                <tr>
                  <td class="py-4 px-4 font-semibold">{t.geoC4F}</td>
                  <td class="py-4 px-4 text-aero-dark font-medium">{t.geoC4G}</td>
                  <td class="py-4 px-4 opacity-70">{t.geoC4S}</td>
                </tr>
                <tr>
                  <td class="py-4 px-4 font-semibold">{t.geoC5F}</td>
                  <td class="py-4 px-4 text-aero-dark font-medium">{t.geoC5G}</td>
                  <td class="py-4 px-4 opacity-70">{t.geoC5S}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article class="space-y-6">
          <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900">{t.geoFaqTitle}</h2>
          <div class="w-16 h-2 bg-aero-green-gradient rounded-full"></div>
          
          <div class="space-y-6">
            <div class="bg-white/40 p-6 rounded-2xl border border-white/50 shadow-sm">
              <h3 class="text-xl font-bold text-slate-900 mb-2">{t.geoFaq1Q}</h3>
              <p class="text-slate-700 leading-relaxed">{t.geoFaq1A}</p>
            </div>
            
            <div class="bg-white/40 p-6 rounded-2xl border border-white/50 shadow-sm">
              <h3 class="text-xl font-bold text-slate-900 mb-2">{t.geoFaq2Q}</h3>
              <p class="text-slate-700 leading-relaxed">{t.geoFaq2A}</p>
            </div>
            
            <div class="bg-white/40 p-6 rounded-2xl border border-white/50 shadow-sm">
              <h3 class="text-xl font-bold text-slate-900 mb-2">{t.geoFaq3Q}</h3>
              <p class="text-slate-700 leading-relaxed">{t.geoFaq3A}</p>
            </div>
            
            <div class="bg-white/40 p-6 rounded-2xl border border-white/50 shadow-sm">
              <h3 class="text-xl font-bold text-slate-900 mb-2">{t.geoFaq4Q}</h3>
              <p class="text-slate-700 leading-relaxed">{t.geoFaq4A}</p>
            </div>
            
            <div class="bg-white/40 p-6 rounded-2xl border border-white/50 shadow-sm">
              <h3 class="text-xl font-bold text-slate-900 mb-2">{t.geoFaq5Q}</h3>
              <p class="text-slate-700 leading-relaxed">{t.geoFaq5A}</p>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section id="projects" class="container mx-auto px-6 py-20 sm:py-32">
      <div class="text-center mb-16">
        <a href="#projects" class="inline-block hover:opacity-80 transition-opacity">
          <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            {t.buildIdea}
          </h2>
        </a>
        <div
          class="w-24 h-2 bg-aero-green-gradient mx-auto rounded-full shadow-sm"
        ></div>
      </div>
      <div class="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
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
            </div>
          </div>
        </div>

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
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer
    class="bg-white/50 border-t border-white py-20 px-6 md:px-12 mt-20 glossy-surface mt-auto"
  >
    <div
      class="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left"
    >
      <div class="space-y-6">
        <div class="flex items-center justify-center md:justify-start gap-3">
          <img
            src="{base}/web-app-manifest-512x512.png"
            alt="GV Logo"
            class="w-[72px] h-[72px] object-contain"
          />
          <span class="font-bold text-xl text-aero-dark"
            >Golden Village For Image</span
          >
        </div>
        <p class="text-slate-500 leading-relaxed text-base max-w-xs mx-auto md:mx-0">
          {t.footerDesc}
        </p>
        <p class="text-xs font-bold text-aero-green uppercase tracking-[0.2em]">
          {t.footerYears}
        </p>
      </div>

      <div class="space-y-6">
        <h4 class="font-bold text-xl text-slate-800">{t.quickLinks}</h4>
        <nav class="flex flex-col gap-3 text-slate-600 font-medium">
          <a href="#hero" class="hover:text-aero-green transition-colors">{t.home}</a>
          <a href="#services" class="hover:text-aero-green transition-colors">{t.servicesTitle}</a>
          <a href="#geo" class="hover:text-aero-green transition-colors">{t.aboutGvfi}</a>
          <a href="#projects" class="hover:text-aero-green transition-colors">{t.buildIdea}</a>
        </nav>
      </div>

      <div class="space-y-6">
        <h4 class="font-bold text-xl text-slate-800">{t.contactDetails}</h4>
        <div class="space-y-5">
          <p
            class="flex items-start justify-center md:justify-start gap-3 text-slate-600 text-base"
          >
            <span class="text-xl">📍</span>
            <span>{@html t.location}</span>
          </p>
          <a
            class="flex items-center justify-center md:justify-start gap-3 text-slate-600 hover:text-aero-green text-base group"
            href="mailto:contact@goldenvillage.in"
          >
            <Mail class="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>contact@goldenvillage.in</span>
          </a>
          <div class="pt-2">
            <a
              class="w-full max-w-[200px] mx-auto md:mx-0 flex items-center justify-center gap-2 solar-cta text-white font-bold py-3 px-4 text-sm rounded-full transition-all"
              href="https://wa.me/919916936115"
            >
              {@render WhatsAppIcon("w-4 h-4")}
              {t.inquireWa}
            </a>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <h4 class="font-bold text-xl text-slate-800">{t.followUs}</h4>
        <div class="flex gap-4 justify-center md:justify-start">
          <a
            href="https://facebook.com/goldenvillage"
            class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white transition-all shadow-sm group"
            aria-label="Facebook"
            target="_blank" rel="noopener noreferrer"
          >
            <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
            </svg>
          </a>
          <a
            href="https://instagram.com/goldenvillage"
            class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-pink-600 hover:text-white transition-all shadow-sm group"
            aria-label="Instagram"
            target="_blank" rel="noopener noreferrer"
          >
             <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/company/goldenvillage"
            class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-700 hover:text-white transition-all shadow-sm group"
            aria-label="LinkedIn"
            target="_blank" rel="noopener noreferrer"
          >
            <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div
      class="container mx-auto mt-20 pt-10 border-t border-slate-200/50 text-center text-slate-400 text-sm"
    >
      © {new Date().getFullYear()} Santhosh .D {@html t.rights}
    </div>
  </footer>

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
          >हिन्दी</button
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
      on:click={toggleLangMenu}
      class="p-4 bg-white/90 backdrop-blur-xl border border-white/50 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all text-slate-700"
    >
      <span
        class="material-symbols-outlined flex items-center justify-center text-3xl"
      >
        language
      </span>
    </button>
  </div>
</div>
