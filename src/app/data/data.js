// WhyNotBroker Property Data
export const accordianData = [
  { title: 'How to buy', content: 'Step-by-step buying guide' },
  { title: 'How to sell', content: 'Step-by-step selling guide' }
];

export const reviewData = [
  { id: 1, name: 'Ramesh K', comment: 'Smooth purchase, great agent', rating: 5 },
  { id: 2, name: 'Sita P', comment: 'Verified listing and fast support', rating: 5 }
];
export const review = reviewData;
export const review_list = reviewData;

export const inboxData = [ { id: 1, from: 'support@whynotbroker.com', subject: 'Welcome', date: '2025-01-01' }];

export const salesData = [ { id: 1, label: 'Jan', value: 10 }, { id: 2, label: 'Feb', value: 20 } ];

export const recentTransection = [ { id: 1, title: 'Booking', amount: 5000 } ];

export const topProperties = [];

export const blogData = [ { id: 1, title: 'Market Trends', slug: 'market-trends' } ];
export const recentPost = [ { id: 1, title: 'Recent Post' } ];
export const blogList = blogData;

export const chatData = [ { id: 1, user: 'Agent', message: 'Hello!' } ];

// Sample propertiesData - add more to reach your 50k goal
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
    slug: "40x30-muda-site-ramakrishna"
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
    slug: "50x52-khb-site-kenchalagudu"
  }
];

export const properties = propertiesData;
export const propertiesDetails = propertiesData;
export const listingData = propertiesData;

export const invoiceData = [ { id: 1, invoiceNo: 'INV-001', amount: 1000 } ];

export const pricingData = [ { plan: 'Basic', price: 'Free' }, { plan: 'Pro', price: '₹999/month' } ];

export const agencyData = [];
export const agentData = [];
export const featureData = [];
export const feature = featureData;
export const partnerData = [];
export const teamData = [];
export const counterData = [ { label: "Properties Listed", value: "500+" }, { label: "Verified Agents", value: "80+" } ];
export const aboutData = { title: "WhyNotBroker - Karnataka's Property Portal" };
export const conatctDetails = { email: "support@whynotbroker.com", address: "WhyNotBroker Headquarters, Bangalore" };
export const contactDetails = conatctDetails;

export default {
  accordianData, reviewData, review, inboxData, salesData, recentTransection, topProperties,
  blogData, recentPost, blogList, chatData, propertiesData, properties, propertiesDetails, listingData,
  invoiceData, pricingData, agencyData, agentData, featureData, feature, partnerData, teamData,
  counterData, aboutData, conatctDetails, contactDetails, review_list
};
