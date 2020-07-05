import React from "react"

class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 0, min: 0 };
     
  
    }
  
    tick() {
      this.setState(state => ({
        seconds: state.seconds  %60 + 1
        
       
  
    
      }));
    }
    
    mins() {    
    this.setState(state => ({
        min: state.min+ 1
    
      }));
    }
  
    componentDidMount() {
    
      this.interval = setInterval(() => this.tick(), 1000);
      
  
      this.interval = setInterval(() => this.mins(), 60000); 
  
    }
    
  
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
    
    
  
    render() {
      return (
        <div>
          Process Time: {this.state.min}:{this.state.seconds}
        </div>
      );
    }
  }
  
  export default Timer