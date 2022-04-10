import {combineReducers} from 'redux'

import MatchReducer from './matchReducer'
import ChanceReducer from './chanceReducer'
import CounterReducer from './counterReducer'
import TargetWordReducer from './targetWordReducer'
import GuessReducer from './guessReducer'

const allReducers = combineReducers(
    {
        MatchReducer,
        ChanceReducer,
        CounterReducer,
        TargetWordReducer,
        GuessReducer,
    }
)
export default allReducers