import React, { useState } from 'react';
import { STUDIO_INFO, getWhatsAppUrl } from '../data/studioData';
import { ArrowUp, X, ShieldCheck, FileText, Scale } from 'lucide-react';
import { Button } from './Button';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | 'rera' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] border-t border-[#F2EED8]/15 pt-20 pb-28 md:pb-16 px-6 lg:px-12 text-xs text-[#F2EED8]/65">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Call to Action Banner */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 border-b border-[#F2EED8]/10">
          <div className="space-y-4 max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#E09290] font-mono font-bold block">
              Begin Your Property Search
            </span>
            <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F2EED8] font-normal leading-tight">
              Ready to find a home <br />
              <span className="italic font-serif text-[#E09290]">worth calling your own?</span>
            </h3>
            <p className="text-sm text-[#F2EED8]/75 font-light font-sans">
              Visit our registered office at U-7 Runwal Platinum in Bavdhan, Pune, or schedule an assisted site visit across Baner, Bavdhan, Balewadi & Hinjawadi.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Button
              variant="primary"
              size="md"
              onClick={onOpenConsultation}
              className="shadow-md text-center"
            >
              Book Advisory Consultation
            </Button>
            <Button
              variant="glass"
              size="md"
              href={getWhatsAppUrl()}
              target="_blank"
              className="text-center"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Studio Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-1">
              <span className="font-serif text-2xl tracking-[0.2em] uppercase text-[#F2EED8] block">
                {STUDIO_INFO.name}
              </span>
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#F2EED8]/60 font-mono">
                {STUDIO_INFO.eyebrow}
              </p>
            </div>
            <p className="text-xs text-[#F2EED8]/75 font-light max-w-sm leading-relaxed font-sans">
              Zero-brokerage property consulting, direct builder pricing, and MahaRERA-verified luxury residences across Pune's prime residential corridors.
            </p>
            <div className="pt-2 text-[11px] text-[#E09290] font-mono font-bold">
              MahaRERA: A52100003268 · 100% Verified Properties
            </div>
          </div>

          {/* Micro-Markets */}
          <div className="space-y-3 font-sans">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#F2EED8] font-bold font-mono">
              Prime Micro-Markets
            </p>
            <ul className="space-y-2 text-xs text-[#F2EED8]/70">
              <li><a href="#materials" className="hover:text-[#E09290] transition-colors">Bavdhan Corridor</a></li>
              <li><a href="#materials" className="hover:text-[#E09290] transition-colors">Baner Platinum Belt</a></li>
              <li><a href="#materials" className="hover:text-[#E09290] transition-colors">Balewadi High Street</a></li>
              <li><a href="#materials" className="hover:text-[#E09290] transition-colors">Hinjawadi IT Park</a></li>
              <li><a href="#materials" className="hover:text-[#E09290] transition-colors">Wakad Growth Zone</a></li>
              <li><a href="#materials" className="hover:text-[#E09290] transition-colors">Kharadi & East Pune</a></li>
            </ul>
          </div>

          {/* Advisory Services */}
          <div className="space-y-3 font-sans">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#F2EED8] font-bold font-mono">
              Advisory Services
            </p>
            <ul className="space-y-2 text-xs text-[#F2EED8]/70">
              <li><a href="#services" className="hover:text-[#E09290] transition-colors">Zero-Brokerage Advisory</a></li>
              <li><a href="#services" className="hover:text-[#E09290] transition-colors">MahaRERA Due Diligence</a></li>
              <li><a href="#services" className="hover:text-[#E09290] transition-colors">Assisted Site Visits</a></li>
              <li><a href="#estimator" className="hover:text-[#E09290] transition-colors">Budget & Price Estimator</a></li>
              <li><a href="#services" className="hover:text-[#E09290] transition-colors">Home Loan Assistance</a></li>
              <li><a href="tel:+918856947020" className="hover:text-[#E09290] transition-colors">Direct Phone Desk</a></li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="space-y-3 font-sans">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#F2EED8] font-bold font-mono">
              Registered Office
            </p>
            <p className="text-xs text-[#F2EED8]/85 leading-relaxed">
              U-7 Runwal Platinum, <br />
              NDA Road, Bavdhan, <br />
              Pune, Maharashtra 411021
            </p>
            <p className="text-[11px] text-[#F2EED8]/60 pt-1 font-mono">
              Mon – Sun: 10:00 AM – 7:30 PM
            </p>
            <p className="text-xs text-[#F2EED8] font-semibold">
              {STUDIO_INFO.displayPhone}
            </p>
            <p className="text-[11px] text-[#E09290] pt-1 font-mono">
              <a href="https://elite24.co/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                https://elite24.co/
              </a>
            </p>
          </div>
        </div>

        {/* MahaRERA Compliance and Statutory Legal Disclaimer */}
        <div className="pt-10 border-t border-[#F2EED8]/10 space-y-4 font-sans text-[11px] leading-relaxed text-[#F2EED8]/60">
          <p>
            <strong className="text-[#F2EED8]/90 font-semibold">MahaRERA Compliance & Statutory Disclaimer:</strong> Elite24 Property Consulting Company is an authorized real estate consulting and channel partner firm registered under the Maharashtra Real Estate Regulatory Authority (MahaRERA Registration No: <span className="text-[#E09290] font-mono font-bold">A52100003268</span>). Registered Office: U-7 Runwal Platinum, Bavdhan, Pune, Maharashtra 411021. Elite24 provides 100% MahaRERA-verified zero-brokerage advisory on primary developer inventories with direct builder pricing. All project details, floor plans, configurations, carpet areas, prices, and possession timelines are sourced directly from registered builders and are subject to statutory verification under MahaRERA guidelines. Prices mentioned are indicative starting rates and exclude statutory stamp duty, registration charges, and government taxes.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 text-[11px] text-[#F2EED8]/75">
            <button
              onClick={() => setActiveLegalModal('privacy')}
              className="hover:text-[#E09290] transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-[#F2EED8]/25">·</span>
            <button
              onClick={() => setActiveLegalModal('terms')}
              className="hover:text-[#E09290] transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Terms of Service
            </button>
            <span className="text-[#F2EED8]/25">·</span>
            <button
              onClick={() => setActiveLegalModal('rera')}
              className="hover:text-[#E09290] transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              MahaRERA Registration (A52100003268)
            </button>
            <span className="text-[#F2EED8]/25">·</span>
            <a
              href="https://elite24.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E09290] transition-colors underline-offset-4 hover:underline"
            >
              Official Website: elite24.co ↗
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#F2EED8]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans">
          <p>© {new Date().getFullYear()} Elite24 Property Consulting Company. All rights reserved. MahaRERA Registration No: A52100003268. Registered Office: U-7 Runwal Platinum, Bavdhan, Pune 411021.</p>

          <button
            onClick={scrollToTop}
            className="glass-button rounded-full px-4 py-2 flex items-center gap-1.5 text-[#F2EED8] transition-colors uppercase tracking-wider font-mono font-bold text-[10px]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Legal Dialog Modal */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#111111]/85 backdrop-blur-xl animate-in fade-in duration-200 text-[#111111]">
          <div className="relative w-full max-w-2xl bg-[#FAF8EE] border border-[#111111]/15 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[85vh]">
            <button
              onClick={() => setActiveLegalModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full glass-button-light text-[#111111]/70 hover:text-[#111111] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {activeLegalModal === 'privacy' && (
              <div className="space-y-5 text-left font-sans">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#E09290] font-bold">
                  <FileText className="w-4 h-4" />
                  <span>Privacy Policy</span>
                </div>
                <h3 className="font-serif text-3xl text-[#111111]">
                  Data Privacy & Protection
                </h3>
                <div className="space-y-3 text-xs text-[#111111]/80 leading-relaxed">
                  <p>
                    <strong>Elite24 Property Consulting Company</strong> operates in accordance with applicable data privacy regulations across India. We collect only necessary contact information (name, phone number, email address, and property preferences) submitted voluntarily through our consultation forms, phone inquiries, and WhatsApp channels.
                  </p>
                  <p>
                    <strong>Purpose of Data Collection:</strong> Your data is used exclusively to facilitate personalized real estate advisory, schedule assisted developer sales lounge visits, share RERA-verified cost sheets, and provide home loan assistance.
                  </p>
                  <p>
                    <strong>No Spam or Third-Party Reselling:</strong> We do not sell, rent, or distribute your private contact details to unverified third-party brokers or external marketing agencies.
                  </p>
                  <p>
                    <strong>Contact:</strong> For privacy requests or data deletion, reach out to <a href="mailto:connect@elite24.co" className="text-[#E09290] underline">connect@elite24.co</a> or visit our registered office at U-7 Runwal Platinum, Bavdhan, Pune, 411021.
                  </p>
                </div>
              </div>
            )}

            {activeLegalModal === 'terms' && (
              <div className="space-y-5 text-left font-sans">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#E09290] font-bold">
                  <Scale className="w-4 h-4" />
                  <span>Terms of Service</span>
                </div>
                <h3 className="font-serif text-3xl text-[#111111]">
                  Advisory & Channel Partnership Terms
                </h3>
                <div className="space-y-3 text-xs text-[#111111]/80 leading-relaxed">
                  <p>
                    <strong>Zero-Brokerage Guarantee:</strong> Elite24 Property Consulting Company provides 100% zero-brokerage buyer advisory services for primary market developer inventories in Pune. Homebuyers incur zero consulting, advisory, or agency charges.
                  </p>
                  <p>
                    <strong>Channel Partner Role:</strong> Elite24 operates as an authorized real estate channel partner and consultant for institutional Grade-A builders under MahaRERA registration number <strong>A52100003268</strong>.
                  </p>
                  <p>
                    <strong>Developer Sanctions & Pricing:</strong> All project layouts, unit availability, carpet areas, and prices are subject to developer allotment terms and statutory approvals. Elite24 coordinates direct developer pricing without intermediary markups.
                  </p>
                  <p>
                    <strong>Jurisdiction:</strong> All real estate advisory transactions and disputes are governed under the jurisdiction of courts in Pune, Maharashtra.
                  </p>
                </div>
              </div>
            )}

            {activeLegalModal === 'rera' && (
              <div className="space-y-5 text-left font-sans">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#E09290] font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>MahaRERA Compliance</span>
                </div>
                <h3 className="font-serif text-3xl text-[#111111]">
                  MahaRERA Registration Details
                </h3>
                <div className="space-y-3 text-xs text-[#111111]/80 leading-relaxed">
                  <div className="p-4 bg-[#F2EED8] rounded-xl border border-[#111111]/10 space-y-1">
                    <p className="font-mono text-xs text-[#111111]"><strong>Entity Name:</strong> Elite24 Property Consulting Company</p>
                    <p className="font-mono text-xs text-[#E09290] font-bold"><strong>Agent Registration No:</strong> A52100003268</p>
                    <p className="font-mono text-xs text-[#111111]"><strong>Registered Office:</strong> U-7 Runwal Platinum, Bavdhan, Pune, 411021</p>
                    <p className="font-mono text-xs text-[#111111]"><strong>Official Portal:</strong> <a href="https://elite24.co/" target="_blank" rel="noopener noreferrer" className="underline">https://elite24.co/</a></p>
                  </div>
                  <p>
                    Under the Real Estate (Regulation and Development) Act, 2016, Elite24 audits every project before recommending it to buyers, confirming:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Valid MahaRERA registration and project sanction numbers</li>
                    <li>70% statutory escrow account adherence for construction funds</li>
                    <li>Commencement Certificates (CC) and municipal approvals</li>
                    <li>Clear title reports and statutory possession milestones</li>
                  </ul>
                  <p className="text-[11px] text-[#111111]/60 pt-2 font-mono">
                    Verify certificates on the official MahaRERA portal: <a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#E09290] underline">maharera.mahaonline.gov.in</a>
                  </p>
                </div>
              </div>
            )}

            <div className="pt-6 border-t border-[#111111]/10 flex justify-end">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setActiveLegalModal(null)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
