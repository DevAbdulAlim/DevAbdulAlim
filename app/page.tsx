"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Home, User, Code, Briefcase, Mail } from "lucide-react";
import AboutSection from "@/components/sections/About";
import ContactSection from "@/components/sections/Contact";
import HeroSection from "@/components/sections/Header";
import PortfolioSection from "@/components/sections/Portfolio";
import SkillsSection from "@/components/sections/Skills";

const sections = [
  { id: "hero", component: HeroSection, icon: Home, label: "Home" },
  { id: "about", component: AboutSection, icon: User, label: "About" },
  { id: "skills", component: SkillsSection, icon: Code, label: "Skills" },
  {
    id: "portfolio",
    component: PortfolioSection,
    icon: Briefcase,
    label: "Portfolio",
  },
  { id: "contact", component: ContactSection, icon: Mail, label: "Contact" },
];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartY = useRef<number | null>(null);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Intersection Observer for updating active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            setActiveSection(index);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.75 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll handler with smoother transitions
  const scrollToSection = useCallback((index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Reset inactivity timer
  const resetInactivityTimer = useCallback(() => {
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }
    setIsNavVisible(true);
    inactivityTimerRef.current = setTimeout(() => {
      setIsNavVisible(false);
    }, 3000);
  }, []);

  // Handle scroll, touch, and mouse events
  useEffect(() => {
    let isScrolling = false;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;
      isScrolling = true;

      requestAnimationFrame(() => {
        const currentSection = sectionRefs.current[activeSection];

        if (e.deltaY > 0 && activeSection < sections.length - 1) {
          if (
            currentSection &&
            currentSection.scrollHeight - currentSection.scrollTop ===
              currentSection.clientHeight
          ) {
            scrollToSection(activeSection + 1);
          }
        } else if (e.deltaY < 0 && activeSection > 0) {
          if (currentSection && currentSection.scrollTop === 0) {
            scrollToSection(activeSection - 1);
          }
        }

        isScrolling = false;
      });

      resetInactivityTimer();
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
      resetInactivityTimer();
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY.current) return;

      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY.current - touchEndY;

      if (isScrolling) return;
      isScrolling = true;

      requestAnimationFrame(() => {
        const currentSection = sectionRefs.current[activeSection];

        if (deltaY > 0 && activeSection < sections.length - 1) {
          if (
            currentSection &&
            currentSection.scrollHeight - currentSection.scrollTop ===
              currentSection.clientHeight
          ) {
            scrollToSection(activeSection + 1);
          }
        } else if (deltaY < 0 && activeSection > 0) {
          if (currentSection && currentSection.scrollTop === 0) {
            scrollToSection(activeSection - 1);
          }
        }

        isScrolling = false;
      });

      resetInactivityTimer(); 
    };

    const handleMouseMove = () => {
      resetInactivityTimer();
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [activeSection, scrollToSection, resetInactivityTimer]);

  // Hide navigation by default on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsNavVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen overflow-hidden">
      {/* Sidebar Navigation */}
      <nav
        className={`fixed top-0 left-0 z-50 h-screen flex flex-col justify-center transition-all duration-300 ${
          isNavVisible
            ? "w-20 md:w-48 pl-4 pr-4"
            : "w-0 opacity-0"
        }`}
      >
        {sections.map(({ id, icon: Icon, label }, index) => (
          <button
            key={id}
            onClick={() => scrollToSection(index)}
            className={`flex items-center justify-between py-3 px-4 mb-2 rounded-r-full transition-colors ${
              index === activeSection
                ? "bg-blue-500 text-white"
                : "text-gray-600 bg-gray-100 hover:bg-blue-100"
            }`}
            aria-label={`Scroll to ${label}`}
          >
            <span className="ml-2 text-sm hidden md:inline font-medium">{label}</span>
            <Icon className="w-6 h-6" />
          </button>
        ))}
      </nav>

      {/* Sections */}
      {sections.map(({ id, component: Component }, index) => (
        <div
          key={id}
          ref={(el) => (sectionRefs.current[index] = el)}
          className="h-screen w-full overflow-auto"
        >
          <Component />
        </div>
      ))}
    </div>
  );
}
