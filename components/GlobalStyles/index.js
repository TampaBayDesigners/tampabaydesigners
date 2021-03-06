import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
 
export const GlobalStyle = createGlobalStyle`
  ${normalize}
  :root {
    --black: ${({ theme }) => theme.colors.black};
    --white: ${({ theme }) => theme.colors.white};
    --gray900: ${({ theme }) => theme.colors.gray900};
    --gray800: ${({ theme }) => theme.colors.gray800};
    --gray700: ${({ theme }) => theme.colors.gray700};
    --gray600: ${({ theme }) => theme.colors.gray600};
    --gray500: ${({ theme }) => theme.colors.gray500};
    --gray400: ${({ theme }) => theme.colors.gray400};
    --gray300: ${({ theme }) => theme.colors.gray300};
    --gray200: ${({ theme }) => theme.colors.gray200};
    --gray100: ${({ theme }) => theme.colors.gray100};
    --red: ${({ theme }) => theme.colors.red};
    --orange: ${({ theme }) => theme.colors.orange};
    --yellow: ${({ theme }) => theme.colors.yellow};
    --green: ${({ theme }) => theme.colors.green};
    --blue: ${({ theme }) => theme.colors.blue};
    --purple: ${({ theme }) => theme.colors.purple};
    --pink: ${({ theme }) => theme.colors.pink};
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *,*:before,*:after {
    box-sizing: inherit;
  }

  html, body {
    width: 100%;
    height: 100%;
  }
`