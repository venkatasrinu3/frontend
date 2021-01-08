import React from 'react';
import Add from './components/Add';
import uuid from 'react-uuid';
import Todolist from './components/Todolist';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            isdata:false,
            iscompleted:false
        }
    }
    handleFunc = (itemname) => {
        let info={
            task:itemname,
            id:uuid(),
            isdone:false
        }
        this.setState({
            data:[...this.state.data,info],
            isdata:true
        })
    }
    handleClick = (id) => {
        this.setState({
            data:this.state.data.map(element => element.id === id ? {...element,isdone:!element.isdone} : element)
        })
    }
    handleDelete = (id) => {
        this.setState({
            data:this.state.data.filter(element => element.id !== id)
        })
    }
    render(){
console.log(this.state.data)
        return(
            <div className='container'>
                <Add parentFunc={this.handleFunc}/>
                {this.state.isdata && <Todolist data={this.state.data}
                                                label='Todo List'
                                                performClick={this.handleClick}
                                                performDelete={this.handleDelete}/>}
                <div className='text-center mt-2'>
                    {this.state.isdata && <button className='btn btn-primary' onClick={() => this.setState({iscompleted:!this.state.iscompleted})}>Show Completed Todo's</button> }
                </div>
                {this.state.iscompleted && <Todolist data = {this.state.data.filter(element => element.isdone)} 
                                                     label="Completed Todo's"
                                                     performDelete={this.handleDelete}/>}
            </div>
        )
    }
}
export default App