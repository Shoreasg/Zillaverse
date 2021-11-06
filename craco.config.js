const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#29ccc4',
            '@component-background': '#036f7d',
            '@icon-color-hover': '#ffffff',
            '@text-color': '#f8f4f4',
            '@border-color-base': '#29ccc4',
            '@border-color-split': '#29ccc4',
            '@layout-body-background': '#036f7d',
            '@layout-header-background': '#036f7d',
            '@menu-dark-submenu-bg': '#299197'},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};