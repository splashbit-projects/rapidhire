import React from "react";
import "@/styles/guides.scss";
import GuidesHero from "./_components/GuidesHero";
import GuidesLoop from "./_components/GuidesLoop";

export const metadata = {
  title: "HR Guides and Insights | Expert Advice and Industry Trends",
  description:
    "Explore expert advice, industry trends, and actionable HR strategies with Rapid HR Connect's Guides and Insights. Stay informed and ahead of the curve.",
  openGraph: {
    title: "HR Guides and Insights | Expert Advice and Industry Trends",
    description:
      "Explore expert advice, industry trends, and actionable HR strategies with Rapid HR Connect's Guides and Insights. Stay informed and ahead of the curve.",
    images: "https://rapidhrconnect.com/images/meta.png",
  },
};

const GuidesAndInsights = () => {
  return (
    <>
      <GuidesHero />
      <GuidesLoop />
    </>
  );
};

export default GuidesAndInsights;
