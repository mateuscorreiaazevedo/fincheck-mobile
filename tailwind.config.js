import { colors } from './src/assets/styles/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.tsx'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        300: 'DMSans_300Light',
        400: 'DMSans_400Regular',
        500: 'DMSans_500Medium',
        600: 'DMSans_600SemiBold',
        700: 'DMSans_700Bold',
      },
      colors,
    },
  },
  plugins: [],
};
