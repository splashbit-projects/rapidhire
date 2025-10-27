"use client";
import React from "react";
import { usePopup } from "@/context/PopupsContext";
import ButtonArrow from "@/icons/ButtonArrow";
import { useTranslations } from "next-intl";

function RequestButton({ text }) {
  const t = useTranslations("requestButton");

  const { setRequestPopupDisplay } = usePopup();

  const orderPopupOpen = () => {
    setRequestPopupDisplay(true);
  };
  return (
    <>
      <button className="main-button" onClick={() => orderPopupOpen()}>
        <span>{text ? text : t("label", {fallback: "Book consultation"})}</span>
        <ButtonArrow />
      </button>
    </>
  );
}

export default RequestButton;
