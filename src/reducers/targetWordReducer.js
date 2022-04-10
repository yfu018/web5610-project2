const TargetWordReducer = (state = "", action) => {
    switch(action.type) {
        case "setTargetWord":
            const data = action.data
            return data
        default:
            return state
    }
}

export default TargetWordReducer