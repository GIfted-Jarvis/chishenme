import { Dispatch } from "react";
import { Button } from "@/components/ui/button";

export const FoodSelector = ({
  food,
  running,
  setRunning,
}: {
  food: string;
  running: boolean;
  setRunning: Dispatch<boolean>;
}) => (
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
);
