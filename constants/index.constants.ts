import { Instagram, Facebook, X, User } from "lucide-react";

export const SOCIALMEDIA = [
  {
    label: "Instagram",
    link: "https://instagram.com/@the.netsense",
    icon: Instagram,
  },
  {
    label: "Facebook",
    link: "https://instagram.com/@the.netsense",
    icon: Facebook,
  },
  {
    label: "X",
    link: "https://instagram.com/@the.netsense",
    icon: X,
  },
];

export const USEFULLINKS = [
  {
    label: "Home",
    link: "/#home",
  },
  {
    label: "About Us",
    link: "/#about",
  },
  {
    label: "Services",
    link: "/#services",
  },
  {
    label: "Faqs",
    link: "/#faqs",
  },
  {
    label: "Terms & Conditions",
    link: "/terms-and-condition",
  },
  {
    label: "Privacy Policy",
    link: "/privacy-policy",
  },
];

export const OURSERVICES = [
  { label: "Web Development", link: "/#services" },
  { label: "App Development", link: "/#services" },
  { label: "Other Enquiries", link: "/#services" },
];

export const FAQS = [
  {
    question: "1. What services does TheNetSense provide?",
    answer:
      "We build high-quality websites, including landing pages, e-commerce sites, booking systems, and custom solutions tailored to your business goals.",
  },
  {
    question: "2. Why should I choose TheNetSense over other agencies?",
    answer:
      "We focus on helping you grow. Our sites are designed for lead generation and conversions, and we provide a full package with SEO, content writing, Google Analytics, and ongoing support to ensure your success.",
  },
  {
    question: "3. How long does it take to build a website?",
    answer:
      "Typically, it takes 4-6 weeks, depending on the complexity. We also offer faster options if you need a quicker turnaround.",
  },
  {
    question: "4. Do you offer a money-back guarantee?",
    answer:
      "Yes! If we miss our agreed deadline, we’ll give you a 100% refund. Your satisfaction is our priority.",
  },
  {
    question: "5. What’s included in your package?",
    answer:
      "Our package includes logo design, web design, mobile-friendly development, content writing, SEO, Google Analytics, one month of ad management, and 30 days (720 hours) of technical support.",
  },
  {
    question: "6. Do you help with domain and hosting?",
    answer:
      "We can guide you through domain and hosting setup or recommend providers. The costs for these are handled separately.",
  },
  {
    question: "7. What’s your payment process?",
    answer:
      "We ask for an initial payment of 4999 INR to start, with the remaining 5000 INR due upon completion. Extra features, like e-commerce, may have additional costs.",
  },
  {
    question: "8. Can I ask for custom features?",
    answer:
      "Of course! We’re all about creating custom solutions that fit your needs. Let us know what you’re looking for, and we’ll make it happen.",
  },
  {
    question: "9. What kind of support do you offer after launch?",
    answer:
      "We provide 30 days (720 hours) of technical support post-launch for any issues or questions. Additional support packages are also available if you need extended help.",
  },
  {
    question: "10. How do I get started?",
    answer:
      "It’s easy! Just reach out through our contact page or email us, and we’ll arrange a consultation to discuss your project and goals.",
  },
];

export const ABOUTFEATURES1 = [
  "Increases online visibility",
  "Builds client trust",
  "Showcases your services",
];

export const ABOUTFEATURES2 = [
  "Attracts more customers",
  "Accessible 24/7",
  "Enhances brand image",
];

export const SPECIALSECTION = [
  {
    Icon: User,
    count: 10,
    title: "Happy Client",
  },
  {
    Icon: User,
    count: 10,
    title: "Projects",
  },
  {
    Icon: User,
    count: 720,
    title: "Hours Of Support",
  },
  {
    Icon: User,
    count: 5,
    title: "Hard Workers",
  },
];

export const NAVLINKS = [
  {
    title: "About Us",
    link: "/#about-us",
  },
  {
    title: "Services",
    link: "/#services",
  },
  {
    title: "Faqs",
    link: "/#faqs",
  },
  {
    title: "Projects",
    link: "/#projects",
  },
  {
    title: "Contact Us",
    link: "/#contact",
  },
];

export const PROJECTS = [
  {
    id: "project-1",
    title: "",
    techStack: [
      {
        frontend: ["Figma", "Next Js", "Tailwind Css", "Framer Motion"],
        backend: null,
        database: null,
        deployment: "Netlify",
      },
    ],
    category: "Startup",
    webLink: "https://healgreen.netlify.app",
    image: "/assets/projects/healgreen.png",
  },
  {
    id: "project-6",
    title: "",
    techStack: [
      {
        frontend: ["Figma", "Next Js", "Tailwind Css", "Framer Motion"],
        backend: null,
        database: null,
        deployment: "Netlify",
      },
    ],
    category: "Business",
    webLink: "https://overseasaircourierservice.in",
    image: "/assets/projects/overseasaircourierservice.png",
  },

  {
    id: "project-2",
    title: "",
    techStack: [
      {
        frontend: ["HTML", "CSS", "JavaScript", "BootStrap", "JQuery"],
        backend: null,
        database: null,
        deployment: "Netlify",
      },
    ],
    category: "Portfolio",
    webLink: "https://stemiansrobohub.netlify.app",
    image: "/assets/projects/stemians.png",
  },
  {
    id: "project-3",
    title: "",
    techStack: [
      {
        frontend: ["React JS", "Tailwind Css", "Framer Motion"],
        backend: ["Sanity Studio"],
        database: ["Supabase", "Sanity Database"],
        deployment: "Vercel",
      },
    ],
    category: "E-Commerce",
    webLink: "https://zoyeelifestyle.in",
    image: "/assets/projects/zoyee.png",
  },
  {
    id: "project-4",
    title: "",
    techStack: [
      {
        frontend: ["Figma", "Next Js", "Tailwind Css", "Framer Motion"],
        backend: null,
        database: null,
        deployment: "Netlify",
      },
    ],
    category: "Portfolio",
    webLink: "https://ashik-jenly.netlify.app",
    image: "/assets/projects/ashik.png",
  },
  {
    id: "project-5",
    title: "",
    techStack: [
      {
        frontend: ["Figma", "React JS", "Tailwind Css", "Framer Motion"],
        backend: null,
        database: null,
        deployment: "Vercel",
      },
    ],
    category: "Agency",
    webLink: "https://edutechfuse.vercel.app",
    image: "/assets/projects/edutechfuse.png",
  },
];
