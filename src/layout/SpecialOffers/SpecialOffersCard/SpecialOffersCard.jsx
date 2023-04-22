import { css } from "@emotion/css";
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import DiscountBox from "../../../components/DiscountBox/DiscountBox";
import specialoffers_api from "../../../api/specialoffers_api";

// larger one
const CardItem1 = ({ id }) => {
  const [cardItemData, setCardItemData] = useState({});
  useEffect(() => {
    specialoffers_api.GET.child(id).then((data) => {
      setCardItemData(data);
    });
  }, [id]);
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
            background: url(${cardItemData.image});
            background-size: cover;
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
            background-size: cover;f
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
const CardItem2 = ({ id }) => {
  const [cardItemData, setCardItemData] = useState({});
  useEffect(() => {
    specialoffers_api.GET.child(id).then((data) => {
      setCardItemData(data);
    });
  }, [id]);
  return (
    <div
      className={classNames(
        "relative w-[306px] h-[186px]",
        " bg-blue-300",
        "shadow-sm shadow-slate-950"
      )}
    >
      {/* image */}
      <div
        className={classNames(
          "w-[306px] h-[143px]",
          css`
            background: url(${cardItemData.image});
            background-size: cover;
          `
        )}
      />

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
  const [cardData, setCardData] = useState({});
  const currentIndex = useRef(0);
  useEffect(() => {
    specialoffers_api.GET.cards(id).then((data) => {
      setCardData(data);
    });
  }, []);
  return (
    <div className={classNames("flex gap-[11px]", "w-full")}>
      {/* carditem - layout 邏輯處理 */}
      {cardData?.layout?.split("")?.map((item, index) => {
        if (item === "1") {
          currentIndex.current = currentIndex.current + 1;
          return (
            <div key={index} className="flex flex-col gap-[15px]">
              <CardItem1 id={cardData.child_ids[currentIndex.current - 1]} />
            </div>
          );
        } else {
          currentIndex.current = currentIndex.current + 2;
          return (
            <div key={index} className="flex flex-col gap-[15px]">
              <CardItem2 id={cardData.child_ids[currentIndex.current - 2]} />
              <CardItem2 id={cardData.child_ids[currentIndex.current - 1]} />
            </div>
          );
        }
      })}
    </div>
  );
}
