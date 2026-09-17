import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Articles & Resources - Torah Mathews",
  description: "Faith-based trauma education, emotional healing, and mental wellness insights.",
};

const blogPosts = [
  {
    id: 1,
    title: "Understanding Trauma Triggers",
    excerpt: "Short excerpt about trauma triggers and how to recognize them...",
    date: "Coming Soon",
    category: "Trauma Education",
  },
  {
    id: 2,
    title: "Breaking Cycles of Shame",
    excerpt: "Short excerpt about breaking free from shame-based thinking...",
    date: "Coming Soon",
    category: "Healing & Recovery",
  },
  {
    id: 3,
    title: "Faith vs. Fear in Emotional Healing",
    excerpt: "Short excerpt about using faith to overcome fear in the healing journey...",
    date: "Coming Soon",
    category: "Faith & Mental Health",
  },
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Articles & Resources</h1>
          <p className="text-xl text-gray-600">
            Faith-based trauma education, emotional healing, and mental wellness insights.
          </p>
        </div>

        {/* Blog List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-[#209bab] to-[#b18c57]"></div>
              <div className="p-6">
                <div className="text-sm text-[#209bab] font-semibold mb-2">
                  {post.category}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-[#209bab] font-semibold">
                    Read More →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 italic text-lg">
            More blog posts will be added soon.
          </p>
        </div>
      </div>
    </div>
  );
}
