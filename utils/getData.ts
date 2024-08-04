export const getQuote = async (param: string) => {
  try {
    let quoteList = [];

    switch (param) {
      case "inspirational":
        ({ quoteList } = await import("../data/quotes/inspirational"));
        break;
      case "love":
        ({ quoteList } = await import("../data/quotes/love"));
        break;
      case "funny":
        ({ quoteList } = await import("../data/quotes/funny"));
        break;
      case "famous":
        ({ quoteList } = await import("../data/quotes/famous"));
        break;
      case "good-morning":
        ({ quoteList } = await import("../data/quotes/good_morning"));
        break;
      case "life":
        ({ quoteList } = await import("../data/quotes/life"));
        break;
      case "birthday":
        ({ quoteList } = await import("../data/quotes/birthday"));
        break;
      case "self-love":
        ({ quoteList } = await import("../data/quotes/self_love"));
        break;
      case "best-friend":
        ({ quoteList } = await import("../data/quotes/best_friend"));
        break;
      case "kindness":
        ({ quoteList } = await import("../data/quotes/kindness"));
        break;
      case "leadership":
        ({ quoteList } = await import("../data/quotes/leadership"));
        break;
      default:
        throw new Error(`No data file found for param: ${param}`);
    }

    return quoteList;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getJokes = async (param: string) => {
  try {
    let jokeList = [];

    switch (param) {
      case "funny":
        ({ jokeList } = await import("../data/jokes/funny"));
        break;
      case "knock-knock":
        ({ jokeList } = await import("../data/jokes/knockknock"));
        break;
      case "dad":
        ({ jokeList } = await import("../data/jokes/dad"));
        break;
      case "kids":
        ({ jokeList } = await import("../data/jokes/kids"));
        break;
      default:
        throw new Error(`No data file found for param: ${param}`);
    }

    return jokeList;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getRiddles = async (param: string) => {
  try {
    let riddleList = [];

    switch (param) {
      case "funny":
        ({ riddleList } = await import("../data/riddles/funny"));
        break;
      case "kids":
        ({ riddleList } = await import("../data/riddles/kids"));
        break;
      default:
        throw new Error(`No data file found for param: ${param}`);
    }

    return riddleList;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMemes = async (param: string) => {
  try {
    let memeList: any = [];

    switch (param) {
      case "funny":
        ({ memeList } = await import("../data/memes/funny"));
        break;
      case "couple":
        ({ memeList } = await import("../data/memes/couple"));
        break;
      case "birthday":
        break;
      case "cat":
        break;
      case "thumbs-up":
        break;
      case "drake":
        break;
      case "spiderman":
        break;
      case "side-eye":
        break;
      default:
        throw new Error(`No data file found for param: ${param}`);
    }

    return memeList;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
