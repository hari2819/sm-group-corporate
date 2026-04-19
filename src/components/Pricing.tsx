import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

interface EngagementPlanProps {
  title: string;
  popular: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: EngagementPlanProps[] = [
  {
    title: "Strategic Audit",
    popular: 0,
    description: "Ideal for businesses needing immediate, focused guidance on specific corporate challenges.",
    buttonText: "Book a Consultation",
    benefitList: [
      "In-depth Needs Analysis",
      "Market Feasibility Studies",
      "Initial Strategy Mapping",
      "Compliance Health Check",
      "One-time Advisory Session",
    ],
  },
  {
    title: "Retainer Partnership",
    popular: 1,
    description: "Our most chosen model. Ongoing, dedicated support across multiple business clusters.",
    buttonText: "Discuss Retainer",
    benefitList: [
      "Dedicated Account Manager",
      "Ongoing Tax & Accounting",
      "Active Talent Headhunting",
      "Priority IT & Security Support",
      "Continuous Strategy Refinement",
    ],
  },
  {
    title: "Enterprise Transformation",
    popular: 0,
    description: "End-to-end orchestration for massive corporate restructuring, M&A, or global scaling.",
    buttonText: "Contact Partners",
    benefitList: [
      "Full Organizational Restructuring",
      "Mergers & Acquisitions Advisory",
      "International Business Expansion",
      "C-Suite Executive Placements",
      "Complete 360° Holistic Solutions",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="engagement"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Tailored{" "}
        <span className="bg-gradient-to-r from-[#172554] to-[#61DAFB] text-transparent bg-clip-text">
          Engagement Models
        </span>
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8 md:w-3/4 mx-auto">
        We do not believe in one-size-fits-all. Choose the partnership structure that best aligns with your corporate objectives.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {plans.map((plan: EngagementPlanProps) => (
          <Card
            key={plan.title}
            className={
              plan.popular === 1
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-[#172554] dark:border-[#61DAFB] relative"
                : "border-primary/10"
            }
          >
            {plan.popular === 1 && (
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <span className="bg-gradient-to-r from-[#172554] to-[#61DAFB] text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                  Most Preferred
                </span>
              </div>
            )}

            <CardHeader>
              <CardTitle className="text-2xl text-[#172554] dark:text-white pb-2">
                {plan.title}
              </CardTitle>
              <CardDescription className="pb-4 min-h-[60px] text-md">
                {plan.description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Button 
                variant={plan.popular === 1 ? "default" : "outline"}
                className={`w-full mb-8 ${
                  plan.popular === 1 
                  ? "bg-[#172554] hover:bg-[#172554]/90 text-white" 
                  : "border-[#172554] text-[#172554] hover:bg-[#172554]/10 dark:border-[#61DAFB] dark:text-[#61DAFB] dark:hover:bg-[#61DAFB]/10"
                }`}
              >
                {plan.buttonText}
              </Button>

              <div className="space-y-4">
                {plan.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex items-center"
                  >
                    <Check className="text-[#61DAFB] mr-3" size={20} />
                    <h3 className="text-muted-foreground">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};