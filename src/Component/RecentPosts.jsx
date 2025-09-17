import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


import postImg1 from "../Images/business-person-looking-finance-graphs.jpg";
import postImg2 from "../Images/vintage-collage-frame-wallpaper-background-paper-texture-with-design-space.jpg";
import postImg3 from "../Images/saas-concept-collage.jpg";

const posts = [
  { img: postImg1, title: "Want hyper-growth for your Platform? Focus on flywheel" },
  { img: postImg2, title: "Alice in Wonderland: Lost Product Managers, feature treadmills & irreverent customers — Part I" },
  { img: postImg3, title: "Alice in Wonderland: Lost Product Managers — insights, a match-made in heaven & the new holy grail — Part II" },
];

const RecentPosts = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-slate-50 to-indigo-50 py-20 px-6 overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute -top-40 -left-40 w-72 h-72 bg-[#5944E4]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-[#5944E4]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Recent <span className="text-[#5944E4]">Posts</span>
        </motion.h2>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {posts.map((post, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 overflow-hidden cursor-pointer border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-56 md:h-48 object-cover rounded-t-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5944E4]/20 via-transparent rounded-t-2xl"></div>
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-snug mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500">Read more →</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RecentPosts;
