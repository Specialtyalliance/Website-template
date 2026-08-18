import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const SERVICE_INFO = {
  services: [
    "General Dentistry", "Teeth Cleaning", "Cavity Fillings", "Root Canals",
    "Tooth Extractions", "Dental Crowns", "Dental Bridges", "Dentures",
    "Invisalign", "Teeth Whitening", "Veneers", "Dental Implants",
    "Emergency Dentistry", "Pediatric Dentistry", "Periodontal Treatment",
  ],
  insurance: ["Delta Dental", "Cigna", "Aetna", "MetLife", "Guardian", "United Concordia", "Careington", "Humana"],
  hours: {
    monday: "8:00 AM - 5:00 PM",
    tuesday: "8:00 AM - 5:00 PM",
    wednesday: "8:00 AM - 5:00 PM",
    thursday: "8:00 AM - 5:00 PM",
    friday: "8:00 AM - 2:00 PM",
    saturday: "Closed",
    sunday: "Closed",
  },
  location: "We're located in the heart of the city. Call us for exact address and directions.",
  phone: "Call us at (555) 123-4567",
  bookingUrl: "/book-appointment",
};

function generateResponse(message: string, history: Array<{ role: string; content: string }>): string {
  const msg = message.toLowerCase().trim();

  if (msg.match(/schedule|appointment|book|booking|visit|consult/)) {
    return "I'd be happy to help you schedule an appointment! You can book directly through our online booking page, or I can note your preferred time. What day works best for you?";
  }

  if (msg.match(/service|services|treatment|offer|do you do/)) {
    return "We offer a wide range of dental services including:\\n\\n• General Dentistry (cleanings, fillings, root canals)\\n• Cosmetic Dentistry (Invisalign, whitening, veneers)\\n• Restorative Dentistry (crowns, bridges, dentures, implants)\\n• Emergency Dentistry\\n• Pediatric Dentistry\\n\\nWhich service are you most interested in?";
  }

  if (msg.match(/insurance|payment|cost|price|financ|cover|accept/)) {
    return "We accept most major dental insurance plans including Delta Dental, Cigna, Aetna, MetLife, Guardian, and more. We also offer flexible payment options and financing plans. Would you like to know if we accept your specific insurance?";
  }

  if (msg.match(/hour|open|close|time|when.*available|location|where|address|direction/)) {
    return "Our office hours are:\\n• Mon - Thu: 8:00 AM - 5:00 PM\\n• Friday: 8:00 AM - 2:00 PM\\n• Sat & Sun: Closed\\n\\nWe're located in the heart of the city. Call us at (555) 123-4567 for exact address and directions.";
  }

  if (msg.match(/contact|phone|call|reach|email|number/)) {
    return "You can reach us at (555) 123-4567. Our office hours are Monday through Thursday 8 AM - 5 PM, and Friday 8 AM - 2 PM. You can also use our contact form on the Contact page.";
  }

  if (msg.match(/emergency|urgent|pain|toothache|broken|chipped|bleeding|swell|abscess|knocked/)) {
    return "For dental emergencies, please call us immediately at (555) 123-4567. If it's after hours and you're experiencing a severe dental emergency, go to your nearest emergency room. Would you like me to help you book an emergency appointment?";
  }

  if (msg.match(/invisalign|aligner|straighten|braces/)) {
    return "Yes! We offer Invisalign clear aligners as a modern alternative to traditional braces. Invisalign uses a series of custom-made, nearly invisible aligners to gradually straighten your teeth. Most treatments take 12-18 months. Would you like to schedule a consultation to see if Invisalign is right for you?";
  }

  if (msg.match(/whitening|white|bleach|stain/)) {
    return "We offer professional teeth whitening treatments that can brighten your smile by several shades. Our in-office treatment takes about an hour, or we can provide take-home whitening kits. Would you like to schedule a whitening consultation?";
  }

  if (msg.match(/implant|missing tooth|replace.*tooth/)) {
    return "Dental implants are a permanent solution for missing teeth. They look, feel, and function like natural teeth. The process typically takes a few months from start to finish. Would you like to schedule a consultation to discuss implants?";
  }

  if (msg.match(/clean|cleaning|checkup|exam|hygienist/)) {
    return "Regular cleanings are recommended every 6 months. During your visit, our hygienist will clean and polish your teeth, and the dentist will perform a thorough exam. Would you like to schedule your next cleaning?";
  }

  if (msg.match(/new patient|first visit|sign up|register/)) {
    return "Welcome! As a new patient, your first visit will include a comprehensive exam, X-rays, and a cleaning. Please arrive 15 minutes early to complete paperwork, or you can fill out new patient forms online on our New Patients page. Would you like to schedule your first appointment?";
  }

  if (msg.match(/hello|hi|hey|greet|good morning|good afternoon|good evening/)) {
    return "Hello! Welcome to Dream Smile Dental. I'm here to help with scheduling, questions about our services, insurance, and more. What can I assist you with today?";
  }

  if (msg.match(/thank|thanks|appreciate/)) {
    return "You're very welcome! Is there anything else I can help you with?";
  }

  if (msg.match(/bye|goodbye|see you|later/)) {
    return "Thank you for chatting with us! If you have any other questions, feel free to reach out anytime. Have a great day!";
  }

  if (msg.match(/price|cost|how much|fee|expensive|afford/)) {
    return "Our pricing varies depending on the treatment. We accept most insurance plans and offer financing options to make care affordable. For specific pricing, I'd recommend scheduling a consultation so we can provide a personalized estimate. Would you like to book an appointment?";
  }

  if (msg.match(/kid|child|children|pediatric|baby tooth/)) {
    return "Yes, we see patients of all ages! Our pediatric dental services include cleanings, fluoride treatments, sealants, and cavity fillings for children. We create a comfortable, fun environment for our youngest patients. Would you like to schedule an appointment for your child?";
  }

  return "I'm here to help with scheduling appointments, answering questions about our services, insurance, office hours, and more. Could you tell me a bit more about what you're looking for, or would you like to schedule an appointment?";
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { widget_token, message, conversation_history } = body;

    if (!widget_token || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!
    );

    const { data: config, error } = await supabase
      .from("chatbot_config")
      .select("booking_url, is_active")
      .eq("widget_token", widget_token)
      .eq("is_active", true)
      .maybeSingle();

    if (error || !config) {
      return new Response(JSON.stringify({ error: "Invalid widget token" }), {
        status: 403,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const response = generateResponse(message, conversation_history || []);

    const showBookingCta = message.toLowerCase().match(/appointment|book|schedule|consult|clean|emergency|whitening|implant|invisalign|new patient/);

    return new Response(JSON.stringify({
      response,
      show_booking_cta: !!showBookingCta,
      booking_url: config.booking_url || SERVICE_INFO.bookingUrl,
      buttons: showBookingCta ? [] : [
        "Schedule an Appointment",
        "See Our Services",
        "Insurance & Payment Options",
        "Office Hours & Location",
        "Contact Us",
      ],
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
