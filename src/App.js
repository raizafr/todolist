import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Routing from "./router/Routing";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Navbar />
          <Routing />
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
