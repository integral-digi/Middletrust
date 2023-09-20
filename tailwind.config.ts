import type { Config } from 'tailwindcss';

// module.exports = {
//   darkMode: 'media',
//   // ...
// };

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "CircularStd-Medium, sans",
        secondary: "CircularStd-Bold, sans",
        black: "CircularStd-Black, sans",
        book: "CircularStd-Book, sans"
      },
      
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '414px'},
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
};

export default config;