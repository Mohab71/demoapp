// routes.js
import App from "./App";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  // Define your routes here
  // Example:
    {
        path: "/",
        element: <App />, // Your App component is already rendered in App.js
    },
  // Add additional routes for different pages or functionalities
]);

export default routes;