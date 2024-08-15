"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Image from "next/image";

const ApproachHero = () => {
  return (
    <section className="approach-hero">
      <div className="_container">
        <div className="approach-hero__body">
          <div className="left">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Strategic Approach <br />
              <span>to HR Management</span>
            </motion.h1>
          </div>
          <div className="right">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              At Rapid HR Connect, we believe that a one-size-fits-all approach
              to HR simply doesn't work in today's dynamic business environment.
              Every organisation is unique, with its own set of challenges and
              opportunities. That's why we prioritise a tailored approach to HR
              management, meticulously crafting strategies that align with your
              business needs and goals. Our method not only addresses immediate
              HR concerns but also drives sustainable growth and operational
              efficiency. By partnering with us, you access customised solutions
              that empower your workforce, mitigate risks, and position your
              company for long-term success.
            </motion.p>
          </div>
        </div>
        <Image src="/images/approach/approachHero.png" width={1110} height={400} />
      </div>
    </section>
  );
};

export default ApproachHero;
