const STORAGE_KEY = "foods";

const DEFAULT_FOODS = [
  "馄饨",
  "拉面",
  "烩面",
  "热干面",
  "刀削面",
  "油泼面",
  "炸酱面",
  "炒面",
  "重庆小面",
  "板面",
  "米线",
  "酸辣粉",
  "土豆粉",
  "螺狮粉",
  "炒米粉",
  "炒河粉",
  "凉皮儿",
  "麻辣烫",
  "肉夹馍",
  "羊肉汤",
  "炒饭",
  "大盘鸡拌面",
  "盖浇饭",
  "卤肉饭",
  "烤肉饭",
  "黄焖鸡米饭",
  "驴肉火烧",
  "川菜",
  "麻辣香锅",
  "火锅",
  "酸菜鱼",
  "烤串",
  "披萨",
  "烤鸭",
  "汉堡",
  "炸鸡",
  "寿司",
  "小笼包",
  "蟹黄包",
  "煎饼果子",
  "生煎",
  "炒年糕",
  "饺子",
];

export const random = (): string => {
  const foods = allFoods();
  const i = Math.ceil(Math.random() * foods.length);
  return foods[i - 1];
};

export const allFoods = () => {
  if (typeof window === "undefined") {
    return DEFAULT_FOODS;
  }

  const foods = localStorage.getItem(STORAGE_KEY);
  if (foods) {
    return JSON.parse(foods) as string[];
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_FOODS, null, 2));
  return DEFAULT_FOODS;
};
