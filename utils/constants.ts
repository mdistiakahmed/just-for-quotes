export const navOptions = [
  { name: "Quotes", path: "/quotes" },
  { name: "Jokes", path: "/jokes" },
  { name: "Memes", path: "/memes" },
  { name: "Riddles", path: "/riddles" },
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
  memes: [
    { name: "Funny", path: "funny" },
    { name: "Birthday", path: "birthday" },
    { name: "Cat", path: "cat" },
    { name: "Thumbs up", path: "thumbs-up" },
    { name: "Drake", path: "drake" },
    { name: "Spiderman ", path: "spiderman" },
    { name: "Side eye", path: "side-eye" },
  ],
  jokes: [
    { name: "Dirty", path: "Dirty" },
    { name: "Knock-Knock", path: "KnockKnock" },
    // { name: "OneLiners", path: "OneLiners" },
    // { name: "Dad Jokes", path: "Dad-Jokes" },
    // { name: "Animal Jokes", path: "Animal-Jokes" },
  ],
  puzzles: ["Logic", "Math", "Word", "Visual", "Brain Teasers"],
  riddles: [
    { name: "Classic", path: "Classic" },
    { name: "Funny", path: "Funny" },
    // { name: "Kids", path: "Kids" },
  ],
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

export const memesPageMetaData: any = {
  funny: {
    title: "Funny Memes Collection - Laugh Out Loud Memes",
    description:
      "One-stop shop for the freshest, funniest memes around.Excessive meme consumption may result in uncontrollable laughter and a serious case of happiness.",
    detailed:
      "Tired of the daily grind? Need a good laugh? You've come to the right place! This page is your one-stop shop for the freshest, funniest memes around. From relatable struggles to absurd humor, we've got you covered. Get ready to scroll, chuckle, and share with your friends. Warning: Excessive meme consumption may result in uncontrollable laughter and a serious case of happiness.",
    facts: [
      "The term 'meme' was first coined by Richard Dawkins in his 1976 book 'The Selfish Gene.'",
      "Laughing at a funny meme releases endorphins, the body's natural painkillers, contributing to a sense of well-being.",
      "A funny meme can go viral within hours, spreading across social media platforms like wildfire.",
      "Funny memes have been shown to boost mood and reduce stress.",
      "Funny memes often reflect current events, societal trends, and cultural phenomena.",
      "Funny memes are a testament to human creativity, often involving clever wordplay and visual gags.",
      "Sharing funny memes creates a sense of community and connection.",
      "Brands and businesses use funny memes for marketing purposes.",
      "Despite language and cultural differences, funny memes have a universal appeal.",
      "Funny memes often introduce new slang and phrases into everyday language.",
      "Funny memes are used in educational settings to make learning more engaging.",
      "Sharing and enjoying memes together strengthens social bonds and creates a sense of community.",
    ],
  },
  birthday: {
    title: "Birthday Memes: Hilarious Memes to Celebrate Your Special Day",
    description: `Looking for the ultimate dose of laughter to brighten up your birthday? 
      Our page is your go-to destination for the funniest birthday memes around.`,
    detailed: `Looking for the ultimate dose of laughter to brighten up your birthday? 
      Our page is your go-to destination for the funniest birthday memes around. 
      From classic birthday jokes to the latest internet trends, we've got it all. 
      Share these hilarious memes with your friends and family to create unforgettable birthday memories. 
      Whether you're celebrating your own special day or someone else's, 
      our birthday memes are guaranteed to bring smiles and laughter to everyone involved.`,
    facts: [
      "A happy birthday meme is the perfect way to start any birthday celebration.",
      "Happy Birthday memes are one of the most popular categories of memes, used widely to celebrate friends' and family members' birthdays online.",
      "Make someone's birthday unforgettable with a personalized happy birthday meme.",
      "A funny or touching birthday meme can leave a lasting impression, making the recipient remember the sender fondly.",
      `"Count your life by smiles, not tears. Count your age by friends, not years. Happy birthday!" — John Lennon`,
      `"The more you praise and celebrate your life, the more there is in life to celebrate." — Oprah Winfrey`,
      `"A birthday is just the first day of another 365-day journey around the sun. Enjoy the trip." — Unknown`,
      `A happy birthday meme is worth a thousand words. Surprise your loved ones with a creative happy birthday meme.`,
    ],
  },
  cat: {
    title: "",
    description: ``,
    detailed: ``,
    facts: [],
  },
  "thumbs-up": {
    title: "",
    description: ``,
    detailed: ``,
    facts: [],
  },
  drake: {
    title: "",
    description: ``,
    detailed: ``,
    facts: [],
  },
  spiderman: {
    title: "",
    description: ``,
    detailed: ``,
    facts: [],
  },
  "side-eye": {
    title: "",
    description: ``,
    detailed: ``,
    facts: [],
  },
};

export const riddlesPageMetaData: any = {
  classic: {
    title: "Classic Riddles: Sharpen Your Mind with Timeless Puzzles",
    desc: `Challenge your intellect with our collection of classic riddles.
     From easy to expert, these brain teasers will test your problem-solving skills and provide hours of fun. 
     Discover the joy of unraveling timeless puzzles.`,
  },
  funny: {
    title: "Funny Riddles: Get Ready to Laugh Out Loud!",
    desc: `Can't stop laughing? Our collection of funny riddles is here to tickle your funny bone!
     Challenge your friends and family with these hilarious brain teasers and see who can crack the jokes first. 
     Get ready for a side-splitting good time!`,
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

export const riddleList = [
  {
    riddle:
      "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
    answer: "An echo.",
  },
  {
    riddle: "I'm tall when I'm young, and I'm short when I'm old. What am I?",
    answer: "A candle.",
  },
  {
    riddle: "The more of this there is, the less you see. What is it?",
    answer: "Darkness.",
  },
  {
    riddle: "What has keys but can't open locks?",
    answer: "A piano.",
  },
];
