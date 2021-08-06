import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  a {
    color: ${props => props.theme.colors.text};
  }
  #login .form-input {
    background-color: ${props => props.theme.colors.backgroundColor};
  }
  #login .form-body {
    background-color: ${props => props.theme.colors.divBackground};
  }
  body {
    background: ${props => props.theme.colors.background};
    font-size: 14px;
    color: ${props => props.theme.colors.text};
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
  }
`;