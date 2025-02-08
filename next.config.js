// next.config.js
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
  });
  
  module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    experimental: {
      esmExternals: 'loose',  // ESM 外部モジュールを「loose」モードで扱う
    },
  });
  