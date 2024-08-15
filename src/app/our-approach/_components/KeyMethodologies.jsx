"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Dots from "@/icons/Dots";

const KeyMethodologies = () => {
  return (
    <section className="key-methodologies">
      <div className="_container">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Dots />
          <h2>Key Methodologies</h2>
        </motion.div>
        <div className="key-methodologies__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span>Data-Driven Decisions</span>
            <h3>Insightful, evidence-based strategies.</h3>
            <p>
              In today's business world, data-based decisions are the most
              reliable. We leverage data analytics to inform every HR strategy
              we develop. By analysing key metrics such as employee performance,
              turnover rates, and engagement levels, we ensure that our
              solutions are evidence-based and tailored to produce measurable
              results. This approach allows us to address challenges precisely,
              leading to more effective and impactful HR outcomes.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span>Technology Integration</span>
            <h3>Streamlined, tech-powered efficiency.</h3>
            <p>
              We incorporate advanced HR tech tools into our strategies to
              streamline HR processes and boost efficiency. Whether using
              automation to reduce administrative burdens, employing analytics
              platforms to gain deeper insights, or integrating HR management
              systems to enhance overall operations, our use of technology is
              designed to make your HR functions more efficient and data-driven.
              This integration allows you to stay ahead of the curve, ensuring
              your HR operations are as advanced and effective as possible.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span>Risk Management</span>
            <h3>Proactive, protective HR solutions.</h3>
            <p>
              Effective HR management involves more than just addressing current
              needs — anticipating and mitigating risks before they become
              significant. We proactively manage HR risks, including ensuring
              compliance with legal requirements, addressing potential employee
              relations issues, and safeguarding your organisation against
              costly litigation. Our risk management strategies are designed to
              protect your business while fostering a positive and compliant
              workplace environment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KeyMethodologies;
