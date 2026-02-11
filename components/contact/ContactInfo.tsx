import { useLanguage } from "@/lib/LanguageContext";
import { MapPin, Phone, Mail } from "lucide-react";
import { ItemBox } from "../ui/ItemBox";

const getContacts = (t: (key: string) => string) => [
  {
    title: t("contact.sections.contact.address.title"),
    icon: MapPin,
    lines: [
      t("contact.sections.contact.address.line1"),
      t("contact.sections.contact.address.line2"),
    ],
  },
  {
    title: t("contact.sections.contact.phone.title"),
    icon: Phone,
    lines: [
      t("contact.sections.contact.phone.line1"),
      t("contact.sections.contact.phone.line2"),
    ],
  },
  {
    title: t("contact.sections.contact.email.title"),
    icon: Mail,
    lines: [
      t("contact.sections.contact.email.line1"),
      t("contact.sections.contact.email.line2"),
    ],
  },
];

export function ContactInfo() {
  const { t } = useLanguage();
  const contacts = getContacts(t);

  return (<>
    <section id="contact" className="py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-5">{t("contact.sections.contact.title")}</h2>

      {/* Contact Infos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
        {contacts.map((item, index) => {
          const Icon = item.icon;
          return (
            <ItemBox key={index}>
              <div className="w-10 h-10 bg-gray-900/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
                <Icon className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.lines.map((line, index) => (
                  <span key={`${item.title}-${index}`}>
                    {line}
                    {index < item.lines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </ItemBox>
          );
        })}
      </div>

      {/* Map Image */}
      <div className="rounded-xl overflow-hidden border-[0.5px] border-blue-500/20 shadow-sm">
        <img
          src="https://placehold.co/1200x480/e2e8f0/475569?text=Map+Location+Image"
          alt={t("contact.sections.contact.mapAlt")}
          className="w-full h-auto"
        />
      </div>
    </section>
  </>);
}