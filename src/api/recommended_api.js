
import STEAM_FAKE_DATA from "../fakedata/steam_fake_data";

const recommended_api = {
  GET: async (id) => {
    for (let card of STEAM_FAKE_DATA.recommendedCard) {
      if (card.id === id) {
        return card;
      }
    }
    // not found
    throw new Error("no id found");
  },
};

export default recommended_api;
