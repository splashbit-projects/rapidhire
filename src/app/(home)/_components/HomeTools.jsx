"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/utils/animations";
import Dots from "@/icons/Dots";

const HomeTools = () => {
  return (
    <section className="home-tools">
      <div className="_container">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Dots />
          <h2>Powered by Industry-Leading HR Tools</h2>
        </motion.div>
        <div className="home-tools__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3>PayScale</h3>
            <div>
              <img src="/images/home/logos/logo1.svg" />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3>Glint</h3>
            <div>
              <img src="/images/home/logos/logo2.svg" />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3>Greenhouse</h3>
            <div>
              <img src="/images/home/logos/logo3.svg" />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3>Lattice</h3>
            <div>
              <img src="/images/home/logos/logo4.svg" />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3>ComplyRight</h3>
            <div>
              <img src="/images/home/logos/logo5.svg" />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3>SAP SuccessFactors</h3>
            <div>
              <img src="/images/home/logos/logo6.svg" />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3>Cornerstone OnDemand</h3>
            <div>
              <img src="/images/home/logos/logo7.svg" />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3>Workday Analytics</h3>
            <div>
              <img src="/images/home/logos/logo8.svg" />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3>BambooHR</h3>
            <div>
              <img src="/images/home/logos/logo9.svg" />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3>ADP Workforce Now</h3>
            <div>
              <img src="/images/home/logos/logo10.svg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeTools;
