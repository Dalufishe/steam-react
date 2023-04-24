import languages from "./language.json";

const language_r = (prevState = {}, action) => {
  if (action.type === "language") {
    for (let language of languages) {
      if (language.id === action.id) {
        const newState = { ...language };
        return newState;
      }
    }
  } else {
    return prevState;
  }
};

export default language_r;
