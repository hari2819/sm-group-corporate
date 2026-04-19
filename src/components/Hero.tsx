import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#172554] via-[#61DAFB]  to-[#172554] text-transparent bg-clip-text">
              SM
            </span>{" "}
            <span className="inline bg-gradient-to-r from-[#172554] via-[#D4AF37]  to-[#61DAFB] text-transparent bg-clip-text">
              Group
            </span>
          </h1>{" "}
          {" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#172554] to-[#FFD700] text-transparent bg-clip-text">
              - Corporate 
            </span>{" "}
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#172554] to-[#FFD700] text-transparent bg-clip-text">
              | Management 
            </span>
            
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          founded on the 3C bedrock to success - Conceive, Create, Complete.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3 bg-primary !bg-[#172554] hover:opacity-90">Get Started</Button>

          {/* <a
            rel="noreferrer noopener"
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a> */}
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
