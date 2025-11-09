"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Dots from "@/icons/Dots";
import { useTranslations } from "next-intl";

const ProvenTrack = () => {
  const t = useTranslations("whyChooseUs.provenTrack");

  return (
    <section className="proven-track">
      <div className="_container">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Dots />
          <h2>{t("title", {fallback: "A Proven Track Record of Success"})}</h2>
          <p>
            {t("text.0", {fallback: "Our HR experts combine decades of experience, successfully managing HR functions"})} <br />
            {t("text.1", {fallback: "across various industries and organisational sizes. This wealth of knowledge enables"})} <br />
            {t("text.2", {fallback: "us to deliver impactful, innovative HR solutions tailored to your business needs."})} <br />
          </p>
        </motion.div>
        <div className="proven-track__body">
          <div>
            <motion.div
              className="info"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img src="/images/why/icon1.svg" />
              <h3>{t("items.0.title", {fallback: "Success Metrics"})}</h3>
              <p>
                {t("items.0.text", {fallback: "Our team has served over 50+ businesses across various industries, driving significant improvements in employee satisfaction, retention, and overall HR efficiency."})}
              </p>
            </motion.div>
          </div>
          <div>
            <motion.div
              className="info"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img src="/images/why/icon2.svg" />
              <h3>{t("items.1.title", {fallback: "Client Retention Rate"})}</h3>
              <p>
                {t("items.1.text", {fallback: "Our commitment to building long-term partnerships is reflected in our client retention rate, with over 80% of our clients choosing to continue working with us for ongoing HR support."})}
              </p>
            </motion.div>
          </div>
          <div>
            <motion.div
              className="info"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img src="/images/why/icon3.svg" />
              <h3>{t("items.2.title", {fallback: "Years of Experience"})}</h3>
              <p>
                {t("items.2.text", {fallback: "With over 100 years of combined HR experience, our team brings deep expertise and proven strategies to every client engagement, ensuring you benefit from tried-and-true solutions and innovative approaches."})}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenTrack;
