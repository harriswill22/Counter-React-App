import React, { Component } from 'react';
import Counter from "./counter"

class Counters  extends Component {
    state = { 
        counters: [
            {id: 1, count: 0 },
            {id: 2, count: 0 },
            {id: 3, count: 0 },
            {id: 4, count: 0 },
            
        ]
    };

_handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters})
};

_handleRest = () =>{
   const counters = this.setState.map(c =>{
        c.value =0;
        return c;
    });
    this.setState({counters});
}

    render() { 
        return ( 
            <div>
                <button
                onClick={this.handleRest}
                className="btn btn-primary btn-sm m-2">Reset</button>
                {this.state.counters.map(counter => (
                <Counter 
                key={counter.id} 
                onDelete={this._handleDelete} 
                value={counter.count} 
                id={counter.id}
                >
                </Counter>))}
            </div>
        );
    }
}

export default  Counters;