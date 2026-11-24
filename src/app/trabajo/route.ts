import { readFileSync } from "node:fs";
import { join } from "node:path";

export const dynamic = "force-static";

export function GET() {
  const portafolio = readFileSync(
    join(process.cwd(), "src", "app", "trabajo", "portafolio.html"),
    "utf8",
  );

  return new Response(portafolio, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
