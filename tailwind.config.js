module.exports = {
    content: [
        "./index.html"
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@vue-interface/variant/tailwindcss'),
        require('@vue-interface/btn/tailwindcss'),
        require('@vue-interface/progress-bar/tailwindcss'),
    ],
    safelist: [
        ...require('@vue-interface/variant/tailwindcss/safelist')(),
        ...require('@vue-interface/btn/tailwindcss/safelist')(),
        ...require('@vue-interface/progress-bar/tailwindcss/safelist')(),
    ]
};