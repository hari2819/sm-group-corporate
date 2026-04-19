import smLogo from "../assets/main_logo.png"; // Make sure this path is correct for your logo!

export const Footer = () => {
  return (
    <footer id="footer" className="bg-muted/20">
      <hr className="w-11/12 mx-auto border-primary/10" />

      {/* Adjusted grid to xl:grid-cols-5 since we removed Platforms */}
      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-x-12 gap-y-8">
        
        {/* Logo and Brand Brief */}
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-2xl flex items-center gap-4"
          >
            {/* Made the logo significantly larger */}
            <img 
              src={smLogo} 
              alt="SM Group Logo" 
              className="w-24 object-contain drop-shadow-md" 
            />
            <span className="text-[#172554] dark:text-white">SM Group</span>
          </a>
          <p className="mt-6 text-muted-foreground w-5/6 leading-relaxed">
            Premier corporate consultancy delivering durable and highly specialized results through our Conceive, Create, Complete methodology.
          </p>
        </div>

        {/* Dynamic Page Links */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-lg text-[#172554] dark:text-[#61DAFB]">Company</h3>
          <div>
            <a href="#about" className="opacity-70 hover:opacity-100 hover:text-[#61DAFB] transition-all">
              About Us
            </a>
          </div>
          <div>
            <a href="#services" className="opacity-70 hover:opacity-100 hover:text-[#61DAFB] transition-all">
              Business Clusters
            </a>
          </div>
          <div>
            <a href="#howItWorks" className="opacity-70 hover:opacity-100 hover:text-[#61DAFB] transition-all">
              Our Methodology
            </a>
          </div>
          <div>
            <a href="#engagement" className="opacity-70 hover:opacity-100 hover:text-[#61DAFB] transition-all">
              Engagement Models
            </a>
          </div>
          <div>
            <a href="#team" className="opacity-70 hover:opacity-100 hover:text-[#61DAFB] transition-all">
              Leadership
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-lg text-[#172554] dark:text-[#61DAFB]">Follow Us</h3>
          <div>
            <a rel="noreferrer noopener" href="#" className="opacity-70 hover:opacity-100 hover:text-[#61DAFB] transition-all">
              LinkedIn
            </a>
          </div>
          <div>
            <a rel="noreferrer noopener" href="#" className="opacity-70 hover:opacity-100 hover:text-[#61DAFB] transition-all">
              Twitter / X
            </a>
          </div>
          <div>
            <a rel="noreferrer noopener" href="#" className="opacity-70 hover:opacity-100 hover:text-[#61DAFB] transition-all">
              Instagram
            </a>
          </div>
        </div>

        {/* Community */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-lg text-[#172554] dark:text-[#61DAFB]">Community</h3>
          <div>
            <a rel="noreferrer noopener" href="#" className="opacity-70 hover:opacity-100 hover:text-[#61DAFB] transition-all">
              YouTube
            </a>
          </div>
          <div>
            <a rel="noreferrer noopener" href="#" className="opacity-70 hover:opacity-100 hover:text-[#61DAFB] transition-all">
              Client Portal
            </a>
          </div>
        </div>
      </section>

      {/* Copyright Banner */}
      <section className="container pb-10 text-center">
        <h3 className="text-muted-foreground font-medium">
          &copy; {new Date().getFullYear()} Landing page made by SweMa.org
        </h3>
      </section>
    </footer>
  );
};