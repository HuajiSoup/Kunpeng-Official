"use client";

import { useLanguage } from "@/lib/LanguageContext";

import { PageSectionTitle } from "../ui/PageSectionTitle";

const getCourses = (t: (key: string) => string) => [
  { 
    name: t("services.training.courses.c1.name"),
    standard: "DO-178C",
    category: t("services.training.courses.c1.category"),
    instructor: t("services.training.courses.c1.instructor"),
  },
  { 
    name: t("services.training.courses.c2.name"),
    standard: "DO-254",
    category: t("services.training.courses.c2.category"),
    instructor: t("services.training.courses.c2.instructor"),
  },
  { 
    name: t("services.training.courses.c3.name"),
    standard: "ARP4754A",
    category: t("services.training.courses.c3.category"),
    instructor: t("services.training.courses.c3.instructor"),
  },
  { 
    name: t("services.training.courses.c4.name"),
    standard: "DO-160G",
    category: t("services.training.courses.c4.category"),
    instructor: t("services.training.courses.c4.instructor"),
  },
  { 
    name: t("services.training.courses.c5.name"),
    standard: "RTCA/DO-178B",
    category: t("services.training.courses.c5.category"),
    instructor: t("services.training.courses.c5.instructor"),
  },
  { 
    name: t("services.training.courses.c6.name"),
    standard: "FAA AC 20-152",
    category: t("services.training.courses.c6.category"),
    instructor: t("services.training.courses.c6.instructor"),
  },
];

export default function TrainingSection() {
  const { t } = useLanguage();
  const courses = getCourses(t);

  return (
    <section id="training" className="py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12 border-t border-blue-500/10" data-anchor="training">
      <PageSectionTitle 
        title={t("services.training.title")}
        subtitle={t("services.training.subtitle")}
        description={t("services.training.description")}
      />

      {/* Courses */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl border-[0.5px] border-blue-500/20 shadow-sm overflow-hidden">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row md:items-center gap-4 p-6 ${
              index < courses.length - 1 ? "border-b border-blue-500/10" : ""
            } hover:bg-blue-50/40 transition-colors`}
          >
            <div className="flex-1">
              <h3 className="text-base font-bold text-gray-900 mb-1">
                {course.name}
              </h3>
              
              <p className="text-xs text-gray-500">
                {course.instructor}
              </p>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full">
                {course.standard}
              </span>
              <span className="text-xs text-gray-500">{course.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
