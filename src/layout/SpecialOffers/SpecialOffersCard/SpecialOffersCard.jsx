import { css } from "@emotion/css";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import DiscountBox from "../../../components/DiscountBox/DiscountBox";

const FAKE_DATA = [
  {
    id: 111,
    layout: "222",
    child_ids: [11, 22, 33, 44, 55, 66],
  },
  {
    id: 222,
    layout: "122",
    child_ids: [77, 88, 99, 1010, 1111],
  },
  {
    id: 333,
    layout: "112",
    child_ids: [1212, 1313, 1414, 1515],
  },
];

// larger one
const CardItem1 = ({ id }) => {
  return (
    <div
      className={classNames(
        "relative w-[306px] h-[390px]",
        "bg-red-300",
        "shadow-sm shadow-slate-950"
      )}
    >
      {/* image */}
      <div
        className={classNames(
          "w-[306px] h-[350px]",
          css`
            background: url(https://cdn.akamai.steamstatic.com/steam/spotlights/0b99f7e8eb21e4895e48fb3a/spotlight_image_tchinese.jpg?t=1681751007);
          `
        )}
      />
      {/* infomation */}
      <div
        className={classNames(
          "w-[306px] h-[113px]",
          "absolute bottom-0",
          "w-full",
          "flex flex-col items-start",
          "pt-[10px] pb-4",
          "px-3",
          css`
            background: url(https://store.akamai.steamstatic.com/public/images/v6/home/background_spotlight.jpg);
            background-size: cover;
          `
        )}
      >
        <p className="mb-2">週中限時瘋狂特賣</p>
        <p className={classNames("mb-2", "text-[12px] text-[#acdbf5]")}>
          特惠將於 5 月 2 日 上午 1:00 截止。
        </p>
        <DiscountBox discount="最高可省 -90%" />
      </div>
    </div>
  );
};

// smaller one
const CardItem2 = () => {
  return (
    <div
      className={classNames(
        "relative w-[306px] h-[186px]",
        " bg-blue-300",
        "shadow-sm shadow-slate-950"
      )}
    >
      {/* image */}
      <div className={classNames("w-[306px] h-[143px]")} />

      {/* infomation */}
      <div
        className={classNames(
          "w-[306px] h-[44px]",
          "absolute bottom-0",
          "w-full",
          "flex justify-end",
          "p-[5px]",
          css`
            background: url(https://store.akamai.steamstatic.com/public/images/v6/home/background_spotlight.jpg);
            background-size: cover;
          `
        )}
      >
        {/* discount card */}
        <DiscountBox discount="-67%" prevPrice={1790} price={590} />
      </div>
    </div>
  );
};

export default function SpecialOffersCard({ id }) {
  // layout logic:
  //   112 means one item on the first column, two items on the second colum, etc...
  const [layout, setLayout] = useState("222");
  useEffect(() => {
    // fake data
    for (let fakedata of FAKE_DATA) {
      if (fakedata.id === id) {
        setLayout(fakedata.layout);
      }
    }
  }, []);
  return (
    <div className={classNames("flex gap-[11px]", "w-full")}>
      {/* first column */}
      <div className="flex flex-col gap-[15px]">
        {layout[0] === "1" ? (
          <CardItem1 />
        ) : (
          <>
            <CardItem2 />
            <CardItem2 />
          </>
        )}
      </div>
      {/* second column */}
      <div className="flex flex-col gap-[15px]">
        {layout[1] === "1" ? (
          <CardItem1 />
        ) : (
          <>
            <CardItem2 />
            <CardItem2 />
          </>
        )}
      </div>
      {/* third column */}
      <div className="flex flex-col gap-[15px]">
        {layout[2] === "1" ? (
          <CardItem1 />
        ) : (
          <>
            <CardItem2 />
            <CardItem2 />
          </>
        )}
      </div>
    </div>
  );
}
