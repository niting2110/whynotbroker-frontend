import { aboutData, propertiesData } from "../data/data";

export default function IndexTenPage() {
  // Safe defaults to prevent .map() errors
  const safeAboutData = Array.isArray(aboutData) ? aboutData : [];
  const safeProperties = Array.isArray(propertiesData) ? propertiesData : [];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">WhyNotBroker - Karnataka Properties</h1>
      
      {safeAboutData.length > 0 ? (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {safeAboutData.map((item, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg">{item.title || "Feature"}</h3>
                <p className="text-gray-600">{item.description || "Description"}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Welcome to WhyNotBroker</h2>
          <p className="text-gray-600">Your trusted partner for Karnataka real estate.</p>
        </div>
      )}
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safeProperties.map((property) => (
            <div key={property.id} className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg">{property.title}</h3>
              <p className="text-gray-600">{property.location}</p>
              <p className="text-blue-600 font-bold">{property.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
