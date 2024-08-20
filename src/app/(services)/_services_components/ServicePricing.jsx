"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";
import Dots from "@/icons/Dots";

const ServicePricing = () => {
  return (
    <section className="pricing">
      <div className="_container">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Dots />
          <h2>Need Detailed Pricing?</h2>
          <p>
            Interested in learning more about our Retained HR Support service?
            <br />
            Download our detailed pricing guide to see how we can provide
            tailored HR solutions that fit your budget.
          </p>
          <Link href={"#"} className="main-button">
            <span>Download price list</span>
            <ButtonArrow />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePricing;
