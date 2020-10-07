import React from 'react';

class App extends React.Component {
  state ={
    count: 0
  }

  add = () => {    
    this.setState(current => ({
      count: current.count +1, 
    }));
  };
  minus = () => {    
    this.setState({count: this.state.count -1});
  };
  render(){
   return (
     <div>
   <h1>I'm class component</h1>
   <button onClick={this.add}>Add</button>&nbsp;&nbsp;&nbsp;
   <button onClick={this.minus}>Minus</button>
   </div>
   );
  }
}

export default App;