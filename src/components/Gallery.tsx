import { motion } from "framer-motion";
import galleryShop from "@/assets/gallery-shop.jpg";
import galleryBodywork from "@/assets/gallery-bodywork.jpg";
import galleryMasking from "@/assets/gallery-masking.jpg";
import serviceCollision from "@/assets/service-collision.jpg";
import servicePaint from "@/assets/service-paint.jpg";
import serviceLuxury from "@/assets/service-luxury.jpg";

const images = [
  { src: galleryShop, label: "Full-Service Shop Bay", span: "md:col-span-2" },
  { src: galleryBodywork, label: "Body Filler Shaping", span: "" },
  { src: galleryMasking, label: "Paint Prep Masking", span: "" },
  { src: serviceCollision, label: "Frame Alignment", span: "" },
  { src: servicePaint, label: "Color Match in Booth", span: "" },
  { src: serviceLuxury, label: "Prestige Vehicle Care", span: "md:col-span-2" },
];

const Gallery = () => {
  return (
    <section className="py-20 md:py-28" id="gallery">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Our Work</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">Craftsmanship in Action</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.label}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-sm font-medium text-primary">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
