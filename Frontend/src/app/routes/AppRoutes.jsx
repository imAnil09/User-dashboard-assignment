import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";

import { ROUTES } from "../constants/routes";
import {
    UserDetailsPage,
    UsersDashboardPage,
} from "../../features/users";

const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <Navigate to={ROUTES.USERS} replace />,
    },
    {
        path: ROUTES.USERS,
        element: <UsersDashboardPage />,
    },
    {
        path: ROUTES.USER_DETAILS,
        element: <UserDetailsPage />,
    },
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;