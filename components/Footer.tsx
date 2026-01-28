"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, QrCode } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-white text-base font-semibold mb-3">{t("footer.contact")}</h3>
            <div className="space-y-3">
              <div className="text-sm">
                <div className="font-medium text-white mb-1">
                  {t("footer.companyName")}
                </div>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{t("footer.address")}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>400-XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>service@kunpeng.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-base font-semibold mb-3">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-white transition-colors"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/testing"
                  className="text-sm hover:text-white transition-colors"
                >
                  {t("nav.testing")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm hover:text-white transition-colors"
                >
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-sm hover:text-white transition-colors"
                >
                  {t("nav.news")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-base font-semibold mb-3">{t("footer.resources")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/downloads"
                  className="text-sm hover:text-white transition-colors"
                >
                  {t("footer.downloads")}
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm hover:text-white transition-colors"
                >
                  {t("footer.faq")}
                </Link>
              </li>
            </ul>
          </div>

          {/* QR Code & Qualifications */}
          <div>
            <h3 className="text-white text-base font-semibold mb-3">{t("footer.followUs")}</h3>
            <div className="space-y-3">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-3 rounded-lg inline-block">
                <div className="w-24 h-24 bg-slate-800 rounded flex items-center justify-center">
                  <QrCode className="w-12 h-12 text-slate-400" />
                </div>
                <p className="text-xs text-slate-400 text-center mt-1.5">
                  {t("footer.qrCode")}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/30 rounded flex items-center justify-center text-xs font-bold text-cyan-400 hover:bg-blue-500/20 hover:border-cyan-400/50 transition-all duration-300">
                  CNAS
                </div>
                <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/30 rounded flex items-center justify-center text-xs font-bold text-cyan-400 hover:bg-blue-500/20 hover:border-cyan-400/50 transition-all duration-300">
                  CMA
                </div>
                <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/30 rounded flex items-center justify-center text-xs font-bold text-cyan-400 hover:bg-blue-500/20 hover:border-cyan-400/50 transition-all duration-300">
                  CAAC
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-xs text-gray-400">
              {t("footer.copyright")}
            </div>
            <div className="flex items-center space-x-4 text-xs">
              <span className="text-gray-500">{t("footer.links")}</span>
              <Link
                href="https://longxing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {t("footer.longxing")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
