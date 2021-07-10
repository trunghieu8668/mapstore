"use strict";

module.exports = {
  mode: 'jit',
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true
  },
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1920px'
      },
      colors: {
        primary: 'var(--color1)'
      },
      textColor: {
        base: 'var(--bs-gray-dark)'
      }
    }
  }
};