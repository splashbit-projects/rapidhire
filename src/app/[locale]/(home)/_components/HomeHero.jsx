"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";
import HomeHeroIcon from "@/icons/HomeHeroIcon";
import Image from "next/image";
import RequestButton from "@/global_components/RequestButton";
import { useTranslations } from "next-intl";

const HomeHero = () => {
  const t = useTranslations("home.hero");

  return (
    <section className="home-hero">
      <div className="_container">
        <div className="home-hero__body">
          <div className="left">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("title.0", {fallback: "Building Workplaces"})} <br />
              <span>{t("title.1", {fallback: "Your Team Loves"})}</span>
            </motion.h1>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="button-wrap"
            >
              <RequestButton />
            </motion.div>
          </div>
          <div className="right">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span>
                {t("consultancy", {fallback: "Consultancy"})} <span>/</span>
              </span>{" "}
              <span>
                {t("management", {fallback: "Management"})} <span>/</span>
              </span>{" "}
              <span>
                {t("optimisation", {fallback: "Optimisation"})} <span>/</span>
              </span>{" "}
              {t("development", {fallback: "Development"})}
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <HomeHeroIcon />
            </motion.div>
          </div>
        </div>
        <Image
          src="/images/home/homeHero.png"
          quality={100}
          width={1110}
          height={400}
        />
      </div>
    </section>
  );
};

export default HomeHero;
