"use client";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function SuccessModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-[#111] p-8 rounded-xl border border-purple-400/30 shadow-xl text-center animate-fadeIn">
        <h2 className="text-2xl font-bold text-purple-300">Application Sent ✅</h2>
        <p className="text-white/80 mt-2">
          We’ve received your application. Our team will contact you soon.
        </p>

        <button
          onClick={onClose}
          className="mt-5 px-6 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg text-white"
        >
          OK
        </button>
      </div>
    </div>
  );
}
