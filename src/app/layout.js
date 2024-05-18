import { Inter } from "next/font/google";
import "./globals.css";
import "./globalicons.css"
import Image from "next/image";
import BgImage from "../../public/Assets/TasteQuestBackgroundImage.jpg";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Khana-Khajana",
  description: "Best in the Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Image
          src={BgImage}
          alt="Background Image"
          style={{
            width: "100vw",
            height: "100vh",
            position: "fixed",
            filter: "blur(60px)",
            zIndex: -1,
          }}
        />
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
