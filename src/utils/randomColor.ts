export const getHslColor = (): string => `hsl(${Math.random() * 360}, 60%, 60%)`;
export const getHexColor = (): string => `#${(0x1000000 + Math.random() * 0xffffff).toString(16).substring(1, 6)}`;
const randomColor = {
  getRandomHslColor: getHslColor,
  getRandomHexColor: getHexColor,
}
export default randomColor;