"use client";

import Link from "next/link";
import { tools, toolCategories, Tool } from "@/lib/tools";
import { useState } from "react";
import { Sparkles, ArrowRight, Check } from "lucide-react";
import { useTranslations } from "next-intl";
import ComingSoonModal from "@/components/coming-soon-modal";

export default function ToolsPage() {
  const t = useTranslations("toolsPage");
  const [activeCategory, setActiveCategory] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  const filteredTools = activeCategory === "all" 
    ? tools 
    : tools.filter(tool => tool.category.toLowerCase().replace(" ", "-") === activeCategory);

  const handleToolClick = (tool: Tool, e: React.MouseEvent) => {
    if (tool.comingSoon) {
      e.preventDefault();
      setSelectedTool(tool);
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedTool(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-cyan-500/10" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-6">
            <Sparkles size={16} />
            {t("badge")}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            {t("title")}
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            {t("subtitle")}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Check size={16} className="text-green-500" />
              {t("freeTry")}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Check size={16} className="text-green-500" />
              {t("noSignup")}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Check size={16} className="text-green-500" />
              {t("instantResults")}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-6xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-2">
          {toolCategories.map((category) => (
            <button
              key={category.slug}
              onClick={() => setActiveCategory(category.slug)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.slug
                  ? "bg-gray-900 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {t(`categories.${category.name.toLowerCase().replace(" ", "")}`)}
            </button>
          ))}
        </div>
      </section>

      {/* Tools Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <ToolCard 
              key={tool.slug} 
              tool={tool} 
              onClick={handleToolClick}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-violet-600 to-cyan-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("needCustomTool")}
          </h2>
          <p className="text-lg opacity-90 mb-8">
            {t("customToolDesc")}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            {t("contactMe")}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Coming Soon Modal */}
      <ComingSoonModal
        isOpen={modalOpen}
        onClose={closeModal}
        toolName={selectedTool ? t(`tools.${selectedTool.slug.replace(/-([a-z])/g, (g) => g[1].toUpperCase())}`) : ""}
      />

    </div>
  );
}

function ToolCard({ tool, onClick }: { tool: Tool; onClick: (tool: Tool, e: React.MouseEvent) => void }) {
  const t = useTranslations("toolsPage");
  const Icon = tool.icon;
  
  // Get tool name key
  const toolKey = tool.slug.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  
  return (
    <Link
      href={tool.comingSoon ? "#" : `/tools/${tool.slug}`}
      className={`group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 ${
        tool.comingSoon ? "cursor-pointer" : "hover:-translate-y-1"
      }`}
      onClick={(e) => onClick(tool, e)}
    >
      {/* Coming Soon Badge */}
      {tool.comingSoon && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
          {t("comingSoon")}
        </div>
      )}

      {/* Icon */}
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${tool.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <Icon className="w-7 h-7 text-white" />
      </div>

      {/* Category */}
      <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
        {t(`categories.${tool.category.toLowerCase().replace(" ", "")}`)}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
        {t(`tools.${toolKey}`)}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">
        {t(`tools.${toolKey}Desc`)}
      </p>

      {/* Features */}
      <div className="flex flex-wrap gap-2">
        {tool.features.slice(0, 2).map((feature, i) => (
          <span
            key={i}
            className="text-xs px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full"
          >
            {feature}
          </span>
        ))}
      </div>

      {/* Arrow */}
      {!tool.comingSoon && (
        <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-violet-100 transition-colors">
          <ArrowRight size={18} className="text-gray-400 group-hover:text-violet-600 transition-colors" />
        </div>
      )}
    </Link>
  );
}
