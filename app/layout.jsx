import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jenbrainsMono'
});

export const metadata = {
  title: "Ulugbek Kobulov",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={jetbrainsMono.variable}>
        
        <Header />
        <PageTransition>{children}</PageTransition>

      </body>

    </html>
  );
}