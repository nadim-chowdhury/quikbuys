import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "QuikBuys",
  description:
    "QuikBuys is a dynamic and user-friendly e-commerce platform designed to streamline online shopping experiences for customers across a diverse range of products. With its intuitive interface and robust features, QuikBuys aims to revolutionize the way people shop online by offering convenience, affordability, and reliability.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header /> {children} <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
