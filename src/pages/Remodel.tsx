import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import {
  Check,
  ChefHat,
  Bath,
  Shield,
  Home,
  Clock,
  CreditCard,
  TrendingUp,
  Star,
  DollarSign,
  Phone,
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

const expertise = [
  {
    icon: ChefHat,
    title: "Luxury Kitchen Remodeling",
    desc: "Custom cabinetry, premium countertops, modern layouts.",
  },
  {
    icon: Bath,
    title: "Bathroom Transformations",
    desc: "Spa-style finishes, walk-in showers, custom vanities.",
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

const trustBadges = [
  { icon: Shield, label: "Licensed & Insured Florida Contractor" },
  { icon: Star, label: "5-Star Client Reviews" },
  { icon: TrendingUp, label: "High-End Craftsmanship" },
  { icon: DollarSign, label: "Transparent Pricing" },
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
  useDocumentTitle({
    title: "Remodel Your Home | Future Land Capital",
    description:
      "Luxury kitchen, bathroom & impact window remodeling for South Florida homeowners. Flexible financing with 90-day payment deferral available.",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
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

        <div className="relative z-10 container mx-auto px-4 py-20 text-center max-w-3xl">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-4"
          >
            Remodel Your Home Today.{" "}
            <span className="text-secondary">Pay After 90&nbsp;Days*</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-white/80 text-lg md:text-xl mb-8"
          >
            Luxury kitchen, bathroom &amp; impact window remodeling
            <br className="hidden sm:block" /> for qualified South Florida homeowners.
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

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}>
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base px-8 mb-3"
            >
              <Link to="/contact">
                Book Your Free Design Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
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
            <p>In South Florida, your home is more than property — it's your statement.</p>
            <p>Outdated kitchens. Aging bathrooms. Weak windows before hurricane season.</p>
            <p>Delaying upgrades only increases costs.</p>
            <p>
              We help qualified homeowners remodel now — with structured financing that
              protects your liquidity.
            </p>
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
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8"
            >
              <Link to="/contact">Request My Free Estimate</Link>
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
            Remodeling doesn't require draining your savings. We offer structured
            financing options including:
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
            asChild
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 mb-4"
          >
            <Link to="/contact">Check If I Qualify</Link>
          </Button>
          <p className="text-primary-foreground/50 text-xs">
            Financing subject to credit approval. Terms vary.
          </p>
        </div>
      </section>

      {/* ── TRUST ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl text-center mb-14"
          >
            Trusted Across South Florida
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((b, i) => (
              <motion.div
                key={b.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="flex items-center gap-3 bg-card rounded-xl p-6 shadow-md"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <b.icon className="w-5 h-5 text-secondary" />
                </div>
                <span className="font-medium">{b.label}</span>
              </motion.div>
            ))}
          </div>
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
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8"
            >
              <Link to="/contact">Start My Remodel</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA STRIP ── */}
      <section className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-display text-xl">Future Land Capital</p>
            <a href="tel:+13055551234" className="flex items-center gap-2 text-secondary text-sm mt-1 justify-center sm:justify-start">
              <Phone className="w-4 h-4" /> (305) 555-1234
            </a>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8"
          >
            <Link to="/contact">Book Your Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Remodel;
