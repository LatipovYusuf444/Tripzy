import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import hero from "../assets/images/london.jpg";
import g1 from "../assets/images/london.jpg";
import g2 from "../assets/images/london.jpg";
import g3 from "../assets/images/london.jpg";
import g4 from "../assets/images/london.jpg";

export default function CityDetails() {
  const images = useMemo(() => [g1, g2, g3, g4], []);
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p - 1 + images.length) % images.length);
  const next = () => setActive((p) => (p + 1) % images.length);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="overflow-hidden rounded-2xl shadow-sm">
          <img
            src={hero}
            alt="hero"
            className="h-[180px] w-full object-cover sm:h-[240px] md:h-[320px]"
          />
        </div>

        <div className="mt-8 md:mt-10">
          <h1 className="text-2xl font-semibold text-sky-600 md:text-3xl">
            Лондон
          </h1>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500 md:text-[15px] md:leading-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>

          <h2 className="mt-6 text-lg font-semibold text-sky-600 md:mt-8 md:text-xl">
            Lorem ipsum dolor sit amet
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500 md:text-[15px] md:leading-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.25fr_1fr] lg:items-end">
          <div className="overflow-hidden rounded-2xl shadow-md">
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={images[active]}
                alt="active"
                className="h-[220px] w-full object-cover sm:h-[260px] md:h-[320px] lg:h-[280px]"
                initial={{ opacity: 0, y: 10, scale: 1.02 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
            </AnimatePresence>
          </div>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-4">
              {images.slice(1, 4).map((img, idx) => {
                const realIndex = idx + 1;
                const isActive = realIndex === active;

                return (
                  <button
                    key={img}
                    onClick={() => setActive(realIndex)}
                    className={[
                      "group relative overflow-hidden rounded-2xl border transition",
                      isActive
                        ? "border-sky-500 shadow-md"
                        : "border-transparent hover:border-slate-200",
                    ].join(" ")}
                  >
                    <img
                      src={img}
                      alt="thumb"
                      className="h-24 w-full object-cover sm:h-28 md:h-32"
                    />

                    <div
                      className={[
                        "absolute inset-0 transition",
                        isActive
                          ? "bg-sky-600/15"
                          : "bg-slate-900/0 group-hover:bg-slate-900/10",
                      ].join(" ")}
                    />
                  </button>
                );
              })}
            </div>

            <div className="flex justify-end gap-3 pt-1">
              <button
                onClick={prev}
                className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:border-slate-300 hover:shadow"
                aria-label="prev"
              >
                <span className="text-xl leading-none">←</span>
              </button>

              <button
                onClick={next}
                className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:border-slate-300 hover:shadow"
                aria-label="next"
              >
                <span className="text-xl leading-none text-sky-600">→</span>
              </button>
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs text-slate-400">
          * Mobile’da hammasi mos tushadi: yuqorida katta rasm, pastda thumbnail va tugmalar.
        </p>
      </div>
    </section>
  );
}
