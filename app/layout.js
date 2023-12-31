import "./globals.css";
import Providers from "./Providers";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F8FAFF]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
