"use client";
import React from "react";
import { usePopup } from "@/context/PopupsContext";
import ButtonArrow from "@/icons/ButtonArrow";

function OrderButton({ serviceName }) {
  const { setOrderPopupDisplay, setServiceValue } = usePopup();

  const orderPopupOpen = () => {
    setServiceValue(serviceName);
    setOrderPopupDisplay(true);
  };
  return (
    <>
      <button className="main-button" onClick={() => orderPopupOpen()}>
        <span>Order</span>
        <ButtonArrow />
      </button>
    </>
  );
}

export default OrderButton;
