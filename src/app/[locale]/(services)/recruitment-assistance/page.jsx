import "@/styles/services.scss";
import BookConsultation from "@/global_components/BookConsultation";
import React from "react";
import ServiceHero from "../_services_components/ServiceHero";
import KeyBenefits from "../_services_components/KeyBenefits";
import ServicesLoop from "../_services_components/ServicesLoop";
import ServicePricing from "../_services_components/ServicePricing";
import {
  getKeyBenefits,
  getServices,
} from "@/lib/services/RecruitmentAssistance_Data";
import { getPackages } from "@/lib/services/packages";
import Packages from "../_services_components/Packages";
import { getTranslations } from "next-intl/server";

export const metadata = {
  title: "Recruitment Assistance Services | Attract Top Talent",
  description:
    "Streamline your recruitment process with Rapid HR Connect. Our recruitment assistance services help you find and hire the best candidates for your business.",
  openGraph: {
    title: "Recruitment Assistance Services | Attract Top Talent",
    description:
      "Streamline your recruitment process with Rapid HR Connect. Our recruitment assistance services help you find and hire the best candidates for your business.",
    images: "https://rapidhrconnect.com/images/meta.png",
  },
};

const RecruitmentAssistance = async () => {
  const t = await getTranslations("recruitmentAssistance");
  const tp = await getTranslations("servicePackages");

  const keyBenefits = getKeyBenefits(t);
  const services = getServices(t);
  const packages = getPackages(tp);
  
  return (
    <>
      <ServiceHero
        title={`${t('hero.title.0', {fallback: "Recruitment"})} <span>${t('hero.title.1', {fallback: "Assistance"})}</span>`}
        subtitle={
          t('hero.subtitle', {fallback: "Expert support in finding and hiring the right talent for your business, streamlining the recruitment process for maximum efficiency and effectiveness."})
        }
        info={
          t('hero.info', {fallback: "Hiring the right talent is crucial to the success of any business, but the recruitment process can be time-consuming and complex. Our Recruitment Assistance service is designed to help you attract, assess, and hire the best candidates for your organisation. By partnering with Rapid HR Connect, you gain access to expert recruitment strategies, tools, and support that ensure you find the perfect fit for your team quickly and efficiently."})
        }
        image={"/images/services/recruitmentHero.png"}
      />
      <KeyBenefits benefits={keyBenefits} />
      <ServicesLoop services={services} category={t('loop', {fallback: "Recruitment Assistance"})} />
      <Packages title={t('packages', {fallback: "HR Support Packages"})} packages={packages} />
      <ServicePricing
        text={
          t('pricing', {fallback: "Looking for more information about our Recruitment Assistance service? <br/>Download our detailed pricing guide to explore how we can support your hiring needs with cost-effective solutions."})
        }
      />
      <BookConsultation
        title={t('bookConsultation.title', {fallback: "Ready to Take the Next Step?"})}
        text={
          t('bookConsultation.text', {fallback: "Finding the right talent is just a click away. Contact us today <br/>to discuss how our Recruitment Assistance service can help <br/>you hire the best candidates quickly and efficiently."})
        }
      />
    </>
  );
};

export default RecruitmentAssistance;
