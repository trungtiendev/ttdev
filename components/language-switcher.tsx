"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    if (!pathname) return;

    const segments = pathname.split("/");
    segments[1] = newLocale;

    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-2 text-sm">
      <button
        onClick={() => switchLocale("vi")}
        className={`px-2 py-1 rounded ${
          locale === "vi"
            ? "bg-primary text-primary-foreground"
            : "hover:bg-muted"
        }`}
      >
        VI
      </button>

      <button
        onClick={() => switchLocale("en")}
        className={`px-2 py-1 rounded ${
          locale === "en"
            ? "bg-primary text-primary-foreground"
            : "hover:bg-muted"
        }`}
      >
        EN
      </button>
    </div>
  );
}
