// components/CompetitionDetails.js
import { useEffect, useMemo, useRef, useState } from "react";

export default function CompetitionDetails({ competition }) {
  const [active, setActive] = useState(0);
  const headerRef = useRef(null);
  const containerRef = useRef(null);
  const startXRef = useRef(null);
  const [slideH, setSlideH] = useState(0);

  // Compute slide height so each slide fills exactly the viewport below the header
  const recalc = () => {
    const headerH = headerRef.current?.offsetHeight ?? 0;
    const vh = window.innerHeight;
    // Add a small buffer to account for borders / shadows so the slide doesn't overflow
    setSlideH(Math.max(240, vh - headerH - 24));
  };

  useEffect(() => {
    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, competition.sections.length]);

  const next = () => setActive((i) => (i + 1) % competition.sections.length);
  const prev = () =>
    setActive((i) => (i - 1 + competition.sections.length) % competition.sections.length);

  const setIndex = (i) => setActive(i);

  // Touch/Pointer swipe
  const onPointerDown = (e) => {
    startXRef.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
  };
  const onPointerUp = (e) => {
    const endX = e.clientX ?? e.changedTouches?.[0]?.clientX ?? 0;
    if (startXRef.current == null) return;
    const dx = endX - startXRef.current;
    if (Math.abs(dx) > 50) {
      if (dx < 0) next();
      else prev();
    }
    startXRef.current = null;
  };

  const slideStyle = useMemo(
    () => ({ height: `${slideH}px` }),
    [slideH]
  );

  return (
    <div className="lg:col-span-1">
      {/* /* Custom Fonts Import */}
      <div className="space-y-4">
        {/* Compact Header */}
        <div
          ref={headerRef}
          className="relative bg-gradient-to-r from-orange-600 to-amber-600 rounded-lg p-3 sm:p-4 sm:ml-8 sm:mr-4 text-white shadow-md"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="text-lg sm:text-2xl flex-shrink-0">{competition.icon}</div>
            <div className="flex-1 min-w-0">
              <h1 className="text-sm sm:text-xl md:text-3xl font-bold text-white truncate">
                {competition.title}
              </h1>
              <span className="inline-flex items-center px-1.5 py-0.5 sm:px-2 rounded text-xs font-medium bg-white/20 text-white/90 mt-0.5 sm:mt-1">
                Competition #{competition.id}
              </span>
            </div>
            <div className="text-right flex-shrink-0">
              <span className="font-inter text-xs text-white/70 block hidden sm:block">Deadline</span>
              <span className="font-inter font-semibold text-xs sm:text-sm">{competition.deadline}</span>
            </div>
          </div>
        </div>

        {/* FULL-VIEW CAROUSEL (slides fill the viewport below the header) */}
        <div
          ref={containerRef}
          className="relative select-none"
          onMouseDown={onPointerDown}
          onMouseUp={onPointerUp}
          onTouchStart={onPointerDown}
          onTouchEnd={onPointerUp}
        >
          {/* Slides track */}
          <div
            className="relative w-full overflow-hidden rounded-xl"
            style={slideStyle}
          >
            <div
              className="flex h-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {competition.sections.map((section, index) => (
                <div
                  key={section.id}
                  className="min-w-full h-[75vh] sm:p-4 sm:pl-8"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${competition.sections.length}`}
                >
                  <article
                    className="group relative bg-white/95 backdrop-blur-sm rounded-xl border border-orange-100/50 shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                  >
                    {/* Subtle hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-amber-50/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10 p-6 flex-1 overflow-y-auto">
                      {/* Section header */}
                      <div className="flex items-start mb-4">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-amber-100 border border-orange-200 rounded-lg flex items-center justify-center shadow-sm">
                            <span className="section-number font-playfair font-bold text-sm text-black">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h2 className="font-playfair text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                            {section.title}
                          </h2>
                          <div className="flex items-center gap-2">
                            <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
                            <div className="h-0.5 w-6 bg-gradient-to-r from-amber-300 to-orange-300 rounded-full opacity-60" />
                            <div className="h-0.5 w-3 bg-orange-200 rounded-full" />
                          </div>
                        </div>
                      </div>

                      {/* Section content */}
                      <div className="compact-prose">
                        {section.content.split("\n").map((paragraph, idx) => {
                          // bullets
                          if (paragraph.trim().startsWith("•")) {
                            return (
                              <div key={idx} className="flex items-start my-2">
                                <div className="flex-shrink-0 mt-1.5 mr-3">
                                  <div className="w-1.5 h-1.5 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full" />
                                </div>
                                <p className="font-inter text-gray-700 leading-relaxed text-sm">
                                  {paragraph.trim().substring(1).trim()}
                                </p>
                              </div>
                            );
                          }

                          // bold spans using **...**
                          if (paragraph.includes("**")) {
                            const parts = paragraph.split("**");
                            return (
                              <p key={idx} className="font-inter text-gray-700 leading-relaxed mb-3 text-sm">
                                {parts.map((part, partIdx) =>
                                  partIdx % 2 === 1 ? (
                                    <span key={partIdx} className="font-playfair font-semibold text-base text-orange-800">
                                      {part}
                                    </span>
                                  ) : (
                                    <span key={partIdx}>{part}</span>
                                  )
                                )}
                              </p>
                            );
                          }

                          if (paragraph.trim()) {
                            return (
                              <p key={idx} className="font-inter text-gray-700 leading-relaxed mb-3 text-sm">
                                {paragraph}
                              </p>
                            );
                          }
                          return null;
                        })}
                      </div>
                    </div>

                    {/* Slide footer: progress */}
                    <div className="px-6 py-3 border-t border-orange-100">
                      <div className="flex items-center justify-between">
                        <span className="font-inter text-xs font-medium text-orange-600">
                          Section {index + 1} of {competition.sections.length}
                        </span>
                        <div className="flex items-center space-x-1">
                          {competition.sections.map((_, idx) => (
                            <div
                              key={idx}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                idx <= index
                                  ? "bg-gradient-to-br from-orange-500 to-amber-500"
                                  : "bg-orange-200"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Nav buttons */}
          <div className="pointer-events-none">
            <button
              type="button"
              aria-label="Previous"
              onClick={prev}
              className="pointer-events-auto absolute -left-4 sm:left-1 cursor-pointer top-2/5 -translate-y-1/2 w-10 h-10 rounded-xl bg-white/80 text-black hover:bg-white shadow-md border border-black flex items-center justify-center backdrop-blur-sm transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={next}
              className="pointer-events-auto absolute -right-4 top-2/5 cursor-pointer -translate-y-1/2 w-10 h-10 rounded-xl bg-white/80 text-black hover:bg-white shadow-md border border-black flex items-center justify-center backdrop-blur-sm transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          {/* <div className="mt-3 flex items-center justify-center gap-2">
            {competition.sections.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  i === active ? "bg-orange-500" : "bg-orange-200 hover:bg-orange-300"
                }`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div> */}
        </div>

        {/* Completion indicator (kept) */}
        {/* <div className="relative bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 text-center border border-emerald-200/50 shadow-md hidden">
          <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-emerald-200/20 to-transparent rounded-full" />
          <div className="relative z-10">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-playfair text-lg font-bold text-gray-900 mb-2">
              You&apos;ve reached the end!
            </h3>
            <p className="font-inter text-gray-600 text-sm leading-relaxed mb-4">
              Ready to showcase your creativity? Use the submission panel on the right.
            </p>
            <div className="flex items-center justify-center gap-1 text-emerald-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="font-inter font-medium text-xs">Ready to submit</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
