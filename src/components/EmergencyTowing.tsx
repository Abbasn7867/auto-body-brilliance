import { motion } from "framer-motion";
import { Phone, AlertTriangle, Truck, ShieldCheck } from "lucide-react";
import towingNight from "@/assets/towing-night.jpg";

const features = [
  { icon: AlertTriangle, label: "Accident Recovery" },
  { icon: Truck, label: "Breakdown Towing" },
  { icon: ShieldCheck, label: "Luxury Vehicle Transport" },
];

const EmergencyTowing = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={towingNight} alt="Emergency towing at night" loading="lazy" width={1920} height={800} className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-emergency opacity-90" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emergency/50 bg-emergency/10 text-emergency text-sm font-medium mb-6 animate-pulse-glow">
            <AlertTriangle className="w-4 h-4" />
            24/7 Emergency Service
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Stuck? We're <span className="text-emergency text-glow-red">30 Minutes</span> Away.
          </h2>

          <p className="text-muted-foreground text-lg mb-8">
            Accident, breakdown, or collision — 24/7 emergency towing across Woodbridge, Manassas, Dale City, Lake Ridge, and Prince William County.
          </p>

          {/* Phone CTA */}
          <a
            href="tel:7039393234"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-emergency text-emergency-foreground font-bold text-xl animate-pulse-glow hover:brightness-110 transition-all mb-10"
          >
            <Phone className="w-6 h-6" />
            (703) 939-3234
          </a>

          {/* Features */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {features.map((f) => (
              <div key={f.label} className="flex items-center gap-3 glass-card px-5 py-3">
                <f.icon className="w-5 h-5 text-emergency" />
                <span className="text-sm font-medium">{f.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmergencyTowing;
