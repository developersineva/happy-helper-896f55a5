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
  ChefHat,
  Bath,
  Shield,
  Home,
  Clock,
  CreditCard,
  TrendingUp,
  ArrowRight,
  Send,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const expertise = [
  {
    icon: ChefHat,
    title: "Luxury Kitchen Remodeling",
    desc: "Custom cabinetry, premium countertops, modern layouts.",
  },
  {
    icon: Bath,
    title: "Bathroom Transformations",
    desc: "Spa-style finishes, walk-in showers, and custom vanities.",
  },
  {
    icon: Shield,
    title: "Impact Windows & Doors",
    desc: "Hurricane-rated protection. Energy efficiency. Elevated exterior appeal.",
  },
  {
    icon: Home,
    title: "Full Interior Renovations",
    desc: "Open-concept living designed for South Florida luxury.",
  },
];

const serviceOptions = [
  "Kitchen Remodelling",
  "Bathroom Remodelling",
  "Whole Home Remodelling",
  "Impact Windows",
  "Other Services",
];

const beforeAfter = [
  {
    before: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
    after: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=800&q=80",
    label: "Kitchen Remodel",
  },
  {
    before: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
    after: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    label: "Bathroom Renovation",
  },
];

const Remodel = () => {
  const navigate = useNavigate();
  const [ctaOpen, setCtaOpen] = useState(false);
  const [ctaForm, setCtaForm] = useState({ name: "", email: "", phone: "", message: "", services: [] as string[] });
  const [ctaLoading, setCtaLoading] = useState(false);
  const { toast } = useToast();

  useDocumentTitle({
    title: "Remodel Your Home | Future Land Capital",
    description:
      "Luxury kitchen, bathroom & impact window remodeling for South Florida homeowners. Flexible financing with 90-day payment deferral available.",
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
        project_type: "Remodel",
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

  return (
    <div className="landing-page min-h-screen bg-background text-foreground">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=2000&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-12 pb-20 text-center max-w-3xl">
          <motion.img
            src={futureLandLogo}
            alt="Future Land Capital"
            className="h-24 md:h-32 mx-auto mb-8"
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
            className="font-display font-bold text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-4"
          >
            Remodel Your Home Today.
            <br />
            <span className="text-secondary">Pay After 90&nbsp;Days*</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="text-white/80 text-lg md:text-xl mb-8"
          >
            Luxury Kitchen, Bathroom &amp; Impact Window Remodeling
            <br className="hidden sm:block" /> for Qualified South Florida Homeowners.
          </motion.p>

          <motion.ul
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="flex flex-col items-center gap-2 mb-10 text-white/90"
          >
            {[
              "Premium design & craftsmanship",
              "Flexible financing options available",
              "Licensed & insured in Florida",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-secondary shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base px-8 mb-3"
              onClick={() => setCtaOpen(true)}
            >
              Book Your Free Design Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-white/50 text-xs mt-3">
              Financing subject to approval. Projects starting at $20,000+.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PROBLEM + POSITIONING ── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl mb-8"
          >
            Your Home Should Reflect the Life You've Built.
          </motion.h2>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-muted-foreground text-lg leading-relaxed space-y-4"
          >
            <p>In South Florida, your home is more than property — it&apos;s a statement.</p>
            <p>Outdated kitchens. Aging bathrooms. Weak windows before hurricane season.</p>
            <p>Delaying upgrades only increases costs.</p>
            <p>
              We help qualified homeowners remodel now — with structured financing that
              protects your liquidity.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="flex justify-center mt-10"
          >
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8"
              onClick={() => setCtaOpen(true)}
            >
              Start Your Remodel
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── EXPERTISE GRID ── */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl text-center mb-14"
          >
            Our Remodeling Expertise
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {expertise.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="bg-card rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 mb-5">
                  <item.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8"
              onClick={() => setCtaOpen(true)}
            >
              Request My Free Estimate
            </Button>
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
            Flexible Financing Designed for Smart Homeowners
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-primary-foreground/80 text-lg mb-10"
          >
            Remodeling doesn&apos;t require draining your savings.
            <br />
            We offer structured financing options, including:
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
              { icon: Clock, text: "90-Day Payment Deferral*" },
              { icon: CreditCard, text: "12–60 Month Installment Plans*" },
              { icon: TrendingUp, text: "Competitive rates for qualified applicants" },
            ].map((f) => (
              <li key={f.text} className="flex items-center gap-3">
                <f.icon className="w-5 h-5 text-secondary shrink-0" />
                <span>{f.text}</span>
              </li>
            ))}
          </motion.ul>

          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 mb-4"
            onClick={() => setCtaOpen(true)}
          >
            Check If I Qualify
          </Button>
          <p className="text-primary-foreground/50 text-xs">
            Financing subject to credit approval. Terms may vary.
          </p>
        </div>
      </section>

      {/* ── BEFORE / AFTER ── */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl text-center mb-14"
          >
            Before &amp; After Transformations
          </motion.h2>

          <div className="space-y-10 max-w-4xl mx-auto mb-12">
            {beforeAfter.map((pair, i) => (
              <motion.div
                key={pair.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <p className="text-center font-display text-xl mb-4">{pair.label}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
                    <img
                      src={pair.before}
                      alt={`${pair.label} before`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                      Before
                    </span>
                  </div>
                  <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
                    <img
                      src={pair.after}
                      alt={`${pair.label} after`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute top-2 left-2 bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">
                      After
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8"
              onClick={() => setCtaOpen(true)}
            >
              Start My Remodel
            </Button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-10 md:py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
            <div className="text-center sm:text-left">
              <p className="font-display text-xl md:text-2xl font-semibold">Future Land Capital</p>
              <p className="text-primary-foreground/70 text-sm mt-1">Sustainable Luxury Living</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 font-medium shadow-md hover:shadow-lg transition-shadow"
                onClick={() => setCtaOpen(true)}
              >
                Book Your Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* ── CTA POPUP ── */}
      <Dialog open={ctaOpen} onOpenChange={setCtaOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Get Your Free Consultation</DialogTitle>
            <DialogDescription>
              Fill in your details and we&apos;ll get back to you shortly.
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
              <label className="block text-sm font-medium mb-1.5">Phone Number *</label>
              <Input
                type="tel"
                value={ctaForm.phone}
                onChange={(e) => setCtaForm({ ...ctaForm, phone: e.target.value })}
                placeholder="(555) 123-4567"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Which Services are you looking for? *</label>
              <div className="mt-2 space-y-2">
                {serviceOptions.map((option) => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                      checked={ctaForm.services.includes(option)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setCtaForm({ ...ctaForm, services: [...ctaForm.services, option] });
                        } else {
                          setCtaForm({ ...ctaForm, services: ctaForm.services.filter((s) => s !== option) });
                        }
                      }}
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>
            <Button type="submit" disabled={ctaLoading} size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              {ctaLoading ? "Sending..." : "Submit"}
              <Send className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Remodel;
