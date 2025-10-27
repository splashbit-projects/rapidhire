import "@/styles/services.scss";
import BookConsultation from "@/global_components/BookConsultation";
import React from "react";
import ServiceHero from "../_services_components/ServiceHero";
import KeyBenefits from "../_services_components/KeyBenefits";
import ServicesLoop from "../_services_components/ServicesLoop";
import ServicePricing from "../_services_components/ServicePricing";
import { keyBenefits, services } from "@/lib/services/RetaindeHRSupport_Data";
import { packages } from "@/lib/services/packages";
import Packages from "../_services_components/Packages";

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

const RetainedHRSupport = () => {
  return (
    <>
      <ServiceHero
        title={"Retained <span>HR Support</span>"}
        subtitle={
          "Comprehensive, continuous HR support tailored to your business needs, ensuring you have expert guidance every step of the way."
        }
        info={
          "In today’s fast-paced business environment, consistent and reliable HR support is essential to maintaining a productive and compliant workforce. Our Retained HR Support service provides your business with ongoing access to expert HR advice and solutions, helping you confidently navigate complex HR challenges. By partnering with Rapid HR Connect, you can focus on growing your business while we care for your HR needs."
        }
        image={"/images/services/retainedHero.png"}
      />
      <KeyBenefits benefits={keyBenefits} />
      <ServicesLoop services={services} category={"Retained HR Support"} />
      <Packages title={"HR Support Packages"} packages={packages} />
      <ServicePricing
        text={
          "Interested in learning more about our Retained HR Support service? <br/>Download our detailed pricing guide to see how we can provide tailored HR solutions that fit your budget."
        }
      />
      <BookConsultation
        title={"Ready to Take the Next Step?"}
        text={
          "Want to ensure your HR projects are managed with expertise <br/>and precision? Contact us today to discuss how our HR Project <br/>Management service can help you achieve your business goals."
        }
      />
    </>
  );
};

export default RetainedHRSupport;
