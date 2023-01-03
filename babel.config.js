// @generated: @expo/next-adapter@3.1.9
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#shared-steps

module.exports = {
    presets: ["laravel/babel"],
    plugins: [
        [
            "styled-components",
            {
                ssr: true,
                displayName: true,
                preprocess: false,
            },
        ],
    ],
};
