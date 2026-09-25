"use client";

import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#1E1E1E] px-6 text-white">
      <div className="w-full max-w-xl text-center">

        <p className="text-sm font-bold tracking-[0.3em] text-[#CCFF00]">
          FITLOG
        </p>

        <h1 className="mt-4 text-8xl font-black leading-none text-white sm:text-9xl">
          404
        </h1>

        <h2 className="mt-6 text-2xl font-black uppercase sm:text-3xl">
          Page Not Found
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/50 sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist or the URL is
          invalid. Let&apos;s get you back to your workouts.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="w-full rounded-full bg-[#CCFF00] px-7 py-3.5 text-sm font-black tracking-wide text-black transition duration-300 hover:scale-105 hover:bg-[#d9ff4d] sm:w-auto"
          >
            BACK TO WORKOUTS
          </Link>

          <Link
            href="/my-plan"
            className="w-full rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-bold tracking-wide text-white transition duration-300 hover:border-[#CCFF00] hover:text-[#CCFF00] sm:w-auto"
          >
            MY PLAN
          </Link>
        </div>

      </div>
    </main>
  );
};

export default NotFound;