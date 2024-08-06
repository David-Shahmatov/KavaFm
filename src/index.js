import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals.js";
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
    <Router basename="/KavaFm">
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    </Router>,
    document.getElementById("root")
);

reportWebVitals();
