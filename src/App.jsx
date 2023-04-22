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
import HotVR from "./layout/HotVR/HotVR";

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
      <div
        className={classNames(
          "relative w-fit mx-auto",
          "float-right 2xl:float-none"
        )}
      >
        {/* Categories */}
        {isEvent ? (
          <Event>
            <div className="absolute right-16 2xl:right-[50%] 2xl:translate-x-[50%]">
              <Categories />
            </div>
          </Event>
        ) : (
          <div className="mr-16 2xl:mr-0">
            <Categories />
          </div>
        )}
        {/* Sidebar */}
        <div
          className={classNames(
            "absolute",
            "hidden xl:block",
            { "top-8": !isEvent },
            { "top-[482px]": isEvent },
            {
              "left-[-235px]": !isEvent,
            },
            {
              "left-[50%]": isEvent,
              "translate-x-[-550px]": isEvent,
              "2xl:translate-x-[-710px]": isEvent,
            }
          )}
        >
          <Sidebar />
        </div>
      </div>
      {/* Recommended */}
      <div
        className={classNames(
          "float-right 2xl:float-none",
          "flex flex-col items-center"
        )}
      >
        <Recommended />
        {/* SpecialOffers */}
        <SpecialOffers />
        {/* Browse-Categories */}
        <BrowseCat />
        {/* Browse-Fteam */}
        <BrowseFtm />
        {/* HOT VR */}
        <HotVR />
        {/* Footer */}
      </div>
    </div>
  );
}

export default App;
