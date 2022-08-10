import {Route, Routes} from "react-router-dom";
import Product from "../pages/Product";
import LoginAdmin from "../pages/session/Login";
import Dashboard from "../pages/Dashboard";
import Cart from "../pages/Cart";
import Register from "../pages/Register";
import NavBar from "../component/common/NavBar";

function App() {
    return (<>
            <NavBar/>
            <Routes>
                <Route exact path="/" element={<LoginAdmin/>}/>

                {/*<Route exact path="/" element={<LoginAdmin/>}/>*/}
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </>

    );
}

export default App;
