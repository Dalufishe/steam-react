import classNames from "classnames";
import Navbar from "./layout/Navbar/Navbar";
import Categories from "./layout/Categories/Categories";
import Recommended from "./layout/Recommended/Recommended";

import bg from "./assets/bg.png";
import { css } from "@emotion/css";

function App() {
  return (
    <div
      className={classNames(
        "App",
        "h-screen",
        css`
          background: url(${bg}) center top no-repeat;
          background-size: 200%;
        `
      )}
    >
      {/* Navbar */}
      <Navbar />
      {/* Categories */}
      <Categories />
      {/* Recommended */}
      <Recommended />
      {/* SpecialOffers */}
      {/* Browse */}
      {/* Footer */}
    </div>
  );
}

export default App;
