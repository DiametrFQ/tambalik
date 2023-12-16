export default null;

export const hexDec = (hex_color: string): [number, number, number] => {
  const arr: [number, number, number] = hex_color
    .slice(1)
    .split("")
    .map((val, i, arr) => (i % 2 === 0 ? +parseInt(val + arr[i + 1], 16) : -1))
    .filter((val) => val !== -1) as [number, number, number];
  return arr;
};

export const getCoord = (radius: number): [number, number] => {
  // Генерируем случайный угол в радианах
  const angle = Math.random() * 2 * Math.PI;

  // Вычисляем радиус для точки внутри круга
  const r = Math.sqrt(Math.random()) * radius;

  // Вычисляем координаты точки
  const x = r * Math.cos(angle);
  const y = r * Math.sin(angle);

  return [x + radius, (y + radius) / 2];
};
