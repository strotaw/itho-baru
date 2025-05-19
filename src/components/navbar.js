import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <ul className="navbar-list">
                <li className="nav-button">
                    <Link className="active" href="/books/">Home</Link>
                </li>
                <li className="nav-button"><a href="#news">News</a></li>
                <li className="nav-button"><a href="#contact">Contact</a></li>
                <li className="nav-button"><a href="#about">About</a></li>
            </ul>
            <style jsx>{`
                nav {
                    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
                    position: sticky;
                    top: 0;
                    z-index: 100;
                    width: 100vw;
                    left: 0;
                    min-height: 56px;
                    height: 56px;
                    display: flex;
                    align-items: center;
                }
                .navbar-list {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 2rem;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    height: 100%;
                }
                .nav-button {
                    margin: 0;
                }
                .nav-button a, .nav-button :global(a), .nav-button :global(.active) {
                    color: #fff;
                    text-decoration: none;
                    font-weight: 500;
                    font-size: 1.1rem;
                    padding: 0.5rem 1.2rem;
                    border-radius: 6px;
                    transition: background 0.2s, color 0.2s;
                }
                .nav-button a:hover, .nav-button :global(.active) {
                    background: #1e40af;
                    color: #e0e7ef;
                }
            `}</style>
        </nav>
    );
}
