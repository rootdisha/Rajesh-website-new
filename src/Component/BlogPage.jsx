import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ExternalLink, Filter, Search, ArrowRight, BookOpen, Clock } from 'lucide-react';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      title: "Want hyper-growth for your Platform? Focus on flywheel",
      url: "https://rchandran78.medium.com/want-massive-non-linear-growth-build-a-platform-flywheel-60ab6b67d1f6",
      date: "Sep 3, 2021",
      description: "Deep dive into building platform flywheels that create sustainable competitive advantages and drive exponential growth.",
      category: "Strategy",
      readTime: "4 min read",
      excerpt: "Buried in Postman’s recent massive Series D investment round [USD225M] announcement was a quaint reference by their founder Abhinav Asthana to the “Postman flywheel”. Here he laid down their journey starting with how internal development teams initially used the Postman API platform to build, test and manage their APIs and collaborate with other internal teams which then had a significant compounding effect. Eventually, this morphed into public API networks [if customer chose to use it]. Postman also offers demo accounts for customers to access and try APIs in a sandbox environment. By creating both public and private API networks and becoming a go-to destination developers globally, Postman effectively managed to achieve the revered “flywheel effect” and catapulted to Unicorn status."
    },
    {
      title: "Stripe CEO's Letter: Product Strategy Masterclass",
      url: "https://rchandran78.medium.com/stripe-ceos-letter-product-strategy-masterclass-6a10251360ab",
      date: "Apr 28, 2022",
      description: "Analyzing Stripe's strategic approach through their CEO's annual letter and what product leaders can learn.",
      category: "Leadership",
      readTime: "2 min read",
      excerpt: "It is said that clarity of thought represents the highest form of human intelligence. Partrick Collison’s [Stripe CEO] recent stakeholder simple and humble letter [https://stripe.com/files/stripe-2021-update.pdf]is a fine example of this species and has several valuable nuggets that catch the eye."
    },
    {
      title: "Hard and Less Understood Things About Product Leadership",
      url: "https://rchandran78.medium.com/hard-and-less-understood-things-about-product-leadership-ba7e2da11301",
      date: "Aug 2, 2021",
      description: "The nuanced challenges of product leadership that aren't covered in most playbooks.",
      category: "Leadership",
      readTime: "5 min read",
      excerpt: "Congrats ! If you are reading this, you either have become or are well on your way to becoming a Product Leader in your organisation or startup. There are a number of exciting new dimensions that come with this role including ability to take final call on product roadmap(s), create new org functions, plus witness the tangible business impact that product(s) create before your very eyes."
    },
    {
      title: "Hold My Data: Demystifying AI Product Management - Part I",
      url: "https://rchandran78.medium.com/hold-my-data-demystifying-ai-product-management-part-i-bd387b9357d0",
      date: "Jul 18, 2021",
      description: "First part of a series exploring the unique challenges and opportunities in AI product management.",
      category: "AI/ML",
      readTime: "5 min read",
      excerpt: "“What is AI Product Management and is there such a thing as an AI Product Manager?” a Technology leader asked me recently albeit with some concern. Just as organisations and teams are grappling with data and how to build intelligent products powered by AI, some of us on the product side are grappling with an entirely different question….what is AI Product Management and what kind of magical cocktail of skills, experience and domain expertise is needed to make this work esp. given a lot of the Technology and business building blocks are still being defined."
    },
    {
      title: "New Product Ideas: Sanity Checklist (Top 15)",
      url: "https://rchandran78.medium.com/new-product-ideas-sanity-checklist-top-15-b6a24309a71",
      date: "Aug 25, 2021",
      description: "A comprehensive checklist for validating new product ideas before investing significant resources.",
      category: "Strategy",
      readTime: "3 min read",
      excerpt: "Imagine this. You have just wrapped up a brainstorming session with the team and are convinced that you have identified the next “cool” product idea or feature(s) and can’t wait to get it out the door. Before you decide to cross the chasm and hit COMMIT on your roadmap a) PAUSE and take a deep breath b) ponder about the new product idea checklist-- WAIT. What checklist you say ? The team is excited, customers & sellers are interested and there’s a massive TAM waiting to be tapped [maybe] so let’s build and ship, right ? It can be overwhelming initially to do the cost-benefit analysis or determine opportunity cost so I decided to create & use a sanity checklist before deciding to invest more time on a given opportunity. Here are my all time Top 15 favorites"
    },
    {
      title: "Alice in Wonderland: Lost Product Managers - Insights & Holy Grail",
      url: "https://rchandran78.medium.com/alice-in-wonderland-lost-product-managers-insights-a-match-made-in-heaven-the-new-holy-grail-c160dcd1ecfb",
      date: "Apr 3, 2023",
      description: "Part II of the Alice in Wonderland series exploring insights and the new holy grail of product management.",
      category: "Product Management",
      readTime: "4 min read",
      excerpt: "This is part II of a series I am writing on the challenges faced by modern-day product managers and specific measures on how to solve them. For part I, see: <Alice In Wonderland: Lost Product Managers — Part I>"
    },
    {
      title: "Before Becoming a Product/Tech Mentor",
      url: "https://rchandran78.medium.com/before-becoming-a-product-tech-mentor-e933f3fddd54",
      date: "Oct 11, 2020",
      description: "Essential considerations and preparations for those aspiring to become effective product and tech mentors.",
      category: "Leadership",
      readTime: "3 min read",
      excerpt: "Congrats. You have recently been approached to be or nominated to become a Product or Tech mentor. This is a unique milestone in your professional journey that doesn’t come easily. Not everyone gets asked to mentor or guide an organisation however large or small. I have had the honour of being a mentor and before you jump in with both feet and say YES, take a deep breath and considering the following"
    },
    {
      title: "Notes to Self: What the Last Decade Has Taught/Untaught Me",
      url: "https://rchandran78.medium.com/notes-to-self-what-the-last-decade-has-taught-untaught-me-ce15366ca44c",
      date: "Jan 4, 2020",
      description: "Personal reflections on a decade of learning, unlearning, and growth in the tech industry.",
      category: "Personal",
      readTime: "4 min read",
      excerpt: "At the turn of last decade, WhatsApp and Instagram had just come into existence, Elon Musk’s SpaceX was beginning to spread it’s wings, both Uber & Greta Thunberg had been just born. As we reflect on a new decade, to say the last decade passed by quickly would be an understatement. On a personal front, I moved countries, changed jobs, had a shoulder operated on and have been raising a family."
    },
    {
      title: "Notes from Customer Experience (CX) Trenches - Part II",
      url: "https://rchandran78.medium.com/notes-from-customer-experience-cx-trenches-part-ii-9b02d68478c8",
      date: "Sep 3, 2019",
      description: "Continued insights from the front lines of customer experience design and implementation.",
      category: "Customer Experience",
      readTime: "3 min read",
      excerpt: "This is Part II of a series on Customer Experience I had started earlier. Part II covers Customer Experience metrics, telemetry, culture & Leadership while Part I focuses on customer journey, customer experience[CX] definition and new skills/roles needed to build an organization."
    },
    {
      title: "Alice in Wonderland: Lost Product Managers - Feature Treadmills",
      url: "https://rchandran78.medium.com/alice-in-wonderland-lost-product-managers-feature-treadmills-missing-economics-part-i-f383cbb40dc5",
      date: "Feb 20, 2023",
      description: "Part I exploring the trap of feature treadmills and missing economics in product management.",
      category: "Product Management",
      readTime: "3 min read",
      excerpt: "Present-day PM Conundrum: The modern day product manager [PM] is often the Alice in Wonderland confused as a “victim of prioritisation” with the ever shifting sand dunes of product priorities. This could be dictated by the new incoming CEO/product leader, non-validated annual planning cycle output(s), informal leadership retreats or worse herd mentality based on a market transitions [remember IoT/IIoT], technology breakthroughs[blockchain, crypto, Web3.0] which can wash away months or several quarters of meticulous planning and execution meant to solve real customer problems and instead pivot to a new shiny object."
    },
    {
      title: "The Journey to Intelligent IT",
      url: "https://rchandran78.medium.com/the-journey-to-intelligent-it-c3a8d2139a0a",
      date: "Jul 16, 2021",
      description: "Exploring the evolution and future of intelligent IT systems and their impact on business operations.",
      category: "Technology",
      readTime: "3 min read",
      excerpt: "In late 2017, Gartner coined the term AIOps [originally Algorithmic IT Operations] now fondly called Artificial Intelligence for IT Operations to highlight the growing practice of using analytics/machine learning on plethora of data source(s) within IT infrastructure to deliver actionable insights. This term has acquired broader dimensions in the industry and has been applied to area(s) like closed-loop automation, auto-remediate esp. when responding to security threats and increasingly Autonomous or self-governing IT."
    },
    {
      title: "Anatomy of a Poor Product Demo",
      url: "https://rchandran78.medium.com/anatomy-of-a-poor-product-demo-1290ac0467cd",
      date: "Jul 7, 2021",
      description: "Dissecting what makes product demos fail and how to create compelling, effective demonstrations.",
      category: "Product Management",
      readTime: "4 min read",
      excerpt: "In his now legendary iPhone demonstration , Steve Jobs juggled between a bunch of phones on-stage, had a dedicated portable cell tower for lightning fast connectivity and performed a specific sequence of actions on the new iPhone device to deliver a magical experience."
    }
  ];

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort the array by date (most recent first)
  const sortedArticles = filteredPosts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA; // For descending order (newest first)
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  // Blog Detail View
  if (selectedPost) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white"
      >
        {/* Header */}
        <div className="bg-[#5944e4] text-white pt-12">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <button
              onClick={() => setSelectedPost(null)}
              className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
              Back to Blog
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full">
                  {selectedPost.category}
                </span>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(selectedPost.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {selectedPost.readTime}
                </div>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
                {selectedPost.title}
              </h1>
              
              <p className="text-white/80 text-lg">
                {selectedPost.description}
              </p>

              <div className="flex gap-3">
                <a 
                  href={selectedPost.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium hover:bg-white/30 transition-colors flex items-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  Read on Medium
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="prose prose-lg max-w-none">
            {/* Article Preview */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 mb-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Article Preview</h3>
              
              <div className="text-gray-700 leading-relaxed text-lg mb-6">
                <p className="mb-4">{selectedPost.excerpt}</p>
                <p className="text-gray-600 italic">
                  This is a preview of the full article. Click the button above to read the complete piece on Medium.
                </p>
              </div>

              {/* Call to Action */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <BookOpen className="w-12 h-12 text-[#5944e4] mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Continue Reading on Medium</h4>
                <p className="text-gray-600 mb-4">
                  Get the full insights, examples, and actionable takeaways in the complete article.
                </p>
                <a 
                  href={selectedPost.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#5944e4] hover:bg-[#4a3bc7] text-white px-6 py-3 rounded-full font-medium transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Read Full Article
                </a>
              </div>
            </div>

            {/* Additional Context */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-bold text-blue-900 mb-2">About This Article</h4>
                <p className="text-blue-800 text-sm">
                  This piece is part of my ongoing series exploring practical product management challenges and solutions based on real-world experience.
                </p>
              </div>
              <div className="bg-purple-50 rounded-xl p-6">
                <h4 className="font-bold text-purple-900 mb-2">More Like This</h4>
                <p className="text-purple-800 text-sm">
                  Browse other articles in the "{selectedPost.category}" category for related insights and frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Main Blog List View
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 pt-20">
              Blog
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Insights on product strategy, leadership, and building high-performing teams. 
              Real experiences from the trenches of tech and product management.
            </p>
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
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-full pl-12 pr-6 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5944e4] focus:border-transparent transition-all duration-300"
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
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchTerm}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {sortedArticles.map((post, index) => (
              <motion.article
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#5944e4] hover:shadow-xl transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="bg-[#5944e4]/10 text-[#5944e4] px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
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

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5944e4] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.description}
                  </p>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <button className="flex items-center gap-2 text-[#5944e4] hover:text-[#4a3bc7] text-sm font-medium transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <a 
                      href={post.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-gray-500 hover:text-[#5944e4] text-sm transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Medium
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {sortedArticles.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl text-gray-600 mb-2">No articles found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;