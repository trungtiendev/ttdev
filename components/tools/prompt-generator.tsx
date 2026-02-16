"use client";

import { useState } from "react";
import { Sparkles, Copy, Check, RefreshCw, Lightbulb } from "lucide-react";
import { useTranslations } from "next-intl";

const examplePromptsEn = [
  "Write a professional email to follow up with a client after a meeting",
  "Create a marketing headline for a new SaaS product",
  "Generate a product description for an eco-friendly water bottle",
  "Write a blog post outline about AI in healthcare",
];

const examplePromptsVi = [
  "Viết email chuyên nghiệp để theo dõi khách hàng sau cuộc họp",
  "Tạo tiêu đề marketing cho sản phẩm SaaS mới",
  "Tạo mô tả sản phẩm cho bình nước thân thiện môi trường",
  "Viết dàn ý bài blog về AI trong y tế",
];

export default function PromptGenerator() {
  const t = useTranslations("toolsPage.promptGenerator");
  const tTools = useTranslations("toolsPage");
  
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  // Detect locale from translations
  const isVietnamese = t("generateButton") === "Tạo Prompt";
  const examplePrompts = isVietnamese ? examplePromptsVi : examplePromptsEn;

  async function generate() {
    if (!input.trim()) return;
    
    setLoading(true);
    setResult("");
    
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        body: JSON.stringify({ input })
      });

      const data = await res.json();
      setResult(data.text);
    } catch (error) {
      setResult("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function copyToClipboard() {
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function useExample(example: string) {
    setInput(example);
  }

  return (
    <div className="space-y-6">
      
      {/* Input Section */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t("label")}
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full border border-gray-200 rounded-xl p-4 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition resize-none"
          placeholder={t("placeholder")}
          rows={4}
        />
      </div>

      {/* Examples */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Lightbulb size={16} className="text-amber-500" />
          <span className="text-sm font-medium text-gray-700">{t("tryExample")}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {examplePrompts.map((example, i) => (
            <button
              key={i}
              onClick={() => useExample(example)}
              className="text-xs px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full hover:bg-violet-100 hover:text-violet-700 transition"
            >
              {example.substring(0, 40)}...
            </button>
          ))}
        </div>
      </div>

      {/* Generate Button */}
      <button
        onClick={generate}
        disabled={loading || !input.trim()}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-cyan-600 text-white px-6 py-3.5 rounded-xl font-medium hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <RefreshCw size={18} className="animate-spin" />
            {t("generating")}
          </>
        ) : (
          <>
            <Sparkles size={18} />
            {t("generateButton")}
          </>
        )}
      </button>

      {/* Result */}
      {result && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              {t("resultLabel")}
            </label>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-violet-600 transition"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-green-500" />
                  <span className="text-green-600">{t("copied")}</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  {t("copy")}
                </>
              )}
            </button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-cyan-500/5 rounded-xl" />
            <div className="relative bg-white border border-gray-200 rounded-xl p-4">
              <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                {result}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
