import "./globals.css";
import Script from "next/script";


export const metadata = {
  title: "PB - Generador de texto",
  description: "Text generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://kit.fontawesome.com/c875c1bf00.js"
          crossorigin="anonymous"
        ></Script>
      </body>
    </html>
  );
}
