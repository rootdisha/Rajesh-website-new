import React from "react";
import { motion } from "framer-motion";
import { Calendar, Play, Music, Youtube, Headphones, ShoppingBag, Mic } from "lucide-react";
import { getNewestEpisodes } from "../Data/PodcastDetail"; 

const PodcastPreview = () => {
  const newestEpisodes = getNewestEpisodes(3);

  const fadeIn = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 px-6">
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
            <Mic className="w-8 h-8 text-[#5944e4]" />
            <span className="w-12 h-1 bg-[#5944e4] rounded-full"></span>
          </motion.div>
          
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest Episodes
          </motion.h2>
          
          <motion.p variants={fadeIn} className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conversations with product leaders on strategy, innovation, and building high-impact teams
          </motion.p>
        </div>

        {/* Episodes Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {newestEpisodes.map((episode, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer"
            >
              {/* Episode Number Badge */}
              <div className="bg-gradient-to-r from-[#5944e4] to-purple-600 px-6 py-4 relative">
                <div className="flex items-center justify-between">
                  <span className="text-white text-sm font-semibold">
                    Episode {episode.num}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-white/80 text-xs">Latest</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  {new Date(episode.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#5944e4] transition-colors">
                  {episode.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {episode.description}
                </p>

                {/* Platform Icons */}
                {Object.values(episode.platforms).some(p => p !== "") && (
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100">
                    <span className="text-xs text-gray-500">Listen on:</span>
                    <div className="flex gap-2">
                      {episode.platforms.spotify !== "" && (
                        <a 
                          href={episode.platforms.spotify}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-green-500 hover:text-green-600 transition-colors"
                        >
                          <Music className="w-4 h-4" />
                        </a>
                      )}
                      {episode.platforms.youtube !== "" && (
                        <a 
                          href={episode.platforms.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-red-500 hover:text-red-600 transition-colors"
                        >
                          <Youtube className="w-4 h-4" />
                        </a>
                      )}
                      {episode.platforms.apple !== "" && (
                        <a 
                          href={episode.platforms.apple}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-800 hover:text-gray-900 transition-colors"
                        >
                          <Headphones className="w-4 h-4" />
                        </a>
                      )}
                      {episode.platforms.amazon !== "" && (
                        <a 
                          href={episode.platforms.amazon}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-orange-500 hover:text-orange-600 transition-colors"
                        >
                          <ShoppingBag className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* Listen Button */}
                <a
                  href="/Episodes"
                  className="inline-flex items-center gap-2 text-[#5944e4] hover:text-purple-600 font-medium text-sm group-hover:gap-3 transition-all"
                >
                  <Play className="w-4 h-4" />
                  Listen Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div variants={fadeIn} className="text-center">
          <a
            href="/Episodes"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#5944e4] hover:bg-purple-600 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View All Episodes
            <Play className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PodcastPreview;