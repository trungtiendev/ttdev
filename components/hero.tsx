"use client"

import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  return (
    <section className="relative py-32 text-center">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl" />

      <h1 className="text-5xl font-bold text-white">
        {t("title")}
      </h1>

      <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
        {t("subtitle")}
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500">
          {t("cta")}
        </button>

        <button className="px-6 py-3 rounded-xl border border-gray-600 hover:border-gray-400 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white">
          {t("cooperate")}
        </button>
      </div>
    </section>
  )
}
