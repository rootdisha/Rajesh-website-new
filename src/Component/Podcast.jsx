import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Play, ExternalLink, Filter, ArrowLeft, Share2, Heart, Download, FileText, Music, Youtube, Headphones, ShoppingBag, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { 
  SiYoutube, 
  SiAmazonmusic, 
  SiApplepodcasts, 
  SiBlogger 
} from "react-icons/si";
{/* <SiYoutube size={32} color="#FF0000" />
<SiAmazonmusic size={32} color="#FF9900" />
<SiApplepodcasts size={32} color="#9933FF" />
<SiBlogger size={32} color="#FF5722" /> */}


const Episodes = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [];
  // const MAX_EPISODE_NUMBER = 10;

  // Add newest episode ON TOP. index 0.
  const episodes = [
    // Ep 10
    {
      num: 10,
      title: "Decoding Travel Innovation: An episode with Prasanna",
      description: "In this episode of the Product Artisan podcast, Prasanna Veeraswamy, a seasoned product leader with extensive experience in the B2B and B2C sectors, who has also worked across multiple countries globally. Prasanna shares his journey from an engineering leader at Microsoft to taking on various product leadership roles within the travel industry, attributed to his passion for travel and strategic career advice.",
      fullDescription: "In this episode of the Product Artisan podcast, Prasanna Veeraswamy, a seasoned product leader with extensive experience in the B2B and B2C sectors, who has also worked across multiple countries globally. Prasanna shares his journey from an engineering leader at Microsoft to taking on various product leadership roles within the travel industry, attributed to his passion for travel and strategic career advice. The discussion covers the evolution of travel products, the impact of international experience on product leadership, and the role of data in developing and innovating in the travel space. Prasanna also discusses the pivotal role of Gen AI in enhancing productivity within product management and provides insights into building strong cross-functional product teams. Additionally, the conversation touches upon the challenges and opportunities within the travel industry, highlighting Airbnb's unique position through COVID-19 and the potential for innovation in travel products. Prasanna emphasizes the importance of data-driven development, behavioral analytics, and leveraging tools like Amplitude and Mixpanel for insights. The dialogue concludes with perspectives on future innovations in travel, especially around enhancing the experience of travelers through technology and AI.",
      date: "2024-03-07",
      duration: "",
      category: "Business",
      featured: true,
      video: "",
      tags: [],
      keyTopics: ["Product Marketing Strategy", "Generative AI Impact", "Product Naming", "Strategic Partnerships"],
      guestInfo: "",
      platforms: {
        spotify: "",
        youtube: "",
        apple: "",
        amazon: ""
      },
      showNotes: `**Show Notes**

In this episode, Andrea, a seasoned professional in product marketing, shares insights from her multifaceted career journey as a product marketer, advisor, blogger, and author of the book "The Product Momentum Gap." She walks us through her impactful roles at Amilia Technologies, Brandwatch, Zendesk, and ProdPad, delving into her experiences in product marketing for companies like Trint, Mindstone, Airfocus, and Unmind. The conversation explores the essence of product marketing, its relevance to product managers, and the characteristics that define a great product marketer. Andrea reflects on her early career in support, customer success, and product growth, revealing how these roles shaped her perspectives on product marketing. Andrea also explores the impact of Generative AI on product marketing, providing a forward-looking perspective on the intersection of technology and marketing strategies.

**Timeline:**
00:00 Welcome to the Product Artisan Podcast
00:06 Introducing Prasanna Veeraswamy: A Global Product Leader
00:58 The Journey from Engineering to Product Leadership in Travel
03:12 Building Products in the Travel Industry: Insights and Experiences
09:29 The Importance of Data in Product Development
11:24 Navigating Privacy and Data Utilization in Travel Products
13:01 Impact of COVID-19 and Airbnb on the Travel Industry
18:58 Exploring the Future of Travel Products and Industry Trends
19:39 Exploring the Untapped Potential in Travel Innovation
20:51 The Role of Conversational AI in Revolutionizing Travel Planning
22:08 Navigating the Diverse Responses of Conversational AI Tools
26:43 The Impact of Generative AI on Product Management and Innovation
29:03 Building and Leading Cross-Functional Product Teams
33:25 Cultivating a Culture of Learning and Adaptability in Product Teams`,
      transcript: `**Transcript**

Transcript
Product Artisan Podcast with Andrea
Fri. Feb 23, 2024

0:28 - andrea
is.

0:29 - Unidentified Speaker
Okay.

0:30 - Thales Miletus
Just want to make sure. Okay. Um, all right. Um, and currently you're the product marketing lead at Unmind, right?

0:42 - andrea
Uh, senior product marketing manager, but yeah. Okay.

0:45 - Thales Miletus
Well, is that the title you would prefer to go by?

0:48 - andrea
Uh, that's the official title. So let's go with that one. Okay.

0:53 - Thales Miletus
Senior product marketing.

0:58 - Unidentified Speaker
All right.

1:07 - Thales Miletus
I'm ready whenever you are. Ready to go? Yeah, let's do it.

1:12 - andrea
Okay.

1:13 - Thales Miletus
So I mean, I think I mentioned this earlier. It's the video is on, but the video is more for our interaction. Um, that's fine.

1:21 - andrea
When we, when we posted, it's going to be mostly, um, audio.

1:26 - Thales Miletus
Um, so yeah.

1:33 - Unidentified Speaker
Okay.

1:37 - Thales Miletus
Um, second. Hi, welcome to the Product Partisan podcast. My name is Rajesh and I'm your host. With me today, I have a special guest, andrea. Andrea is a product marketer, advisor, blogger, and author, and she authored the book, The product momentum gap. Andrea comes with extensive experience in plus support, growth, product marketing, and she's currently the senior product marketing manager at Unmined. Andrea, welcome to the Product Partisan podcast.....`,
      downloadUrl: "#",
      pdfUrl: "#",
      blogUrl: "#",
      likes: 234,
      views: 1540
    },
    // Ep 9
    {
      num: 9,
      title: "Navigating the Challenges of Platform Product Management in the Age of Generative AI",
      description: "In this episode, Ravi shares insights from his dynamic career spanning startups, non-profits, and major tech companies. From co-founding Enlite Networks to leadership roles at LibForAll Foundation, Lucidworks, and ServiceNow, Ravi discusses lessons learned in product building, emphasising purpose-driven decision-making and execution rigour.", 
      fullDescription: "In this episode, Ravi shares insights from his dynamic career spanning startups, non-profits, and major tech companies. From co-founding Enlite Networks to leadership roles at LibForAll Foundation, Lucidworks, and ServiceNow, Ravi discusses lessons learned in product building, emphasising purpose-driven decision-making and execution rigour. He explores the impact of Generative AI on product management, outlines the components of product strategy, and introduces the new Jobs to be Done in the era of AI. This podcast provides a concise yet comprehensive dive into Ravi's rich experiences, offering valuable insights for product professionals navigating diverse tech landscapes.",
      date: "2024-02-23",
      duration: "",
      category: "Design",
      featured: false,
      video: "",
      tags: [],
      keyTopics: ["Design Tokens", "Component Libraries", "Design-Dev Collaboration", "Accessibility"],
      guestInfo: "",
      platforms: {
        spotify: "https://open.spotify.com/episode/5WDnSsWtX1TPaZ3KnofxIl?si=YAXcQJHKTWKDQdTbdcYJSw",
        youtube: "https://www.youtube.com/watch?list=TLGGKMlFnWTG-NgyMjA5MjAyNQ&v=jcRR20dJ-WQ",
        apple: "https://podcasts.apple.com/in/podcast/product-management-ai-what-does-the-future-hold-with/id1699945540?i=1000651534167",
        amazon: "https://music.amazon.in/podcasts/bdc72624-d8d2-44fe-a96c-222b5b309eb4/episodes/1e84abbc-27f2-4dbf-a907-efd2b24057a1/the-product-artisan-podcast-product-management-ai---what-does-the-future-hold-with-ravi-krishnamurthy"
      },
      showNotes: `**Show Notes**

Design systems expert Sarah Johnson joins us to discuss the evolution of design systems and their impact on modern product development. We explore emerging trends, tools, and the role of AI in design systems.

**Timeline:**
00:00 Welcome to the Product Artisan Podcast
00:35 Ravi's Journey from Research Scientist to Product Leader
00:53 The Startup Experience: Enlightened Networks and the Path to Product Management
05:30 Transitioning to Nonprofit: The Live for All Foundation
10:39 Insights on Stakeholder Management and Communication
15:02 From Nonprofit to AI and Platform Product Management
20:12 The Evolution of Product Management with Generative AI
22:39 Navigating Uncertainty in Decision Making
24:10 The Evolution of Platform Product Management in the AI Era
26:51 The Shift from Execution to Strategic Thinking in Product Management
27:42 The Role of Product Managers in the Age of Generative AI
33:39 Embracing Agility and Human-Centric Approaches in Product Management
37:02 Governance, Risk Management, and the Moral Compass in AI Product Management
41:16 The Three Rs Framework for Enterprise AI: ROI, Risk, and Roundabout`,
      transcript: `**Transcript**

Product Artisan Podcast w. Ravi Krishamurthy
Fri. Feb 23, 2024

0:55 - Ravi Krishnamurthy
Hey, good. Good evening. How are you, man?

1:00 - Thales Miletus
Hey, I'm good. I'm good. How are you? Good morning. Very good.

1:03 - Ravi Krishnamurthy
Good, good, good. Happy to be here. Let me unblur my background.

1:15 - Thales Miletus
Yeah, yeah. So this is going to be audio only, but the video is more of a, more of an interaction.

1:24 - Ravi Krishnamurthy
Um, you know, so I understand, but I'm just in case you're recording or something.

1:31 - Multiple Speakers
Yeah, absolutely. No, thanks. Um, so where, where is this?

1:36 - Unidentified Speaker
This is, um, this is my house. I'm in Santa Clara. I mean, Sunnyvale.

1:41 - Ravi Krishnamurthy
This is my house in Sunnyvale.

1:45 - Thales Miletus
Very close to the Apple campus, that spaceship campus.

1:48 - Ravi Krishnamurthy
Very close to that.....`,
      downloadUrl: "#",
      pdfUrl: "#",
      blogUrl: "#",
      likes: 189,
      views: 1200
    },
    // Ep 8
    {
      num: 8,
      title: "Navigating the Product Landscape: A Conversation with Andrea Saez",
      description: "In this episode, Andrea, a seasoned professional in product marketing, shares insights from her multifaceted career journey as a product marketer, advisor, blogger, and author of the book The Product Momentum Gap.",
      fullDescription: "The funding landscape for startups has never been more complex. In this episode, we have an honest conversation about the trade-offs between bootstrapping and raising venture capital. We explore real-world examples of successful companies that chose different paths, discuss the hidden costs of each approach, and provide a framework for entrepreneurs to make informed decisions about funding.",
      date: "2024-02-23",
      duration: "",
      category: "Business",
      featured: true,
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      tags: [],
      keyTopics: ["Bootstrapping Strategies", "VC Process", "Alternative Funding", "Financial Planning"],
      guestInfo: "",
      platforms: {
        spotify: "https://open.spotify.com/episode/6E1CPf07mX0LqoAbxUYtAm?si=0d_IONUpR8qDVw9OMgOVgA",
        youtube: "https://www.youtube.com/watch?v=nWzURXlC56s&list=TLGG3LwOfcOzrO8yMjA5MjAyNQ",
        apple: "https://podcasts.apple.com/in/podcast/product-management-product-marketing-forgotten-alliance/id1699945540?i=1000650115803",
        amazon: "https://music.amazon.in/podcasts/bdc72624-d8d2-44fe-a96c-222b5b309eb4/episodes/0f5ed2c3-94ad-439f-b7f2-ae6b860ef567/the-product-artisan-podcast-product-management-product-marketing---forgotten-alliance-with-andrea-saez",
        blog: "https://www.rajesh-chandran.com/blogs-episode-8-maximizing-product-value-and-reach",
      },
      showNotes: `**Show Notes**

In this episode, Andrea, a seasoned professional in product marketing, shares insights from her multifaceted career journey as a product marketer, advisor, blogger, and author of the book "The Product Momentum Gap."

She walks us through her impactful roles at Amilia Technologies, Brandwatch, Zendesk, and ProdPad, delving into her experiences in product marketing for companies like Trint, Mindstone, Airfocus, and Unmind.

The conversation explores the essence of product marketing, its relevance to product managers, and the characteristics that define a great product marketer. Andrea reflects on her early career in support, customer success, and product growth, revealing how these roles shaped her perspectives on product marketing.

Andrea also explores the impact of Generative AI on product marketing, providing a forward-looking perspective on the intersection of technology and marketing strategies.
**Timeline:**
00:00 Welcome to the Product Artisan Podcast
00:32 Diving Deep into Product Marketing with Andrea Saiz
02:56 Andrea's Journey: From Support Roles to Product Marketing Mastery
04:49 The Evolution of Product Marketing in a PLG Era
06:12 Strategic Partnerships: Product Marketing and Product Management
18:17 Leveraging Tools for Effective Product Marketing
20:42 Navigating the World of Generative AI in Product Marketing
25:25 The Art of Product Naming and Packaging
28:20 Empowering Product Managers to Partner with Product Marketing
30:00 Wrapping Up: How to Connect with Andrea`,
      transcript: `**Transcript**

Product Artisan Podcast with Andrea
Fri. Feb 23, 2024

0:28 - andrea
is.

0:29 - Unidentified Speaker
Okay.

0:30 - Thales Miletus
Just want to make sure. Okay. Um, all right. Um, and currently you're the product marketing lead at Unmind, right?

0:42 - andrea
Uh, senior product marketing manager, but yeah. Okay.

0:45 - Thales Miletus
Well, is that the title you would prefer to go by?

0:48 - andrea
Uh, that's the official title. So let's go with that one. Okay.

0:53 - Thales Miletus
Senior product marketing.

0:58 - Unidentified Speaker
All right.

1:07 - Thales Miletus
I'm ready whenever you are. Ready to go? Yeah, let's do it.

1:12 - andrea
Okay.

1:13 - Thales Miletus
So I mean, I think I mentioned this earlier. It's the video is on, but the video is more for our interaction. Um, that's fine.

1:21 - andrea
When we, when we posted, it's going to be mostly, um, audio.

1:26 - Thales Miletus
Um, so yeah.

1:33 - Unidentified Speaker
Okay.

1:37 - Thales Miletus
Um, second. Hi, welcome to the Product Partisan podcast. My name is Rajesh and I'm your host. With me today, I have a special guest, andrea. Andrea is a product marketer, advisor, blogger, and author, and she authored the book, The product momentum gap. Andrea comes with extensive experience in plus support, growth, product marketing, and she's currently the senior product marketing manager at Unmined. Andrea, welcome to the Product Partisan podcast.....`,
      downloadUrl: "#",
      pdfUrl: "#",
      blogUrl: "#",
      likes: 312,
      views: 2100
    },
    // Ep 7
    {
      num: 7,
      title: "Navigating the Nonprofit Product Management Landscape: A Journey of Impact and Reflection",
      description: "In this episode, Sindhu Kandipati takes us on a journey through her remarkable career trajectory, from her early roles at Microsoft to her impactful contributions at CERN, Eli Lilly, and the Wadhwani Foundation. She delves into her diverse experiences in program management, and brand management, ultimately explaining the pivotal shift that led her to embrace the world of product management.",
      fullDescription: `In this episode, Sindhu Kandipati takes us on a journey through her remarkable career trajectory, from her early roles at Microsoft to her impactful contributions at CERN, Eli Lilly, and the Wadhwani Foundation. She delves into her diverse experiences in program management, and brand management, ultimately explaining the pivotal shift that led her to embrace the world of product management.
She shares valuable lessons learned during her time at CERN, providing a glimpse into the unique challenges and experiences of working at such a renowned institution. She also explores the framework for product management in the non-profit sector, highlighting key differences from for-profit organisations. The conversation covers essential aspects such as goal setting, product building, and the lifecycle of a product, providing listeners with valuable insights. Drawing from her experiences, Kandipati discusses her book "Leap of Faith," offering perspectives on non-linear career paths and unconventional growth trajectories. This serves as a compelling exploration of a professional journey marked by resilience, adaptability, and a passion for making a meaningful impact.`,
      date: "",
      duration: "",
      category: "Business",
      featured: true,
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      tags: [],
      keyTopics: ["Bootstrapping Strategies", "VC Process", "Alternative Funding", "Financial Planning"],
      guestInfo: "",
      platforms: {
        spotify: "https://open.spotify.com/episode/2BQ7nmgCCNz4l0mDz1F3TN?si=1kli-B_ARAmQDX7SfXwyTQ",
        youtube: "https://www.youtube.com/watch?v=3k8DtCJDnZM&list=TLGG3DJjJuPNFu4yMjA5MjAyNQ",
        apple: "https://podcasts.apple.com/in/podcast/product-management-product-lessons-from-microsoft-cern/id1699945540?i=1000647927193",
        amazon: "https://music.amazon.in/podcasts/bdc72624-d8d2-44fe-a96c-222b5b309eb4/episodes/58465b9d-db58-4cd2-9370-8da18b4ed450/the-product-artisan-podcast-product-management-product-lessons-from-microsoft-cern-non-profits-with-sindhu-kandipati"
      },
      showNotes: `**Show Notes**

In this episode, Sindhu Kandipati takes us on a journey through her remarkable career trajectory, from her early roles at Microsoft to her impactful contributions at CERN, Eli Lilly, and the Wadhwani Foundation. She delves into her diverse experiences in program management, and brand management, ultimately explaining the pivotal shift that led her to embrace the world of product management.

She shares valuable lessons learned during her time at CERN, providing a glimpse into the unique challenges and experiences of working at such a renowned institution. She also explores the framework for product management in the non-profit sector, highlighting key differences from for-profit organisations. The conversation covers essential aspects such as goal setting, product building, and the lifecycle of a product, providing listeners with valuable insights. Drawing from her experiences, Kandipati discusses her book "Leap of Faith," offering perspectives on non-linear career paths and unconventional growth trajectories. This serves as a compelling exploration of a professional journey marked by resilience, adaptability, and a passion for making a meaningful impact.
**Timeline:**
00:00 Welcome to the Product Artisan Podcast
00:28 Sindhu's Unique Career Journey: From Microsoft to Nonprofit
01:42 The Philosophy of Career as a Jungle Gym
03:20 Transitioning to Product Management: A Story of Exploration
10:26 Leveraging Generative AI for Impact at Scale
11:48 The Power of Collaboration in the Nonprofit Sector
14:35 Measuring Impact: Beyond Revenue Metrics
17:38 Generative AI: Experimentation and Scaling
21:12 Product Management in Nonprofit: Execution and Learning
25:11 Breaking into Nonprofit Product Management
31:04 Sindhu's Book: A Leap of Faith`,
      transcript: `**Transcript**

Thu. Mar 7, 2024

4:10 - Unidentified Speaker
Hi, Prasanna. Hey, hello.

4:14 - Prasanna Vee
How are you? Hey, good, good.

4:18 - Thales Miletus
Apologies for the delay. It's been a crazy week. Can you hear me?

4:28 - Prasanna Vee
Yeah, I can.

4:30 - Unidentified Speaker
How about you? You can hear me, right? Yeah, I can hear you. Okay. Yeah.

4:51 - Thales Miletus
So thanks again for taking the time to do this. So I read through some of the links you sent me. Obviously, I looked at your LinkedIn profile. Earlier today, I was reading the CleverTap. I think it was a blog or article you wrote on CleverTap about usage and retention and measuring that, right? So the way we could, I thought we could do this, and again, you know, this is, the outline is just for us to have some kind of a structure. We don't have to live by it, but I would just do an introduction.

5:35 - Thales Miletus
And by the way, this is audio only. The video is more for us to interact, but when we post it, it'll be audio only. But what we've started to do now is, Like when you have something very insightful to say, think of it as a soundbite. Then what we do is we take that and put it with some video captions or something. I'll be sharing all of that with you via email before we publish, so you can review it. But yeah, basically I'll just introduce you, talk about your career timeline based on what's there on LinkedIn........`,
      downloadUrl: "#",
      pdfUrl: "#",
      blogUrl: "#",
      likes: 312,
      views: 2100
    },
//     // Ep 6
//     {
//       num: 6,
//       title: "Navigating the Waves of Ad Tech: A Product Journey with Amit Goel",
//       description: "In this episode, Amit Goel, an industry expert in advertising technology, delves into the dynamic landscape of ad tech, privacy laws, and the transformative role of AI. Key insights include navigating privacy laws' evolution, building globally compliant products, and the success formula behind Amagi's rise. Amit also sheds light on the scaling challenges faced and the transition to TradeDesk, emphasising the role of AI, including generative AI, in shaping the future of ad tech.",
//       fullDescription: "In this episode, Amit Goel, an industry expert in advertising technology, delves into the dynamic landscape of ad tech, privacy laws, and the transformative role of AI. Key insights include navigating privacy laws' evolution, building globally compliant products, and the success formula behind Amagi's rise. Amit also sheds light on the scaling challenges faced and the transition to TradeDesk, emphasising the role of AI, including generative AI, in shaping the future of ad tech.",
//       date: "",
//       duration: "",
//       category: "Business",
//       featured: true,
//       video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
//       tags: [],
//       keyTopics: ["Bootstrapping Strategies", "VC Process", "Alternative Funding", "Financial Planning"],
//       guestInfo: "",
//       platforms: {
//         spotify: "",
//         youtube: "https://www.youtube.com/watch?v=6UmrLlMQcEQ&list=TLGG1hy31PqJ0ggyMjA5MjAyNQ",
//         apple: "",
//         amazon: ""
//       },
//       showNotes: `**Show Notes**

// In this episode, Amit Goel, an industry expert in advertising technology, delves into the dynamic landscape of ad tech, privacy laws, and the transformative role of AI. Key insights include navigating privacy laws' evolution, building globally compliant products, and the success formula behind Amagi's rise. Amit also sheds light on the scaling challenges faced and the transition to TradeDesk, emphasising the role of AI, including generative AI, in shaping the future of ad tech.

// Tune in to explore the intricate interplay between privacy, analytics, and AI in the ad tech industry!
// **Timeline:**
// 00:00 Welcome to the Product Artisan Podcast
// 00:08 Introducing Amit Goel: A Journey Through Ad Tech and Content
// 01:14 Amit's Career Path: From Software Engineer to Product Leader
// 03:27 Innovations and Challenges in the Broadcast and OTT Space
// 11:07 The Entrepreneurial Venture: Patterbuzz and the Challenge of Content Monetization
// 17:25 Transitioning Between Startups and Established Companies: Lessons Learned
// 19:10 The Journey from Nularity to Amagi: A Unicorn Startup's Rise
// 19:37 Innovating with Server-Side Ad Insertion Technology
// 21:02 Navigating the Complex World of Data Privacy and Regulations
// 22:47 Building Analytics and Insights for Publishers
// 24:58 The Secret Sauce Behind Amagi's Success
// 27:16 Scaling to Billions: The Amagi Growth Story
// 29:04 Transition to TradeDesk and the Rise of Data Clean Rooms
// 31:03 Competing with Giants: TradeDesk's Strategy Against Google and Meta
// 32:45 Leveraging AI in AdTech: A Game Changer
// 34:25 The Future of Advertising with Generative AI
// 36:29 Product Building Lessons from a Decade in AdTech
// 39:46 Final Thoughts and Where to Find More Insights `,
//       transcript: `**Transcript**

// 11:11 - Thales Miletus
// Hi, Welcome to the latest edition of the Product Artisan Podcast. My name is Rajesh and I'm your host. With me today I have an exciting guest. Am Amid Goal Product Leader, an entrepreneur specialist in the ad, tech and content industry. Has worked for many years across different trajectories of companies, from established product companies to scale ups to startups, besides founding his own company, and he has lived and worked in multiple countries as well.

// 13:28 - Thales Miletus
// AMD is also a prolific writer and blogger amid Welcome to the Product Artisan podcast.

// 13:36 - Amit Goel
// Thank you by this. It's a pleasure to be here. I'm talking to you today.

// 13:40 - Thales Miletus
// great. I, I mean this is special episode for me because we, we have somebody who's a deep domain specialist. Amit You've been in the content and a tech industry for a very long time and you know, a lot of I would say innovation comes from that industry 1st and then that kind of gets propagated to the rest of the other industries, right? At least that's been my learning. So super excited to have you. With us today. So I noticed like, you know, you, you were currently leading product for trade desk at in your Asia Pack role, where would you like to start 1st?

// 14:25 - Thales Miletus
// I mean, would you like to start from the beginning of your journey in terms of how you got into a tech, content management or How would you like to start this journey?

// 14:38 - Amit Goel
// easy I think let me give you a thirty second update on how my career actually went through from the beginning Other guys in India mostly I started career as a software engineer, writing code, developing various applications. In two thousand one and then in two thousand five I joined a company called nds that's where I entered content industry so nds was one of the world leading ptv companies got acquired to Cisco in twenty twelve but in that company I worked on set to box domain during that time I was fortunate enough to be part of team that launched task and atl in India I'm talking about atl tv And then I worked in Nds as one of the team leads for New Initiatives Group.....

// `,
//       downloadUrl: "#",
//       pdfUrl: "#",
//       blogUrl: "#",
//       likes: 312,
//       views: 2100
//     },
//     // Ep 5
//     {
//       num: 5,
//       title: "The Future of Product Management: Reflecting on the Past and Peeking into 2024",
//       description: "In this podcast episode, Saeed Khan, a seasoned product leader based out of Toronto, shares his insights on the evolution of product management. Saeed discusses his experiences and learnings from his journey in the industry, delving into the importance of problem-solving, innovation, and understanding market needs. He also discusses the impact of Agile on product management, the rise of specialised roles, and the necessity of holistic thinking for successful products.",
//       fullDescription: "In this podcast episode, Saeed Khan, a seasoned product leader based out of Toronto, shares his insights on the evolution of product management. Saeed discusses his experiences and learnings from his journey in the industry, delving into the importance of problem-solving, innovation, and understanding market needs. He also discusses the impact of Agile on product management, the rise of specialised roles, and the necessity of holistic thinking for successful products.",
//       date: "2023-11-15",
//       duration: "",
//       category: "Business",
//       featured: true,
//       video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
//       tags: [],
//       keyTopics: ["Bootstrapping Strategies", "VC Process", "Alternative Funding", "Financial Planning"],
//       guestInfo: "",
//       platforms: {
//         spotify: "",
//         youtube: "",
//         apple: "",
//         amazon: ""
//       },
//       showNotes: `**Show Notes**

// In this podcast episode, Saeed Khan, a seasoned product leader based out of Toronto, shares his insights on the evolution of product management. Saeed discusses his experiences and learnings from his journey in the industry, delving into the importance of problem-solving, innovation, and understanding market needs. He also discusses the impact of Agile on product management, the rise of specialised roles, and the necessity of holistic thinking for successful products. The conversation concludes with expected trends in the industry and the focus on product experience in future advancements.

// **Timeline:**

// 00:00 Introduction and Guest Background

// 01:41 Understanding the Role of a Product Manager

// 03:41 The Importance of Education in Product Management

// 06:26 The Evolution of Product Management

// 07:40 The Role of Innovation in Product Management

// 14:15 The Importance of Customer Research and Insights

// 18:07 The Impact of Technology on Product Management

// 23:53 Understanding the Agile Manifesto

// 24:49 Misconceptions about Agile and its Impact on Product Management

// 27:34 The Shift to Agile and its Consequences

// 28:18 The Role of Product Management in Business Transformation

// 30:38 The Evolution of Product Management Roles

// 36:01 The Future of Product Management

// 40:19 The Importance of Product Experience

// 42:46 Connecting with Saeed and His Future Projects`,
//       transcript: `**Transcript**

// Rajesh Chandran and Saeed Khan
// Wed. Nov 15, 2023

// 4:58 - Saeed Khan
// Hey, how are you?

// 4:59 - Thales Miletus
// Yes, I'm doing good. How are you?

// 5:03 - Saeed Khan
// I'm good.

// 5:08 - Thales Miletus
// it's been a long I don't know it felt like a couple of months but then I looked looked at our last exchange it's been like six seven eight months maybe uh where did the year go I don't know so.

// 5:18 - Saeed Khan
// Yeah, it's been a while actually. I know it's middle of November literally.

// 5:31 - Thales Miletus
// You know what There was a there was a quote I read from some. Some product guy. It's like they are only six months in a year and they are the 1st six months all right. And I, I thought that was a pretty, you know, pragmatic kind of a quote, right? If you don't basically, if you don't get stuff done in the 1st six months. Nothing's gonna happen really. So that was an interesting looking.

// 6:01 - Saeed Khan
// Yeah, no, it's true. Well, I, I mean, like December is a write off usually, the, the summer months tend to kind of not. Not go well either. So it's sort of people on holidays and things like that. January people are sort of recovering from the holidays. So you know, February, March, April, May, June, okay, And then you've got the summers off, September, October, November. People are starting to think about holidays. So yeah, like six, seven months, you're right, It's, it's something like that.

// 6:34 - Thales Miletus
// And then you wonder how stuff actually gets done. Now that you put it that way, I'm, I'm actually blown away. That stuff actually gets done. So. How have you been busy consulting?

// 6:50 - Saeed Khan
// Moderately, I mean things slowed down. I think after about, well, once the summer hit, things slowed down and, but it was, you know, some, it was economic. Are you still there?

// 7:03 - Thales Miletus
// Yeah, yeah, I'm here......

// `,
//       downloadUrl: "#",
//       pdfUrl: "#",
//       blogUrl: "#",
//       likes: 312,
//       views: 2100
//     },
//     // Ep 4
//     {
//       num: 4,
//       title: "Product and Design-Match Made in Heaven?",
//       description: "Product and Design-Match Made in Heaven?",
//       fullDescription: "The funding landscape for startups has never been more complex. In this episode, we have an honest conversation about the trade-offs between bootstrapping and raising venture capital. We explore real-world examples of successful companies that chose different paths, discuss the hidden costs of each approach, and provide a framework for entrepreneurs to make informed decisions about funding.",
//       date: "2023-09-23",
//       duration: "",
//       category: "Business",
//       featured: true,
//       video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
//       tags: [],
//       keyTopics: ["Bootstrapping Strategies", "VC Process", "Alternative Funding", "Financial Planning"],
//       guestInfo: "",
//       platforms: {
//         spotify: "",
//         youtube: "",
//         apple: "",
//         amazon: ""
//       },
//       showNotes: `**Show Notes**

// In this episode of the Product Artisan podcast, Prasanna Veeraswamy, a seasoned product leader with extensive experience in the B2B and B2C sectors, who has also worked across multiple countries globally. Prasanna shares his journey from an engineering leader at Microsoft to taking on various product leadership roles within the travel industry, attributed to his passion for travel and strategic career advice. The discussion covers the evolution of travel products, the impact of international experience on product leadership, and the role of data in developing and innovating in the travel space. Prasanna also discusses the pivotal role of Gen AI in enhancing productivity within product management and provides insights into building strong cross-functional product teams. Additionally, the conversation touches upon the challenges and opportunities within the travel industry, highlighting Airbnb's unique position through COVID-19 and the potential for innovation in travel products. Prasanna emphasizes the importance of data-driven development, behavioral analytics, and leveraging tools like Amplitude and Mixpanel for insights. The dialogue concludes with perspectives on future innovations in travel, especially around enhancing the experience of travelers through technology and AI.
// **Timeline:**
// 00:00 Welcome to the Product Artisan Podcast

// 00:06 Introducing Prasanna Veeraswamy: A Global Product Leader

// 00:58 The Journey from Engineering to Product Leadership in Travel

// 03:12 Building Products in the Travel Industry: Insights and Experiences

// 09:29 The Importance of Data in Product Development

// 11:24 Navigating Privacy and Data Utilization in Travel Products

// 13:01 Impact of COVID-19 and Airbnb on the Travel Industry

// 18:58 Exploring the Future of Travel Products and Industry Trends

// 19:39 Exploring the Untapped Potential in Travel Innovation

// 20:51 The Role of Conversational AI in Revolutionizing Travel Planning

// 22:08 Navigating the Diverse Responses of Conversational AI Tools

// 26:43 The Impact of Generative AI on Product Management and Innovation

// 29:03 Building and Leading Cross-Functional Product Teams


// 33:25 Cultivating a Culture of Learning and Adaptability in Product Teams`,
//       transcript: `**Transcript**

// Zoom Meeting- Shayak
// Sat. Sep 23, 2023

// 0:03 - Thales Miletus
// Hi, welcome to another episode of the Product Artisan Podcast. I'm your host, Rajesh, and with me today I have a fascinating guest. Design Leader for Products He's an Entrepreneur. He's also a well established player in multiple unicorns. Welcome to the Product Artisan Podcast Show Shark.

// 0:30 - Shayak Sen
// Hey, thankss Rajesh for having me here. It's It's an honor and great to kind of come here and get a chance to speak about design. So we are quite excited here, Yeah.

// 0:43 - Thales Miletus
// Okay, great, Shayak You obviously have a very storied journey, in, in product design, and I think the thing that struck me is how you started off your career with your own venture, right? So tell us a little bit about cheesecake, right? That's an interesting name, by the way. Right? How did that end up being this? Design firm that you created? How did that end up shaping you as a as a product design leader? And and what were some of the things that you did while you were there?

// 1:16 - Shayak Sen
// Okay, yeah, I mean that's interesting, Rajesh Uh, but 1st of all let me correct, it is not cheesecake, we, we call it cheese scare, okay, as in cheese scare Crd Okay, so yeah, I mean the story of cheese scare goes back to college. When I was studying at Id Cit, Bombay, I met a couple of my friends from Iit Urki. And we were discussing that we should start something and we wanted to start a company and my friend he wanted to start a services company which dealt in several things like for example software development design and several other things now we have been discussing this since two thousand six two thousand seven iphone launched and I was studying my I was doing my visual communication in idc I bombay and when I saw iphone.

// 2:16 - Shayak Sen
// The launch of iphone, I could see that the world is not going to be the same going forward, right? It's going to completely change. Digital experiences are going to take over our day to day life. So I met, I discussed this with my friends that do you guys want to start a Ux Ui design agency? Ok, And because it was very new, there was not many companies here in India overall who knew what to do about Ux or Ui and whatever Ux Ui. Our product design existed at that point of time was very, very, it was all web based, not much on the mobile, and If you look at the way it used to be, very, very structured....`,
//       downloadUrl: "#",
//       pdfUrl: "#",
//       blogUrl: "#",
//       likes: 312,
//       views: 2100
//     },
//     // Ep 3
//     {
//       num: 3,
//       title: "Product startups (B2B vsB2C)& Creating new product categories",
//       description: "In this episode, Andrea, a seasoned professional in product marketing, shares insights from her multifaceted career journey as a product marketer, advisor, blogger, and author of the book The Product Momentum Gap.",
//       fullDescription: "The funding landscape for startups has never been more complex. In this episode, we have an honest conversation about the trade-offs between bootstrapping and raising venture capital. We explore real-world examples of successful companies that chose different paths, discuss the hidden costs of each approach, and provide a framework for entrepreneurs to make informed decisions about funding.",
//       date: "2023-08-24",
//       duration: "",
//       category: "Business",
//       featured: true,
//       video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
//       tags: [],
//       keyTopics: ["Bootstrapping Strategies", "VC Process", "Alternative Funding", "Financial Planning"],
//       guestInfo: "",
//       platforms: {
//         spotify: "",
//         youtube: "",
//         apple: "",
//         amazon: ""
//       },
//       showNotes: `**Show Notes**

// In this episode, Andrea, a seasoned professional in product marketing, shares insights from her multifaceted career journey as a product marketer, advisor, blogger, and author of the book "The Product Momentum Gap."

// She walks us through her impactful roles at Amilia Technologies, Brandwatch, Zendesk, and ProdPad, delving into her experiences in product marketing for companies like Trint, Mindstone, Airfocus, and Unmind.

// The conversation explores the essence of product marketing, its relevance to product managers, and the characteristics that define a great product marketer. Andrea reflects on her early career in support, customer success, and product growth, revealing how these roles shaped her perspectives on product marketing.

// Andrea also explores the impact of Generative AI on product marketing, providing a forward-looking perspective on the intersection of technology and marketing strategies.
// **Timeline:**
// 00:00 Welcome to the Product Artisan Podcast

// 00:32 Diving Deep into Product Marketing with Andrea Saiz

// 02:56 Andrea's Journey: From Support Roles to Product Marketing Mastery

// 04:49 The Evolution of Product Marketing in a PLG Era

// 06:12 Strategic Partnerships: Product Marketing and Product Management

// 18:17 Leveraging Tools for Effective Product Marketing

// 20:42 Navigating the World of Generative AI in Product Marketing

// 25:25 The Art of Product Naming and Packaging

// 28:20 Empowering Product Managers to Partner with Product Marketing

// 30:00 Wrapping Up: How to Connect with Andrea


// `,
//       transcript: `**Transcript**

// The Product Artisan Podcast - Interview with Paddy Raghavan
// Thu. Aug 24, 2023

// 3:55 - Thales Miletus
// Good morning. Hi, Betty.

// 3:59 - Paddy Raghavan
// Hey morning, how are you?

// 4:02 - Thales Miletus
// Hey, good, good. How are you?

// 4:04 - Paddy Raghavan
// All good, all good, are you based?

// 4:06 - Thales Miletus
// I'm based in Bangalore. How about you?

// 4:08 - Paddy Raghavan
// Oh nice, yeah yeah, Bangalore only which part of Bangalore?

// 4:13 - Thales Miletus
// I'm on the East side. Sarjapur.

// 4:15 - Paddy Raghavan
// Oh okay, okay,

// 4:18 - Thales Miletus
// Are you from originally from Chennai,

// 4:20 - Paddy Raghavan
// yeah, yeah, yeah, yeah.

// 4:22 - Thales Miletus
// Chennai in in the school?

// 4:24 - Paddy Raghavan
// Proper Chena 1st to Ma Lap. Initially Bib Kram moved to Nagano, so I studied in Prince Proper. True Blue Chena for the first twenty twenty two years....`,
//       downloadUrl: "#",
//       pdfUrl: "#",
//       blogUrl: "#",
//       likes: 312,
//       views: 2100
//     },
//     // Ep 2
//     {
//       num: 2,
//       title: "Navigating the Product Landscape: A Conversation with Andrea Saez",
//       description: "In this episode, Andrea, a seasoned professional in product marketing, shares insights from her multifaceted career journey as a product marketer, advisor, blogger, and author of the book The Product Momentum Gap.",
//       fullDescription: "Navigating the Challenges of Platform Product Management in the Age of Generative AI",
//       date: "",
//       duration: "",
//       category: "Business",
//       featured: true,
//       video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
//       tags: [],
//       keyTopics: ["Bootstrapping Strategies", "VC Process", "Alternative Funding", "Financial Planning"],
//       guestInfo: "",
//       platforms: {
//         spotify: "",
//         youtube: "",
//         apple: "",
//         amazon: ""
//       },
//       showNotes: `**Show Notes**

// In this episode, Ravi shares insights from his dynamic career spanning startups, non-profits, and major tech companies. From co-founding Enlite Networks to leadership roles at LibForAll Foundation, Lucidworks, and ServiceNow, Ravi discusses lessons learned in product building, emphasising purpose-driven decision-making and execution rigour. He explores the impact of Generative AI on product management, outlines the components of product strategy, and introduces the new Jobs to be Done in the era of AI. This podcast provides a concise yet comprehensive dive into Ravi's rich experiences, offering valuable insights for product professionals navigating diverse tech landscapes.
// **Timeline:**
// 00:00 Welcome to the Product Artisan Podcast

// 00:35 Ravi's Journey from Research Scientist to Product Leader

// 00:53 The Startup Experience: Enlightened Networks and the Path to Product Management

// 05:30 Transitioning to Nonprofit: The Live for All Foundation

// 10:39 Insights on Stakeholder Management and Communication

// 15:02 From Nonprofit to AI and Platform Product Management

// 20:12 The Evolution of Product Management with Generative AI

// 22:39 Navigating Uncertainty in Decision Making

// 24:10 The Evolution of Platform Product Management in the AI Era

// 26:51 The Shift from Execution to Strategic Thinking in Product Management

// 27:42 The Role of Product Managers in the Age of Generative AI

// 33:39 Embracing Agility and Human-Centric Approaches in Product Management

// 37:02 Governance, Risk Management, and the Moral Compass in AI Product Management

// 41:16 The Three Rs Framework for Enterprise AI: ROI, Risk, and Roundabout

// `,
//       transcript: `**Transcript**

// Product Artisan Podcast w. Ravi Krishamurthy
// Fri. Feb 23, 2024

// 0:55 - Ravi Krishnamurthy
// Hey, good. Good evening. How are you, man?

// 1:00 - Thales Miletus
// Hey, I'm good. I'm good. How are you? Good morning. Very good.

// 1:03 - Ravi Krishnamurthy
// Good, good, good. Happy to be here. Let me unblur my background.

// 1:15 - Thales Miletus
// Yeah, yeah. So this is going to be audio only, but the video is more of a, more of an interaction.

// 1:24 - Ravi Krishnamurthy
// Um, you know, so I understand, but I'm just in case you're recording or something.

// 1:31 - Multiple Speakers
// Yeah, absolutely. No, thanks. Um, so where, where is this?

// 1:36 - Unidentified Speaker
// This is, um, this is my house. I'm in Santa Clara. I mean, Sunnyvale.

// 1:41 - Ravi Krishnamurthy
// This is my house in Sunnyvale.

// 1:45 - Thales Miletus
// Very close to the Apple campus, that spaceship campus.

// 1:48 - Ravi Krishnamurthy
// Very close to that.....`,
//       downloadUrl: "#",
//       pdfUrl: "#",
//       blogUrl: "#",
//       likes: 312,
//       views: 2100
//     },
//     // Ep 1
//     {
//       num: 1,
//       title: "Navigating the Product Landscape: A Conversation with Andrea Saez",
//       description: "In this episode, Andrea, a seasoned professional in product marketing, shares insights from her multifaceted career journey as a product marketer, advisor, blogger, and author of the book The Product Momentum Gap.",
//       fullDescription: "Decoding Travel Innovation: An episode with Prasanna",
//       date: "",
//       duration: "",
//       category: "Business",
//       featured: true,
//       video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
//       tags: [],
//       keyTopics: ["Bootstrapping Strategies", "VC Process", "Alternative Funding", "Financial Planning"],
//       guestInfo: "",
//       platforms: {
//         spotify: "",
//         youtube: "",
//         apple: "",
//         amazon: ""
//       },
//       showNotes: `**Show Notes**

// In this episode of the Product Artisan podcast, Prasanna Veeraswamy, a seasoned product leader with extensive experience in the B2B and B2C sectors, who has also worked across multiple countries globally. Prasanna shares his journey from an engineering leader at Microsoft to taking on various product leadership roles within the travel industry, attributed to his passion for travel and strategic career advice. The discussion covers the evolution of travel products, the impact of international experience on product leadership, and the role of data in developing and innovating in the travel space. Prasanna also discusses the pivotal role of Gen AI in enhancing productivity within product management and provides insights into building strong cross-functional product teams. Additionally, the conversation touches upon the challenges and opportunities within the travel industry, highlighting Airbnb's unique position through COVID-19 and the potential for innovation in travel products. Prasanna emphasizes the importance of data-driven development, behavioral analytics, and leveraging tools like Amplitude and Mixpanel for insights. The dialogue concludes with perspectives on future innovations in travel, especially around enhancing the experience of travelers through technology and AI.
// **Timeline:**
// 00:00 Welcome to the Product Artisan Podcast
// 00:06 Introducing Prasanna Veeraswamy: A Global Product Leader
// 00:58 The Journey from Engineering to Product Leadership in Travel
// 03:12 Building Products in the Travel Industry: Insights and Experiences
// 09:29 The Importance of Data in Product Development
// 11:24 Navigating Privacy and Data Utilization in Travel Products
// 13:01 Impact of COVID-19 and Airbnb on the Travel Industry
// 18:58 Exploring the Future of Travel Products and Industry Trends
// 19:39 Exploring the Untapped Potential in Travel Innovation
// 20:51 The Role of Conversational AI in Revolutionizing Travel Planning
// 22:08 Navigating the Diverse Responses of Conversational AI Tools
// 26:43 The Impact of Generative AI on Product Management and Innovation
// 29:03 Building and Leading Cross-Functional Product Teams
// 33:25 Cultivating a Culture of Learning and Adaptability in Product Teams`,
//       transcript: `**Transcript**

// Thu. Mar 7, 2024

// 4:10 - Unidentified Speaker
// Hi, Prasanna. Hey, hello.

// 4:14 - Prasanna Vee
// How are you? Hey, good, good.

// 4:18 - Thales Miletus
// Apologies for the delay. It's been a crazy week. Can you hear me?

// 4:28 - Prasanna Vee
// Yeah, I can.

// 4:30 - Unidentified Speaker
// How about you? You can hear me, right? Yeah, I can hear you. Okay. Yeah.

// 4:51 - Thales Miletus
// So thanks again for taking the time to do this. So I read through some of the links you sent me. Obviously, I looked at your LinkedIn profile. Earlier today, I was reading the CleverTap. I think it was a blog or article you wrote on CleverTap about usage and retention and measuring that, right? So the way we could, I thought we could do this, and again, you know, this is, the outline is just for us to have some kind of a structure. We don't have to live by it, but I would just do an introduction.

// 5:35 - Thales Miletus
// And by the way, this is audio only. The video is more for us to interact, but when we post it, it'll be audio only. But what we've started to do now is, Like when you have something very insightful to say, think of it as a soundbite. Then what we do is we take that and put it with some video captions or something. I'll be sharing all of that with you via email before we publish, so you can review it. But yeah, basically I'll just introduce you, talk about your career timeline based on what's there on LinkedIn........

// `,
//       downloadUrl: "#",
//       pdfUrl: "#",
//       blogUrl: "#",
//       likes: 312,
//       views: 2100
//     },
   
  ];

  const filteredEpisodes = episodes.filter(episode => {
    const matchesCategory = selectedCategory === 'All' || episode.category === selectedCategory;
    const matchesSearch = episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         episode.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         episode.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
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

  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -100 }
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
      icon: <Headphones className="w-12 h-12" />
    },
    {
      title: "Complete Show Resources",
      description: "Get transcripts, PDFs, and blog posts",
      icon: <FileText className="w-12 h-12" />
    },
    {
      title: "Interactive Learning",
      description: "Timestamped notes and key takeaways",
      icon: <BookOpen className="w-12 h-12" />
    }
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
        className="min-h-screen bg-white"
      >
        {/* Header */}
        <div className="bg-[#5944e4] text-white pt-12">
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
                    {selectedEpisode.date !== "" && new Date(selectedEpisode.date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  {/* <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {selectedEpisode.duration}
                  </div> */}
                </div>


                <div className="flex gap-3">
                  {Object.values(selectedEpisode.platforms).some(p => p !== "") && 
                      <div> 
                        {/* <Play className="w-15 h-15" /> */}
                        {/* Platform Links */}
                        <div className="flex gap-3 mb-6">
                          {selectedEpisode.platforms.spotify !== "" && <a href={selectedEpisode.platforms.spotify} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2">
                            <Music className="w-4 h-4" />
                            Spotify
                          </a>}
                          {selectedEpisode.platforms.youtube !== "" && <a href={selectedEpisode.platforms.youtube} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2">
                            <Youtube className="w-4 h-4" />
                            YouTube
                          </a>}
                          {selectedEpisode.platforms.apple !== "" && <a href={selectedEpisode.platforms.apple} className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2">
                            <Headphones className="w-4 h-4" />
                            Apple
                          </a>}
                          {selectedEpisode.platforms.amazon !== "" && <a href={selectedEpisode.platforms.amazon} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2">
                            <ShoppingBag className="w-4 h-4" />
                            Amazon
                          </a>}
                        </div>
                      </div>
                    }
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Show Notes</h2>
                <div className="prose prose-lg max-w-none">
                  <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                    {selectedEpisode.showNotes}
                  </div>
                </div>
              </div>

              {/* Transcript */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Transcript</h2>
                <div className="bg-gray-50 rounded-2xl p-6 max-h-96 overflow-y-auto">
                  <div className="whitespace-pre-line text-gray-700 text-sm font-mono">
                    {selectedEpisode.transcript}
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Episode Resources</h3>
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
              The Product Artisan Podcast
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Welcome to The Product Artisan—a podcast crafted for those who build, scale, and lead 
              products in the real world. For operators, by operators. <br/> <br/>
              Each episode features conversations with seasoned operators and product leaders—people 
              who’ve been in the trenches and know what it takes to deliver impact. This isn’t about 
              hype or buzzwords. It’s about what actually works, what doesn’t, and more importantly <em>why</em>.

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
                  episode.featured ? 'ring-2 ring-[#5944e4]/30' : ''
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
                      {episode.date !== "" && new Date(episode.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
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
                      {episode.platforms.apple !== "" && <Music className="w-4 h-4 text-green-500" />}
                      {episode.platforms.youtube !== "" && <Youtube className="w-4 h-4 text-red-500" />}
                      {episode.platforms.spotify !== "" && <Headphones className="w-4 h-4 text-gray-800" />}
                      {episode.platforms.amazon !== "" && <ShoppingBag className="w-4 h-4 text-orange-500" />}
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
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Episodes;