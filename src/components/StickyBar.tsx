import { Phone, MessageSquare } from "lucide-react";

const StickyBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-xl border-t border-border px-4 py-3 shadow-lg">
      <div className="flex gap-3">
        <a
          href="#estimate"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm"
        >
          <MessageSquare className="w-4 h-4" />
          Free Estimate
        </a>
        <a
          href="tel:7039393234"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-emergency text-emergency-foreground font-semibold text-sm"
        >
          <Phone className="w-4 h-4" />
          24/7 Towing
        </a>
      </div>
    </div>
  );
};

export default StickyBar;
