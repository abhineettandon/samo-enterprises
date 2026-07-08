import { createBrowserRouter } from "react-router";
import { Layout } from "./Layout";
import { Home } from "./pages/Home";
import { GranitePage } from "./pages/GranitePage";
import { MarblePage } from "./pages/MarblePage";
import { TilesPage } from "./pages/TilesPage";
import { AboutPage } from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "granite", Component: GranitePage },
      { path: "marble", Component: MarblePage },
      { path: "tiles", Component: TilesPage },
      {path: 'about', Component: AboutPage}
    ],
  },
]);
