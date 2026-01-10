const projectImages = import.meta.glob(
  "/public/Gallery/*.webp",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

export default Object.values(projectImages);
