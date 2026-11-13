import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { MapPin, Navigation, Clock, Coffee } from 'lucide-react';
import { Button } from './Button';
import { getOptimizedImageUrl, getImageSrcSet } from '../utils/imageUrl';

interface StudioLocationProps {
  onOpenConsultation: () => void;
}

export const StudioLocation: React.FC<StudioLocationProps> = ({ onOpenConsultation }) => {
  return (
    <section id="studio" className="py-28 lg:py-36 px-6 lg:px-12 bg-[#FAF8EE] border-t border-[#111111]/15 text-[#111111]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E09290]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#111111]/70 font-semibold font-sans">
              Chapter 09 · Corporate Office & Pune Presence
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#111111] font-normal leading-[1.05]">
            Visit our office.
          </h2>
          <p className="text-base sm:text-lg text-[#111111]/80 font-light leading-relaxed font-sans">
            Discuss your property requirements with our senior property advisors. Our corporate office at Runwal Platinum in Bavdhan houses our complete archive of verified floor plans, MahaRERA filings, and micro-market intelligence reports.
          </p>
        </div>

        {/* Studio Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Studio Address Card */}
          <div className="lg:col-span-5 bg-[#F2EED8] border border-[#111111]/15 p-8 sm:p-10 flex flex-col justify-between space-y-8 shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#111111]/15">
                <span className="font-serif text-2xl sm:text-3xl text-[#111111]">
                  {STUDIO_INFO.name}
                </span>
                <span className="text-xs uppercase tracking-wider text-[#E09290] font-mono font-bold">
                  Bavdhan, Pune
                </span>
              </div>

              <div className="space-y-4 text-xs text-[#111111]/85 font-sans">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#E09290] mt-0.5 shrink-0" />
                  <div className="space-y-1">
                    <p className="font-semibold text-[#111111] text-sm">
                      {STUDIO_INFO.address.line1}
                    </p>
                    <p>{STUDIO_INFO.address.line2}</p>
                    <p>{STUDIO_INFO.address.city}, {STUDIO_INFO.address.pincode}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-[#111111]/10">
                  <Clock className="w-4 h-4 text-[#E09290] mt-0.5 shrink-0" />
                  <div className="space-y-0.5">
                    <p className="font-semibold text-[#111111]">Visiting Hours</p>
                    <p className="text-[#111111]/70">{STUDIO_INFO.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-[#111111]/10">
                  <Coffee className="w-4 h-4 text-[#E09290] mt-0.5 shrink-0" />
                  <div className="space-y-0.5">
                    <p className="font-semibold text-[#111111]">Property Advisory & Coffee</p>
                    <p className="text-[#111111]/70">Complimentary 1-on-1 session with our Senior Property Consulting Director.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-[#111111]/15">
              <Button
                variant="secondary"
                size="md"
                fullWidth
                href={STUDIO_INFO.address.googleMapsUrl}
                target="_blank"
                className="shadow-md"
                icon={<Navigation className="w-4 h-4" />}
                iconPosition="left"
              >
                Get Driving Directions
              </Button>

              <Button
                variant="glass"
                size="md"
                fullWidth
                onClick={onOpenConsultation}
                className="font-semibold text-center"
              >
                Book Office Consultation
              </Button>
            </div>
          </div>

          {/* Map & Mall Visual */}
          <div className="lg:col-span-7 bg-[#F2EED8] border border-[#111111]/15 p-6 sm:p-8 flex flex-col justify-between space-y-6 relative overflow-hidden shadow-sm">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs uppercase tracking-[0.2em] text-[#E09290] font-mono font-bold">
                  Strategic West Pune Location
                </span>
                <span className="text-xs text-[#111111]/60 font-mono">
                  NDA Road / Chandani Chowk Corridor
                </span>
              </div>

              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#111111] border border-[#111111]/10">
                <img
                  src={getOptimizedImageUrl("https://images.unsplash.com/photo-1541888946425-d0fbb1861593", 800)}
                  srcSet={getImageSrcSet("https://images.unsplash.com/photo-1541888946425-d0fbb1861593")}
                  sizes="(max-width: 768px) 100vw, 700px"
                  loading="lazy"
                  decoding="async"
                  alt="Runwal Platinum Bavdhan Pune"
                  className="w-full h-full object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-[#111111]/40" />

                {/* Pin Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#E09290] text-[#111111] flex items-center justify-center shadow-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="glass-panel px-5 py-2.5 rounded-full shadow-lg">
                    <p className="font-serif text-lg text-[#111111] font-medium">Elite24 Property Consulting</p>
                    <p className="text-[11px] text-[#111111]/70 uppercase tracking-wider font-mono">
                      U-7 Runwal Platinum · Bavdhan, Pune 411021
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Coverage Badges */}
            <div className="space-y-2 pt-2 border-t border-[#111111]/10">
              <p className="text-[11px] uppercase tracking-wider text-[#111111]/60 font-mono">
                Primary Pune Micro-Market Coverage:
              </p>
              <div className="flex flex-wrap gap-2">
                {STUDIO_INFO.serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="text-xs text-[#111111] bg-[#FAF8EE] border border-[#111111]/10 px-3 py-1 rounded-full font-sans"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

