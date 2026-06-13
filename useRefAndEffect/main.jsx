import ReactDOM, {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import {App} from "./components/App";

const root = document.getElementById('root');

if (!root) {
    throw new Error('root element not found');
}

ReactDOM.createRoot(root).render(
    <StrictMode>
        <App />
    </StrictMode>
);