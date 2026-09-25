"use client";

import Link from "next/link";
import { useState } from "react";
import { useFitlog } from "../context/FitLogContext";

const MyPlanPage = () => {
  const {
    plan,
    saved,
    removeFromPlan,
    removeFromSaved,
    toggleDone,
  } = useFitlog();

  const [activeTab, setActiveTab] = useState("today");

  const currentItems =
    activeTab === "today"
      ? plan
      : saved;

  const totalMinutes = currentItems.reduce(
    (total, item) =>
      total + Number(item.duration || 0),
    0
  );

  const totalCalories = currentItems.reduce(
    (total, item) =>
      total + Number(item.caloriesBurned || 0),
    0
  );

  return (
    <main className="min-h-screen bg-[#0b0e13] px-6 py-8 text-white">
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <h1 className="text-2xl font-extrabold">
          MY PLAN
        </h1>

        <p className="mt-1 text-xs text-gray-500">
          {activeTab === "today"
            ? "Cap of five lifts for today. Finish them, then load more."
            : "Your saved exercises for later."}
        </p>


        {/* ================= STATS ================= */}

        <div className="mt-5 grid grid-cols-1 overflow-hidden rounded-xl border border-[#202631] bg-[#11151c] sm:grid-cols-3">

          <Stat
            label="Exercises"
            value={currentItems.length}
            highlight
          />

          <Stat
            label="Minutes"
            value={totalMinutes}
          />

          <Stat
            label="Calories"
            value={totalCalories}
          />

        </div>


        {/* ================= TABS ================= */}

        <div className="mt-5">

          <div className="flex w-fit rounded-lg border border-[#202631] bg-[#151a22] p-1">

            {/* TODAY TAB */}

            <button
              onClick={() => setActiveTab("today")}
              className={`
                rounded-md
                px-4
                py-2
                text-xs
                transition

                ${
                  activeTab === "today"
                    ? "bg-[#242b36] text-white"
                    : "text-gray-500 hover:text-gray-300"
                }
              `}
            >
              Today&apos;s Plan
            </button>


            {/* SAVED TAB */}

            <button
              onClick={() => setActiveTab("saved")}
              className={`
                rounded-md
                px-4
                py-2
                text-xs
                transition

                ${
                  activeTab === "saved"
                    ? "bg-[#242b36] text-white"
                    : "text-gray-500 hover:text-gray-300"
                }
              `}
            >
              Saved
            </button>

          </div>

        </div>


        {/* ================= CARDS ================= */}

        {currentItems.length === 0 ? (

          <EmptyState
            activeTab={activeTab}
          />

        ) : (

          <div className="mt-5 grid gap-3">

            {currentItems.map((exercise) => (

              <PlanCard
                key={exercise.id}
                exercise={exercise}
                activeTab={activeTab}

                onDone={() =>
                  toggleDone(exercise.id)
                }

                onRemove={() => {
                  if (activeTab === "today") {
                    removeFromPlan(
                      exercise.id
                    );
                  } else {
                    removeFromSaved(
                      exercise.id
                    );
                  }
                }}
              />

            ))}

          </div>

        )}

      </div>
    </main>
  );
};


/* ========================================= */
/* STAT */
/* ========================================= */

const Stat = ({
  label,
  value,
  highlight = false,
}) => {
  return (
    <div className="border-b border-[#202631] px-5 py-5 sm:border-b-0 sm:border-r last:border-0">

      <p className="text-[10px] text-gray-500">
        {label}
      </p>

      <p
        className={`
          mt-1
          text-2xl
          font-bold

          ${
            highlight
              ? "text-[#caff00]"
              : "text-white"
          }
        `}
      >
        {value}
      </p>

    </div>
  );
};


/* ========================================= */
/* EMPTY STATE */
/* ========================================= */

const EmptyState = ({ activeTab }) => {
  return (
    <div className="mt-5 flex min-h-[190px] flex-col items-center justify-center rounded-xl border border-dashed border-[#252b34]">

      <h2 className="text-sm font-bold">
        {activeTab === "today"
          ? "NOTHING HERE YET"
          : "NO SAVED EXERCISES"}
      </h2>

      <p className="mt-1 text-xs text-gray-500">
        {activeTab === "today"
          ? "Browse the library and add a lift to get today moving."
          : "Save exercises and find them here later."}
      </p>

      <Link
        href="/"
        className="
          mt-4
          rounded-full
          bg-[#caff00]
          px-5
          py-2
          text-xs
          font-bold
          text-black
        "
      >
        Go to workouts
      </Link>

    </div>
  );
};


/* ========================================= */
/* PLAN CARD */
/* ========================================= */

const PlanCard = ({
  exercise,
  activeTab,
  onDone,
  onRemove,
}) => {

  const isToday = activeTab === "today";

  return (
    <div
      className="
        group
        flex
        flex-col
        gap-4
        rounded-xl
        border
        border-[#202631]
        bg-[#11151c]
        p-4
        transition
        sm:flex-row
        sm:items-center
      "
    >

      {/* ================= IMAGE ================= */}

      <img
        src={exercise.image}
        alt={exercise.name}
        className="
          h-28
          w-full
          rounded-lg
          object-cover
          sm:w-40
        "
      />


      {/* ================= INFORMATION ================= */}

      <div className="min-w-0 flex-1">

        {/* EXERCISE NAME */}

        <div className="flex items-center gap-3">

          <h3 className="truncate font-bold uppercase text-white">
            {exercise.name}
          </h3>

        </div>


        {/* ================= MUSCLE GROUP ================= */}

        <div className="mt-2 flex flex-wrap gap-2">

          {exercise.muscleGroups?.map(
            (muscle, index) => (
              <span
                key={index}
                className="
                  rounded-full
                  bg-[#caff00]
                  px-3
                  py-1
                  text-[10px]
                  font-bold
                  text-black
                "
              >
                {muscle}
              </span>
            )
          )}

        </div>


        {/* ================= DETAILS ================= */}

        <div className="mt-3 flex flex-wrap gap-4 text-xs text-gray-500">

          <span>
            {exercise.sets} sets
          </span>

          <span>
            {exercise.reps} reps
          </span>

          <span>
            {exercise.duration} min
          </span>

          <span>
            {exercise.caloriesBurned} kcal
          </span>

        </div>

      </div>


      {/* ================= ACTIONS ================= */}

      <div
        className="
          flex
          shrink-0
          flex-wrap
          items-center
          gap-2
        "
      >

        {/* ================= VIEW DETAILS ================= */}

        <Link
          href={`/excercise/${exercise.id}`}
          className="
            rounded-md
            border
            border-[#303743]
            px-3
            py-2
            text-xs
            text-gray-300
            transition
            hover:bg-[#1a2029]
            hover:text-white
          "
        >
          View Details
        </Link>


        {/* ================= MARK AS DONE ================= */}

        {isToday && (

          <button
            onClick={onDone}
            className={`
              rounded-md
              px-3
              py-2
              text-xs
              font-semibold
              transition

              ${
                exercise.completed
                  ? "bg-green-500 text-white"
                  : "border border-[#303743] text-gray-300 hover:bg-green-500/20 hover:text-green-400"
              }
            `}
          >
            Mark as Done
          </button>

        )}


        {/* ================= REMOVE ================= */}

        <button
          onClick={onRemove}
          aria-label={`Remove ${exercise.name}`}
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-md
            border
            border-[#303743]
            text-gray-500
            transition
            hover:border-red-500/50
            hover:bg-red-500/10
            hover:text-red-400
          "
        >
          ×
        </button>

      </div>

    </div>
  );
};

export default MyPlanPage;