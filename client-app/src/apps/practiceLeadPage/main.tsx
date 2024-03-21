import React, {FunctionComponent} from "react";
import {Button} from "react-bootstrap";
import {PracticeList} from "./components/practiceList";

export const PracticeLead: FunctionComponent = () => {
    return (
        <div className="bg-success vh-100">
            <PracticeList ></PracticeList>
            <Button>Выйти</Button>
        </div>
    )
}