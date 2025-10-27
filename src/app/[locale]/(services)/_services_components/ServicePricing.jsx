"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";
import Dots from "@/icons/Dots";

const ServicePricing = ({ text }) => {
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
          <p dangerouslySetInnerHTML={{ __html: text }} />
          <Link
            href={"/pricelist/Rapid_HR_Connect_price_list.pdf"}
            className="main-button"
            target="_blank"
          >
            <span>Download price list</span>
            <ButtonArrow />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePricing;
