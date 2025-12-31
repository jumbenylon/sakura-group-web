import "./globals.css";
export const metadata = {
  title: "Sakura Group",
  description: "Engineering the modern world — Sakura Group Holdings",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
