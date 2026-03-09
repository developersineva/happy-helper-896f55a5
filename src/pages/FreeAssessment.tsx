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
import { Check, ArrowRight, Send, Compass, DollarSign, BarChart3, Map } from "lucide-react";

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

const solutionCards = [
  {
    icon: Compass,
    title: "Design Opportunities",
    desc: "Identify layout improvements and design upgrades that elevate the overall space.",
  },
  {
    icon: DollarSign,
    title: "Investment Estimate",
    desc: "Understand the approximate investment range required for your renovation goals.",
  },
  {
    icon: BarChart3,
    title: "Value Optimization",
    desc: "Discover which renovations can significantly increase property value or rental income.",
  },
  {
    icon: Map,
    title: "Project Roadmap",
    desc: "Receive a clear next-step strategy for turning your vision into reality.",
  },
];

const FreeAssessment = () => {
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
    title: "Free Luxury Renovation Design Assessment | Future Land Capital",
    description:
      "Book your complimentary renovation design assessment. Custom renovation ideas, investment estimates, and property value insights for South Florida & Orlando homeowners.",
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
        project_type: "Free Assessment",
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
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-zinc-900 py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80')",
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
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className="text-amber-400/90 text-sm md:text-base uppercase tracking-widest mb-4"
          >
            FREE LUXURY RENOVATION DESIGN ASSESSMENT
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            Transform Your Property Into a Space That Reflects{" "}
            <span className="text-amber-400">Luxury, Comfort &amp; Value</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1.2}
            className="text-zinc-300 text-lg md:text-xl mb-4 max-w-3xl mx-auto leading-relaxed"
          >
            Future Land Capital helps homeowners, Airbnb hosts, and real estate investors across
            South Florida and Orlando redesign their properties through strategic renovations that
            enhance lifestyle and property value.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1.4}
            className="text-zinc-400 text-base md:text-lg mb-8 max-w-2xl mx-auto"
          >
            For a limited time, we&apos;re offering a complimentary renovation design assessment
            where our experts review your property and suggest the best upgrades based on your goals.
          </motion.p>
          <motion.ul
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1.6}
            className="flex flex-col items-center gap-3 mb-10 text-zinc-200"
          >
            {[
              "Custom renovation ideas tailored to your property",
              "Estimated renovation investment range",
              "Property value improvement insights",
              "Airbnb performance optimization strategies",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm md:text-base">
                <Check className="w-5 h-5 text-amber-400 shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </motion.ul>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}>
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-zinc-900 text-base md:text-lg px-8 py-6 font-semibold shadow-lg"
              onClick={openFormPopup}
            >
              Book Your Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* PAIN POINT */}
      <section className="py-20 md:py-28 bg-zinc-950 border-t border-zinc-800">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Renovating Without The Right Plan Can Be{" "}
            <span className="text-amber-400">Expensive</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
            className="text-zinc-400 text-lg mb-8"
          >
            Many homeowners delay renovations because they don&apos;t know:
          </motion.p>
          <motion.ul
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.5}
            className="space-y-3 text-left max-w-xl mx-auto mb-8 text-zinc-300"
          >
            {[
              "Where to begin",
              "Which upgrades actually increase property value",
              "How much the project will realistically cost",
              "Whether the renovation will deliver the return they expect",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.8}
            className="text-zinc-400 text-base md:text-lg mb-6"
          >
            Without expert planning, renovations often lead to overspending, design mistakes, and
            poor ROI.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-white font-medium text-base md:text-lg"
          >
            That&apos;s why our team begins every project with a strategic design assessment,
            ensuring your renovation decisions are guided by experience, not guesswork.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1.2} className="mt-10 flex justify-center">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-zinc-900 px-8 py-6 text-base md:text-lg font-semibold shadow-lg"
              onClick={openFormPopup}
            >
              Book Your Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-20 md:py-28 bg-zinc-900">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-bold text-center text-white mb-4"
          >
            How Our Renovation Assessment Works
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
            className="text-zinc-400 text-lg text-center mb-14 max-w-2xl mx-auto"
          >
            During your consultation, our team will review your property and discuss:
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {solutionCards.map((card, i) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.15}
                className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-500/10 mb-5">
                  <card.icon className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-3">{card.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.8} className="mt-12 flex justify-center">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-zinc-900 px-8 py-6 text-base md:text-lg font-semibold shadow-lg"
              onClick={openFormPopup}
            >
              Book Your Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FINANCING */}
      <section className="py-20 md:py-28 bg-zinc-950 border-t border-zinc-800">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Renovate Today — Start Paying After{" "}
            <span className="text-amber-400">90 Days</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            className="text-zinc-300 text-base md:text-lg mb-4"
          >
            We understand that large renovation projects require financial flexibility.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.4}
            className="text-zinc-400 text-base md:text-lg mb-10"
          >
            Future Land Capital now offers a financing option that allows property owners to begin
            renovations immediately while delaying payments for 90 days.
          </motion.p>
          <motion.ul
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.6}
            className="flex flex-col items-center gap-4 mb-10 text-zinc-200 text-lg"
          >
            {[
              "Start your renovation today",
              "Begin payments after 90 days",
              "Flexible payment options available",
            ].map((f) => (
              <li key={f} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-amber-400 shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </motion.ul>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.8}
            className="text-zinc-400 text-sm md:text-base"
          >
            This allows homeowners and investors to improve their properties without immediate
            financial pressure.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="mt-10 flex justify-center">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-zinc-900 px-8 py-6 text-base md:text-lg font-semibold shadow-lg"
              onClick={openFormPopup}
            >
              Book Your Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* AUTHORITY */}
      <section className="py-20 md:py-28 bg-zinc-900 border-t border-zinc-800/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-center"
          >
            Why Property Owners Choose{" "}
            <span className="text-amber-400">Future Land Capital</span>
          </motion.h2>
          <div className="w-16 h-0.5 bg-amber-400/60 mx-auto mb-8" aria-hidden />
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            className="text-zinc-400 text-lg md:text-xl text-center max-w-2xl mx-auto mb-12"
          >
            Our team focuses on strategic renovations designed to increase both lifestyle value and
            financial return.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
            className="text-white font-semibold text-lg mb-4 text-center"
          >
            We specialize in:
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.4}
            className="bg-zinc-950/80 border border-zinc-700/80 rounded-2xl p-6 md:p-8 mb-12 max-w-2xl mx-auto"
          >
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {[
                "Luxury kitchen remodeling",
                "Bathroom transformations",
                "Full property renovations",
                "Airbnb property upgrades",
                "Investor renovation projects and flips",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-200">
                  <Check className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.6}
            className="text-zinc-400 text-base md:text-lg text-center max-w-2xl mx-auto leading-relaxed"
          >
            With extensive experience working with South Florida and Orlando properties, we
            understand how to deliver renovations that align with both design trends and market
            demand.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.8} className="mt-10 flex justify-center">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-zinc-900 px-8 py-6 text-base md:text-lg font-semibold shadow-lg"
              onClick={openFormPopup}
            >
              Book Your Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28 bg-zinc-950 border-t border-zinc-800">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Start Planning Your Property Transformation
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            className="text-zinc-400 text-base md:text-lg mb-10"
          >
            Book your free renovation design assessment and discover how your property can be
            transformed with the right strategy.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.4}>
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-zinc-900 px-8 py-6 text-base md:text-lg font-semibold shadow-lg"
              onClick={openFormPopup}
            >
              Book Your Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FOOTER — dark charcoal, sienna CTA, green separator */}
      <footer className="bg-[#1a1a1a] border-t border-zinc-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 max-w-[1200px]">
          <div className="text-center md:text-left">
            <p className="font-display text-lg md:text-xl font-semibold text-white">Future Land Capital</p>
            <p className="text-zinc-400 text-sm mt-0.5">Sustainable Luxury Living</p>
          </div>
          <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-zinc-900 font-semibold rounded-lg px-8 py-6 text-base shrink-0"
              onClick={openFormPopup}
            >
              Book Your Consultation
            </Button>
        </div>
      </footer>

    </div>
  );
};

export default FreeAssessment;
