"use client"
import LanguageSwitcher from "./language-switcher"
import Link from "next/link"

import { useTranslations } from "next-intl";

export default function Navbar() {
    const t = useTranslations("nav");
  return (
    <nav className="border-b border-white/10 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-bold text-lg">
          TrungTienLearn
        </Link>

        <div className="flex items-center gap-6 text-sm">
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
      </div>
    </nav>
  )
}
