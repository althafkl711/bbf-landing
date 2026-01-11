import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import "./globals.css";

export const metadata = {
  title: "Bread and Book Foundation",
  description: "Nourishing children's lives through food and education. Join us to build brighter futures today.",
  keywords: ["charity", "education", "food", "children", "india", "non-profit"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`antialiased bg-background text-foreground flex flex-col min-h-screen font-sans`}
      >
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        {/* <ContactCTA /> */}
        <Footer />
      </body>
    </html>
  );
}
