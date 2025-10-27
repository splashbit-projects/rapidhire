"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Image from "next/image";

const ServiceHero = ({ title, subtitle, info, image }) => {
  return (
    <section className="service-hero">
      <div className="_container">
        <div className="service-hero__body">
          <div className="left">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h1 dangerouslySetInnerHTML={{ __html: title }} />
              <p dangerouslySetInnerHTML={{ __html: subtitle }} />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p dangerouslySetInnerHTML={{ __html: info }} />
            </motion.div>
          </div>
          <motion.div
            className="right"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Image width={650} height={480} src={image} quality={95} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
