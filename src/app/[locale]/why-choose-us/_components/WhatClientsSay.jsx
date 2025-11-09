"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/utils/animations";
import Image from "next/image";
import { useTranslations } from "next-intl";

const WhatClientsSay = () => {
  const t = useTranslations("whyChooseUs.whatClientSay");

  return (
    <section className="what-clients-say">
      <div className="_container">
        <div className="what-clients-say__body">
          <div className="left">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <h2>
                {t("title.0", {fallback: "What Our"})} <br />
                <span>{t("title.1", {fallback: "Clients Say"})}</span>
              </h2>
              <p>
                {t("text", {fallback: "We pride ourselves on our positive impact on our clients, and their feedback speaks volumes about the quality of our services."})}
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <Image
                src={"/images/why/WhatClientsSay.png"}
                width={540}
                height={215}
              />
            </motion.div>
          </div>
          <div className="right">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p>
                {t('reviews.0.text', {fallback: "“Rapid HR Connect quickly became an integral part of our team, offering invaluable guidance that helped us navigate complex HR challenges. Their expertise is unmatched!”"})}
              </p>
              <div className="details">
                <span>{t('reviews.0.author', {fallback: "Sophia Chen"})}</span>
                <span>{t('reviews.0.position', {fallback: "COO of Zenith Horizons"})}</span>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p>
                {t('reviews.1.text', {fallback: "“Thanks to Rapid HR Connect, our recruitment process has been streamlined, allowing us to attract top talent easily. Their proactive approach made all the difference.”"})}
              </p>
              <div className="details">
                <span>{t('reviews.1.author', {fallback: "Michael Harper"})}</span>
                <span>{t('reviews.1.position', {fallback: "HR Director at EchoWave Innovations"})}</span>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p>
                {t('reviews.2.text', {fallback: "“The training and development programs designed by Rapid HR Connect have significantly boosted our team’s productivity. Their tailored solutions truly address our unique needs.”"})}
              </p>
              <div className="details">
                <span>{t('reviews.2.author', {fallback: "David Renshaw"})}</span>
                <span>{t('reviews.2.position', {fallback: "HR Director at Pinnacle Systems"})}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatClientsSay;
