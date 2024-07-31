export const navOptions = [
  { name: "Quotes", path: "/quotes" },
  { name: "Jokes", path: "/jokes" },
  { name: "Memes", path: "/memes" },
  { name: "Riddles", path: "/riddle" },
  { name: "Stories", path: "/stories" },
];

export const categoryMap: any = {
  quotes: [
    { name: "Love", path: "Love" },
    { name: "Success", path: "Success" },
    { name: "Religion", path: "Religion" },
    { name: "Loneliness", path: "Loneliness" },
    { name: "Family", path: "Family" },

    // "Friends",
    // "Marriage",
    // "Others",
  ],
  memes: ["Funny", "Relatable", "Work", "Animals", "Random"],
  jokes: [
    { name: "Dirty", path: "Dirty" },
    { name: "Knock-Knock", path: "KnockKnock" },
    // { name: "OneLiners", path: "OneLiners" },
    // { name: "Dad Jokes", path: "Dad-Jokes" },
    // { name: "Animal Jokes", path: "Animal-Jokes" },
  ],
  puzzles: ["Logic", "Math", "Word", "Visual", "Brain Teasers"],
  riddle: ["Classic", "What Am I?", "Logic", "Math", "Funny"],
};

interface ImageMap {
  [key: number]: string;
}

export const totalImageCount = 15;
export const imageMap: ImageMap = {
  0: "text-white",
  1: "text-white",
  2: "text-black",
  3: "text-black",
  4: "text-white",
  5: "text-black",
  6: "text-white",
  7: "text-white",
  8: "text-white",
  9: "text-white",
  10: "text-white",
  11: "text-white",
  12: "text-white",
  13: "text-white",
  14: "text-black",
};

export const quotePageMetaData: any = {
  love: {
    title: "Heartfelt Love Quotes: Inspirational & Romantic Sayings",
    desc: "Discover a world of love with our collection of heartfelt love quotes. Find inspiration, romance, and deep connections in these beautiful words.",
  },
  success: {
    title: "Inspirational Quotes: Find Your Motivation and Succeed",
    desc: "Discover powerful and inspiring quotes to fuel your journey to success. Find motivation, wisdom, and encouragement in our collection.",
  },
  religion: {
    title: "Inspiring Religious Quotes: Find Faith and Hope",
    desc: "Discover powerful and uplifting religious quotes to nourish your soul. Find inspiration, wisdom, and guidance in these timeless words.",
  },
  loneliness: {
    title: "Heart-Wrenching Loneliness Quotes: Find Comfort and Understanding",
    desc: "Experience the depths of loneliness through these poignant quotes. Find solace, connection, and hope in shared feelings",
  },
  family: {
    title: "Heartwarming Family Quotes: Celebrate the Love That Bonds Us",
    desc: "Discover beautiful and inspiring family quotes that celebrate the love and bonds that unite us. Find comfort, joy, and inspiration in these heartfelt messages.",
  },
};

export const jokesPageMetaData: any = {
  dirty: {
    title: "Funny and Dirty Jokes ",
    desc: "Explore a hilarious collection of funny and dirty jokes to spice up your day. Laugh out loud with our cheeky humor and share the fun with friends at JustForQuotes.",
  },
  knockknock: {
    title: "Knock-Knock Jokes to Make You Laugh ",
    desc: "Discover a fun collection of knock-knock jokes that will make you laugh out loud. Enjoy classic and new knock-knock jokes perfect for sharing with friends and family at JustForQuotes.",
  },
};

export const quoteList = [
  {
    quote:
      "We cannot solve problems with the kind of thinking we employed when we came up with them.",
    author: "Albert Einstein",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
];

export const jokeList = [
  {
    joke: `Why couldn't the lizard get a girlfriend?;Because he had a reptile dysfunction.`,
  },
  {
    joke: "How did Burger King get Dairy Queen pregnant?;He forgot to wrap his Whopper.",
  },
  {
    joke: `Knock, Knock;Who's there?;Alice.;Alice who?;Alice fair in love and war.`,
  },
  {
    joke: `Knock, Knock;Who's there?;Tank.;Tank who?;You're welcome.`,
  },
];
