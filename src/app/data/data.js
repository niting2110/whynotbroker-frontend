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
export const partnerData = [];
export const teamData = [];
export const counterData = [];
export const aboutData = {};
export const listingData = [];
export const accordianData = [];
export const conatctDetails = {};
export const contactDetails = conatctDetails;

export default {
  propertiesData, properties, topProperties, agentData, agencyData,
  featureData, feature, reviewData, review, blogData, recentPost,
  blogList, propertiesDetails, recentTransection, inboxData, salesData,
  chatData, invoiceData, pricingData, partnerData, teamData, counterData,
  aboutData, listingData, accordianData, conatctDetails, contactDetails
};
