import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Imported the arrows
import { 
  LightBulbIcon, 
  HRIcon, 
  WalletIcon, 
  ChartIcon, 
  MedalIcon, 
  MagnifierIcon 
} from "./Icons"; 

const services = [
  {
    title: "HR & Headhunting",
    description: "End-to-End Recruitment across hierarchies and HR Outsourcing Services.",
    icon: <HRIcon />,
  },
  {
    title: "Accounting & Tax",
    description: "Expert Bookkeeping, GST, Taxation, Auditing, and Payroll management.",
    icon: <WalletIcon />,
  },
  {
    title: "Engineering & IT",
    description: "Software Development, Cloud Computing, and Cybersecurity solutions.",
    icon: <LightBulbIcon />,
  },
  {
    title: "Corporate Advisory",
    description: "Advisory on Org Structuring, Mergers, and Turnaround strategies.",
    icon: <ChartIcon />,
  },
  {
    title: "Financial & Insurance",
    description: "Total solutions for Life, Health, and Auto Insurance plus Wealth Management.",
    icon: <WalletIcon />,
  },
  {
    title: "Educational Services",
    description: "Admission support and Brand Building for institutions and students.",
    icon: <MedalIcon />,
  },
  {
    title: "Sales & Marketing",
    description: "Market Research, Feasibility Studies, and International Business Services.",
    icon: <MagnifierIcon />,
  },
];

const stats = [
  {
    quantity: "100+",
    description: "Years Cumulative Experience",
  },
  {
    quantity: "50+",
    description: "Eminent Professionals",
  },
  {
    quantity: "7",
    description: "Business Clusters",
  },
  {
    quantity: "360°",
    description: "Holistic Solutions",
  },
];

export const About = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Manual Navigation Functions
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  // Automatically slide every 3.5 seconds
  // Adding currentIndex to the dependency array resets the timer if the user clicks manually
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [currentIndex]); 

  const currentService = services[currentIndex];

  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12 drop-shadow-sm">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
          
          {/* Left Side: Dynamic Service Slider */}
          <div className="w-full md:w-5/12 flex justify-center">
            {/* Added 'relative' to the card to hold the absolute arrow buttons */}
            <Card className="relative w-full max-w-[420px] h-[360px] flex flex-col justify-between drop-shadow-2xl border-primary/10 transition-all duration-500 p-6 bg-white dark:bg-slate-950 group">
              
              {/* Left Arrow Button */}
              <button 
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary/5 hover:bg-primary/10 text-primary transition-all z-10 opacity-70 hover:opacity-100"
                aria-label="Previous service"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Right Arrow Button */}
              <button 
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary/5 hover:bg-primary/10 text-primary transition-all z-10 opacity-70 hover:opacity-100"
                aria-label="Next service"
              >
                <ChevronRight size={24} />
              </button>

              <CardHeader className="mt-2 flex justify-center items-center pb-2 px-10">
                <CardTitle className="inline bg-gradient-to-r from-[#172554] via-[#61DAFB] to-[#172554] text-transparent bg-clip-text text-3xl font-bold text-center leading-tight">
                  {currentService.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="text-center pb-2 px-10">
                <p className="text-lg text-muted-foreground italic leading-relaxed">
                  "{currentService.description}"
                </p>
              </CardContent>

              <CardFooter className="flex flex-col justify-center gap-6 pb-4">
                <div className="bg-primary/10 p-4 rounded-full flex items-center justify-center transition-all duration-500">
                  {currentService.icon}
                </div>
                
                {/* Slide Indicators (Clickable) */}
                <div className="flex justify-center gap-2 mt-2">
                  {services.map((_, i) => (
                    <button 
                      key={i} 
                      onClick={() => setCurrentIndex(i)}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        i === currentIndex ? 'bg-[#172554] w-6 dark:bg-[#61DAFB]' : 'bg-gray-300 w-2 hover:bg-gray-400'
                      }`} 
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </CardFooter>
            </Card>
          </div>

          {/* Right Side: Content Section & Stats */}
          <div className="w-full md:w-7/12 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-r from-[#172554] to-[#61DAFB] text-transparent bg-clip-text">
                  About{" "}
                </span>
                SM Group
              </h2>
              
              <p className="text-xl text-muted-foreground mt-4 leading-relaxed">
                SM Group is a premier corporate consultancy providing end-to-end solutions for national and international enterprises. Staffed by qualified accountants, tax professionals, and eminent specialists, we enable organizations to draw all their quality requirements from a single, trusted source. Guided by our foundational bedrock - <strong>Conceive, Create, Complete</strong> - we deliver durable and highly specialized results.
              </p>
            </div>

            {/* Dynamic Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-4">
              {stats.map(({ quantity, description }) => (
                <div key={description} className="space-y-2">
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#172554] dark:text-white">
                    {quantity}
                  </h2>
                  <p className="text-sm text-muted-foreground font-medium">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};