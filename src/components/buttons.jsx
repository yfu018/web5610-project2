import { Link } from 'react-router-dom';

export function HelpButton() {
    return (
        <Link className="flex-item btn btn-info" to="/help">Help - How to play Wordle?</Link>
    )
}

export function DifficultyChoiceButton() {
    return (
        <div className="flex-item dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Choose Difficulty Level
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item" to="../game/easy">Easy</Link>
                <Link className="dropdown-item" to="../game/medium">Medium</Link>
                <Link className="dropdown-item" to="../game/hard">Hard</Link>
            </div>
        </div>
    )
}