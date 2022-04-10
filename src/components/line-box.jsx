import React, {Component} from 'react';
import {connect} from 'react-redux'
import './line-box.css'
import {setCounter} from '../actions';

class LineBox extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            color: "white"
        };
    }

    componentDidMount() {
        // each time a new component is created and mounted, this function runs
        const {c, idx, targetWord, counter, setCounter} = this.props;

        let temp_counter = counter;

        if (counter[c] > 0) {
            console.log(c, counter[c]);
            temp_counter[c] -= 1;
            setCounter(temp_counter);
            if (c === targetWord[idx]) 
                this.setState({color : "green"});
            else
                this.setState({color : "yellow"});
        }
    }

    render() {
        const {c} = this.props;
        const {color} = this.state;
        return (
            <div className={`square ${color}`}>{c}</div>
        )
    }
}

const mapStateToProps = (state) => ({ 
    counter: state.CounterReducer,
    targetWord: state.TargetWordReducer
})
const mapDispatchToProps = (dispatch) => {
    return {
        setCounter: (c) => dispatch(setCounter(c))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(LineBox)