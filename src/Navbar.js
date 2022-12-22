import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./Styles.css"
export default function Navbar() {
  return (
    <header id="main-header">
            <div className="container">
                <div href="/" >
                    <a href="/" className="logo"><h1> PHM - BO</h1></a>
                </div>
                <nav id="navbar">
                    <input type="checkbox" id="check"/>
                    <label for="check" class="menu-btn">
                        <i className="fas fa-bars" id="s1"></i>
                    </label>
                    
                    <ul>
                        <li><a className="point" href="/">Home</a></li>
                        <li><a href="/Services">Clinic</a></li>
                        <li><a href="/About">About</a></li>
                        <li><a href="/Portfolio">Announsment</a></li>
                        <li><a href="/Contact">Contact me</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    
  )
}
