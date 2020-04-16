export function formatNum(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const cfr = (d, c) => Number(d / c) * 100;
