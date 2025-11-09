"use client";
import React from "react";
import { usePopup } from "@/context/PopupsContext";
import ButtonArrow from "@/icons/ButtonArrow";
import { useTranslations } from "next-intl";

function OrderButton({ text, serviceName, type }) {
  const t = useTranslations("orderButton");
  
  const {
    setOrderPopupDisplay,
    setServiceValue,
    setPopupTitle,
    setPopupSubtitle,
  } = usePopup();

  const orderPopupOpen = () => {
    setServiceValue(serviceName);
    setOrderPopupDisplay(true);
    if (type == "service") {
      setPopupTitle(t("title1", {fallback: "Service Request"}));
      setPopupSubtitle(
        t("subtitle1", {fallback: "Interested in our service? Fill out the form below to order your <br/>comprehensive HR solution from Rapid HR Connect."})
      );
    } else {
      setPopupTitle(t("title2", {fallback: "HR Support Package Request"}));
      setPopupSubtitle(
        t("subtitle2", {fallback: "Interested in our ready-made HR package? Complete the form below, <br/>and our specialists will contact you to discuss all the essential details."})
      );
    }
  };
  return (
    <>
      <button className="main-button" onClick={() => orderPopupOpen()}>
        <span>{text ? text : t("text", {fallback: "Order"})}</span>
        <ButtonArrow />
      </button>
    </>
  );
}

export default OrderButton;
