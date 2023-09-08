import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router";
import { Provider } from "react-redux";
import { Store } from "./store";
import { ThemeProvider } from "styled-components";
import { theme } from './style/theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={Store}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
