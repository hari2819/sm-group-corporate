import { serve } from "https://deno.land/std@0.177.0/http/server.ts"

const RESEND_API_KEY = "re_Jzvi2SQN_MMoAqY824ZoJRmU98dKShg1n"

serve(async (req) => {
  const { to, subject, html } = await req.json()

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "SM Group <cyberhacker64@gmail.com>", // Change this after domain verification
      to,
      subject,
      html,
    }),
  })

  const data = await res.json()
  return new Response(JSON.stringify(data), { headers: { "Content-Type": "application/json" } })
})