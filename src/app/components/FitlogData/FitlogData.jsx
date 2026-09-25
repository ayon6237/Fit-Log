import React from "react";
import FitlogCard from "../FitlogCard";

const getFitlogApi = async () => {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  const data = await response.json();

  return data;
};

const FitlogData = async () => {
  const item = await getFitlogApi();

  return (
    <section
      id="library"
      className="bg-[#1E1E1E] px-4 py-16 md:px-6 lg:py-20"
    >
      <div className="container mx-auto max-w-[1200px]">

        {/* Section Header */}
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-white/10 pb-8 md:flex-row md:items-end">

          <div>
            

            <h2 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
              THE <span className="text-[#CCFF00]">LIBRARY</span>
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-6 text-white/50 md:text-base">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

    
         
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {item.map((workout) => (
            <FitlogCard
              item={workout}
              key={workout.id}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FitlogData;