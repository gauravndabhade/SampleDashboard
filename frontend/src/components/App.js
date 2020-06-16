import React, { Component } from "react";
import ReactDom from "react-dom";
import NavBar from './common/NavBar';
import { Provider } from "react-redux";
import store from "../store";
import Dashboard from "./dashboard/Dashboard";


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <NavBar />
                <Dashboard />
            </Provider>
        )
    }
}

ReactDom.render(<App />, document.getElementById("app"));