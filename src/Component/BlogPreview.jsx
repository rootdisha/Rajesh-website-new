import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { getNewestPosts } from "../Data/BlogDetail";

const BlogPreview = () => {
  const newestPosts = getNewestPosts(3);

  const fadeIn = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-purple-50 py-20 px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
        }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div variants={fadeIn} className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-1 bg-[#5944e4] rounded-full"></span>
            <BookOpen className="w-8 h-8 text-[#5944e4]" />
            <span className="w-12 h-1 bg-[#5944e4] rounded-full"></span>
          </motion.div>
          
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Recent Posts
          </motion.h2>
          
          <motion.p variants={fadeIn} className="text-lg text-gray-600 max-w-2xl mx-auto">

          </motion.p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {newestPosts.map((post, index) => (
            <motion.article
              key={index}
              variants={fadeIn}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer"
            >
              {/* Category Badge */}
              <div className="bg-gradient-to-r from-[#5944e4] to-purple-600 px-6 py-3">
                <span className="text-white text-sm font-semibold">
                  {post.category}
                </span>
              </div>

              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#5944e4] transition-colors">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.description}
                </p>

                {/* Read More Link */}
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#5944e4] hover:text-purple-600 font-medium text-sm group-hover:gap-3 transition-all"
                  onClick={(e) => e.stopPropagation()}
                >
                  Read on Medium
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div variants={fadeIn} className="text-center">
          <a
            href="/Blog"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#5944e4] hover:bg-purple-600 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BlogPreview;