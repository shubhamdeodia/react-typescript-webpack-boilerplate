module.exports = (api) => {
    // cache the result of babel config execution funtion for dev builds for faster builds
    api.cache.using(() => process.env.NODE_ENV === 'development');
    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    useBuiltIns: 'usage',
                    corejs: {
                        version: 3,
                        proposals: true
                    }
                }
            ],
            [
                '@babel/preset-react',
                {
                    runtime: 'automatic',
                    development: process.env.NODE_ENV === 'development'
                }
            ],
            '@babel/preset-typescript'
        ],
        plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-syntax-dynamic-import'
        ],
        env: {
            // Some performance optimization plugins for react
            production: {
                only: ['src'],
                plugins: [
                    // Replaces React.createElement() with a helper that is more optimized for production.
                    '@babel/plugin-transform-react-inline-elements',
                    // Hoist elements that can be marked as constant to the highest scope for reuse.
                    '@babel/plugin-transform-react-constant-elements'
                ]
            }
        }
    };
};
