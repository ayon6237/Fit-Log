"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const FitlogContext = createContext();

export const FitlogProvider = ({ children }) => {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-plan");

    const storedSaved = localStorage.getItem("fitlog-saved");

    if (storedPlan) {
      setPlan(JSON.parse(storedPlan));
    }

    if (storedSaved) {
      setSaved(JSON.parse(storedSaved));
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("fitlog-plan", JSON.stringify(plan));
    }
  }, [plan, mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("fitlog-saved", JSON.stringify(saved));
    }
  }, [saved, mounted]);

  const addToPlan = (exercise) => {
    const alreadyExists = plan.some((item) => item.id === exercise.id);

    if (alreadyExists) {
      toast.error("Already in your plan");
      return;
    }

    const newExercise = {
      ...exercise,
      completed: false,
    };

    setPlan((previous) => [...previous, newExercise]);

    toast.success("Added to today's plan");
  };

  const saveForLater = (exercise) => {
    const alreadyExists = saved.some((item) => item.id === exercise.id);

    if (alreadyExists) {
      toast.error("Already saved");
      return;
    }

    setSaved((previous) => [...previous, exercise]);

    toast.success("Saved for later");
  };

  const toggleDone = (id) => {
    const currentItem = plan.find((item) => item.id === id);

    setPlan((previous) =>
      previous.map((item) =>
        item.id === id
          ? {
              ...item,
              completed: !item.completed,
            }
          : item,
      ),
    );

    if (currentItem?.completed) {
      toast.info("Marked as not done");
    } else {
      toast.success("Workout completed");
    }
  };

  const removeFromPlan = (id) => {
    setPlan((previous) => previous.filter((item) => item.id !== id));

    toast.success("Removed from your plan");
  };

  const removeFromSaved = (id) => {
    setSaved((previous) => previous.filter((item) => item.id !== id));

    toast.success("Removed from saved");
  };

  return (
    <FitlogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        saveForLater,
        toggleDone,
        removeFromPlan,
        removeFromSaved,
      }}
    >
      {children}

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
      />
    </FitlogContext.Provider>
  );
};

export const useFitlog = () => {
  const context = useContext(FitlogContext);

  if (!context) {
    throw new Error("useFitlog must be used inside FitlogProvider");
  }

  return context;
};
