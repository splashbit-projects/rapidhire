"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Image from "next/image";
import { useTranslations } from "next-intl";

const ContactHero = () => {
  const t = useTranslations("contact.hero");

  return (
    <section className="contact-hero">
      <div className="_container">
        <div className="contact-hero__body">
          <div className="left">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("title", {fallback: "Get in Touch"})}
            </motion.h1>
          </div>
          <div className="right">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("description", {fallback: "We're here to help you with all your HR needs. Whether you have a question about our services, need assistance with an HR issue, or want to learn more about how we can support your business, our team is ready to assist you. Reach out to us through the contact details below or fill out the form, and we'll get back to you as soon as possible."})}
            </motion.p>
          </div>
        </div>
        <Image src="/images/contact/contactHero.png" width={1110} height={400} />
      </div>
    </section>
  );
};

export default ContactHero;
