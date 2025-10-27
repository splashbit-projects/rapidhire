"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Dots from "@/icons/Dots";

const OurProposition = () => {
  return (
    <section className="our-proposition">
      <div className="_container">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Dots />
          <h2>Our Unique Value Proposition</h2>
          <p>
            We stand out in the crowded HR consulting market due to our
            unwavering commitment to delivering <br />
            personalised, results-driven solutions that truly resonate with our
            clients. Here’s what makes us unique:
          </p>
        </motion.div>
        <div className="our-proposition__body">
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
                Tailored Solutions <br />
                for Every Client
              </p>
            </div>
            <img src="/images/approach/divider.svg" />
            <div className="right">
              We don’t believe in one-size-fits-all solutions. Every
              organisation we work with is unique, and we take the time to
              understand your specific challenges, culture, and goals. This deep
              understanding allows us to craft HR strategies that are not just
              effective but also deeply aligned with your business’s vision and
              long-term objectives.
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
                Holistic <br />
                HR Services
              </p>
            </div>
            <img src="/images/approach/divider.svg" />
            <div className="right">
              Our comprehensive range of services ensures we can address all
              aspects of your HR needs, from recruitment and training to
              compliance and performance management. Whether you need support
              for a specific project or ongoing HR management, we have the
              expertise to deliver exceptional results.
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
                Client-Centric <br />
                Approach
              </p>
            </div>
            <img src="/images/approach/divider.svg" />
            <div className="right">
              We view our clients as partners. This means we’re not just service
              providers but an extension of your team. We work closely with you,
              ensuring transparent communication and full collaboration at every
              stage. Your success is our success, and we are fully invested in
              helping you achieve it.
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
                Agility and <br />
                Innovation
              </p>
            </div>
            <img src="/images/approach/divider.svg" />
            <div className="right">
              In the fast-paced world of HR, staying ahead of the curve is
              essential. We pride ourselves on quickly adapting to new trends,
              technologies, and regulations, ensuring that our clients always
              receive cutting-edge solutions that drive their business forward.
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
              <span>05</span>
              <p>
                Proven Expertise <br />
                Across Industries
              </p>
            </div>
            <img src="/images/approach/divider.svg" />
            <div className="right">
              Our team’s combined experience spans various industries, giving us
              a unique perspective and the ability to provide insights and
              strategies relevant to your sector. This industry-specific
              knowledge helps us anticipate challenges and identify
              opportunities others might miss.
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
              <span>06</span>
              <p>
                Sustainable <br />
                Growth Focus
              </p>
            </div>
            <img src="/images/approach/divider.svg" />
            <div className="right">
              Our strategies are not just about solving immediate problems but
              about setting your business up for long-term success. We
              prioritise sustainable growth, ensuring that the solutions we
              implement today will continue to provide value well into the
              future.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurProposition;
