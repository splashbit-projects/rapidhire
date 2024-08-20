import "@/styles/services.scss";
import BookConsultation from "@/global_components/BookConsultation";
import React from "react";
import ServiceHero from "../_services_components/ServiceHero";
import KeyBenefits from "../_services_components/KeyBenefits";
import ServicesLoop from "../_services_components/ServicesLoop";
import ServicePricing from "../_services_components/ServicePricing";

const FlexibleHRConsultancy = () => {
  const keyBenefits = [
    {
      title: "Customised Support",
      text: "Receive HR consultancy services tailored to your needs, ensuring you get the proper support at the right time.",
    },
    {
      title: "Scalable Solutions",
      text: "Easily scale our services to match your business's growth or changing HR requirements.",
    },
    {
      title: "Cost-Efficient",
      text: "Optimise your HR budget by accessing expert consultancy only when needed, avoiding the costs of full-time staff.",
    },
    {
      title: "Expert Insight",
      text: "Benefit from the knowledge and experience of seasoned HR consultants who bring industry best practices to your business.",
    },
    {
      title: "Quick Adaptation",
      text: "Respond rapidly to HR challenges and opportunities with flexible, on-demand consultancy services.",
    },
  ];

  const services = [
    {
      title: "Strategic HR Planning",
      text: "We provide expert guidance in developing long-term HR strategies that align with your business goals, ensuring sustainable growth and success.",
    },
    {
      title: "Talent Acquisition Strategy",
      text: "Tailored advice on creating and implementing effective talent acquisition strategies that attract top talent to your organisation.",
    },
    {
      title: "Employee Engagement Solutions",
      text: "Customised strategies to boost employee engagement and satisfaction, increasing retention and productivity.",
    },
    {
      title: "Performance Management Consulting",
      text: "Expert advice on designing and implementing performance management systems that drive results and align with your business objectives.",
    },
    {
      title: "HR Policy Development",
      text: "We help you create, review, and update HR policies aligned with current regulations and best practices, ensuring compliance and fairness.",
    },
    {
      title: "Leadership Development Programs",
      text: "Develop and implement leadership training and development programs to nurture future leaders within your organisation.",
    },
    {
      title: "Compensation & Benefits Consulting",
      text: "Strategic advice on creating competitive and fair compensation and benefits packages that attract and retain top talent.",
    },
    {
      title: "Organisational Development",
      text: "Consulting services focused on improving organisational structure, culture, and processes to enhance efficiency and effectiveness.",
    },
    {
      title: "HR Compliance Audits",
      text: "Comprehensive audits of your HR practices to ensure they meet legal requirements and minimise non-compliance risk.",
    },
    {
      title: "Change Management Consulting",
      text: "Expert support in managing organisational change, including communication strategies and employee engagement during transitions.",
    },
    {
      title: "Diversity & Inclusion Strategy",
      text: "Tailored consulting services to develop and implement effective diversity and inclusion programs within your organisation.",
    },
    {
      title: "HR Technology Advisory",
      text: "Guidance selecting and implementing HR technology solutions that streamline processes and improve data management.",
    },
    {
      title: "Workforce Planning",
      text: "Strategic workforce planning ensures your organisation has the right people in the right roles at the right time.",
    },
    {
      title: "Succession Planning",
      text: "We help you develop succession plans to ensure leadership continuity and stability within your organisation.",
    },
    {
      title: "Employee Relations Consulting",
      text: "Expert advice on managing employee relations issues, including conflict resolution and fostering a positive work environment.",
    },
  ];

  return (
    <>
      <ServiceHero
        title={"Flexible HR <span>Consultancy</span>"}
        subtitle={
          "Tailored HR expertise at your fingertips, providing the flexibility you need to address your unique business challenges."
        }
        info={
          "Every business faces different HR challenges, and there's no one-size-fits-all solution. That's why our Flexible HR Consultancy service offers you the expertise and support you need exactly when needed. Whether you require strategic advice, specific project assistance, or ongoing HR support, we tailor our consultancy services to fit your business needs. With Rapid HR Connect, you can scale your HR support up or down as your business evolves."
        }
        image={"/images/services/flexibleHero.png"}
      />
      <KeyBenefits benefits={keyBenefits} />
      <ServicesLoop services={services} />
      <ServicePricing
        text={
          "Interested in our Flexible HR Consultancy services? <br/>Download our detailed pricing guide to see how we can customise our offerings to fit your specific business needs."
        }
      />
      <BookConsultation
        title={"Ready to Take the Next Step?"}
        text={
          "Whether you need a quick consultation or ongoing HR support, we're <br/>here to help. Contact us today to discuss how our Flexible HR Consultancy <br/>services can be tailored to meet your business's unique needs."
        }
      />
    </>
  );
};

export default FlexibleHRConsultancy;
