import Head from "next/head";
import "./globals.css";

import localFont from 'next/font/local'

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: './PressStart2P-Regular.ttf',
  display: 'swap',
})


export const metadata = {
  title: "Soham Sangole | Portfolio",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myFont.className}>
      <body>{children}</body>
    </html>
  )
}
