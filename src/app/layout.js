import './assets/css/tailwind.css'
import './assets/css/materialdesignicons.min.css'

import Script from "next/script";
import { League_Spartan } from 'next/font/google'

const league_Spartan = League_Spartan({ 
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-league_Spartan",
})

export const metadata = {
  title: 'WhyNotBroker - Karnataka Property Portal',
  description: 'Verified listings, trusted brokers, and smart property search across Karnataka.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light scroll-smooth" dir="ltr">

      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5DNLMTS2');
          `}
        </Script>
      </head>

      <body className={`${league_Spartan.className} dark:bg-slate-900`}>
        
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-5DNLMTS2"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
      </body>
    </html>
  );
}
