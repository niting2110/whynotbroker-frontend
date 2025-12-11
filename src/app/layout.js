import './assets/css/tailwind.css'
import './assets/css/materialdesignicons.min.css'

import {League_Spartan } from 'next/font/google'

const league_Spartan = League_Spartan({ 
  subsets: ['latin'] ,
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-league_Spartan",
})

export const metadata = {
  title: 'WhyNotBroker - Next Js Property Portal Landing & Admin Dashboard Template',
  description: 'WhyNotBroker - Next Js Property Portal Landing & Admin Dashboard Template',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light scroll-smooth" dir="ltr">
      <body className={`${league_Spartan.className} dark:bg-slate-900`}>{children}</body>
    </html>
  );
}

