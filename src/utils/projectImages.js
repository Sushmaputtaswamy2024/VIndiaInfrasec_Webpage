// src/utils/projectImages.js

const files = Array.from({ length: 48 }, (_, i) => `${i + 1}.webp`);

const projectImages = files.map((file) => `/Gallery/${file}`);

export default projectImages;
