"use client";
import { useState } from "react";

export default function HeroSection() {
  const [active, setActive] = useState<"order" | "menu">("order");

  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-r from-orange-900 to-orange-700 px-6 py-12 text-white"
    >
      {/* Левая часть: Текст + видео */}
      <div className="px-20 w-full md:w-1/2 flex flex-col gap-6">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">The Fastest Pizza Delivery</h1>
          <p className="text-base md:text-lg text-gray-400">
            we will deliver juicy pizza for your family in 30 minutes, if a courier is late —{" "}
            <span className="text-white font-semibold">pizza is free</span>
          </p>
        </div>

        <div className="w-full aspect-video">
          <p className="text-base md:text-lg text-gray-200 mb-2">cooking process:</p>
          <iframe
            className="w-full h-full rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/jpfYDzOm6us?si=k7F04oXr_EDLUCQg"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Переключатель To Order / Menu */}
        
        <div className="py-10">
        <div className="relative w-64 h-12 mt-4 bg-white/10 rounded-full overflow-hidden">
          {/* Двигающийся фон-подсветка */}
          <div
            className={`absolute top-0 h-full w-1/2 rounded-full bg-white transition-transform duration-300 ${
              active === "menu" ? "translate-x-full" : "translate-x-0"
            }`}
          ></div>

          {/* Тексты всегда видны */}
          <div className="relative z-10 flex h-full w-full">
            <button
              onClick={() => setActive("order")}
              className={`w-1/2 h-full flex items-center justify-center font-semibold transition-colors duration-300 ${
                active === "order" ? "text-orange-700" : "text-white"
              }`}
            >
              To Order
            </button>
            <button
              onClick={() => setActive("menu")}
              className={`w-1/2 h-full flex items-center justify-center font-semibold transition-colors duration-300 ${
                active === "menu" ? "text-orange-700" : "text-white"
              }`}
            >
              Menu
            </button>
          </div>
          </div>
        </div>
      </div>

      {/* Правая часть: Картинка */}
      <div className="relative w-full md:w-1/2 px-10 mt-10 md:mt-0 flex justify-center">
  {/* Основная картинка */}
  <img
    src="/pizza-hero.jpg"
    alt="Hero Illustration"
    className="max-w-full h-auto rounded-xl shadow-xl"
  />

  {/* Вторая картинка (например, логотип или иконка) */}
  <img
    src="/pizza-mu.png" 
    alt="pizza"
    className="absolute right-0 w-16 h-16 md:w-50 md:h-50 "
  />
</div>

    </section>
  );
}
