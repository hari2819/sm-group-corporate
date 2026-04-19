import { useState} from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MagnifierIcon, MedalIcon, ChartIcon, WalletIcon, LightBulbIcon } from "./Icons";

// TODO: Import your 7 unique logos/images here
import hrImage from "../assets/hr.png";
import taxImage from "../assets/accounts.png"; // Placeholder
import itImage from "../assets/it.png"; // Placeholder
import advisoryImage from "../assets/corporate.png"; // Placeholder
import financeImage from "../assets/finance.png"; // Placeholder
import eduImage from "../assets/education.png"; // Placeholder
import salesImage from "../assets/sales.png"; // Placeholder

// 1. The Master Data Structure for all 7 Clusters
const allServices = [
  {
    id: "hr",
    tagline: "Specialized HR",
    title: "& Headhunting",
    description: "Empowering your organization with top-tier talent and comprehensive human resource solutions tailored to your industry verticals.",
    image: hrImage,
    features: [
      { title: "End-to-End Recruitment", desc: "Managing the entire talent acquisition lifecycle.", icon: <MagnifierIcon /> },
      { title: "Executive Headhunting", desc: "Targeted search for eminent professionals and leadership.", icon: <MedalIcon /> },
      { title: "HR Outsourcing", desc: "Comprehensive management to let you focus on growth.", icon: <ChartIcon /> },
    ]
  },
  {
    id: "tax",
    tagline: "Accounting",
    title: "& Taxation",
    description: "Ensuring flawless financial compliance and strategic bookkeeping to safeguard your corporate assets.",
    image: taxImage,
    features: [
      { title: "Expert Bookkeeping", desc: "Accurate and timely financial record management.", icon: <WalletIcon /> },
      { title: "GST & Taxation", desc: "Comprehensive Direct and Indirect tax solutions.", icon: <ChartIcon /> },
      { title: "Auditing Services", desc: "Thorough internal and external financial audits.", icon: <MagnifierIcon /> },
    ]
  },
  {
    id: "it",
    tagline: "Engineering",
    title: "& IT Solutions",
    description: "Driving digital transformation with robust software architectures and secure infrastructure.",
    image: itImage,
    features: [
      { title: "Software Development", desc: "Custom web and application development.", icon: <LightBulbIcon /> },
      { title: "Cloud Computing", desc: "Scalable and secure cloud infrastructure setup.", icon: <ChartIcon /> },
      { title: "Cyber Security", desc: "Protecting your vital corporate data and networks.", icon: <MedalIcon /> },
    ]
  },
  {
    id: "advisory",
    tagline: "Corporate",
    title: "Advisory",
    description: "Strategic guidance to navigate complex corporate transitions, restructuring, and market expansions.",
    image: advisoryImage,
    features: [
      { title: "Org Structuring", desc: "Optimizing your corporate hierarchy for efficiency.", icon: <ChartIcon /> },
      { title: "Mergers & Acquisitions", desc: "Strategic advisory for corporate combinations.", icon: <WalletIcon /> },
      { title: "Turnaround Strategies", desc: "Revitalizing underperforming business units.", icon: <LightBulbIcon /> },
    ]
  },
  {
    id: "finance",
    tagline: "Financial",
    title: "& Insurance",
    description: "Comprehensive protection and wealth management to secure your future and mitigate risks.",
    image: financeImage,
    features: [
      { title: "Wealth Management", desc: "Strategic planning for long-term asset growth.", icon: <WalletIcon /> },
      { title: "Life & Health", desc: "Complete insurance solutions for you and your team.", icon: <MedalIcon /> },
      { title: "General Insurance", desc: "Protecting your corporate and auto assets.", icon: <ChartIcon /> },
    ]
  },
  {
    id: "edu",
    tagline: "Educational",
    title: "Services",
    description: "Elevating academic institutions and guiding students toward successful career trajectories.",
    image: eduImage,
    features: [
      { title: "Admission Support", desc: "Guiding students through complex enrollments.", icon: <MagnifierIcon /> },
      { title: "Skill Development", desc: "SSDP programs to bridge the gap to employment.", icon: <LightBulbIcon /> },
      { title: "Brand Building", desc: "Enhancing the reputation of educational institutions.", icon: <ChartIcon /> },
    ]
  },
  {
    id: "sales",
    tagline: "Sales",
    title: "& Marketing",
    description: "Expanding your market share through data-driven research and strategic international outreach.",
    image: salesImage,
    features: [
      { title: "Market Research", desc: "In-depth analysis to uncover new opportunities.", icon: <MagnifierIcon /> },
      { title: "Feasibility Studies", desc: "Evaluating the viability of new business ventures.", icon: <ChartIcon /> },
      { title: "International Business", desc: "Facilitating global trade and market entry.", icon: <MedalIcon /> },
    ]
  }
];

