import React from "react";
import Image from "next/image";
import Link from "next/link";

const FitlogCard = ({ item }) => {
  const {
    id,
    name,
    image,
    rating,
    caloriesBurned,
    duration,
    muscleGroups,
    equipment,
  } = item;

  return (
    <Link href={`/excercise/${id}`} className="group overflow-hidden rounded-2xl border border-white/10 bg-[#252525] transition-all duration-300 hover:-translate-y-1 hover:border-[#CCFF00]/40">

      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden bg-[#1E1E1E]">
  <Image
    src={image}
    alt={name}
    fill
    className="object-cover transition duration-500 group-hover:scale-105"
  />
</div>

      {/* Content */}
      <div className="p-5">

        {/* Muscle Groups */}
        <div className="mb-3 flex flex-wrap gap-2">
          {muscleGroups?.map((muscle, index) => (
            <span
              key={index}
              className="rounded-full bg-[#CCFF00]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#CCFF00]"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Name */}
        <h2 className="text-xl font-black uppercase leading-tight text-white transition group-hover:text-[#CCFF00]">
          {name}
        </h2>

        {/* Equipment */}
        <p className="mt-2 text-sm text-white/50">
          {equipment}
        </p>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-3 border-t border-white/10 pt-4">

          <div>
            <p className="text-[10px] text-white/40">DURATION</p>
            <p className="mt-1 text-sm font-bold text-white">
              {duration} min
            </p>
          </div>

          <div>
            <p className="text-[10px] text-white/40">CALORIES</p>
            <p className="mt-1 text-sm font-bold text-white">
              {caloriesBurned} kcal
            </p>
          </div>

          <div>
            <p className="text-[10px] text-white/40">RATING</p>
            <p className="mt-1 text-sm font-bold text-white">
              ★ {rating}
            </p>
          </div>

        </div>

      </div>
    </Link>
  );
};

export default FitlogCard;