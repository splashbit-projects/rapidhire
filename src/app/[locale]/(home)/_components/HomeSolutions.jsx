"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/utils/animations";
import Dots from "@/icons/Dots";
import Image from "next/image";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";
import { useTranslations } from "next-intl";

const HomeSolutions = () => {
  const t = useTranslations("home.solutions");

  return (
    <section className="home-solutions">
      <div className="_container">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Dots />
          <h2>
            {t("title.0", {fallback: "People problems can slow your business."})}
            <br />
            {t('title.1', {fallback: "Whatever HR issue you face"})}, <span>{t('title.2', {fallback: "Rapid HR Connect has the solution."})}</span>
          </h2>
        </motion.div>
        <div className="home-solutions__body">
          <div>
            <motion.div
              className="solution"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <Image
                width={24}
                height={24}
                src={"/images/home/solution1.svg"}
              />
              <h3>{t("items.0.title", {fallback: "Retained HR Support"})}</h3>
              <div>
                <p>{t("items.0.text", {fallback: "Access dedicated HR expertise that functions like your own department, tailored to your business needs at a fraction of the cost."})}</p>
                <Link href="/retained-hr-support" className="main-button">
                  <span>{t("learnMore", {fallback: "Learn more"})}</span>
                  <ButtonArrow />
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="solution"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <Image
                width={24}
                height={24}
                src={"/images/home/solution2.svg"}
              />
              <h3>{t("items.1.title", {fallback: "HR Project Management"})}</h3>
              <div>
                <p>{t("items.1.text", {fallback: "Benefit from our comprehensive project management to efficiently handle significant HR initiatives and ensure successful outcomes."})}</p>
                <Link href="/hr-project-management" className="main-button">
                  <span>{t("learnMore", {fallback: "Learn more"})}</span>
                  <ButtonArrow />
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="solution"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <Image
                width={24}
                height={24}
                src={"/images/home/solution3.svg"}
              />
              <h3>{t("items.2.title", {fallback: "Flexible HR Consultancy"})}</h3>
              <div>
                <p>{t("items.2.text", {fallback: "Gain on-demand HR insights and solutions for immediate and specific challenges without long-term commitments."})}</p>
                <Link href="/flexible-hr-consultancy" className="main-button">
                  <span>{t("learnMore", {fallback: "Learn more"})}</span>
                  <ButtonArrow />
                </Link>
              </div>
            </motion.div>
          </div>
          <motion.div
              className="solution"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
            <Image src={"/images/home/solutions.png"} fill />
          </motion.div>
          <div>
            <motion.div
              className="solution"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <Image
                width={24}
                height={24}
                src={"/images/home/solution4.svg"}
              />
              <h3>{t("items.3.title", {fallback: "Recruitment Assistance"})}</h3>
              <div>
                <p>{t("items.3.text", {fallback: "Leverage our partnership with expert recruiters to identify and secure the best talent to drive your business forward."})}</p>
                <Link href="/recruitment-assistance" className="main-button">
                  <span>{t("learnMore", {fallback: "Learn more"})}</span>
                  <ButtonArrow />
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="solution"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <Image
                width={24}
                height={24}
                src={"/images/home/solution5.svg"}
              />
              <h3>{t("items.4.title", {fallback: "Training & Development"})}</h3>
              <div>
                <p>{t("items.4.text", {fallback: "Enhance your team's skills and motivation with targeted workshops and one-on-one coaching designed for growth."})}</p>
                <Link href="/training-development" className="main-button">
                  <span>{t("learnMore", {fallback: "Learn more"})}</span>
                  <ButtonArrow />
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="solution"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <Image
                width={24}
                height={24}
                src={"/images/home/solution6.svg"}
              />
              <h3>{t("items.5.title", {fallback: "HR Documentation"})}</h3>
              <div>
                <p>{t("items.5.text", {fallback: "Protect your organisation with clear, precise policies and documentation that support compliance and operational consistency."})}</p>
                <Link href="/hr-documentation" className="main-button">
                  <span>{t("learnMore", {fallback: "Learn more"})}</span>
                  <ButtonArrow />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSolutions;
