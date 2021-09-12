import React, { Component } from 'react';

class ReactComponent extends Component {

  state = {
    counter: 0
  }

  increaseCnt = () => this.setState(state => ({ counter: state.counter + 1 }));
  decreaseCnt = () => this.setState(state => ({ counter: state.counter - 1 }));

  render() {
    const { state: {counter}, increaseCnt, decreaseCnt } = this;

    return (
      <div>
        <h2>React Component</h2>
        
        <button onClick={decreaseCnt}>
          Minus
        </button>

        <p>{counter}</p>
        
        <button onClick={increaseCnt}>
          Plus
        </button>
      </div>
    )
  }
};

export default ReactComponent;