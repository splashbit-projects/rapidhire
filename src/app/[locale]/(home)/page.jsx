import Image from "next/image";
import "@/styles/home.scss";
import HomeHero from "./_components/HomeHero";
import HomeSolutions from "./_components/HomeSolutions";
import HomeAssistance from "./_components/HomeAssistance";
import HomeRisks from "./_components/HomeRisks";
import HomeApproach from "./_components/HomeApproach";
import HomeBuzzwords from "./_components/HomeBuzzwords";
import HomeTools from "./_components/HomeTools";
import BookConsultation from "../../../global_components/BookConsultation";
import HomeFAQ from "./_components/HomeFAQ";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("home.bookConsultation");
  
  return (
    <>
      <HomeHero />
      <HomeSolutions />
      <HomeAssistance />
      <HomeRisks />
      <HomeApproach />
      <HomeBuzzwords />
      <HomeTools />
      <HomeFAQ />
      <BookConsultation
        title={t("title", {fallback: "Ready to Improve Your HR?"})}
        text={
          t("text", {fallback: "Schedule a free consultation to discuss your HR <br />needs and discover how our services can help <br />your business succeed."})
        }
      />
    </>
  );
}
