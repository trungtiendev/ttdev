"use client"
import LanguageSwitcher from "./language-switcher"
import Link from "next/link"

import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const t = useTranslations("nav");
  return (
    <nav className="border-b border-white/10 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-bold text-lg">
          TrungTienLearn
        </Link>

        <div className="flex items-center gap-6 text-sm hidden md:flex">
          <Link href="/docs">{t("docs")}</Link>
          <Link href="/blog">{t("blog")}</Link>
          <Link href="/tools">{t("tools")}</Link>
          <Link href="/services">{t("services")}</Link>

          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg bg-primary hover:bg-primary/80 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white"
          >
            {t("cooperate")}
          </Link>
          <LanguageSwitcher />
        </div>
        {/* Mobile button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 p-4 border-t bg-background">
          <Link href="/" onClick={() => setOpen(false)}>
            {t("home")}
          </Link>

          <Link href="/docs" onClick={() => setOpen(false)}>
            {t("docs")}
          </Link>

          <Link href="/blog" onClick={() => setOpen(false)}>
            {t("blog")}
          </Link>

          <Link href="/tools" onClick={() => setOpen(false)}>
            {t("tools")}
          </Link>

          <Link href="/services" onClick={() => setOpen(false)}>
            {t("services")}
          </Link>
        <div className="flex justify-center">
          <Link href="/contact"
          className="px-4 py-2 rounded-lg bg-primary hover:bg-primary/80 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-center w-60"
           onClick={() => setOpen(false)}>
            {t("cooperate")}
          </Link>
        </div>
          <LanguageSwitcher />
        </div>
      )}
    </nav>
  )
}
