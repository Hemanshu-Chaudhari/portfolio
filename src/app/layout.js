import "./globals.css";
import Providers from "@/components/ThemeProvider";

export const metadata = {
  title: "Hemanshu Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}