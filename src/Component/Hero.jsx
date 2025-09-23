import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, User, Briefcase, Star, Play, ChevronDown } from "lucide-react";
import heroImg from "../assets/Images/ChatGPT_Image_Aug_11__2025__05_27_45_PM-removebg-preview.png";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 overflow-hidden pt-20 md:pt-5">
      {/* Background floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#5944E4]/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-bl from-[#5944E4]/15 to-blue-400/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-tr from-indigo-400/20 to-[#5944E4]/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-16 lg:py-24">
          
          {/* Left content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left flex flex-col justify-center">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5944E4]/10 to-purple-500/10 backdrop-blur-sm border border-[#5944E4]/20 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-[#5944E4] rounded-full animate-pulse"></div>
                <span className="text-[#5944E4] font-semibold text-sm tracking-wide">RAJESH CHANDRAN</span>
              </div>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-4xl font-bold leading-tight">
                <span className="text-gray-900">"Man cannot discover new oceans unless he has the courage to lose sight of the shore"</span>
                {/* <br />
                <span className="bg-gradient-to-r from-[#5944E4] via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  ideas & creativity
                </span>
                <br /> */}
                {/* <span className="text-gray-700">for the modern web</span> */}
              </h1>
              <em>Be Positive. Be True. Be Kind - Roy T. Bennett</em>
              <div className="w-16 h-1 bg-gradient-to-r from-[#5944E4] to-purple-500 mx-auto lg:mx-0 rounded-full"></div>
            </div>

            {/* Description */}
            {/* <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Join{' '}
              <span className="inline-flex items-center gap-1 font-bold text-[#5944E4]">
                <Star className="w-4 h-4 fill-current" />
                70,000+
              </span>{' '}
              readers exploring bold ideas in technology, design, and product strategy.
            </p> */}

            {/* Email subscribe */}
            <div className="w-full max-w-lg mx-auto lg:mx-0 flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#5944E4] focus:ring-4 focus:ring-[#5944E4]/10 outline-none transition-all bg-white/80 backdrop-blur-sm shadow-sm text-base"
                />
              </div>
              <button
                onClick={handleSubscribe}
                className="group bg-gradient-to-r from-[#5944E4] to-purple-600 hover:from-[#4831D4] hover:to-purple-700 text-white px-6 sm:px-8 py-4 rounded-2xl font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                {isSubscribed ? (
                  <span>Subscribed!</span>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>        
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start max-w-lg mx-auto lg:mx-0 mt-6">
              <a
                href="/About_Me"
                className="group flex items-center justify-center gap-3 px-8 py-4 
                          bg-white border-2 border-[#5944E4] text-[#5944E4] font-semibold 
                          rounded-2xl hover:bg-[#5944E4] hover:text-white transition-all 
                          shadow-md hover:shadow-lg transform hover:-translate-y-1 
                          flex-1 sm:flex-none"
              >
                <User className="w-5 h-5" />
                About Me
              </a>

              {/* <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-2xl hover:bg-gray-100 hover:border-gray-400 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 flex-1 sm:flex-none"> */}
              <a
                href="/PodcastArtisanPodcast"
                className="group flex items-center justify-center gap-3 px-8 py-4 
                          bg-white border-2 border-[#5944E4] text-[#5944E4] font-semibold 
                          rounded-2xl hover:bg-[#5944E4] hover:text-white transition-all 
                          shadow-md hover:shadow-lg transform hover:-translate-y-1 
                          flex-1 sm:flex-none"
              >
                <Briefcase className="w-5 h-5" /> 
                My Work
                </a>
              {/* </button> */}
            </div>

            {/* Social proof */}
            
          </div>

          {/* Right content */}
          <div className="flex items-center justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="relative z-10 bg-gradient-to-br from-white via-gray-50 to-[#5944E4]/5 rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100/50 backdrop-blur-sm">
                <img
                  src={heroImg}
                  alt="Rajesh Chandran"
                  className="w-full h-auto rounded-2xl object-contain shadow-lg mx-auto"
                />
                {/* Decorative floating badges */}
                <div className="absolute -top-6 left-4 lg:left-8 bg-white rounded-full px-3 py-2 shadow-lg border border-gray-100 z-20">
                  {/* <div className="flex items-center gap-2 text-xs lg:text-sm font-medium text-gray-700"> */}
                    {/* <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Available for projects</span> */}
                  {/* </div> */}
                </div>
                {/* <div className="absolute -bottom-4 right-4 lg:right-8 bg-white rounded-full px-3 py-2 shadow-lg border border-gray-100 z-20">
                  <div className="flex items-center gap-2 text-xs lg:text-sm font-medium text-gray-700">
                    <Play className="w-3 h-3 lg:w-4 lg:h-4 text-[#5944E4]" />
                    <span>Watch intro</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-xs uppercase tracking-wide">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
