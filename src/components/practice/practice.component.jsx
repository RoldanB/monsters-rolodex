import React, { Component } from 'react';
import { Lifecycles } from './../lifecycles/lifecycles.component';

export class Practice extends Component {
    // constructor(props) { //allows you to use props inside of constructor
    //     super(props);
    //     this.state = {
    //         meaningOfLife: 47 + this.props.increment
    //     }
    // }

    //** Sometimes state can be simple like below. Leaves out constructor but initializes state as class field declaration */
    state = {
        meaningOfLife: 47,
        showChild: true,
        text: ''
    }

    handleClick = () => {
        // regular
        // this.setState({ meaningOfLife: this.state.meaningOfLife + 1 });

        // if you want to use state after update, add function as second param to use updated state
        this.setState((prevState, prevProps) => {
            return { meaningOfLife: prevState.meaningOfLife + prevProps.increment } // don't use this.state.meaningOfLife
        },
            () => console.log(this.state.meaningOfLife));

        // this.setState({ meaningOfLife: this.state.meaningOfLife + 1 }, () => console.log(this.state.meaningOfLife));
    }

    render() {
        // const { meaningOfLife } = this.state;
        return (
            <div>
                <p>Meaning of Life is {this.state.meaningOfLife}</p>
                <button onClick={this.handleClick} >Click me</button>
                <div>
                    <button onClick={() => this.setState(state => ({ showChild: !state.showChild }))} >
                        Toggle Lifecycles
                </button>
                    <button onClick={() => this.setState(state => ({ text: state.text + '_hello' }))}>
                        Update Text
                </button>
                    {this.state.showChild ? <Lifecycles}
                </div>
            </div>
        )
    }
}