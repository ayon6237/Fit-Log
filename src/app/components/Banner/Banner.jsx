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
    <section className="bg-[#1E1E1E] px-5 py-10 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-16">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 sm:gap-12 lg:min-h-[550px] lg:flex-row lg:justify-between lg:gap-10">
  
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <p className="mb-4 text-xs font-bold tracking-[0.25em] text-[#CCFF00] sm:text-sm sm:tracking-[0.3em]">
            WORKOUT LIBRARY
          </p>

          <h1 className="mx-auto max-w-[650px] text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:mx-0 lg:text-7xl">
            TRAIN WITH INTENT.
            <br />
            <span className="text-[#CCFF00]">LOG EVERY SET.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-[550px] text-sm leading-6 text-white/60 sm:mt-6 sm:text-base sm:leading-7 md:text-lg lg:mx-0">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <button
            onClick={scrollToLibrary}
            className="mt-7 rounded-full bg-[#CCFF00] px-6 py-3.5 text-xs font-black tracking-wide text-black transition duration-300 hover:scale-105 hover:bg-[#d9ff4d] sm:mt-8 sm:px-7 sm:py-4 sm:text-sm"
          >
            BROWSE WORKOUTS
          </button>
        </div>


        <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
          <div className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[600px]">
            <Image
              src={BannerImage}
              alt="FitLog workout"
              width={700}
              height={700}
              priority
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 50vw"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;