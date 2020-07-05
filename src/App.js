import React from "react";
import vsschooledata from "./vsschooledata"
import TodoItem from "./TodoItem"

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todoitem: vsschooledata, 
            /*  ###  LocalStorage ###
            message: localStorage.getItem("message") || "" ,
            message2: localStorage.getItem("message2") || "" ,
            message3: localStorage.getItem("message3") || "" ,
            
            id: '' */
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)

        this.handleAddClick = this.handleAddClick.bind(this);
         /*  ###  LocalStorage ###
        this.localStorage  = this.localStorage.bind(this);
        */
    }
    //#1
    handleClick(id) {
       this.setState(prevState =>{
       
            
           const newarray = prevState.todoitem.map(get =>{

               if(get.id ===id){
                   get.completed = !get.completed        
               }
               return get
           })
           return {
               todoitem: newarray
           }
       })
    }


  //#2
  handleAddClick(e) {
    e.preventDefault();
    alert('Success')
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      completed: false
    };
    this.setState(prevState =>{
    return {
        todoitem : prevState.todoitem.concat(newItem),  
    }    
    }); 
  }
/*  ###  LocalStorage ###

  handleClick2(id) { 
    var save = " "   
     this.setState({ id : save});
    this.setState({ id });  
  }

  
  localStorage (a) {  
    console.log(a)
        }
        
    */
  

    
    render(){   
        const todos = this.state.todoitem.map(item => 
            <TodoItem           
             key={item.id}       
             item={item} 
             //value={item.value}
             handleClick={this.handleClick} 
            // handleClick2= {this.handleClick2}

            // localStorage={this.localStorage}            
             /> )

        /*<input value={this.state.message} />
        <input value={this.state.message2} />
          
        <br></br>
        
        <br></br>
        <input value={this.state.message3} />
        <br></br> */
            
    return(
        <div style={{textAlign: "center"}}>
         <br></br>
             <h1>My todo lists</h1>       
                <button  onClick={this.handleAddClick} style={{backgroundColor: "green", color: "black", fontSize:20, padding: "5px 10px"}}> Add new todo </button>
            <h1> {todos}</h1> 
            
        </div>
        )
    }
}

export default App
