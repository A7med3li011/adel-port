import React, { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Mail,
  Phone,
  Linkedin,
  Github,
  Menu,
  X,
  ChevronDown,
  Download,
  CloudDownload,
  MessageCircle,
} from "lucide-react";
import profileImage from "./assits/profile.jpeg";
import resumePDF from "./assits/Adel Mostafa - CV.pdf";
import t1 from "./assits/tasniq/1.png";
import t2 from "./assits/tasniq/2.png";
import t3 from "./assits/tasniq/3.png";
import t4 from "./assits/tasniq/4.png";
import t5 from "./assits/tasniq/5.png";
import chat1 from "./assits/chat/Chat1.png";
import chat2 from "./assits/chat/Chat2.png";
import chat3 from "./assits/chat/Chat3.png";
import chat4 from "./assits/chat/Chat4.png";
import sp1 from "./assits/space/sp1.png";
import sp2 from "./assits/space/sp2.png";
import sp3 from "./assits/space/sp3.png";
import sp4 from "./assits/space/sp4.png";
import ninja1 from "./assits/ninja/ninja1.png";
import ninja2 from "./assits/ninja/ninja2.png";
import ninja3 from "./assits/ninja/ninja3.png";
import ninja4 from "./assits/ninja/ninja4.png";
import req1 from "./assits/req/req1.png";
import req2 from "./assits/req/req2.png";
import req3 from "./assits/req/req3.png";
import req4 from "./assits/req/req4.png";
import w1 from "./assits/w/w1.png";
import w2 from "./assits/w/w2.png";
import w3 from "./assits/w/w3.png";
import w4 from "./assits/w/w4.png";
import chess1 from "./assits/chess/chess1.png";
import chess2 from "./assits/chess/chess2.png";
import chess3 from "./assits/chess/chess3.png";
import q1 from "./assits/q/q1.png";
import q2 from "./assits/q/q2.png";
import patria1 from "./assits/patria/patria1.png";
import patria2 from "./assits/patria/patria2.png";
import patria3 from "./assits/patria/patria3.png";
import erp1 from "./assits/erp/erp1.png";
import erp2 from "./assits/erp/erp2.png";
import erp3 from "./assits/erp/erp3.png";

// WhatsApp SVG Icon Component
const WhatsAppIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// Upwork Top Rated Badge Component
const UpworkBadge = () => (
  <div className="flex items-center justify-center gap-2 mt-3">
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14a800]/15 border border-[#14a800]/40 text-[#14a800] text-sm font-semibold">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.001-2.439-5.452-5.439-5.452z" />
      </svg>
      Top Rated on Upwork
    </span>
  </div>
);

