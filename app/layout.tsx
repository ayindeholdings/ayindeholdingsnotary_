import "./globals.css";

export const metadata = {
  title: "AyindeHoldings Notary Services",
  description: "Mobile notary services in Gainesville, Florida.",
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
