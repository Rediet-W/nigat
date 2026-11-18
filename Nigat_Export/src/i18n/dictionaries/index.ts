import type { Locale } from "../config";
import { am } from "./am";
import { en, type Dictionary } from "./en";

export type { Dictionary };

export const DICTIONARIES: Record<Locale, Dictionary> = { en, am };

export { fill } from "../fill";
