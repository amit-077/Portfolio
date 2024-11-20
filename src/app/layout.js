"use client";

import { ChakraProvider } from "@chakra-ui/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta
          name="description"
          content="Explore the dynamic portfolio of Amit Kamat, showcasing expertise in web and app development. 
          Engage with captivating projects and innovative solutions. 
          Connect for collaborations and let's bring your digital vision to reality with Amit Kamat."
        />
        <meta
          name="keywords"
          content="Amit Kamat, Amit Kamat Portfolio, Amit, Amit Kamat CV, Amit Kamat Developer, Amit Developer, Amit Vercel Portfolio, amit kamat, amit kamat portfolio, amit kamat developer, ameet kamat"
        />
        <meta name="author" content="Amit Kamat" />

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        ></link>
        <script
          src="https://kit.fontawesome.com/7911e70227.js"
          crossOrigin="anonymous"
        ></script>
        <link rel="stylesheet" href="styles.css"></link>
        <title>Amit&apos;s Portfolio</title>
        <link rel="icon" type="image/x-icon" href="/images/Logo4.png"></link>

        <script defer data-domain="amitkamat.vercel.app" src="http://localhost/js/script.js"></script>
          {
            (window.plausible =
              window.plausible ||
              function () {
                " ";
              })
          }
          {(window.plausible.q = window.plausible.q || []).push(arguments)}
        </script>
      </head>
      <body style={{ overflowX: "hidden" }}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
