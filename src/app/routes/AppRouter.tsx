import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import Billiards from "../../pages/Billiards/ui/Billiards.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                index: true,
                element: <Billiards />
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