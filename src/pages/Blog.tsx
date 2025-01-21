import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, ChevronRight, Tag, ArrowLeft } from 'lucide-react';
import { blogPosts, blogCategories } from '../data/blogPosts';
import type { BlogPost } from '../types/blog';

export function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);
  const [visiblePosts, setVisiblePosts] = useState<BlogPost[]>([]);
  const [page, setPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    const filtered = blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.content.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || post.category.toLowerCase() === selectedCategory.toLowerCase();
      return matchesSearch && matchesCategory;
    });
    setFilteredPosts(filtered);
    setPage(1);
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    setVisiblePosts(filteredPosts.slice(0, page * postsPerPage));
  }, [filteredPosts, page]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4A90E2]/5 to-[#357ABD]/5">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#4A90E2] to-[#357ABD] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            to="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          <h1 className="text-5xl font-bold mb-6">
            Knowledge Hub
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Expert insights, guides, and best practices for email privacy, security, and digital well-being. Stay informed and protected in the digital world.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            <button
              onClick={() => setSelectedCategory('')}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                !selectedCategory
                  ? 'bg-[#4A90E2] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              All Posts
            </button>
            {blogCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === category.name
                    ? 'bg-[#4A90E2] text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visiblePosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <Link to={`/blog/${post.slug}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
                />
              </Link>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <Link
                  to={`/blog/${post.slug}`}
                  className="block group"
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#4A90E2] transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Tag className="w-4 h-4 mr-1" />
                    {post.category}
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-[#4A90E2] hover:text-[#357ABD] transition-colors"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        {visiblePosts.length < filteredPosts.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setPage(page + 1)}
              className="inline-flex items-center px-6 py-3 bg-[#4A90E2] text-white rounded-lg hover:bg-[#357ABD] transition-colors"
            >
              Load More Articles
              <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}