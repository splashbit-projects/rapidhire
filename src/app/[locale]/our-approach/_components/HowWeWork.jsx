"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Dots from "@/icons/Dots";

const HowWeWork = () => {
  return (
    <section className="how-work">
      <div className="_container">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Dots />
          <h2>How We Work</h2>
          <p>
            Our systematic and thorough approach ensures that every step of our
            process is designed <br />
            to deliver maximum value to your business. Here's how we work:
          </p>
        </motion.div>
        <div className="how-work__body">
          <motion.div
            className="row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="left">
              <span>01</span>
              <p>
                Comprehensive <br />
                Assessment
              </p>
            </div>
            <img src="/images/approach/divider.svg" />
            <div className="right">
              Our process begins with a detailed evaluation of your current HR
              setup. We dive deep into your existing practices, policies, and
              procedures to identify potential risks, gaps, and areas for
              improvement. This assessment helps us understand your business
              environment and specific HR needs, laying the foundation for a
              tailored approach that addresses your unique challenges.
            </div>
          </motion.div>
          <motion.div
            className="row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="left">
              <span>02</span>
              <p>
                Customised <br />
                Solutions
              </p>
            </div>
            <img src="/images/approach/divider.svg" />
            <div className="right">
              Once we thoroughly understand your HR landscape, we develop
              strategies specifically designed to meet your business objectives.
              Our solutions are not off-the-shelf; they are crafted to address
              your challenges, improve employee engagement, enhance compliance,
              or optimise talent acquisition processes. We ensure that each
              strategy aligns with your company's goals and culture, providing
              you with HR solutions that are both effective and relevant.
            </div>
          </motion.div>
          <motion.div
            className="row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="left">
              <span>03</span>
              <p>
                Implementation <br />
                Support
              </p>
            </div>
            <img src="/images/approach/divider.svg" />
            <div className="right">
              Developing a strategy is only the beginning. We stand by your side
              through the implementation phase, offering hands-on support to
              ensure a smooth transition. This includes comprehensive training
              for your team, clear guidance on new processes, and tools to help
              manage the change effectively. We aim to integrate new HR
              practices seamlessly into your business operations, minimising
              disruptions and maximising benefits.
            </div>
          </motion.div>
          <motion.div
            className="row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="left">
              <span>04</span>
              <p>
                Ongoing Monitoring <br />
                and Adjustment
              </p>
            </div>
            <img src="/images/approach/divider.svg" />
            <div className="right">
              HR is not static, nor are our solutions. After implementation, we
              continue to monitor the effectiveness of the new processes,
              gathering feedback and analysing performance data. If adjustments
              are needed, we proactively make the necessary changes to ensure
              that your HR strategies continue to meet your evolving needs. This
              ongoing support ensures that your HR functions align with your
              business goals, driving continuous improvement and long-term
              success.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
