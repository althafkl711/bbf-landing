import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import "./globals.css";

export const metadata = {
  title: "Bread and Book Foundation",
  description: "The Bread and Book Foundation is dedicated to uplifting India's most vulnerable communities. We nourish children's lives through food and education. Our core philosophy is: No Child Should Choose Between Bread and Book.",
  keywords: [
    "charity", "Bread and Book", "Bread & Book","education", "food", "children", "india", "non-profit",
    "NGO", "child welfare", "hunger relief", "literacy", "donations",
    "social impact", "community development", "Kerala charity", "volunteer",
    "Bread and Book Foundation", "poverty alleviation", "bread and book foundation", "bread & book foundation", ""
  ],
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
