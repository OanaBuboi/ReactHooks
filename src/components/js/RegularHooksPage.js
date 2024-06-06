import React, {Component} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {AccordionListOne} from './AccordionListOne';
import "../css/PagesStyles.css"; // Import the CSS file

export default class RegularHooksPage extends Component {
    render() {
        return (
            <div className="regular-hooks-container">
                <h1 id="h1Color"> HOOKS </h1>
                <AccordionListOne/>
            </div>
        )
    }
}