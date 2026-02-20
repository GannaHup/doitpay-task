/**
 * Convert a HEX color to RGB.
 * @param hex - The HEX color string (e.g., "#ffffff" or "#fff").
 * @returns A tuple representing the RGB values.
 */
function hexToRgb(hex: string): [number, number, number] {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((x) => x + x)
      .join("");
  }
  const num = parseInt(hex, 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

/**
 * Parse a color input (HEX or RGB array) into an RGB tuple.
 * @param color - The color as a HEX string or an RGB tuple.
 * @returns An RGB tuple.
 */
function parseColor(
  color: string | [number, number, number]
): [number, number, number] {
  return typeof color === "string" ? hexToRgb(color) : color;
}

/**
 * Calculate the relative luminance of a color.
 * @param rgb - The RGB tuple.
 * @returns The relative luminance value.
 */
function luminance([r, g, b]: [number, number, number]): number {
  const a = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

/**
 * Calculate the contrast ratio between two colors.
 * @param color1 - The first color (HEX string or RGB tuple).
 * @param color2 - The second color (HEX string or RGB tuple).
 * @returns The contrast ratio.
 */
export function contrastRatio(
  color1: string | [number, number, number],
  color2: string | [number, number, number]
): number {
  const lum1 = luminance(parseColor(color1));
  const lum2 = luminance(parseColor(color2));
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return parseFloat(((brightest + 0.05) / (darkest + 0.05)).toFixed(2));
}
