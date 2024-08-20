import "@/styles/services.scss";
import BookConsultation from "@/global_components/BookConsultation";
import React from "react";
import ServiceHero from "../_services_components/ServiceHero";
import KeyBenefits from "../_services_components/KeyBenefits";
import ServicesLoop from "../_services_components/ServicesLoop";
import ServicePricing from "../_services_components/ServicePricing";
import { keyBenefits, services } from "@/lib/services/TrainingDevelopment_Data";

const TrainingDevelopment = () => {
  return (
    <>
      <ServiceHero
        title={"Training & <span>Development</span>"}
        subtitle={
          "Empower your workforce with tailored training and development programs that enhance skills, boost productivity, and drive business success."
        }
        info={
          "Continuous learning and development are critical to maintaining a skilled and motivated workforce in today's competitive business environment. Our Training & Development service is designed to help your employees reach their full potential by offering customised programs that address your company's specific needs. Whether you're looking to enhance leadership skills, improve technical competencies, or foster a culture of continuous improvement, Rapid HR Connect provides the tools and expertise to support your organisation's growth."
        }
        image={"/images/services/trainingHero.png"}
      />
      <KeyBenefits benefits={keyBenefits} />
      <ServicesLoop services={services} category={"Training & Development"} />
      <ServicePricing
        text={
          "Interested in learning more about our Training & Development programs? <br/>Download our detailed pricing guide to explore the full range of our offerings and find the perfect solution for your business."
        }
      />
      <BookConsultation
        title={"Ready to Take the Next Step?"}
        text={
          "Empower your employees and drive business success with <br/>our Training & Development services. Contact us today to <br/>discuss how we can tailor our programs to your needs."
        }
      />
    </>
  );
};

export default TrainingDevelopment;
