# Marinahramtsova

A Node.js module for color spectrum manipulation.

## Installation

You can install this module using npm: `npm install marinahramtsova`

## Usage
```javascript
const spectrumUtils = require('spectrum-utils');

// Generate a random color
const randomColor = spectrumUtils.generateRandomColor();
console.log('Random color:', randomColor);

// Lighten a color
const originalColor = '#FF5733'; // Example color
const lightenedColor = spectrumUtils.lightenColor(originalColor, 0.3);
console.log('Lightened color:', lightenedColor);

// Darken a color
const darkenedColor = spectrumUtils.darkenColor(originalColor, 0.2);
console.log('Darkened color:', darkenedColor);
```

