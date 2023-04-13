import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Tv from "../pages/Tv";
import Movies from "../pages/Movies";

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout />} >
        <Route index element={<Home />} />
        <Route path="tv-shows" element={<Tv/>} />
        <Route path="movies" element={<Movies/>} />
    </Route>
))
