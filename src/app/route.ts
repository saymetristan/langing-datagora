import { readFileSync } from "node:fs";
import { join } from "node:path";

export const dynamic = "force-static";

export function GET() {
  const portada = readFileSync(
    join(process.cwd(), "src", "app", "portada.html"),
    "utf8",
  );

  return new Response(portada, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
