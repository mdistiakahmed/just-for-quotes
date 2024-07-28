export const navOptions = [
  { name: "Quotes", path: "/" },
  { name: "Jokes", path: "/jokes" },
  { name: "Memes", path: "/memes" },
  { name: "Puzzles", path: "/puzzles" },
  { name: "Riddle", path: "/riddle" },
  { name: "Stories", path: "/stories" },
];

interface CategoryMap {
  [key: string]: string[];
}

export const categoryMap: CategoryMap = {
  quotes: [
    "Love",
    "Religion",
    "Job",
    "Loneliness",
    "Family",
    "Friends",
    "Marriage",
    "Others",
  ],
  memes: ["Adult", "Job", "Family", "Friends", "Relationship", "memes"],
  jokes: ["Adult", "Job", "Family", "Friends", "Relationship", "jokes"],
  puzzles: ["Adult", "Job", "Family", "Friends", "Relationship", "puzzles"],
  riddle: ["Adult", "Job", "Family", "Friends", "Relationship", "riddle"],
};
