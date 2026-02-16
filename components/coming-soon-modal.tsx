"use client";

import { X, Sparkles, Bell, Clock, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  toolName: string;
}

export default function ComingSoonModal({ isOpen, onClose, toolName }: ComingSoonModalProps) {
  const t = useTranslations("toolsPage");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl animate-in fade-in zoom-in duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition"
        >
          <X size={20} className="text-gray-500" />
        </button>

        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">
          {toolName}
        </h3>

        {/* Coming Soon Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-amber-100 text-amber-700 text-sm font-medium rounded-full">
            <Clock size={14} />
            {t("comingSoon")}
          </span>
        </div>

        {/* Description */}
        <p className="text-center text-gray-600 mb-6">
          {t("comingSoonDesc")}
        </p>

        {/* Features coming */}
        <div className="bg-gray-50 rounded-xl p-4 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Bell size={16} className="text-violet-500" />
            <span className="text-sm font-medium text-gray-700">{t("notifyMe")}</span>
          </div>
          <p className="text-sm text-gray-500">
            {t("notifyDesc")}
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Link
            href="/contact"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-cyan-600 text-white py-3 rounded-xl font-medium hover:opacity-90 transition"
            onClick={onClose}
          >
            {t("getNotified")}
            <ArrowRight size={16} />
          </Link>
          
          <button
            onClick={onClose}
            className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition"
          >
            {t("close")}
          </button>
        </div>
      </div>
    </div>
  );
}
