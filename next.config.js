/*
    source: 
    https://github.com/Alrefai/next-calorie/commit/f958be38988eb5d64360e8d17b37ec3a1cc79b47
*/

const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD
} = require("next/constants");

// Fixes npm packages that depend on `fs` module
const nextConfig = {
  webpack: config => ({ ...config, node: { fs: "empty" } })
};

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    const withCSS = require("@zeit/next-css");
    return withCSS(nextConfig);
  }
  return nextConfig;
};

// const withCSS = require("@zeit/next-css");
// module.exports = withCSS({});
