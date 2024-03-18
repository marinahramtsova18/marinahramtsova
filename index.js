// spectrum-utils.js

const chroma = require('chroma-js');

// Function to generate a random color
function generateRandomColor() {
    return chroma.random().hex();
}

// Function to lighten a color
function lightenColor(color, amount) {
    return chroma(color).brighten(amount).hex();
}

// Function to darken a color
function darkenColor(color, amount) {
    return chroma(color).darken(amount).hex();
}

module.exports = {
    generateRandomColor,
    lightenColor,
    darkenColor
};
