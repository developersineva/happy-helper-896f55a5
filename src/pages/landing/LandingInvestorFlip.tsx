import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useToast } from "@/hooks/use-toast";
import futureLandLogo from "@/assets/Future_Land_Logo.svg";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { ArrowRight, Send } from "lucide-react";

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
  "Interior Redesign",
  "Other Services",
];

const projectStartOptions = ["In few days", "In few weeks", "In few months"];
const BOOKING_CTA_URL = "https://api.hiighvance.com/widget/bookings/book-your-consultation/landing";

const LandingInvestorFlip = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    projectStart: "",
    services: [] as string[],
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useDocumentTitle({
    title: "Investor Build & Flip Strategy | Florida | Future Land Capital",
    description:
      "Maximize flip profit with strategic renovations. Future Land Capital partners with property investors in Florida. Request a Flip Project Analysis.",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.city.trim() ||
      !formData.projectStart.trim()
    ) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    if (formData.services.length === 0) {
      toast({ title: "Please select at least one service", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const message =
        `City: ${formData.city.trim()}\n` +
        `Project start: ${formData.projectStart}\n` +
        `Services: ${formData.services.join(", ")}`;
      const { error } = await supabase.from("contact_submissions").insert({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        project_type: "Investor Build & Flip",
        message,
      });
      if (error) throw error;
      toast({ title: "Request sent!", description: "We'll get back to you within 24 hours." });
      setFormData({ name: "", email: "", phone: "", city: "", projectStart: "", services: [] });
      setTimeout(() => navigate("/thank-you"), 2000);
    } catch {
      toast({ title: "Error", description: "Failed to submit. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const openBookingLink = () => {
    window.open(BOOKING_CTA_URL, "_blank", "noopener,noreferrer");
  };
  const handleServicesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedServices = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData({ ...formData, services: selectedServices });
  };

  return (
    <div className="landing-page min-h-screen bg-zinc-950 text-white">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-zinc-900 py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[rgb(24_24_27/92%)]" />
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <motion.img
            src={futureLandLogo}
            alt="Future Land Capital"
            className="h-20 md:h-28 mx-auto mb-6"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          />
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-display font-bold text-[2.5rem] sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            Real Estate Investors in Florida
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1.2}
            style={{ color: "#a67a54" }}
            className="text-lg md:text-xl mb-4 max-w-3xl mx-auto leading-relaxed"
          >
            Maximize Your Flip Profit With Strategic Renovations.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1.4}
            className="text-zinc-400 text-base md:text-lg mb-4 max-w-2xl mx-auto"
          >
            Future Land Capital partners with property investors to execute renovations designed
            specifically to increase resale value.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1.5}
            className="text-zinc-400 text-base md:text-lg mb-10 max-w-2xl mx-auto"
          >
            Request a Flip Project Analysis.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}>
            <Button
              size="lg"
              className="text-white text-base md:text-lg px-8 py-6 font-semibold shadow-lg hover:opacity-95"
              style={{ backgroundColor: "#a67a54" }}
              onClick={openBookingLink}
            >
              Request Flip Project Analysis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 md:py-28 bg-zinc-950 border-t border-zinc-800">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Many flip projects lose profit due to:
          </motion.h2>
          <motion.ul
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
            className="space-y-3 max-w-xl mx-auto mb-6 text-zinc-300 flex flex-col items-center"
          >
            {["incorrect renovation decisions", "excessive upgrade costs", "poor project planning"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 justify-center">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: "#a67a54" }} />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.5}
            className="text-zinc-400 text-lg mb-10"
          >
            Without the right renovation strategy, investors risk overspending while missing the
            upgrades that actually increase resale value.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.7} className="flex justify-center">
            <Button
              size="lg"
              className="text-white px-8 py-6 text-base md:text-lg font-semibold shadow-lg hover:opacity-95"
              style={{ backgroundColor: "#a67a54" }}
              onClick={openBookingLink}
            >
              Book Your Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-20 md:py-28 bg-zinc-900">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-zinc-300 text-lg md:text-xl mb-6"
          >
            Our team helps investors identify high-impact upgrades that deliver maximum resale return.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            className="text-zinc-400 text-base md:text-lg mb-6"
          >
            We focus on:
          </motion.p>
          <motion.ul
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.4}
            className="space-y-3 max-w-xl mx-auto mb-6 text-zinc-300 flex flex-col items-center"
          >
            {["renovation cost efficiency", "buyer-focused design upgrades", "improvements that increase market demand"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 justify-center">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: "#a67a54" }} />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.6}
            className="text-zinc-400 text-base md:text-lg mb-10"
          >
            This approach ensures every renovation decision supports profit optimization.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.8} className="flex justify-center">
            <Button
              size="lg"
              className="text-white px-8 py-6 text-base md:text-lg font-semibold shadow-lg hover:opacity-95"
              style={{ backgroundColor: "#a67a54" }}
              onClick={openBookingLink}
            >
              Book Your Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-zinc-950 border-t border-zinc-800">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Analyze Your Next Flip Project
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            className="text-zinc-400 text-base md:text-lg mb-10"
          >
            Schedule an investor strategy consultation today.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.4}>
            <Button
              size="lg"
              className="text-white px-8 py-6 text-base md:text-lg font-semibold shadow-lg hover:opacity-95"
              style={{ backgroundColor: "#a67a54" }}
              onClick={openBookingLink}
            >
              Book Your Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a1a1a] border-t border-zinc-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 max-w-[1200px]">
          <div className="text-center md:text-left">
            <p className="font-display text-lg md:text-xl font-semibold text-white">Future Land Capital</p>
            <p className="text-zinc-400 text-sm mt-0.5">Sustainable Luxury Living</p>
          </div>
          <Button
            size="lg"
            className="text-white font-semibold rounded-lg px-8 py-6 text-base shrink-0 hover:opacity-95"
            style={{ backgroundColor: "#a67a54" }}
            onClick={openBookingLink}
          >
            Book Your Consultation
          </Button>
        </div>
      </footer>

    </div>
  );
};

export default LandingInvestorFlip;
