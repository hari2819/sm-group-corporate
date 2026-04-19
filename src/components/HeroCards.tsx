import { Badge } from "./ui/badge";
import { Button} from "@/components/ui/button";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, MedalIcon, WalletIcon } from "lucide-react";
import { ChartIcon, HRIcon, LightBulbIcon, MagnifierIcon } from "./Icons";
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

export const HeroCards = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Automatically slide every 3 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const currentService = services[currentIndex];

  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      
      {/* Dynamic Sliding Card */}
      <Card className="absolute right-[20px] top-4 w-80 h-64 flex flex-col justify-between drop-shadow-xl transition-all duration-500">
        <CardHeader className="mt-4 flex justify-center items-center pb-2">
          <CardTitle className="inline bg-gradient-to-r from-[#172554] via-[#61DAFB] to-[#172554] text-transparent bg-clip-text text-xl font-bold text-center">
            {currentService.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="text-center pb-2 px-4">
          <p className="text-sm text-muted-foreground italic">
            "{currentService.description}"
          </p>
        </CardContent>

        <CardFooter className="flex justify-center pb-6">
          <div className="bg-primary/10 p-2 rounded-full flex items-center justify-center animate-pulse">
            {currentService.icon}
          </div>
        </CardFooter>

        {/* Slide Indicators (Dots) */}
        <div className="flex justify-center gap-1 mb-2">
          {services.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 w-1.5 rounded-full ${i === currentIndex ? 'bg-primary w-3' : 'bg-gray-300'}`} 
            />
          ))}
        </div>
      </Card>

      {/* Put your other 2 static cards here (Why Choose Us & Expertise) */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle
              className="
            text-1xl
          inline bg-gradient-to-r from-[#61DAFB] via-[#172554] to-[#FFD700] text-transparent bg-clip-text
          flex item-center justify-between"
            >"Top-Notch Expertise"</CardTitle>
            <CardDescription className="text-md mt-2">
              Over 100 years of cumulative experience steering the
               fortunes of national and international companies.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>

      <Card className="absolute top-[15px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="
          inline bg-gradient-to-r from-[#61DAFB] via-[#172554] to-[#FFD700] text-transparent bg-clip-text
          flex item-center justify-between">
            Why Choose Us
            <Badge
              variant="secondary"
              className="text-sm text-primary inline bg-gradient-to-r from-[#172554] via-[#61DAFB]  to-[#172554] text-transparent bg-clip-text"
            >
            </Badge>
          </CardTitle>
          <div>
            <span className="
            inline bg-gradient-to-r from-[#172554] via-[#61DAFB]  to-[#172554] text-transparent bg-clip-text
            text-1xl font-bold">"Our Success Bedrock"</span>
            {/* <span className="text-muted-foreground"> /month</span> */}
          </div>

          {/* <CardDescription>
            Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.
          </CardDescription> */}
        </CardHeader>

        <CardContent>
          <Button className="w-full bg-primary !bg-[#172554]">Get a Consultation</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {[
              "Conceive: Total understanding of needs",
              "Create: Holistic & durable solutions",
              "Complete: Specialised results on time"
            ].map((benefit: string) => (
              <span key={benefit} className="flex">
                <Check className="text-green-500" />{" "}
                <h3 className="ml-2 text-sm">{benefit}</h3>
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>

    </div>
  );
};
