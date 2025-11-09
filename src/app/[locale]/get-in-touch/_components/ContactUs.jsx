"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Dots from "@/icons/Dots";
import Link from "next/link";
import RequestForm from "@/global_components/RequestForm";

const ContactUs = () => {
  const t = useTranslations("contact.us");

  return (
    <section className="contact-us">
      <div className="_container">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Dots />
          <h2>{t("title", {fallback: "Contact Us"})}</h2>
          <p>
            {t("description", {fallback: "Have a question or need assistance? Fill out the form below, and our team will respond promptly."})}
          </p>
        </motion.div>
        <div className="form-wrap">
          <RequestForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
