import React, { Component } from 'react';
import List from './List'
import PropTypes from 'prop-types';

class Todo extends Component {
   constructor(props){
        super(props)
        this.state= {
            items:[],
            newtask: ''
        }
        this.addItem = this.addItem.bind(this)
        this.updatetask = this.updatetask.bind(this)
    } 
    addItem(){
        let itemsArray = this.state.items
        itemsArray.push(this.state.newtask)
        this.setState({
            items:itemsArray,
            newtask: ''

        })
        this.props.showList()
        console.log(this.state.newtask,this.state.items)
    }
    updatetask(e){
         this.setState({newtask:e.target.value})
    }
    render(){
        return(
        <div className='todoListMAin'>
          <div className='header'>
         
            <input placeholder='enter task' 
                   value={this.state.newtask}
                   onChange={this.updatetask}
                   className='btn btn-secondary btn-lg txt-dark'
                   />
            
            <button onClick={this.addItem} className='btn btn-info'>add</button>
        
        
        </div>
        
       {!this.props.isHidden && <List items={this.state.items}/>}
       
        </div> 
       
        )
    }

}

Todo.propTypes=
{
    isHidden: PropTypes.bool.isRequired,
    showList: PropTypes.func.isRequired
}
export default Todo;