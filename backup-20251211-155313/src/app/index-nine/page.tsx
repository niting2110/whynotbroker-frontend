import { featureData, propertiesData } from "../data/data";

export default function IndexNinePage() {
  const safeFeatures = Array.isArray(featureData) ? featureData : [];
  const safeProperties = Array.isArray(propertiesData) ? propertiesData : [];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">WhyNotBroker Karnataka Properties</h1>
      
      {/* Features Section with proper icon rendering */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safeFeatures.map((feature) => (
            <div key={feature.id} className="border rounded-lg p-6 text-center">
              <div className="text-blue-600 text-3xl mb-4">
                {/* Use proper icon rendering - FontAwesome classes should be on <i> or <span> */}
                <i className={feature.icon}></i>
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Properties Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Featured Properties</h2>
        {safeProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safeProperties.map((property) => (
              <div key={property.id} className="border rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{property.title}</h3>
                  <p className="text-gray-600">{property.location}</p>
                  <p className="text-blue-600 font-bold text-xl mt-2">{property.price}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border rounded-lg">
            <p className="text-gray-500">No properties available at the moment.</p>
            <p className="text-gray-400 text-sm mt-2">Contact us for latest listings!</p>
          </div>
        )}
      </div>
    </div>
  );
}
