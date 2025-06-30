"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Dots from "@/icons/Dots";
import Link from "next/link";

const ContactFollow = () => {
  return (
    <section className="contact-follow">
      <div className="_container">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Dots />
          <h2>Follow Us</h2>
          <p>
            Stay connected with us on social media for the latest updates,
            insights, and HR tips:
          </p>
        </motion.div>
        <div className="soc">
          <Link
            href="https://www.instagram.com/rapidhrconnectcom"
            target="_blank"
          >
            <img src="/images/Instagram.svg" />
          </Link>
          <Link
            href="https://x.com/rapidhrconnect"
            target="_blank"
          >
            <img src="/images/X.svg" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactFollow;
