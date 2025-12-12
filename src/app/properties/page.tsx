// Properties page - SHOW ACTIVE PROPERTIES WITH COUNT
import { createClient } from '../../utils/supabase/server'
import Link from 'next/link'

export default async function PropertiesPage() {
  const supabase = await createClient()
  
  // Get active properties for display
  const { data: activeProperties, error: activeError } = await supabase
    .from('properties')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false })
  
  // Get total count (including inactive)
  const { count: totalCount, error: countError } = await supabase
    .from('properties')
    .select('*', { count: 'exact', head: true })

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🏠 Property Listings</h1>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>
            Showing {activeProperties?.length || 0} active properties 
            {totalCount !== null && ` (${totalCount} total in database)`}
          </p>
        </div>
        <Link 
          href="/properties/add" 
          style={{ 
            padding: '12px 24px', 
            background: '#0070f3', 
            color: 'white', 
            borderRadius: '8px', 
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          + List New Property
        </Link>
      </div>
      
      {activeError || countError ? (
        <div style={{ padding: '20px', background: '#fee2e2', border: '1px solid #fca5a5', borderRadius: '8px' }}>
          <h3 style={{ color: '#dc2626' }}>Database Error</h3>
          <p style={{ color: '#666', marginTop: '10px' }}>
            {activeError?.message || countError?.message}
          </p>
        </div>
      ) : activeProperties && activeProperties.length > 0 ? (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '25px' }}>
            {activeProperties.map((property: any) => (
              <div key={property.id} style={{ 
                border: '1px solid #e5e7eb', 
                borderRadius: '12px', 
                padding: '25px',
                background: 'white',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>{property.title}</h3>
                
                <div style={{ display: 'flex', gap: '15px', color: '#6b7280', marginBottom: '15px', fontSize: '0.9rem' }}>
                  <span>📍 {property.city}</span>
                  <span>🛏️ {property.bedrooms} BHK</span>
                  <span>🏠 {property.property_type}</span>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1d4ed8' }}>
                    ₹{property.price?.toLocaleString('en-IN')}
                  </div>
                  <Link 
                    href={`/properties/${property.id}`}
                    style={{ 
                      color: '#2563eb', 
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      padding: '8px 16px',
                      border: '2px solid #2563eb',
                      borderRadius: '6px'
                    }}
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {totalCount !== null && totalCount > activeProperties.length && (
            <div style={{ 
              marginTop: '30px', 
              padding: '15px', 
              background: '#fef3c7', 
              border: '1px solid #f59e0b',
              borderRadius: '8px'
            }}>
              <p style={{ color: '#92400e', margin: 0 }}>
                ℹ️ Note: {totalCount - activeProperties.length} properties are inactive. 
                Visit the <a href="/test-supabase" style={{ color: '#92400e', fontWeight: 'bold' }}>test page</a> to see all properties.
              </p>
            </div>
          )}
        </>
      ) : (
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🏠</div>
          <h2 style={{ fontSize: '1.8rem', color: '#4b5563', marginBottom: '10px' }}>
            {totalCount ? 'No active properties' : 'No properties in database'}
          </h2>
          <p style={{ color: '#9ca3af', marginBottom: '30px' }}>
            {totalCount ? `You have ${totalCount} properties but none are marked as active.` : 'Your database is empty.'}
          </p>
          <Link 
            href="/properties/add" 
            style={{ 
              padding: '14px 28px', 
              background: '#10b981', 
              color: 'white', 
              borderRadius: '8px', 
              textDecoration: 'none',
              fontWeight: 'bold'
            }}
          >
            + Add Your First Property
          </Link>
        </div>
      )}
    </div>
  )
}
