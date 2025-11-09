import { getPage, getPageSlugs } from "@/utils/blogUtils";
import React from "react";
import "@/styles/policy.scss";
import { getTranslations } from "next-intl/server";

export async function generateStaticParams() {
  const slugs = await getPageSlugs();
  const locales = ["en", "it", "de"];

  const params = [];
  slugs.forEach((slug) => {
    if (!slug.startsWith("IT-") && !slug.startsWith("DE-")) {
      locales.forEach((locale) => {
        params.push({ slug, locale });
      });
    }
  });

  return params;
}

export async function generateMetadata({ params: { locale } }) {
  const page = await getPage("terms-and-conditions", locale);

  return {
    title: page.title,
    openGraph: {
      title: page.title,
      images: "https://rapidhrconnect.com/images/meta.png",
    },
  };
}

const TermsAndConditions = async ({params}) => {
  const {locale} = await params;
  const page = await getPage("terms-and-conditions", locale);
  const t = await getTranslations("policies");

  return (
    <>
      <section className="policy-hero">
        <div className="_container">
          <div className="policy-hero__body">
            <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
            {page.date && <div className="date">{t("lastUpdated", {fallback: "Last updated:"})} {page.date}</div>}
          </div>
        </div>
      </section>
      <section className="policy-wrap">
        <div className="_container">
          <div className="policy-wrap__body">
            <article dangerouslySetInnerHTML={{ __html: page.body }} />
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;
