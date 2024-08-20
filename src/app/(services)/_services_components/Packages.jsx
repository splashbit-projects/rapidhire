"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import OrderButton from "@/global_components/OrderButton";

const Packages = ({ title, packages }) => {
  return (
    <section className="packages">
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {title}
        </motion.h2>
        <div className="packages__body">
          {packages.map((pack, index) => (
            <motion.div
              key={index}
              className="service"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div>
                <h3>
                    <img src="/images/services/disc.svg"/>
                    <span>{pack.title}</span>
                </h3>
                <p>{pack.description}</p>
              </div>
              <div>
                <h4>Included services:</h4>
                <div dangerouslySetInnerHTML={{ __html: pack.included }} />
              </div>

              <OrderButton text={"Order now"} serviceName={pack.title} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
