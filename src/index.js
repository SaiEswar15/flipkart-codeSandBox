import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {Provider } from "react-redux";
import store from "./Store/Store"
import App from "./App";
import {RouterProvider} from "react-router-dom";
import router from "./Router/Router";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  
  
  
  <Provider store = {store}>
    <RouterProvider router = {router}>
      <StrictMode>
        <App />
      </StrictMode>
    </RouterProvider>
  </Provider>
  
  
  
);
