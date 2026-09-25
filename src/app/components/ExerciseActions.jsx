"use client";

import { useFitlog } from "../context/FitLogContext";

const ExerciseActions = ({ exercise }) => {
  const {
    addToPlan,
    saveForLater,
  } = useFitlog();

  return (
    <div className="flex flex-wrap gap-3 mt-7">

      {/* Add to today's plan */}
      <button
        onClick={() => addToPlan(exercise)}
        className="
          flex
          items-center
          gap-2
          rounded-lg
          bg-[#caff00]
          px-5
          py-3
          text-sm
          font-bold
          text-black
          transition
          hover:bg-[#b8ed00]
          active:scale-95
        "
      >
        <span>▣</span>

        Add to today&apos;s plan
      </button>

      {/* Save for later */}
      <button
        onClick={() => saveForLater(exercise)}
        className="
          flex
          items-center
          gap-2
          rounded-lg
          border
          border-[#303743]
          bg-transparent
          px-5
          py-3
          text-sm
          text-gray-300
          transition
          hover:bg-[#151a22]
          active:scale-95
        "
      >
        <span>♡</span>

        Save for later
      </button>

    </div>
  );
};

export default ExerciseActions;