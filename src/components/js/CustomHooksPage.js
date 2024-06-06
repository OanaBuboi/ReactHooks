import React, {Component} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {AccordionListTwo} from "./AccordionListTwo";

export default class CustomHooksPage extends Component {
    render() {
        return (
            <div className="special-hooks-container">
                <h1 id="h1Color"> CUSTOM HOOKS </h1>
                <AccordionListTwo/>
            </div>
        )
    }
}