import React from "react";
import "@/styles/approach.scss";
import ApproachHero from "./_components/ApproachHero";
import OurPhilosophy from "./_components/OurPhilosophy";
import BookConsultation from "../../../global_components/BookConsultation";
import HowWeWork from "./_components/HowWeWork";
import KeyMethodologies from "./_components/KeyMethodologies";
import ClientCollaboration from "./_components/ClientCollaboration";
import { getTranslations } from "next-intl/server";

export const metadata = {
  title: "Strategic HR Management | Tailored Solutions for Business Success",
  description:
    "Learn about Rapid HR Connect's strategic approach to HR management. We offer customised HR solutions that drive growth, mitigate risks, and ensure long-term success.",
  openGraph: {
    title: "Strategic HR Management | Tailored Solutions for Business Success",
    description:
      "Learn about Rapid HR Connect's strategic approach to HR management. We offer customised HR solutions that drive growth, mitigate risks, and ensure long-term success.",
    images: "https://rapidhrconnect.com/images/meta.png",
  },
};

const OurApproach = async () => {
  const t = await getTranslations("ourApproach.bookConsultation");

  return (
    <>
      <ApproachHero />
      <OurPhilosophy />
      <HowWeWork />
      <KeyMethodologies />
      <ClientCollaboration />
      <BookConsultation
        title={t("title", {fallback: "Ready to Improve Your HR?"})}
        text={
          t("text", {fallback: "Schedule a free consultation to discuss your HR <br />needs and discover how our services can help <br />your business succeed."})
        }
      />
    </>
  );
};

export default OurApproach;
