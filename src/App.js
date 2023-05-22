import React from "react";
import {Route, Routes, Link, NavLink} from "react-router-dom";
import Home from "./pages/Home";
import NonFound from "./pages/NonFound";
import {BookRoutes} from "./BookRoutes";
import { useRoutes } from "react-router-dom";


function App() {
    // let element = useRoutes([
    //     {
    //         path: "/",
    //         element: <Home/>,
    //     } ,
    //     {
    //         path: "/books/*",
    //         element: <BookRoutes/>,
    //     },
    //     {
    //         path: "*",
    //         element: <NonFound/>,
    //     }
    // ]);
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink style={({isActive})=> { return isActive ? {color: 'red'} : {}}} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/books">Books</NavLink>
                    </li>
                </ul>
            </nav>
            {/*{element}*/}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books/*" element={<BookRoutes />}/>
                <Route path="*" element={<NonFound />} />
            </Routes>
        </>
    );
}

export default App;
