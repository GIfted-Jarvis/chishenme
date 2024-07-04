export const RandomizedBackground = ({ foods }: { foods: string[] }) => {
  return foods.map((food, i) => (
    <div
      key={`bg-${i}`}
      className="text-2xl text-gray-400	blur-[2px] drop-shadow-xl absolute z-10"
      style={{
        top: `${Math.random() * 95}vh`,
        left: `${Math.random() * 95}vw`,
      }}
    >
      {food}
    </div>
  ));
};
