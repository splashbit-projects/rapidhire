"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";
import Dots from "@/icons/Dots";
import { useTranslations } from "next-intl";

const HomeAssistance = () => {
  const t = useTranslations("home.assistance");

  return (
    <section className="home-assistance">
      <div className="_container">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Dots />
          <h2>{t("title", {fallback: "Need instant HR assistance?"})}</h2>
          <Link href={"/get-in-touch"} className="main-button">
            <span>{t("button", {fallback: "Contact us"})}</span>
            <ButtonArrow />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAssistance;
