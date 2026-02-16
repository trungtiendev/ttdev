import { Sparkles, Search, FileText, Code, MessageSquare, Image } from "lucide-react";

export type Tool = {
  slug: string;
  name: string;
  description: string;
  longDescription?: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  features: string[];
  gradient: string;
  comingSoon?: boolean;
};

export const tools: Tool[] = [
  {
    slug: "prompt-generator",
    name: "Prompt Generator",
    description: "Create powerful AI prompts instantly",
    longDescription: "Generate optimized prompts for ChatGPT, Claude, and other AI models. Get better results with professionally crafted prompts.",
    icon: Sparkles,
    category: "AI Writing",
    features: ["Multiple prompt styles", "Copy to clipboard", "Instant generation"],
    gradient: "from-violet-500 to-purple-500"
  },
  {
    slug: "seo-generator",
    name: "SEO Generator",
    description: "Generate SEO ideas with AI",
    longDescription: "Create SEO-optimized content, meta descriptions, and keyword suggestions powered by AI.",
    icon: Search,
    category: "Marketing",
    features: ["Meta descriptions", "Keyword suggestions", "Content optimization"],
    gradient: "from-blue-500 to-cyan-500",
    comingSoon: true
  },
  {
    slug: "content-writer",
    name: "Content Writer",
    description: "AI-powered content creation",
    longDescription: "Generate blog posts, articles, and marketing copy with AI assistance.",
    icon: FileText,
    category: "AI Writing",
    features: ["Blog posts", "Marketing copy", "Social media content"],
    gradient: "from-emerald-500 to-teal-500",
    comingSoon: true
  },
  {
    slug: "code-assistant",
    name: "Code Assistant",
    description: "Generate and explain code snippets",
    longDescription: "Get help with coding tasks, debugging, and code explanations.",
    icon: Code,
    category: "Development",
    features: ["Code generation", "Bug fixing", "Code explanation"],
    gradient: "from-orange-500 to-amber-500",
    comingSoon: true
  },
  {
    slug: "chatbot-builder",
    name: "Chatbot Builder",
    description: "Build custom AI chatbots",
    longDescription: "Create and customize AI chatbots for your website or application.",
    icon: MessageSquare,
    category: "AI Automation",
    features: ["Custom training", "Easy integration", "Multi-language"],
    gradient: "from-pink-500 to-rose-500",
    comingSoon: true
  },
  {
    slug: "image-prompt",
    name: "Image Prompt",
    description: "Generate prompts for AI image tools",
    longDescription: "Create detailed prompts for Midjourney, DALL-E, and Stable Diffusion.",
    icon: Image,
    category: "AI Art",
    features: ["Style presets", "Detail enhancement", "Multiple formats"],
    gradient: "from-indigo-500 to-violet-500",
    comingSoon: true
  }
];

export const toolCategories = [
  { name: "All", slug: "all" },
  { name: "AI Writing", slug: "ai-writing" },
  { name: "Marketing", slug: "marketing" },
  { name: "Development", slug: "development" },
  { name: "AI Automation", slug: "ai-automation" },
  { name: "AI Art", slug: "ai-art" },
];
