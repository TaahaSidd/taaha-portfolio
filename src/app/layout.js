import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Taaha Sidd | Full Stack Developer",
    description: "Architecting production-ready systems using Java Spring Boot and React Native.",
    metadataBase: new URL('https://taahasiddportfolio.netlify.app'),
    icons: {
        icon: [
            {url: '/Favicon.jpg'},
        ],
        apple: [
            {url: '/Favicon.jpg'},
        ],
    },
    openGraph: {
        title: "Taaha Sidd | Full Stack Developer",
        description: "Architecting production-ready systems using Java Spring Boot and React Native.",
        url: 'https://taahasiddportfolio.netlify.app',
        siteName: 'Taaha Sidd Portfolio',
        images: [
            {
                url: '/Favicon.jpg',
                width: 1200,
                height: 630,
                alt: 'Taaha Sidd Portfolio Preview',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}