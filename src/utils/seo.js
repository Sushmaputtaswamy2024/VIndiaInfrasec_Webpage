export function setSEO({
  title,
  description,
  keywords,
  image,
  url,
}) {
  document.title = title;

  const setMeta = (name, content) => {
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", name);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
  };

  const setProperty = (property, content) => {
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("property", property);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
  };

  // Basic SEO
  if (description) setMeta("description", description);
  if (keywords) setMeta("keywords", keywords);

  // Open Graph
  if (title) setProperty("og:title", title);
  if (description) setProperty("og:description", description);
  if (image) setProperty("og:image", image);
  if (url) setProperty("og:url", url);

  // Twitter
  if (title) setMeta("twitter:title", title);
  if (description) setMeta("twitter:description", description);
  if (image) setMeta("twitter:image", image);
}
