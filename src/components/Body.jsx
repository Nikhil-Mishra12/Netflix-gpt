
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Video from './Video'

export default function Body() {

  
const router=createBrowserRouter([
    {
        path:'/',
        element:<Login/>,
    },
    {
        path:'/browse',
        element:<Browse/>,
    },
    {
      path:"/video/:id",
      element:<Video/>
    }
])
  



  return (
    <div>
<RouterProvider router={router}/>
</div>
  )
}

