"use client";
import React from "react";
import { usePopup } from "@/context/PopupsContext";
import ButtonArrow from "@/icons/ButtonArrow";

function OrderButton({ text, serviceName }) {
  const { setOrderPopupDisplay, setServiceValue } = usePopup();

  const orderPopupOpen = () => {
    setServiceValue(serviceName);
    setOrderPopupDisplay(true);
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
