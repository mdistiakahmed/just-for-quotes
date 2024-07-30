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
