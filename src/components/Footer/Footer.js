import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  padding: 2rem 2rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.footerBackgroundColor};

  ul {
    list-style-type: none;
    display: inline-flex;
    gap: 10px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
