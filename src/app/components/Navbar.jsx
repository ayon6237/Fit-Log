"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/assets/logo.png";
import { useFitlog } from "../context/FitLogContext";

const Navbar = () => {
  const pathname = usePathname();
  const { plan, saved } = useFitlog();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const planCount = mounted ? plan.length : 0;
  const savedCount = mounted ? saved.length : 0;

  const isWorkoutsActive = pathname === "/";
  const isMyPlanActive = pathname.startsWith("/my-plan");

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#1E1E1E]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:h-20 sm:px-5 md:px-8 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full sm:h-10 sm:w-10">
            <Image
              src={Logo}
              alt="FitLog Logo"
              width={28}
              height={28}
              className="h-7 w-7 object-contain sm:h-8 sm:w-8"
            />
          </div>

          <span className="text-lg font-black tracking-wider text-white sm:text-xl">
            FIT<span className="text-[#CCFF00]">LOG</span>
          </span>
        </Link>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex">
          <Link
            href="/"
            className={`rounded-full px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 ${
              isWorkoutsActive
                ? "bg-[#CCFF00] text-black"
                : "text-white hover:bg-[#CCFF00] hover:text-black"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 ${
              isMyPlanActive
                ? "bg-[#CCFF00] text-black"
                : "text-white hover:bg-[#CCFF00] hover:text-black"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* RIGHT - COUNTERS */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 md:gap-3">
          <Link
            href="/my-plan"
            className="group flex items-center gap-1.5 rounded-full border border-[#CCFF00]/30 bg-[#CCFF00] px-2.5 py-1.5 text-[10px] font-black tracking-wide text-black transition-all hover:scale-105 sm:gap-2 sm:px-3 sm:py-2 sm:text-xs md:px-4"
          >
            <span className="hidden xs:inline sm:inline">Plan</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1.5 text-[10px] text-[#CCFF00]">
              {planCount}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="group flex items-center gap-1.5 rounded-full border border-white/20 bg-transparent px-2.5 py-1.5 text-[10px] font-black tracking-wide text-white transition-all hover:border-[#CCFF00] hover:text-[#CCFF00] sm:gap-2 sm:px-3 sm:py-2 sm:text-xs md:px-4"
          >
            <span className="hidden xs:inline sm:inline">Saved</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white/10 px-1.5 text-[10px]">
              {savedCount}
            </span>
          </Link>
        </div>
      </div>

      <div className="border-t border-white/5 px-4 py-2.5 sm:px-5 sm:py-3 md:hidden">
        <div className="mx-auto flex w-full max-w-[500px] items-center gap-2">
          <Link
            href="/"
            className={`flex flex-1 items-center justify-center rounded-lg border py-2.5 text-xs font-bold tracking-wider transition sm:py-3 ${
              isWorkoutsActive
                ? "border-[#CCFF00] bg-[#CCFF00] text-black"
                : "border-white/10 bg-white/5 text-white hover:bg-[#CCFF00] hover:text-black"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`flex flex-1 items-center justify-center rounded-lg border py-2.5 text-xs font-bold tracking-wider transition sm:py-3 ${
              isMyPlanActive
                ? "border-[#CCFF00] bg-[#CCFF00] text-black"
                : "border-white/10 bg-white/5 text-white hover:bg-[#CCFF00] hover:text-black"
            }`}
          >
            My Plan
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
