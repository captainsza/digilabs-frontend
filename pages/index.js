import Desktop from "./homepage";
import React from "react";
import { useMediaQuery } from "react-responsive";
import Tablet from "./Tablet";
import Mobile from "./Mobile";
export default function Home() {
  const isDesktop = useMediaQuery({ query: "(min-width: 790px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 400px) and (max-width: 790px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 400px)" });

  return (
    <main>
      {isDesktop && <Desktop />}
      {isTablet && <Tablet />}
      {isMobile && <Mobile />}
    </main>
  );
}