import { Head } from "./components/Head";
import { Body } from "./components/Body";
import { Provider } from "react-redux";
import { store } from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainContainer } from "./components/MainContainer";
import { WatchPage } from "./components/WatchPage";
import { SearchResultsPage } from "./components/SearchResultsPage  ";
import { Demo } from "./components/Demo";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body></Body>,
    children: [
      {
        index: true,
        element: <MainContainer></MainContainer>,
      },
      {
        path: "/watch",
        element: <WatchPage></WatchPage>,
      },
      {
        path: "results", // 🔹 New search results page
        element: <SearchResultsPage />,
      },
      {
        path: "demo",
        element: <Demo></Demo>,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <>
        <RouterProvider router={appRouter} />
      </>
    </Provider>
  );
}

export default App;
