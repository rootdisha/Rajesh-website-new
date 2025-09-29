import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ExternalLink, Calendar, Eye, Filter, Search } from 'lucide-react';

const InTheNews = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = ['All', 'Interviews', 'Panels', 'Keynotes', 'Podcasts'];

  // Sample video data - replace with your actual data
  const videos = [
    {
      id: 1,
      title: "Product Leadership in the Age of AI",
      description: "Discussion on how AI is transforming product management and leadership strategies in Fortune 500 companies.",
      thumbnail: "https://img.youtube.com/vi/KdjZndXKN4I/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/KdjZndXKN4I",
      externalUrl: "https://www.youtube.com/watch?v=KdjZndXKN4I",
      date: "2024-03-15",
      category: "Interviews",
      source: "Tech Leadership Summit",
      views: "12.5K",
      duration: "45:30"
    },
    {
      id: 2,
      title: "Building High-Performance Product Teams",
      description: "Panel discussion on strategies for scaling product teams and maintaining velocity during rapid growth.",
      thumbnail: "https://img.youtube.com/vi/KdjZndXKN4I/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/KdjZndXKN4I",
      externalUrl: "https://www.youtube.com/watch?v=KdjZndXKN4I",
      date: "2024-02-20",
      category: "Panels",
      source: "Product Conference 2024",
      views: "8.2K",
      duration: "38:15"
    },
    {
      id: 3,
      title: "The Future of B2B SaaS Products",
      description: "Keynote on emerging trends in B2B SaaS, customer adoption strategies, and building sustainable competitive advantages.",
      thumbnail: "https://img.youtube.com/vi/KdjZndXKN4I/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/KdjZndXKN4I",
      externalUrl: "https://www.youtube.com/watch?v=KdjZndXKN4I",
      date: "2024-01-10",
      category: "Keynotes",
      source: "SaaS World Conference",
      views: "15.3K",
      duration: "52:00"
    },
    {
      id: 4,
      title: "Product Strategy Deep Dive",
      description: "In-depth conversation about product strategy frameworks, decision-making processes, and aligning teams around vision.",
      thumbnail: "https://img.youtube.com/vi/KdjZndXKN4I/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/KdjZndXKN4I",
      externalUrl: "https://www.youtube.com/watch?v=KdjZndXKN4I",
      date: "2023-12-05",
      category: "Podcasts",
      source: "Product Leaders Podcast",
      views: "6.8K",
      duration: "1:02:45"
    }
  ];

  const filteredVideos = videos
    .filter(video => {
      const matchesCategory = selectedCategory === 'All' || video.category === selectedCategory;
      const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           video.source.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#5944e4] to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 pt-20">
              In The News
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Featured conversations, interviews, and keynotes on product leadership, innovation, and building high-impact teams
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
          {/* Search */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative flex-1 max-w-md"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search videos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-[#5944e4] focus:ring-4 focus:ring-[#5944e4]/10 outline-none transition-all duration-300 bg-white shadow-sm"
            />
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-2 flex-wrap"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#5944e4] text-white shadow-lg shadow-[#5944e4]/25'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Videos Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchTerm}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredVideos.map((video) => (
              <motion.div
                key={video.id}
                variants={itemVariants}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-[#5944e4]/90 backdrop-blur-sm rounded-full p-4 hover:bg-[#5944e4] transition-colors">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-[#5944e4] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {video.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(video.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {video.views}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#5944e4] transition-colors line-clamp-2">
                    {video.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {video.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{video.source}</span>
                    <a
                      href={video.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-[#5944e4] hover:text-purple-600 text-sm font-medium transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Watch
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredVideos.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl text-gray-600 mb-2">No videos found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative pb-[56.25%]">
                <iframe
                  src={selectedVideo.videoUrl}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedVideo.title}
                </h2>
                <p className="text-gray-600 mb-4">{selectedVideo.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{selectedVideo.source}</span>
                  <a
                    href={selectedVideo.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#5944e4] text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Watch on Platform
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InTheNews;