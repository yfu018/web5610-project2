import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Line from './line';
import {setCounter} from '../actions';

export default function Board(props) {
    const {guess_words} = props;
    const dispatch = useDispatch();

    const target = useSelector(state => state.TargetWordReducer)

    return (
        <div>
            {/* jsx render for loop */}
            {guess_words.map((val, index) => {
                let temp_counter = {
                    'a': 0, 'b': 0, 'c': 0, 'd': 0, 'e': 0, 'f': 0, 'g': 0, 'h': 0,
                    'i': 0, 'j': 0, 'k': 0, 'l': 0, 'm': 0, 'n': 0, 'o': 0, 'p': 0, 
                    'q': 0, 'r': 0, 's': 0, 't': 0, 'u': 0, 'v': 0, 'w': 0, 'x': 0, 
                    'y': 0, 'z': 0
                };
                for (let c of target) {
                    temp_counter[c] += 1;
                }
                dispatch(setCounter(temp_counter));

                return <Line val={val} index={index}/>;
            })}
        </div>
    );

}