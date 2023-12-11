const expect = require("chai").expect;
const converter = require("../src/converter.js");


//Testing converter output
describe("RGB to Hex conversion", () => {
    it("converts inputed HEX to RGB", () => {
        const redHex = converter.ConvertRGBtoHex(255, 0, 0);
        const greenHex = converter.ConvertRGBtoHex(0, 255, 0);
        const blueHex = converter.ConvertRGBtoHex(0, 0, 255);

        expect(redHex).to.equal("#ff0000");
        expect(greenHex).to.equal("#00ff00");
        expect(blueHex).to.equal("#0000ff");
    });
    it("should convert a valid hex color to RGB", () => {
        const result = converter.hexToRgb("#ff0000");
        expect(result).to.deep.equal({r: 255, g: 0, b: 0});
    });

    it("should return null for an invalid hex color", () => {
        const result = converter.hexToRgb("invalidhex");
        expect(result).to.be.null;
    });
});

describe("Testing hexTORgb function", () => {
    it("should convert #ff0000 to { r: 255, g: 0, b: 0 }", () => {
        const result = converter.hexToRgb("#ff0000");
        expect(result).to.deep.equal({r: 255, g: 0, b: 0});
    });

    it("should convert #00ff00 to { r: 0, g: 255, b: 0 }", () => {
        const result = converter.hexToRgb("#00ff00");
        expect(result).to.deep.equal({r: 0, g: 255, b: 0});
    });

    it("should convert #0000ff to { r: 0, g: 0, b: 255 }", () => {
        const result = converter.hexToRgb("#0000ff");
        expect(result).to.deep.equal({r: 0, g: 0, b: 255});
    });

    //  Test cases for different valid hex inputs

    it("should handle uppercase hex input (#AABBCC) correctly", () => {
        const result = converter.hexToRgb("#AABBCC");
        expect(result).to.deep.equal({r: 170, g: 187, b: 204});
    });
    it("should return null for invalid hex input", () => {
        const result = converter.hexToRgb("invalidhex");
        expect(result).to.be.null;
    });
});

describe("RGB to CMYK conversion", () => {
    it("should convert RGB to CMYK correctly", () => {
        const result = converter.rgbToCmyk(255, 0, 0); // Example RGB values
        expect(result).to.deep.equal({c: 0, m: 1, y: 1, k: 0}); // Expected CMYK result
    });
    it("should convert black (0, 0, 0) to CMYK correctly", () => {
        expect(converter.rgbToCmyk(0, 0, 0)).to.deep.equal({c: 0, m: 0, y: 0, k: 1});
    });

    it("should convert white (255, 255, 255) to CMYK correctly", () => {
        expect(converter.rgbToCmyk(255, 255, 255)).to.deep.equal({c: 0, m: 0, y: 0, k: 0});
    });
    it("should convert red (255, 0, 0) to CMYK correctly", () => {
        expect(converter.rgbToCmyk(255, 0, 0)).to.deep.equal({c: 0, m: 1, y: 1, k: 0});
    });
    it("should convert green (0, 255, 0) to CMYK correctly", () => {
        expect(converter.rgbToCmyk(0, 255, 0)).to.deep.equal({c: 1, m: 0, y: 1, k: 0});
    });
    it("should convert blue (0, 0, 255) to CMYK correctly", () => {
        expect(converter.rgbToCmyk(0, 0, 255)).to.deep.equal({c: 1, m: 1, y: 0, k: 0});
    });
    it("should convert yellow (255, 255, 0) to CMYK correctly", () => {
        expect(converter.rgbToCmyk(255, 255, 0)).to.deep.equal({c: 0, m: 0, y: 1, k: 0});
    });
    it("should convert magenta (255, 0, 255) to CMYK correctly", () => {
        expect(converter.rgbToCmyk(255, 0, 255)).to.deep.equal({c: 0, m: 1, y: 0, k: 0});
    });
    it("should convert cyan (0, 255, 255) to CMYK correctly", () => {
        expect(converter.rgbToCmyk(0, 255, 255)).to.deep.equal({c: 1, m: 0, y: 0, k: 0});
    });
});

describe("CMYK to RGB conversion", () => {
    it("should convert CMYK to RGB correctly", () => {
        const result = converter.cmykToRgb(0, 1, 1, 0); // Example CMYK values
        expect(result).to.deep.equal({r: 255, g: 0, b: 0}); // Expected RGB result
    });
    it("should convert CMYK (0, 0, 0, 1) to black RGB correctly", () => {
        expect(converter.cmykToRgb(0, 0, 0, 1)).to.deep.equal({r: 0, g: 0, b: 0});
    });

    it("should convert CMYK (0, 0, 0, 0) to white RGB correctly", () => {
        expect(converter.cmykToRgb(0, 0, 0, 0)).to.deep.equal({r: 255, g: 255, b: 255});
    });
    it("should convert CMYK (0, 1, 1, 0) to red RGB correctly", () => {
        expect(converter.cmykToRgb(0, 1, 1, 0)).to.deep.equal({r: 255, g: 0, b: 0});
    });
    it("should convert CMYK (1, 0, 1, 0) to green RGB correctly", () => {
        expect(converter.cmykToRgb(1, 0, 1, 0)).to.deep.equal({r: 0, g: 255, b: 0});
    });
    it("should convert CMYK (1, 1, 0, 0) to blue RGB correctly", () => {
        expect(converter.cmykToRgb(1, 1, 0, 0)).to.deep.equal({r: 0, g: 0, b: 255});
    });
    it("should convert CMYK (0, 0, 1, 0) to yellow RGB correctly", () => {
        expect(converter.cmykToRgb(0, 0, 1, 0)).to.deep.equal({r: 255, g: 255, b: 0});
    });
    it("should convert CMYK (0, 1, 0, 0) to magenta RGB correctly", () => {
        expect(converter.cmykToRgb(0, 1, 0, 0)).to.deep.equal({r: 255, g: 0, b: 255});
    });
    it("should convert CMYK (1, 0, 0, 0) to cyan RGB correctly", () => {
        expect(converter.cmykToRgb(1, 0, 0, 0)).to.deep.equal({r: 0, g: 255, b: 255});
    });
});

