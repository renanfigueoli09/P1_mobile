const grausparaRaio = (graus:number) => {
    return (graus * Math.PI) / 180;
  };
  const sin = (graus:number) => {
    return Math.sin(grausparaRaio(graus)).toFixed(6);
  };
  const cos = (graus:number) => {
    return Math.cos(grausparaRaio(graus)).toFixed(6);
  };
  const tan = (graus:number) => {
    return Math.tan(grausparaRaio(graus)).toFixed(6);
  };
  export { sin, cos, tan };