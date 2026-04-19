import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  description: string;
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://i.pravatar.cc/150?img=11", // TODO: Replace with Mohan's actual photo
    name: "Mohan",
    position: "Owner & Founder",
    description: "Driving the strategic vision of SM Group and ensuring the highest standards of corporate consultancy.",
    socialNetworks: [
      {
        name: "WhatsApp",
        // TODO: Replace with Mohan's actual WhatsApp number (include country code, no + or spaces)
        url: "https://api.whatsapp.com/send?phone=917899373253&lang=en", 
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=14", // TODO: Replace with Swaminathan's actual photo
    name: "Swaminathan",
    position: "Partner",
    description: "Spearheading operational excellence and client-centric solutions across our 7 business clusters.",
    socialNetworks: [
      {
        name: "WhatsApp",
        // TODO: Replace with Swaminathan's actual WhatsApp number
        url: "https://api.whatsapp.com/send?phone=917899373253&lang=en", 
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "WhatsApp":
        return (
          // Custom WhatsApp SVG matching the lucide-react style
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        <span className="bg-gradient-to-r from-[#172554] to-[#61DAFB] text-transparent bg-clip-text">
          Our Leadership
        </span>
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground text-center md:w-3/4 mx-auto">
        Guiding SM Group with decades of expertise and a steadfast commitment to the Conceive, Create, Complete philosophy.
      </p>

      <div className="grid md:grid-cols-2 gap-8 gap-y-14 max-w-4xl mx-auto mt-16">
        {teamList.map(
          ({ imageUrl, name, position, description, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/30 border-primary/10 relative flex flex-col justify-center items-center hover:drop-shadow-lg transition-all duration-300"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} - ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover drop-shadow-md border-4 border-white dark:border-slate-950"
                />
                <CardTitle className="text-center text-2xl text-[#172554] dark:text-white pt-2">{name}</CardTitle>
                <CardDescription className="text-primary font-medium text-md">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2 px-6">
                <p className="text-muted-foreground leading-relaxed">{description}</p>
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SocialNetworkProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "icon", // Changed to "icon" to make the hover effect a perfect circle
                      }) + " text-green-500 hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-950"} // Added WhatsApp green coloring
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};