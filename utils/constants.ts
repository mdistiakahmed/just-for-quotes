export const navOptions = [
  { name: "Quotes", path: "/quotes" },
  { name: "Jokes", path: "/jokes" },
  { name: "Memes", path: "/memes" },
  { name: "Riddles", path: "/riddles" },
  { name: "Stories", path: "/stories" },
];

export const categoryMap: any = {
  quotes: [
    { name: "Inspirational", path: "inspirational" },
    { name: "Love", path: "love" },
    { name: "Funny", path: "funny" },
    { name: "Famous", path: "famous" },
    { name: "Good morning", path: "good-morning" },
    { name: "Life", path: "life" },
    { name: "Birthday", path: "birthday" },
    { name: "Self Love", path: "self-love" },
    { name: "Best Friend", path: "best-friend" },
    { name: "Kindness", path: "kindness" },
    { name: "Leadership", path: "leadership" },
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
    { name: "Dad", path: "dad" },
    { name: "Funny", path: "funny" },
    { name: "Knock knock", path: "knock-knock" },
    { name: "Kids", path: "kids" },
  ],
  riddles: [
    { name: "Funny", path: "Funny" },
    { name: "Kids", path: "kids" },
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
  inspirational: {
    title:
      "Inspiring Quotes: Ignite Your Soul, Empower Your Mind - Daily Motivation",
    desc: `Discover a world of wisdom with our collection of inspirational quotes. 
    Find powerful words that ignite your soul, empower your mind, and fuel your journey to success. 
    From famous leaders to everyday heroes, these quotes offer inspiration, motivation, and encouragement to overcome challenges and achieve your dreams. 
    Let these uplifting messages be your daily dose of positivity and inspiration.`,
    detailed: `Discover a world of wisdom with our collection of inspirational quotes. 
    Find powerful words that ignite your soul, empower your mind, and fuel your journey to success. 
    From famous leaders to everyday heroes, these quotes offer inspiration, motivation, and encouragement to overcome challenges and achieve your dreams. 
    Let these uplifting messages be your daily dose of positivity and inspiration.`,
  },
  love: {
    title: "Heartfelt Love Quotes: Express Your Feelings Deeply",
    desc: `Discover the power of words with our collection of heartfelt love quotes. 
    Whether you're looking to express your love, find inspiration for a romantic message, or simply appreciate the beauty of love, these quotes will touch your heart. 
    From passionate declarations to tender expressions of affection, find the perfect words to convey your emotions. 
    Let these love quotes ignite your passion and deepen your connection with your loved one.`,
    detailed: `Discover the power of words with our collection of heartfelt love quotes. 
    Whether you're looking to express your love, find inspiration for a romantic message, or simply appreciate the beauty of love, these quotes will touch your heart. 
    From passionate declarations to tender expressions of affection, find the perfect words to convey your emotions. 
    Let these love quotes ignite your passion and deepen your connection with your loved one.`,
  },
  funny: {
    title: "Laugh Out Loud: Funny Quotes to Brighten Your Day",
    desc: `Get ready to chuckle with our collection of side-splitting funny quotes. 
    From witty one-liners to absurd observations, these quotes are guaranteed to make you laugh out loud. 
    Whether you need a quick pick-me-up or want to share some humor with friends, our funny quote collection has something for everyone. 
    Let the laughter begin!`,
    detailed: `Get ready to chuckle with our collection of side-splitting funny quotes. 
    From witty one-liners to absurd observations, these quotes are guaranteed to make you laugh out loud. 
    Whether you need a quick pick-me-up or want to share some humor with friends, our funny quote collection has something for everyone. 
    Let the laughter begin!`,
  },
  famous: {
    title: "Timeless Wisdom: Famous Quotes from Great Minds",
    desc: `Discover a treasure trove of profound thoughts and insightful words from history's most brilliant minds. 
    Our collection of famous quotes features timeless wisdom from philosophers, leaders, artists, and more. 
    Gain inspiration, motivation, and a deeper understanding of life through the words of those who have shaped our world. 
    Explore a wide range of topics, from love and friendship to success and happiness.`,
    detailed: `Discover a treasure trove of profound thoughts and insightful words from history's most brilliant minds. 
    Our collection of famous quotes features timeless wisdom from philosophers, leaders, artists, and more. 
    Gain inspiration, motivation, and a deeper understanding of life through the words of those who have shaped our world. 
    Explore a wide range of topics, from love and friendship to success and happiness.`,
  },
  "good-morning": {
    title: "Good Morning Quotes: Start Your Day with Inspiration",
    desc: `Wake up to a world of positivity with our collection of uplifting good morning quotes. 
    Find inspiring messages to kickstart your day, boost your mood, and set a positive tone for the hours ahead. 
    Whether you're a morning person or not, these quotes will help you embrace the new day with enthusiasm and optimism. 
    Share these quotes with friends and loved ones to spread joy and happiness.`,
    detailed: `Wake up to a world of positivity with our collection of uplifting good morning quotes. 
    Find inspiring messages to kickstart your day, boost your mood, and set a positive tone for the hours ahead. 
    Whether you're a morning person or not, these quotes will help you embrace the new day with enthusiasm and optimism. 
    Share these quotes with friends and loved ones to spread joy and happiness.`,
  },
  life: {
    title: " Life Quotes: Finding Meaning and Inspiration",
    desc: `Discover profound insights and wisdom about life with our curated collection of life quotes. 
    From inspiring words of encouragement to thought-provoking reflections, these quotes offer a fresh perspective on life's journey. 
    Explore the beauty of existence, the challenges of growth, and the power of human connection. 
    Find motivation, comfort, and inspiration to live your best life.`,
    detailed: `Discover profound insights and wisdom about life with our curated collection of life quotes. 
    From inspiring words of encouragement to thought-provoking reflections, these quotes offer a fresh perspective on life's journey. 
    Explore the beauty of existence, the challenges of growth, and the power of human connection. 
    Find motivation, comfort, and inspiration to live your best life.`,
  },
  birthday: {
    title: "Birthday Wishes and Quotes: Celebrate in Style",
    desc: `Find the perfect birthday message with our collection of heartfelt and inspiring quotes. 
    Whether you're looking for something funny, sentimental, or simply sweet, we've got you covered. 
    Celebrate your loved ones with warm wishes and memorable quotes that capture the joy of this special day. 
    Make birthdays even more special with our thoughtful and inspiring words.`,
    detailed: `Find the perfect birthday message with our collection of heartfelt and inspiring quotes. 
    Whether you're looking for something funny, sentimental, or simply sweet, we've got you covered. 
    Celebrate your loved ones with warm wishes and memorable quotes that capture the joy of this special day. 
    Make birthdays even more special with our thoughtful and inspiring words.`,
  },
  leadership: {
    title: "Inspiring Leadership Quotes: Empower Your Team",
    desc: `Discover powerful insights and wisdom from renowned leaders. 
    Our collection of leadership quotes offers inspiration and guidance for those in positions of influence. 
    Learn how to inspire, motivate, and empower your team while navigating challenges and achieving success. 
    Whether you're a seasoned leader or just starting your journey, these quotes will help you develop the skills and mindset needed to make a positive impact.`,
    detailed: `Discover powerful insights and wisdom from renowned leaders. 
    Our collection of leadership quotes offers inspiration and guidance for those in positions of influence. 
    Learn how to inspire, motivate, and empower your team while navigating challenges and achieving success. 
    Whether you're a seasoned leader or just starting your journey, these quotes will help you develop the skills and mindset needed to make a positive impact.`,
  },
  kindness: {
    title: "Spread Kindness: Kindness Quotes to Warm Your Heart",
    desc: `Discover the power of kindness with our collection of heartwarming quotes. 
    Find inspiration to spread compassion, empathy, and love in your daily life. 
    From simple acts of kindness to profound reflections on humanity, these quotes will uplift your spirit and remind you of the importance of treating others with kindness. 
    Let these words inspire you to make a positive impact on the world.`,
    detailed: `Discover the power of kindness with our collection of heartwarming quotes. 
    Find inspiration to spread compassion, empathy, and love in your daily life. 
    From simple acts of kindness to profound reflections on humanity, these quotes will uplift your spirit and remind you of the importance of treating others with kindness. 
    Let these words inspire you to make a positive impact on the world.`,
  },
  "self-love": {
    title: "Embrace Yourself: Inspiring Self Love Quotes",
    desc: `Discover the power of self-love with our collection of inspiring quotes. 
    Learn to embrace your unique beauty, build self-confidence, and cultivate a positive body image. 
    These quotes offer encouragement, motivation, and practical advice for nurturing a loving relationship with yourself. 
    Let these words empower you to unlock your full potential and live a happier, more fulfilling life.`,
    detailed: `Discover the power of self-love with our collection of inspiring quotes. 
    Learn to embrace your unique beauty, build self-confidence, and cultivate a positive body image. 
    These quotes offer encouragement, motivation, and practical advice for nurturing a loving relationship with yourself. 
    Let these words empower you to unlock your full potential and live a happier, more fulfilling life.`,
  },
  "best-friend": {
    title: "Best Friend Quotes: Celebrate Your Unbreakable Bond",
    desc: `Cherish the incredible bond you share with your best friend with these heartwarming quotes. 
    Discover words that perfectly capture the essence of friendship, loyalty, and shared adventures. 
    From funny and lighthearted to deeply touching and inspirational, these quotes celebrate the magic of true friendship. 
    Strengthen your bond and create lasting memories with your BFF.`,
    detailed: `Cherish the incredible bond you share with your best friend with these heartwarming quotes. 
    Discover words that perfectly capture the essence of friendship, loyalty, and shared adventures. 
    From funny and lighthearted to deeply touching and inspirational, these quotes celebrate the magic of true friendship. 
    Strengthen your bond and create lasting memories with your BFF.`,
  },
};

export const jokesPageMetaData: any = {
  "knock-knock": {
    title: "Knock Knock Jokes: Fun and Funny!",
    desc: `Get ready to laugh out loud with our classic knock knock jokes. 
    These playful and silly jokes are perfect for sharing with friends and family. 
    Test your wit and see if you can guess the punchline. 
    Whether you're a seasoned joke-teller or a newbie, these knock knock jokes are sure to bring smiles and laughter to everyone. 
    Let the fun begin!`,
    description: `Get ready to laugh out loud with our classic knock knock jokes. 
    These playful and silly jokes are perfect for sharing with friends and family. 
    Test your wit and see if you can guess the punchline. 
    Whether you're a seasoned joke-teller or a newbie, these knock knock jokes are sure to bring smiles and laughter to everyone. 
    Let the fun begin!`,
  },
  dad: {
    title: "Dad Jokes: So Bad, They're Good!",
    desc: `Get ready to groan and chuckle with our collection of classic dad jokes. 
    These puns and one-liners are so bad, they're actually funny. 
    Share these corny jokes with your family and friends to lighten the mood and create unforgettable moments. 
    Warning: Excessive exposure to dad jokes may cause uncontrollable laughter and a temporary loss of eye rolls.`,
    description: ``,
  },
  funny: {
    title: "Funny Jokes: Laugh Your Socks Off!",
    desc: `Get ready for a side-splitting good time with our collection of funny jokes! 
    From witty one-liners to clever puns, we've got something to tickle your funny bone. 
    Share these jokes with friends, family, or coworkers to spread laughter and joy. 
    Warning: excessive laughter may occur!`,
    description: `Get ready for a side-splitting good time with our collection of funny jokes! 
    From witty one-liners to clever puns, we've got something to tickle your funny bone. 
    Share these jokes with friends, family, or coworkers to spread laughter and joy. 
    Warning: excessive laughter may occur!`,
  },
  kids: {
    title: "Kids Friendly Jokes: Fun and Laughter for Everyone",
    desc: `Get ready for giggles and grins with our collection of clean and funny jokes for kids. 
    These silly and playful jokes are perfect for sharing with your little ones. 
    From animal puns to silly riddles, these jokes will keep the whole family entertained. 
    Enjoy a good laugh together and create unforgettable memories.`,
    description: `Get ready for giggles and grins with our collection of clean and funny jokes for kids. 
    These silly and playful jokes are perfect for sharing with your little ones. 
    From animal puns to silly riddles, these jokes will keep the whole family entertained. 
    Enjoy a good laugh together and create unforgettable memories.`,
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
    facts: [
      `The thumbs up gesture can be traced back to ancient Rome, where it could signify either life or death for gladiators.`,
      `The thumbs up emoji, introduced in the early days of digital communication, rapidly became a staple of online interactions.`,
      `The transition from emoji to meme was natural, with the simple gesture becoming a versatile canvas for humor, sarcasm, and irony.`,
      `Misunderstandings: It's essential to be aware of cultural nuances to avoid unintentional offense.`,
      `Thumbs up memes have the potential to spread rapidly across social media platforms, generating significant engagement.`,
      `Community Building: Shared humor and relatable content foster a sense of community among meme enthusiasts.`,
    ],
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
  kids: {
    title: "Fun Riddles for Kids: Sharpen Those Brains!",
    desc: `Spark your child's curiosity with our collection of fun and engaging riddles. 
    These brain-teasers are perfect for kids of all ages. With a mix of easy and challenging riddles, your child will love trying to solve the puzzles. 
    Perfect for car rides, waiting rooms, or family game night. Let the riddle-solving adventure begin!`,
    detailed: `Spark your child's curiosity with our collection of fun and engaging riddles. 
    These brain-teasers are perfect for kids of all ages. With a mix of easy and challenging riddles, your child will love trying to solve the puzzles. 
    Perfect for car rides, waiting rooms, or family game night. Let the riddle-solving adventure begin!`,
  },
  funny: {
    title: "Brain Teasers: Funny Riddles to Challenge Your Mind",
    desc: `Get ready to scratch your head and laugh out loud with our collection of funny riddles. 
    These clever puzzles will test your problem-solving skills while providing endless entertainment. 
    Share these riddles with friends and family for a fun and engaging challenge. Can you crack the code?`,
    detailed: `Get ready to scratch your head and laugh out loud with our collection of funny riddles. 
    These clever puzzles will test your problem-solving skills while providing endless entertainment. 
    Share these riddles with friends and family for a fun and engaging challenge. Can you crack the code?`,
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
