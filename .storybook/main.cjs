const AutoImport = require('unplugin-auto-import/vite')
const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  viteFinal: async (config) => {
    config.plugins.push(AutoImport({
      imports: ['react', 'react-router-dom'],
      dts: true,
      eslintrc: {
        enabled: true,
      },
    }))
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, "../src/"),
    };
    return config;
  }
}