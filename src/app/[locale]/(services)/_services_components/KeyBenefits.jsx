"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";
import Dots from "@/icons/Dots";
import { useTranslations } from "next-intl";

const KeyBenefits = ({ benefits }) => {
  const t = useTranslations("services.keyBenefits");

  return (
    <section className="key-benefits">
      <div className="_container">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Dots />
          <h2>{t("title", {fallback: "Key Benefits"})}</h2>
        </motion.div>
        <div className="key-benefits__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="row"
          >
            {benefits.map((benefit, index) => (
              <div key={index}>
                <img src="/images/home/arrow.svg" />
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
