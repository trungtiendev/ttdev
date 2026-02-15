"use client"

import { useTranslations } from "next-intl";

export default function Features() {
  const t = useTranslations("Features");
  const items = [
    {
      title: t("aiAutomation"),
      desc: t("aiAutomationDesc"),
    },
    {
      title: t("webDevelopment"),
      desc: t("webDevelopmentDesc"),
    },
    {
      title: t("technicalLearning"),
      desc: t("technicalLearningDesc"),
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-card border border-white/10"
          >
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
