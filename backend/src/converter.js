function ConvertRGBtoHex(red, green, blue) {
    if (
        Number.isInteger(red) && Number.isInteger(green) && Number.isInteger(blue) &&
        red >= 0 && red <= 255 && green >= 0 && green <= 255 && blue >= 0 && blue <= 255
    ) {
        const hex = `#${(1 << 24 | red << 16 | green << 8 | blue).toString(16).slice(1)}`;


        return hex;
    } else {
        throw new Error('Invalid RGB values. Each value should be an integer between 0 and 255.');
    }
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function rgbToCmyk(r, g, b) {
    if (r === 0 && g === 0 && b === 0) {
        return {c: 0, m: 0, y: 0, k: 1};
    }
    let c = 1 - (r / 255);
    let m = 1 - (g / 255);
    let y = 1 - (b / 255);
    let minCmy = Math.min(c, Math.min(m, y));
    return {
        c: (c - minCmy) / (1 - minCmy),
        m: (m - minCmy) / (1 - minCmy),
        y: (y - minCmy) / (1 - minCmy),
        k: minCmy
    };
}

function cmykToRgb(c, m, y, k) {
    let r = 255 * (1 - c) * (1 - k);
    let g = 255 * (1 - m) * (1 - k);
    let b = 255 * (1 - y) * (1 - k);
    return {r: Math.round(r), g: Math.round(g), b: Math.round(b)};
}


module.exports = {
    ConvertRGBtoHex: ConvertRGBtoHex,
    hexToRgb: hexToRgb,
    rgbToCmyk: rgbToCmyk,
    cmykToRgb: cmykToRgb
}
