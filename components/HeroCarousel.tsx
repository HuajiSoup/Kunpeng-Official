"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Image from "next/image";
import Link from "next/link";

const carouselImages = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80&auto=format",
  "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=1920&q=80&auto=format",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80&auto=format",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80&auto=format",
];

const getSlides = (t: (key: string) => string) => [
  {
    image: carouselImages[0],
    title: t("home.hero.slide1.title"),
    subtitle: t("home.hero.slide1.subtitle"),
    description: t("home.hero.slide1.description"),
    href: "/testing",
    hrefText: "了解试验能力",
  },
  {
    image: carouselImages[1],
    title: t("home.hero.slide2.title"),
    subtitle: t("home.hero.slide2.subtitle"),
    description: t("home.hero.slide2.description"),
    href: "/services",
    hrefText: "了解服务范围",
  },
  {
    image: carouselImages[2],
    title: t("home.hero.slide3.title"),
    subtitle: t("home.hero.slide3.subtitle"),
    description: t("home.hero.slide3.description"),
    href: "/",
    hrefText: "了解什么呢",
  },
  {
    image: carouselImages[3],
    title: t("home.hero.slide4.title"),
    subtitle: t("home.hero.slide4.subtitle"),
    description: t("home.hero.slide4.description"),
    href: "/about",
    hrefText: "了解我们",
  },
];

export default function HeroCarousel() {
  const { t } = useLanguage();
  const slides = getSlides(t);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  }
  const prevSlide = () => {
    setCurrentIndex(currentIndex ? currentIndex - 1 : slides.length - 1);
  }

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      }
    },
    visible: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      }
    }
  }

  const textVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        opacity: {
          ease: "linear",
          duration: 0.5,
        },
        y: {
          ease: "easeInOut",
          duration: 0.5,
        },
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        opacity: {
          ease: "linear",
          duration: 0.5,
        },
        y: {
          ease: "easeInOut",
          duration: 0.5,
        },
      }
    }
  };

  return (
    <section className="relative w-full h-[75vh] flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <AnimatePresence mode="popLayout">
          {/* background */}
          <motion.div
            key={`${currentIndex}-image`}
            className="absolute inset-0"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Image
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              fill
            />
            <div className="absolute inset-0 bg-black/50"></div>            
          </motion.div>

          {/* text content */}
          <motion.div
            key={`${currentIndex}-text`}
            className="relative z-20 container mx-auto px-6 sm:px-8 lg:px-12 h-full flex items-center"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-semibold text-white mb-3 leading-[1.1] tracking-tight drop-shadow-lg">
                <span className="block">
                  {slides[currentIndex].title}
                </span>
                <span className="block text-white/90 mt-1.5 font-light">
                  {slides[currentIndex].subtitle}
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 mt-6 max-w-3xl mx-auto leading-relaxed font-light">
                {slides[currentIndex].description}
              </p>

              <Link
                href={slides[currentIndex].href}
                className="group inline-flex items-center mt-6 px-5 py-2.5 bg-white text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span>{slides[currentIndex].hrefText}</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 导航箭头 */}
      <button
        onClick={prevSlide}
        className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center text-white hover:text-gray-900 hover:bg-white transition-all duration-300 bg-white/10 backdrop-blur-md shadow-lg border border-white/20 hover:scale-110"
        aria-label={t("home.hero.prev")}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center text-white hover:text-gray-900 hover:bg-white transition-all duration-300 bg-white/10 backdrop-blur-md shadow-lg border border-white/20 hover:scale-110"
        aria-label={t("home.hero.next")}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* 轮播指示点 */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-slate-900/50 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
              ? "w-8 h-1.5 bg-white"
              : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`${t("home.hero.goto")} ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