// Portfolio data
const portfolioData = {
  personal: {
    name: "Adel Mostafa Mohamed",
    title: "Software Engineer",
    image: profileImage,
    email: "adelmostafamohamed12@gmail.com",
    phone: "+20 1222402998",
    whatsapp: "https://wa.me/201222402998",
    linkedin: "https://www.linkedin.com/in/adel-mostafa-766296234/",
    github: "https://github.com/AdelMostafa31",
    upwork: "https://www.upwork.com/freelancers/adelmostafa",
    summary:
      "I graduated from the Faculty of Computing and Data Science at Alexandria University and began working as a mobile app developer. Through working on various real-life projects across Egypt, UAE, Saudi Arabia, and the USA, I have gained practical experience that aligns with the needs of companies today. I use Flutter for mobile app development to create Android and iOS apps, and can also generate a web app using a single code base.",
  },

  experience: [
    {
      company: "Colada",
      role: "Flutter Developer",
      location: "Saudi Arabia (Remote)",
      period: "January 2026 – Present",
      highlights: [
        "Built and maintained the Colada consumer app — an exclusive restaurant and cafe offers platform with 1,000+ active deals and cashback rewards across Riyadh.",
        "Integrated dynamic offer feeds, deep links, and real-time deal updates using Flutter and REST APIs.",
        "Implemented cashback reward system and user engagement features.",
      ],
    },
    {
      company: "MemoryChat",
      role: "Flutter Developer",
      location: "Alexandria, Egypt",
      period: "June 2025 – Present",
      highlights: [
        "Architected an offline-first chat application using Drift ORM for local storage and PowerSync for bidirectional sync with Supabase (PostgreSQL) backends.",
        "Implemented real-time messaging with Supabase Realtime subscriptions and conflict-free data handling.",
        "Designed scalable architecture ensuring seamless online/offline transitions.",
      ],
    },
    {
      company: "Priceless Medical",
      role: "Flutter Developer",
      location: "UAE (Remote)",
      period: "July 2025 – March 2026",
      highlights: [
        "Delivered new features including DeepLinks, in-app Subscriptions, and Stripe payment integration for the UAE's first smart healthcare savings platform.",
        "Maintained and optimized the app serving 30+ clinics and hospitals across the UAE.",
        "Improved app performance and resolved critical production bugs.",
      ],
    },
    {
      company: "TopProz",
      role: "Flutter Developer",
      location: "California, USA (Remote)",
      period: "June 2025 – September 2025",
      highlights: [
        "Developed and maintained cross-platform mobile applications using Flutter for Android and iOS.",
        "Built responsive, user-friendly UIs aligned with modern design principles.",
        "Integrated RESTful APIs and collaborated with product managers and designers to deliver new features.",
      ],
    },
    {
      company: "MDARJ",
      role: "Flutter Developer",
      location: "Alexandria, Egypt",
      period: "May 2024 – June 2025",
      highlights: [
        "Led mobile development across multiple client projects, applying MVVM and BLoC to deliver apps on time and within budget.",
        "Developed and deployed multiple mobile applications, resulting in a strong project portfolio.",
        "Maintained effective communication channels with clients, ensuring thorough understanding of project requirements.",
      ],
    },
    {
      company: "Upwork – Freelancing",
      role: "Flutter & Backend Developer",
      location: "Remote",
      period: "January 2023 – Present",
      highlights: [
        "Top Rated Flutter Developer on Upwork with clients including Bidfood CRM (UAE), T2 (Saudi Arabia), and CHAQT (UAE).",
        "T2: Built an AI automation chat app — admins send voice/text commands to trigger AI-driven task management for employees via N8N workflows.",
        "Bidfood & CHAQT: Feature development and bug fixes on live production apps across the UAE market.",
        "Delivered apps end-to-end: UI, REST API integration, state management (BLoC / Riverpod), app store deployment, Node.js backend support.",
      ],
    },
  ],

  projects: [
    {
      name: "Colada",
      description:
        "Exclusive restaurant and cafe offers platform with 1,000+ active deals and cashback rewards across Riyadh, Saudi Arabia. Live on App Store and Google Play.",
      image: null,
      images: [],
      tech: ["Flutter", "REST APIs", "Deep Links", "Cashback System"],
      emoji: "🍹",
    },
    {
      name: "MemoryChat",
      description:
        "Offline-first chat and note-taking application with full real-time bidirectional sync and conflict-free local storage.",
      image: null,
      images: [],
      tech: ["Flutter", "Drift ORM", "PowerSync", "Supabase", "PostgreSQL"],
      emoji: "💬",
    },
    {
      name: "Priceless Medical",
      description:
        "UAE's first smart healthcare savings platform. Serves 30+ partner clinics and hospitals across the UAE with in-app subscriptions and Stripe payments.",
      image: null,
      images: [],
      tech: ["Flutter", "Stripe", "Deep Links", "In-App Subscriptions"],
      emoji: "🏥",
    },
    {
      name: "Bidfood Home",
      description:
        "Online food & beverage delivery platform for the UAE market. Production-grade B2C platform with CRM integration and feature enhancements.",
      image: null,
      images: [],
      tech: ["Flutter", "CRM Integration", "REST APIs", "BLoC"],
      emoji: "🛒",
    },
    {
      name: "TopProz",
      description:
        "Service and project management app for the US market. End-to-end feature development with MVVM architecture.",
      image: null,
      images: [],
      tech: ["Flutter", "REST APIs", "MVVM", "BLoC"],
      emoji: "🔧",
    },
    {
      name: "Patria",
      description:
        "Cafe and restaurant mobile app with fast delivery, special offers, easy ordering, and location tracking.",
      image: patria2,
      images: [patria1, patria2, patria3],
      tech: ["Flutter", "Maps Integration", "Food Delivery"],
      emoji: null,
    },
    {
      name: "ERB",
      description:
        "Cafe & restaurant app focused on dine-in, takeaway and delivery with menu management, table reservations, offers, and location tracking.",
      image: erp1,
      images: [erp1, erp2, erp3],
      tech: ["Flutter", "Maps Integration", "Food Delivery"],
      emoji: null,
    },
    {
      name: "Tansieq",
      description:
        "Ministry of Saudi Hajj — Comprehensive Hajj management system with pilgrim tracking, statistics, and service management.",
      image: t5,
      images: [t1, t2, t3, t4, t5],
      tech: ["Flutter", "Firebase", "Maps Integration"],
      emoji: null,
    },
    {
      name: "T-Chat",
      description:
        "Task management and team collaboration app with shared tasks, calendar view, and performance analytics.",
      image: chat1,
      images: [chat1, chat2, chat3, chat4],
      tech: ["Flutter", "BLoC", "RESTful APIs"],
      emoji: null,
    },
    {
      name: "Space",
      description:
        "Medical library app for medical students with lecture summaries, study materials, and order management.",
      image: sp1,
      images: [sp1, sp2, sp3, sp4],
      tech: ["Flutter", "Firebase", "Clean Architecture"],
      emoji: null,
    },
    {
      name: "Ninja",
      description:
        "Delivery and ERP system with order management, real-time tracking, attendance, and employee management.",
      image: ninja1,
      images: [ninja3, ninja2, ninja1, ninja4],
      tech: ["Flutter", "Maps", "Real-time Tracking"],
      emoji: null,
    },
    {
      name: "Request",
      description:
        "Contractors and project management app with budget tracking, team collaboration, and performance analytics.",
      image: req1,
      images: [req4, req2, req3, req1],
      tech: ["Flutter", "BLoC", "Charts"],
      emoji: null,
    },
    {
      name: "Wasfa",
      description:
        "Recipe and cooking app with meal categories, ingredients lists, and beautiful food photography.",
      image: w4,
      images: [w3, w2, w1, w4],
      tech: ["Flutter", "Firebase", "UI/UX"],
      emoji: null,
    },
    {
      name: "Chess Game",
      description:
        "Interactive chess game with checkmate detection, move validation, and clean game interface.",
      image: chess1,
      images: [chess1, chess2, chess3],
      tech: ["Flutter", "Game Logic", "Animations"],
      emoji: null,
    },
    {
      name: "Quran Time",
      description:
        "Quran reading app with Surah navigation, recitation timing, favorites, and beautiful Arabic typography.",
      image: q1,
      images: [q1, q2],
      tech: ["Flutter", "Audio", "Arabic Typography"],
      emoji: null,
    },
  ],

  skills: {
    technical: [
      "Dart",
      "Flutter",
      "BLoC / Cubit",
      "Riverpod",
      "Provider",
      "MVVM",
      "Clean Architecture",
      "RESTful APIs",
      "Firebase",
      "Supabase",
      "Drift ORM",
      "PowerSync",
      "Node.js",
      "Express.js",
      "SQL / PostgreSQL",
      "MongoDB",
      "Stripe",
      "Deep Links",
      "Push Notifications",
      "In-App Purchases",
      "Animations",
      "Localization",
      "JavaScript",
      "Python",
      "GraphQL",
    ],
    concepts: [
      "Data Structures",
      "OOP",
      "SOLID Principles",
      "Design Patterns",
      "Offline-First Architecture",
      "Real-Time Data",
      "Clean Code",
      "CI/CD",
      "Testing",
    ],
    devops: [
      "Git & GitHub",
      "GitHub Actions",
      "Codemagic",
      "Docker",
      "App Store Connect",
      "Google Play Console",
      "Automated Build & Deploy Pipelines",
    ],
    testing: [
      "Flutter Unit Testing",
      "Widget Testing",
      "Integration Testing",
      "Mockito",
      "flutter_mockito",
      "TDD",
    ],
    aiAutomation: [
      "N8N Workflows",
      "AI Agents",
      "RAGs",
      "AI Task Automation",
      "Self-hosted AI",
    ],
    tools: [
      "Jira",
      "Trello",
      "Plane",
      "Agile / Scrum",
      "CCNA (Cisco Certified)",
      "TCP/IP",
    ],
    soft: [
      "Agile Development",
      "Communication Skills",
      "Team Player",
      "Problem-Solving",
    ],
  },
};

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "experience",
        "projects",
        "skills",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const openProjectModal = (project) => {
    if (project.images && project.images.length > 0) {
      setSelectedProject(project);
      setCurrentImageIndex(0);
    }
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1,
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1,
      );
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? darkMode
              ? "bg-gray-900/95 backdrop-blur-sm shadow-lg"
              : "bg-white/95 backdrop-blur-sm shadow-lg"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Adel Mostafa
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Experience", "Projects", "Skills"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`transition-colors ${
                      activeSection === item.toLowerCase()
                        ? "text-pink-500"
                        : darkMode
                          ? "text-gray-300 hover:text-pink-400"
                          : "text-gray-700 hover:text-pink-500"
                    }`}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className={`md:hidden ${
              darkMode ? "bg-gray-800" : "bg-white"
            } border-t ${darkMode ? "border-gray-700" : "border-gray-200"}`}
          >
            <div className="px-4 py-4 space-y-3">
              {[
                "Home",
                "About",
                "Experience",
                "Projects",
                "Skills",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === item.toLowerCase()
                      ? "bg-pink-500/20 text-pink-500"
                      : darkMode
                        ? "hover:bg-gray-700"
                        : "hover:bg-gray-100"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 pt-16"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <img
              src={portfolioData.personal.image}
              alt={portfolioData.personal.name}
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-pink-500 shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Adel Mostafa
            </span>
          </h1>
          <p
            className="text-2xl md:text-3xl mb-2 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            {portfolioData.personal.title}
          </p>

          {/* Top Rated on Upwork Badge */}
          <div className="animate-slide-up" style={{ animationDelay: "0.15s" }}>
            <UpworkBadge />
          </div>

          <p
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mt-6 mb-12 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Flutter Developer | Mobile App Specialist
          </p>
          <div
            className="flex flex-wrap justify-center gap-4 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg hover:shadow-lg hover:scale-105 transition-all"
            >
              <Linkedin className="inline mr-2" size={20} />
              LinkedIn
            </a>
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 rounded-lg border-2 ${
                darkMode
                  ? "border-gray-700 hover:border-pink-500"
                  : "border-gray-300 hover:border-pink-500"
              } hover:shadow-lg hover:scale-105 transition-all`}
            >
              <Github className="inline mr-2" size={20} />
              GitHub
            </a>
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 rounded-lg border-2 ${
                darkMode
                  ? "border-gray-700 hover:border-pink-500"
                  : "border-gray-300 hover:border-pink-500"
              } hover:shadow-lg hover:scale-105 transition-all`}
            >
              <CloudDownload className="inline mr-2" size={20} />
              Download CV
            </a>
            {/* WhatsApp Button */}
            <a
              href={portfolioData.personal.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white hover:shadow-lg hover:scale-105 transition-all"
            >
              <span className="inline-flex items-center gap-2">
                <WhatsAppIcon size={20} />
                WhatsApp
              </span>
            </a>
          </div>
          <button
            onClick={() => scrollToSection("about")}
            className="mt-12 animate-bounce"
          >
            <ChevronDown size={32} className="text-pink-500" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-20 px-4 ${darkMode ? "bg-gray-800/50" : "bg-white"}`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p
                className={`text-lg ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {portfolioData.personal.summary}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-pink-500" size={20} />
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="hover:text-pink-500 transition-colors"
                  >
                    {portfolioData.personal.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-pink-500" size={20} />
                  <a
                    href={`tel:${portfolioData.personal.phone}`}
                    className="hover:text-pink-500 transition-colors"
                  >
                    {portfolioData.personal.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#25D366]">
                    <WhatsAppIcon size={20} />
                  </span>
                  <a
                    href={portfolioData.personal.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#25D366] transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`p-8 rounded-2xl ${
                darkMode ? "bg-gray-900" : "bg-gray-50"
              }`}
            >
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="space-y-2">
                <p className="text-xl font-semibold text-pink-500">
                  Faculty of Computing and Data Science
                </p>
                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  Alexandria University
                </p>
                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  2021 – 2025 | Grade: Good
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-700 space-y-2">
                <p className="text-xl font-semibold text-purple-400">
                  CCNA – Cisco Network Certificate
                </p>
                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  NTI / Creativa – Cisco
                </p>
                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  September 2023 – November 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Work{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } hover:shadow-xl transition-all hover:scale-[1.02]`}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-pink-500">
                      {exp.role}
                    </h3>
                    <p className="text-xl font-semibold mt-1">{exp.company}</p>
                    <p
                      className={`mt-1 ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {exp.location}
                    </p>
                  </div>
                  <span
                    className={`mt-2 md:mt-0 px-4 py-2 rounded-full text-sm ${
                      darkMode
                        ? "bg-pink-500/20 text-pink-400"
                        : "bg-pink-100 text-pink-600"
                    }`}
                  >
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className={`flex items-start space-x-3 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <span className="text-pink-500 mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 px-4 ${darkMode ? "bg-gray-800/50" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Featured{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden ${
                  darkMode ? "bg-gray-900" : "bg-gray-50"
                } hover:shadow-2xl transition-all hover:scale-105 group`}
              >
                <div
                  className={`aspect-video bg-gradient-to-br from-pink-500/20 to-purple-600/20 flex items-center justify-center ${
                    project.images && project.images.length > 0
                      ? "cursor-pointer"
                      : "cursor-default"
                  }`}
                  onClick={() => openProjectModal(project)}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-3">
                      <span className="text-5xl">{project.emoji}</span>
                      <span
                        className={`text-sm font-medium ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {project.name}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-pink-500 transition-colors">
                    {project.name}
                  </h3>
                  <p
                    className={`mb-4 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-xs ${
                          darkMode
                            ? "bg-pink-500/20 text-pink-400"
                            : "bg-pink-100 text-pink-600"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Technical{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Technical */}
            <div
              className={`p-8 rounded-2xl ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3 className="text-2xl font-bold mb-6 text-pink-500">
                Mobile & Technical
              </h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.technical.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-4 py-2 rounded-lg ${
                      darkMode ? "bg-gray-900" : "bg-gray-100"
                    } hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white transition-all cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture & Concepts */}
            <div
              className={`p-8 rounded-2xl ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3 className="text-2xl font-bold mb-6 text-purple-500">
                Architecture & Concepts
              </h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.concepts.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-4 py-2 rounded-lg ${
                      darkMode ? "bg-gray-900" : "bg-gray-100"
                    } hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white transition-all cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* DevOps & CI/CD */}
            <div
              className={`p-8 rounded-2xl ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-500">
                DevOps & CI/CD
              </h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.devops.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-4 py-2 rounded-lg ${
                      darkMode ? "bg-gray-900" : "bg-gray-100"
                    } hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white transition-all cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Testing */}
            <div
              className={`p-8 rounded-2xl ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3 className="text-2xl font-bold mb-6 text-green-500">
                Testing
              </h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.testing.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-4 py-2 rounded-lg ${
                      darkMode ? "bg-gray-900" : "bg-gray-100"
                    } hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white transition-all cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI Automation */}
            <div
              className={`p-8 rounded-2xl ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3 className="text-2xl font-bold mb-6 text-yellow-500">
                AI Automation
              </h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.aiAutomation.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-4 py-2 rounded-lg ${
                      darkMode ? "bg-gray-900" : "bg-gray-100"
                    } hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white transition-all cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Networking */}
            <div
              className={`p-8 rounded-2xl ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3 className="text-2xl font-bold mb-6 text-orange-500">
                Tools & Networking
              </h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.tools.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-4 py-2 rounded-lg ${
                      darkMode ? "bg-gray-900" : "bg-gray-100"
                    } hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white transition-all cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-20 px-4 ${darkMode ? "bg-gray-800/50" : "bg-white"}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p
            className={`text-xl mb-12 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.personal.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg hover:shadow-lg hover:scale-105 transition-all"
            >
              <Mail size={24} />
              <span>Email Me</span>
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 px-8 py-4 rounded-lg border-2 ${
                darkMode
                  ? "border-gray-700 hover:border-pink-500"
                  : "border-gray-300 hover:border-pink-500"
              } hover:shadow-lg hover:scale-105 transition-all`}
            >
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 px-8 py-4 rounded-lg border-2 ${
                darkMode
                  ? "border-gray-700 hover:border-pink-500"
                  : "border-gray-300 hover:border-pink-500"
              } hover:shadow-lg hover:scale-105 transition-all`}
            >
              <Github size={24} />
              <span>GitHub</span>
            </a>
            {/* WhatsApp Contact Button */}
            <a
              href={portfolioData.personal.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-8 py-4 rounded-lg border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white hover:shadow-lg hover:scale-105 transition-all"
            >
              <WhatsAppIcon size={24} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 px-4 border-t ${
          darkMode ? "border-gray-800" : "border-gray-200"
        }`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            © 2025 Adel Mostafa Mohamed.
          </p>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={closeProjectModal}
        >
          <div
            className={`relative max-w-5xl w-full max-h-[90vh] ${
              darkMode ? "bg-gray-900" : "bg-white"
            } rounded-2xl overflow-hidden shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeProjectModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-pink-500 hover:bg-pink-600 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Project Info Header */}
            <div className="p-6 border-b border-gray-700">
              <h3 className="text-2xl font-bold text-pink-500 mb-2">
                {selectedProject.name}
              </h3>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {selectedProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full text-xs ${
                      darkMode
                        ? "bg-pink-500/20 text-pink-400"
                        : "bg-pink-100 text-pink-600"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Image Gallery */}
            <div className="relative">
              <div className="flex items-center justify-center bg-gray-800/50 min-h-[400px] max-h-[60vh]">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.name} - Image ${
                    currentImageIndex + 1
                  }`}
                  className="max-w-full max-h-[60vh] object-contain"
                />
              </div>

              {/* Navigation Arrows */}
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-pink-500/80 hover:bg-pink-500 transition-colors"
                  >
                    <ChevronDown size={24} className="rotate-90" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-pink-500/80 hover:bg-pink-500 transition-colors"
                  >
                    <ChevronDown size={24} className="-rotate-90" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              {selectedProject.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/50 text-white text-sm">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
              )}
            </div>

            {/* Thumbnail Navigation */}
            {selectedProject.images.length > 1 && (
              <div className="p-4 flex gap-2 overflow-x-auto">
                {selectedProject.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === currentImageIndex
                        ? "border-pink-500 scale-110"
                        : "border-transparent opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
          animation-fill-mode: both;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
