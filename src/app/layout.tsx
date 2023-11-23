import type { Metadata } from "next";
import { FC } from "react";

import { neonFont, xenonFont } from "~/assets/fonts";
import { clsx } from "~/utils/styles";

import "./globals.css";

export const metadata: Metadata = {
  title: "Exchange Rate",
  description: "Exchange rate app"
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={clsx(neonFont.variable, xenonFont.variable)}>{children}</body>
    </html>
  );
};

export default RootLayout;
