import { lazy } from "react"
const routes = [
  {
    path: "/",
    element: lazy(() => import("@/views/Main"))
  }
]

export default routes