import React from 'react';
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
           {/* Primary Meta Tags */}
            <title>Muhammad Zaheer - Data Scientist</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Muhammad Zaheer Portfolio - Computer Engineering Student" />
            <meta name="description"
                content="Muhammad Zaheer's (zaheerh4ck3r) Personal Portfolio Website. Made with kali linux (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="author" content="Muhammad Zaheer (zaheerh4ck3r)" />
            <meta name="keywords"
                content="zaheerh4ck3r, zaheerh4ck3r's portfolio, zaheerh4ck3r linux, kali linux portfolio, Muhammad Zaheer protfolio,Muhammad Zaheer computer, Muhammad Zaheer, kali linux, Muhammad Zaheer kali linux portfolio" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            {/* Search Engine */}
            <meta name="image" content="images/logos/fevicon.png" />
            {/* Schema.org for Google */}
            <meta itemProp="name" content="Muhammad Zaheer Portfolio - Computer Engineering Student" />
            <meta itemProp="description"
                content="Muhammad Zaheer's (zaheerh4ck3r) Personal Portfolio Website. Made with kali linux (Linux) theme by Next.js and Tailwind CSS." />
            <meta itemProp="image" content="images/logos/fevicon.png" />
            {/* Twitter */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Muhammad Zaheer Portfolio - Computer Engineering Student" />
            <meta name="twitter:description"
                content="Muhammad Zaheer's (zaheerh4ck3r) Personal Portfolio Website. Made with kali linux (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="twitter:site" content="zaheerh4ck3r" />
            <meta name="twitter:creator" content="zaheerh4ck3r" />
            <meta name="twitter:image:src" content="images/logos/logo_1024.png" />
            {/* Open Graph general (Facebook, Pinterest & Google+) */}
            <meta name="og:title" content="Muhammad Zaheer Portfolio - Computer Engineering Student" />
            <meta name="og:description"
                content="Muhammad Zaheer's (zaheerh4ck3r) Personal Portfolio Website. Made with kali linux (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="og:image" content="images/logos/logo_1200.png" />
            <meta name="og:url" content="http://zaheerh4ck3r.github.io/" />
            <meta name="og:site_name" content="Muhammad Zaheer Personal Portfolio" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/kali_linux.png" />
            <link rel="apple-touch-icon" href="images/logos/logo.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    );
}
