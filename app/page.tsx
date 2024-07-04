"use client";

import { allFoods, random } from "@/lib/foods";
import { useState, useEffect } from "react";

import { FoodSelector } from "@/components/food-selector";
import { SettingsDialog } from "@/components/settings-dialog";
import { RandomizedBackground } from "@/components/randomized-background";

export default function Home() {
  const [running, setRunning] = useState(false);
  const [food, setFood] = useState("");
  const [foods, setFoods] = useState(allFoods());

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (running) {
      timer = setInterval(() => {
        setFood(random());
      }, 30);
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [running]);

  return (
    <div className="h-screen w-screen relative">
      {running && <RandomizedBackground foods={foods} />}
      <FoodSelector food={food} running={running} setRunning={setRunning} />
      <SettingsDialog foods={foods} setFoods={setFoods} />
    </div>
  );
}
