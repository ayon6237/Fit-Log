import ExerciseActions from "@/app/components/ExerciseActions";
import Image from "next/image";

const getFitlogApi = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch exercises");
  }

  return response.json();
};

const Page = async ({ params }) => {
  const { id } = await params;

  const exercises = await getFitlogApi();

  const item = exercises.find((exercise) => exercise.id === Number(id));

  if (!item) {
    return (
      <div className="min-h-screen bg-[#0c0f14] flex items-center justify-center text-white">
        <h1 className="text-2xl font-bold">Exercise not found</h1>
      </div>
    );
  }

  const {
    name,
    image,
    rating,
    caloriesBurned,
    duration,
    muscleGroups,
    equipment,
    difficulty,
    sets,
    reps,
    instructions,
    description,
  } = item;

  return (
    <main className="min-h-screen bg-[#0b0e13] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-9">
        <div className="relative h-[520px] w-full overflow-hidden rounded-xl">
          <Image
            src={image}
            alt={name}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 380px"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="flex flex-col">
          <h1 className="text-4xl font-extrabold uppercase tracking-tight">
            {name}
          </h1>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-400">
            {description ||
              `A ${difficulty?.toLowerCase()} exercise designed to improve your strength, fitness and overall performance.`}
          </p>

          <div className="flex flex-wrap gap-3 mt-4">
            {muscleGroups?.map((muscle, index) => (
              <span
                key={index}
                className="rounded-full bg-[#caff00] px-4 py-1.5 text-xs font-bold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <div className="mt-5 overflow-hidden rounded-xl border border-[#202631] bg-[#11151c]">
            <InfoRow label="EQUIPMENT" value={equipment} />

            <InfoRow label="DIFFICULTY" value={difficulty} />

            <InfoRow label="SETS" value={sets} />

            <InfoRow label="REPS" value={reps} />

            <InfoRow label="DURATION" value={`${duration} min`} />

            <InfoRow label="CALORIES" value={`${caloriesBurned} kcal`} />

            <InfoRow label="RATING" value={`⭐ ${rating}`} last />
          </div>

          <div className="mt-7">
            <h2 className="text-sm font-bold tracking-wide">INSTRUCTIONS</h2>

            <ol className="mt-4 space-y-3">
              {instructions?.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-sm leading-6 text-gray-400"
                >
                  <span className="text-gray-500">{index + 1}.</span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-wrap gap-3 mt-7">
            <ExerciseActions exercise={item} />
          </div>
        </div>
      </div>
    </main>
  );
};

function InfoRow({ label, value, last = false }) {
  return (
    <div
      className={`flex items-center justify-between px-4 py-3.5 ${
        !last ? "border-b border-[#202631]" : ""
      }`}
    >
      <span className="text-[10px] font-bold tracking-wider text-gray-500">
        {label}
      </span>

      <span className="text-sm text-gray-200">{value}</span>
    </div>
  );
}

export default Page;
