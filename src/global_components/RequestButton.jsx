"use client";
import React from "react";
import { usePopup } from "@/context/PopupsContext";
import ButtonArrow from "@/icons/ButtonArrow";

function RequestButton({ text }) {
  const { setRequestPopupDisplay } = usePopup();

  const orderPopupOpen = () => {
    setRequestPopupDisplay(true);
  };
  return (
    <>
      <button className="main-button" onClick={() => orderPopupOpen()}>
        <span>{text ? text : "Book consultation"}</span>
        <ButtonArrow />
      </button>
    </>
  );
}

export default RequestButton;
