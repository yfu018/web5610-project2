import './home.css';
import React from "react"
import {HelpButton, DifficultyChoiceButton} from './buttons';
import NavBar from './navbar';

export default function Home() {

    return (
        <div>
            <NavBar />
            <div className="flex-container">
                <h2>Home</h2>
                <HelpButton />
                <DifficultyChoiceButton />
            </div>
        </div>);
}