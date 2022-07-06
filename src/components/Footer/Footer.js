import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  padding: 1rem 2rem;
  row-gap: 0.5rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};

  ul {
    list-style-type: none;
    display: inline-flex;
    column-gap: 0.5rem;
  }

  a {
    color: #518dff;
    text-decoration: none;
  }
`;
