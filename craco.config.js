const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#29ccc4',
              '@body-background': '#242828',
              '@component-background': '#242828',
              '@icon-color-hover': '#29ccc4',
              '@heading-color': '#29ccc4',
              '@text-color': '#29ccc4',
              '@text-color-secondary': '#29ccc4',
              '@text-color-dark': '#29ccc4',
              '@text-color-secondary-dark': '#29ccc4',
              '@text-selection-bg': '#29ccc4',
              '@layout-body-background': '#242828',
              '@layout-header-background': '#242828',
              '@layout-trigger-background': '#242828',
              '@layout-trigger-color': '#29ccc4',
              '@menu-bg': '#242828',
              '@menu-popup-bg': '#242828',
              '@menu-item-color': '@primary-color',
              '@menu-item-active-bg': '#036F7D',
              '@menu-item-group-title-color': '@primary-color',
              '@table-header-bg': '#036F7D',
              '@table-header-color': '#242828',
              '@table-body-sort-bg': '#036f7d',
              '@table-row-hover-bg': '#036F7D',
              '@table-selected-row-color': '#036F7D',
              '@table-selected-row-bg': '#036f7d',
              '@table-expanded-row-bg': '#036f7d',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};