import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const standaloneDir = join(root, ".next", "standalone");

if (!existsSync(standaloneDir)) {
  console.warn("Standalone output was not found. Skipping asset copy.");
  process.exit(0);
}

const copies = [
  [join(root, "public"), join(standaloneDir, "public")],
  [join(root, ".next", "static"), join(standaloneDir, ".next", "static")],
];

for (const [source, destination] of copies) {
  if (!existsSync(source)) {
    continue;
  }

  mkdirSync(dirname(destination), { recursive: true });
  rmSync(destination, { recursive: true, force: true });
  cpSync(source, destination, { recursive: true });
}
