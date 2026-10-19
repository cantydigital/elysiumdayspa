import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Elysium Day Spa — unhurried massage, facials and body rituals in Paddington, Sydney";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const font = (file: string) => readFile(join(process.cwd(), "assets/fonts", file));

export default async function OpengraphImage() {
  const [serif, serifItalic, sans] = await Promise.all([
    font("CormorantGaramond-Medium.ttf"),
    font("CormorantGaramond-MediumItalic.ttf"),
    font("Figtree-Medium.ttf"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at 78% 18%, #3a4e46 0%, #23352f 45%, #0f1a16 100%)",
          color: "#eef0ec",
          fontFamily: "Figtree",
        }}
      >
        {/* Inner frame */}
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 28,
            right: 28,
            bottom: 28,
            border: "1px solid rgba(210, 178, 122, 0.35)",
            borderRadius: 24,
          }}
        />

        {/* Lotus mark, matching app/icon.svg */}
        <svg width="112" height="112" viewBox="8 8 48 48">
          <g fill="#d2b27a" stroke="#23352f" strokeWidth="2.5" strokeLinejoin="round">
            <path d="M32 47C21 47 11 39 10 25c9 1 17 7 22 22z" />
            <path d="M32 47c11 0 21-8 22-22c-9 1-17 7-22 22z" />
            <path d="M32 10c-9 9-10 27 0 37c10-10 9-28 0-37z" />
          </g>
          <rect x="17" y="51" width="30" height="3" rx="1.5" fill="#d2b27a" opacity="0.6" />
        </svg>

        <div
          style={{
            marginTop: 28,
            fontFamily: "Cormorant",
            fontSize: 132,
            letterSpacing: "0.12em",
            lineHeight: 1,
            paddingLeft: "0.12em",
          }}
        >
          ELYSIUM
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 24,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "#d2b27a",
          }}
        >
          Day Spa · Paddington, Sydney
        </div>
        <div
          style={{
            marginTop: 40,
            fontFamily: "Cormorant",
            fontStyle: "italic",
            fontSize: 40,
            color: "#c9d3cc",
          }}
        >
          Your time out starts here.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Cormorant", data: serif, style: "normal", weight: 500 },
        { name: "Cormorant", data: serifItalic, style: "italic", weight: 500 },
        { name: "Figtree", data: sans, style: "normal", weight: 500 },
      ],
    },
  );
}
