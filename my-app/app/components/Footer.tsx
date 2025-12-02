"use client";

export default function Footer() {
  return (
    <footer className="relative py-8 text-center text-gray-400 border-t border-gray-800 bg-black/20 backdrop-blur-md">
      <p>
        © {new Date().getFullYear()} Kashish • Built with Next.js & Framer Motion
      </p>

      {/* Optional subtle glow decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-30px] left-[-30px] w-[150px] h-[10px] bg-blue-600 opacity-10 rounded-full filter blur-2xl animate-pulse" />
        <div className="absolute bottom-[-30px] right-[-30px] w-[150px] h-[10px] bg-green-600 opacity-10 rounded-full filter blur-2xl animate-pulse" />
      </div>
    </footer>
  );
}
