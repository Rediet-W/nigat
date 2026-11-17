/** Staggered `data-wow-delay` value used by the template's grids: 0, 0.2s, 0.4s… */
export function wowDelay(index: number, step = 0.2): string | undefined {
  if (index <= 0) return undefined;
  return `${Number((index * step).toFixed(2))}s`;
}
