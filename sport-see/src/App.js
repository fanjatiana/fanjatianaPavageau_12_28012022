import { BrowserRouter } from "react-router-dom";
import Header from "./containers/Header";
import LoginPage from "./pages/LoginPage";
import Router from "./router/Router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
