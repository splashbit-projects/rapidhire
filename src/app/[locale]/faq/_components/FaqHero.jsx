"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Image from "next/image";

const FaqHero = () => {
  return (
    <section className="faq-hero">
      <div className="_container">
        <div className="faq-hero__body">
          <div className="left">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Frequently Asked <span>Questions</span>
            </motion.h1>
          </div>
          <div className="right">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              At Rapid HR Connect, we understand that navigating the
              complexities of HR can raise many questions. That's why we've
              compiled a list of frequently asked questions to help you better
              understand how our services can support your business. Whether
              you're dealing with employee engagement, recruitment challenges,
              compliance concerns, or the need for specialised HR strategies,
              our FAQ page provides clear, concise answers to the most common HR
              issues.
            </motion.p>
          </div>
        </div>
        <Image
          src="/images/faq/faqHero.png"
          width={1110}
          height={400}
        />
      </div>
    </section>
  );
};

export default FaqHero;
