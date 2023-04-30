import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Create from "../page/Create";
import Update from "../page/Update";
import { useRecoilValue } from "recoil";
import { userState } from "../store";
import Detail from "../page/Detail";

const Routing = () => {
  const user = useRecoilValue(userState);
  // console.log(user);
  return (
    <div>
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/create" element=<Create /> />
        <Route path="/detail/:id" element=<Detail /> />
        <Route path={"/edit/:id" + user.id} element=<Update /> />
      </Routes>
    </div>
  );
};

export default Routing;
