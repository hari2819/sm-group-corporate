import { useNavigate } from "react-router-dom";
import { Users, ArrowRight, LayoutDashboard, LogOut } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";

export const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-[#020617]">
      {/* Sidebar - Keep this consistent across admin pages */}
      <aside className="w-64 bg-[#172554] text-white p-6 hidden md:flex flex-col">
        <div className="mb-10">
          <h2 className="text-xl font-bold text-[#61DAFB]">SM GROUP</h2>
        </div>
        <nav className="flex-1 space-y-2">
          <Button variant="secondary" className="w-full justify-start gap-3 bg-white/10 text-[#61DAFB]">
            <LayoutDashboard size={20} /> Dashboard
          </Button>
        </nav>
        <Button variant="ghost" className="mt-auto justify-start gap-3 text-slate-400" onClick={() => navigate("/admin")}>
          <LogOut size={20} /> Logout
        </Button>
      </aside>

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-[#172554] mb-8">Management Overview</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* EMAIL SUBSCRIBERS CARD */}
          <Card 
            className="hover:shadow-lg transition-all cursor-pointer border-t-4 border-t-[#61DAFB]"
            onClick={() => navigate("/admin/subscribers")}
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-500 uppercase">Newsletter Leads</CardTitle>
              <Users className="text-[#172554]" size={20} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#172554]">View All Leads</div>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                Manage your subscriber database <ArrowRight size={12} />
              </p>
            </CardContent>
          </Card>

          {/* FUTURE CARDS (Placeholder) */}
          <Card className="opacity-50 border-dashed border-2">
            <CardHeader><CardTitle className="text-sm text-slate-400">Website Analytics</CardTitle></CardHeader>
            <CardContent><div className="text-lg font-medium text-slate-300">Coming Soon</div></CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};