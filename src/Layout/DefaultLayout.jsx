/* Importing React Outlet  */
import { Outlet } from "react-router-dom";
/* Importing my Header and Footer components */
import Header from "../components/Header";
import Footer from "../components/Footer"

export default function Header() {

    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}