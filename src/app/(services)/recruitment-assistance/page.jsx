import "@/styles/services.scss";
import BookConsultation from "@/global_components/BookConsultation";
import React from "react";
import ServiceHero from "../_services_components/ServiceHero";
import KeyBenefits from "../_services_components/KeyBenefits";
import ServicesLoop from "../_services_components/ServicesLoop";
import ServicePricing from "../_services_components/ServicePricing";
import {
  keyBenefits,
  services,
} from "@/lib/services/RecruitmentAssistance_Data";
import { packages } from "@/lib/services/packages";
import Packages from "../_services_components/Packages";

const RecruitmentAssistance = () => {
  return (
    <>
      <ServiceHero
        title={"Recruitment <span>Assistance</span>"}
        subtitle={
          "Expert support in finding and hiring the right talent for your business, streamlining the recruitment process for maximum efficiency and effectiveness."
        }
        info={
          "Hiring the right talent is crucial to the success of any business, but the recruitment process can be time-consuming and complex. Our Recruitment Assistance service is designed to help you attract, assess, and hire the best candidates for your organisation. By partnering with Rapid HR Connect, you gain access to expert recruitment strategies, tools, and support that ensure you find the perfect fit for your team quickly and efficiently."
        }
        image={"/images/services/recruitmentHero.png"}
      />
      <KeyBenefits benefits={keyBenefits} />
      <ServicesLoop services={services} category={"Recruitment Assistance"} />
      <Packages title={"HR Support Packages"} packages={packages} />
      <ServicePricing
        text={
          "Looking for more information about our Recruitment Assistance service? <br/>Download our detailed pricing guide to explore how we can support your hiring needs with cost-effective solutions."
        }
      />
      <BookConsultation
        title={"Ready to Take the Next Step?"}
        text={
          "Finding the right talent is just a click away. Contact us today <br/>to discuss how our Recruitment Assistance service can help <br/>you hire the best candidates quickly and efficiently."
        }
      />
    </>
  );
};

export default RecruitmentAssistance;
