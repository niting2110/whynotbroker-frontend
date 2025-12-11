import { propertiesData } from "../data/data";

export default function ListPage() {
  if (!propertiesData || !Array.isArray(propertiesData)) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Property Listings</h1>
        <p>No properties available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Property Listings</h1>
      <p className="mb-6">Showing {propertiesData.length} properties</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {propertiesData.map((property) => (
          <div key={property.id} className="border rounded-lg p-4">
            <h3 className="font-semibold text-lg">{property.title}</h3>
            <p className="text-gray-600">{property.location}</p>
            <p className="text-blue-600 font-bold">{property.price}</p>
            <div className="mt-2 text-sm text-gray-500">
              {property.beds} Beds • {property.baths} Baths • {property.sqft}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

