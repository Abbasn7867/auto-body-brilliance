import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden" id="estimate">
      {/* Glow background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Your Car Deserves the <span className="text-primary text-glow-blue">Best</span>.
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Free estimates, expert technicians, lifetime workmanship warranty. We respond within 30 minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:7039393234"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg glow-blue hover:brightness-110 transition-all"
            >
              Get Free Estimate
            </a>
            <a
              href="tel:7039393234"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-border text-foreground font-semibold text-lg hover:bg-secondary transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            1832 Featherstone Rd, Woodbridge, VA 22191 · (703) 939-3234
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
