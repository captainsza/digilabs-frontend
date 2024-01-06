import Desktop from "./homepage";
import React from "react";
import { useMediaQuery } from "react-responsive";
import Tablet from "./Tablet";
import Mobile from "./Mobile";
import XLDesktop from "./XLdesktopsrn";
export default function Home() {
  const isXLDesktop = useMediaQuery({ query: "(min-width: 1600px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 790px) and (max-width: 1600px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 400px) and (max-width: 790px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 400px)" });

  return (
    <main>
      {isDesktop && <Desktop />}
      {isTablet && <Tablet />}
      {isMobile && <Mobile />}
      {isXLDesktop && <XLDesktop/>}
    </main>
  );
}