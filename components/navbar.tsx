"use client";

import Link from "next/link";
import LanguageSwitcher from "./language-switcher";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { Menu, X, ChevronDown, Sparkles, Globe } from "lucide-react";

export default function Navbar() {
    const t = useTranslations("nav");

    const pathname = usePathname();

    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [serviceOpen, setServiceOpen] = useState(false);

    // auto close mobile
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    // scroll detect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItem = (href: string, label: string) => (
        <Link
            href={href}
            className={`transition ${pathname === href
                ? "text-primary font-medium"
                : "text-foreground/80 hover:text-primary"
                }`}
        >
            {label}
        </Link>
    );

    return (
        <nav
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-background/70 backdrop-blur-xl border-b border-white/10 shadow-xl"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link
                    href="/"
                    className="font-bold text-lg tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
                >
                    TrungTienLearn
                </Link>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-8 text-sm">
                    {navItem("/docs", t("docs"))}
                    {navItem("/blog", t("blog"))}
                    {navItem("/tools", t("tools"))}

                    {/* Services dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setServiceOpen(true)}
                        onMouseLeave={() => setServiceOpen(false)}
                    >
                        <button className="flex items-center gap-1 text-foreground/80 hover:text-primary">
                            {t("services")}
                            <ChevronDown size={16} />
                        </button>

                        {serviceOpen && (
                            <div className="absolute top-10 left-0 w-64 p-4 rounded-2xl bg-background/90 backdrop-blur border border-white/10 shadow-2xl">
                                <div className="flex flex-col gap-3 text-sm">

                                    <Link
                                        href="/services/automation"
                                        className="flex items-center gap-2 hover:text-primary"
                                    >
                                        <Sparkles size={16} />
                                        AI Automation
                                    </Link>

                                    <Link
                                        href="/services/web"
                                        className="flex items-center gap-2 hover:text-primary"
                                    >
                                        <Globe size={16} />
                                        Web Development
                                    </Link>

                                </div>
                            </div>
                        )}
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
                    {open ? <X size={26} /> : <Menu size={24} strokeWidth={1.5} />}
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-[500px]" : "max-h-0"
                    }`}
            >
                <div className="p-6 flex flex-col gap-4 bg-background/95 backdrop-blur border-t border-white/10">
                    {navItem("/", t("home"))}
                    {navItem("/docs", t("docs"))}
                    {navItem("/blog", t("blog"))}
                    {navItem("/tools", t("tools"))}
                    {navItem("/services", t("services"))}

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
    );
}
