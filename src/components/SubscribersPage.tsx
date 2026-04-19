import { useEffect, useState } from "react";
import { supabase } from "@/SupabaseClient";
import { useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "@/components/ui/checkbox"; // Ensure you have: npx shadcn-ui@latest add checkbox
import { ChevronLeft, Send, Mail } from "lucide-react";
import { Textarea } from "./ui/textarea"; // Ensure you have: npx shadcn-ui@latest add textarea
import { X, UserCheck } from "lucide-react"; // Add X for removing tags
import { Badge } from "@/components/ui/badge";

export const SubscribersPage = () => {
    const [subscribers, setSubscribers] = useState<{ Email: string; created_at: string }[]>([]);
    const [selectedEmails, setSelectedEmails] = useState<string[]>([]);
    const [emailSubject, setEmailSubject] = useState("");
    const [emailBody, setEmailBody] = useState("");
    const [isSending, setIsSending] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchSubscribers();
    }, []);

    const removeEmail = (emailToRemove: string) => {
        setSelectedEmails(selectedEmails.filter(email => email !== emailToRemove));
    };

    const fetchSubscribers = async () => {
        const { data } = await supabase.from("Email_Subscriber").select("*").order("created_at", { ascending: false });
        if (data) setSubscribers(data);
    };

    // --- SELECTION LOGIC ---
    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedEmails(subscribers.map((s) => s.Email));
        } else {
            setSelectedEmails([]);
        }
    };

    const handleSelectOne = (email: string, checked: boolean) => {
        if (checked) {
            setSelectedEmails([...selectedEmails, email]);
        } else {
            setSelectedEmails(selectedEmails.filter((e) => e !== email));
        }
    };

    const handleSendEmail = async () => {
        if (selectedEmails.length === 0) return alert("Select recipients first.");

        setIsSending(true);

        try {
            // We call the Supabase Function we just created
            const { error } = await supabase.functions.invoke('send-email', {
                body: {
                    to: selectedEmails,
                    subject: emailSubject,
                    html: `<strong>Message from SM Group Admin:</strong><p>${emailBody}</p>`
                },
            });

            if (error) throw error;

            alert(`Success! Email sent to ${selectedEmails.length} people.`);
            setEmailSubject("");
            setEmailBody("");
            setSelectedEmails([]);
        } catch (err: any) {
            console.error("Error sending email:", err);
            alert("Failed to send: " + err.message);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-8">
            <div className="max-w-6xl mx-auto space-y-6">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <Button variant="ghost" className="gap-2" onClick={() => navigate("/admin-dashboard")}>
                        <ChevronLeft size={20} /> Dashboard
                    </Button>
                    <div className="flex items-center gap-2 bg-[#172554] text-white px-4 py-2 rounded-lg">
                        <Mail size={18} />
                        <span className="font-semibold">{selectedEmails.length} Selected</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* LEFT: TABLE SECTION (2/3 width) */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                            <Table>
                                <TableHeader className="bg-slate-50">
                                    <TableRow>
                                        <TableHead className="w-[50px]">
                                            <Checkbox
                                                checked={selectedEmails.length === subscribers.length && subscribers.length > 0}
                                                onCheckedChange={(val) => handleSelectAll(!!val)}
                                            />
                                        </TableHead>
                                        <TableHead>Email Address</TableHead>
                                        <TableHead className="text-right">Joined</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {subscribers.map((sub, i) => (
                                        <TableRow key={i} className={selectedEmails.includes(sub.Email) ? "bg-blue-50/50" : ""}>
                                            <TableCell>
                                                <Checkbox
                                                    checked={selectedEmails.includes(sub.Email)}
                                                    onCheckedChange={(val) => handleSelectOne(sub.Email, !!val)}
                                                />
                                            </TableCell>
                                            <TableCell className="font-medium text-slate-700">{sub.Email}</TableCell>
                                            <TableCell className="text-right text-slate-300 text-xs">
                                                {new Date(sub.created_at).toLocaleDateString()}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>

                    {/* RIGHT: COMPOSE SECTION (1/3 width) */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 sticky top-8">
                            <h2 className="text-xl font-bold text-[#172554] mb-4 flex items-center gap-2">
                                <Send size={20} className="text-[#61DAFB]" /> Compose Message
                            </h2>

                            <div className="space-y-4">

                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1">
                                        <UserCheck size={12} /> To: ({selectedEmails.length})
                                    </label>
                                    <div className="min-h-[60px] p-2 bg-slate-50 border border-slate-200 rounded-md flex flex-wrap gap-2 max-h-[150px] overflow-y-auto">
                                        {selectedEmails.length > 0 ? (
                                            selectedEmails.map((email) => (
                                                <Badge
                                                    key={email}
                                                    variant="secondary"
                                                    className="bg-[#172554] text-white hover:bg-red-500 gap-1 pr-1 transition-colors cursor-pointer group"
                                                    onClick={() => removeEmail(email)}
                                                >
                                                    <span className="text-[10px]">{email}</span>
                                                    <X size={12} className="group-hover:scale-125 transition-transform" />
                                                </Badge>
                                            ))
                                        ) : (
                                            <p className="text-xs text-slate-400 italic py-2 px-1">No recipients selected from the list...</p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase">Subject</label>
                                    <Input
                                        placeholder="E.g. Monthly Corporate Update"
                                        value={emailSubject}
                                        onChange={(e) => setEmailSubject(e.target.value)}
                                        className="mt-1"
                                    />
                                </div>



                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase">Message</label>
                                    <Textarea
                                        placeholder="Write your email content here..."
                                        rows={8}
                                        value={emailBody}
                                        onChange={(e) => setEmailBody(e.target.value)}
                                        className="mt-1 resize-none"
                                    />
                                </div>

                                <Button
                                    className="w-full bg-[#172554] hover:bg-[#1e3a8a] py-6 shadow-md transition-all"
                                    disabled={selectedEmails.length === 0 || isSending}
                                    onClick={handleSendEmail}
                                >
                                    {isSending ? "Sending..." : `Send to ${selectedEmails.length} Recipients`}
                                </Button>

                                <p className="text-[10px] text-center text-slate-400 italic">
                                    Note: Emails will be sent individually to prevent spam flagging.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};