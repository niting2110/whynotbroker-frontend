// Clean WhyNotBroker Data
export const propertiesData = [
  {
    id: 1,
    title: "3 BHK Luxury Apartment",
    location: "Banashankari 3rd Stage",
    price: "₹1.09 Crore",
    image: "/images/property/1.jpg",
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
    price: "₹1.3 Crore",
    image: "/images/property/2.jpg",
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
    price: "₹1.03 Crore",
    image: "/images/property/3.jpg",
    beds: 0,
    baths: 0,
    sqft: "2600 sqft",
    type: "Residential",
    status: "For Sale",
    slug: "50*52-KHB-Site-for-Sale-Kenchalagudu"
  }
];

export const properties = propertiesData;
export const topProperties = propertiesData.slice(0, 3);

// ===== FEATURE DATA =====
export const featureData = [
  {
    id: 1,
    icon: "fas fa-search",
    title: "Smart Property Search",
    description: "Smart search for Bangalore, Mysore & Karnataka properties"
  },
  {
    id: 2,
    icon: "fas fa-check-circle",
    title: "Verified Listings",
    description: "100% verified listings by WhyNotBroker team"
  },
  {
    id: 3,
    icon: "fas fa-calendar-alt",
    title: "Site Visits",
    description: "Book site visits with certified partners"
  },
  {
    id: 4,
    icon: "fas fa-file-contract",
    title: "Legal Support",
    description: "Complete legal support by partner advocates"
  },
  {
    id: 5,
    icon: "fas fa-chart-line",
    title: "Market Insights",
    description: "Karnataka real estate market insights"
  },
  {
    id: 6,
    icon: "fas fa-users",
    title: "Verified Network",
    description: "Verified agents across 15+ Karnataka cities"
  }
];

export const feature = featureData;

// ===== CONTACT DATA =====
export const conatctDetails = {
  email: "support@whynotbroker.com",
  phone: "+91 98765 43210",
  address: "WhyNotBroker Headquarters, Bangalore",
  hours: "Monday-Saturday: 9:00 AM - 8:00 PM"
};

export const contactData = conatctDetails;
export const contactDetails = conatctDetails;

// ===== BLOG DATA =====
export const blogData = [
  {
    id: 1,
    title: "Karnataka Real Estate Market Trends 2025",
    excerpt: "Analysis of property prices in Bangalore, Mysore and emerging cities...",
    author: "WhyNotBroker Team",
    date: "Dec 10, 2025",
    image: "/images/blog/1.jpg",
    slug: "karnataka-real-estate-trends-2025"
  },
  {
    id: 2,
    title: "MUDA Sites in Mysore: Investment Guide",
    excerpt: "Complete guide to buying MUDA approved residential plots...",
    author: "Property Experts",
    date: "Dec 5, 2025",
    image: "/images/blog/2.jpg",
    slug: "muda-sites-mysore-investment-guide"
  },
  {
    id: 3,
    title: "Legal Documentation for Property Purchase",
    excerpt: "Essential documents and legal verification process in Karnataka...",
    author: "Legal Team",
    date: "Nov 28, 2025",
    image: "/images/blog/3.jpg",
    slug: "legal-documentation-property-purchase"
  }
];

export const recentPost = blogData.slice(0, 3);
export const blogList = blogData;

// ===== OTHER DATA =====
export const propertiesDetails = propertiesData;
export const aboutData = [
  {
    id: 1,
    title: "Verified Karnataka Properties",
    desc: "100% verified listings across Bangalore, Mysore & 15+ cities",
    image: "/images/icon/1.png"
  },
  {
    id: 2,
    title: "Legal Documentation Support",
    desc: "Complete legal verification by partner advocates",
    image: "/images/icon/2.png"
  },
  {
    id: 3,
    title: "Certified Property Advisors",
    desc: "Verified agents for site visits and negotiations",
    image: "/images/icon/3.png"
  }
];

export const counterData = [
  { id: 1, title: "Properties Listed", count: "150+", icon: "fas fa-home" },
  { id: 2, title: "Happy Clients", count: "500+", icon: "fas fa-users" },
  { id: 3, title: "Cities Covered", count: "15+", icon: "fas fa-map-marker-alt" }
];

export const teamData = [
  { id: 1, name: "Property Expert", role: "Senior Advisor", image: "/images/team/1.jpg" },
  { id: 2, name: "Legal Consultant", role: "Documentation Specialist", image: "/images/team/2.jpg" }
];

export const listingData = [
  { id: 1, type: "Apartment", count: 45, icon: "fas fa-building" },
  { id: 2, type: "Villa", count: 23, icon: "fas fa-house-user" },
  { id: 3, type: "Plot", count: 67, icon: "fas fa-map" }
];

export const pricingData = [
  {
    id: 1,
    title: "Basic",
    amount: "0",
    price: "₹0",
    icon: "fas fa-home",
    feature: ["3 Property Listings", "Basic Support", "Email Support", "1 User Account"]
  },
  {
    id: 2,
    title: "Professional", 
    amount: "4999",
    price: "₹4,999",
    icon: "fas fa-building",
    feature: ["20 Property Listings", "Priority Support", "Site Visits", "5 User Accounts", "Document Verification"]
  },
  {
    id: 3,
    title: "Enterprise",
    amount: "14999",
    price: "₹14,999",
    icon: "fas fa-city",
    feature: ["Unlimited Listings", "24/7 Support", "Legal Assistance", "Unlimited Users", "Dedicated Manager", "Market Analysis"]
  }
];

export const accordianData = [
  { id: 1, question: "How to verify property documents?", answer: "Our partner advocates verify all property documents." },
  { id: 2, question: "What cities do you cover?", answer: "We cover 15+ cities across Karnataka including Bangalore, Mysore, Hubli." }
];

export const reviewData = [
  { id: 1, name: "Client", review: "Great service! Found my dream home in Bangalore.", rating: 5 }
];

export const review = reviewData;

// ===== EMPTY ARRAYS (minimal) =====
export const agentData = [];
export const agencyData = [];
export const recentTransection = [];
export const inboxData = [];
export const salesData = [];
export const chatData = [
  {
    id: 1,
    name: "Property Advisor",
    message: "Hello! How can I help you with your property search?",
    time: "10:30 AM",
    unread: 0
  }
];
export const invoiceData = [];
export const partnerData = [];

// Default export
export default {
  propertiesData, properties, topProperties, featureData, feature,
  conatctDetails, contactData, contactDetails, blogData, recentPost, blogList,
  propertiesDetails, aboutData, counterData, teamData, listingData,
  pricingData, accordianData, reviewData, review, agentData, agencyData,
  recentTransection, inboxData, salesData, chatData, invoiceData, partnerData
};

