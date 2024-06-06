import React, {Component} from "react";
import Header from './Header'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from "./Main";
import NotFound from './NotFound';
import RegularHooksPage from './RegularHooksPage'
import CustomHooksPage from './CustomHooksPage'

export default class Container extends Component {
    render() {
        return (
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/UsualHooks" element={<RegularHooksPage/>}/>
                    <Route path="/CustomHooks" element={<CustomHooksPage/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Router>
        )
    }
}
