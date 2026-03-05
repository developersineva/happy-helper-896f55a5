import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { ArrowRight, CheckCircle2, Quote, Send } from "lucide-react";
import { motion } from "framer-motion";

const serviceOptions = [
  "Kitchen Remodelling",
  "Bathroom Remodelling",
  "Whole Home Remodelling",
  "Interior Redesign",
  "Other Services",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const testimonials = [
  {
    quote: "Future Land Capital transformed our kitchen and bathroom before we sold. We got multiple offers above asking within two weeks. Their renovation plan was worth every penny.",
    name: "Sarah M.",
    role: "Homeowner, Miami",
  },
  {
    quote: "As an investor, I needed a team that understood flip ROI. They focused on the upgrades that actually moved the needle. Sold the property 40 days after renovation.",
    name: "James R.",
    role: "Real Estate Investor, Orlando",
  },
  {
    quote: "Professional from start to finish. They helped us avoid overspending on low-impact changes and put our budget where it would increase value the most. Highly recommend.",
    name: "Linda & David K.",
    role: "South Florida",
  },
];

const ThankYou = () => {
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
    title: "Thank You | Future Land Capital",
    description: "Thank you for contacting Future Land Capital. We'll get back to you within 24 hours.",
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
        project_type: "Thank You Page",
        message,
      });
      if (error) throw error;
      toast({ title: "Request sent!", description: "We'll get back to you within 24 hours." });
      setFormData({ name: "", email: "", phone: "", services: [] });
      setFormPopupOpen(false);
    } catch {
      toast({ title: "Error", description: "Failed to submit. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const openFormPopup = () => setFormPopupOpen(true);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero — same style as property-value */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-zinc-900 py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[rgb(24_24_27/92%)]" />
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
            style={{ backgroundColor: "rgba(166, 122, 84, 0.2)" }}
          >
            <CheckCircle2 className="w-12 h-12" style={{ color: "#a67a54" }} />
          </motion.div>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4"
          >
            Thank you!
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1.2}
            className="text-zinc-300 text-lg md:text-xl mb-4 max-w-2xl mx-auto"
          >
            We&apos;ve received your request and will get back to you within 24 hours.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1.3}
            className="text-zinc-400 text-base md:text-lg mb-8 max-w-xl mx-auto"
          >
            Check your email (and spam) for next steps from our team.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1.5}>
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

      {/* Next step / CTA — zinc-950 */}
      <section className="py-16 md:py-20 bg-zinc-950 border-t border-zinc-800">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-2xl md:text-4xl font-bold text-white mb-4"
          >
            Book a free call for a step-by-step renovation roadmap
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            className="text-zinc-400 text-base md:text-lg mb-8"
          >
            Complimentary assessment available. We help homeowners and investors across South Florida and Orlando with strategic renovations that increase property value.
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

      {/* Testimonials — zinc-900 */}
      <section className="py-16 md:py-20 bg-zinc-900 border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-2xl md:text-4xl font-bold text-white text-center mb-12"
          >
            What our clients say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.15}
                className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 md:p-8 text-left"
              >
                <Quote className="w-8 h-8 mb-4 opacity-60" style={{ color: "#a67a54" }} />
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-white font-semibold">{t.name}</p>
                <p className="text-zinc-500 text-sm">{t.role}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.5}
            className="mt-12 flex justify-center"
          >
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

      {/* Simple footer strip — no full site footer */}
      <footer className="py-6 bg-[#1a1a1a] border-t border-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <p className="font-display text-white font-semibold">Future Land Capital</p>
          <p className="text-zinc-500 text-sm mt-1">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>

      {/* Form popup — same as landing pages */}
      <Dialog open={formPopupOpen} onOpenChange={setFormPopupOpen}>
        <DialogContent className="sm:max-w-md bg-zinc-950 border-zinc-700 text-white max-h-[90vh] overflow-y-auto mx-3 sm:mx-4 my-4 sm:my-0">
          <DialogHeader>
            <DialogTitle className="text-white text-xl sm:text-2xl font-bold">Book Your Consultation</DialogTitle>
            <DialogDescription className="text-zinc-400">
              We&apos;ll reach out to discuss your property and goals.
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

export default ThankYou;
