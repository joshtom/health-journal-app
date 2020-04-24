/** Cache all the files in the build directory */
// module.exports = {
//   "globDirectory": "build/",
//   "globPatterns": [
//     "**/*.{jpg,svg,html,js,css}"
//   ],
//   "swDest": "build/sw.js",
//   "swSrc": "src/sw.js"
// };

// Caching only the files in homepage to make it only available when offline 
module.exports = {
  "globDirectory": "build/",
  "globPatterns": [
    "**/*.css",
    "**/*.scss",
    "js/script.js",
    "index.html",
    "manifest.webmanifest",
    "images/*.png",
    "images/*.svg",
    "pages/offline.html"
    // "images/.svg",
  ],
  "swSrc": "src/sw.js",
  "swDest": "build/sw.js",
  "globIgnores": [
    "../workbox-config.js"
  ]
};