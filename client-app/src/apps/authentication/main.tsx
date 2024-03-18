import React from 'react';
import {FunctionComponent} from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {AuthorizationLinks} from "../../common/links";
import {Auth} from "./components/auth";
import Test from "./components/test";

export const AuthApp: FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={AuthorizationLinks.auth} Component={Auth}/>
                <Route path={AuthorizationLinks.test} Component={Test}/>
            </Routes>
        </BrowserRouter>
    )
}