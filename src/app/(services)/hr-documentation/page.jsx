import "@/styles/services.scss";
import BookConsultation from "@/global_components/BookConsultation";
import React from "react";
import ServiceHero from "../_services_components/ServiceHero";
import KeyBenefits from "../_services_components/KeyBenefits";
import ServicesLoop from "../_services_components/ServicesLoop";
import ServicePricing from "../_services_components/ServicePricing";

const HRDocumentation = () => {
  const keyBenefits = [
    {
      title: "Legal Compliance",
      text: "Ensure all HR documents meet current legal requirements, reducing the risk of costly non-compliance issues.",
    },
    {
      title: "Consistency",
      text: "Standardised documentation across your organisation promotes fair and consistent HR practices.",
    },
    {
      title: "Clarity",
      text: "Clear, well-written documents help employees understand policies, procedures, and expectations, reducing confusion and disputes.",
    },
    {
      title: "Customization",
      text: "Tailored documentation reflecting your company's culture, values, and needs.",
    },
    {
      title: "Efficiency",
      text: "Streamline HR processes with ready-to-use templates and tools that save time and resources.",
    },
  ];

  const services = [
    {
      title: "Employee Handbooks",
      text: "We create comprehensive employee handbooks that outline your company’s policies, procedures, and expectations, ensuring consistency and clarity across your organisation.",
    },
    {
      title: "Employment Contracts",
      text: "Customised employment contracts compliant with legal standards and tailored to your business’s specific needs.",
    },
    {
      title: "Job Descriptions",
      text: "Clear and concise job descriptions accurately define roles and responsibilities, helping you attract suitable candidates and set clear expectations.",
    },
    {
      title: "Performance Review Templates",
      text: "Ready-to-use performance review templates that facilitate constructive feedback and support employee development.",
    },
    {
      title: "Disciplinary Procedures",
      text: "Detailed disciplinary procedures that ensure fair and consistent handling of employee issues, reducing the risk of disputes.",
    },
    {
      title: "Health & Safety Policies",
      text: "Comprehensive health and safety policies that meet regulatory requirements and promote a safe working environment.",
    },
    {
      title: "Data Protection Policies",
      text: "Ensure your company complies with data protection laws and clear policies safeguarding employee information.",
    },
    {
      title: "Leave Management Forms",
      text: "Standardised leave management forms streamline the request and approval of employee leave.",
    },
    {
      title: "Onboarding Documents",
      text: "Customised onboarding documents that help new hires integrate into your company quickly and effectively.",
    },
    {
      title: "Termination & Exit Documents",
      text: "Legally compliant termination and exit documents that ensure a smooth and respectful offboarding process.",
    },
    {
      title: "HR Compliance Checklists",
      text: "Checklists that help you stay on top of HR compliance requirements, reducing the risk of legal issues.",
    },
    {
      title: "Recruitment Documentation",
      text: "Comprehensive documentation to support your recruitment processes, including interview guides, assessment forms, and offer letters.",
    },
    {
      title: "Training & Development Plans",
      text: "Tailored training and development plans that outline employee growth opportunities and align with your business objectives.",
    },
    {
      title: "Grievance Procedures",
      text: "Clear grievance procedures that ensure employee concerns are handled fairly, consistently, and legally.",
    },
    {
      title: "Flexible Work Policies",
      text: "Develop flexible work policies that meet the needs of your employees while supporting your business goals.",
    }
  ];
  
  

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
      <ServicesLoop services={services} />
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
