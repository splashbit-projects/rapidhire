"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Accordion from "@/app/(home)/_components/Accordion";
import Dots from "@/icons/Dots";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";

const FaqWrap = () => {
  const hrQuestions = [
    {
      title: "How can I improve employee engagement in my company?",
      content:
        "Employee engagement is crucial for productivity and retention. At Rapid HR Connect, our Training & Development services offer tailored workshops and coaching to boost employee motivation and engagement. We help create a positive work environment where your team thrives.",
    },
    {
      title:
        "We're experiencing high employee turnover. What can we do to address this?",
      content:
        "High turnover can be costly and disruptive. Our Retained HR Support provides you with ongoing HR expertise to develop effective retention strategies, improve workplace culture, and address issues that contribute to employee dissatisfaction.",
    },
    {
      title:
        "Our recruitment process isn't yielding the results we need. What should we do?",
      content:
        "If you're struggling with recruitment, our Recruitment Assistance service can help. Partnering with our sister company, The Recruitment Consultants, we help find and attract top talent that fits your business needs.",
    },
    {
      title:
        "We need to update our HR policies, but we don't know where to start. Can you help?",
      content:
        "Updating HR policies can be complex. Our HR Documentation service offers comprehensive support for creating and refining policies, handbooks, and employment contracts, ensuring they meet legal requirements and align with your company's needs.",
    },
    {
      title:
        "How can I ensure my HR practices comply with the latest laws and regulations?",
      content:
        "Staying compliant with ever-changing labour laws and regulations can be challenging. Our HR Documentation and Compliance services provide up-to-date policies and procedures that meet legal standards, reducing the risk of non-compliance and associated penalties.",
    },
    {
      title:
        "How can I improve my company's recruitment and onboarding processes?",
      content:
        "Effective recruitment and onboarding are critical to successfully integrating new hires. Our Recruitment Assistance service offers end-to-end support, from crafting job descriptions to conducting interviews and onboarding new employees. We ensure your processes are efficient, welcoming, and aligned with your business goals.",
    },
    {
      title: "How can I develop leadership skills within my team?",
      content:
        "Leadership development is critical to driving your business forward. Our Training and Development service includes specialized programs focused on building leadership skills, ensuring your team can handle challenges and lead confidently.",
    },
    {
      title: "Can you help us manage organisational change?",
      content:
        "Yes, we can! Managing change effectively is crucial to minimizing disruption and maintaining employee morale. Our HR Project Management service includes change management consulting, providing strategies and support to help your organisation navigate transitions smoothly.",
    },
    {
      title:
        "How can I implement a performance management system in my company?",
      content:
        "Implementing a performance management system is vital for tracking and enhancing employee performance. Our HR Consultancy services can help you design and implement a system tailored to your business needs, including setting clear KPIs, regular reviews, and feedback mechanisms.",
    },
    {
      title: "What are the benefits of outsourcing HR services?",
      content:
        "Outsourcing HR services to Rapid HR Connect allows you to focus on your core business while we handle the complexities of HR management. Benefits include access to expert knowledge, cost savings, compliance assurance, and improved HR efficiency. Whether you need full-service HR support or help with specific projects, we provide the expertise you need to succeed.",
    },
    {
      title:
        "How can I improve employee retention during times of company growth?",
      content:
        "Growth can create challenges in maintaining a cohesive culture. Our Retained HR Support service helps you develop and implement retention strategies tailored to your growing workforce. We focus on enhancing workplace culture, employee engagement, and career development opportunities to keep your team motivated and loyal.",
    },
    {
      title:
        "What HR services can I outsource to improve efficiency in my business?",
      content:
        "You can outsource various HR functions, including recruitment, performance management, policy development, employee relations, compliance, and more. At Rapid HR Connect, we offer flexible HR Consultancy services that allow you to outsource the most resource-intensive HR functions for your business, improving efficiency and enabling you to focus on strategic growth.",
    },
    {
      title: "Can you help us create a Diversity and Inclusion (D&I) strategy?",
      content:
        "Absolutely! We specialize in creating tailored Diversity and Inclusion strategies that promote a positive workplace environment. Our HR Consultancy services include the development of D&I policies, training programs, and initiatives that help foster an inclusive, respectful, and innovative workplace.",
    },
    {
      title: "How do I handle underperformance in my team effectively?",
      content:
        "Addressing underperformance can be challenging, but it can lead to significant improvements with the right strategies. Our Performance Management services provide the tools and techniques needed to address underperformance constructively, including setting clear expectations, offering feedback, and creating development plans to help employees get back on track.",
    },
    {
      title:
        "Can you assist with temporary staffing or short-term HR projects?",
      content:
        "Yes, we offer flexible HR solutions for both long-term and short-term needs. Whether you need temporary staffing, assistance with a specific HR project, or interim HR support, our team can provide expert guidance and services that fit your timeline and objectives.",
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
                If you don't find the answer to your specific question, feel
                free to contact us directly. <br />
                We're here to help you with personalised solutions tailored to
                your business needs.
              </p>
              <Link className="main-button" href="/get-in-touch">
                <span>Get in touch</span>
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
