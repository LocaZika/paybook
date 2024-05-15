/**
 * 
 * @param {number} value Set value to convert
 * @returns {string} Converted value
 */
export const toCurrency = (value: number): string => {
  const vnd = new Intl.NumberFormat('VN-vn', {
    style: 'currency',
    currency: 'vnd',
  });
  return vnd.format(value * 1000).replace(/₫/g, '');
}