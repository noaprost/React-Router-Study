import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import NotFound from "./pages/NotFound";
import Root from "./pages/Root";
import VideoDetail from "./pages/VideoDetail";

// Navbar를 클릭 했을 때 Outlet안에 보여주기를 원한다면 해당 경로를 자식 경로에 표기해줘야 함
// index가 true라는 것은 최상위 경로에서 기본적으로 보여주는 페이지라는 의미
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/videos",
        element: <Videos />,
      },
      {
        path: "/videos/:videoId",
        element: <VideoDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}>App</RouterProvider>;
}

export default App;
