import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { LandingPage } from "../LandingPage/LandingPage";

const routes = [
    <Route path='/' element={<LandingPage/>} errorElement={<LandingPage exceptionThrown/>}/>,
];

const router = createBrowserRouter(createRoutesFromElements(routes));

export default router;