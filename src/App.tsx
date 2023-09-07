import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router";
import { Provider } from "react-redux";
import { Store } from "./store";
import { useEffect } from "react";
import { checkingAutentication } from "./store/auth";

function App() {
  
  useEffect(() => {
    const result = checkingAutentication();
    console.log(result);
  }, [])
  
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
