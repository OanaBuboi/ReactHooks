import React, {Component} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import {Link} from "@mui/material";

export default class Main extends Component {
    render() {
        return (
            <div className="carousel-container">
                <Carousel showThumbs={false}>
                    <div style={{height: "800px", width: "1550px"}}>
                        <img src="https://www.freecodecamp.org/news/content/images/2021/10/g199.png" alt="Introduction to React Hooks"/>
                        <Link href={"/UsualHooks"}>
                            <p style={{
                                fontFamily: "Copperplate Gothic Light",
                                background: '#690b9c',
                                fontSize: 30,
                                bottom: '675px'
                            }} className="legend">How to use React Hooks</p>
                        </Link>
                    </div>
                    <div style={{height: "800px", width: "1550px"}}>
                        <img src="https://miro.medium.com/v2/resize:fit:1400/1*E3e_YdRFw6hee4PdhSHGww.png"
                             alt="Custom React Hooks"/>
                        <Link href={"/CustomHooks"}>
                            <p style={{
                                fontFamily: "Copperplate Gothic Light",
                                background: '#690b9c',
                                fontSize: 30,
                                bottom: '675px'
                            }} className="legend">How to customize React hooks</p>
                        </Link>
                    </div>
                </Carousel>
            </div>
        )
    }
}