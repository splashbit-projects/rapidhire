"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/utils/animations";
import Image from "next/image";

const WhatClientsSay = () => {
  return (
    <section className="what-clients-say">
      <div className="_container">
        <div className="what-clients-say__body">
          <div className="left">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <h2>
                What Our <br />
                <span>Clients Say</span>
              </h2>
              <p>
                We pride ourselves on our positive impact on our clients, and
                their feedback speaks volumes about the quality of our services.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <Image
                src={"/images/why/WhatClientsSay.png"}
                width={540}
                height={215}
              />
            </motion.div>
          </div>
          <div className="right">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p>
                “Rapid HR Connect quickly became an integral part of our team,
                offering invaluable guidance that helped us navigate complex HR
                challenges. Their expertise is unmatched!”
              </p>
              <div className="details">
                <span>Sophia Chen</span>
                <span>COO of Zenith Horizons</span>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p>
                “Thanks to Rapid HR Connect, our recruitment process has been
                streamlined, allowing us to attract top talent easily. Their
                proactive approach made all the difference.”
              </p>
              <div className="details">
                <span>Michael Harper</span>
                <span>HR Director at EchoWave Innovations</span>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p>
                “The training and development programs designed by Rapid HR
                Connect have significantly boosted our team’s productivity.
                Their tailored solutions truly address our unique needs.”
              </p>
              <div className="details">
                <span>David Renshaw</span>
                <span>HR Director at Pinnacle Systems</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatClientsSay;
