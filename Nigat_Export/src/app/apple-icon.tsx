import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon: the official Nigat mark centred on the linen background. */
export default async function AppleIcon() {
  const logo = await readFile(join(process.cwd(), "public/images/logo.png"), "base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#eff1e6",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- rendered to PNG by ImageResponse */}
        <img src={`data:image/png;base64,${logo}`} width={140} height={84} alt="" />
      </div>
    ),
    size,
  );
}
