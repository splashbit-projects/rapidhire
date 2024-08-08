import { Urbanist } from "next/font/google";
import "@/styles/base.scss";
import Footer from "@/global_components/Footer";
import Header from "@/global_components/Header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Rapidhire",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
