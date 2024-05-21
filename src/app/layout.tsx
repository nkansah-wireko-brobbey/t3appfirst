import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import { GeistSans } from "geist/font/sans";
import TopNav from "~/components/TopNav";

export const metadata = {
  title: "Doolo Maashe",
  description: "This is test application for my application gallery",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <ClerkProvider>
    
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TopNav/>
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
