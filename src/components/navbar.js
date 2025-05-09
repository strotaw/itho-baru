import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
        <ul class="navbar-list">
            <li className="nav-button"><Link class="active" href="/books/">Home</Link></li>
            <li className="nav-button"><a href="#news">News</a></li>
            <li className="nav-button"><a href="#contact">Contact</a></li>
            <li className="nav-button"><a href="#about">About</a></li>
        </ul>
        </nav>
    );
}
