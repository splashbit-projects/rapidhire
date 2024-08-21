import React from "react";
import "@/styles/contact.scss";
import ContactHero from "./_components/ContactHero";
import ContactInfo from "./_components/ContactInfo";
import ContactFollow from "./_components/ContactFollow";
import ContactUs from "./_components/ContactUs";

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
