// src/utils/completedProjects.js

const completedProjects = Array.from(
  { length: 15 },
  (_, i) => `/completedProjects/${i + 1}.webp`
);

export default completedProjects;
