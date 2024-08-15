"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/utils/animations";
import Image from "next/image";

const HomeRisks = () => {
  return (
    <section className="home-risks">
      <div className="_container">
        <div className="home-risks__body">
          <div className="left">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <h2>
                The Risks of Going Without <span>Expert HR Support</span>
              </h2>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <Image src={"/images/home/risks.png"} width={540} height={290} />
            </motion.div>
          </div>
          <div className="right">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span>33%</span>
              <p>
                The average cost to replace an employee is up to 33% of their
                annual salary.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span>60%</span>
              <p>
                Businesses facing employment lawsuits do not have adequate HR
                policies in place.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span>40%</span>
              <p>
                Small businesses face compliance issues due to a lack of HR
                expertise, resulting in costly fines
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span>20%</span>
              <p>
                Businesses without HR support face lower employee satisfaction
                and performance.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeRisks;
