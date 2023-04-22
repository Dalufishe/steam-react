const { useEffect } = require("react");

const useRandom = (r, cb) => {
  useEffect(() => {
    if (Math.floor(Math.random() * r) === 0) {
      cb(true);
    } else {
      cb(false);
    }
  }, []);
};

export default useRandom;
