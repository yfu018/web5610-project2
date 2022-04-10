import React, {Component} from 'react';
import {connect} from 'react-redux'
import LineBox from './line-box.jsx';
import './line.css';
import {setCounter} from '../actions';

class Line extends Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {counter} = this.props;
        console.log("initial: ");
        console.log(counter);
    }

    render() {
        const {val, index, targetWord} = this.props;

        return (
            <div>
                {/* {index}, {val}, {targetWord} */}
                <div className="line"> 
                    {Array.prototype.map.call(val, (c, idx) => {                    
                        return <LineBox c={c} idx={idx}/>
                    })}
                </div>
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Line)