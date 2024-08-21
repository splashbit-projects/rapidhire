"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Dots from "@/icons/Dots";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <section className="contact-info">
      <div className="_container">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Dots />
          <h2>Contact Information</h2>
        </motion.div>
        <div className="contact-info__top">
          <div>
            <div>
              <img src="/images/home/arrow.svg" />
              <h3>Registered Address</h3>
              <p>
                Rooms 1703-1704, 17/F Tung Chiu Comm Ctr, 193 Lockhart Rd, Wan
                Chai, Hong Kong
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.9865063466395!2d114.17189917511763!3d22.27850097970229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404005b91e96cbb%3A0x2f4771b67527c85e!2sTung%20Chiu%20Commercial%20Centre!5e0!3m2!1sen!2sua!4v1724239877061!5m2!1sen!2sua"
              width="540"
              height="235"
              style={{ border: "none" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div>
            <div>
              <img src="/images/home/arrow.svg" />
              <h3>Office Address</h3>
              <p>-</p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.9865063466395!2d114.17189917511763!3d22.27850097970229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404005b91e96cbb%3A0x2f4771b67527c85e!2sTung%20Chiu%20Commercial%20Centre!5e0!3m2!1sen!2sua!4v1724239877061!5m2!1sen!2sua"
              width="540"
              height="235"
              style={{ border: "none" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="contact-info__bottom">
          <Link href="tel:+00000000000">
            <img src="/images/contact/phone.svg" />
            <span>+00000000000</span>
          </Link>
          <Link href="mailto:info@rapidhrconnect.com">
            <img src="/images/contact/mail.svg" />
            <span>info@rapidhrconnect.com</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
