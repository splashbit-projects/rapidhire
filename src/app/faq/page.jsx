import React from "react";
import "@/styles/faq.scss";
import FaqHero from "./_components/FaqHero";
import FaqWrap from "./_components/FaqWrap";

export const metadata = {
  title: "HR FAQs | Common Questions Answered by Rapid HR Connect",
  description:
    "Find answers to your most common HR questions with Rapid HR Connect's FAQ page. Learn more about our services and how we can support your business.",
  openGraph: {
    title: "HR FAQs | Common Questions Answered by Rapid HR Connect",
    description:
      "Find answers to your most common HR questions with Rapid HR Connect's FAQ page. Learn more about our services and how we can support your business.",
    images: "https://rapidhrconnect.com/images/meta.png",
  },
};

const FAQ = () => {
  return (
    <>
      <FaqHero />
      <FaqWrap />
    </>
  );
};

export default FAQ;
