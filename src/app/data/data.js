// Complete data.js for WhyNotBroker.com
export const propertiesData = [
  {
    id: 1,
    title: "3 BHK Luxury Apartment",
    location: "Banashankari 3rd Stage",
    price: "?1.09 Crore",
    image: "/images/property/placeholder.jpg",
    beds: 2,
    baths: 2,
    sqft: "1366 sqft",
    type: "Apartment",
    status: "For Sale",
    slug: "3-bhk-luxury-apartment-banashankari"
  },
  {
    id: 2,
    title: "40*30 MUDA Site for Sale",
    location: "Ramakrishna Nagar Mysore",
    price: "?1.3 Crore",
    image: "/images/property/placeholder.jpg",
    beds: 0,
    baths: 0,
    sqft: "1200 sqft",
    type: "Plot",
    status: "For Sale",
    slug: "40*30-MUDA-Site-for-Sale-Ramakrishna"
  },
  {
    id: 3,
    title: "50*52 KHB Site for Sale",
    location: "Kenchalagudu Mysore",
    price: "?1.03 Crore",
    image: "/images/property/placeholder.jpg",
    beds: 0,
    baths: 0,
    sqft: "2600 sqft",
    type: "Residential",
    status: "For Sale",
    slug: "50*52-KHB-Site-for-Sale-Kenchalagudu"
  },
  {
    id: 4,
    title: "2 BHK Premium Flat",
    location: "Jayanagar, Bangalore",
    price: "?95 Lakh",
    image: "/images/property/placeholder.jpg",
    beds: 2,
    baths: 2,
    sqft: "1100 sqft",
    type: "Apartment",
    status: "For Sale",
    slug: "2-bhk-premium-flat-jayanagar"
  },
  {
    id: 5,
    title: "80*60 Residential Plot",
    location: "Whitefield, Bangalore",
    price: "?2.4 Crore",
    image: "/images/property/placeholder.jpg",
    beds: 0,
    baths: 0,
    sqft: "4800 sqft",
    type: "Plot",
    status: "For Sale",
    slug: "80*60-residential-plot-whitefield"
  }
];

export const properties = propertiesData;

export const topProperties = propertiesData.slice(0, 3);

export const agentData = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Senior Property Advisor",
    image: "/images/agents/1.jpg",
    phone: "+91 98765 43210",
    email: "rahul@whynotbroker.com",
    experience: "8+ years",
    location: "Bangalore"
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Luxury Homes Specialist",
    image: "/images/agents/2.jpg",
    phone: "+91 87654 32109",
    email: "priya@whynotbroker.com",
    experience: "6+ years",
    location: "Mysore"
  },
  {
    id: 3,
    name: "Arun Kumar",
    role: "Commercial Properties Expert",
    image: "/images/agents/placeholder.jpg",
    phone: "+91 76543 21098",
    email: "arun@whynotbroker.com",
    experience: "10+ years",
    location: "Bangalore"
  }
];

export const agencyData = [
  {
    id: 1,
    name: "Elite Properties Karnataka",
    location: "Bangalore",
    properties: 42,
    rating: 4.8,
    agents: 12
  },
  {
    id: 2,
    name: "Mysore Dream Homes",
    location: "Mysore",
    properties: 28,
    rating: 4.6,
    agents: 8
  },
  {
    id: 3,
    name: "South India Realty",
    location: "Chennai",
    properties: 65,
    rating: 4.7,
    agents: 18
  }
];

export const featureData = [
  {
    icon: "uil-search",
    title: "Smart Property Search",
    description: "Advanced filters by location, price, type to find perfect property"
  },
  {
    icon: "uil-shield-check",
    title: "Verified Listings",
    description: "Every property is physically verified for authenticity"
  },
  {
    icon: "uil-calendar-alt",
    title: "Site Visits Booking",
    description: "Schedule property visits with verified owners/agents"
  },
  {
    icon: "uil-file-contract",
    title: "Legal Assistance",
    description: "End-to-end legal documentation and verification support"
  },
  {
    icon: "uil-chart-line",
    title: "Price Analytics",
    description: "Market trends and price analysis for informed decisions"
  },
  {
    icon: "uil-users-alt",
    title: "Expert Agents",
    description: "Network of certified property advisors across Karnataka"
  }
];
export const feature = featureData;

