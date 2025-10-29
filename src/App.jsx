import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import ShopPage from "./Pages/ShopPage/ShopPage";



function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path = "/" element = {<Home />}></Route>
        <Route path = "/home" element = {<Home />}></Route>
        <Route path = "/shoppage/:slug/:shopId" element = {<ShopPage />}></Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
