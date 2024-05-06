import { IoIosArrowDown } from "react-icons/io";
import './App.css';
import Header from "./component/Header";
import Home from "./view/Home";

function App() {
  return (
<div className="flex flex-col">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
