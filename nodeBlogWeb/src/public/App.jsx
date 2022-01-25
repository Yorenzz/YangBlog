import './App.css'
import Login from "../component/login";
import React from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Admin from "../component/admin";


function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<Login/>}/>
                <Route path='/admin' exact element={<Admin/>}/>
            </Routes>
        </Router>
    )
}
// React.render((
//     <Router history={History}>
//         <Route path="/" component={Login}>
//
//         </Route><Route path="admin" component={Admin} />
//     </Router>
// ), document.body)

export default App
