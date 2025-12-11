import { blogData, recentPost } from "../data/data";

export default function BlogDetailPage() {
  // Safe defaults to prevent .map() errors
  const safeBlogData = Array.isArray(blogData) ? blogData : [];
  const safeRecentPosts = Array.isArray(recentPost) ? recentPost : [];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">WhyNotBroker Blog</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Latest Articles</h2>
          
          {safeBlogData.length > 0 ? (
            <div className="space-y-8">
              {safeBlogData.map((post) => (
                <div key={post.id} className="border rounded-lg overflow-hidden shadow">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>By {post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border rounded-lg">
              <p className="text-gray-500">No blog posts available yet.</p>
              <p className="text-gray-400 text-sm mt-2">Check back soon for real estate insights!</p>
            </div>
          )}
        </div>
        
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-4">Recent Posts</h3>
            
            {safeRecentPosts.length > 0 ? (
              <div className="space-y-4">
                {safeRecentPosts.map((post) => (
                  <div key={post.id} className="border-b pb-4 last:border-0">
                    <h4 className="font-medium">{post.title}</h4>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-sm">No recent posts</p>
            )}
            
            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-4">Categories</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Bangalore Properties</span>
                  <span className="text-gray-500">12</span>
                </li>
                <li className="flex justify-between">
                  <span>Mysore Real Estate</span>
                  <span className="text-gray-500">8</span>
                </li>
                <li className="flex justify-between">
                  <span>Investment Guide</span>
                  <span className="text-gray-500">5</span>
                </li>
                <li className="flex justify-between">
                  <span>Legal Advice</span>
                  <span className="text-gray-500">3</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
