import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import MainPage from '../pages/MainPage';
import MainWrapper from '../layouts/MainWrapper';
import Logout from '../pages/Logout';
import {Header} from "../components/header/Header";
import Login from "../pages/Login";
import UniversityList from "../components/universityList/UniversityList";
import UniversityPage from "../pages/universityPage/UniversityPage";

function RoutesComponent() {
    return (
        <BrowserRouter>
            <MainWrapper>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/logout" element={<Logout/>} />

                    <Route path="/universities/:universityId" element={<UniversityPage />} />
                    <Route path="/universitylist" element={<UniversityList />} />

                </Routes>
            </MainWrapper>
        </BrowserRouter>
    );
}


export default RoutesComponent;