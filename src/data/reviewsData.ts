export interface Review {
  id: string;
  quote: string;
  author: string;
  role: string;
  society: string;
  location: string;
  scope: string;
  rating: number;
  highlight: string;
}

export const REVIEWS_DATA: Review[] = [
  {
    id: "review-1",
    quote: "The entire process was seamless — from our first discussion at their Bavdhan office at Runwal Platinum to booking our 3 BHK at Ganga Legend County. What stood out was absolute zero brokerage and full transparency on builder cost sheets. No hidden fees whatsoever.",
    author: "Sachin & Ketaki Deshmukh",
    role: "IT Leadership, Hinjawadi",
    society: "Ganga Legend County, Bavdhan",
    location: "Bavdhan, Pune",
    scope: "3 BHK Sky Home Booking · 0% Brokerage",
    rating: 5,
    highlight: "100% Transparent Builder Pricing"
  },
  {
    id: "review-2",
    quote: "Elite24 took complete advisory responsibility for our 4 BHK in Baner. They verified the MahaRERA documentation, arranged private appointments at the Kolte Patil 24K sales lounge, and secured direct developer pricing. Unbiased, professional advisors.",
    author: "Rajesh & Ananya Kulkarni",
    role: "Corporate Executives",
    society: "Kolte Patil 24K Altura, Baner",
    location: "Baner, Pune",
    scope: "4 BHK Sky Mansion · MahaRERA Audited",
    rating: 5,
    highlight: "Rigorous Legal Due Diligence"
  },
  {
    id: "review-3",
    quote: "We evaluated projects across Balewadi and Wakad for 6 months before consulting Elite24. Their micro-market analysis and honest comparison of carpet efficiency saved us both time and money. We booked our home at Rohan Ekam with complete peace of mind.",
    author: "Pradeep & Shruti Nair",
    role: "Homeowners",
    society: "Rohan Ekam, Balewadi",
    location: "Balewadi, Pune",
    scope: "3 BHK Riverside Residence · Zero Brokerage",
    rating: 5,
    highlight: "Zero Brokerage & Expert Guidance"
  },
  {
    id: "review-4",
    quote: "As a first-time homebuyer in Hinjawadi, understanding builder contracts and RERA escrow seemed overwhelming. Elite24 guided me through every detail, accompanied me on site visits, and helped close our 2 BHK at VTP Bellissimo smoothly.",
    author: "Amitabh Joshi",
    role: "Software Engineer, Infosys",
    society: "VTP Bellissimo, Hinjawadi",
    location: "Hinjawadi Phase 1, Pune",
    scope: "2 BHK Tech-Living · Fast-Track Loan Support",
    rating: 5,
    highlight: "Seamless First-Home Experience"
  }
];

