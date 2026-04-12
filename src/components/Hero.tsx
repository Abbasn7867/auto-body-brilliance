import { motion } from "framer-motion";
import { Phone, Shield, Star, Clock, Car } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const trustBadges = [
  { icon: Shield, label: "15+ Years Experience" },
  { icon: Car, label: "5K+ Vehicles Restored" },
  { icon: Star, label: "4.8★ Google Rating" },
  { icon: Clock, label: "24/7 Towing" },
];

const brands = ["BMW", "Mercedes", "Audi", "Honda", "Toyota", "Lexus", "Tesla"];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Auto body technician welding" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 gradient-hero opacity-70" />
        {/* Animated light streaks */}
        <div className="absolute top-1/3 left-0 right-0 h-px gradient-blue-streak animate-streak" />
        <div className="absolute top-2/3 left-0 right-0 h-px gradient-blue-streak animate-streak" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative z-10 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-medium tracking-widest uppercase text-sm mb-4"
          >
            Manosy Auto Body — Woodbridge, VA
          </motion.p>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Precision Auto Body{" "}
            <span className="text-primary text-glow-blue">Perfection</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            Expert collision repair, flawless paint restoration, dent removal, and 24/7 emergency towing for all makes and prestige vehicles.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#estimate"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg glow-blue hover:brightness-110 transition-all"
            >
              Get Free Estimate
            </a>
            <a
              href="tel:7039393234"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-emergency text-emergency font-semibold text-lg hover:bg-emergency/10 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call 24/7: (703) 939-3234
            </a>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="glass-card px-4 py-3 flex items-center gap-3">
                <badge.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{badge.label}</span>
              </div>
            ))}
          </div>

          {/* Brand strip */}
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
            <span className="uppercase tracking-wider text-xs">We service:</span>
            {brands.map((brand) => (
              <span key={brand} className="glass-card px-3 py-1 text-xs font-medium">{brand}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
