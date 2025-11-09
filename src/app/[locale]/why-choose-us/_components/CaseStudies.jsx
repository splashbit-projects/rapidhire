"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import OrderButton from "@/global_components/OrderButton";
import { useTranslations } from "next-intl";

const CaseStudies = () => {
  const t = useTranslations("whyChooseUs.caseStudies");

  return (
    <section className="case-studies">
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t("title", {fallback: "Case Studies"})}
        </motion.h2>
        <div className="case-studies__body">
          <motion.div
            className="service"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div>
              <h3>{t("items.0.title", {fallback: "Enhancing Employee Engagement for a Tech Startup"})}</h3>
              <h4>{t("items.0.subtitle", {fallback: "Challenge"})}</h4>
              <p>
                {t("items.0.text", {fallback: "A rapidly growing tech startup struggled with low employee engagement and high turnover rates, threatening its growth trajectory."})}
              </p>
              <h4>{t("solution", {fallback: "Solution"})}</h4>
              <p>
                {t("items.0.solution", {fallback: "Rapid HR Connect conducted a comprehensive assessment and implemented a tailored employee engagement program, including regular feedback loops, recognition initiatives, and leadership development."})}
              </p>
              <h4>{t("outcome", {fallback: "Outcome"})}</h4>
              <p>
                {t("items.0.outcome", {fallback: "Employee engagement scores increased by 35% within six months, and turnover rates decreased by 20%, positioning the company for sustained growth."})}
              </p>
            </div>
          </motion.div>
          <motion.div
            className="service"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div>
              <h3>{t("items.1.title", {fallback: "Streamlining Recruitment for a Manufacturing Firm"})}</h3>
              <h4>{t("items.1.subtitle", {fallback: "Challenge"})}</h4>
              <p>
                {t("items.1.text", {fallback: "A mid-sized manufacturing firm faced challenges recruiting skilled labour, leading to delayed projects and operational inefficiencies."})}
              </p>
              <h4>{t("solution", {fallback: "Solution"})}</h4>
              <p>
                {t("items.1.solution", {fallback: "We revamped their recruitment strategy, including crafting compelling job descriptions, optimising their recruitment marketing efforts, and implementing a robust screening process."})}
              </p>
              <h4>{t("outcome", {fallback: "Outcome"})}</h4>
              <p>
                {t("items.1.outcome", {fallback: "The company reduced its time-to-hire by 40% and successfully filled all critical positions within three months, improving project timelines and productivity."})}
              </p>
            </div>
          </motion.div>
          <motion.div
            className="service"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div>
              <h3>
                {t("items.2.title", {fallback: "Implementing Compliance Solutions for a Healthcare Provider"})}
              </h3>
              <h4>{t("items.2.subtitle", {fallback: "Challenge"})}</h4>
              <p>
                {t("items.2.text", {fallback: "A healthcare provider needed to ensure strict compliance with rapidly changing labour laws and industry regulations, risking significant penalties for non-compliance."})}
              </p>
              <h4>{t("solution", {fallback: "Solution"})}</h4>
              <p>
                {t("items.2.solution", {fallback: "Rapid HR Connect conducted a thorough compliance audit and implemented updated HR policies and training programs to address the gaps."})}
              </p>
              <h4>{t("outcome", {fallback: "Outcome"})}</h4>
              <p>
                {t("items.2.outcome", {fallback: "The provider achieved full compliance, avoided potential fines, and created a safer, more secure working environment for its staff."})}
              </p>
            </div>
          </motion.div>
          <motion.div
            className="service"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div>
              <h3>{t("items.3.title", {fallback: "Supporting Organisational Change for a Retail Chain"})}</h3>
              <h4>{t("items.3.subtitle", {fallback: "Challenge"})}</h4>
              <p>
                {t("items.3.text", {fallback: "A national retail chain undergoing a major restructuring needed to manage the organisational change without disrupting operations or impacting employee morale."})}
              </p>
              <h4>{t("solution", {fallback: "Solution"})}</h4>
              <p>
                {t("items.3.solution", {fallback: "We provided change management consulting, including communication strategies and support programs to help employees adapt."})}
              </p>
              <h4>{t("outcome", {fallback: "Outcome"})}</h4>
              <p>
                {t("items.3.outcome", {fallback: "The restructuring was completed on schedule with minimal disruption, and employee satisfaction remained high throughout the transition."})}
              </p>
            </div>
          </motion.div>
          <motion.div
            className="service"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div>
              <h3>
                {t("items.4.title", {fallback: "Driving Performance Improvement for a Financial Services Firm"})}
              </h3>
              <h4>{t("items.4.subtitle", {fallback: "Challenge"})}</h4>
              <p>
                {t("items.4.text", {fallback: "A financial services firm was experiencing inconsistent employee performance, affecting client satisfaction and revenue growth."})}
              </p>
              <h4>{t("solution", {fallback: "Solution"})}</h4>
              <p>
                {t("items.4.solution", {fallback: "Rapid HR Connect implemented a performance management system that included clear KPIs, regular reviews, and targeted training programs."})}
              </p>
              <h4>{t("outcome", {fallback: "Outcome"})}</h4>
              <p>
                {t("items.4.outcome", {fallback: "Employee performance improved by 30%, leading to higher client satisfaction and a 15% increase in revenue."})}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
