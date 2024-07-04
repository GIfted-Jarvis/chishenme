import { Dispatch, useState } from "react";
import { DEFAULT_FOODS, saveFoods } from "@/lib/foods";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import { X, Plus } from "lucide-react";
import { Settings } from "lucide-react";

export const SettingsDialog = ({ foods, setFoods }: { foods: string[]; setFoods: Dispatch<string[]> }) => {
  const [newFood, setNewFood] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline" className="fixed right-4 bottom-4">
          <Settings />
        </Button>
      </DialogTrigger>

      <DialogContent className="w-64">
        <DialogHeader>
          <DialogTitle>菜单</DialogTitle>
        </DialogHeader>

        <ScrollArea className="max-h-96 rounded-lg border">
          {foods.map((food, i) => (
            <div key={`mi-${i}`} className="flex justify-center items-center space-x-1 m-4">
              <Input value={food} className="w-36 border-b border-transparent" />
              <Button
                size="icon"
                variant="ghost"
                className="h-4 w-4"
                onClick={() => {
                  const distinctFoods = [...new Set(foods.filter((it) => it !== food))];
                  setFoods(distinctFoods);
                  saveFoods(distinctFoods);
                }}
              >
                <X />
              </Button>
            </div>
          ))}

          <div className="flex justify-center items-center space-x-1 m-4">
            <Input
              placeholder="再加一个!"
              className="w-36 border-b border-transparent"
              value={newFood}
              onChange={(e) => {
                setNewFood(e.target.value);
              }}
            />
            <Button
              size="icon"
              variant="ghost"
              className="h-4 w-4"
              onClick={() => {
                const newFoods = [...foods, newFood];
                setFoods(newFoods);
                saveFoods(newFoods);
                setNewFood("");
              }}
            >
              <Plus />
            </Button>
          </div>
        </ScrollArea>

        <DialogFooter>
          <Button
            onClick={() => {
              setFoods(DEFAULT_FOODS);
              saveFoods(DEFAULT_FOODS);
            }}
          >
            重置
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
