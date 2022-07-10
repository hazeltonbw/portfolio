import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 11rem);
  justify-content: center;

  h1 {
    font-size: ${({ theme }) => theme.fsxl};
  }

  a {
    font-size: ${({ theme }) => theme.fsm};
  }
`
