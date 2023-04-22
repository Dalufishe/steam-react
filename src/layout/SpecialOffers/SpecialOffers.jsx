import classNames from "classnames";
import React from "react";
import FteamSwiper from "../../components/FteamSwiper/FteamSwiper";
import SpecialOffersCard from "./SpecialOffersCard/SpecialOffersCard";

export default function SpecialOffers() {
  return (
    // container
    <div
      className={classNames("mt-5", "text-white", "text-[80%]", "w-[940px]")}
    >
      {/* title */}
      <h6 className="mb-[10px] text-[110%]">特別優惠</h6>
      <FteamSwiper pagination className="h-[390px]">
        <SpecialOffersCard id={111} />
        <SpecialOffersCard id={222} />
        <SpecialOffersCard id={333} />
      </FteamSwiper>
    </div>
  );
}
