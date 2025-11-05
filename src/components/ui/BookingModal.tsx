"use client";
import { useEffect, useState } from "react";

export default function BookingModal() {
  const [client, setClient] = useState<any>(null);

  useEffect(() => {
    const handler = (e: any) => setClient(e.detail);
    window.addEventListener("open-booking", handler);
    return () => window.removeEventListener("open-booking", handler);
  }, []);

  if (!client) return null;

  const close = () => setClient(null);

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <div className="bg-black/80 border border-white/20 rounded-2xl p-8 w-[90%] max-w-lg shadow-2xl">
        
        <h2 className="text-2xl font-semibold text-white mb-4">
          Book a call with {client.name}
        </h2>
        <p className="text-white/70 text-sm mb-6">
          Pick a time that works — they’ll get notified immediately.
        </p>

        {/* Calendly iframe example */}
        <iframe
          src={`https://calendly.com/your-calendly-link?hide_event_type_details=1&client=${encodeURIComponent(
            client.name
          )}`}
          className="w-full h-[500px] rounded-lg bg-white"
        />

        <button
          onClick={close}
          className="mt-4 w-full bg-white/20 hover:bg-white/30 text-white py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
}
