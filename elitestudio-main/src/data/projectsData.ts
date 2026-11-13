export interface ProjectRoom {
  name: string;
  description: string;
  imageUrl: string;
  details: string[];
}

export interface Project {
  id: string;
  title: string;
  subTitle: string;
  typology: string;
  location: string;
  area: string;
  year: string;
  heroImage: string;
  aspect: 'portrait' | 'landscape' | 'wide';
  brief: string;
  direction: string;
  materials: string[];
  keyFeatures: string[];
  rooms: ProjectRoom[];
  testimonial?: {
    quote: string;
    client: string;
    society: string;
  };
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "ganga-legend-county",
    title: "Ganga Legend County",
    subTitle: "Goel Ganga Developments · Bavdhan",
    typology: "2, 3 & 3.5 BHK Sky Homes",
    location: "Bavdhan, Pune",
    area: "820 – 1,450 sq ft",
    year: "Possession Dec 2026",
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
    aspect: "wide",
    brief: "An expansive 30-acre integrated residential landmark nestled against the scenic NDA green belt in Bavdhan. Elite24 provides 0% brokerage advisory, verified title documentation, and direct developer pricing starting at ₹85.50 Lakhs.",
    direction: "MahaRERA: P52100024567. Direct builder inventory with 70% statutory escrow compliance, dedicated sports arena, and seamless connectivity to Chandani Chowk.",
    materials: ["Goel Ganga Developments", "MahaRERA P52100024567", "Starting ₹85.50 L", "Possession Dec 2026"],
    keyFeatures: [
      "30-acre integrated residential development adjoining NDA green canopy",
      "Direct builder pricing starting from ₹85.50 Lakhs with 0% brokerage",
      "3-tier grand clubhouse, Olympic-size sports amenities & sky lounge",
      "Strategic arterial link to Chandani Chowk, Kothrud & Hinjawadi IT Park"
    ],
    rooms: [
      {
        name: "2 BHK Grand Suite",
        description: "Smartly configured 820 sq ft layout with zero passage wastage, double-height deck, and direct builder pricing starting at ₹85.50 L.",
        imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        details: ["820 sq ft RERA Carpet", "Starting from ₹85.50 Lakhs", "Hill & Forest Facing Balcony"]
      },
      {
        name: "3 BHK Luxury Sky Home",
        description: "Spacious 1,150 sq ft residence featuring expansive living and dining layout with panoramic green views of the NDA hills.",
        imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
        details: ["1,150 sq ft RERA Carpet", "Starting from ₹1.18 Cr", "Master bedroom with walk-in wardrobe"]
      },
      {
        name: "3.5 BHK Imperial Sky Residence",
        description: "Premium 1,450 sq ft layout with dedicated home office/study room and private foyer for corporate executives.",
        imageUrl: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
        details: ["1,450 sq ft RERA Carpet", "Starting from ₹1.45 Cr", "Dedicated work-from-home study"]
      },
      {
        name: "Clubhouse & Sports Arena",
        description: "Over 40,000 sq ft of indoor and outdoor sports facilities, swimming pool, and private screening theater.",
        imageUrl: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
        details: ["Olympic-length swimming pool", "Tennis & Squash Courts", "Grand banquet lawn"]
      }
    ],
    testimonial: {
      quote: "Elite24 made buying our home in Bavdhan completely transparent. Zero brokerage, honest comparison of floor plans, and direct builder price negotiation.",
      client: "Sachin & Ketaki Deshmukh",
      society: "Ganga Legend County, Bavdhan"
    }
  },
  {
    id: "kolte-patil-24k-altura",
    title: "Kolte Patil 24K Altura",
    subTitle: "Kolte Patil Developers · Baner Prime",
    typology: "3 & 4 BHK Sky Mansions",
    location: "Baner, Pune",
    area: "1,420 – 2,150 sq ft",
    year: "Possession Mar 2027",
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
    aspect: "portrait",
    brief: "An ultra-luxury residential address in high-demand Baner crafted by Kolte Patil's signature 24K division. Tailored for corporate leaders and tech entrepreneurs seeking bespoke high-rise living with private foyer access.",
    direction: "MahaRERA: P52100049978. Direct developer allotment with certified title clearances, 100% statutory escrow compliance, and transparent builder payment schedules starting from ₹1.65 Cr.",
    materials: ["Kolte Patil Developers", "MahaRERA P52100049978", "Starting ₹1.65 Cr", "Possession Mar 2027"],
    keyFeatures: [
      "Panoramic Baner hill views with private high-speed elevator access",
      "24K signature concierge amenities, infinity pool & rooftop deck",
      "Guaranteed direct developer pricing with zero brokerage charge",
      "Walking distance to high-street retail, dining & Balewadi High Street"
    ],
    rooms: [
      {
        name: "3 BHK Signature Sky Mansion",
        description: "1,420 sq ft of refined architectural luxury with 11-foot clear ceiling height and imported marble flooring.",
        imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
        details: ["1,420 sq ft RERA Carpet", "Starting from ₹1.65 Cr", "Private entrance foyer"]
      },
      {
        name: "4 BHK Presidential Sky Suite",
        description: "Expansive 2,150 sq ft residence featuring double master suites, wrap-around sundeck, and servant quarters.",
        imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        details: ["2,150 sq ft RERA Carpet", "Starting from ₹2.45 Cr", "Servant quarters with separate entry"]
      },
      {
        name: "Rooftop Sky Lounge & Deck",
        description: "Commanding 360-degree views of the Pune skyline, temperature-controlled infinity pool, and private cabanas.",
        imageUrl: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
        details: ["Rooftop infinity edge pool", "Private sky lounge for residents", "Acoustic screening theater"]
      }
    ],
    testimonial: {
      quote: "Elite24 negotiated direct builder pricing and verified every legal title document before we booked our 4 BHK in Baner. Highly recommended.",
      client: "Rajesh & Ananya Kulkarni",
      society: "Kolte Patil 24K Altura, Baner"
    }
  },
  {
    id: "vtp-bellissimo",
    title: "VTP Bellissimo",
    subTitle: "VTP Realty · Hinjawadi Phase 1",
    typology: "1, 2 & 3 BHK Tech-Living",
    location: "Hinjawadi, Pune",
    area: "550 – 1,180 sq ft",
    year: "Possession Jun 2026",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    aspect: "wide",
    brief: "High-yield investment and smart family living within Pune's primary IT hub. Featuring Maximum Livable Area architecture by Pune's leading developer VTP Realty with direct access to Pune Metro Line 3.",
    direction: "MahaRERA: P52100030730. Direct developer allotment with 0% brokerage. Prime Hinjawadi Phase 1 location with proven high rental yields and statutory escrow protection.",
    materials: ["VTP Realty", "MahaRERA P52100030730", "Starting ₹68.00 L", "Possession Jun 2026"],
    keyFeatures: [
      "MLA (Maximum Livable Area) architecture with zero wasted passage space",
      "5 minutes from upcoming Metro Line 3 station & major IT campuses",
      "Zero brokerage for buyers with fast-track home loan sanction assistance",
      "High rental demand (4.5% - 5.5% annual yield) from IT workforce"
    ],
    rooms: [
      {
        name: "1 BHK Smart Tech Suite",
        description: "Ergonomic 550 sq ft smart home designed for tech professionals and high-yield rental returns.",
        imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        details: ["550 sq ft RERA Carpet", "Starting from ₹68.00 Lakhs", "Home automation provisions"]
      },
      {
        name: "2 BHK Premium Residence",
        description: "Spacious 825 sq ft layout with master bedroom wooden flooring and modular kitchen provisions.",
        imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        details: ["825 sq ft RERA Carpet", "Starting from ₹86.00 Lakhs", "Dedicated utility dry balcony"]
      },
      {
        name: "3 BHK Grande Family Suite",
        description: "Well-proportioned 1,180 sq ft residence with three spacious bedrooms and dual wide balconies.",
        imageUrl: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=1200&q=80",
        details: ["1,180 sq ft RERA Carpet", "Starting from ₹1.15 Cr", "Dual aspect ventilation"]
      }
    ],
    testimonial: {
      quote: "Found the ideal investment property in Hinjawadi through Elite24. Their team gave honest comparisons between projects without any pushy sales pitch.",
      client: "Amitabh Joshi",
      society: "VTP Bellissimo, Hinjawadi"
    }
  },
  {
    id: "rohan-ekam",
    title: "Rohan Ekam",
    subTitle: "Rohan Builders · Balewadi",
    typology: "2, 3 & 4 BHK Luxury Residences",
    location: "Balewadi, Pune",
    area: "980 – 1,850 sq ft",
    year: "Possession Dec 2027",
    heroImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
    aspect: "landscape",
    brief: "An iconic luxury development designed around Rohan's patented PLUS home philosophy — Perfect Ventilation, Lively Light, Utmost Privacy, and Smart Space along the serene Mula-Mutha riverfront.",
    direction: "MahaRERA: P52100052384. 100% verified riverfront residences. Starting from ₹1.25 Cr with direct developer pricing, statutory escrow compliance, and zero brokerage.",
    materials: ["Rohan Builders", "MahaRERA P52100052384", "Starting ₹1.25 Cr", "Possession Dec 2027"],
    keyFeatures: [
      "Patented PLUS Home design with zero space wastage and cross ventilation",
      "River-facing panoramic decks & multi-tier landscaped green amenities",
      "Zero brokerage consulting with private developer sales lounge tours",
      "Minutes from Balewadi High Street, elite schools and medical hubs"
    ],
    rooms: [
      {
        name: "2 BHK Riverside Suite",
        description: "980 sq ft of thoughtful architecture with unobstructed river views and abundant natural cross-breeze.",
        imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
        details: ["980 sq ft RERA Carpet", "Starting from ₹1.25 Cr", "PLUS Home ventilation system"]
      },
      {
        name: "3 BHK Grand Haven",
        description: "1,380 sq ft layout with expansive dining salon, master suite, and extended balcony.",
        imageUrl: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
        details: ["1,380 sq ft RERA Carpet", "Starting from ₹1.72 Cr", "Double-height landscaped deck"]
      },
      {
        name: "4 BHK Sky Villa",
        description: "1,850 sq ft riverfront residence offering expansive living dimensions and premium privacy.",
        imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
        details: ["1,850 sq ft RERA Carpet", "Starting from ₹2.30 Cr", "Uninterrupted river & city views"]
      }
    ],
    testimonial: {
      quote: "The Elite24 team arranged a private presentation at the Rohan sales lounge and helped us secure the best river-facing unit at direct developer rates.",
      client: "Pradeep & Shruti Nair",
      society: "Rohan Ekam, Balewadi"
    }
  }
];
