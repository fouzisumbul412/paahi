import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ui/ThemeProvider";
import { Toaster } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Paahi Productions",
  description: "A Premium Visual Production Studio in Bangalore",
  icons: {
    icon: "/paahi-favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MZ7XRKSR');
            `,
          }}
        />
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
        {/* End Google Tag Manager */}
      </head>

      <body className="antialiased font-serif">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MZ7XRKSR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          <Navbar />
          <div className="md:hidden fixed bottom-5 right-5 z-[120]">
            <Link href={"tel:+918296669344"}>
            <Button size="icon" className="text-lg p-4 rounded-full bg-gray-200/80">
              <span className="flex items-center gap-2">
                <PhoneCall /> 
              </span>
            </Button>
            </Link>
          </div>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
