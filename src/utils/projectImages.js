const projectImages = import.meta.glob(
  "/public/Gallery/*.webp",
  { eager: true, as: "url" }
);

export default Object.values(projectImages);
