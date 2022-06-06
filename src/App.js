import "./App.css";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import Main from "./Layouts/Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContextProvider } from "./context";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <ContextProvider>
        <Main />
      </ContextProvider>
      <Footer />
    </div>
  );
}

export default App;
