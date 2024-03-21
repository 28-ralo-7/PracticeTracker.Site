import React, {FunctionComponent} from "react";
import {RouteProps} from "react-router";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {AuthorizationLinks, InfrastructureLinks, PracticeLeadLinks} from "../../common/links";
import {Auth} from "../authentication/components/auth";
import {NotFound} from "./notFound";
import {PracticeLead} from "../practiceLeadPage/main";

export const NavigateContainer: FunctionComponent<RouteProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={AuthorizationLinks.auth} Component={Auth}/>
                <Route path={PracticeLeadLinks.index} Component={PracticeLead}/>
                <Route path={InfrastructureLinks.notFound} Component={NotFound}/>
                <Route path="*" element={<Navigate to="/NotFound" replace />}/>
            </Routes>
        </BrowserRouter>
    );
}