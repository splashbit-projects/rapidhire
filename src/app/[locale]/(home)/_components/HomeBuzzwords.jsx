"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/utils/animations";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";
import { useTranslations } from "next-intl";

const HomeBuzzwords = () => {
  const t = useTranslations("home.buzzwords");

  return (
    <section className="home-buzzwords">
      <div className="_container">
        <div className="home-buzzwords__body">
          <div className="left">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("title", {fallback: "No More HR Buzzwords"})}
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("text", {fallback: "You're busy running your business — don't waste time with vague promises and jargon. At Rapidhire LTD, we provide actionable HR support that's both straightforward and effective."})}
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("text2", {fallback: "From everyday advice to comprehensive HR project management, we focus on delivering real results. We help you recruit, develop, and manage a high-performing team that drives your business forward — no fluff, just results."})}
            </motion.p>
            <div className="divider"></div>
            <motion.h4
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("commitment", {fallback: "Our Commitment"})}
            </motion.h4>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("commitmentText", {fallback: "We guarantee you'll receive practical HR support tailored to your needs. Here's what you can count on:"})}
            </motion.p>
            <div className="row">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h3>01</h3>
                <h4>{t("commitmentItems.0.title", {fallback: "Real Solutions"})}</h4>
                <p>{t("commitmentItems.0.text", {fallback: "Practical HR guidance that makes a difference."})}</p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h3>02</h3>
                <h4>{t("commitmentItems.1.title", {fallback: "On-Time"})}</h4>
                <p>{t("commitmentItems.1.text", {fallback: "Reliable service when you need it."})}</p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h3>03</h3>
                <h4>{t("commitmentItems.2.title", {fallback: "Satisfaction Guaranteed"})}</h4>
                <p>{t("commitmentItems.2.text", {fallback: "If we fall short, we offer a refund."})}</p>
              </motion.div>
            </div>
          </div>
          <div className="right">
            <Link href="/why-choose-us" className="main-button">
              <span>{t("whyUs", {fallback: "Why us?"})}</span>
              <ButtonArrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBuzzwords;
