import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import { HomePage } from "../home/home_page";


const router = createBrowserRouter([{ path: "*", Component: Root }])

export function RootRouter() { return <RouterProvider router={router} /> }
function Root() {
    return (
        <>
            <Routes>
            <Route path="/" element={<HomePage />} />
            </Routes>
        </>
    )
}