"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Dots from "@/icons/Dots";
import { useTranslations } from "next-intl";

const OurPhilosophy = () => {
  const t = useTranslations("ourApproach.ourPhilosophy");

  return (
    <section className="our-philosophy">
      <div className="_container">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Dots />
          <h2>{t("title", {fallback: "Our Philosophy"})}</h2>
        </motion.div>
        <div className="our-philosophy__body">
          <div className="back"></div>
          <div className="clear"></div>
          <div>
            <motion.div
              className="info"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img src="/images/approach/icon1.svg" />
              <h3>{t("items.0.title", {fallback: "Proactive Management"})}</h3>
              <p>
                {t("items.0.text", {fallback: "Staying ahead of potential issues is critical to maintaining smooth operations. Our proactive management approach involves anticipating challenges before they arise, allowing us to implement solutions that prevent disruptions and keep your business on track."})}
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
              <img src="/images/approach/icon2.svg" />
              <h3>{t("items.1.title", {fallback: "Collaboration"})}</h3>
              <p>
                {t("items.1.text", {fallback: "We see ourselves as your partners in success. By working closely with you, we ensure our HR strategies fully integrate with your business objectives. This collaborative approach ensures that our solutions are practical and resonate with your company's culture and vision."})}
              </p>
            </motion.div>
          </div>
          <div className="clear"></div>
          <div className="clear"></div>
          <div>
            <motion.div
              className="info"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img src="/images/approach/icon3.svg" />
              <h3>{t("items.2.title", {fallback: "Customization"})}</h3>
              <p>
                {t("items.2.text", {fallback: "We believe in the power of tailored HR solutions. Every business is unique, so we take the time to understand your specific challenges and goals. Our customised strategies ensure that your HR processes are aligned with your business needs, leading to more effective and impactful outcomes."})}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophy;
