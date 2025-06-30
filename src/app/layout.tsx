import Navbar from "@/app/components/navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wibi Laksono Wijaya - Official Website",
  description:
    "A personal website managed by Wibi Laksono Wijaya. Contains portfolio, experiences, and contact information related to the works and professional activities of Wibi Laksono Wijaya.",
  keywords: [
    "Wibi",
    "Wibi Laksono",
    "Wibi Laksono Wijaya",
    "Laksono",
    "Wijaya",
    "Laksono Wijaya",
    "Wibi UGM",
    "Wibi Laksono UGM",
    "Wibi Laksono Wijaya UGM",
    "UGM",
    "Universitas Gadjah Mada",
    "OmahTI",
    "Wibi Laksono Wijaya OmahTI",
    "Wibi OmahTI",
    "OmahTI Learning Center",
    "OmahTI Academy",
  ],
  authors: [{ name: "Wibi Laksono Wijaya" }],
  creator: "Wibi Laksono Wijaya",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Wibi Laksono Wijaya - Official Website",
    description:
      "Explore the portfolio and professional projects of Wibi Laksono Wijaya, a technology enthusiast from Universitas Gadjah Mada.",
    url: "https://wibilaksono.vercel.app",
    siteName: "Wibi Laksono Wijaya",
    type: "website",
    images: [
      {
        url: "https://wibilaksono.vercel.app/bibi.png",
        width: 1200,
        height: 630,
        alt: "Wibi Laksono Wijaya",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  metadataBase: new URL("https://wibilaksono.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Wibi Laksono Wijaya",
              url: "https://wibilaksono.vercel.app",
              image: "https://wibilaksono.vercel.app/bibi.png",
              sameAs: [
                "https://www.linkedin.com/in/wibi-laksono-wijaya-4139672b6",
                "https://github.com/WibiLaksono",
              ],
              jobTitle: "Software Developer",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Universitas Gadjah Mada",
              },
              worksFor: {
                "@type": "Organization",
                name: "OmahTI",
              },
            }),
          }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
