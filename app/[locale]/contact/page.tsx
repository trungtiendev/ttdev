"use client";

import { useTranslations } from "next-intl";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const t = useTranslations("contactPage");

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);

    await fetch("/api/contact", {
      method: "POST",
      body: form,
    });

    setLoading(false);
    alert("Sent successfully!");
  }

  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {t("title")}
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          {t("subtitle")}
        </p>

        <a
          href="#form"
          className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          {t("cta")}
        </a>
      </section>


      {/* CONTACT FORM */}
      <section id="form" className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

        <div>
          <h2 className="text-3xl font-bold mb-6">
            {t("form.title")}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              name="name"
              placeholder={t("form.name")}
              className="w-full border rounded-lg px-4 py-3"
              required
            />

            <input
              name="email"
              placeholder={t("form.email")}
              className="w-full border rounded-lg px-4 py-3"
              required
            />

            <input
              name="phone"
              placeholder={t("form.phone")}
              className="w-full border rounded-lg px-4 py-3"
            />

            <select
              name="budget"
              className="w-full border rounded-lg px-4 py-3"
            >
              <option>{t("form.budgetOptions.1")}</option>
              <option>{t("form.budgetOptions.2")}</option>
              <option>{t("form.budgetOptions.3")}</option>
            </select>

            <textarea
              name="message"
              placeholder={t("form.message")}
              className="w-full border rounded-lg px-4 py-3 h-32"
            />

            <button
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition w-full"
            >
              {loading ? "..." : t("form.submit")}
            </button>
          </form>
        </div>


        {/* DIRECT CONTACT */}
        <div className="space-y-6">

          <h2 className="text-3xl font-bold">
            {t("direct.title")}
          </h2>

          <div className="space-y-4">

            <div className="flex items-center gap-4">
              <Mail className="text-blue-600" />
              <span>hello@yourdomain.com</span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-blue-600" />
              <span>+84 123 456 789</span>
            </div>

            <div className="flex items-center gap-4">
              <MessageCircle className="text-blue-600" />
              <span>Zalo / WhatsApp</span>
            </div>

          </div>

        </div>

      </section>


      {/* WHY */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-12">
            {t("why.title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                {t(`why.${item}`)}
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* FAQ */}
      <section className="py-20 px-6 max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          {t("faq.title")}
        </h2>

        <div className="space-y-6">

          {[1, 2, 3].map((item) => (
            <div key={item}>
              <h3 className="font-semibold">
                {t(`faq.${item}.q`)}
              </h3>
              <p className="text-gray-600">
                {t(`faq.${item}.a`)}
              </p>
            </div>
          ))}

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="py-20 px-6 text-center bg-blue-600 text-white">

        <h2 className="text-3xl font-bold mb-4">
          {t("final.title")}
        </h2>

        <p className="mb-8">
          {t("final.subtitle")}
        </p>

        <a
          href="#form"
          className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold"
        >
          {t("final.cta")}
        </a>

      </section>

    </div>
  );
}
