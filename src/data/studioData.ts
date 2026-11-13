export interface StudioInfo {
  name: string;
  tagline: string;
  eyebrow: string;
  reraNumber?: string;
  website?: string;
  address: {
    line1: string;
    line2: string;
    mall: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    fullAddress: string;
    googleMapsUrl: string;
  };
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  email: string;
  hours: string;
  rating: {
    score: number;
    count: number;
    source: string;
  };
  serviceAreas: string[];
}

export const STUDIO_INFO: StudioInfo = {
  name: "Elite24",
  tagline: "100% MahaRERA Verified. 0% Brokerage.",
  eyebrow: "PROPERTY CONSULTING · PUNE · MAHARERA A52100003268",
  reraNumber: "A52100003268",
  website: "https://elite24.co/",
  address: {
    line1: "U-7 Runwal Platinum",
    line2: "NDA Road, Bavdhan",
    mall: "Runwal Platinum",
    area: "Bavdhan",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411021",
    fullAddress: "U-7 Runwal Platinum, Bavdhan, Pune, Maharashtra 411021",
    googleMapsUrl: "https://maps.google.com/?q=Runwal+Platinum+Bavdhan+Pune"
  },
  phone: "+918856947020",
  displayPhone: "+91 88569 47020",
  whatsappNumber: "918856947020",
  email: "connect@elite24.co",
  hours: "Monday – Sunday: 10:00 AM – 7:30 PM",
  rating: {
    score: 5.0,
    count: 24,
    source: "Verified Client Reviews"
  },
  serviceAreas: [
    "Bavdhan & Kothrud Corridor",
    "Baner & Balewadi Prime Residential",
    "Hinjawadi IT Park & Phase 1-3",
    "Wakad & Mahalunge Growth Corridors",
    "Kharadi & East Pune Select Developments"
  ]
};

export const getWhatsAppUrl = (message?: string): string => {
  const defaultText = "Hello Elite24 team, I am looking for MahaRERA verified properties in Pune and would like to discuss direct builder pricing.";
  const encodedText = encodeURIComponent(message || defaultText);
  return `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodedText}`;
};

