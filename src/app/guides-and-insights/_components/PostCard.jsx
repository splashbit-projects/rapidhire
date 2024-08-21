import React from "react";
import { getPost, getSlugs } from "@/utils/blogUtils";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";

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

const PostCard = async ({ slug, locale }) => {
  const post = await getPost(slug, locale);
  //console.log(post);

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
          <span>Read more</span>
          <ButtonArrow />
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
