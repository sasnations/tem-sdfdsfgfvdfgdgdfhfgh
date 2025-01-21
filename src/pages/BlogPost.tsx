import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#4A90E2]/5 to-[#357ABD]/5 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Blog Post Not Found
            </h1>
            <Link
              to="/blog"
              className="inline-flex items-center text-[#4A90E2] hover:text-[#357ABD]"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4A90E2]/5 to-[#357ABD]/5 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="inline-flex items-center text-[#4A90E2] hover:text-[#357ABD] mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover"
          />
          
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
              <span className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {post.author}
              </span>
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(post.date).toLocaleDateString()}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </span>
            </div>

            <div className="prose max-w-none mb-8" dangerouslySetInnerHTML={{ __html: post.content }} />

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}