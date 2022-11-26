import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-n0668qin6dw4ri5i.us.auth0.com"
    clientId="ZGD6MQLZHbhSLTBmzOqlvyJWiCF8KEsG"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);