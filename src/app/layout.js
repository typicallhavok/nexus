import "./globals.css";

export const metadata = {
  title: "Nexus",
  description: "Nexus is a community-driven platform for learning and sharing knowledge.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
