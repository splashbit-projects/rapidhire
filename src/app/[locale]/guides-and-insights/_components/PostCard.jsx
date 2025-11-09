import React from "react";
import { getPost, getSlugs } from "@/utils/blogUtils";
import {Link} from '@/i18n/navigation'
import ButtonArrow from "@/icons/ButtonArrow";
import { getLocale, getTranslations } from "next-intl/server";

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

const PostCard = async ({ slug }) => {
  const locale = await getLocale();
  const post = await getPost(slug, locale);

  const t = await getTranslations("guidesANdInsights.postCard");

  return (
    <div className="post">
      <Link
        href={`/guides-and-insights/${slug}`}
        className="thumbnail"
        style={{ backgroundImage: `url(${post.thumbnail})` }}
      ></Link>
      <div className="info">
        <div>
          <h2 dangerouslySetInnerHTML={{ __html: post.title }} />
          <p>{post.excerpt}</p>
        </div>
        <Link href={`/guides-and-insights/${slug}`} className="main-button">
          <span>{t("title", {fallback: "Read more"})}</span>
          <ButtonArrow />
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
