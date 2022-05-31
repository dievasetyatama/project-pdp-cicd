const withPlugins = require("next-compose-plugins");
module.exports = withPlugins([
  [
    {
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        speed: 3,
        strip: true,
        verbose: true,
      },
      imagesPublicPath: "/project-pdp-cicd/_next/static/images/",
    },
  ],
  {
    basePath: "https://pdp.amurotama.com",
    assetPrefix: "https://pdp.amurotama.com/",
  },
]);
