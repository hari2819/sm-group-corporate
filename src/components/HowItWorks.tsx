import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "./Icons"; // Adjusted path to match standard template

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MapIcon />,
    title: "1. Conceive",
    description:
      "We begin by thoroughly mapping out your requirements, gaining a total understanding of your unique organizational challenges.",
  },
  {
    icon: <PlaneIcon />,
    title: "2. Create",
    description:
      "Our eminent professionals design holistic, durable solutions tailored to your vertical, preparing your business for rapid growth.",
  },
  {
    icon: <MedalIcon />,
    title: "3. Complete",
    description:
      "We execute strategies with absolute precision, delivering specialized, focused results on time to secure your competitive advantage.",
  },
  {
    icon: <GiftIcon />,
    title: "4. Deliver Value",
    description:
      "Beyond project completion, we ensure long-term value creation, acting as your single-source, trusted partner for continuous success.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Our Proven{" "}
        <span className="bg-gradient-to-r from-[#172554] to-[#61DAFB] text-transparent bg-clip-text">
          Methodology{" "}
        </span>
        Step-by-Step
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        A structured, foundational approach to transforming your corporate challenges into sustainable success.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50 border-primary/10 hover:drop-shadow-lg transition-all duration-300"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center text-xl text-[#172554] dark:text-white">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  {icon}
                </div>
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              {description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};