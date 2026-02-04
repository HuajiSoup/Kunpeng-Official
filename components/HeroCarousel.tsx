"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

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
  },
  {
    image: carouselImages[1],
    title: t("home.hero.slide2.title"),
    subtitle: t("home.hero.slide2.subtitle"),
    description: t("home.hero.slide2.description"),
  },
  {
    image: carouselImages[2],
    title: t("home.hero.slide3.title"),
    subtitle: t("home.hero.slide3.subtitle"),
    description: t("home.hero.slide3.description"),
  },
  {
    image: carouselImages[3],
    title: t("home.hero.slide4.title"),
    subtitle: t("home.hero.slide4.subtitle"),
    description: t("home.hero.slide4.description"),
  },
];

export default function HeroCarousel() {
  const { t } = useLanguage();
  const slides = getSlides(t);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // 自动轮播
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setDirection(1);
  //     setCurrentIndex((prev) => (prev + 1) % slides.length);
  //   }, 6000);

  //   return () => clearInterval(interval);
  // }, [slides.length]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { ease: "circOut", duration: 0.5 },
        opacity: { ease: "easeOut", duration: 0.5 }
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
        x: { ease: "circIn", duration: 0.5 },
        opacity: { ease: "easeIn", duration: 0.5 }
      }
    }),
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          {/* background + filter */}
          <motion.div
            className="absolute inset-0"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `url(${slides[currentIndex].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-radial from-slate-950/90 via-slate-950/70 to-slate-950/90" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-transparent to-cyan-950/20" />
          </motion.div>

          {/* 内容 */}
          <div className="relative z-20 container mx-auto px-6 sm:px-8 lg:px-12 h-full flex items-center">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight tracking-tight">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                    {slides[currentIndex].title}
                  </span>
                  <br />
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-light text-blue-300/90 mt-2 block">
                    {slides[currentIndex].subtitle}
                  </span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 mt-6 max-w-3xl mx-auto leading-relaxed font-light">
                  {slides[currentIndex].description}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* 导航箭头 */}
      <button
        onClick={prevSlide}
        className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full flex items-center justify-center text-white hover:text-cyan-400 transition-all duration-300 bg-slate-900/50 backdrop-blur-md border border-blue-500/30 hover:border-cyan-400/50 hover:bg-slate-900/70 hover:scale-110"
        aria-label={t("home.hero.prev")}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full flex items-center justify-center text-white hover:text-cyan-400 transition-all duration-300 bg-slate-900/50 backdrop-blur-md border border-blue-500/30 hover:border-cyan-400/50 hover:bg-slate-900/70 hover:scale-110"
        aria-label={t("home.hero.next")}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* 轮播指示点 */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-slate-900/50 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "w-8 h-1.5 bg-cyan-400"
                : "w-1.5 h-1.5 bg-blue-500/50 hover:bg-blue-400/80"
            }`}
            aria-label={`${t("home.hero.goto")} ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
