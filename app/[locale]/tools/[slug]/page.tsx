import { tools } from "@/lib/tools";
import { notFound } from "next/navigation";
import PromptGenerator from "@/components/tools/prompt-generator";
import Link from "next/link";
import { ArrowLeft, Check, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ToolPage({
  params
}: {
  params: { slug: string };
}) {
  const t = useTranslations("toolsPage");

  const tool = tools.find(t => t.slug === params.slug);

  if (!tool) return notFound();
  
  const Icon = tool.icon;
  
  // Get tool name key
  const toolKey = tool.slug.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition"
          >
            <ArrowLeft size={18} />
            {t("backToTools")}
          </Link>

          <div className="flex items-start gap-4">
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${tool.gradient} flex items-center justify-center`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            
            <div>
              <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
                {t(`categories.${tool.category.toLowerCase().replace(" ", "")}`)}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {t(`tools.${toolKey}`)}
              </h1>
              <p className="text-gray-600 max-w-xl">
                {t(`tools.${toolKey}LongDesc`)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Tool Interface */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              {tool.slug === "prompt-generator" && (
                <PromptGenerator />
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Features Card */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                {t("features")}
              </h3>
              <ul className="space-y-3">
                {tool.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-green-600" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tips Card */}
            <div className="bg-gradient-to-br from-violet-50 to-cyan-50 rounded-2xl border border-violet-100 p-6">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={18} className="text-violet-600" />
                <h3 className="font-semibold text-gray-900">
                  {t("proTips")}
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• {t("tip1")}</li>
                <li>• {t("tip2")}</li>
                <li>• {t("tip3")}</li>
              </ul>
            </div>

            {/* Need Help */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                {t("needHelp")}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {t("needHelpDesc")}
              </p>
              <Link
                href="/contact"
                className="block text-center bg-gray-900 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition"
              >
                {t("contactMe")}
              </Link>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
