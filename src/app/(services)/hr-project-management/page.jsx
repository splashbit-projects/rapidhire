import "@/styles/services.scss";
import BookConsultation from "@/global_components/BookConsultation";
import React from "react";
import ServiceHero from "../_services_components/ServiceHero";
import KeyBenefits from "../_services_components/KeyBenefits";
import ServicesLoop from "../_services_components/ServicesLoop";
import ServicePricing from "../_services_components/ServicePricing";

const HRProjectManagement = () => {
  const keyBenefits = [
    {
      title: "End-to-End Project Management",
      text: "Comprehensive management of your HR projects, from planning to execution and delivery.",
    },
    {
      title: "Strategic Alignment",
      text: "Ensuring all HR projects are aligned with your broader business goals for maximum impact.",
    },
    {
      title: "Risk Mitigation",
      text: "Identifying and addressing potential risks early in the project lifecycle to avoid costly setbacks.",
    },
    {
      title: "Expert Guidance",
      text: "Access to experienced HR project managers who bring industry best practices to your projects.",
    },
    {
      title: "Resource Optimization",
      text: "Efficient use of resources, ensuring projects are completed on time and within budget.",
    },
  ];

  const services = [
    {
      title: "HR Systems Implementation",
      text: "We manage the implementation of HR software and systems, ensuring a smooth transition and minimal disruption to your operations.",
    },
    {
      title: "Change Management",
      text: "Expert support in managing organisational change, including communication strategies and employee engagement during transitions.",
    },
    {
      title: "HR Policy Overhaul",
      text: "Comprehensive review and update of your HR policies to ensure they are up-to-date, compliant, and aligned with your business needs.",
    },
    {
      title: "Talent Management Programs",
      text: "Design and implementation of talent management programs, including succession planning, leadership development, and performance management.",
    },
    {
      title: "Employee Engagement Initiatives",
      text: "Development and execution of initiatives to boost employee engagement, satisfaction, and retention.",
    },
    {
      title: "Compliance Projects",
      text: "Managing projects to ensure compliance with local and international labour laws and regulations, minimising legal risks.",
    },
    {
      title: "Compensation & Benefits Review",
      text: "We thoroughly review your compensation and benefits programs, providing recommendations for competitive and fair offerings.",
    },
    {
      title: "HR Process Reengineering",
      text: "Reengineering your HR processes to improve efficiency, reduce costs, and enhance service delivery.",
    },
    {
      title: "Organisational Development Projects",
      text: "Managing projects focused on organisational development, including restructuring, team building, and culture change initiatives.",
    },
    {
      title: "Training Program Implementation",
      text: "We design and implement training programs tailored to your business needs, ensuring employees have the skills they need to succeed.",
    },
    {
      title: "Recruitment Process Optimization",
      text: "Streamlining your recruitment processes to improve efficiency, reduce time-to-hire, and attract top talent.",
    },
    {
      title: "Workforce Planning",
      text: "Strategic workforce planning to ensure you have the right people in the right roles at the right time.",
    },
    {
      title: "HR Technology Integration",
      text: "Integrating HR technology solutions to enhance data management, reporting, and overall HR efficiency.",
    },
    {
      title: "Performance Management System Implementation",
      text: "Implementing robust performance management systems that align employee performance with business objectives.",
    },
    {
      title: "Diversity & Inclusion Programs",
      text: "Developing and implementing programs to promote diversity and inclusion within your organisation, fostering a positive and inclusive workplace culture.",
    },
  ];

  return (
    <>
      <ServiceHero
        title={"HR Project <span>Management</span>"}
        subtitle={
          "Expert management of your HR projects from start to finish, ensuring successful execution and alignment with your business goals."
        }
        info={
          "Managing HR projects can be complex and time-consuming, requiring specialised expertise to ensure they are completed on time and within budget. Our HR Project Management service provides your business with dedicated support to plan, execute, and deliver HR projects that align with your strategic objectives. Rapid HR Connect ensures your HR projects are managed efficiently and effectively, from implementing new systems to driving organisational change."
        }
        image={"/images/services/HRProjectManagementHero.png"}
      />
      <KeyBenefits benefits={keyBenefits} />
      <ServicesLoop services={services} />
      <ServicePricing />
      <BookConsultation
        title={"Ready to Take the Next Step?"}
        text={
          "Want to ensure your HR projects are managed with expertise <br/>and precision? Contact us today to discuss how our HR Project <br/>Management service can help you achieve your business goals."
        }
      />
    </>
  );
};

export default HRProjectManagement;
