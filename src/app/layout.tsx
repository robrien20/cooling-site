// src/app/layout.tsx
import "../../styles/globals.css"; // Adjust path if needed

export const metadata = {
  title: "Data Center Site",
  description: "Data Center Site built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}