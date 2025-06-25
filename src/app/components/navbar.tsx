"use client";
import { BookOpen, Home, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark =
      storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsDark(prefersDark);
    document.documentElement.setAttribute(
      "data-theme",
      prefersDark ? "dark" : "light"
    );
  }, []);

  const toggleMode = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-50 flex justify-center p-4">
      <div className="flex items-center space-x-4 px-6 py-3 rounded-4xl shadow-xl bg-black/60 text-white backdrop-blur-md">
        <div className="text-sm font-bold border-r-2 pr-4 border-gray-400">
          Wibi Laksono Wijaya
        </div>

        {/* Home Link */}
        <Link
            href="/"
            className="text-sm flex items-center justify-center hover:scale-105 transition-transform group"
            aria-label="Home"
        >
            <Home size={20} />
            <span className="ml-2 overflow-hidden max-w-0 group-hover:max-w-[100px] opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs">
                Home
            </span>
        </Link>

        {/* Blog Link */}
        <Link
          href="/blog-list"
          className="text-sm flex items-center justify-center hover:scale-105 transition-transform group"
          aria-label="Blog"
        >
          <BookOpen size={20} />
          <span className="ml-2 overflow-hidden max-w-0 group-hover:max-w-[100px] opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs">
            Blog
          </span>
        </Link>

        {/* Theme Toggle */}
        <button
          onClick={toggleMode}
          className="text-sm flex items-center justify-center hover:scale-105 transition-transform group"
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
          <span className="ml-2 overflow-hidden max-w-0 group-hover:max-w-[100px] opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs">
            {isDark ? "Dark mode" : "Light mode"}
          </span>
        </button>
      </div>
    </nav>
  );
}
