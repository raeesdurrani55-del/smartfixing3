import { MessageCircle, Phone } from "lucide-react";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-8 sm:gap-10">
      <a
        href="https://wa.me/971569406390"
        target="_blank"
        rel="noreferrer"
        className="relative size-14 sm:size-16 rounded-full grid place-items-center bg-[#25D366] text-black animate-wa-glow transition-transform duration-200 hover:scale-110 active:scale-95"
        aria-label="WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-50 animate-ping-slow" />
        <MessageCircle className="size-6 sm:size-7 relative z-10" strokeWidth={2.5} />
      </a>
      <a
        href="tel:+971569406390"
        className="relative size-14 sm:size-16 rounded-full grid place-items-center bg-[var(--gradient-primary)] text-[var(--background)] animate-call-glow transition-transform duration-200 hover:scale-110 active:scale-95"
        aria-label="Call"
      >
        <span className="absolute inset-0 rounded-full bg-[var(--cyan-glow)] opacity-40 animate-ping-slow" />
        <Phone className="size-5 sm:size-6 relative z-10" strokeWidth={2.5} />
      </a>
    </div>
  );
}
