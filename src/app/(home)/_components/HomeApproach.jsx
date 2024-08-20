"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";
import Dots from "@/icons/Dots";

const HomeApproach = () => {
  return (
    <section className="home-approach">
      <div className="_container">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Dots />
          <h2>Our Approach to HR Risks Management</h2>
          <p>
            At Rapid HR Connect, our proven approach to HR risk management has achieved
            a success rate of <span>99.98%</span>.<br />
            We have refined our strategy through extensive experience to
            effectively address and manage HR challenges.
          </p>
        </motion.div>
        <div className="home-approach__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="row"
          >
            <div>
              <img src="/images/home/arrow.svg" />
              <h3>
                Comprehensive
                <br />
                Assessment
              </h3>
              <p>
                We start by thoroughly evaluating your current HR practices and
                identifying potential risks.
              </p>
            </div>
            <div>
              <img src="/images/home/arrow.svg" />
              <h3>
                Customised
                <br />
                Solutions
              </h3>
              <p>
                We tailor our strategies to your specific needs and develop and
                implement solutions to address identified issues.
              </p>
            </div>
            <div>
              <img src="/images/home/arrow.svg" />
              <h3>
                Compliance
                <br />
                Assurance
              </h3>
              <p>
                We ensure that all HR practices meet legal requirements and
                industry standards to prevent costly violations.
              </p>
            </div>
            <div>
              <img src="/images/home/arrow.svg" />
              <h3>
                Ongoing
                <br />
                Support
              </h3>
              <p>
                Our team provides continuous assistance and updates to keep your
                HR processes effective and current.
              </p>
            </div>
            <div>
              <img src="/images/home/arrow.svg" />
              <h3>
                Performance
                <br />
                Monitoring
              </h3>
              <p>
                We regularly review and refine strategies to improve workforce
                effectiveness and mitigate emerging risks.
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="button-wrap"
        >
          <Link href="/our-approach" className="main-button">
            <span>Explore our approach</span>
            <ButtonArrow />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeApproach;
