import React from 'react'
import uuid from 'react-uuid'
import Add from './components/Add'
import Todolist from './components/Todolist'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tododata:[],
            isdata:false,
            showcompleted:false
        }
    }

    formSubmit=(name)=>{
        let item={
            task:name,
            isdone:false,
            id:uuid()
        }
        this.setState({
            tododata:[...this.state.tododata,item],
            isdata:true
        })
    }

    performDone=(id)=>{
        this.setState({
            tododata:this.state.tododata.map(element=>element.id===id?{...element,isdone:!element.isdone}:element)
        })
    }

    performDel=(id)=>{
        this.setState({
            tododata:this.state.tododata.filter(element=>element.id!==id)
        })
    }

    render(){
        return(
            <div className="container border shadow-lg my-5">
                <h1 className="text-center mt-3 font-weight-bold text-"><u>TO-DO APP</u></h1>
                <Add addfunc={this.formSubmit}/>
                {this.state.isdata && <Todolist data={this.state.tododata}
                                                handleDone={this.performDone}
                                                handleDel={this.performDel}
                                                label="Todo's"/>}
            {this.state.isdata && <button onClick={()=>this.setState({showcompleted:!this.state.showcompleted})} className="btn btn-primary mt-4 mb-4 offset-3 offset-lg-5">Show Completed Todo's</button>}
                
            {this.state.showcompleted && <Todolist data={this.state.tododata.filter(element=>element.isdone)}
                                                    handleDone={this.performDone}
                                                    handleDel={this.performDel}
                                                    label="Completed Todo's"/>}
            </div>
        )
    }
}
export default App