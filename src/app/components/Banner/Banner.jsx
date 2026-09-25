"use client";

import React from "react";
import BannerImage from "@/assets/banner.png";
import Image from "next/image";

const Banner = () => {
  const scrollToLibrary = () => {
    document.getElementById("library")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#1E1E1E] px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-10 lg:min-h-[550px]">
        <div className="w-full lg:w-1/2">
          <p className="mb-5 text-sm font-bold tracking-[0.3em] text-[#CCFF00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="max-w-[650px] text-5xl font-black uppercase leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            TRAIN WITH INTENT.
            <br />
            <span className="text-[#CCFF00]">LOG EVERY SET.</span>
          </h1>

          <p className="mt-6 max-w-[550px] text-base leading-7 text-white/60 md:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <button
            onClick={scrollToLibrary}
            className="mt-8 rounded-full bg-[#CCFF00] px-7 py-4 text-sm font-black tracking-wide text-black transition duration-300 hover:scale-105 hover:bg-[#d9ff4d]"
          >
            BROWSE WORKOUTS
          </button>
        </div>

        {/* Right Image */}
        <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
          <div className="w-full max-w-[600px]">
            <Image
              src={BannerImage}
              alt="FitLog workout"
              width={700}
              height={700}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
