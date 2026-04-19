import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Import your 8 downloaded images here
import hrImage from "../assets/hr-image.png"; 
import financeImage from "../assets/finance-image.png";
import accountingImage from "../assets/accounting-image.png";
import engineeringImage from "../assets/engineering-image.png";
import corporateImage from "../assets/corporate-image.png";
import educationalImage from "../assets/educational-image.png";
import salesImage from "../assets/sales-image.png";
import networkImage from "../assets/network-image.png"; // <-- New 8th image

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

// Data directly from the SM Group Brochure
const features: FeatureProps[] = [
  {
    title: "HR & Head Hunters",
    description: "End to End Recruitment across hierarchies, Headhunting, and comprehensive HR Outsourcing Services.",
    image: hrImage,
  },
  {
    title: "Accounting & Tax",
    description: "Expert Bookkeeping, Management Accounting, GST, Direct/Indirect Taxation, and Auditing.",
    image: accountingImage,
  },
  {
    title: "Engineering & IT",
    description: "Software & Web Development, Cloud Computing, Cyber Security, and Infrastructure Management.",
    image: engineeringImage,
  },
  {
    title: "Corporate Advisory",
    description: "Strategic advisory on Organization Structuring, Mergers, Acquisitions, and Turnaround strategies.",
    image: corporateImage,
  },
  {
    title: "Financial & Insurance",
    description: "Total solutions covering Life, Auto, and Health Insurance, alongside Wealth Management services.",
    image: financeImage,
  },
  {
    title: "Educational Services",
    description: "Career counseling, Admission support, Student Skill Development (SSDP), and Institutional Brand Building.",
    image: educationalImage,
  },
  {
    title: "Sales & Marketing",
    description: "In-depth Market Research, Feasibility Studies, and International Business facilitation.",
    image: salesImage,
  },
  // The New 8th Summary Card
  {
    title: "Global Network & Expertise",
    description: "Drawing on over 100 years of cumulative experience to provide tailored, single-source solutions for national and international enterprises.",
    image: networkImage, 
  },
];

// Core values from the "Success Bedrock" (Conceive, Create, Complete)
const featureList: string[] = [
  "End-to-End Solutions",
  "Domain Experts",
  "100+ Years Experience",
  "National Reach",
  "International Reach",
  "Timely Execution",
  "Holistic Approach",
];

export const Features = () => {
  return (
    <section
      id="services"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Our Comprehensive{" "}
        <span className="bg-gradient-to-b from-[#172554] to-[#61DAFB] text-transparent bg-clip-text">
          Business Clusters
        </span>
      </h2>

      {/* Badges showing core strengths */}
      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm bg-primary/10 text-primary hover:bg-primary/20"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      {/* Grid perfectly balanced with 8 items (4 on top, 4 on bottom for XL screens) */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title} className="flex flex-col justify-between drop-shadow-md hover:drop-shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-[#172554]">{title}</CardTitle>
            </CardHeader>

            <CardContent className="text-muted-foreground">
              {description}
            </CardContent>

            <CardFooter className="mt-auto pt-6">
              <img
                src={image}
                alt={`${title} illustration`}
                className="w-[150px] lg:w-[200px] mx-auto object-contain"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};