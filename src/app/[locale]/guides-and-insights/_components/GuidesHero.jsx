"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Image from "next/image";
import { useTranslations } from "next-intl";

const GuidesHero = () => {
  const t = useTranslations("guidesANdInsights.hero");

  return (
    <section className="guides-hero">
      <div className="_container">
        <div className="guides-hero__body">
          <div className="left">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("title", {fallback: "Guides and Insights"})}
            </motion.h1>
          </div>
          <div className="right">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("description", {fallback: "Welcome to our Guides and Insights page, your go-to resource for expert advice, industry trends, and actionable HR strategies. If you're looking to improve employee engagement, streamline your recruitment process, or stay compliant with the latest regulations, our in-depth articles provide valuable insights to help you navigate the complex world of HR. Explore our guides to learn more about best practices and innovative solutions that can drive your business forward."})}
            </motion.p>
          </div>
        </div>
        <Image src="/images/guides/guidesHero.png" width={1110} height={400} />
      </div>
    </section>
  );
};

export default GuidesHero;
