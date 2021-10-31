import { Wrapper, Content, LoginButton } from "./styles";

export const Main = () => {
  return (
    <Wrapper>
      <Content>
        <LoginButton bg="#e50f36">
          <span>Login with google</span>
        </LoginButton>
      </Content>
    </Wrapper>
  );
};
