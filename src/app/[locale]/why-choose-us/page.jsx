import React from "react";
import "@/styles/why.scss";
import WhyHero from "./_components/WhyHero";
import ProvenTrack from "./_components/ProvenTrack";
import WhatClientsSay from "./_components/WhatClientsSay";
import CaseStudies from "./_components/CaseStudies";
import Commitment from "./_components/Commitment";
import BookConsultation from "@/global_components/BookConsultation";
import OurProposition from "./_components/OurProposition";
import CommitmentToInnovation from "./_components/CommitmentToInnovation";

export const metadata = {
  title: "Why Choose Rapid HR Connect | Expert HR Solutions",
  description:
    "Discover the unique benefits of partnering with Rapid HR Connect. Learn why businesses trust us for comprehensive, tailored HR solutions.",
  openGraph: {
    title: "Why Choose Rapid HR Connect | Expert HR Solutions",
    description:
      "Discover the unique benefits of partnering with Rapid HR Connect. Learn why businesses trust us for comprehensive, tailored HR solutions.",
    images: "https://rapidhrconnect.com/images/meta.png",
  },
};

const WhyChooseUs = () => {
  return (
    <>
      <WhyHero />
      <ProvenTrack />
      <WhatClientsSay />
      <CaseStudies />
      <OurProposition />
      <CommitmentToInnovation />
      <Commitment />
      <BookConsultation
        title={"Ready to Improve Your HR?"}
        text={
          "Schedule a free consultation to discuss your <br/>HR needs and discover how our services <br/>can help your business succeed."
        }
      />
    </>
  );
};

export default WhyChooseUs;
