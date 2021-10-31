import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
`;

export const Content = styled.div`
width:400px;
height:300px;
padding: 1rem;
border-radius: 15px;
box-shadow: 0px 0px 4px 2px #bfbfbf, 0px 0px 4px 15px #f7f7f7;
border-top: 10px solid #1ea1ff;
`;

export const LoginButton = styled.button`
${({ bg }: { bg: string }) => css`
display:block;
width:100%;
height:3rem;
border: none;
border-radius: 15px;
font-weight:600;
font-size:1.1rem;
color:${bg};
background-color: currentColor;
box-shadow:none;
transition:box-shadow 0.5s;
&:hover{
  box-shadow: 0px 0px 4px currentColor;
}
&>span{
  color:white;
}
`}
`;