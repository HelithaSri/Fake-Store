import NavBar from "../component/common/NavBar";

import {Route, Routes} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import LoginAdmin from "../pages/session/Login";
import Register from "../pages/Register";

function App() {
    return (<>
            <NavBar/>
            <Routes>
                <Route path="/" element={<LoginAdmin/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </>

    );
}

export default App;
