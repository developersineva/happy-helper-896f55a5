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
  "Airbnb / Vacation Rental",
  "Other Services",
];
const BOOKING_CTA_URL = "https://api.hiighvance.com/widget/bookings/book-your-consultation/landing";

const LandingAirbnb = () => {
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
    title: "Airbnb Profit Optimization | South Florida & Orlando | Future Land Capital",
    description:
      "Transform your Airbnb into a high-demand listing. Free Airbnb upgrade assessment for hosts in South Florida & Orlando. Increase bookings and nightly rates.",
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
        project_type: "Airbnb Profit Optimization",
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
    <div className="landing-page min-h-screen bg-[#f1f5f9] text-[#1a1a1a]">
      {/* HERO — dark overlay, logo, orange tagline, white headline + highlight, list, CTA (same design as reference) */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 md:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgb(9 9 11 / 94%)" }} />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <motion.img
            src={futureLandLogo}
            alt="Future Land Capital"
            className="h-16 sm:h-20 md:h-24 mx-auto mb-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          />
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.05}
            className="inline-block bg-white text-[#2d5a3d] font-semibold tracking-widest uppercase text-xs sm:text-sm rounded-full border border-[#2d5a3d] mb-5"
            style={{ padding: "6px 16px", marginTop: "16px" }}
          >
            Airbnb Owners in South Florida & Orlando
          </motion.span>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="font-display text-[2.5rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 sm:mb-6 leading-tight"
          >
            Your Property Could Be{" "}
            <span style={{ color: "#a8ffc7" }}>Generating Higher Revenue.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="text-white/95 text-sm sm:text-base md:text-lg mb-4 max-w-2xl mx-auto leading-relaxed"
          >
            Future Land Capital helps Airbnb hosts transform their properties into high-demand listings that attract more bookings and higher nightly rates.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.25}
            className="text-white/95 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Request a Free Airbnb Upgrade Assessment and discover the improvements that could significantly increase your rental performance.
          </motion.p>
          <motion.ul
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="flex flex-col items-center gap-3 mb-8 text-white text-left max-w-md mx-auto"
          >
            {[
              "Begin with a free upgrade assessment",
              "Get ideas that increase bookings and nightly rates",
              "See how your property can earn more",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm sm:text-base">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#2d5a3d] shrink-0">
                <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
              </span>
                <span>{t}</span>
              </li>
            ))}
          </motion.ul>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.4}>
            <Button
              size="lg"
              className="w-full sm:w-auto text-white px-6 py-4 sm:px-8 sm:py-6 text-sm sm:text-base md:text-lg font-semibold rounded-lg hover:opacity-95"
              style={{ backgroundColor: "#2d5a3d" }}
              onClick={openFormPopup}
            >
              Check If Your Project Qualifies
              <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CARD 2 — Problem: "Here's Where Most Go Wrong" */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-2xl p-6 sm:p-8">
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4 text-center">
              Many Airbnb Listings Underperform Due To:
            </h2>
            <ul className="space-y-3 max-w-md mx-auto mb-6 text-[#1a1a1a] text-left">
              {["Outdated interior design", "Poor space layout", "Lack of visual appeal in listing photos", "Missing amenities guests expect"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#2d5a3d] shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#4b5563] text-base text-center">
              In today's competitive market, design and experience play a major role in determining occupancy and pricing.
            </p>
            <div className="mt-6 flex justify-center">
              <Button size="lg" className="w-full sm:w-auto bg-[#2d5a3d] hover:bg-[#234a32] text-white px-6 py-4 font-semibold rounded-lg text-sm sm:text-base" onClick={openFormPopup}>
                Book Your Consultation
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CARD 3 — Promise / Solution */}
      <section className="py-10 md:py-14 bg-[#09090b]">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-[#ffffff] rounded-2xl border-2 border-[#2d5a3d] shadow-sm p-6 sm:p-8">
            <p className="text-center text-[#2d5a3d] font-bold tracking-widest uppercase text-xs mb-3">Here Is Our Promise</p>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4 text-center">
              Renovations That Increase <span style={{ color: "#2d5a3d" }}>Booking Potential</span>
            </h2>
            <p className="text-[#4b5563] text-base text-center mb-6">
              Our renovation strategies focus on creating guest-focused environments that enhance the overall stay experience. We help hosts implement improvements such as:
            </p>
            <ul className="space-y-3 max-w-md mx-auto mb-6 text-[#1a1a1a] text-left">
              {["Modern, photo-friendly interiors", "Upgraded kitchens and bathrooms", "Optimized layouts for comfort and functionality", "Design upgrades that stand out in listing photos"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#2d5a3d] shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#4b5563] text-base text-center mb-6">These upgrades can help your property attract more guests and command higher nightly rates.</p>
            <div className="flex justify-center">
              <Button size="lg" className="w-full sm:w-auto bg-[#2d5a3d] hover:bg-[#234a32] text-white px-6 py-4 font-semibold rounded-lg text-sm sm:text-base" onClick={openFormPopup}>
                Book Your Consultation
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CARD 4 — ROI / Strategic upgrades */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-2xl p-6 sm:p-8">
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6 text-center">
              Strategic Property Upgrades Can Influence:
            </h2>
            <ul className="space-y-3 max-w-md mx-auto mb-6 text-[#1a1a1a] text-left">
              {["Guest booking decisions", "Listing visibility", "Review ratings", "Revenue potential"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#2d5a3d] shrink-0">
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#4b5563] text-base text-center">Our goal is to ensure every renovation decision contributes to stronger property performance.</p>
            <div className="mt-6 flex justify-center">
              <Button size="lg" className="w-full sm:w-auto bg-[#2d5a3d] hover:bg-[#234a32] text-white px-6 py-4 font-semibold rounded-lg text-sm sm:text-base" onClick={openFormPopup}>
                Book Your Consultation
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CARD 5 — Final CTA (Growth Flow style offer card) */}
      <section className="py-12 md:py-16 bg-[#09090b]">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-2xl border-2 border-[#2d5a3d] shadow-lg p-6 sm:p-10">
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-2 text-center">
              Discover How Your Property Can Earn More
            </h2>
            <p className="text-center text-[#4b5563] text-base mb-6">Schedule your Airbnb upgrade assessment today.</p>
            <div className="bg-[#f8f9fa] rounded-xl p-6 mb-6">
              <p className="text-center font-semibold text-[#1a1a1a] mb-4">Get Your Free Airbnb Upgrade Assessment</p>
              <ul className="space-y-2 max-w-sm mx-auto text-[#4b5563] text-sm text-left">
                <li className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#2d5a3d] shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </span>
                  Custom renovation ideas for your listing
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#2d5a3d] shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </span>
                  Estimated impact on bookings and rates
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#2d5a3d] shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </span>
                  Property value improvement insights
                </li>
              </ul>
            </div>
            <Button size="lg" className="w-full text-white py-6 text-base font-semibold rounded-xl hover:opacity-95" style={{ backgroundColor: "#2d5a3d" }} onClick={openFormPopup}>
              Book Your Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-center text-[#6b7280] text-xs mt-4">You will need to fill the form after clicking the button.</p>
          </motion.div>
        </div>
      </section>

      {/* FOOTER — Growth Flow style simple */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 max-w-[1200px]">
          <p className="text-[#6b7280] text-sm">© {new Date().getFullYear()} Future Land Capital. All rights reserved.</p>
          <Button size="lg" className="w-full md:w-auto bg-[#2d5a3d] hover:bg-[#234a32] text-white font-semibold rounded-lg px-6 py-4 text-sm sm:text-base" onClick={openFormPopup}>
            Book Your Consultation
          </Button>
        </div>
      </footer>

    </div>
  );
};

export default LandingAirbnb;
