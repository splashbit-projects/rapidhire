import React from "react";
import "@/styles/contact.scss";
import ContactHero from "./_components/ContactHero";
import ContactInfo from "./_components/ContactInfo";
import ContactFollow from "./_components/ContactFollow";
import ContactUs from "./_components/ContactUs";

export const metadata = {
  title: "Contact Us | Rapid HR Connect HR Solutions",
  description:
    "Get in touch with Rapid HR Connect for expert HR support tailored to your business needs. Contact us today to learn more about our services.",
  openGraph: {
    title: "Contact Us | Rapid HR Connect HR Solutions",
    description:
      "Get in touch with Rapid HR Connect for expert HR support tailored to your business needs. Contact us today to learn more about our services.",
    images: "https://rapidhrconnect.com/images/meta.png",
  },
};

const GetInTouch = () => {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactFollow />
      <ContactUs />
    </>
  );
};

export default GetInTouch;
