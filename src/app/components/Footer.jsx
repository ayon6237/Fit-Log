import React from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#161616]">
      <div className="container mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-5 px-5 py-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full">
            <Image
              src={Logo}
              alt="FitLog Logo"
              width={25}
              height={25}
              className="object-contain"
            />
          </div>

          <h3 className="text-lg font-black tracking-wider text-white">
            FIT<span>LOG</span>
          </h3>
        </div>

        <p className="text-center text-xs text-white/40 sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
