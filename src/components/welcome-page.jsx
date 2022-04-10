import './home.css'
import React, { useState, useContext } from "react"
import { UserContext } from '../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import {HelpButton} from './buttons';

export default function WelcomePage() {

    const [name, setName] = useState("")
    const context = useContext(UserContext)
    let navigate = useNavigate();

    function handlePost(e) {
        e.preventDefault()
        context.setValue(name)
        navigate("/home")
    }

    function handleChange(e) {
        setName(e.target.value)
    }

    return (

        <div className="flex-container">
            <h1>Welcome to Wordle! </h1>    
            <form className="flex-container" onSubmit={handlePost}>
                <input className="input-group mb-3" type="text" value={name} 
                        placeholder={`Please enter your name`}
                        onChange={e => handleChange(e)}/>
                <div className="input-group-append">
                    <button type="button" className="btn btn-info" onClick={e => handlePost(e)}>Submit</button>
                </div>
            </form>  
            <Link className="flex-item btn btn-success" to="/home">Home - Start game (without your name ;p)</Link>
            <HelpButton />
        </div>

    );
}