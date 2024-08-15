"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";

const BookConsultation = () => {
  return (
    <section className="book-consultation">
      <div className="_container">
        <div className="book-consultation__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>Ready to Improve Your HR?</h2>
            <p>
              Schedule a free consultation to discuss your HR <br />
              needs and discover how our services can help <br />
              your business succeed.
            </p>
            <Link href="#" className="main-button">
              <span>Book consultation</span>
              <ButtonArrow />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookConsultation;
