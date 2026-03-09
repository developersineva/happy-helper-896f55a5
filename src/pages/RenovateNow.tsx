import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useToast } from "@/hooks/use-toast";
import futureLandLogo from "@/assets/Future_Land_Logo.svg";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, ArrowRight, Send } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

const serviceOptions = [
  "Kitchen Remodelling",
  "Bathroom Remodelling",
  "Whole Home Remodelling",
  "Impact Windows",
  "Other Services",
];
const BOOKING_CTA_URL = "https://api.hiighvance.com/widget/bookings/book-your-consultation/landing";

const RenovateNow = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [] as string[],
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useDocumentTitle({
    title: "Renovate Now — Pay After 90 Days | Future Land Capital",
    description:
      "Start your renovation today and pay after 90 days. Flexible financing for homeowners and investors. Check if your project qualifies.",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    if (formData.services.length === 0) {
      toast({ title: "Please select at least one service", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const message = "Services: " + formData.services.join(", ");
      const { error } = await supabase.from("contact_submissions").insert({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        project_type: "Renovate Now",
        message,
      });
      if (error) throw error;
      toast({ title: "Request sent!", description: "We'll get back to you within 24 hours." });
      setFormData({ name: "", email: "", phone: "", services: [] });
      setTimeout(() => navigate("/thank-you"), 2000);
    } catch {
      toast({ title: "Error", description: "Failed to submit. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const openFormPopup = () => {
    window.open(BOOKING_CTA_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="landing-page min-h-screen bg-[#f8f9fa] text-[#1a1a1a]">
      {/* HERO — dark overlay on image, logo, accent, CTA — mobile responsive */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden py-12 sm:py-16 md:py-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[#09090b]/85" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <motion.img
            src={futureLandLogo}
            alt="Future Land Capital"
            className="h-16 sm:h-20 md:h-28 mx-auto mb-3 sm:mb-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          />
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="font-semibold tracking-wide sm:tracking-widest uppercase text-xs sm:text-sm mb-4 sm:mb-6 break-words px-1"
            style={{ color: "#ea580c" }}
          >
            Renovate Now — Pay After 90 Days
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="font-display text-[2.5rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
          >
            Upgrade Your Property Without Waiting{" "}
            <span style={{ color: "#ea580c" }}>Months or Years</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="text-white/90 text-sm sm:text-base md:text-lg mb-3 sm:mb-4 max-w-2xl mx-auto"
          >
            Future Land Capital now offers a renovation program that allows homeowners and investors to start their renovation today while delaying payments for 90 days.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className="text-white/90 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto"
          >
            This flexible structure makes it easier to transform your property without postponing improvements that could increase its value.
          </motion.p>
          <motion.ul
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.6}
            className="flex flex-col items-center gap-2 sm:gap-3 mb-8 sm:mb-10 text-white"
          >
            {[
              "Begin renovations immediately",
              "Start payments after 90 days",
              "Flexible payment structure available",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2 text-xs sm:text-sm md:text-base text-left sm:text-center w-full sm:w-auto justify-center">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" style={{ color: "#ea580c" }} />
                <span>{t}</span>
              </li>
            ))}
          </motion.ul>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.8} className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto text-white px-6 py-4 sm:px-8 sm:py-6 text-sm sm:text-base md:text-lg font-semibold shadow-lg rounded-lg hover:opacity-95"
              style={{ backgroundColor: "#ea580c" }}
              onClick={openFormPopup}
            >
              Check If Your Project Qualifies
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM — LP style: “Here’s Where Most Go Wrong” */}
      <section className="py-12 sm:py-16 md:py-24 bg-[#f8f9fa] border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-xl sm:text-2xl md:text-4xl font-bold text-[#1a1a1a] mb-4 sm:mb-6"
          >
            Many Property Owners Delay Renovations For Too Long
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            className="text-[#4b5563] text-base md:text-lg mb-4 sm:mb-6 font-medium"
          >
            Postponing renovations often results in:
          </motion.p>
          <motion.ul
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.4}
            className="space-y-3 max-w-md mx-auto mb-8 text-[#1a1a1a] text-left"
          >
            {[
              "Outdated kitchens and bathrooms",
              "Reduced property value",
              "Lower Airbnb income potential",
              "Spaces that no longer reflect your lifestyle",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#ea580c] mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.7}
            className="text-[#6b7280] text-base md:text-lg"
          >
            In many cases, delaying upgrades can actually cost more in the long term due to missed value opportunities.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.9} className="mt-8 sm:mt-10 flex justify-center">
            <Button size="lg" className="w-full sm:w-auto bg-[#ea580c] hover:bg-[#c2410c] text-white px-6 py-4 sm:px-8 sm:py-6 font-semibold rounded-lg text-sm sm:text-base" onClick={openFormPopup}>
              Book Your Consultation
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* SOLUTION — “HERE IS OUR PROMISE” — dark bg #09090b, white text */}
      <section className="py-12 sm:py-16 md:py-24 bg-[#09090b] border-b border-zinc-800">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-zinc-400 mb-4"
          >
            Here Is Our Promise
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            className="font-display text-xl sm:text-2xl md:text-4xl font-bold text-white mb-4 sm:mb-6"
          >
            A Smarter Way To <span className="text-[#ea580c]">Renovate</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            className="text-zinc-300 text-base md:text-lg mb-4 sm:mb-6"
          >
            Future Land Capital allows you to move forward with your renovation project while keeping your financial flexibility intact.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
            className="text-zinc-300 text-base mb-8"
          >
            This approach enables property owners to:
          </motion.p>
          <motion.ul
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.5}
            className="space-y-3 max-w-md mx-auto mb-10 text-white text-left"
          >
            {[
              "Increase property value sooner",
              "Improve living spaces immediately",
              "Enhance rental income potential",
              "Spread renovation costs comfortably",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#ea580c] mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.8} className="flex justify-center">
            <Button size="lg" className="w-full sm:w-auto bg-[#ea580c] hover:bg-[#c2410c] text-white px-6 py-4 sm:px-8 sm:py-6 font-semibold rounded-lg text-sm sm:text-base" onClick={openFormPopup}>
              Book Your Consultation
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* PROJECT TYPES — LP style */}
      <section className="py-12 sm:py-16 md:py-24 bg-[#f8f9fa] border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-xl sm:text-2xl md:text-4xl font-bold text-[#1a1a1a] mb-4 sm:mb-6"
          >
            Our Team Specializes In High-Impact Renovations
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2} className="text-[#4b5563] text-lg mb-10">Including:</motion.p>
          <motion.ul
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.4}
            className="space-y-3 max-w-md mx-auto mb-10 text-[#1a1a1a] text-left"
          >
            {[
              "Luxury kitchen remodels",
              "Modern bathroom upgrades",
              "Complete home transformations",
              "Airbnb property redesigns",
              "Investment property renovations",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#ea580c] shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.7}
            className="text-[#6b7280] text-base md:text-lg"
          >
            Each project is carefully planned to ensure the renovation delivers both visual impact and financial value.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.9} className="mt-8 sm:mt-10 flex justify-center">
            <Button size="lg" className="w-full sm:w-auto bg-[#ea580c] hover:bg-[#c2410c] text-white px-6 py-4 sm:px-8 sm:py-6 font-semibold rounded-lg text-sm sm:text-base" onClick={openFormPopup}>
              Book Your Consultation
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA — dark bg #09090b, white text */}
      <section className="py-12 sm:py-16 md:py-24 bg-[#09090b] border-b border-zinc-800">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-xl sm:text-2xl md:text-4xl font-bold text-white mb-4 sm:mb-6"
          >
            See If Your Renovation Project Qualifies
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            className="text-zinc-300 text-sm sm:text-base md:text-lg mb-8 sm:mb-10"
          >
            Schedule a consultation with our team to explore your options.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.4}>
            <Button size="lg" className="w-full sm:w-auto bg-[#ea580c] hover:bg-[#c2410c] text-white px-6 py-4 sm:px-8 sm:py-6 font-semibold rounded-lg text-sm sm:text-base" onClick={openFormPopup}>
              Book Your Consultation
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FOOTER — dark bg #09090b, white text */}
      <footer className="bg-[#09090b] border-t border-zinc-800 py-6">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 max-w-[1200px]">
          <div className="text-center md:text-left">
            <p className="font-display text-base sm:text-lg md:text-xl font-semibold text-white">Future Land Capital</p>
            <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">Sustainable Luxury Living</p>
          </div>
          <Button size="lg" className="w-full md:w-auto bg-[#ea580c] hover:bg-[#c2410c] text-white font-semibold rounded-lg px-6 py-4 sm:px-8 sm:py-6 shrink-0 text-sm sm:text-base" onClick={openFormPopup}>
            Book Your Consultation
          </Button>
        </div>
      </footer>

    </div>
  );
};

export default RenovateNow;
