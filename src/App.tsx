import Layout from "./components/Layout.tsx";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home.tsx";


function App() {


    return (
        <>
            <Layout>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                </Routes>
            </Layout>
        </>
    )
}

export default App
