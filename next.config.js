const path = require('path')
const withImages = require('next-images')
const withFonts = require('next-fonts');

module.exports = withFonts({
  enableSvg: true,
  webpack(config, options) {
    return config;
  }
});

module.exports = {
  future: {
    webpack5: true
  }
}

module.exports = {
  images: {
    domains: ['mapstore.vn'],
  },
}

// https://github.com/twopluszero/next-images/blob/master/index.js
module.exports = ({ dynamicAssetPrefix = false, nextConfig = {} } = {}) => {
  return Object.assign({}, nextConfig, {
    // serverRuntimeConfig: {
    //   APP_NAME: process.env.APP_NAME, 
    // },
    // publicRuntimeConfig: {
    //   APP_NAME: process.env.APP_NAME
    // },
    publicRuntimeConfig: dynamicAssetPrefix
      ? Object.assign({}, nextConfig.publicRuntimeConfig, {
        nextImagesAssetPrefix: nextConfig.assetPrefix
      })
      : nextConfig.publicRuntimeConfig,
    webpack(config, options) {
      const { isServer } = options;
      nextConfig = Object.assign({
        inlineImageLimit: 8192,
        assetPrefix: "",
        basePath: "",
        fileExtensions: ["jpg", "jpeg", "png", "svg", "gif", "ico", "webp", "jp2", "avif"],
      }, nextConfig);

      if (!options.defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
        )
      }

      config.module.rules.push({
        test: new RegExp(`\.(${nextConfig.fileExtensions.join('|')})$`),
        // Next.js already handles url() in css/sass/scss files
        issuer: /\.\w+(?<!(s?c|sa)ss|eot)$/i,
        exclude: nextConfig.exclude,
        use: [
          {
            loader: require.resolve("url-loader"),
            options: {
              limit: nextConfig.inlineImageLimit,
              fallback: require.resolve("file-loader"),
              publicPath: `${nextConfig.assetPrefix || nextConfig.basePath}/_next/static/images/`,
              outputPath: `${isServer ? "../" : ""}static/images/`,
              postTransformPublicPath: (p) => {
                if (dynamicAssetPrefix && !nextConfig.assetPrefix) {
                  return `(require("next/config").default().publicRuntimeConfig.nextImagesAssetPrefix || '') + ${p}`
                }
                return p
              },
              name: "[name]-[hash].[ext]",
              esModule: nextConfig.esModule || false
            }
          }
        ]
      });

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  })
}

module.exports = {
  async rewrites() {
    return [
      // Sitemap
      {
        source: '/sitemap.xml',
        destination: '/sitemap',
      },
      {
        source: '/about-us',
        destination: '/about',
      },
      // Path Matching - will match `/post/a` but not `/post/a/b`
      {
        source: '/thong-tin-cong-ty/:slug',
        destination: '/about-us/:slug',
      },
      // Wildcard Path Matching - will match `/blog/a` and `/blog/a/b`
      {
        source: '/blog/:slug*',
        destination: '/news/:slug*',
      },
      // nhóm địa điểm
      {
        source: '/nhom-dia-diem/:slug',
        destination: '/places/:slug',
      },
      // Danh sach loai dia diem
      {
        source: '/loai-dia-diem',
        destination: '/category-group',
      },
      {
        source: '/loai-dia-diem/:slug',
        destination: '/category-group/:slug',
      },

    ]
  },
}
// SiteMap
