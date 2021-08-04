import Routes from "./Routes";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePeristedState from './Utils/usePersistedState'

import light from './Styles/Themes/light';
import dark from './Styles/Themes/dark';

import GlobalStyle from './Styles/global';
import Header from './Components/Header';

const App = () => {
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="Navbar">
          <GlobalStyle />
          <Header toggleTheme={toggleTheme} />
        </div>
      </ThemeProvider>
      <Routes />
    </>
  );
}

export default App;
