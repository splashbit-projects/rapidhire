import React from "react";
import "@/styles/guides.scss";
import { getPost, getSlugs } from "@/utils/blogUtils";
import Image from "next/image";

export async function generateStaticParams() {
  const slugs = await getSlugs();
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

export async function generateMetadata({ params: { slug, locale } }) {
  const post = await getPost(slug, locale);

  return {
    title: post.seo_title,
    description: post.seo_description,
    openGraph: {
      title: post.seo_title,
      description: post.seo_description,
      //images: "https://rapidhrconnect.com/images/meta.png",
    },
  };
}

const InsightSingle = async ({ params: { slug, locale } }) => {
  const post = await getPost(slug, locale);
  return (
    <>
      <section className="single-hero">
        <div className="_container">
          <div className="single-hero__body">
            <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          </div>
          <img src={post.thumbnail} />
        </div>
      </section>
      <section className="single-content">
        <div className="_container">
          <article dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      </section>
    </>
  );
};

export default InsightSingle;
