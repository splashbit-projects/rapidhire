import "@/styles/services.scss";
import BookConsultation from "@/global_components/BookConsultation";
import React from "react";
import ServiceHero from "../_services_components/ServiceHero";
import KeyBenefits from "../_services_components/KeyBenefits";
import ServicesLoop from "../_services_components/ServicesLoop";
import ServicePricing from "../_services_components/ServicePricing";

const TrainingDevelopment = () => {
  const keyBenefits = [
    {
      title: "Customised Training Programs",
      text: "Tailored to meet the specific needs of your business, ensuring relevant and effective learning outcomes.",
    },
    {
      title: "Increased Employee Engagement",
      text: "Boost morale and retention by investing in your employee's professional growth and development.",
    },
    {
      title: "Enhanced Productivity",
      text: "Equip your workforce with the skills and knowledge needed to perform at their best, driving overall business success.",
    },
    {
      title: "Leadership Development",
      text: "Prepare your future leaders with targeted training that aligns with your strategic goals",
    },
    {
      title: "Scalable Solutions",
      text: "Flexible programs that can be adapted to suit businesses of all sizes and industries.",
    },
  ];

  const services = [
    {
      title: "Leadership Development Programs",
      text: "Tailored programs to develop leadership skills within your organisation, preparing future leaders to take on key roles confidently.",
    },
    {
      title: "Technical Skills Training",
      text: "Customised training sessions to enhance the technical skills of your employees, ensuring they stay up-to-date with the latest industry standards.",
    },
    {
      title: "Soft Skills Development",
      text: "Programs focused on improving communication, teamwork, problem-solving, and other essential soft skills that drive workplace success.",
    },
    {
      title: "Compliance Training",
      text: "Ensure your employees understand and adhere to legal and regulatory requirements with comprehensive compliance training programs.",
    },
    {
      title: "Onboarding Training",
      text: "Structured onboarding programs that help new hires quickly integrate into your company culture and become productive team members.",
    },
    {
      title: "Diversity & Inclusion Training",
      text: "Promote a diverse and inclusive workplace by educating employees on the importance of diversity and how to foster an inclusive environment.",
    },
    {
      title: "Sales Training Programs",
      text: "Boost your sales team’s performance with targeted training that enhances their selling skills, product knowledge, and customer engagement.",
    },
    {
      title: "Customer Service Training",
      text: "Equip your customer service team with the tools and techniques to deliver exceptional service and improve customer satisfaction.",
    },
    {
      title: "Performance Management Training",
      text: "Training managers and supervisors on effective performance management techniques, including goal setting, feedback, and performance appraisals.",
    },
    {
      title: "Health & Safety Training",
      text: "Ensure a safe workplace with comprehensive health and safety training that covers industry-specific risks and regulatory requirements.",
    },
    {
      title: "Time Management & Productivity Training",
      text: "Help your employees maximise their productivity with time management strategies and tools that improve efficiency.",
    },
    {
      title: "Remote Work Training",
      text: "Provide your team with the skills and knowledge needed to succeed in a remote work environment, including communication, collaboration, and time management.",
    },
    {
      title: "Change Management Training",
      text: "Prepare your employees for organisational change with training that helps them understand and adapt to new processes and structures.",
    },
    {
      title: "Mentorship Programs",
      text: "Implement mentorship programs that pair experienced employees with new hires or those looking to advance their careers, fostering knowledge sharing and growth.",
    },
    {
      title: "Custom E-Learning Solutions",
      text: "Develop custom e-learning modules tailored to your business needs, allowing employees to learn at their own pace and convenience.",
    }
  ];
  

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
      <ServicesLoop services={services} />
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
