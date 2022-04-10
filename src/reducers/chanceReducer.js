const ChanceReducer = (state = 0, action) => {
    switch(action.type) {
        case "decrementChance":
            return state - 1
        case "setChance":
            const data = action.data
            return data
        default:
            return state
    }
}

export default ChanceReducer