import { PageLayout } from "../../layouts";
import { Main } from "./Main";
import { Header } from "./Header";

export const Login = () => {
  return <PageLayout main={<Main />} header={<Header />} />;
};
