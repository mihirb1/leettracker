import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
                <Link to="/" className="title">LeetTracker</Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Link to="/leaderboard" className="progress">Leaderboard</Link>
                <Link to="/login" className="login">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;
