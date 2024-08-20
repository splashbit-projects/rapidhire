import "@/styles/services.scss";
import BookConsultation from "@/global_components/BookConsultation";
import React from "react";
import ServiceHero from "../_services_components/ServiceHero";
import KeyBenefits from "../_services_components/KeyBenefits";
import ServicesLoop from "../_services_components/ServicesLoop";
import ServicePricing from "../_services_components/ServicePricing";
import { keyBenefits, services } from "@/lib/services/HRDocumentation_Data";
import Packages from "../_services_components/Packages";
import { packages } from "@/lib/services/packages";

const HRDocumentation = () => {
  return (
    <>
      <ServiceHero
        title={"HR <br/><span>Documentation</span>"}
        subtitle={
          "Comprehensive, compliant, and customised HR documentation that ensures your business operates smoothly and meets all regulatory requirements."
        }
        info={
          "Effective HR documentation is the backbone of any well-managed organisation. It ensures compliance with legal standards, supports consistent HR practices, and provides clarity for employees and management. Our HR Documentation service offers expertly crafted documents tailored to your business needs, helping you maintain a well-organised and legally compliant workplace. Rapid HR Connect provides the tools to keep your HR processes running smoothly, from employee handbooks to performance review templates."
        }
        image={"/images/services/hrdocsHero.png"}
      />
      <KeyBenefits benefits={keyBenefits} />
      <ServicesLoop services={services} category={"HR Documentation"} />
      <Packages title={"HR Support Packages"} packages={packages} />
      <ServicePricing
        text={
          "Interested in our HR Documentation services? <br/>Download our detailed pricing guide to explore how we can provide customised, compliant, and efficient documentation solutions for your business."
        }
      />
      <BookConsultation
        title={"Ready to Take the Next Step?"}
        text={
          "Keep your HR processes compliant and organised with our <br/>expert HR Documentation services. Contact us today to discuss <br/>how we can tailor our documentation to meet your needs."
        }
      />
    </>
  );
};

export default HRDocumentation;
