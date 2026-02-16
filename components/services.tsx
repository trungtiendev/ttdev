"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Bot, Globe, Brain, ArrowRight } from "lucide-react";

export default function Services() {
  const t = useTranslations("services");

  const items = [
    {
      icon: <Bot size={28} />,
      title: t("automation.title"),
      desc: t("automation.desc"),
      href: "/services/automation"
    },
    {
      icon: <Globe size={28} />,
      title: t("web.title"),
      desc: t("web.desc"),
      href: "/services/web"
    },
    {
      icon: <Brain size={28} />,
      title: t("consulting.title"),
      desc: t("consulting.desc"),
      href: "/services/consulting"
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("title")}
          </h2>
          <p className="text-foreground/70">
            {t("subtitle")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {items.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="
              group relative p-6 rounded-2xl
              border border-white/10
              bg-gradient-to-br from-white/5 to-white/0
              backdrop-blur
              hover:border-indigo-500/40
              transition
              "
            >

              {/* Icon */}
              <div className="
              w-12 h-12 flex items-center justify-center
              rounded-xl mb-4
              bg-gradient-to-br from-indigo-500/20 to-cyan-500/20
              ">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-sm text-foreground/70 mb-4">
                {item.desc}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                {t("learnMore")}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
              </div>

            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}
