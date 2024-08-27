import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                index: true,
                element: <div>Hello world!</div>
            },
            {
                path: "/new",
                element: <div>New</div>
            }
        ]
    },
])

const AppRouter = () => {
    return <RouterProvider router={router} />
};

export default AppRouter;