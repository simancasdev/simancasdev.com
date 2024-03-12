import "../styles/globals.css";
import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import {Body, Html, Layout, Main} from "./_home/styles";
import {Mail, Nav, StyledRegistry} from "@/src/components";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600"],
  preload: false,
});

export const metadata: Metadata = {
  title: "simancasdev",
  description: "Simancasdev website",
  keywords: ["software developer", "react", "next", "create app"],
  authors: {
    name: "Héctor Simancas",
    url: "https://www.linkedin.com/in/simancasdev/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Html lang="en">
      <Body className={poppins.className}>
        <StyledRegistry>
          <Layout>
            <div />
            <Main>
              <Nav />
              {children}
            </Main>
            {/* 🌎 global components */}
            <Mail />
          </Layout>
        </StyledRegistry>
      </Body>
    </Html>
  );
}
