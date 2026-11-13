export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  summary: string;
  deliverables: string[];
  specs: { label: string; value: string }[];
  imageUrl: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "zero-brokerage-advisory",
    number: "01",
    title: "Zero-Brokerage Primary Advisory",
    tagline: "Direct builder transactions with 0% brokerage fees.",
    summary: "We represent the homebuyer with zero consultation or advisory fees on primary developer inventories. Our compensation is paid directly by institutional developers as authorized channel partners without adding a single rupee to your purchase price.",
    deliverables: [
      "Unbiased access to Grade-A developer inventories across West Pune",
      "Transparent builder cost sheets with no hidden broker markups",
      "Direct negotiations for exclusive payment plans and subvention schemes",
      "Zero brokerage guarantee on all under-construction and new launch bookings"
    ],
    specs: [
      { label: "Advisory Fee", value: "0% Commission (Guaranteed ₹0 Brokerage)" },
      { label: "Coverage", value: "Grade-A Pune Institutional Builders" },
      { label: "Pricing Model", value: "Direct Developer Allotment Rates" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85"
  },
  {
    id: "maharera-due-diligence",
    number: "02",
    title: "MahaRERA Due Diligence & Audits",
    tagline: "100% verified statutory compliance before you commit capital.",
    summary: "Rigorous statutory scrutiny for absolute peace of mind. As a MahaRERA-registered consulting firm (Reg: A52100003268), we cross-reference project registrations, 70% statutory escrow account adherence, title clearance certificates, and sanctioned municipal layouts.",
    deliverables: [
      "MahaRERA project registration and sanctioned floor plan verification",
      "70% developer escrow account compliance and utilization checks",
      "Commencement Certificate (CC) and title search audit",
      "Clear milestone breakdown and realistic possession schedule evaluation"
    ],
    specs: [
      { label: "Regulatory Status", value: "MahaRERA Registered (A52100003268)" },
      { label: "Audit Scope", value: "Title, CC, 70% Escrow & Layout Sanctions" },
      { label: "Buyer Assurance", value: "100% Verified Statutory Compliance" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85"
  },
  {
    id: "assisted-site-visits",
    number: "03",
    title: "Assisted Site Visits & Layout Audits",
    tagline: "Private developer lounge tours with an unbiased expert.",
    summary: "Never step into a high-pressure builder sales lounge alone. An Elite24 senior property advisor coordinates your private tour, examines carpet area efficiency, inspects sample flat structural quality, and evaluates natural daylight and ventilation orientations.",
    deliverables: [
      "VIP scheduled appointments at developer experience centers",
      "Carpet area efficiency calculation (RERA carpet vs. usable area)",
      "Natural sunlight, ventilation, and floorplate layout inspection",
      "Objective comparison against adjacent competing micro-market projects"
    ],
    specs: [
      { label: "Chaperoned Visits", value: "Dedicated Senior Property Advisor" },
      { label: "Transit Logistics", value: "Coordinated Site Logistics across Pune" },
      { label: "Evaluation", value: "Unbiased Technical & Layout Scrutiny" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85"
  },
  {
    id: "micro-market-research",
    number: "04",
    title: "Micro-Market Capital Intelligence",
    tagline: "Data-driven insights across Baner, Bavdhan, Balewadi & Hinjawadi.",
    summary: "Property purchases should be guided by infrastructure fundamentals, not speculation. We provide detailed micro-market reports evaluating Pune Metro Line 3 corridors, Chandani Chowk flyover impacts, Ring Road arterial developments, and historical capital appreciation rates.",
    deliverables: [
      "Micro-market price trend analysis across West & East Pune",
      "Infrastructure impact assessments (Metro Line 3, Ring Road, arterial flyovers)",
      "Rental yield projections for IT professional tenant corridors",
      "5-year capital appreciation forecasts based on municipal master plans"
    ],
    specs: [
      { label: "Micro-Markets", value: "Bavdhan, Baner, Balewadi, Hinjawadi, Wakad" },
      { label: "Data Modeling", value: "Infrastructure & Price Trend Analysis" },
      { label: "Orientation", value: "Owner-Occupier & High-Yield Investors" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85"
  },
  {
    id: "loan-documentation-support",
    number: "05",
    title: "Home Loan & Registration Support",
    tagline: "Seamless guidance from sanction to registered sale deed.",
    summary: "End-to-end transactional peace of mind. We connect you with top banking partners (SBI, HDFC, ICICI, Axis) for fast-track approvals and preferential interest rates, while facilitating complete Builder-Buyer Agreement review and registration at Pune sub-registrar offices.",
    deliverables: [
      "Direct liaison with leading national and private housing finance institutions",
      "Assistance with loan sanction, eligibility checks, and disbursement stages",
      "Legal drafting review of Builder-Buyer Agreements (BBA)",
      "Full on-ground assistance during registration at Pune Sub-Registrar"
    ],
    specs: [
      { label: "Banking Network", value: "SBI, HDFC Bank, ICICI Bank, Axis Bank" },
      { label: "Legal Scrutiny", value: "Builder-Buyer Agreement Clause Review" },
      { label: "Closing Service", value: "End-to-End Pune Registration Support" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=85"
  }
];
