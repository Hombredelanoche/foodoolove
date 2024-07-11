import "@/styles/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "FoodooLove",
    template: "%s | FoodooLove",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-auto w-full min-h-screen">
        <Header />
        <section className="md:max-w-3xl p-4 mx-auto">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
