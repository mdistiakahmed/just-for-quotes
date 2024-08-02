export const getQuote = async (param: string) => {
  try {
    let quoteList = [];

    switch (param) {
      case "love":
        ({ quoteList } = await import("../data/quotes/love"));
        break;
      case "loneliness":
        ({ quoteList } = await import("../data/quotes/loneliness"));
        break;
      case "success":
        ({ quoteList } = await import("../data/quotes/success"));
        break;
      case "religion":
        ({ quoteList } = await import("../data/quotes/religion"));
        break;
      case "family":
        ({ quoteList } = await import("../data/quotes/family"));
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
      case "dirty":
        ({ jokeList } = await import("../data/jokes/dirty"));
        break;
      case "knockknock":
        ({ jokeList } = await import("../data/jokes/knockknock"));
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
      case "classic":
        ({ riddleList } = await import("../data/riddles/classic"));
        break;
      case "funny":
        ({ riddleList } = await import("../data/riddles/funny"));
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
