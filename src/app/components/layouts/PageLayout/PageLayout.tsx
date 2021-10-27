import { FC, ReactNode } from "react";

export interface PageLayoutProps {
  header?: ReactNode;
  main?: ReactNode;
  footer?: ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ header, main, footer }) => {
  return (
    <>
      <header>{header}</header>
      <main>{main}</main>
      <footer>{footer}</footer>
    </>
  );
};

export default PageLayout;
