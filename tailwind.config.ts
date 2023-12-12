import type { Config } from 'tailwindcss';
import colors from './src/styles/colors';

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors,
            // backgroundImage: {
            //     'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            //     'gradient-conic':
            //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            // },
        },
    },
    plugins: [],
}
export default config
