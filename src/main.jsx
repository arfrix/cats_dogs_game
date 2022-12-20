import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./pages/Welcome";
import "./index.css";
import Game from "./pages/Game";
import Result from "./pages/Result";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Welcome />,
	},
	{
		path: "/game",
		element: <Game />,
	},
	{
		path: "/result",
		element: <Result />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
