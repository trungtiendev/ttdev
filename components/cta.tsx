"use client"

import Link from "next/link"

import { useTranslations } from 'next-intl'

export default function CTA() {
  const t = useTranslations("CTA");
  return (
    <section className="py-24 text-center">
      <h2 className="text-3xl font-bold mb-6">
        {t("title")}
      </h2>

      <Link
        href="/contact"
        className="px-6 py-3 rounded-xl bg-primary hover:bg-primary/80"
      >
        {t("cta")}
      </Link>
    </section>
  )
}
