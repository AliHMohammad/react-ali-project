import Layout from "./components/Layout.tsx";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home.tsx";
import ArtistList from "./components/ArtistList.tsx";
import ArtistLayout from "./components/ArtistLayout.tsx";


function App() {


    return (
        <>
            <Layout>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/artists"} element={<ArtistLayout/>}/>
                </Routes>
            </Layout>
        </>
    )
}

export default App
