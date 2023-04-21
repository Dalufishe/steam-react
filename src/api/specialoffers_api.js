// 使用假資料 (暫時性)
import STEAM_FAKE_DATA from "../fakedata/steam_fake_data";

const specialoffers_api = {
  GET: {
    cards: async (id) => {
      for (let card of STEAM_FAKE_DATA.specialOffersCard) {
        if (card.id === id) {
          return card;
        }
      }
      // not found
      throw new Error("no id found");
    },
    child: async (id) => {
      for (let child of STEAM_FAKE_DATA.specialOffersCardChild) {
        if (child.id === id) {
          return child;
        }
      }
      // not found
      throw new Error("no id found");
    },
  },
};

export default specialoffers_api;
