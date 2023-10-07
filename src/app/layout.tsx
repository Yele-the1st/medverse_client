import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/Toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900", "300", "200", "100"],
  variable: "--font-Poppins",
}); // Use Poppins font

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-slate-900 antialiased", poppins.className)}
    >
      <body className={"min-h-screen bg-white antialiased "}>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
