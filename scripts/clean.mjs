import { rmSync, existsSync } from "node:fs"

const targets = ["node_modules", ".next"]

for (const dir of targets) {
  if (!existsSync(dir)) continue
  try {
    rmSync(dir, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 })
    console.log(`Removed ${dir}`)
  } catch (err) {
    console.error(`Failed to remove ${dir}:`, err.message)
    console.error(
      "Close VS Code/Cursor terminals using this folder, then run: npm run clean",
    )
    process.exit(1)
  }
}
