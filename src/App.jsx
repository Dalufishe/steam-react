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
import AboutApp from "./layout/AboutApp/AboutApp";
import Popular from "./layout/Popular/Popular";

function App() {
  const [isEvent, setisEvent] = useState(false);

  useRandom(2, (rd) => {
    setisEvent(rd);
  });

  return (
    <>
      <div className="block md:hidden text-[30px]">
        此網站不支援行動裝置瀏覽
      </div>
      <div
        className={classNames(
          "App",
          "hidden md:block",
          "h-screen",
          "overflow-y-auto",
          "overflow-x-hidden"
        )}
      >
        {/* TOP */}
        <div
          className={css`
            background: url(${bg}) center top no-repeat;
            background-size: cover;
          `}
        >
          {/* AboutApp */}
          <AboutApp />
          {/* Navbar */}
          <Navbar />
          <div
            className={classNames(
              "relative w-fit mx-auto",
              "float-none xl:float-right 2xl:float-none"
            )}
          >
            {/* Categories */}
            {isEvent ? (
              <Event>
                <div className="mx-auto xl:mr-16 2xl:mx-auto">
                  <Categories />
                </div>
              </Event>
            ) : (
              <div className="mr-0 xl:mr-16 2xl:mr-0">
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
                  "translate-x-[-590px]": isEvent,
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
              "w-fit mx-auto",
              "float-none xl:float-right 2xl:float-none",
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
          </div>
        </div>
        {/* BOTTOM */}
        <div
          className={css`
            background: linear-gradient(
              to bottom,
              rgba(42, 71, 94, 1) 5%,
              rgba(42, 71, 94, 0) 70%
            );
          `}
        >
          <div
            className={classNames(
              "w-fit mx-auto",
              "float-none xl:float-right 2xl:float-none",
              "flex flex-col items-center"
            )}
          >
            {/* Popular */}
            <Popular />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
