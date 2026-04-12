import { motion } from "framer-motion";
import serviceCollision from "@/assets/service-collision.jpg";
import servicePaint from "@/assets/service-paint.jpg";
import serviceDent from "@/assets/service-dent.jpg";
import serviceTowing from "@/assets/service-towing.jpg";
import serviceLuxury from "@/assets/service-luxury.jpg";
import serviceInsurance from "@/assets/service-insurance.jpg";

const services = [
  {
    title: "Collision & Body Repair",
    image: serviceCollision,
    desc: "Full structural and cosmetic collision restoration.",
    bullets: ["Frame straightening & alignment", "Panel replacement & welding", "Bumper & fender repair", "Unibody reconstruction"],
  },
  {
    title: "Paint & Color Match",
    image: servicePaint,
    desc: "Factory-perfect paint with computer color matching.",
    bullets: ["Computer color matching", "Full respray & blending", "Clear coat restoration", "Custom finishes"],
  },
  {
    title: "Dent & Scratch Removal",
    image: serviceDent,
    desc: "Paintless dent repair and surface restoration.",
    bullets: ["Paintless dent repair (PDR)", "Scratch & scuff removal", "Hail damage repair", "Door ding removal"],
  },
  {
    title: "24/7 Emergency Towing",
    image: serviceTowing,
    desc: "Round-the-clock towing across Prince William County.",
    bullets: ["Accident recovery", "Breakdown towing", "Flatbed transport", "Long-distance hauling"],
  },
  {
    title: "Prestige & Luxury Vehicles",
    image: serviceLuxury,
    desc: "Specialized care for high-end and exotic vehicles.",
    bullets: ["OEM-certified parts", "Precision paint booth work", "Aluminum body expertise", "Detailed quality control"],
  },
  {
    title: "Insurance Claim Repairs",
    image: serviceInsurance,
    desc: "We handle your claim from estimate to completion.",
    bullets: ["Direct insurance billing", "Digital damage documentation", "Rental car coordination", "Lifetime warranty on work"],
  },
];

const Services = () => {
  return (
    <section className="py-20 md:py-28" id="services">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">What We Do</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">Expert Auto Body Services</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.desc}</p>
                <ul className="space-y-1.5 mb-4">
                  {service.bullets.map((b) => (
                    <li key={b} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a href="#estimate" className="text-primary text-sm font-medium hover:underline">
                  Get Free Estimate →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
