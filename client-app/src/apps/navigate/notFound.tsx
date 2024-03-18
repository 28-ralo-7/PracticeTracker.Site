import React, {FunctionComponent} from "react";
import {RouteProps} from "react-router";
export const NotFound: FunctionComponent<RouteProps> = (props) => {
    return (
        <div className="bg-success container-fluid vh-100 justify-content-center align-items-center row">
            <label className="text-white text-center text fs-1">Страница не найдена</label>
        </div>
    );
}