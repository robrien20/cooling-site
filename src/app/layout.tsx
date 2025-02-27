// src/app/layout.tsx
import "../../styles/globals.css"; // Adjust path if needed

export const metadata = {
  title: "COOLBLADE",
  description: "CoolBlade Immersion Cooling",
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