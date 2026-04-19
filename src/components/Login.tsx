import { useState, useEffect } from "react";
import { supabase } from "@/SupabaseClient";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "./ui/card";
import { useNavigate } from "react-router-dom";
import { LockKeyhole } from "lucide-react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Disable scroll when this component is mounted
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Access Denied: " + error.message);
    } else {
      navigate("/admin-dashboard");
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 w-full h-screen flex items-center justify-center bg-[#020617]">
      {/* Animated Background Blobs for "Attractiveness" */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#172554] rounded-full blur-[120px] opacity-50" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#1e3a8a] rounded-full blur-[120px] opacity-50" />

      <Card className="w-full max-w-[400px] border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl relative z-10">
        <CardHeader className="text-center">
          <div className="mx-auto bg-[#172554] p-3 rounded-full w-fit mb-4 border border-white/20">
            <LockKeyhole className="text-[#61DAFB]" size={28} />
          </div>
          <CardTitle className="text-3xl font-bold text-white tracking-tight">
            Admin Portal
          </CardTitle>
          <CardDescription className="text-slate-400">
            Secure access for SM Group Management
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-slate-500 h-12 focus-visible:ring-[#61DAFB]"
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-slate-500 h-12 focus-visible:ring-[#61DAFB]"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-[#172554] hover:bg-[#1e3a8a] text-white h-12 text-lg font-semibold transition-all shadow-lg shadow-black/20 border border-white/10"
              disabled={loading}
            >
              {loading ? "Authenticating..." : "Login"}
            </Button>
          </form>

          <div className="mt-8 text-center">
             <button 
               onClick={() => navigate("/")}
               className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
             >
               ← Return to Main Site
             </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};