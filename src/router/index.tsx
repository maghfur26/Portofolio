import { createBrowserRouter } from "react-router-dom";
import HomePages from "../pages/HomePages";
import MainLayout from "../layout/mainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <HomePages />,
      },
    ],
  },
]);

export default router;
