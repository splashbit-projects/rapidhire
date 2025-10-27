"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Dots from "@/icons/Dots";

const ProvenTrack = () => {
  return (
    <section className="proven-track">
      <div className="_container">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Dots />
          <h2>A Proven Track Record of Success</h2>
          <p>
            Our HR experts combine decades of experience, successfully managing
            HR functions <br />
            across various industries and organisational sizes. This wealth of
            knowledge enables <br />
            us to deliver impactful, innovative HR solutions tailored to your
            business needs.
          </p>
        </motion.div>
        <div className="proven-track__body">
          <div>
            <motion.div
              className="info"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img src="/images/why/icon1.svg" />
              <h3>Success Metrics</h3>
              <p>
                Our team has served over 50+ businesses across various
                industries, driving significant improvements in employee
                satisfaction, retention, and overall HR efficiency.
              </p>
            </motion.div>
          </div>
          <div>
            <motion.div
              className="info"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img src="/images/why/icon2.svg" />
              <h3>Client Retention Rate</h3>
              <p>
                Our commitment to building long-term partnerships is reflected
                in our client retention rate, with over 80% of our clients
                choosing to continue working with us for ongoing HR support.
              </p>
            </motion.div>
          </div>
          <div>
            <motion.div
              className="info"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img src="/images/why/icon3.svg" />
              <h3>Years of Experience</h3>
              <p>
                With over 100 years of combined HR experience, our team brings
                deep expertise and proven strategies to every client engagement,
                ensuring you benefit from tried-and-true solutions and
                innovative approaches.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenTrack;
