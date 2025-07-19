import { navLinks } from '../constants';

const Navbar = () => {
    return (
        <header>
            <nav>
                <div>
                    <a>
                        <p>AceCare</p>
                    </a>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={`#${link.id}`}>{link.title}</li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
