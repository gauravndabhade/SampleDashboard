import React, { Component } from "react";
import ReactDom from "react-dom";
import Bar from './Bar';
import Line from './Line';
import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <div className="row col-sm-12">
                        <div className="col-sm-6">
                            <Line />
                        </div>
                        <div className="col-sm-6">
                            <Bar/>
                        </div>
                    </div>
                </div>
            </Provider>
        )
    }
}

ReactDom.render(<App />, document.getElementById("app"));