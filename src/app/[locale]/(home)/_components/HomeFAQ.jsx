"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import ButtonArrow from "@/icons/ButtonArrow";
import Link from "next/link";
import Dots from "@/icons/Dots";
import Accordion from "./Accordion";
import { useTranslations } from "next-intl";

const HomeFAQ = () => {
  const t = useTranslations("home.faq");

  return (
    <section className="home-faq">
      <div className="_container">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Dots />
          <h2>{t("title", {fallback: "Frequently Asked Questions"})}</h2>
        </motion.div>
        <div className="home-faq__body">
          <Accordion
            title={t("items.0.title", {fallback: "How can I improve employee engagement in my company?"})}
            text={t("items.0.text", {fallback: "Employee engagement is crucial for productivity and retention. At Rapidhire LTD, our Training & Development services offer tailored workshops and coaching to boost employee motivation and engagement. We help create a positive work environment where your team thrives."})}
          />
          <Accordion
            title={t("items.1.title", {fallback: "We're experiencing high employee turnover. What can we do to address this?"})}
            text={t("items.1.text", {fallback: "High turnover can be costly and disruptive. Our Retained HR Support provides you with ongoing HR expertise to develop effective retention strategies, improve workplace culture, and address issues that contribute to employee dissatisfaction."})}
          />
          <Accordion
            title={t("items.2.title", {fallback: "Our recruitment process isn't yielding the results we need. What should we do?"})}
            text={t("items.2.text", {fallback: "If you're struggling with recruitment, our Recruitment Assistance service can help. Partnering with our sister company, The Recruitment Consultants, we help find and attract top talent that fits your business needs."})}
          />
          <Accordion
            title={t("items.3.title", {fallback: "We need to update our HR policies, but we don't know where to start. Can you help?"})}
            text={t("items.3.text", {fallback: "Updating HR policies can be complex. Our HR Documentation service offers comprehensive support for creating and refining policies, handbooks, and employment contracts, ensuring they meet legal requirements and align with your company's needs."})}
          />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="button-wrap"
        >
          <Link href="/faq" className="main-button">
            <span>{t("button", {fallback: "More FAQs"})}</span>
            <ButtonArrow />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeFAQ;
