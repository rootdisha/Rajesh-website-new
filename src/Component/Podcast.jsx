import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  Play,
  ExternalLink,
  Filter,
  ArrowLeft,
  Share2,
  Heart,
  Download,
  FileText,
  Headphones,
  ChevronLeft,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { episodes } from "../Data/PodcastDetail";
import { FaYoutube, FaSpotify, FaAmazon, FaApple } from "react-icons/fa";

const Episodes = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [];

  const filteredEpisodes = episodes.filter((episode) => {
    const matchesCategory =
      selectedCategory === "All" || episode.category === selectedCategory;
    const matchesSearch =
      episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      episode.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      episode.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -100 },
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  const carouselItems = [
    {
      title: "Listen on Your Favorite Platform",
      description: "Available on all major podcast platforms",
      icon: <Headphones className="w-12 h-12" />,
    },
    {
      title: "Complete Show Resources",
      description: "Get transcripts, PDFs, and blog posts",
      icon: <FileText className="w-12 h-12" />,
    },
    {
      title: "Interactive Learning",
      description: "Timestamped notes and key takeaways",
      icon: <BookOpen className="w-12 h-12" />,
    },
  ];

  // Episode Detail View
  if (selectedEpisode) {
    return (
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="in"
        exit="out"
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white pt-22" // navbar height
      >
        {/* Header */}
        <div className="bg-[#5944e4] text-white ">
          <div className=" mx-auto px-6 py-8">
            <button
              onClick={() => setSelectedEpisode(null)}
              className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Episodes
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                {/* {selectedEpisode.featured && (
                  <span className="bg-white/20 text-white text-sm font-medium px-3 py-1 rounded-full mb-4 inline-block">
                    Featured Episode
                  </span>
                )} */}
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  {`Ep ${selectedEpisode.num}: ` + selectedEpisode.title}
                </h1>
                <p className="text-white/80 text-lg mb-6">
                  {selectedEpisode.description}
                </p>

                <div className="flex items-center gap-6 text-sm mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {selectedEpisode.date !== "" &&
                      new Date(selectedEpisode.date).toLocaleDateString(
                        "en-US",
                        {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}
                  </div>
                  {/* <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {selectedEpisode.duration}
                  </div> */}
                </div>

                <div className="flex gap-3">
                  {Object.values(selectedEpisode.platforms).some(
                    (p) => p !== ""
                  ) && (
                    <div>
                      {/* <Play className="w-15 h-15" /> */}
                      {/* Platform Links */}
                      <div className="flex gap-3 mb-6">
                        {selectedEpisode.platforms.spotify !== "" && (
                          <a
                            href={selectedEpisode.platforms.spotify}
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2"
                          >
                            <FaSpotify className="w-4 h-4" />
                            Spotify
                          </a>
                        )}
                        {selectedEpisode.platforms.youtube !== "" && (
                          <a
                            href={selectedEpisode.platforms.youtube}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2"
                          >
                            <FaYoutube className="w-4 h-4" />
                            YouTube
                          </a>
                        )}
                        {selectedEpisode.platforms.apple !== "" && (
                          <a
                            href={selectedEpisode.platforms.apple}
                            className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2"
                          >
                            <FaApple className="w-4 h-4" />
                            Apple
                          </a>
                        )}
                        {selectedEpisode.platforms.amazon !== "" && (
                          <a
                            href={selectedEpisode.platforms.amazon}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2"
                          >
                            <FaAmazon className="w-4 h-4" />
                            Amazon
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                  {/* <a href={selectedEpisode.downloadUrl} className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium hover:bg-white/30 transition-colors flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Download
                  </a> */}
                </div>
              </div>

              {/* <div className="relative">
                <video
                  src={selectedEpisode.video}
                  className="w-full rounded-2xl shadow-2xl"
                  controls
                  poster=""
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-black/20 rounded-2xl pointer-events-none"></div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        {/* <div className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="relative">
              <div className="flex items-center justify-center mb-8">
                <button
                  onClick={prevSlide}
                  className="absolute left-0 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
                >
                  <ChevronLeft className="w-6 h-6 text-[#5944e4]" />
                </button>
                
                <div className="text-center max-w-lg">
                  <div className="flex justify-center mb-4 text-[#5944e4]">
                    {carouselItems[currentSlide].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {carouselItems[currentSlide].title}
                  </h3>
                  <p className="text-gray-600">
                    {carouselItems[currentSlide].description}
                  </p>
                </div>

                <button
                  onClick={nextSlide}
                  className="absolute right-0 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
                >
                  <ChevronRight className="w-6 h-6 text-[#5944e4]" />
                </button>
              </div>

              <div className="flex justify-center gap-2">
                {carouselItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-[#5944e4]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div> */}

        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Show Notes */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Show Notes
                </h2>
                <div className="prose prose-lg max-w-none">
                  <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                    {selectedEpisode.showNotes}
                  </div>
                </div>
              </div>

              {/* Transcript */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Transcript
                </h2>
                <div className="bg-gray-50 rounded-2xl p-6 max-h-96 overflow-y-auto">
                  <div className="whitespace-pre-line text-gray-700 text-sm font-mono">
                    {selectedEpisode.transcript}
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Episode Resources
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* <a href={selectedEpisode.downloadUrl} className="flex items-center justify-center gap-2 bg-white p-4 rounded-xl hover:shadow-lg transition-shadow">
                    <Download className="w-5 h-5 text-[#5944e4]" />
                    <span className="font-medium">Download MP3</span>
                  </a> */}
                  {/* <a href={selectedEpisode.pdfUrl} className="flex items-center justify-center gap-2 bg-white p-4 rounded-xl hover:shadow-lg transition-shadow">
                    <FileText className="w-5 h-5 text-[#5944e4]" />
                    <span className="font-medium">PDF Summary</span>
                  </a>
                  <a href={selectedEpisode.blogUrl} className="flex items-center justify-center gap-2 bg-white p-4 rounded-xl hover:shadow-lg transition-shadow">
                    <BookOpen className="w-5 h-5 text-[#5944e4]" />
                    <span className="font-medium">Blog Post</span>
                  </a> */}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Episode Stats</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Views</span>
                    <span className="font-medium">{selectedEpisode.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Likes</span>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span className="font-medium">{selectedEpisode.likes}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Category</span>
                    <span className="bg-[#5944e4] text-white text-sm px-3 py-1 rounded-full">
                      {selectedEpisode.category}
                    </span>
                  </div>
                </div>
              </div> */}

              {/* <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Guest</h3>
                <p className="text-gray-700 text-sm">{selectedEpisode.guestInfo}</p>
              </div> */}

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedEpisode.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white text-gray-700 text-sm px-3 py-1 rounded-full border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Main Episodes List View
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-[#5944e4] text-white">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 pt-30">
              Episodes
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          {/* Search */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative flex-1 max-w-md"
          >
            <input
              type="text"
              placeholder="Search episodes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-full px-6 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5944e4] focus:border-transparent transition-all duration-300"
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
                    ? "bg-[#5944e4] text-white shadow-lg shadow-[#5944e4]/25"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Episodes Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchTerm}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredEpisodes.map((episode, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#5944e4] hover:shadow-xl transition-all duration-500 cursor-pointer ${
                  episode.featured ? "ring-2 ring-[#5944e4]/30" : ""
                }`}
                onClick={() => setSelectedEpisode(episode)}
              >
                {/* {episode.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#5944e4] text-white text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                )} */}

                {/* Episode Video */}
                {/* <div className="relative overflow-hidden h-48"> */}
                {/* <video
                    src={episode.video}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    muted
                    preload="metadata"
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => {
                      e.target.pause();
                      e.target.currentTime = 0;
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                   */}
                {/* Play Button */}
                {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-[#5944e4]/80 backdrop-blur-sm rounded-full p-4 hover:bg-[#5944e4] transition-colors">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                  </div> */}
                {/* </div> */}

                {/* Episode Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {episode.date !== "" &&
                        new Date(episode.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                    </div>
                    {/* <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {episode.duration}
                    </div> */}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5944e4] transition-colors">
                    {`Ep ${episode.num}: ` + episode.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {episode.description}
                  </p>

                  {/* Platform Icons */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs text-gray-500">Available on:</span>
                    <div className="flex gap-1">
                      {episode.platforms.apple !== "" && (
                        <FaApple className="w-4 h-4 " />
                      )}
                      {episode.platforms.youtube !== "" && (
                        <FaYoutube className="w-4 h-4" />
                      )}
                      {episode.platforms.spotify !== "" && (
                        <FaSpotify className="w-4 h-4" />
                      )}
                      {episode.platforms.amazon !== "" && (
                        <FaAmazon className="w-4 h-4 " />
                      )}
                    </div>
                  </div>

                  {/* Tags */}
                  {/* <div className="flex flex-wrap gap-2 mb-4">
                    {episode.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div> */}

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    {/* <button className="flex items-center gap-2 bg-[#5944e4] hover:bg-[#4a3bc7] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                      <Play className="w-4 h-4" />
                      Play
                    </button> */}
                    <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-all">
                      <ExternalLink className="w-4 h-4" />
                      Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredEpisodes.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl text-gray-600 mb-2">No episodes found</h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Episodes;
