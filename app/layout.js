import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "My portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-Fira bg-primary text-textColor">{children}</body>
    </html>
  );
}
