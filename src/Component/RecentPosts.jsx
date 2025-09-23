import React from "react";
import { motion } from "framer-motion";
import postImg1 from "../Images/business-person-looking-finance-graphs.jpg";
import postImg2 from "../Images/vintage-collage-frame-wallpaper-background-paper-texture-with-design-space.jpg";
import postImg3 from "../Images/saas-concept-collage.jpg";

const posts = [
  { img: postImg1, title: "Want hyper-growth for your Platform? Focus on flywheel" },
  { img: postImg2, title: "Alice in Wonderland: Lost Product Managers, feature treadmills & irreverent customers — Part I" },
  { img: postImg3, title: "Alice in Wonderland: Lost Product Managers — insights, a match-made in heaven & the new holy grail — Part II" },
];

export default function RecentPosts() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="flex items-center justify-center mb-8">
        <div className="w-12 h-1 bg-[#5944e4] mr-3"></div>
        <h3 className="text-2xl font-bold">Recent Posts</h3>
      </div>

      {/* Posts Row Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            className="flex flex-col cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 text-sm md:text-base mb-2">
                {post.title}
              </h4>
              <p className="text-xs text-gray-500 group-hover:text-[#5944e4] transition-colors">
                Read more →
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
