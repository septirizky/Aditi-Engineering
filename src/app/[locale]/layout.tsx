import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Whatsapp from "../components/Whatsapp";
import Switcher from "../components/Switcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PT ADITI MULTI KARYA",
  description: "Truk modification 4x4 & 6x6",
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <div className="drawer">
            <input
              id="public-drawer"
              type="checkbox"
              className="drawer-toggle"
            />
            <div className="flex flex-col drawer-content">
              <header className="sticky top-0 z-10 w-full border-b backdrop-blur bg-warning-content">
                <Navbar />
              </header>
              <main>{children}</main>
            </div>
            <Sidebar />
          </div>
          <Footer />
          <Switcher />
          <Whatsapp />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
