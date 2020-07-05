import React from "react"

import  "./index.css"

function TodoItem(props){
    const style = {color: "black"}
    
        if( props.item.completed === true){      
            style.textDecoration = " line-through "
        }
          
    
return(
    
    <div className="list">
       
        <div className="list-items">
        Finish:<input  type="checkbox"  
                checked={props.item.completed} 
                onChange={ () => props.handleClick(props.item.id)}            
        />
        <p className="save"></p>
       <p style={{textAlign: "right"}}>  TodoItem:  <input className="inputbar" style={style}  
        type="text" placeholder="My Todo"  
        
        //onClick={ () => props.handleClick2(props.item.id)}
        /* ###  LocalStorage ###
        onChange={(e) => {
         props.localStorage( e.target.value );    
        } */

          /> </p>
       
        </div>
    </div>
)
}

export default TodoItem