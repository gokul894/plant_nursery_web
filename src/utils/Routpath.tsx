import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layouts from "./Layouts.tsx";
import Home from "../components/Main/Home.tsx";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layouts/>}>
            <Route path="" element={<Home/>} />
        </Route>
    )
)

export default router