import classNames from "classnames";
import React from "react";
import RecommendedCard from "./RecommendedCard/RecommendedCard";
import FteamSwiper from "../../components/FteamSwiper/FteamSwiper";
import StyledContainer from "../../components/StyledContainer/StyledContainer";

export default function Recommended() {
  return (
    // container
    <div
      className={classNames("text-[80%] w-full flex justify-center text-white")}
    >
      <StyledContainer>
        <div className={classNames("w-[940px] ")}>
          {/* title */}
          <h6 className="mb-[10px] text-[110%]">精選與推薦</h6>
          <FteamSwiper pagination>
            <RecommendedCard id={730} />
            <RecommendedCard id={1928870} />
            <RecommendedCard id={1172470} />
          </FteamSwiper>
        </div>
      </StyledContainer>
    </div>
  );
}
