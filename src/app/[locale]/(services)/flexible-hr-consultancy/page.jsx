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
} from "@/lib/services/FlexibleHRConsultancy_Data";
import Packages from "../_services_components/Packages";
import { getPackages } from "@/lib/services/packages";
import { getTranslations } from "next-intl/server";

export const metadata = {
  title: "Flexible HR Consultancy Services | Tailored HR Expertise",
  description:
    "Access expert HR consultancy services tailored to your unique challenges. Rapid HR Connect offers flexible HR solutions to support your business at every stage.",
  openGraph: {
    title: "Flexible HR Consultancy Services | Tailored HR Expertise",
    description:
      "Access expert HR consultancy services tailored to your unique challenges. Rapid HR Connect offers flexible HR solutions to support your business at every stage.",
    images: "https://rapidhrconnect.com/images/meta.png",
  },
};

const FlexibleHRConsultancy = async () => {
  const t = await getTranslations("flexibleHRConsultancy");
  const tp = await getTranslations("servicePackages");

  const keyBenefits = getKeyBenefits(t);
  const services = getServices(t);
  const packages = getPackages(tp);

  return (
    <>
      <ServiceHero
        title={t("hero.title", {fallback: "Flexible HR Consultancy"})}
        subtitle={
          t("hero.subtitle", {fallback: "Tailored HR expertise at your fingertips, providing the flexibility you need to address your unique business challenges."})
        }
        info={
          t("hero.info", {fallback: "Every business faces different HR challenges, and there's no one-size-fits-all solution. That's why our Flexible HR Consultancy service offers you the expertise and support you need exactly when needed. Whether you require strategic advice, specific project assistance, or ongoing HR support, we tailor our consultancy services to fit your business needs. With Rapid HR Connect, you can scale your HR support up or down as your business evolves."})
        }
        image={"/images/services/flexibleHero.png"}
      />
      <KeyBenefits benefits={keyBenefits} />
      <ServicesLoop services={services} category={t("loop.category", {fallback: "Retained HR Support"})} />
      <Packages title={t("packages.title", {fallback: "HR Support Packages"})} packages={packages} />
      <ServicePricing
        text={
          t("pricing.text", {fallback: "Interested in our Flexible HR Consultancy services? <br/>Download our detailed pricing guide to see how we can customise our offerings to fit your specific business needs."})
        }
      />
      <BookConsultation
        title={t("bookConsultation.title", {fallback: "Ready to Take the Next Step?"})}
        text={
          t("bookConsultation.text", {fallback: "Whether you need a quick consultation or ongoing HR support, we're <br/>here to help. Contact us today to discuss how our Flexible HR Consultancy <br/>services can be tailored to meet your business's unique needs."})
        }
      />
    </>
  );
};

export default FlexibleHRConsultancy;
