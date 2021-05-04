import { Link } from "@reach/router";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { darken } from "polished";

const StyledLink = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
  line-height: 1.7;

  &:link,
  &:visited {
    color: white;
  }

  &:hover {
    color: ${darken(0.3, "hotpink")};
  }
`;

export function Header() {
  return (
    <header
      css={css`
        background: hotpink;
        min-height: 100px;
        padding: 20px 0;

        display: flex;
        flex-direction: column;
      `}
    >
      <StyledLink to="/data">data</StyledLink>
      <StyledLink to="/behavior">behavior</StyledLink>
      <StyledLink to="/complex-data">complex</StyledLink>
      <StyledLink to="/optimize">optimization</StyledLink>
      <StyledLink to="/async">async</StyledLink>
    </header>
  );
}
