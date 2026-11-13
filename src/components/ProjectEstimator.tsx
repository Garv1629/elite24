import React, { useState } from 'react';
import { ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';
import { getWhatsAppUrl } from '../data/studioData';
import { Button } from './Button';

interface ProjectEstimatorProps {
  onOpenConsultationWithEstimate: (estimateSummary: string) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({
  onOpenConsultationWithEstimate
}) => {
  const [propertyType, setPropertyType] = useState<'2bhk' | '3bhk' | '4bhk' | 'villa'>('3bhk');
  const [carpetArea, setCarpetArea] = useState<number>(1250);
  const [scope, setScope] = useState<{
    township: boolean;
    clubhouse: boolean;
    metro: boolean;
    hillView: boolean;
    directAllotment: boolean;
    escrowAudit: boolean;
  }>({
    township: true,
    clubhouse: true,
    metro: true,
    hillView: true,
    directAllotment: true,
    escrowAudit: true
  });
  const [qualityGrade, setQualityGrade] = useState<'essential' | 'prime' | 'platinum'>('prime');

  // Handle property type changes with realistic Pune sq ft
  const handlePropertyChange = (type: '2bhk' | '3bhk' | '4bhk' | 'villa') => {
    setPropertyType(type);
    if (type === '2bhk') setCarpetArea(820);
    if (type === '3bhk') setCarpetArea(1250);
    if (type === '4bhk') setCarpetArea(1850);
    if (type === 'villa') setCarpetArea(2800);
  };

  const calculateEstimate = () => {
    let baseRate = 8800; // per sq ft base
    if (qualityGrade === 'essential') baseRate = 7200;
    if (qualityGrade === 'prime') baseRate = 8800;
    if (qualityGrade === 'platinum') baseRate = 11500;

    let amenitiesWeight = 0.95;
    if (scope.township) amenitiesWeight += 0.03;
    if (scope.clubhouse) amenitiesWeight += 0.02;
    if (scope.metro) amenitiesWeight += 0.02;
    if (scope.hillView) amenitiesWeight += 0.02;

    const total = carpetArea * baseRate * amenitiesWeight;
    const lowLakhs = (total * 0.96) / 100000;
    const highLakhs = (total * 1.08) / 100000;

    const formatPrice = (lakhs: number) => {
      if (lakhs >= 100) {
        return `₹${(lakhs / 100).toFixed(2)} Cr`;
      }
      return `₹${lakhs.toFixed(1)} L`;
    };

    return {
      low: formatPrice(lowLakhs),
      high: formatPrice(highLakhs)
    };
  };

  const estimate = calculateEstimate();

  const propertyLabels = {
    '2bhk': '2 BHK Apartment',
    '3bhk': '3 BHK Sky Home',
    '4bhk': '4 BHK Sky Mansion',
    'villa': 'Luxury Villa & Penthouse'
  };

  const gradeLabels = {
    'essential': 'Hinjawadi & Wakad (Tech Corridor)',
    'prime': 'Bavdhan & Balewadi (Prime Residential)',
    'platinum': 'Baner & Kothrud (Platinum Belt)'
  };

  const activeScopeItems = [
    scope.township && 'Gated Integrated Township',
    scope.clubhouse && '3-Tier Clubhouse & Sports Arena',
    scope.metro && 'Metro Line 3 Proximity (< 10 mins)',
    scope.hillView && 'Scenic Hill & Green Canopy Facing',
    scope.directAllotment && 'Direct Builder Allotment (0% Brokerage)',
    scope.escrowAudit && '100% MahaRERA Escrow Verified'
  ].filter(Boolean) as string[];

  const estimateSummaryText = `${propertyLabels[propertyType]} (~${carpetArea} sq ft) · Location: ${gradeLabels[qualityGrade]} · Preferences: ${activeScopeItems.slice(0, 3).join(', ')} · Estimated Price: ${estimate.low} – ${estimate.high}`;

  const whatsappMessage = `Hi Elite24, I used your online property planner for a ${propertyLabels[propertyType]} (~${carpetArea} sq ft) in ${gradeLabels[qualityGrade]}. My estimated price range is ${estimate.low} - ${estimate.high}. I would like to schedule an assisted site visit and review verified builder price sheets.`;

  return (
    <section id="estimator" className="py-24 lg:py-32 px-6 lg:px-12 bg-[#F2EED8] border-t border-[#111111]/15 text-[#111111]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#111111]/15">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E09290]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#111111]/70 font-semibold font-sans">
                Chapter 07 · Property Budget Planner
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#111111] font-normal leading-[1.05]">
              Plan your <br />
              <span className="italic text-[#111111]/60">property budget.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#111111]/80 font-light font-sans">
              Get an instant, transparent price forecast for verified residential properties across Bavdhan, Baner, Balewadi & Hinjawadi with 0% brokerage.
            </p>
          </div>

          <div className="text-xs text-[#111111]/60 self-start md:self-end font-mono">
            100% Transparent · Direct Builder Pricing · 0% Brokerage
          </div>
        </div>

        {/* The Estimator Tool Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 bg-[#FAF8EE] border border-[#111111]/10 p-6 sm:p-10 lg:p-12 shadow-sm">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Property Type */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-[0.2em] text-[#E09290] block font-mono font-bold">
                01 · Select Property Typology
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['2bhk', '3bhk', '4bhk', 'villa'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => handlePropertyChange(type)}
                    className={`py-3 px-3 text-xs uppercase tracking-wider transition-all border font-sans rounded-full ${
                      propertyType === type
                        ? 'bg-[#E09290] text-[#111111] font-bold border-[#E09290] shadow-sm'
                        : 'bg-[#F2EED8] text-[#111111]/70 border-[#111111]/10 hover:border-[#111111]/30'
                    }`}
                  >
                    {type === '2bhk' && '2 BHK'}
                    {type === '3bhk' && '3 BHK'}
                    {type === '4bhk' && '4 BHK'}
                    {type === 'villa' && 'Sky Villa'}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Carpet Area Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="uppercase tracking-[0.2em] text-[#E09290] font-mono font-bold">
                  02 · Approximate Carpet Area (RERA)
                </span>
                <span className="font-mono text-sm text-[#111111] font-bold">
                  {carpetArea.toLocaleString()} sq ft
                </span>
              </div>
              <input
                type="range"
                min={600}
                max={3500}
                step={50}
                value={carpetArea}
                onChange={(e) => setCarpetArea(Number(e.target.value))}
                className="w-full accent-[#E09290] bg-[#F2EED8] h-2 cursor-pointer rounded-full"
              />
              <div className="flex justify-between text-[11px] text-[#111111]/60 font-mono">
                <span>600 sq ft</span>
                <span>1,800 sq ft</span>
                <span>3,500+ sq ft</span>
              </div>
            </div>

            {/* Step 3: Scope Checklist */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-[0.2em] text-[#E09290] block font-mono font-bold">
                03 · Preferred Community Inclusions
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { key: 'township', label: 'Gated 20+ Acre Township' },
                  { key: 'clubhouse', label: 'Clubhouse & Sports Arena' },
                  { key: 'metro', label: 'Pune Metro Line 3 Proximity' },
                  { key: 'hillView', label: 'Scenic Hill & Forest Facing' },
                  { key: 'directAllotment', label: 'Direct Builder Allotment (0% Fee)' },
                  { key: 'escrowAudit', label: '100% MahaRERA Escrow Audited' }
                ].map((item) => {
                  const isChecked = scope[item.key as keyof typeof scope];
                  return (
                    <button
                      key={item.key}
                      onClick={() =>
                        setScope((prev) => ({
                          ...prev,
                          [item.key]: !prev[item.key as keyof typeof scope]
                        }))
                      }
                      className={`p-3.5 text-left text-xs flex items-center justify-between border transition-all font-sans rounded-2xl ${
                        isChecked
                          ? 'bg-[#F2EED8] border-[#E09290] text-[#111111] font-medium shadow-sm'
                          : 'bg-[#FAF8EE] border-[#111111]/10 text-[#111111]/60 hover:text-[#111111]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center border text-[10px] ${
                          isChecked
                            ? 'bg-[#E09290] border-[#E09290] text-[#111111] font-bold'
                            : 'border-[#111111]/20 text-transparent'
                        }`}
                      >
                        ✓
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Quality Finish Tier */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-[0.2em] text-[#E09290] block font-mono font-bold">
                04 · Micro-Market & Location Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: 'essential', title: 'Tech Corridor', desc: 'Hinjawadi & Wakad · ₹7,200/sq ft' },
                  { id: 'prime', title: 'Prime Residential', desc: 'Bavdhan & Balewadi · ₹8,800/sq ft' },
                  { id: 'platinum', title: 'Platinum Luxury', desc: 'Baner & Kothrud · ₹11,500/sq ft' }
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setQualityGrade(tier.id as any)}
                    className={`p-4 text-left border transition-all rounded-2xl ${
                      qualityGrade === tier.id
                        ? 'bg-[#E09290] text-[#111111] border-[#E09290] shadow-sm'
                        : 'bg-[#F2EED8] text-[#111111]/70 border-[#111111]/10 hover:border-[#111111]/30'
                    }`}
                  >
                    <p className="text-xs uppercase tracking-wider font-bold font-sans">
                      {tier.title}
                    </p>
                    <p className="text-[10px] mt-1 text-[#111111]/70 font-sans">
                      {tier.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 bg-[#F2EED8] border border-[#111111]/15 p-6 sm:p-8 flex flex-col justify-between space-y-8 shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#111111]/15">
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#E09290] font-mono font-bold">
                  Property Forecast
                </span>
                <span className="text-xs text-[#111111]/60 font-mono">
                  {propertyLabels[propertyType]}
                </span>
              </div>

              {/* Huge Price Readout */}
              <div className="space-y-2">
                <p className="text-xs text-[#111111]/60 uppercase tracking-wider font-mono">
                  Estimated Price Range
                </p>
                <div className="font-serif text-4xl sm:text-5xl text-[#111111]">
                  {estimate.low} – {estimate.high}
                </div>
                <p className="text-xs text-[#111111]/60 font-sans">
                  *Direct builder pricing with 0% brokerage and verified MahaRERA compliance.
                </p>
              </div>

              {/* Selected Scope Summary */}
              <div className="space-y-2 pt-4 border-t border-[#111111]/15">
                <p className="text-xs uppercase tracking-wider text-[#111111]/60 font-mono">
                  Included in this estimate:
                </p>
                <div className="space-y-1.5">
                  {activeScopeItems.slice(0, 4).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#111111]/85 font-sans">
                      <span className="text-[#E09290] font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                  {activeScopeItems.length > 4 && (
                    <p className="text-xs text-[#111111]/60 font-mono">
                      + {activeScopeItems.length - 4} more inclusions
                    </p>
                  )}
                </div>
              </div>

              {/* Studio Guarantees */}
              <div className="p-3.5 bg-[#FAF8EE] border border-[#111111]/10 space-y-1 text-xs shadow-sm">
                <div className="flex items-center gap-2 text-[#111111]">
                  <ShieldCheck className="w-4 h-4 text-[#E09290]" />
                  <span className="font-semibold font-sans">100% MahaRERA Verified & 0% Brokerage</span>
                </div>
                <p className="text-[11px] text-[#111111]/70 pl-6 font-sans">
                  Includes free statutory title search and assisted developer sales lounge tours.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-[#111111]/15">
              <Button
                variant="secondary"
                size="lg"
                fullWidth
                onClick={() => onOpenConsultationWithEstimate(estimateSummaryText)}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request Detailed Cost Sheet
              </Button>

              <Button
                variant="glass"
                size="md"
                fullWidth
                href={getWhatsAppUrl(whatsappMessage)}
                target="_blank"
                className="font-semibold text-center"
                icon={<MessageCircle className="w-4 h-4 text-[#E09290]" />}
                iconPosition="left"
              >
                Send Plan to WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

