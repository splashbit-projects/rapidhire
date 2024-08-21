import { Urbanist } from "next/font/google";
import "@/styles/base.scss";
import Footer from "@/global_components/Footer";
import Header from "@/global_components/Header";
import Preloader from "@/global_components/Preloader";
import { PopupsProvider } from "@/context/PopupsContext";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Comprehensive HR Solutions for Your Business | Rapid HR Connect",
    template: "%s",
  },
  description:
    "Discover tailored HR services that empower your business to thrive. Rapid HR Connect offers expert support from recruitment to compliance to meet your unique needs.",
  openGraph: {
    title: {
      default: "Comprehensive HR Solutions for Your Business | Rapid HR Connect",
      template: "%s",
    },
    description:
      "Discover tailored HR services that empower your business to thrive. Rapid HR Connect offers expert support from recruitment to compliance to meet your unique needs.",
    images: "https://rapidhrconnect.com/images/meta.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <PopupsProvider>
          <Preloader />
          <Header />
          <main>{children}</main>
          <Footer />
        </PopupsProvider>
      </body>
    </html>
  );
}
