import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        loader: () => fetch('http://localhost:5000/')
    },
]);

export default router;