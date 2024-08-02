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
    title: "The Funniest Cat Memes Online",
    description: `Discover the funniest cat memes online! Laugh out loud at hilarious cat pictures and captions. 
    Our website is your daily dose of cat cuteness and comedy. Shareable, relatable, and guaranteed to brighten your day.`,
    detailed: `Discover the funniest cat memes online! Laugh out loud at hilarious cat pictures and captions. 
    Our website is your daily dose of cat cuteness and comedy. Shareable, relatable, and guaranteed to brighten your day. 
    From grumpy to adorable, we have it all. Dive into the world of cat memes now!`,
    facts: [
      `There's a cat meme for every occasion: Whether you're feeling happy, sad, or relatable, there's a cat meme out there to capture your mood.`,
      `Cats are the internet's golden ticket to humor. Memes are just the proof.`,
      `A cat meme a day keeps the boredom away.`,
      `In a world full of chaos, cat memes bring us together.`,
      `From LOLcats to grumpy kittens, cat memes have captured the world's heart.`,
      `A well-timed cat meme can be a powerful antidote to stress.`,
      `Just like humans, cats dream, often twitching their ears and paws during REM sleep.`,
      `Cats have been domesticated for thousands of years and were revered in ancient Egypt.`,
      `A group of cats is called a clowder: Just imagine a bunch of cats causing chaos together.`,
      `Some cats are secretly ninjas: Those silent pounces and disappearances are proof.`,
    ],
  },
  "thumbs-up": {
    title: "Thumbs Up Memes: Funny, Relatable, and Shareable",
    description: `Get ready to give a big thumbs up to our hilarious collection of thumbs up memes! 
    From funny reactions to celebratory moments, we've got the perfect meme for every occasion. 
    Share the laughter with your friends and family.`,
    detailed: `Get ready to give a big thumbs up to our hilarious collection of thumbs up memes! 
    From funny reactions to celebratory moments, we've got the perfect meme for every occasion. 
    Share the laughter with your friends and family.`,
    facts: [],
  },
  drake: {
    title: "Drake Memes: The Ultimate Collection of funny drake meme",
    description: `Looking for the funniest Drake memes on the internet? 
    Look no further! Our site is packed with hilarious Drake meme pictures and GIFs. `,
    detailed: `Looking for the funniest Drake memes on the internet? 
    Look no further! Our site is packed with hilarious Drake meme pictures and GIFs. 
    From iconic "Hotline Bling" moments to the latest viral trends, we've got you covered. 
    Share these laugh-out-loud memes with your friends and join the Drake meme craze. 
    Whether you're a die-hard Drake fan or just love a good meme, you'll find something to love on our site.`,
    facts: [
      `Drake's expressive facial expressions, often paired with relatable lyrics, have made him an ideal subject for meme creation.`,
      `The music video for "Hotline Bling" was a pivotal moment in Drake's meme career, with its distinctive visuals providing endless meme material.`,
      `Despite the ever-changing landscape of internet trends, Drake memes continue to be relevant and engaging.`,
      `Drake memes: Where every facial expression becomes a relatable life moment.`,
      `Drake: The king of music and the accidental king of memes.`,
      `From 'Hotline Bling' to countless variations, Drake's meme legacy is undeniable.`,
      `"Started from the bottom now we're here." — A classic line from Drake's song, ideal for celebrating progress or success.`,
      `"You only live once, that's the motto." — From Drake's hit song "The Motto," perfect for encouraging a bold attitude.`,
      `"Know yourself, know your worth." — A motivational line from Drake, great for promoting self-confidence.`,
      `"I got way too many people here right now that I didn't know last year." — Reflects on change and growth, ideal for memes about new experiences.`,
      `"Is there more to life than growing up?" — A contemplative quote that can be used to reflect on life's deeper questions.`,
      `"You know it's real when you are who you think you are."`,
    ],
  },
  spiderman: {
    title: "Spiderman Memes: Your Daily Dose of Web-Slinging Humor",
    description: `Get ready to swing into a world of laughter with our epic collection of Spider-Man memes! 
    From classic comic book gags to the latest Marvel movie moments, we've got all the funniest Spidey memes in one place. `,
    detailed: `Get ready to swing into a world of laughter with our epic collection of Spider-Man memes! 
    From classic comic book gags to the latest Marvel movie moments, we've got all the funniest Spidey memes in one place. 
    Whether you're a die-hard Marvel fan or just love a good laugh, you'll be hooked on our web of humor. 
    Share these hilarious Spider-Man memes with your friends and let the friendly neighborhood Spider-Man brighten your day!`,
    facts: [
      `One of the most iconic Spiderman memes features the character pointing at himself, often used to highlight a relatable situation or compare two options.`,
      `Spiderman's relatable character and iconic poses have led to countless interpretations and adaptations of his image in meme culture.`,
      `The character's popularity has led to crossovers with other superheroes and pop culture icons, expanding the meme's reach.`,
      `Spiderman's complex personality, balancing heroism with everyday struggles, is often mirrored in the humor of his memes.`,
      `"With great power, there must also come great responsibility." - Spiderman`,
      `"Face it, tiger, I'm the best there is at what I do." - Spiderman`,
      `"I'm nothing without this mask." - Spiderman`,
      `"With great power, there must also come great responsibility." - Spiderman`,
      `"With great power, there must also come great responsibility." - Spiderman`,
      `Spider-Man probably has the best workout routine ever. Imagine doing pull-ups on skyscrapers!`,
      `Imagine the embarrassment of your mask slipping off during a big fight. Spider-Man has probably experienced this more than once.`,
      `Being Spider-Man must be like being a masked reality TV star. Constant paparazzi and autograph seekers, but no privacy.`,
      `Spider-Man probably gets some...interesting fan mail from his villains.`,
      `New York City traffic is bad enough, but imagine trying to navigate it while swinging through the air.`,
    ],
  },

  "side-eye": {
    title: "Side Eye Meme: The Ultimate Collection of Shady Looks",
    description: `Get ready to roll your eyes with laughter! 
    Our side eye meme collection is packed with hilarious images and GIFs that capture the essence of shade and sass.`,
    detailed: `Get ready to roll your eyes with laughter! 
    Our side eye meme collection is packed with hilarious images and GIFs that capture the essence of shade and sass.
    From subtle glances to full-on eye rolls, we've got all the side eye you can handle. 
    Share these relatable and funny memes with your friends and let the side eye commence! 
    Whether you're a seasoned meme lover or new to the trend, you'll be hooked on these shady looks.`,
    facts: [
      `The side-eye meme often features images or GIFs of people giving a skeptical or judgmental sideways glance. It's used to express disbelief, annoyance, or sarcasm.`,
      `The side-eye meme has become a staple in internet culture, frequently used in social media and messaging to react to questionable or irritating statements and situations.`,
      `Side eye memes perfectly capture the art of saying so much without uttering a word.`,
      `Everyone has given or received a side eye at some point, making these memes universally relatable.`,
      `Side eye transcends cultural and linguistic barriers, making it a truly global meme format.`,
      `Side eye memes are the epitome of subtle shade, allowing users to express disapproval without confrontation.`,
      `The side eye can be paired with countless scenarios, ensuring a never-ending supply of fresh meme content.`,
      `The meme typically includes celebrities, fictional characters, or animated figures who are known for their expressive side-eye looks. Examples include famous reactions from celebrities like Beyoncé or characters from popular TV shows and movies.`,
      `The side-eye is a non-verbal cue that conveys suspicion or disapproval, making it an effective way to visually communicate negative emotions or judgments.`,
      `Variations of the side-eye meme can include captions that enhance the expression of skepticism or disapproval, often adding humor or wit to the reaction.`,
    ],
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
