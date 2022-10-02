const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./resources/**/*.blade.php', './vendor/filament/**/*.blade.php'],
    theme: {
        extend: {
            colors: {
                danger: colors.rose,
                "primary": {
                    "50": "#67e752",
                    "100": "#5ddd48",
                    "200": "#53d33e",
                    "300": "#49c934",
                    "400": "#3fbf2a",
                    "500": "#35b520",
                    "600": "#2bab16",
                    "700": "#21a10c",
                    "800": "#179702",
                    "900": "#0d8d00"
                },
                success: colors.green,
                warning: colors.yellow,
            },
        },
    },
    plugins: [
        require('flowbite/plugin'), 
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography')
    ],
}
