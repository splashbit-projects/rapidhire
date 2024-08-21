"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Image from "next/image";
import ButtonArrow from "@/icons/ButtonArrow";
import Link from "next/link";

const WhyHero = () => {
  return (
    <section className="why-hero">
      <div className="_container">
        <div className="why-hero__body">
          <div className="left">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Why Choose Rapid HR Connect?
            </motion.h1>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="button-wrap"
            >
              <Link className="main-button" href="#">
                <span>Contact us today</span>
                <ButtonArrow />
              </Link>
            </motion.div>
          </div>
          <div className="right">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Discover the advantages of partnering with a dedicated HR
              consultancy that prioritises your business's success and employee
              well-being.
            </motion.p>
          </div>
        </div>
        <Image
          src="/images/why/whyHero.png"
          width={1110}
          height={400}
        />
      </div>
    </section>
  );
};

export default WhyHero;
