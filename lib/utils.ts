// lib/utils.ts

import { siteUrl } from "@/data/site";

export function absoluteUrl(path: string) {
  return `${siteUrl}${path}`;
}