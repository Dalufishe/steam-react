import classNames from "classnames";
import React from "react";
import RecommendedCard from "./RecommendedCard/RecommendedCard";

export default function Recommended() {
  return (
    // container
    <div
      className={classNames("text-[80%] w-full flex justify-center text-white")}
    >
      <div className={classNames("w-[940px]")}>
        <RecommendedCard />
      </div>
    </div>
  );
}
