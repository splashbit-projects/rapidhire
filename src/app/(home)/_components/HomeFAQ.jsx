"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import ButtonArrow from "@/icons/ButtonArrow";
import Link from "next/link";
import Dots from "@/icons/Dots";
import Accordion from "./Accordion";

const HomeFAQ = () => {
  return (
    <section className="home-faq">
      <div className="_container">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Dots />
          <h2>Frequently Asked Questions</h2>
        </motion.div>
        <div className="home-faq__body">
          <Accordion
            title="How can I improve employee engagement in my company?"
            text="Employee engagement is crucial for productivity and retention. At Rapidhire LTD HR HK, our Training & Development services offer tailored workshops and coaching to boost employee motivation and engagement. We help create a positive work environment where your team thrives."
          />
          <Accordion
            title="We're experiencing high employee turnover. What can we do to address this?"
            text="High turnover can be costly and disruptive. Our Retained HR Support provides you with ongoing HR expertise to develop effective retention strategies, improve workplace culture, and address issues that contribute to employee dissatisfaction."
          />
          <Accordion
            title="Our recruitment process isn't yielding the results we need. What should we do?"
            text="If you're struggling with recruitment, our Recruitment Assistance service can help. Partnering with our sister company, The Recruitment Consultants, we help find and attract top talent that fits your business needs."
          />
          <Accordion
            title="We need to update our HR policies but don't know where to start. Can you help?"
            text="Updating HR policies can be complex. Our HR Documentation service offers comprehensive support for creating and refining policies, handbooks, and employment contracts, ensuring they meet legal requirements and align with your company's needs."
          />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="button-wrap"
        >
          <Link href="#" className="main-button">
            <span>More FAQs</span>
            <ButtonArrow />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeFAQ;
