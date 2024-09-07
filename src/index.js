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
import WishListProvider from "./context/WishListProvider"

const root = ReactDOM.createRoot(document.getElementById("root"))

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    ),

    children: [
      {
        index: true,
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

      {
        path: "menu",
        element: (
          <Suspense fallback={<Loading />}>
            <Menu />
          </Suspense>
        ),
      },
    ],
  },
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <WishListProvider />
    </RouterProvider>
  </React.StrictMode>
)
