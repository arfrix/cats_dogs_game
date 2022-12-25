import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
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
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);
