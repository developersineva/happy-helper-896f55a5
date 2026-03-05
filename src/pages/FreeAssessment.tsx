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
import {
  Check,
  Compass,
  DollarSign,
  BarChart3,
  Map,
  ArrowRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

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

const serviceOptions = [
  "Kitchen Remodelling",
  "Bathroom Remodelling",
  "Whole Home Remodelling",
  "Airbnb Property Upgrade",
  "Other Services",
];

const FreeAssessment = () => {
  const navigate = useNavigate();
  const [ctaOpen, setCtaOpen] = useState(false);
  const [ctaForm, setCtaForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    services: [] as string[],
  });
  const [ctaLoading, setCtaLoading] = useState(false);
  const { toast } = useToast();

  useDocumentTitle({
    title: "Free Luxury Renovation Design Assessment | Futureland Capital",
    description:
      "Book your complimentary renovation design assessment. Custom renovation ideas, investment estimates, and property value insights for South Florida & Orlando homeowners.",
  });

  const handleCtaSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ctaForm.name.trim() || !ctaForm.email.trim() || !ctaForm.phone.trim()) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    if (ctaForm.services.length === 0) {
      toast({ title: "Please select at least one service", variant: "destructive" });
      return;
    }
    setCtaLoading(true);
    try {
      const { error } = await supabase.from("contact_submissions").insert({
        name: ctaForm.name.trim(),
        email: ctaForm.email.trim(),
        phone: ctaForm.phone.trim(),
        project_type: "Free Assessment",
        message: ctaForm.services.join(", "),
        services: ctaForm.services,
      } as any);
      if (error) throw error;
      toast({ title: "Request sent!", description: "We'll get back to you soon." });
      setCtaForm({ name: "", email: "", phone: "", message: "", services: [] });
      setCtaOpen(false);
      setTimeout(() => navigate("/thank-you"), 2000);
    } catch {
      toast({ title: "Error", description: "Failed to submit. Please try again.", variant: "destructive" });
    } finally {
      setCtaLoading(false);
    }
  };

  const openForm = () => setCtaOpen(true);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-12 pb-20 text-center max-w-3xl">
          <motion.img
            src={futureLandLogo}
            alt="Futureland Capital"
            className="h-20 md:h-28 mx-auto mb-8"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className="inline-block bg-secondary/90 text-secondary-foreground text-xs md:text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
          >
            Free Luxury Renovation Design Assessment
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            Transform Your Property Into a Space That Reflects{" "}
            <span className="text-secondary">Luxury, Comfort &amp; Value</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-white/80 text-base md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed"
          >
            Futureland Capital helps homeowners, Airbnb hosts, and real estate investors across
            South Florida and Orlando redesign their properties through strategic renovations that
            enhance lifestyle and property value.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2.5}
            className="text-white/70 text-sm md:text-base mb-8 max-w-2xl mx-auto"
          >
            For a limited time, we're offering a complimentary renovation design assessment where
            our experts review your property and suggest the best upgrades based on your goals.
          </motion.p>

          <motion.ul
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-col items-center gap-3 mb-10 text-white/90"
          >
            {[
              "Custom renovation ideas tailored to your property",
              "Estimated renovation investment range",
              "Property value improvement insights",
              "Airbnb performance optimization strategies",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm md:text-base">
                <Check className="w-5 h-5 text-secondary shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base md:text-lg px-8 py-6 font-semibold shadow-lg"
              onClick={openForm}
            >
              Book Your Free Design Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── PAIN POINT ── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl text-center mb-10"
          >
            Renovating Without The Right Plan Can Be{" "}
            <span className="text-secondary">Expensive</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-muted-foreground text-lg text-center mb-8"
          >
            Many homeowners delay renovations because they don't know:
          </motion.p>

          <motion.ul
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="space-y-4 mb-10 max-w-xl mx-auto"
          >
            {[
              "Where to begin",
              "Which upgrades actually increase property value",
              "How much the project will realistically cost",
              "Whether the renovation will deliver the return they expect",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-foreground">
                <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                <span className="text-base md:text-lg">{item}</span>
              </li>
            ))}
          </motion.ul>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="text-muted-foreground text-base md:text-lg text-center mb-4"
          >
            Without expert planning, renovations often lead to overspending, design mistakes, and
            poor ROI.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            className="text-foreground text-base md:text-lg text-center font-medium mb-10"
          >
            That's why our team begins every project with a{" "}
            <span className="text-secondary font-semibold">strategic design assessment</span>,
            ensuring your renovation decisions are guided by experience, not guesswork.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
            className="text-center"
          >
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-base font-semibold"
              onClick={openForm}
            >
              Book Your Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── SOLUTION / HOW IT WORKS ── */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl text-center mb-4"
          >
            How Our Renovation Assessment Works
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-muted-foreground text-lg text-center mb-14 max-w-2xl mx-auto"
          >
            During your consultation, our team will review your property and discuss:
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {solutionCards.map((card, i) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="bg-card rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 mb-5">
                  <card.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display text-xl mb-3 font-semibold">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINANCING ── */}
      <section className="relative py-20 md:py-28 text-primary-foreground overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="relative z-10 container mx-auto px-4 max-w-3xl text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl mb-6"
          >
            Renovate Today — Start Paying After{" "}
            <span className="text-secondary">90 Days</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-primary-foreground/80 text-base md:text-lg mb-4"
          >
            We understand that large renovation projects require financial flexibility.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1.5}
            className="text-primary-foreground/80 text-base md:text-lg mb-10"
          >
            Futureland Capital now offers a financing option that allows property owners to begin
            renovations immediately while delaying payments for 90 days.
          </motion.p>

          <motion.ul
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="flex flex-col items-center gap-4 mb-10 text-lg"
          >
            {[
              "Start your renovation today",
              "Begin payments after 90 days",
              "Flexible payment options available",
            ].map((f) => (
              <li key={f} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-secondary shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </motion.ul>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="text-primary-foreground/70 text-sm md:text-base mb-8"
          >
            This allows homeowners and investors to improve their properties without immediate
            financial pressure.
          </motion.p>

          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-base font-semibold"
            onClick={openForm}
          >
            Book Your Free Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* ── AUTHORITY ── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl text-center mb-6"
          >
            Why Property Owners Choose{" "}
            <span className="text-secondary">Futureland Capital</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-muted-foreground text-lg text-center mb-10"
          >
            Our team focuses on strategic renovations designed to increase both lifestyle value and
            financial return.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <p className="text-foreground font-medium text-lg mb-6 text-center">
              We specialize in:
            </p>
            <ul className="space-y-3 max-w-md mx-auto mb-10">
              {[
                "Luxury kitchen remodeling",
                "Bathroom transformations",
                "Full property renovations",
                "Airbnb property upgrades",
                "Investor renovation projects and flips",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                  <span className="text-base md:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="text-muted-foreground text-base md:text-lg text-center"
          >
            With extensive experience working with South Florida and Orlando properties, we
            understand how to deliver renovations that align with both design trends and market
            demand.
          </motion.p>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl mb-6"
          >
            Start Planning Your Property Transformation
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-primary-foreground/80 text-base md:text-lg mb-10"
          >
            Book your free renovation design assessment and discover how your property can be
            transformed with the right strategy.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-base md:text-lg font-semibold shadow-lg"
              onClick={openForm}
            >
              Reserve Your Consultation Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── MINIMAL FOOTER ── */}
      <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-10 md:py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
            <div className="text-center sm:text-left">
              <p className="font-display text-xl md:text-2xl font-semibold">Futureland Capital</p>
              <p className="text-primary-foreground/70 text-sm mt-1">
                Strategic Renovations · South Florida &amp; Orlando
              </p>
            </div>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 font-medium shadow-md hover:shadow-lg transition-shadow"
              onClick={openForm}
            >
              Book Your Free Assessment
            </Button>
          </div>
        </div>
      </footer>

      {/* ── CTA POPUP ── */}
      <Dialog open={ctaOpen} onOpenChange={setCtaOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Book Your Free Design Assessment</DialogTitle>
            <DialogDescription>
              Fill in your details and our team will reach out to schedule your complimentary
              consultation.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleCtaSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">Name *</label>
              <Input
                value={ctaForm.name}
                onChange={(e) => setCtaForm({ ...ctaForm, name: e.target.value })}
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Email *</label>
              <Input
                type="email"
                value={ctaForm.email}
                onChange={(e) => setCtaForm({ ...ctaForm, email: e.target.value })}
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Phone *</label>
              <Input
                type="tel"
                value={ctaForm.phone}
                onChange={(e) => setCtaForm({ ...ctaForm, phone: e.target.value })}
                placeholder="(555) 123-4567"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Services Interested In *</label>
              <div className="grid grid-cols-1 gap-2">
                {serviceOptions.map((s) => (
                  <label key={s} className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                      checked={ctaForm.services.includes(s)}
                      onCheckedChange={(checked) => {
                        setCtaForm((prev) => ({
                          ...prev,
                          services: checked
                            ? [...prev.services, s]
                            : prev.services.filter((v) => v !== s),
                        }));
                      }}
                    />
                    <span className="text-sm">{s}</span>
                  </label>
                ))}
              </div>
            </div>
            <Button
              type="submit"
              disabled={ctaLoading}
              className="w-full bg-[#2f5b41] hover:bg-[#2f5b41]/90 text-white py-5"
            >
              {ctaLoading ? "Sending…" : "Submit Request"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FreeAssessment;
