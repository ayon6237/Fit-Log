"use client";

import { useFitlog } from "../context/FitLogContext";

const ExerciseActions = ({ exercise }) => {
  const { addToPlan, saveForLater } = useFitlog();

  return (
    <div className="mt-7 flex flex-wrap gap-3">
      <button
        onClick={() => addToPlan(exercise)}
        className="flex cursor-pointer items-center gap-2 rounded-lg bg-[#caff00] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#b8ed00] active:scale-95"
      >
        <span>▣</span>
        Add to today&apos;s plan
      </button>

      <button
        onClick={() => saveForLater(exercise)}
        className="flex cursor-pointer items-center gap-2 rounded-lg border border-[#303743] bg-transparent px-5 py-3 text-sm text-gray-300 transition hover:bg-[#151a22] active:scale-95"
      >
        <span>♡</span>
        Save for later
      </button>
    </div>
  );
};

export default ExerciseActions;