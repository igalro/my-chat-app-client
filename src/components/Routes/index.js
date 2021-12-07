import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from "../Auth/LoginPage";
import RegisterPage from "../Auth/RegisterPage";
import ChatPage from "../Pages/ChatPage";
import RegistrationSuccess from "../Pages/RegistrationSuccess";

const AppRoutes = ({setToken}) => {

    return(
        <Router>
            <Routes>
                <Route exact element={<LoginPage setToken={setToken}/>} />
                <Route exact path="/register" element={<RegisterPage/>} />
                <Route exact path="/chat/:userId" element={<ChatPage/>}/>
                <Route exact path="/success" element={<RegistrationSuccess/>} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;