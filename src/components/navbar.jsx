import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export default function NavBar() {
    const {value, setValue} = useContext(UserContext);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Wordle <span>{value ? `- Hi, ${value} :)` : ""}</span></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/home">Home<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/help">Help</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/game/easy">Easy Game</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/game/medium">Medium Game</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/game/hard">Hard Game</Link>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    );
}