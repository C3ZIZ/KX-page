import React, { useCallback, useMemo, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import imgPlaceholder from "../../assets/product-3-img.svg"; // Replace if needed

// ---------- DATA (unchanged) ----------
const panels = [
  {
    id: 1,
    title: "Corporate",
    subtitle: "Align vision with research-driven innovation.",
    content:
      "We partner with organizations to bridge long term strategic objectives and academic expertise, converting complex challenges into solution-focused research initiatives that deliver measurable innovations and sustainable value creation.",
    image: imgPlaceholder,
  },
  {
    id: 2,
    title: "Advisors",
    subtitle: "Expert insights and guidance.",
    content: "Tap into a network of experienced professionals to scale wisely.",
  },
  {
    id: 3,
    title: "Research Institutes",
    subtitle: "Academic collaboration at its core.",
    content: "Leverage institutional knowledge for cutting-edge breakthroughs.",
  },
  {
    id: 4,
    title: "Venture Capital",
    subtitle: "Fuel for innovation.",
    content: "Connect with capital partners ready to invest in bold ideas.",
  },
];

// ---------- STABLE REFS (avoid new objects each render) ----------
const PERSPECTIVE_STYLE = { perspective: 1000 };
const PRESERVE_3D = { transformStyle: "preserve-3d" };
const BACKFACE_HIDDEN = { backfaceVisibility: "hidden" };
const SPRING = { type: "spring", stiffness: 260, damping: 28 };
const TWEEN = { duration: 0.5, type: "tween" };

// Variants factory so we respect prefers-reduced-motion
const makeContentVariants = (reduced) =>
  reduced
    ? {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 8 },
      }
    : {
        initial: { opacity: 0, y: 20, rotateY: 15 },
        animate: { opacity: 1, y: 0, rotateY: 0 },
        exit: { opacity: 0, y: 20, rotateY: -10 },
      };

// ---------- CHILD (memoized to minimize re-renders) ----------
const PanelItem = React.memo(function PanelItem({
  panel,
  isActive,
  onToggle,
  contentVariants,
}) {
  const contentRegionId = `panel-content-${panel.id}`;

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault(); // prevent page scroll on <Space>
        onToggle(panel.id);
      }
    },
    [onToggle, panel.id]
  );

  return (
    <motion.div
      layout
      key={panel.id}
      onClick={() => onToggle(panel.id)}
      onKeyDown={onKeyDown}
      transition={{ layout: SPRING }}
      className={`relative cursor-pointer transition-all duration-500 ease-in-out rounded-[80px]! shadow-xl overflow-hidden flex flex-col justify-start transform-gpu
        ${isActive ? "flex-1 px-10 py-8" : "basis-[8%] py-8 items-center justify-between"} border-gradiant`}
      style={PERSPECTIVE_STYLE}
      role="tab"
      aria-selected={isActive}
      aria-expanded={isActive}
      aria-controls={contentRegionId}
      tabIndex={0}
    >
      {/* Expanded content */}
      {isActive && (
        <div className="transition-transform duration-500 w-full flex flex-col h-full">
          <div className="flex items-center gap-3">
            <div className="bg-orange-500 text-black text-base font-bold w-9 h-9 rounded-full flex items-center justify-center">
              {String(panel.id).padStart(2, "0")}
            </div>
            <h3 className="text-xl font-semibold whitespace-nowrap">
              {panel.title}
            </h3>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`content-${panel.id}`}
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={TWEEN}
              className="mt-6 transform-gpu"
              style={PRESERVE_3D}
              id={contentRegionId}
              role="region"
              aria-label={`${panel.title} details`}
            >
              <h2 className="text-3xl font-bold mb-4 leading-snug">
                {panel.subtitle}
              </h2>

              <p className="text-base text-gray-300 leading-relaxed max-w-xl">
                {panel.content}
              </p>

              {panel.image && (
                <div className="mt-6 bg-[#0B1226] p-4 rounded-[20px] border border-[#2A2F45]">
                  <img
                    src={panel.image}
                    alt="Visual"
                    className="w-full h-48 object-contain rounded-xl"
                    style={BACKFACE_HIDDEN}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* Collapsed label */}
      {!isActive && (
        <div className="flex flex-col items-center justify-end w-full h-full relative">
          <div className="bg-[#FA7C0B] absolute bottom-0 text-white text-base font-bold w-10 h-10 rounded-full flex items-center justify-center order-2">
            {String(panel.id).padStart(2, "0")}
          </div>
          <div className="absolute bottom-2 h-40 w-40">
            <h2 className="text-3xl text-white -rotate-90 whitespace-nowrap">
              {panel.title}
            </h2>
          </div>
        </div>
      )}
    </motion.div>
  );
});

export default function FlipTabs() {
  const [active, setActive] = useState(1);
  const reduced = useReducedMotion();

  // Stable handler reference
  const toggleActive = useCallback(
    (id) => {
      setActive((prev) => (prev === id ? null : id));
    },
    []
  );

  // Variants computed once per reduced-motion state
  const contentVariants = useMemo(
    () => makeContentVariants(reduced),
    [reduced]
  );

  return (
    <div
      className="flex w-full h-[520px] md:h-[600px] p-6 gap-4 text-white"
      role="tablist"
      aria-orientation="horizontal"
    >
      {panels.map((panel) => (
        <PanelItem
          key={panel.id}
          panel={panel}
          isActive={active === panel.id}
          onToggle={toggleActive}
          contentVariants={contentVariants}
        />
      ))}
    </div>
  );
}
