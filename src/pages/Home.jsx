/* Importing NavLink for custom buttons */
import { NavLink } from "react-router-dom"

export default function Home() {

    return (
        <main>
            <div className="container">
                <section className="herobanner">
                    <h1>The future is <span className="mottospecial">here.</span>
                        <br />
                        The future is <span className="mottospecial">Moderno.</span></h1>
                    <p>We don’t just sell products. We sell what comes after.</p>
                    {/* Using NavLink to let users navigate without page reloads */}
                    <NavLink to="/products">
                        <button className="goto">Explore our products</button>
                    </NavLink>
                    <NavLink to="/aboutus">
                        <button className="goto">About Us</button>
                    </NavLink>
                </section>
            </div>
        </main>
    )
}