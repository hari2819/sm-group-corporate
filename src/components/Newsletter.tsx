import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { supabase } from "@/SupabaseClient";

export const Newsletter = () => {
 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  // 1. CAPTURE THE FORM IMMEDIATELY
  const currentForm = e.currentTarget; 
  const formData = new FormData(currentForm);
  const emailValue = formData.get("email") as string;

  try {
    const { error } = await supabase
      .from("Email_Subscriber")
      .insert([{ Email: emailValue }]); // Ensure 'Email' matches your DB column case

    if (error) {
      throw error;
    }

    // 2. SUCCESS PATH
    alert("Success! You have been subscribed.");
    
    // 3. CLEAR THE INPUT
    if (currentForm) {
      currentForm.reset(); 
    }

  } catch (err: any) {
    console.error("Subscription Error:", err.message);
    alert("Error: " + err.message);
  }
};
  

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto border-primary/10" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-3xl md:text-5xl font-bold">
          Get Exclusive{" "}
          <span className="bg-gradient-to-r from-[#172554] to-[#61DAFB] text-transparent bg-clip-text">
            Corporate Insights
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8 md:w-2/3 mx-auto">
          Subscribe to receive expert analysis, market trends, and strategic advisory updates directly from our eminent professionals.
        </p>

        <form
          className="flex flex-col w-full md:flex-row md:w-8/12 lg:w-6/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            name="email"
            placeholder="Enter your corporate email address"
            className="bg-muted/50 dark:bg-muted/80 border-primary/20 focus-visible:ring-[#61DAFB]"
            aria-label="email"
            type="email"
            required
          />
          <Button className="bg-[#172554] hover:bg-[#172554]/90 text-white md:w-1/3">
            Subscribe Now
          </Button>
        </form>
      </div>

      <hr className="w-11/12 mx-auto border-primary/10" />
    </section>
  );
};