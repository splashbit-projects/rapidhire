import { readdir, readFile } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";
import { join } from "node:path";

export async function getPost(slug, locale) {
  let fileSlug = slug;
  if (locale === "it") {
    fileSlug = `IT-${slug}`;
  } else if (locale === "de") {
    fileSlug = `DE-${slug}`;
  } else if (locale === 'zh') {
    fileSlug = `ZH-${slug}`;
  }

  // `./src/lib/blog/${fileSlug}.md`, "utf8"
  const text = await readFile(join(process.cwd(), 'src/lib/blog', `${fileSlug}.md` ), 'utf8');
  const {
    content,
    data: { title, excerpt, seo_title, seo_description, thumbnail },
  } = matter(text);
  const body = marked(content);
  return {
    slug: fileSlug,
    title,
    excerpt,
    seo_title,
    seo_description,
    thumbnail,
    body,
  };
}

export async function getSlugs() {
  const files = await readdir(join(process.cwd(), 'src/lib/blog'));
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}

export async function getPage(slug, locale) {
  let fileSlug = slug;
  if (locale === "it") {
    fileSlug = `IT-${slug}`;
  } else if (locale === "de") {
    fileSlug = `DE-${slug}`;
  } else if (locale === 'zh') {
    fileSlug = `ZH-${slug}`;
  }

  const text = await readFile(join(process.cwd(), 'src/lib/policies', `${fileSlug}.md` ), 'utf8');
  const {
    content,
    data: { title, date },
  } = matter(text);
  const body = marked(content);
  return { slug: fileSlug, title, date, body };
}

export async function getPageSlugs() {
  const files = await readdir(join(process.cwd(), 'src/lib/policies'));
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}
