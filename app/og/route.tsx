import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const hasTitle = searchParams.has("title");
    const postTitle = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Blog";
    return new ImageResponse(
      (
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
          <h5 style={{ fontSize: "16px", marginBottom: 0 }}>
            AVAS BAJRACHARYA
          </h5>
          <h1 style={{ fontSize: "70px", textAlign: "center" }}>{postTitle}</h1>
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
      {
        width: 1200,
        height: 600,
      }
    );
  } catch (error: any) {
    console.log(`${error.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
