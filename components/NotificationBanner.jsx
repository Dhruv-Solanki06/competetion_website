import { useState } from "react";

export default function NotificationBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative bg-red-600/80 text-white text-sm px-6 py-2 flex items-center justify-center shadow-md animate-pulse">
      <a
        href="https://jyot.in"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-yellow-200 transition"
      >
        📑 For additional resources and documents on the topics, click here
      </a>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 text-white hover:text-gray-200 font-bold"
      >
        ✖
      </button>
    </div>
  );
}
