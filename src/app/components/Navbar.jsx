import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#1E1E1E]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 md:px-8 lg:px-10">

        {/* LEFT - LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#]">
            <Image
              src={Logo}
              alt="FitLog Logo"
              width={28}
              height={28}
              className="object-contain"
            />
          </div>

          <span className="text-xl font-black tracking-wider text-white">
            FIT<span className="text-[#CCFF00]">LOG</span>
          </span>
        </Link>

        {/* CENTER - NAVIGATION */}
        <div className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1">
          
          <Link
            href="/"
            className="rounded-full px-6 py-2.5 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:bg-[#CCFF00] hover:text-black"
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full px-6 py-2.5 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:bg-[#CCFF00] hover:text-black"
          >
            My Plan
          </Link>

        </div>

        {/* RIGHT - COUNTERS */}
        <div className="flex items-center gap-2 md:gap-3">

          <Link
            href="/my-plan"
            className="group flex items-center gap-2 rounded-full border border-[#CCFF00]/30 bg-[#CCFF00] px-3 py-2 text-xs font-black tracking-wide text-black transition-all hover:scale-105 md:px-4"
          >
            <span className="hidden sm:inline">Plan</span>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1.5 text-[10px] text-[#CCFF00]">
              0
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="group flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-3 py-2 text-xs font-black tracking-wide text-white transition-all hover:border-[#CCFF00] hover:text-[#CCFF00] md:px-4"
          >
            <span className="hidden sm:inline">Saved</span>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white/10 px-1.5 text-[10px]">
              0
            </span>
          </Link>

        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      <div className="border-t border-white/5 px-5 py-3 md:hidden">
        <div className="mx-auto flex max-w-[500px] items-center justify-center gap-2">

          <Link
            href="/"
            className="flex-1 rounded-lg border border-white/10 bg-white/5 py-2.5 text-center text-xs font-bold tracking-wider text-white transition hover:bg-[#CCFF00] hover:text-black"
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className="flex-1 rounded-lg border border-white/10 bg-white/5 py-2.5 text-center text-xs font-bold tracking-wider text-white transition hover:bg-[#CCFF00] hover:text-black"
          >
            My Plan
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;