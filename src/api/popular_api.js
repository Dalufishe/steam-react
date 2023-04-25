import STEAM_FAKE_DATA from "../fakedata/steam_fake_data";

const popular_api = {
  GET: async () => {
    return STEAM_FAKE_DATA.popular_1;
  },
};

export default popular_api;
