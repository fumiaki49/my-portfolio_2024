import { Noto_Sans_JP } from "next/font/google";
import "@/styles/reset.css";
import "@/styles/global.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotoSansJp = Noto_Sans_JP({
  weight: ["400", "700", "900"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kitagawa Fumiaki Portfolio WebSite",
  description: "現職での制作物などをまとめたポートフォリオサイトです。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={NotoSansJp.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
