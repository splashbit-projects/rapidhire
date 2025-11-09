import "@/styles/services.scss";
import BookConsultation from "@/global_components/BookConsultation";
import React from "react";
import ServiceHero from "../_services_components/ServiceHero";
import KeyBenefits from "../_services_components/KeyBenefits";
import ServicesLoop from "../_services_components/ServicesLoop";
import ServicePricing from "../_services_components/ServicePricing";
import { getKeyBenefits, getServices } from "@/lib/services/RetaindeHRSupport_Data";
import { getPackages } from "@/lib/services/packages";
import Packages from "../_services_components/Packages";
import { getTranslations } from "next-intl/server";

export const metadata = {
  title: "Retained HR Support Services | Ongoing HR Expertise",
  description:
    "Benefit from ongoing HR support tailored to your business needs. Rapid HR Connect provides comprehensive retained HR services to enhance your workforce and improve retention.",
  openGraph: {
    title: "Retained HR Support Services | Ongoing HR Expertise",
    description:
      "Benefit from ongoing HR support tailored to your business needs. Rapid HR Connect provides comprehensive retained HR services to enhance your workforce and improve retention.",
    images: "https://rapidhrconnect.com/images/meta.png",
  },
};

const RetainedHRSupport = async () => {
  const t = await getTranslations("retainedHRSupport");
  const tp = await getTranslations("servicePackages");

  const keyBenefits = getKeyBenefits(t);
  const services = getServices(t);
  const packages = getPackages(tp);


  return (
    <>
      <ServiceHero
        title={`${t('hero.title.0', {fallback: "Retained"})} <span>${t('hero.title.1', {fallback: "HR Support"})}</span>`}
        subtitle={
          t('hero.subtitle', {fallback: "Comprehensive, continuous HR support tailored to your business needs, ensuring you have expert guidance every step of the way."})
        }
        info={
          t('hero.info', {fallback: "In today’s fast-paced business environment, consistent and reliable HR support is essential to maintaining a productive and compliant workforce. Our Retained HR Support service provides your business with ongoing access to expert HR advice and solutions, helping you confidently navigate complex HR challenges. By partnering with Rapid HR Connect, you can focus on growing your business while we care for your HR needs."})
        }
        image={"/images/services/retainedHero.png"}
      />
      <KeyBenefits benefits={keyBenefits} />
      <ServicesLoop services={services} category={t('loop', {fallback: "Retained HR Support"})} />
      <Packages title={t('packages', {fallback: "HR Support Packages"})} packages={packages} />
      <ServicePricing
        text={
          t('pricing', {fallback: "Interested in learning more about our Retained HR Support service? <br/>Download our detailed pricing guide to see how we can provide tailored HR solutions that fit your budget."})
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

export default RetainedHRSupport;
