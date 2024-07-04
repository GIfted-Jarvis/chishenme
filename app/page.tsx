"use client";

import { allFoods, random } from "@/lib/foods";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [running, setRunning] = useState(false);
  const [food, setFood] = useState("");

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
      {running &&
        allFoods().map((food, index) => (
          <div
            key={index}
            className="text-2xl text-gray-400	blur-[2px] drop-shadow-xl absolute z-10"
            style={{
              top: `${Math.random() * 95}vh`,
              left: `${Math.random() * 95}vw`,
            }}
          >
            {food}
          </div>
        ))}

      <div className="h-screen w-screen flex flex-col justify-center items-center z-50">
        <div className="text-5xl">{running || !food ? "吃什么?" : "吃这个!"}</div>
        <div className="text-3xl text-yellow-300 font-bold p-2 m-2">{food}</div>
        <Button
          size="lg"
          onClick={() => {
            setRunning(!running);
          }}
        >
          {running ? "结束" : "开始"}
        </Button>
      </div>
    </div>
  );
}
