import React from "react";
import "@/styles/approach.scss";
import ApproachHero from "./_components/ApproachHero";
import OurPhilosophy from "./_components/OurPhilosophy";
import BookConsultation from "../../global_components/BookConsultation";
import HowWeWork from "./_components/HowWeWork";
import KeyMethodologies from "./_components/KeyMethodologies";
import ClientCollaboration from "./_components/ClientCollaboration";

const OurApproach = () => {
  return (
    <>
      <ApproachHero />
      <OurPhilosophy />
      <HowWeWork />
      <KeyMethodologies />
      <ClientCollaboration />
      <BookConsultation
        title={"Ready to Improve Your HR?"}
        text={
          "Schedule a free consultation to discuss your HR <br />needs and discover how our services can help <br />your business succeed."
        }
      />
    </>
  );
};

export default OurApproach;
