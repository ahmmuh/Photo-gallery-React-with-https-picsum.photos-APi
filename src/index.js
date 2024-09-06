import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import PhotoList from "./components/PhotoList"
import Start from "./components/Start"
import Loading from "./components/Loading"
import PhotoDetail from "./components/PhotoDetail"
import Menu from "./components/Menu"
import MyWishList from "./components/MyWishList"

const root = ReactDOM.createRoot(document.getElementById("root"))

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
            <Start />
          </Suspense>
        ),
      },
      {
        path: "photos",
        element: (
          <Suspense fallback={<Loading />}>
            <PhotoList />
          </Suspense>
        ),
      },

      {
        path: "photos/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <PhotoDetail />
          </Suspense>
        ),
      },

      {
        path: "mywishList",
        element: (
          <Suspense fallback={<Loading />}>
            <MyWishList />
          </Suspense>
        ),
      },
    ],
  },
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
