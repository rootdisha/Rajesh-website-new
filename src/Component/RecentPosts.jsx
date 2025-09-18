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

export default function NewspaperSection() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16 flex flex-col md:flex-row gap-12">
    
      {/* Right Column - Recent Posts (Sticky) */}
      <div className="flex-1">
        <div className="sticky top-24">
          <div className="flex items-center mb-4">
            <div className="w-12 h-1 bg-[#5944e4] mr-3"></div>
            <h3 className="text-2xl font-bold">Recent Posts</h3>
          </div>

          <div className="space-y-6">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                className="flex gap-4 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm md:text-base">{post.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">Read more →</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
