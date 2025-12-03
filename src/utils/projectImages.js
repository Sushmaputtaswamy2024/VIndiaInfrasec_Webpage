// projectImages.js

// Your folder has exactly 38 WEBP images: 1.webp → 38.webp
const files = Array.from({ length: 48 }, (_, i) => `${i + 1}.webp`);

function generateAltText(filename) {
  const name = filename
    .replace(/\.[^/.]+$/, "")
    .replace(/[_-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return `VIndia Infrasec project - ${name} house design and architecture`;
}

export const images = files.map((file) => ({
  src: `/Gallery/${file}`,
  alt: generateAltText(file),
}));
