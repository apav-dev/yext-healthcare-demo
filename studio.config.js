import path from "path";

export default {
  isPagesJSRepo: true,
  paths: {
    pages: path.resolve("./src/templates"),
  },
  __YEXT_PUBLIC_SEARCH_API_KEY__: JSON.stringify(process.env.YEXT_PUBLIC_SEARCH_API_KEY),
};
