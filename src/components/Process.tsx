import { motion } from "framer-motion";
import { Camera, Wrench, CheckCircle } from "lucide-react";
import processEstimate from "@/assets/process-estimate.jpg";
import processRepair from "@/assets/process-repair.jpg";
import processDeliver from "@/assets/process-deliver.jpg";

const steps = [
  {
    num: "01",
    icon: Camera,
    title: "Request Estimate",
    text: "Send photos or visit us. Free, no-obligation estimate usually within the hour.",
    image: processEstimate,
  },
  {
    num: "02",
    icon: Wrench,
    title: "Expert Repair",
    text: "Certified technicians use OEM-grade parts, frame machines, and computer-matched paint to restore factory condition.",
    image: processRepair,
  },
  {
    num: "03",
    icon: CheckCircle,
    title: "Drive Away Happy",
    text: "Final inspection, lifetime workmanship warranty, and car returned cleaned and polished.",
    image: processDeliver,
  },
];

const Process = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">How It Works</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">Your Repair, Simplified</h2>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 relative">
                <div className="rounded-xl overflow-hidden glow-blue">
                  <img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center font-display font-bold text-primary-foreground text-sm">
                  {step.num}
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <step.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
