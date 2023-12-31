export const presets = [
    [
        '@babel/preset-env',
        {
            targets: {
                node: 'current'
            }
        }
    ],
    '@babel/preset-typescript'
];
export const plugins = [
    ['module-resolver', {
        alias: {
            "@core": "./src/core",
            "@application": "./src/application",
            "@domain": "./src/domain",
            "@infra": "./src/infra"
        }
    }]
];
export const ignore = [
    '**/*.test.ts'
];