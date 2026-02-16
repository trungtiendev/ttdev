"use client";

import Link from "next/link";
import LanguageSwitcher from "./language-switcher";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Globe,
  Clock,
  Bell
} from "lucide-react";
import ComingSoonModal from "./coming-soon-modal";

// Pages that are coming soon
const comingSoonPages = ["/docs", "/blog", "/services/web"];

export default function Navbar() {
  const t = useTranslations("nav");
  const tModal = useTranslations("navbarModal");
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState({ href: "", label: "" });

  // auto close mobile when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, label: string, e: React.MouseEvent) => {
    if (comingSoonPages.includes(href)) {
      e.preventDefault();
      setSelectedPage({ href, label });
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const navItem = (href: string, label: string, isComingSoon?: boolean) => (
    <Link
      href={isComingSoon ? "#" : href}
      className={`transition flex items-center gap-1.5 ${
        pathname === href
          ? "text-primary font-medium"
          : "text-foreground/80 hover:text-primary"
      }`}
      onClick={(e) => handleNavClick(href, label, e)}
    >
      {label}
      {isComingSoon && (
        <span className="text-[10px] px-1.5 py-0.5 bg-amber-100 text-amber-600 rounded-full font-medium">
          {t("soon")}
        </span>
      )}
    </Link>
  );

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-white/10 shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <Link
            href="/"
            className="
              font-bold text-lg tracking-tight
              bg-gradient-to-r from-indigo-400 to-cyan-400
              bg-clip-text text-transparent
            "
          >
            TrungTienLearn
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            {navItem("/docs", t("docs"), true)}
            {navItem("/blog", t("blog"), true)}
            {navItem("/tools", t("tools"), false)}

            {/* Services dropdown */}
            <div className="relative group">

              <button className="flex items-center gap-1 text-foreground/80 hover:text-primary">
                {t("services")}
                <ChevronDown
                  size={16}
                  className="transition group-hover:rotate-180"
                />
              </button>

              <div
                className="
                  absolute left-0 top-full pt-3
                  opacity-0 invisible translate-y-2
                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                  transition-all duration-200
                "
              >
                <div className="w-64 p-4 rounded-2xl bg-background/90 backdrop-blur-xl border border-white/10 shadow-2xl">

                  <div className="flex flex-col gap-3 text-sm">

                    <Link
                      href="/services/automation"
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 hover:text-primary transition"
                    >
                      <Sparkles size={16} />
                      AI Automation
                    </Link>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedPage({ href: "/services/web", label: "Web Development" });
                        setModalOpen(true);
                      }}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 hover:text-primary transition text-left w-full"
                    >
                      <Globe size={16} />
                      <span className="flex-1">Web Development</span>
                      <span className="text-[10px] px-1.5 py-0.5 bg-amber-100 text-amber-600 rounded-full font-medium">
                        {t("soon")}
                      </span>
                    </button>

                  </div>

                </div>
              </div>

            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="
                flex items-center gap-2
                px-5 py-2 rounded-xl font-medium text-white
                bg-gradient-to-r from-indigo-500 to-cyan-500
                hover:opacity-90 transition
                shadow-lg shadow-indigo-500/20
              "
            >
              <Sparkles size={18} />
              {t("cooperate")}
            </Link>

            <LanguageSwitcher />
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X size={26} />
            ) : (
              <Menu size={24} strokeWidth={1.5} />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="p-6 flex flex-col gap-4 bg-background/95 backdrop-blur border-t border-white/10">
            {navItem("/", t("home"))}
            {navItem("/docs", t("docs"), true)}
            {navItem("/blog", t("blog"), true)}
            {navItem("/tools", t("tools"))}
            {navItem("/services/automation", "AI Automation")}

            <Link
              href="/contact"
              className="
                px-4 py-2 rounded-xl text-center font-medium text-white
                bg-gradient-to-r from-indigo-500 to-cyan-500
                hover:opacity-90 transition
              "
            >
              {t("cooperate")}
            </Link>

            <div className="pt-3 border-t border-white/10">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* Coming Soon Modal */}
      <ComingSoonModal
        isOpen={modalOpen}
        onClose={closeModal}
        toolName={selectedPage.label}
      />
    </>
  );
}
