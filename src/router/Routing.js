import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Create from "../page/Create";
import Update from "../page/Update";

const Routing = () => {
  return (
    <div>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/create" element=<Create /> />
        <Route path="/update" element=<Update /> />
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
};

export default Routing;
