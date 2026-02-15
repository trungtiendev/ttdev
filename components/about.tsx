"use client"
import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations("About");
  return (
    <section className="py-20 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">{t("title")}</h2>

        <p className="text-gray-400">
          {t("description")}
        </p>
      </div>
    </section>
  )
}
