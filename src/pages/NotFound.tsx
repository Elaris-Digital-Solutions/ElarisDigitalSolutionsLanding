import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SeoHead from "@/components/SeoHead";
import { useI18n } from "@/lib/i18n";

const NotFound = () => {
  const location = useLocation();
  const { t } = useI18n();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <SeoHead page="not-found" />
      <div className="text-center">
        <h1 className="mb-4 text-5xl font-bold text-gray-900">{t("notFound.title")}</h1>
        <p className="mb-6 text-xl text-gray-600">{t("notFound.description")}</p>
        <Link
          to="/"
          className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-500"
        >
          {t("notFound.cta")}
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
