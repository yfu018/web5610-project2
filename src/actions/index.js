// MatchReducer
export const ChangeToFalse = () => ({ type: 'ChangeToFalse' })
export const ChangeToTrue = () => ({ type: 'ChangeToTrue' })

// ChanceReducer
export const decrementChance = () => ({ type: 'decrementChance'})
export const setChance = (data) => ({ type: 'setChance', data })

// CounterReducer
export const setCounter = (data) => ({ type: 'setCounter', data })

// TargetWordReducer
export const setTargetWord = (data) => ({ type: 'setTargetWord', data })

// GuessReducer
export const setGuess = (data) => ({ type: 'setGuess', data })

// GuessWordReducer
export const pushGuessWord = (data) => ({ type: 'push', data })
export const cleanGuessWord = () => ({ type: 'clean' })