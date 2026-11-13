import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
import { Button } from './Button';
import { getOptimizedImageUrl, getImageSrcSet } from '../utils/imageUrl';

interface StudioIntroProps {
  onOpenConsultation: () => void;
}

export const StudioIntro: React.FC<StudioIntroProps> = ({ onOpenConsultation }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768 || window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Expanding aperture / frame transformation (desktop only to prevent mobile clip-path rasterization)
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1.05, 1.0]);
  const imageClip = useTransform(
    scrollYProgress,
    [0, 0.4],
    ['inset(6% 4% 6% 4% round 0px)', 'inset(0% 0% 0% 0% round 0px)']
  );

  return (
    <section
      ref={containerRef}
      className="relative py-28 lg:py-36 px-6 lg:px-12 bg-[#F2EED8] text-[#111111] overflow-hidden"
    >
      {/* Subtle architectural grain */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />

      {/* Top Eyebrow & Studio Tag */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-20 lg:space-y-28">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#111111]/15 pb-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#E09290]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#111111]/70 font-sans">
              CHAPTER 01 // ADVISORY PHILOSOPHY
            </span>
            <span className="text-[#111111]/25">|</span>
            <span className="text-xs uppercase tracking-[0.2em] text-[#E09290] font-mono">
              SPECIFICATION // PUNE PROPERTIES
            </span>
          </div>
          <span className="text-xs font-mono tracking-wider text-[#111111]/60 uppercase">
            Bavdhan · Baner · Balewadi · Hinjawadi
          </span>
        </div>

        {/* Big Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-badge text-[11px] uppercase tracking-[0.25em] text-[#111111]/80 font-mono">
              <span className="text-[#E09290]">✦</span>
              <span>Zero Brokerage × 100% MahaRERA Compliance</span>
            </div>
            <div className="overflow-hidden">
              <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.0] tracking-tight font-normal text-[#111111]">
                “The best property is found <br />
                <span className="italic font-serif text-[#111111]/50">through absolute transparency.”</span>
              </h2>
            </div>
            <p className="text-lg sm:text-2xl text-[#111111]/85 font-light max-w-2xl leading-relaxed font-sans">
              Elite24 Property Consulting Company is a Pune-based real estate advisory firm serving discerning homebuyers across Western and Eastern Pune. We merge statutory MahaRERA due diligence, direct builder pricing, and zero-brokerage advisory into a seamless, trusted acquisition journey.
            </p>
          </div>

          <div className="lg:col-span-4 space-y-6 pt-4 lg:pt-8">
            <div className="p-8 bg-[#FAF8EE] border border-[#111111]/10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-4">
              <div className="inline-block px-3 py-1 bg-[#E09290]/15 text-[#111111] text-[10px] uppercase tracking-[0.2em] font-mono font-medium rounded-full">
                Direct Developer Pricing
              </div>
              <h3 className="font-serif text-2xl text-[#111111] leading-tight">
                From Due Diligence to Key Handover
              </h3>
              <p className="text-xs text-[#111111]/70 leading-relaxed font-sans">
                From title deed scrutiny and 70% escrow compliance audits to assisted developer sales lounge visits and transparent price sheet negotiations, every step is guided by our certified property advisors.
              </p>
              <div className="pt-2">
                <Button
                  variant="secondary"
                  size="md"
                  onClick={onOpenConsultation}
                  data-cursor="DISCUSS"
                  className="font-semibold"
                  icon={<ArrowUpRight className="w-3.5 h-3.5 text-[#E09290]" />}
                >
                  Schedule Advisory Visit
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-5 bg-[#FAF8EE] border border-[#111111]/10">
                <p className="font-serif text-2xl text-[#111111]">Registered</p>
                <p className="text-xs text-[#111111]/65 mt-1 font-sans">U-7 Runwal Platinum, Bavdhan, Pune</p>
              </div>
              <div className="p-5 bg-[#FAF8EE] border border-[#111111]/10">
                <p className="font-serif text-2xl text-[#111111]">Verified</p>
                <p className="text-xs text-[#111111]/65 mt-1 font-sans">MahaRERA Registration A52100003268</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cinematic Expanding Aperture Visual */}
        <div className="relative aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden bg-[#111111] border border-[#111111]/10 shadow-lg">
          <motion.div
            style={{
              scale: isMobile ? 1 : imageScale,
              clipPath: isMobile ? undefined : imageClip,
            }}
            className="w-full h-full relative"
          >
            <img
              src={getOptimizedImageUrl("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6", 1200)}
              srcSet={getImageSrcSet("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6")}
              sizes="(max-width: 768px) 100vw, 1200px"
              loading="lazy"
              decoding="async"
              alt="Elite24 Property Consulting in Pune"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 text-xs text-[#F2EED8] tracking-[0.25em] uppercase font-mono px-4 py-2 bg-[#111111]/70 backdrop-blur-md border border-[#F2EED8]/20 rounded-full">
              Kolte Patil 24K Altura · Signature Baner Sky Mansions
            </div>
          </motion.div>
        </div>

        {/* 4 Studio Value Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-[#111111]/15">
          <div className="space-y-2.5">
            <span className="text-xs font-mono text-[#E09290] font-bold">01</span>
            <h4 className="font-serif text-2xl text-[#111111]">Zero Brokerage</h4>
            <p className="text-xs text-[#111111]/70 leading-relaxed font-sans">
              Guaranteed 0% commission on primary developer inventories with zero hidden markups.
            </p>
          </div>

          <div className="space-y-2.5">
            <span className="text-xs font-mono text-[#E09290] font-bold">02</span>
            <h4 className="font-serif text-2xl text-[#111111]">MahaRERA Audited</h4>
            <p className="text-xs text-[#111111]/70 leading-relaxed font-sans">
              Rigorous verification of Commencement Certificates, title deeds, and 70% escrow accounts.
            </p>
          </div>

          <div className="space-y-2.5">
            <span className="text-xs font-mono text-[#E09290] font-bold">03</span>
            <h4 className="font-serif text-2xl text-[#111111]">Direct Builder Pricing</h4>
            <p className="text-xs text-[#111111]/70 leading-relaxed font-sans">
              Transparent developer cost sheets, launch benefits, and direct builder negotiations.
            </p>
          </div>

          <div className="space-y-2.5">
            <span className="text-xs font-mono text-[#E09290] font-bold">04</span>
            <h4 className="font-serif text-2xl text-[#111111]">Assisted Site Tours</h4>
            <p className="text-xs text-[#111111]/70 leading-relaxed font-sans">
              Chaperoned visits to developer experience centers with unbiased layout and carpet analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

