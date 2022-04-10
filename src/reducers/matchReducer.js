const MatchReducer = (state = false, action) => {
    switch(action.type) {
        case "ChangeToFalse":
            return false
        case "ChangeToTrue":
            return true
        default:
            return state
    }
}

export default MatchReducer