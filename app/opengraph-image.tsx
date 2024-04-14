import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Avas Bajracharya | Portfolio";
export const size = {
  width: 1200,
  height: 630,
};

export const url = "https://avas-portfolio-v2.vercel.app/";
export const type = "website";

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#282C33",
          fontSize: 32,
          fontWeight: 600,
          color: "#fff",
          position: "relative",
        }}
      >
        <h5 style={{ fontSize: "35px", marginBottom: 0 }}>AVAS BAJRACHARYA</h5>
        <h1 style={{ fontSize: "70px", textAlign: "center" }}>
          Welcome to my Awesome Portfolio
        </h1>
        <button
          style={{
            background: "rgb(36, 34, 34)",
            borderRadius: "50px",
            padding: "40px 75px 40px 75px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          View more
        </button>
        <div
          style={{
            width: "360px",
            height: " 360px",
            borderRadius: "50%",
            background:
              "linear-gradient(292deg, rgba(255, 255, 255, 0.5) 0%, rgba(0, 0, 0, 0) 80%)",
            position: "absolute",
            right: 0,
          }}
        />
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
