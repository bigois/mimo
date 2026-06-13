import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App"
import {Provider} from "./src/components/ui/provider";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <Provider>
            <App/>
        </Provider>
    </React.StrictMode>
)
