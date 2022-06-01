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
      imagesPublicPath: "https://pdp.amurotama.com/_next/static/images/",
    },
  ],
  {
    assetPrefix: "https://pdp.amurotama.com/",
  },
]);
