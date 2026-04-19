import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Changed 'userName' to 'role' to fit a B2B corporate context
interface TestimonialProps {
  image: string;
  name: string;
  role: string; 
  comment: string;
}

// Professional testimonials tailored to SM Group's 7 clusters
const testimonials: TestimonialProps[] = [
  {
    image: "", // Leave blank to use the sleek initials fallback
    name: "Rajesh Kumar",
    role: "Director of HR, GlobalTech",
    comment: "SM Group's headhunting division transformed our executive team. They didn't just find candidates; they found leaders who perfectly aligned with our corporate culture.",
  },
  {
    image: "",
    name: "Priya Sharma",
    role: "CFO, Apex Manufacturing",
    comment: "Their Accounting & Tax cluster navigated us through a highly complex financial restructuring. The depth of their 100+ years of cumulative experience truly shows in their flawless execution.",
  },
  {
    image: "",
    name: "Anand Verma",
    role: "Founder, Innovate Solutions",
    comment: "From software architecture to cybersecurity, the Engineering & IT team at SM Group delivered a robust digital transformation that scaled our operations effortlessly.",
  },
  {
    image: "",
    name: "Samantha Collins",
    role: "VP of Operations, Nexus Corp",
    comment: "The 'Conceive, Create, Complete' methodology is more than just a tagline. They mapped our needs, built a custom advisory strategy, and delivered focused results exactly on time.",
  },
  {
    image: "",
    name: "Vikram Desai",
    role: "Chairman, Desai Educational Trust",
    comment: "Their Educational Services division helped us completely rebrand our institution. Their strategic insights and admission support resulted in a 40% increase in enrollments this year.",
  },
  {
    image: "",
    name: "Meera Reddy",
    role: "CEO, Horizon Retail",
    comment: "Having a single, trusted source for all our corporate needs—from financial insurance to marketing feasibility studies—has been an absolute game-changer for our national expansion.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Trusted by
        <span className="bg-gradient-to-r from-[#172554] to-[#61DAFB] text-transparent bg-clip-text">
          {" "}Industry Leaders{" "}
        </span>
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8 text-center md:w-3/4 mx-auto">
        Hear how our holistic solutions and specialized business clusters have driven sustainable growth for national and international enterprises.
      </p>

      {/* Masonry-style grid layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto mt-8">
        {testimonials.map(
          ({ image, name, role, comment }: TestimonialProps) => (
            <Card
              key={name}
              className="max-w-md md:break-inside-avoid overflow-hidden border-primary/10 hover:drop-shadow-lg transition-all duration-300 bg-muted/20"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt={`${name} profile`}
                    src={image}
                  />
                  {/* Dynamically generates initials from the name (e.g., Rajesh Kumar -> RK) */}
                  <AvatarFallback className="bg-[#172554] text-white font-semibold">
                    {name.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg text-[#172554] dark:text-white">{name}</CardTitle>
                  <CardDescription className="font-medium">{role}</CardDescription>
                </div>
              </CardHeader>

              <CardContent className="text-muted-foreground leading-relaxed">
                "{comment}"
              </CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};