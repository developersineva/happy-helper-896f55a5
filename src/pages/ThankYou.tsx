import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { CheckCircle2, ArrowRight, Home } from "lucide-react";
import { motion } from "framer-motion";

const ThankYou = () => {
  useDocumentTitle({
    title: "Thank You | Future Land Capital",
    description: "Thank you for contacting Future Land Capital. We'll get back to you shortly.",
  });

  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl w-full text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/10 text-secondary mb-8">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Thank You!
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            We've received your request and will get back to you within 24 hours.
            Our team is excited to help with your remodel project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/landing">
                Back to Landing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default ThankYou;
