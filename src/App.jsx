import { css } from "@emotion/css";
import classNames from "classnames";
import Navbar from "./layout/Navbar/Navbar";
import Categories from "./layout/Categories/Categories";
import Recommended from "./layout/Recommended/Recommended";

import bg from "./assets/bg.png";
import SpecialOffers from "./layout/SpecialOffers/SpecialOffers";
import Sidebar from "./layout/Sidebar/Sidebar";

function App() {
  return (
    <div
      className={classNames(
        "App",
        "h-screen",
        "overflow-auto",
        css`
          background: url(${bg}) center top no-repeat;
          background-size: cover;
        `
      )}
    >
      {/* Navbar */}
      <Navbar />
      <div className="relative w-fit mx-auto">
        {/* Categories */}
        <Categories />
        {/* Sidebar */}
        <Sidebar />
      </div>
      {/* Recommended */}
      <Recommended />
      {/* SpecialOffers */}
      <SpecialOffers />
      {/* Browse */}
      {/* Footer */}
    </div>
  );
}

export default App;
