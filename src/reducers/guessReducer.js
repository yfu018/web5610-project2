const GuessReducer = (state = "", action) => {
    switch(action.type) {
        case "setGuess":
            return action.data
        default:
            return state
    }
}

export default GuessReducer