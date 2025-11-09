"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/utils/animations";
import Dots from "@/icons/Dots";
import { useTranslations } from "next-intl";

const HomeTools = () => {
  const t = useTranslations("home.tools");

  return (
    <section className="home-tools">
      <div className="_container">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Dots />
          <h2>{t("title", {fallback: "Powered by Industry-Leading HR Tools"})}</h2>
        </motion.div>
        <div className="home-tools__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3>{t("items.0", {fallback: "PayScale"})}</h3>
            <div>
              <img src="/images/home/logos/logo1.svg" />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3>{t("items.1", {fallback: "Glint"})}</h3>
            <div>
              <img src="/images/home/logos/logo2.svg" />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3>{t("items.2", {fallback: "Greenhouse"})}</h3>
            <div>
              <img src="/images/home/logos/logo3.svg" />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3>{t("items.3", {fallback: "Lattice"})}</h3>
            <div>
              <img src="/images/home/logos/logo4.svg" />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3>{t("items.4", {fallback: "ComplyRight"})}</h3>
            <div>
              <img src="/images/home/logos/logo5.svg" />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3>{t("items.5", {fallback: "SAP SuccessFactors"})}</h3>
            <div>
              <img src="/images/home/logos/logo6.svg" />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3>{t("items.6", {fallback: "Cornerstone OnDemand"})}</h3>
            <div>
              <img src="/images/home/logos/logo7.svg" />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3>{t("items.7", {fallback: "Workday Analytics"})}</h3>
            <div>
              <img src="/images/home/logos/logo8.svg" />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3>{t("items.8", {fallback: "BambooHR"})}</h3>
            <div>
              <img src="/images/home/logos/logo9.svg" />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3>{t("items.9", {fallback: "ADP Workforce Now"})}</h3>
            <div>
              <img src="/images/home/logos/logo10.svg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeTools;
