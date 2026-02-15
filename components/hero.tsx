"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Sparkles, Rocket, Bot } from "lucide-react";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <div className="space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm">
            <Sparkles size={16} />
            {t("badge")}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              {t("title")}
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg text-foreground/70 max-w-xl">
            {t("description")}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            
            <Link
              href="/services"
              className="
              flex items-center gap-2
              px-6 py-3 rounded-xl font-medium text-white
              bg-gradient-to-r from-indigo-500 to-cyan-500
              hover:opacity-90 transition
              shadow-lg shadow-indigo-500/20
              "
            >
              <Rocket size={18} />
              {t("start")}
            </Link>

            <Link
              href="/docs"
              className="
              flex items-center gap-2
              px-6 py-3 rounded-xl font-medium
              border border-white/10
              hover:bg-white/5 transition
              "
            >
              <Bot size={18} />
              {t("learn")}
            </Link>

          </div>

          {/* Social proof */}
          <div className="text-sm text-foreground/50 pt-4">
            {t("proof")}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          
          <div className="
          rounded-2xl border border-white/10
          bg-gradient-to-br from-white/5 to-white/0
          backdrop-blur p-6
          shadow-2xl
          ">
            
            <div className="space-y-4 text-sm">

              <div className="flex justify-between">
                <span>AI Automation</span>
                <span className="text-green-400">Online</span>
              </div>

              <div className="h-2 rounded bg-white/10">
                <div className="h-2 rounded bg-gradient-to-r from-indigo-500 to-cyan-500 w-3/4"></div>
              </div>

              <div className="flex justify-between">
                <span>Web System</span>
                <span className="text-green-400">Running</span>
              </div>

              <div className="h-2 rounded bg-white/10">
                <div className="h-2 rounded bg-gradient-to-r from-indigo-500 to-cyan-500 w-2/3"></div>
              </div>

              <div className="flex justify-between">
                <span>Revenue Growth</span>
                <span className="text-green-400">+120%</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
