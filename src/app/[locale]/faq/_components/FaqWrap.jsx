"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Accordion from "@/app/[locale]/(home)/_components/Accordion";
import Dots from "@/icons/Dots";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";
import { useTranslations } from "next-intl";

const FaqWrap = () => {
  const t = useTranslations("faq.wrap.questions");
  const tc = useTranslations("faq.wrap");

  const hrQuestions = [
    {
      title: t("0.title", {fallback: "How can I improve employee engagement in my company?"}),
      content:
        t("0.text", {fallback: "Employee engagement is crucial for productivity and retention. At Rapid HR Connect, our Training & Development services offer tailored workshops and coaching to boost employee motivation and engagement. We help create a positive work environment where your team thrives."}),
    },
    {
      title:
        t("1.title", {fallback: "We're experiencing high employee turnover. What can we do to address this?"}),
      content:
        t("1.text", {fallback: "High turnover can be costly and disruptive. Our Retained HR Support provides you with ongoing HR expertise to develop effective retention strategies, improve workplace culture, and address issues that contribute to employee dissatisfaction."}),
    },
    {
      title:
        t("2.title", {fallback: "Our recruitment process isn't yielding the results we need. What should we do?"}),
      content:
        t("2.text", {fallback: "If you're struggling with recruitment, our Recruitment Assistance service can help. Partnering with our sister company, The Recruitment Consultants, we help find and attract top talent that fits your business needs."}),
    },
    {
      title:
        t("3.title", {fallback: "We need to update our HR policies, but we don't know where to start. Can you help?"}),
      content:
        t("3.text", {fallback: "Updating HR policies can be complex. Our HR Documentation service offers comprehensive support for creating and refining policies, handbooks, and employment contracts, ensuring they meet legal requirements and align with your company's needs."}),
    },
    {
      title:
        t("4.title", {fallback: "How can I ensure my HR practices comply with the latest laws and regulations?"}),
      content:
        t("4.text", {fallback: "Staying compliant with ever-changing labour laws and regulations can be challenging. Our HR Documentation and Compliance services provide up-to-date policies and procedures that meet legal standards, reducing the risk of non-compliance and associated penalties."}),
    },
    {
      title:
        t("5.title", {fallback: "How can I improve my company's recruitment and onboarding processes?"}),
      content:
        t("5.text", {fallback: "Effective recruitment and onboarding are critical to successfully integrating new hires. Our Recruitment Assistance service offers end-to-end support, from crafting job descriptions to conducting interviews and onboarding new employees. We ensure your processes are efficient, welcoming, and aligned with your business goals."}),
    },
    {
      title: t("6.title", {fallback: "How can I develop leadership skills within my team?"}),
      content:
        t("6.text", {fallback: "Leadership development is critical to driving your business forward. Our Training and Development service includes specialized programs focused on building leadership skills, ensuring your team can handle challenges and lead confidently."}),
    },
    {
      title: t("7.title", {fallback: "Can you help us manage organisational change?"}),
      content:
        t("7.text", {fallback: "Yes, we can! Managing change effectively is crucial to minimizing disruption and maintaining employee morale. Our HR Project Management service includes change management consulting, providing strategies and support to help your organisation navigate transitions smoothly."}),
    },
    {
      title:
        t("8.title", {fallback: "How can I implement a performance management system in my company?"}),
      content:
        t("8.text", {fallback: "Implementing a performance management system is vital for tracking and enhancing employee performance. Our HR Consultancy services can help you design and implement a system tailored to your business needs, including setting clear KPIs, regular reviews, and feedback mechanisms."}),
    },
    {
      title: t("9.title", {fallback: "What are the benefits of outsourcing HR services?"}),
      content:
        t("9.text", {fallback: "Outsourcing HR services to Rapid HR Connect allows you to focus on your core business while we handle the complexities of HR management. Benefits include access to expert knowledge, cost savings, compliance assurance, and improved HR efficiency. Whether you need full-service HR support or help with specific projects, we provide the expertise you need to succeed."}),
    },
    {
      title:
        t("10.title", {fallback: "How can I improve employee retention during times of company growth?"}),
      content:
        t("10.text", {fallback: "Growth can create challenges in maintaining a cohesive culture. Our Retained HR Support service helps you develop and implement retention strategies tailored to your growing workforce. We focus on enhancing workplace culture, employee engagement, and career development opportunities to keep your team motivated and loyal."}),
    },
    {
      title:
        t("11.title", {fallback: "What HR services can I outsource to improve efficiency in my business?"}),
      content:
        t("11.text", {fallback: "You can outsource various HR functions, including recruitment, performance management, policy development, employee relations, compliance, and more. At Rapid HR Connect, we offer flexible HR Consultancy services that allow you to outsource the most resource-intensive HR functions for your business, improving efficiency and enabling you to focus on strategic growth."}),
    },
    {
      title: t("12.title", {fallback: "Can you help us create a Diversity and Inclusion (D&I) strategy?"}),
      content:
        t("12.text", {fallback: "Absolutely! We specialize in creating tailored Diversity and Inclusion strategies that promote a positive workplace environment. Our HR Consultancy services include the development of D&I policies, training programs, and initiatives that help foster an inclusive, respectful, and innovative workplace."}),
    },
    {
      title: t("13.title", {fallback: "How do I handle underperformance in my team effectively?"}),
      content:
        t("13.text", {fallback: "Addressing underperformance can be challenging, but it can lead to significant improvements with the right strategies. Our Performance Management services provide the tools and techniques needed to address underperformance constructively, including setting clear expectations, offering feedback, and creating development plans to help employees get back on track."}),
    },
    {
      title:
        t("14.title", {fallback: "Can you assist with temporary staffing or short-term HR projects?"}),
      content:
        t("14.text", {fallback: "Yes, we offer flexible HR solutions for both long-term and short-term needs. Whether you need temporary staffing, assistance with a specific HR project, or interim HR support, our team can provide expert guidance and services that fit your timeline and objectives."}),
    },
  ];

  return (
    <>
      <section className="faq-wrap">
        <div className="_container">
          <div className="faq-wrap__body">
            {hrQuestions.map((question, index) => (
              <Accordion
                key={index}
                title={question.title}
                text={question.content}
              />
            ))}
          </div>
          <div className="faq-wrap__bottom">
            <motion.div
              className="section-title"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Dots />
              <p>
                {tc("text.0", {fallback: "If you don't find the answer to your specific question, feel free to contact us directly. <br />We're here to help you with personalised solutions tailored to your business needs."})} <br />
                {tc("text.1", {fallback: "We're here to help you with personalised solutions tailored to your business needs."})}
              </p>
              <Link className="main-button" href="/get-in-touch">
                <span>{tc("button", {fallback: "Get in touch"})}</span>
                <ButtonArrow />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqWrap;
