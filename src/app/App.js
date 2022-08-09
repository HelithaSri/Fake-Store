import NavBar from "../component/common/NavBar";

import {Route, Routes} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Product from "../pages/Product";
import Cart from "../pages/Cart";

function App() {
    return (<>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/cart" element={<Cart/>}/>

            </Routes>
        </>

    );
}

export default App;