export const reviewData = [
  {
    name: "Vikram Reddy",
    role: "Property Buyer",
    comment: "Found my dream home in Banashankari within budget. WhyNotBroker made the process smooth!",
    rating: 5,
    date: "2024-11-15"
  },
  {
    name: "Anjali Deshpande",
    role: "Property Seller",
    comment: "Sold my Mysore plot quickly at good price. Their agent network is excellent.",
    rating: 4,
    date: "2024-10-28"
  },
  {
    name: "Sanjay Mehta",
    role: "NRI Investor",
    comment: "As an NRI, I needed reliable partners. WhyNotBroker handled everything remotely perfectly.",
    rating: 5,
    date: "2024-11-05"
  }
];
export const review = reviewData;

export const blogData = [
  {
    id: 1,
    title: "Top 5 Areas to Invest in Bangalore 2024",
    excerpt: "Real estate hotspots showing maximum ROI potential...",
    image: "/images/blog/1.jpg",
    date: "2024-11-20",
    author: "Market Research Team"
  },
  {
    id: 2,
    title: "MUDA vs KHB Plots: Which is Better?",
    excerpt: "Complete comparison of government plot schemes in Karnataka...",
    image: "/images/blog/2.jpg",
    date: "2024-11-12",
    author: "Legal Advisory"
  }
];

export const recentPost = blogData.slice(0, 2);
export const blogList = blogData;

export const propertiesDetails = propertiesData.map(p => ({
  ...p,
  description: `Beautiful ${p.type.toLowerCase()} located in prime ${p.location}. ${p.sqft} area with excellent connectivity to schools, hospitals, and markets.`,
  amenities: ["Parking", "Security", "Water Supply", "Power Backup", "Garden"],
  owner: {
    name: "Verified Owner",
    phone: "+91 XXXXX XXXXX",
    type: "Direct Owner"
  }
}));

export const recentTransection = [
  { id: 1, property: "2 BHK in Jayanagar", price: "?92 Lakh", date: "2024-11-18", type: "Sold" },
  { id: 2, property: "Plot in Whitefield", price: "?2.3 Crore", date: "2024-11-15", type: "Registered" },
  { id: 3, property: "3 BHK in Indiranagar", price: "?1.8 Crore", date: "2024-11-10", type: "Agreement" }
];

export const inboxData = [];
export const salesData = [];
export const chatData = [];
export const invoiceData = [];
export const pricingData = [];
export const partnerData = [];
export const teamData = [];
export const counterData = [
  { title: "Properties Listed", value: "250+", icon: "uil-home" },
  { title: "Happy Clients", value: "180+", icon: "uil-smile" },
  { title: "Cities Covered", value: "12+", icon: "uil-map-marker" },
  { title: "Expert Agents", value: "45+", icon: "uil-users-alt" }
];

export const aboutData = {
  title: "Why Choose WhyNotBroker?",
  description: "Karnataka's most trusted property portal connecting buyers, sellers, and agents with transparency and reliability.",
  stats: [
    { label: "Years Experience", value: "8+" },
    { label: "Property Transactions", value: "500+" },
    { label: "Cities Covered", value: "12+" },
    { label: "Team Members", value: "50+" }
  ]
};

export const listingData = propertiesData;
export const accordianData = [
  { question: "How to list my property?", answer: "Register, add details, upload photos. Our team verifies and lists within 24 hours." },
  { question: "Are all properties verified?", answer: "Yes, each listing undergoes physical verification and document check." },
  { question: "What areas do you cover?", answer: "Currently Bangalore, Mysore, Hubli, Mangalore, and expanding across Karnataka." }
];

export const conatctDetails = {
  address: "No. 123, MG Road, Bangalore, Karnataka 560001",
  phone: "+91 80 1234 5678",
  email: "info@whynotbroker.com",
  hours: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM",
  whatsapp: "+91 98765 43210"
};
export const contactDetails = conatctDetails;

// Default export for backward compatibility
export default {
  propertiesData, properties, topProperties, agentData, agencyData, featureData, feature,
  reviewData, review, blogData, recentPost, blogList, propertiesDetails, recentTransection,
  inboxData, salesData, chatData, invoiceData, pricingData, partnerData, teamData,
  counterData, aboutData, listingData, accordianData, conatctDetails, contactDetails
};
