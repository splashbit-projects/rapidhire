"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/utils/animations";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";

const HomeBuzzwords = () => {
  return (
    <section className="home-buzzwords">
      <div className="_container">
        <div className="home-buzzwords__body">
          <div className="left">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              No More HR Buzzwords
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              You're busy running your business — don't waste time with vague
              promises and jargon. At Rapidhire LTD HR HK, we provide actionable
              HR support that's both straightforward and effective.
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              From everyday advice to comprehensive HR project management, we
              focus on delivering real results. We help you recruit, develop,
              and manage a high-performing team that drives your business
              forward — no fluff, just results.
            </motion.p>
            <div className="divider"></div>
            <motion.h4
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Our Commitment
            </motion.h4>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              We guarantee you'll receive practical HR support tailored to your
              needs. Here's what you can count on:
            </motion.p>
            <div className="row">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h3>01</h3>
                <h4>Real Solutions</h4>
                <p>Practical HR guidance that makes a difference.</p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h3>02</h3>
                <h4>On-Time</h4>
                <p>Reliable service when you need it.</p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h3>03</h3>
                <h4>Satisfaction Guaranteed</h4>
                <p>If we fall short, we offer a refund.</p>
              </motion.div>
            </div>
          </div>
          <div className="right">
            <Link href="#" className="main-button">
              <span>Why us?</span>
              <ButtonArrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBuzzwords;