export const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % allServices.length);
      setIsFading(false);
    }, 300); // 300ms fade out
  };

  const handlePrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + allServices.length) % allServices.length);
      setIsFading(false);
    }, 300); // 300ms fade out
  };

  const currentCluster = allServices[currentIndex];

  return (
    <section id="services-showcase" className="container py-24 sm:py-32 relative">
      
      {/* Navigation Chevrons - Hidden on mobile, visible on desktop edges */}
      <button 
        onClick={handlePrev}
        className="hidden xl:flex absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary/5 hover:bg-primary/10 text-primary transition-all z-10"
      >
        <ChevronLeft size={32} />
      </button>

      <button 
        onClick={handleNext}
        className="hidden xl:flex absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary/5 hover:bg-primary/10 text-primary transition-all z-10"
      >
        <ChevronRight size={32} />
      </button>

      {/* Main Content Area with Smooth Opacity Transition */}
      <div 
        className={`grid lg:grid-cols-[1fr,1fr] gap-12 place-items-center transition-opacity duration-300 ease-in-out ${isFading ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
      >
        
        {/* Left Side: Services List */}
        <div className="w-full">
          <div className="flex justify-between items-center mb-4 xl:hidden">
             {/* Mobile/Tablet Navigation */}
             <button onClick={handlePrev} className="p-2 bg-primary/5 rounded-full text-primary"><ChevronLeft size={24} /></button>
             <span className="text-sm font-medium text-muted-foreground">{currentIndex + 1} of 7</span>
             <button onClick={handleNext} className="p-2 bg-primary/5 rounded-full text-primary"><ChevronRight size={24} /></button>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-[#172554] to-[#61DAFB] text-transparent bg-clip-text">
              {currentCluster.tagline}{" "}
            </span>
            {currentCluster.title}
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 leading-relaxed">
            {currentCluster.description}
          </p>

          <div className="flex flex-col gap-6">
            {currentCluster.features.map((feature, idx) => (
              <Card key={idx} className="border-primary/10 hover:drop-shadow-md transition-all duration-300 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl text-[#172554] dark:text-white">{feature.title}</CardTitle>
                    <CardDescription className="text-md mt-2 leading-relaxed">
                      {feature.desc}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Right Side: Featured Logo/Image */}
        <div className="flex justify-center items-center w-full">
          <img
            src={currentCluster.image}
            className="w-[300px] md:w-[450px] lg:w-[500px] object-contain drop-shadow-2xl rounded-xl transition-transform duration-500 hover:scale-105"
            alt={`${currentCluster.tagline} illustration`}
          />
        </div>
        
      </div>

      {/* Bottom Indicator Dots */}
      <div className="flex justify-center gap-2 mt-12">
        {allServices.map((_, i) => (
          <button 
            key={i} 
            onClick={() => {
              setIsFading(true);
              setTimeout(() => {
                setCurrentIndex(i);
                setIsFading(false);
              }, 300);
            }}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === currentIndex ? 'bg-[#172554] w-8 dark:bg-[#61DAFB]' : 'bg-gray-300 w-3 hover:bg-gray-400'
            }`} 
            aria-label={`Go to ${allServices[i].tagline}`}
          />
        ))}
      </div>

    </section>
  );
};