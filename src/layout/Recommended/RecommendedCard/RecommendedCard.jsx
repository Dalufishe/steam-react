import { css } from "@emotion/css";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import RcmImage from "./RcmImage/RcmImage";
import RcmInfomation from "./RcmInfomation/RcmInfomation";
import recommended_api from "../../../api/recommended_api";

export default function RecommendedCard({ id }) {
  const [data, setData] = useState({
    image: "",
    title: "",
  });
  useEffect(() => {
    recommended_api.GET(id).then((data) => {
      setData(data);
    });
  }, [id]);
  return (
    <div className={classNames("flex", "w-full", " h-[353px]")}>
      {/* left - image */}
      <RcmImage image={data.image} />
      {/* right - infomation */}
      <RcmInfomation title={data.title} />
    </div>
  );
}
