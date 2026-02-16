import { useTranslations } from "next-intl";
import { Bot, CheckCircle, Rocket } from "lucide-react";
import Link from "next/link";

export default function AutomationPage() {
  const t = useTranslations("automationPage");

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 space-y-20">

      {/* HERO */}
      <section className="text-center space-y-6">

        <div className="flex justify-center">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20">
            <Bot size={40} />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold">
          {t("title")}
        </h1>

        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          {t("subtitle")}
        </p>

        <Link
          href="/contact"
          className="
          inline-flex items-center gap-2
          px-6 py-3 rounded-xl font-medium text-white
          bg-gradient-to-r from-indigo-500 to-cyan-500
          hover:opacity-90 transition
          shadow-lg shadow-indigo-500/20
          "
        >
          <Rocket size={18} />
          {t("cta")}
        </Link>

      </section>


      {/* BENEFITS */}
      <section className="grid md:grid-cols-3 gap-6">

        {[1,2,3].map((i) => (
          <div
            key={i}
            className="p-6 rounded-2xl border border-white/10 bg-white/5"
          >
            <CheckCircle className="mb-3 text-green-400" />
            <h3 className="font-semibold mb-2">
              {t(`benefits.${i}.title`)}
            </h3>
            <p className="text-sm text-foreground/70">
              {t(`benefits.${i}.desc`)}
            </p>
          </div>
        ))}

      </section>


      {/* PRICING */}
      <section className="space-y-6 text-center">

        <h2 className="text-3xl font-bold">
          {t("pricing.title")}
        </h2>

        <p className="text-foreground/70">
          {t("pricing.subtitle")}
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          {["basic", "pro", "enterprise"].map((plan) => (
            <div
              key={plan}
              className="p-6 rounded-2xl border border-white/10 bg-white/5"
            >
              <h3 className="font-semibold text-lg mb-2">
                {t(`pricing.${plan}.title`)}
              </h3>

              <div className="text-2xl font-bold mb-4">
                {t(`pricing.${plan}.price`)}
              </div>

              <p className="text-sm text-foreground/70 mb-4">
                {t(`pricing.${plan}.desc`)}
              </p>

              <Link
                href="/contact"
                className="text-primary font-medium"
              >
                {t("cta")}
              </Link>
            </div>
          ))}

        </div>

      </section>


      {/* PROCESS */}
      <section className="space-y-6">

        <h2 className="text-3xl font-bold text-center">
          {t("process.title")}
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {[1,2,3,4].map((step) => (
            <div
              key={step}
              className="p-5 rounded-xl border border-white/10 bg-white/5 text-center"
            >
              <div className="font-bold mb-2">
                {t(`process.${step}.title`)}
              </div>
              <p className="text-sm text-foreground/70">
                {t(`process.${step}.desc`)}
              </p>
            </div>
          ))}

        </div>

      </section>


      {/* CTA */}
      <section className="text-center space-y-6">

        <h2 className="text-3xl font-bold">
          {t("final.title")}
        </h2>

        <p className="text-foreground/70">
          {t("final.subtitle")}
        </p>

        <Link
          href="/contact"
          className="
          inline-flex items-center gap-2
          px-6 py-3 rounded-xl font-medium text-white
          bg-gradient-to-r from-indigo-500 to-cyan-500
          hover:opacity-90 transition
          "
        >
          {t("cta")}
        </Link>

      </section>

    </div>
  );
}
