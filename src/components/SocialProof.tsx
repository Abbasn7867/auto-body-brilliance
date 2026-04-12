import { motion } from "framer-motion";
import { Star } from "lucide-react";

const stats = [
  { value: "15+", label: "Years in Business" },
  { value: "5K+", label: "Vehicles Restored" },
  { value: "4.8★", label: "Google Rating" },
  { value: "24/7", label: "Towing Coverage" },
];

const reviews = [
  {
    initials: "MR",
    name: "Michael R.",
    tag: "BMW 5 Series • Woodbridge",
    text: "Manosy brought my BMW back to showroom condition after a nasty collision. Their color match is absolutely flawless — you can't tell it was ever damaged.",
    stars: 5,
  },
  {
    initials: "SJ",
    name: "Sarah J.",
    tag: "Mercedes C-Class • Lake Ridge",
    text: "Got in an accident at 2 AM and they had a tow truck there in 25 minutes. The repair work was incredible, and they handled everything with my insurance.",
    stars: 5,
  },
  {
    initials: "DK",
    name: "David K.",
    tag: "Honda Accord • Manassas",
    text: "Best body shop in the area, hands down. Professional, fast, and the quality of work is unmatched. They even detailed my car before returning it.",
    stars: 5,
  },
];

const SocialProof = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Trusted by Thousands</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">What Our Customers Say</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-primary text-glow-blue mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Reviews */}
          <div className="space-y-4">
            {reviews.map((review, i) => (
              <motion.div
                key={review.initials}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-card p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                    {review.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{review.name}</div>
                    <div className="text-xs text-muted-foreground">{review.tag}</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: review.stars }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
