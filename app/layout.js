import { Geist, Geist_Mono, Roboto_Condensed, Oswald,Lato } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--lato-message",
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--heading-font",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} ${lato.variable}`}
    >
      <body>
      
        {children}
       
      </body>
    </html>
  );
}