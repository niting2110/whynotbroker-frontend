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

export const agentData = [];
export const agencyData = [];
export const featureData = [];
export const feature = featureData;
export const reviewData = [];
export const review = reviewData;
export const blogData = [];
export const recentPost = [];
export const blogList = [];
export const propertiesDetails = [];
export const recentTransection = [];
export const inboxData = [];
export const salesData = [];
export const chatData = [];
export const invoiceData = [];
export const pricingData = [];
export const pricingPlan = pricingData;
export const partnerData = [
    { name: "Company 1", logo: "/images/client/amazon.svg" },
    { name: "Company 2", logo: "/images/client/google.svg" },
    { name: "Company 3", logo: "/images/client/lenovo.svg" },
    { name: "Company 4", logo: "/images/client/paypal.svg" },
    { name: "Company 5", logo: "/images/client/shopify.svg" },
    { name: "Company 6", logo: "/images/client/spotify.svg" }
];
export const teamData = [];
export const counterData = [];
export const aboutData = [
    {
        icon: "FiHexagon",
        title: "Buy Property",
        description: "Find your dream home with our extensive listings"
    },
    {
        icon: "FiHexagon",
        title: "Sell Property",
        description: "List your property and reach thousands of buyers"
    },
    {
        icon: "FiHexagon",
        title: "Rent Property",
        description: "Find perfect rental properties for your needs"
    }
];
export const listingData = [];
export const accordianData = [];
export const accordion = accordianData;
export const conatctDetails = [
    {
        "Icon": "FiMapPin",
        "title": "Address",
        "description": "C/54 Northwest Freeway, Suite 558, Houston, USA 485",
        "contact": "View on Google map"
    },
    {
        "Icon": "FiMail",
        "title": "Email",
        "description": "contact@example.com",
        "contact": "contact@example.com"
    },
    {
        "Icon": "FiPhone",
        "title": "Phone",
        "description": "Start working with Landrick that can provide everything",
        "contact": "+152 534-468-854"
    }
];
export const contactDetails = conatctDetails;

export default {
  propertiesData, properties, topProperties, agentData, agencyData,
  featureData, feature, reviewData, review, blogData, recentPost,
  blogList, propertiesDetails, recentTransection, inboxData, salesData,
  chatData, invoiceData, pricingData, partnerData, teamData, counterData,
  aboutData, listingData, accordianData, conatctDetails, contactDetails
};








