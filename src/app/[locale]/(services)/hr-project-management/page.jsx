import "@/styles/services.scss";
import BookConsultation from "@/global_components/BookConsultation";
import React from "react";
import ServiceHero from "../_services_components/ServiceHero";
import KeyBenefits from "../_services_components/KeyBenefits";
import ServicesLoop from "../_services_components/ServicesLoop";
import ServicePricing from "../_services_components/ServicePricing";
import { getKeyBenefits, getServices } from "@/lib/services/HRProjectManagement_Data";
import Packages from "../_services_components/Packages";
import { getPackages } from "@/lib/services/packages";
import { getTranslations } from "next-intl/server";

export const metadata = {
  title: "HR Project Management Services | Expert HR Solutions",
  description:
    "Manage HR projects effectively with Rapid HR Connect. Our HR project management services ensure successful implementation and alignment with your business goals.",
  openGraph: {
    title: "HR Project Management Services | Expert HR Solutions",
    description:
      "Manage HR projects effectively with Rapid HR Connect. Our HR project management services ensure successful implementation and alignment with your business goals.",
    images: "https://rapidhrconnect.com/images/meta.png",
  },
};

const HRProjectManagement = async () => {
  const t = await getTranslations("hrProjectManagement");
  const tp = await getTranslations("servicePackages");

  const keyBenefits = getKeyBenefits(t);
  const services = getServices(t);
  const packages = getPackages(tp);

  return (
    <>
      <ServiceHero
        title={`${t('hero.title.0', {fallback: "HR"})} <span>${t('hero.title.1', {fallback: "Project Management"})}</span>`}
        subtitle={
          t('hero.subtitle', {fallback: "Expert management of your HR projects from start to finish, ensuring successful execution and alignment with your business goals."})
        }
        info={
          t('hero.info', {fallback: "Managing HR projects can be complex and time-consuming, requiring specialised expertise to ensure they are completed on time and within budget. Our HR Project Management service provides your business with dedicated support to plan, execute, and deliver HR projects that align with your strategic objectives. Rapid HR Connect ensures your HR projects are managed efficiently and effectively, from implementing new systems to driving organisational change."})
        }
        image={"/images/services/HRProjectManagementHero.png"}
      />
      <KeyBenefits benefits={keyBenefits} />
      <ServicesLoop services={services} category={t('loop', {fallback: "HR Project Management"})} />
      <Packages title={t('packages', {fallback: "HR Support Packages"})} packages={packages} />
      <ServicePricing
        text={
          t('pricing', {fallback: "Want to know more about our HR Project Management service? <br/>Download our detailed pricing guide to explore how we can support your HR projects from start to finish."})
        }
      />
      <BookConsultation
        title={t('bookConsultation.title', {fallback: "Ready to Take the Next Step?"})}
        text={
          t('bookConsultation.text', {fallback: "Want to ensure your HR projects are managed with expertise <br/>and precision? Contact us today to discuss how our HR Project <br/>Management service can help you achieve your business goals."})
        }
      />
    </>
  );
};

export default HRProjectManagement;
