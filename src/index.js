//const validator = require("validator");
//import validator from "validator";
//console.log(validator.isEmail("john@gmail.com"));
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./css/circle-animation.css";

/*
Loader: Pre procesor - Translate code to code for browser
Required Babel - as Loader. Translate sintaxis <App/>  that is a token not reconized by webpack.

Warnning: 
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders

 ReactDOM.render( < App / > , document.getElementById("root"));
*/

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
