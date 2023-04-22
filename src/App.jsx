import { css } from "@emotion/css";
import classNames from "classnames";
import Navbar from "./layout/Navbar/Navbar";
import Categories from "./layout/Categories/Categories";
import Recommended from "./layout/Recommended/Recommended";

import bg from "./assets/bg.png";
import SpecialOffers from "./layout/SpecialOffers/SpecialOffers";
import Sidebar from "./layout/Sidebar/Sidebar";
import Event from "./layout/Event/Event";
import { useState } from "react";
import useRandom from "./hooks/useRandom";
import BrowseCat from "./layout/BrowseCat/BrowseCat";
import BrowseFtm from "./layout/BrowseFtm/BrowseFtm";

function App() {
  const [isEvent, setisEvent] = useState(false);

  useRandom(3, (rd) => {
    setisEvent(rd);
  });

  return (
    <div
      className={classNames(
        "App",
        "h-screen",
        "overflow-y-auto",
        "overflow-x-hidden",
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
        {isEvent ? (
          <Event>
            <Categories Event={isEvent ? Event : undefined} />
          </Event>
        ) : (
          <Categories />
        )}
        {/* Sidebar */}
        <div
          className={classNames(
            "absolute",
            { "top-8": !isEvent },
            { "top-[482px]": isEvent },
            {
              "left-[-235px]": !isEvent,
            },
            {
              "left-[50%]": isEvent,
              "translate-x-[-710px]": isEvent,
            }
          )}
        >
          <Sidebar />
        </div>
      </div>
      {/* Recommended */}
      <Recommended />
      {/* SpecialOffers */}
      <SpecialOffers />
      {/* Browse-Categories */}
      <BrowseCat />
      {/* Browse-Fteam */}
      <BrowseFtm />
      {/* Footer */}
    </div>
  );
}

export default App;
