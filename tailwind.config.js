module.exports = {
    purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    mode: 'jit',
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins'],
            },
            minHeight: {
                body: 'calc(100vh - 64px)',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
};
