import "./globals.css";

export const metadata = {
  title: "BEN KISONGO | Développeur Full Stack",
  description: "Portfolio",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

