"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import ButtonArrow from "@/icons/ButtonArrow";
import Dots from "@/icons/Dots";

const ServicesLoop = ({ services }) => {
  return (
    <section className="services-loop">
      <div className="_container">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Dots />
          <h2>Services We Offer</h2>
        </motion.div>
        <div className="services-loop__body">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <button className="main-button">
                <span>Order</span>
                <ButtonArrow />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesLoop;
