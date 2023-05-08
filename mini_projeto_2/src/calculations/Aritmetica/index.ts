const decimalBinario = (decimal: number) => {
    return (decimal >>> 0).toString(2);
  };
  
  const binarioDecimal = (binary: string) => {
    return parseInt(binary, 2);
  };
  
  const decimalOcta = (decimal: number) => {
    return (decimal >>> 0).toString(8);
  };
  
  const octaDecimal = (octal: string) => {
    return parseInt(octal, 8);
  };
  
  const decimalHexadecimal = (decimal: number) => {
    return (decimal >>> 0).toString(16).toUpperCase();
  };
  
  const hexadecimalDecimal = (hexadecimal: string) => {
    return parseInt(hexadecimal, 16);
  };
  
  export { decimalBinario, binarioDecimal, decimalOcta, octaDecimal, decimalHexadecimal, hexadecimalDecimal };