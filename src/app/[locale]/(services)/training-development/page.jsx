import "@/styles/services.scss";
import BookConsultation from "@/global_components/BookConsultation";
import React from "react";
import ServiceHero from "../_services_components/ServiceHero";
import KeyBenefits from "../_services_components/KeyBenefits";
import ServicesLoop from "../_services_components/ServicesLoop";
import ServicePricing from "../_services_components/ServicePricing";
import { getKeyBenefits, getServices } from "@/lib/services/TrainingDevelopment_Data";
import Packages from "../_services_components/Packages";
import { getPackages } from "@/lib/services/packages";
import { getTranslations } from "next-intl/server";

export const metadata = {
  title: "Training & Development Services | Empower Your Workforce",
  description:
    "Enhance employee skills and boost productivity with our tailored training and development programs. Rapid HR Connect helps your team reach its full potential.",
  openGraph: {
    title: "Training & Development Services | Empower Your Workforce",
    description:
      "Enhance employee skills and boost productivity with our tailored training and development programs. Rapid HR Connect helps your team reach its full potential.",
    images: "https://rapidhrconnect.com/images/meta.png",
  },
};

const TrainingDevelopment = async () => {
  const t = await getTranslations("trainingDevelopment");
  const tp = await getTranslations("servicePackages");

  const keyBenefits = getKeyBenefits(t);
  const services = getServices(t);
  const packages = getPackages(tp);
  
  return (
    <>
      <ServiceHero
        title={`${t('hero.title.0', {fallback: "Training"})} <span>${t('hero.title.1', {fallback: "Development"})}</span>`}
        subtitle={
          t('hero.subtitle', {fallback: "Empower your workforce with tailored training and development programs that enhance skills, boost productivity, and drive business success."})
        }
        info={
          t('hero.info', {fallback: "Continuous learning and development are critical to maintaining a skilled and motivated workforce in today's competitive business environment. Our Training & Development service is designed to help your employees reach their full potential by offering customised programs that address your company's specific needs. Whether you're looking to enhance leadership skills, improve technical competencies, or foster a culture of continuous improvement, Rapid HR Connect provides the tools and expertise to support your organisation's growth."})
        }
        image={"/images/services/trainingHero.png"}
      />
      <KeyBenefits benefits={keyBenefits} />
      <ServicesLoop services={services} category={t('loop', {fallback: "Training & Development"})} />
      <Packages title={t('packages', {fallback: "HR Support Packages"})} packages={packages} />
      <ServicePricing
        text={
          t('pricing', {fallback: "Interested in learning more about our Training & Development programs? <br/>Download our detailed pricing guide to explore the full range of our offerings and find the perfect solution for your business."})
        }
      />
      <BookConsultation
        title={t('bookConsultation.title', {fallback: "Ready to Take the Next Step?"})}
        text={
          t('bookConsultation.text', {fallback: "Empower your employees and drive business success with <br/>our Training & Development services. Contact us today to <br/>discuss how we can tailor our programs to your needs."})
        }
      />
    </>
  );
};

export default TrainingDevelopment;
