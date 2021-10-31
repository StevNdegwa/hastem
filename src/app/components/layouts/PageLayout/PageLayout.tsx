import { FC, ReactNode } from "react";
import { Wrapper, Header, Main, Footer } from "./styles";

export interface PageLayoutProps {
  header?: ReactNode;
  main?: ReactNode;
  footer?: ReactNode;
}

export const PageLayout: FC<PageLayoutProps> = ({ header, main, footer }) => {
  return (
    <Wrapper>
      <Header>{header}</Header>
      <Main>{main}</Main>
      <Footer>{footer}</Footer>
    </Wrapper>
  );
};
