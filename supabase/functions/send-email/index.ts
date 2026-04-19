import { serve } from "https://deno.land/std@0.177.0/http/server.ts"

// 1. Define the headers for CORS
const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // You can change '*' to your vercel URL for extra security later
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // 2. Handle the "Preflight" request from the browser
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { to, subject, html } = await req.json()
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "SM Group <onboarding@resend.dev>",
        to,
        subject,
        html,
      }),
    })

    const data = await res.json()

    // 3. Return the response WITH the CORS headers
    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})