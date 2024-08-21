"use client";
import React from "react";
import { usePopup } from "@/context/PopupsContext";
import ButtonArrow from "@/icons/ButtonArrow";

function OrderButton({ text, serviceName, type }) {
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
      setPopupTitle("Service Request");
      setPopupSubtitle(
        "Interested in our service? Fill out the form below to order your <br/>comprehensive HR solution from Rapid HR Connect."
      );
    } else {
      setPopupTitle("HR Support Package Request");
      setPopupSubtitle(
        "Interested in our ready-made HR package? Complete the form below, <br/>and our specialists will contact you to discuss all the essential details."
      );
    }
  };
  return (
    <>
      <button className="main-button" onClick={() => orderPopupOpen()}>
        <span>{text ? text : "Order"}</span>
        <ButtonArrow />
      </button>
    </>
  );
}

export default OrderButton;
