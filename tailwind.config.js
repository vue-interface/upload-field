module.exports = {
    purge: false,
    corePlugins: {
        container: false,
    },
    plugins: [
        ...require('@vue-interface/form-control/tailwindcss'),
    ]
};