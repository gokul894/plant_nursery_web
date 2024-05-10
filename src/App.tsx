import { RouterProvider } from "react-router-dom"
import router from './utils/Routpath.tsx'


function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App