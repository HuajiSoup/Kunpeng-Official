import { useLanguage } from "@/lib/LanguageContext";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-[0.5px] border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-3 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="text-base font-semibold text-gray-900 pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-gray-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-5 pb-3 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed pt-3">{answer}</p>
        </div>
      )}
    </div>
  );
}

const getFaqItems = (t: (key: string) => string) => [
  {
    question: t("contact.sections.faq.items.q1.question"),
    answer: t("contact.sections.faq.items.q1.answer"),
  },
  {
    question: t("contact.sections.faq.items.q2.question"),
    answer: t("contact.sections.faq.items.q2.answer"),
  },
  {
    question: t("contact.sections.faq.items.q3.question"),
    answer: t("contact.sections.faq.items.q3.answer"),
  },
];

export function FAQ() {
  const { t } = useLanguage();
  const faqItems = getFaqItems(t);
  
  return (<>
    <section id="faq" className="scroll-mt-20">
      <h2 className="text-2xl font-bold text-gray-900 mb-5">{t("contact.sections.faq.title")}</h2>
      <div className="space-y-3">
        {faqItems.map((item) => (
          <FAQItem
            key={item.question}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </section>
  </>);
}