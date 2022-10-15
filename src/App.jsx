
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Form from "./components/Form"
import Login from "./components/Login"
import Main from "./components/Main"
export default function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main />,
      children:[
  {path:"/register",
    element:<Form />
  },
    {path:"/login",
    element:<Login />
  }
      ]
    }

  
  ])




  return (
    <div>

    <RouterProvider router={router}></RouterProvider>

    </div>
  )
}
