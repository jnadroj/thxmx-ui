const path = require('node:path');

module.exports = {
    framework: '@storybook/react',
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-a11y',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    core: {
        builder: 'storybook-builder-vite',
    },
    features: {
        storyStoreV7: true,
    },
    async viteFinal(config) {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, '../src/'),
        };
        return config;
    },
};
