export interface MaterialItem {
  id: string;
  category: string;
  label: string;
  sublabel: string;
  headline: string;
  description: string;
  imageUrl: string;
  finishes: string[];
  tactileFeel: string;
  recommendedUse: string;
  studioGuarantee: string;
}

export const MATERIALS_DATA: MaterialItem[] = [
  {
    id: "bavdhan",
    category: "WEST PUNE",
    label: "Bavdhan Micro-Market",
    sublabel: "NDA Forest Canopy · Chandani Chowk · Paud Road",
    headline: "Serene hill-view living with rapid arterial connectivity to Kothrud and Hinjawadi.",
    description: "Bavdhan offers larger carpet area configurations at attractive rates (₹7,800 – ₹9,500/sq ft) compared to central Baner, framed by the permanent green canopy of the National Defence Academy and enhanced by the upgraded Chandani Chowk flyover network.",
    imageUrl: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1200&q=80",
    finishes: ["Average Rates: ₹7,800 – ₹9,500/sq ft", "Direct link to Chandani Chowk multi-tier junction", "Scenic hill & forest facing residential developments", "Featured Project: Ganga Legend County (Goel Ganga)"],
    tactileFeel: "Serene residential tranquility with high green canopy quotient",
    recommendedUse: "Spacious 2, 3 & 3.5 BHK sky homes for end-user family living",
    studioGuarantee: "100% MahaRERA Verified Direct Developer Pricing"
  },
  {
    id: "baner",
    category: "WEST PUNE",
    label: "Baner Prime Corridor",
    sublabel: "Baner-Pashan Link · High Street · Platinum Residential",
    headline: "Pune's benchmark address for cosmopolitan dining, corporate offices, and luxury sky homes.",
    description: "Baner commands premium valuations (₹9,500 – ₹13,500/sq ft) driven by corporate leadership demand, high-end retail avenues, and seamless proximity to both Pune University and the Mumbai-Pune Expressway.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    finishes: ["Average Rates: ₹9,500 – ₹13,500/sq ft", "High-street cafes, commercial towers & premium boutiques", "Direct connectivity to Pashan, Aundh & Balewadi", "Featured Project: Kolte Patil 24K Altura"],
    tactileFeel: "Vibrant urban sophistication with strong capital appreciation track record",
    recommendedUse: "Executive 3 & 4 BHK sky mansions and penthouses",
    studioGuarantee: "Zero Brokerage & Comprehensive Title Audits"
  },
  {
    id: "balewadi",
    category: "WEST PUNE",
    label: "Balewadi Micro-Market",
    sublabel: "Balewadi High Street · Sports Complex · Mula Riverfront",
    headline: "Dynamic lifestyle epicenter blending gourmet high streets with riverside calm.",
    description: "Celebrated for Balewadi High Street's gourmet social hub and the iconic Shiv Chhatrapati Sports Complex. Balewadi is the top choice for young tech executives and entrepreneurs seeking high livability and modern gated communities.",
    imageUrl: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80",
    finishes: ["Average Rates: ₹8,800 – ₹11,500/sq ft", "Balewadi High Street dining & lifestyle corridor", "Direct access to Mumbai-Pune Expressway bypass", "Featured Project: Rohan Ekam (Rohan Builders)"],
    tactileFeel: "Energetic social infrastructure paired with peaceful riverside towers",
    recommendedUse: "Contemporary 2, 3 & 4 BHK residences with lifestyle amenities",
    studioGuarantee: "Assisted Developer Tours & Direct Allotment Pricing"
  },
  {
    id: "hinjawadi",
    category: "IT CORRIDOR",
    label: "Hinjawadi IT Park",
    sublabel: "Phase 1, 2 & 3 · Rajiv Gandhi Infotech Park · Metro Line 3",
    headline: "High rental yields and consistent demand powered by 400+ tech multinationals.",
    description: "Home to India's premier IT clusters, Hinjawadi offers strong rental yields (4.5% – 5.5%) and accelerated capital growth fueled by the operational progression of Pune Metro Line 3 connecting directly to Shivajinagar.",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    finishes: ["Average Rates: ₹6,500 – ₹8,800/sq ft", "Upcoming Pune Metro Line 3 station connectivity", "Walk-to-work proximity for 400,000+ IT professionals", "Featured Project: VTP Bellissimo (VTP Realty)"],
    tactileFeel: "Rapidly expanding IT infrastructure and smart integrated townships",
    recommendedUse: "1, 2 & 3 BHK high-yield investment & family apartments",
    studioGuarantee: "High Tenant Demand & Verified Developer Escrow"
  },
  {
    id: "wakad",
    category: "WEST PUNE",
    label: "Wakad Micro-Market",
    sublabel: "Dange Chowk · Dutta Mandir Road · Highway Junction",
    headline: "Strategic transit junction bridging Hinjawadi IT zones with Pimpri-Chinchwad commerce.",
    description: "Wakad remains one of West Pune's most consistently traded residential markets, offering self-sufficient social infrastructure, reputed schools, multi-specialty hospitals, and fast highway connectivity.",
    imageUrl: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
    finishes: ["Average Rates: ₹7,200 – ₹9,200/sq ft", "Direct bridge connectivity to Hinjawadi Phase 1", "Dense retail, educational, and healthcare ecosystem", "Grade-A Multi-Tower Gated Communities"],
    tactileFeel: "Convenient suburban family living with comprehensive civic amenities",
    recommendedUse: "2 & 3 BHK modern family homes in gated residential complexes",
    studioGuarantee: "Direct Builder Allotment & 0% Brokerage"
  },
  {
    id: "kharadi",
    category: "EAST PUNE",
    label: "Kharadi & EON IT Free Zone",
    sublabel: "EON Free Zone · World Trade Centre · Riverfront Corridor",
    headline: "Eastern Pune's powerhouse commercial district with landmark residential towers.",
    description: "Anchored by EON Free Zone and World Trade Center, Kharadi has emerged as the premier residential destination in East Pune, commanding steady commercial expansion and premium residential communities.",
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    finishes: ["Average Rates: ₹8,500 – ₹12,000/sq ft", "Home to EON Free Zone & WTC Pune", "Rapid access to Pune Airport and Viman Nagar", "Grade-A Waterfront & Luxury Developments"],
    tactileFeel: "Institutional commercial presence with expansive riverfront developments",
    recommendedUse: "Luxury 2, 3 & 4 BHK residences for finance & tech professionals",
    studioGuarantee: "100% MahaRERA Verified & Zero Brokerage"
  }
];
