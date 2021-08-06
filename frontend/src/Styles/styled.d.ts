import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      divBackground: string;
      backgroundColor: string
      background: string;
      text: string;
    }
  }
}