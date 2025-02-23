import { Lusitana, Allison } from "next/font/google";

export const allison = Allison({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-allison",
});

export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lusitana",
});
