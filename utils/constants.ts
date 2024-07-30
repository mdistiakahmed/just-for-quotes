export const navOptions = [
  { name: "Quotes", path: "/quotes" },
  { name: "Jokes", path: "/jokes" },
  { name: "Memes", path: "/memes" },
  { name: "Riddles", path: "/riddle" },
  { name: "Stories", path: "/stories" },
];

interface CategoryMap {
  [key: string]: string[];
}

export const categoryMap: CategoryMap = {
  quotes: [
    "Love",
    "Success",
    "Religion",
    "Loneliness",
    "Family",
    // "Friends",
    // "Marriage",
    // "Others",
  ],
  memes: ["Adult", "Job", "Family", "Friends", "Relationship", "memes"],
  jokes: ["Adult", "Job", "Family", "Friends", "Relationship", "jokes"],
  puzzles: ["Adult", "Job", "Family", "Friends", "Relationship", "puzzles"],
  riddle: ["Adult", "Job", "Family", "Friends", "Relationship", "riddle"],
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
  {
    quote: "Be the change that you wish to see in the world.",
    author: " Mahatma Gandhi",
  },
  {
    quote:
      "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    author: "J.K. Rowling",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier. ",
    author: "Mother Teresa",
  },
  {
    quote:
      "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. ",
    author: "Martin Luther King Jr.",
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
  },
  { quote: "Well done is better than well said.", author: "Benjamin Franklin" },
  {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
  },
  {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
  },
  {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
  },
  {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
  },
  {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
  },
  {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
  },
  {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
  },
  {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
  },
  {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
  },
];
