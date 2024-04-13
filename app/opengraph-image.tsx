import { ImageResponse } from "next/og";
import { Fira_Code } from "next/font/google";

// Image metadata
export const alt = "Avas Bajracharya | Portfolio";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#282C33",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h2 style={{ fontSize: "48px" }}>Avas Bajracharya</h2>
          <p style={{ fontSize: "24px" }}>Welcome to my profile</p>
        </div>
        <img src="/assets/about-img.png" alt="Person" />
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
