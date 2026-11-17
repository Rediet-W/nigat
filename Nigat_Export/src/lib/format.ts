/** Zero-padded index used for numbered lists ("01", "02", …). */
export function formatIndex(index: number): string {
  return String(index + 1).padStart(2, "0");
}
