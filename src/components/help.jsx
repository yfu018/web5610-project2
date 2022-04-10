import NavBar from './navbar';
import React from "react"
import {DifficultyChoiceButton} from './buttons';

export default function Help() {

    return (
        <div>
            <NavBar />
            <div className='flex-container'>
                <p>Guess the WORDLE in some tries.</p>
                <p>Each guess must be a valid word. Hit the enter button to submit.</p>
                <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
                <p>
                    <ul>
                        <li>Green: <br/>The letter is in the word and in the correct spot.</li>
                        <li>Yellow: <br/>The letter is in the word but in the wrong spot.</li>
                        <li>White: <br/>The letter is not in the word in any spot.</li>
                    </ul>
                </p>
                <p>Choose the difficulty level to start your game:</p>
                <ul>
                    <li>Easy: <br/>5 letter words, 7 opportunities.</li>
                    <li>Medium: <br/>6 letter words, 6 opportunities.</li>
                    <li>Hard: <br/>7 letter words, 5 opportunities.</li>
                </ul>
                <p>Good luck! :)</p>

                <DifficultyChoiceButton />
            </div>
        </div>
    );
}