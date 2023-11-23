import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const poppins = Poppins({
  variable: "--poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export const neonFont = localFont({
  variable: "--neon",
  src: [
    {
      path: "./MonaspaceNeon-Light.woff",
      weight: "300",
      style: "normal"
    },
    {
      path: "./MonaspaceNeon-Regular.woff",
      weight: "400",
      style: "normal"
    },
    {
      path: "./MonaspaceNeon-Medium.woff",
      weight: "500",
      style: "normal"
    },
    {
      path: "./MonaspaceNeon-SemiBold.woff",
      weight: "600",
      style: "normal"
    },
    {
      path: "./MonaspaceNeon-Bold.woff",
      weight: "700",
      style: "normal"
    }
  ]
});

export const xenonFont = localFont({
  variable: "--xenon",
  src: [
    {
      path: "./MonaspaceXenon-Light.woff",
      weight: "300",
      style: "normal"
    },
    {
      path: "./MonaspaceXenon-Regular.woff",
      weight: "400",
      style: "normal"
    },
    {
      path: "./MonaspaceXenon-Medium.woff",
      weight: "500",
      style: "normal"
    },
    {
      path: "./MonaspaceXenon-SemiBold.woff",
      weight: "600",
      style: "normal"
    },
    {
      path: "./MonaspaceXenon-Bold.woff",
      weight: "700",
      style: "normal"
    }
  ]
});
