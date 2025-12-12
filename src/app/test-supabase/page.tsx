// Test page - SHOW ALL PROPERTIES
import { createClient } from '../../utils/supabase/server'

export default async function TestPage() {
  try {
    const supabase = await createClient()
    
    // Get ALL properties (no limit, show active and inactive)
    const { data: properties, error } = await supabase
      .from('properties')
      .select('*')
      .order('created_at', { ascending: false })

    return (
      <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>✅ Supabase Connection Test</h1>
        
        {error ? (
          <div style={{ padding: '20px', background: '#fee2e2', border: '1px solid #fca5a5', borderRadius: '8px', marginBottom: '30px' }}>
            <h2 style={{ color: '#dc2626', marginBottom: '10px' }}>❌ Connection Error</h2>
            <p style={{ color: '#666' }}>Error: {error.message}</p>
          </div>
        ) : (
          <div style={{ padding: '20px', background: '#d1fae5', border: '1px solid #10b981', borderRadius: '8px', marginBottom: '30px' }}>
            <h2 style={{ color: '#065f46', marginBottom: '10px' }}>✅ Connected to Supabase!</h2>
            <p style={{ color: '#047857' }}>Total properties in database: {properties?.length || 0}</p>
            <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '10px' }}>
              Project: ryhdgpkvkcedplbwgnld.supabase.co
            </p>
          </div>
        )}
        
        {properties && properties.length > 0 && (
          <div style={{ marginBottom: '30px' }}>
            <h3>All Properties ({properties.length} total):</h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
              gap: '15px', 
              marginTop: '15px' 
            }}>
              {properties.map((prop: any) => (
                <div key={prop.id} style={{ 
                  padding: '15px', 
                  border: '1px solid #e5e7eb', 
                  borderRadius: '8px',
                  background: prop.is_active ? 'white' : '#f9fafb',
                  opacity: prop.is_active ? 1 : 0.7
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <div>
                      <strong>{prop.title}</strong>
                      <div style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '5px' }}>
                        📍 {prop.city} • 🛏️ {prop.bedrooms} BHK • 🏠 {prop.property_type}
                      </div>
                    </div>
                    {!prop.is_active && (
                      <span style={{ 
                        fontSize: '0.8rem', 
                        background: '#fef3c7', 
                        color: '#92400e',
                        padding: '3px 8px',
                        borderRadius: '4px'
                      }}>
                        Inactive
                      </span>
                    )}
                  </div>
                  <div style={{ 
                    fontSize: '1.3rem', 
                    fontWeight: 'bold', 
                    color: '#1d4ed8',
                    marginTop: '10px'
                  }}>
                    ₹{prop.price?.toLocaleString('en-IN')}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#9ca3af', marginTop: '5px' }}>
                    ID: {prop.id} • Created: {new Date(prop.created_at).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div style={{ marginTop: '40px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>🎯 Database Status</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <a href="/properties" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '20px', background: 'white', border: '1px solid #e5e7eb', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📋</div>
                <div style={{ fontWeight: 'bold', color: '#1f2937' }}>View Active Properties</div>
                <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>
                  {properties?.filter((p: any) => p.is_active).length || 0} active
                </div>
              </div>
            </a>
            <a href="https://supabase.com/dashboard/project/ryhdgpkvkcedplbwgnld/editor" target="_blank" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '20px', background: 'white', border: '1px solid #e5e7eb', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🗄️</div>
                <div style={{ fontWeight: 'bold', color: '#1f2937' }}>Open Supabase Editor</div>
                <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>Manage database directly</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  } catch (error: any) {
    return (
      <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>❌ Setup Error</h1>
        <div style={{ padding: '20px', background: '#fee2e2', border: '1px solid #fca5a5', borderRadius: '8px' }}>
          <p style={{ color: '#dc2626' }}>Error: {error.message}</p>
        </div>
      </div>
    )
  }
}
