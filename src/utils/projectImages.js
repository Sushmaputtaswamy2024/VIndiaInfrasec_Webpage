const files = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",

  "Babu vaidyar_modern traditional.jpg",
  "Beena_Kannur_Fusion.jpg",
  "Binoj_spare2.jpg",
  "Chandra_Ctnm_JP.jpg",
  "Deepak_Kannur_MC.jpg",
  "DEEPESH 1080x1080 (2).jpg",
  "Emelia_Dubai_C.jpg",
  "exterior 2 (1).jpg",
  "Faisi_Alappi_KT.jpg",
  "Nasar_calicut_European.jpg",
  "Neil_Kottayam_Modern.jpg",
  "option_07_001.jpg",
  "Prasad_Trichur_Fusion.jpg",
  "Rajesh_Kannur_KT.jpg",
  "Ram left view (1).jpg",
  "Ram_Contem.jpg",
  "Ramees malappuram_spare.jpg",
  "Ramees_Malappuram_Futuristic.jpg",
  "Saswat.jpg",
  "SKETCH VS CONCEPT 2.jpg",
  "SKETCH VS CONCEPT.jpg",
  "Vindia proj.jpg",
  "VINDIA_VEEDU-ADVT_08022021B-social-media-Options5-1.jpg",
];

function generateAltText(filename) {
  let name = filename
    .replace(/\.[^/.]+$/, "")
    .replace(/[_-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return `VIndia Infrasec project - ${name} house design and architecture`;
}

// FINAL EXPORT — THIS IS THE FIX
export const images = files.map((file) => ({
  src: encodeURI(`/Gallery/${file}`),   // ⭐ FIX: Incredibly important
  alt: generateAltText(file),
}));
