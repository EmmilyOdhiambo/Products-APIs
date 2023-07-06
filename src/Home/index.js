import React from "react";
import './style.css'
const Home = () => {
    return(
        <div className="navbar">
            <li>
                <a href="/mainPage">MainPage</a>
            </li>

            <li>
                <a href="/productPage"> ProductPage</a>
            </li>
        </div>
    )
}
export default Home;