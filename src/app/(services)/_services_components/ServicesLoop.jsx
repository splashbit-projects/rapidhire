"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import ButtonArrow from "@/icons/ButtonArrow";
import Dots from "@/icons/Dots";
import OrderButton from "@/global_components/OrderButton";
import OrderPopup from "@/global_components/OrderPopup";

const ServicesLoop = ({ services, category }) => {
  return (
    <>
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
                <OrderButton serviceName={service.title} type={"service"} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <OrderPopup />
    </>
  );
};

export default ServicesLoop;
