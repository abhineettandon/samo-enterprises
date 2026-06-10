import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { GranitePage } from "./components/GranitePage";
import { MarblePage } from "./components/MarblePage";
import { TilesPage } from "./components/TilesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "granite", Component: GranitePage },
      { path: "marble", Component: MarblePage },
      { path: "tiles", Component: TilesPage },
    ],
  },
]);
