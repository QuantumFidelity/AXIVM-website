const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["three"]);

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' ${
    process.env.NODE_ENV == "development"
      ? "'unsafe-eval' 'unsafe-inline' "
      : ""
  };
  child-src 'self';
  style-src 'self' 'unsafe-inline' *.googleapis.com;
  img-src 'self' blob: data:;
  media-src 'self';
  connect-src *;
  font-src 'self' blob: data: fonts.gstatic.com maxcdn.bootstrapcdn.com;
  worker-src 'self' blob:;
`;

const securityHeaders = () => {
  const headers = [
    {
      key: "X-DNS-Prefetch-Control",
      value: "on",
    },
    {
      key: "Strict-Transport-Security",
      value: "max-age=63072000; includeSubDomains; preload",
    },
    {
      key: "X-XSS-Protection",
      value: "1; mode=block",
    },
    {
      key: "X-Frame-Options",
      value: "SAMEORIGIN",
    },
    {
      key: "Permissions-Policy",
      value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
    },
    {
      key: "X-Content-Type-Options",
      value: "nosniff",
    },
    {
      key: "Referrer-Policy",
      value: "strict-origin-when-cross-origin",
    },
    {
      key: "Content-Security-Policy",
      value: ContentSecurityPolicy.replace(/\n/g, ""),
    },
  ];
  return headers;
};

const config = {
  output: 'export',  // Add this for static export
  images: {
    unoptimized: true,  // Required for static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '/AXIVM-website' : '',  // Add this for GitHub Pages
  compiler: {
    styledComponents: true,
  },
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ENVIRONMENT_ID: process.env.CONTENTFUL_ENVIRONMENT_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders(),
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/mac",
        destination: "/api/download/mac",
      },
      {
        source: "/windows",
        destination: "/api/download/windows",
      },
    ];
  },
  reactStrictMode: true,
};

module.exports = withPlugins([withTM], config);
