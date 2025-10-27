"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";
import Dots from "@/icons/Dots";
import { useTranslations } from "next-intl";

const HomeApproach = () => {
  const t = useTranslations("home.approach");

  return (
    <section className="home-approach">
      <div className="_container">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Dots />
          <h2>{t("title", {fallback: "Our Approach to HR Risks Management"})}</h2>
          <p>
            {t("text.0", {fallback: "At Rapid HR Connect, our proven approach to HR risk management has achieved a success rate of"})} <span>99.98%</span>.<br />
            {t("text.1", {fallback: "We have refined our strategy through extensive experience to effectively address and manage HR challenges."})}
          </p>
        </motion.div>
        <div className="home-approach__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="row"
          >
            <div>
              <img src="/images/home/arrow.svg" />
              <h3>
                {t("cards.0.title.0", {fallback: "Comprehensive"})}
                <br />
                {t("cards.0.title.1", {fallback: "Assessment"})}
              </h3>
              <p>
                {t("cards.0.text", {fallback: "We start by thoroughly evaluating your current HR practices and identifying potential risks."})}
              </p>
            </div>
            <div>
              <img src="/images/home/arrow.svg" />
              <h3>
                {t("cards.1.title.0", {fallback: "Customised"})}
                <br />
                {t("cards.1.title.1", {fallback: "Solutions"})}
              </h3>
              <p>
                {t("cards.1.text", {fallback: "We tailor our strategies to your specific needs and develop and implement solutions to address identified issues."})}
              </p>
            </div>
            <div>
              <img src="/images/home/arrow.svg" />
              <h3>
                {t("cards.2.title.0", {fallback: "Compliance"})}
                <br />
                {t("cards.2.title.1", {fallback: "Assurance"})}
              </h3>
              <p>
                {t("cards.2.text", {fallback: "We ensure that all HR practices meet legal requirements and industry standards to prevent costly violations."})}
              </p>
            </div>
            <div>
              <img src="/images/home/arrow.svg" />
              <h3>
                {t("cards.3.title.0", {fallback: "Ongoing"})}
                <br />
                {t("cards.3.title.1", {fallback: "Support"})}
              </h3>
              <p>
                {t("cards.3.text", {fallback: "Our team provides continuous assistance and updates to keep your HR processes effective and current."})}
              </p>
            </div>
            <div>
              <img src="/images/home/arrow.svg" />
              <h3>
                {t("cards.4.title.0", {fallback: "Performance"})}
                <br />
                {t("cards.4.title.1", {fallback: "Monitoring"})}
              </h3>
              <p>
                {t("cards.4.text", {fallback: "We regularly review and refine strategies to improve workforce effectiveness and mitigate emerging risks."})}
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="button-wrap"
        >
          <Link href="/our-approach" className="main-button">
            <span>{t("explore", {fallback: "Explore our approach"})}</span>
            <ButtonArrow />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeApproach;
