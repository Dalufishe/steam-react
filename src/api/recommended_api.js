import axios from "axios";

const recommended_api = {
  GET: async (id) => {
    return {
      image: `https://cdn.akamai.steamstatic.com/steam/apps/${id}/capsule_616x353.jpg`,
      title: "Minecraft Legend",
    };
  },
};

export default recommended_api;
