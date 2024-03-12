import React, {useState} from "react";
import {useServerInsertedHTML} from "next/navigation";
import {ServerStyleSheet, StyleSheetManager} from "styled-components";

interface StyledRegistryProps {
  children: React.ReactNode;
}

export const StyledRegistry: React.FC<StyledRegistryProps> = ({children}) => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") return <>{children}</>;
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
};
