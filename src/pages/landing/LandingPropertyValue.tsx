import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useToast } from "@/hooks/use-toast";
import futureLandLogo from "@/assets/Future_Land_Logo.svg";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
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
  "Interior Redesign",
  "Other Services",
];

const LandingPropertyValue = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [] as string[],
  });
  const [loading, setLoading] = useState(false);
  const [formPopupOpen, setFormPopupOpen] = useState(false);
  const { toast } = useToast();

  useDocumentTitle({
    title: "Property Value Increase | Before Selling | Future Land Capital",
    description:
      "Increase your property value before selling. Targeted renovations for resale. Request a Property Value Renovation Plan from Future Land Capital.",
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
        project_type: "Property Value Increase",
        message,
      });
      if (error) throw error;
      toast({ title: "Request sent!", description: "We'll get back to you within 24 hours." });
      setFormData({ name: "", email: "", phone: "", services: [] });
      setFormPopupOpen(false);
      setTimeout(() => navigate("/thank-you"), 2000);
    } catch {
      toast({ title: "Error", description: "Failed to submit. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const openFormPopup = () => setFormPopupOpen(true);

  return (
    <div className="landing-page min-h-screen bg-zinc-950 text-white">
      {/* HERO — same structure as Free Assessment */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-zinc-900 py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80')",
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
            Increase Your Property Value{" "}
            <span style={{ color: "#a67a54" }}>Before Selling</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1.2}
            className="text-zinc-300 text-lg md:text-xl mb-4 max-w-3xl mx-auto leading-relaxed"
          >
            Many homeowners leave thousands of dollars on the table by selling properties that
            haven&apos;t been strategically upgraded.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1.4}
            className="text-zinc-400 text-base md:text-lg mb-4 max-w-2xl mx-auto"
          >
            Future Land Capital helps property owners implement targeted renovations that increase
            resale value and buyer appeal.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1.5}
            className="text-zinc-400 text-base md:text-lg mb-10 max-w-2xl mx-auto"
          >
            Request a Property Value Renovation Plan today.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}>
            <Button
              size="lg"
              className="text-white text-base md:text-lg px-8 py-6 font-semibold shadow-lg hover:opacity-95"
              style={{ backgroundColor: "#a67a54" }}
              onClick={openFormPopup}
            >
              Request Renovation Plan
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
            Homes that haven&apos;t been upgraded often face:
          </motion.h2>
          <motion.ul
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
            className="space-y-3 max-w-xl mx-auto mb-6 text-zinc-300 flex flex-col items-center"
          >
            {["lower buyer interest", "reduced offers", "longer time on the market"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 justify-center">
                <span className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: "#a67a54" }} />
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
            Small, strategic upgrades can dramatically improve both buyer perception and market value.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.7} className="flex justify-center">
            <Button
              size="lg"
              className="text-white px-8 py-6 text-base md:text-lg font-semibold shadow-lg hover:opacity-95"
              style={{ backgroundColor: "#a67a54" }}
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
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-zinc-300 text-lg md:text-xl mb-6"
          >
            Our renovation experts analyze your property to determine which upgrades will deliver the strongest return.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            className="text-zinc-400 text-base md:text-lg mb-6"
          >
            Common high-impact improvements include:
          </motion.p>
          <motion.ul
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.4}
            className="space-y-3 max-w-xl mx-auto mb-6 text-zinc-300 flex flex-col items-center"
          >
            {["kitchen modernization", "bathroom upgrades", "interior redesign", "lighting and layout improvements"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 justify-center">
                <span className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: "#a67a54" }} />
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
            The goal is to create a property that attracts buyers and maximizes value.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.8} className="flex justify-center">
            <Button
              size="lg"
              className="text-white px-8 py-6 text-base md:text-lg font-semibold shadow-lg hover:opacity-95"
              style={{ backgroundColor: "#a67a54" }}
              onClick={openFormPopup}
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
            See How Much Value Your Property Could Gain
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            className="text-zinc-400 text-base md:text-lg mb-10"
          >
            Schedule your property renovation consultation.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.4}>
            <Button
              size="lg"
              className="text-white px-8 py-6 text-base md:text-lg font-semibold shadow-lg hover:opacity-95"
              style={{ backgroundColor: "#a67a54" }}
              onClick={openFormPopup}
            >
              Book Your Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FORM SECTION — same as Free Assessment */}
      <section id="property-value-form" className="py-20 md:py-28 bg-zinc-900 scroll-mt-20 border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="bg-zinc-950 rounded-2xl border border-zinc-700 p-8 md:p-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2 text-center">
                Book Your Consultation
              </h2>
              <p className="text-zinc-400 text-sm text-center mb-6">
                Request your Property Value Renovation Plan. We&apos;ll reach out to discuss your property and goals.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-200 mb-1.5">Name *</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="bg-zinc-800 border-zinc-600 text-white placeholder:text-zinc-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-200 mb-1.5">Email *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                    className="bg-zinc-800 border-zinc-600 text-white placeholder:text-zinc-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-200 mb-1.5">Phone *</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 123-4567"
                    required
                    className="bg-zinc-800 border-zinc-600 text-white placeholder:text-zinc-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-200 mb-1.5">
                    Which services are you interested in? *
                  </label>
                  <div className="space-y-2 mt-2">
                    {serviceOptions.map((option) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer text-zinc-300">
                        <Checkbox
                          checked={formData.services.includes(option)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setFormData({ ...formData, services: [...formData.services, option] });
                            } else {
                              setFormData({ ...formData, services: formData.services.filter((s) => s !== option) });
                            }
                          }}
                          className="border-zinc-600 data-[state=checked]:bg-[#a67a54] data-[state=checked]:border-[#a67a54]"
                        />
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  size="lg"
                  className="w-full text-white font-semibold hover:opacity-95"
                  style={{ backgroundColor: "#a67a54" }}
                >
                  {loading ? "Sending…" : "Submit Request"}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER — same as Free Assessment, Property Value color */}
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
            onClick={openFormPopup}
          >
            Book Your Consultation
          </Button>
        </div>
      </footer>

      {/* FORM POPUP — dark like Free Assessment */}
      <Dialog open={formPopupOpen} onOpenChange={setFormPopupOpen}>
        <DialogContent className="sm:max-w-md bg-zinc-950 border-zinc-700 text-white max-h-[90vh] overflow-y-auto mx-3 sm:mx-4 my-4 sm:my-0">
          <DialogHeader>
            <DialogTitle className="text-white text-xl sm:text-2xl font-bold">Book Your Consultation</DialogTitle>
            <DialogDescription className="text-zinc-400">
              Request your Property Value Renovation Plan. We'll reach out to discuss your property and goals.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-200 mb-1.5">Name *</label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                required
                className="bg-zinc-800 border-zinc-600 text-white placeholder:text-zinc-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-200 mb-1.5">Email *</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                required
                className="bg-zinc-800 border-zinc-600 text-white placeholder:text-zinc-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-200 mb-1.5">Phone *</label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(555) 123-4567"
                required
                className="bg-zinc-800 border-zinc-600 text-white placeholder:text-zinc-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-200 mb-1.5">Which services are you interested in? *</label>
              <div className="mt-2 space-y-2">
                {serviceOptions.map((option) => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer text-zinc-300">
                    <Checkbox
                      checked={formData.services.includes(option)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setFormData({ ...formData, services: [...formData.services, option] });
                        } else {
                          setFormData({ ...formData, services: formData.services.filter((s) => s !== option) });
                        }
                      }}
                      className="border-zinc-600 data-[state=checked]:bg-[#a67a54] data-[state=checked]:border-[#a67a54]"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>
            <Button
              type="submit"
              disabled={loading}
              size="lg"
              className="w-full text-white font-semibold hover:opacity-95"
              style={{ backgroundColor: "#a67a54" }}
            >
              {loading ? "Sending…" : "Submit Request"}
              <Send className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LandingPropertyValue;
