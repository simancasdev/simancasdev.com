import "./globals.css";
import {Fragment} from "react";
import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import {Layout, Main} from "./_home/styles";
import {Nav, StyledRegistry} from "@/src/components";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StyledRegistry>
          <Layout>
            <Fragment /> {/**<-- TODO: add user component */}
            <Main>
              <Nav />
              {children}
            </Main>
          </Layout>
        </StyledRegistry>
      </body>
    </html>
  );
}