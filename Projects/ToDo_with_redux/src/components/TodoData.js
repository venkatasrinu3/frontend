import React,{Component} from 'react'
import {add_todo,toggle_todo,delete_todo,count} from '../Redux/Action'
import { connect } from 'react-redux'
import uuid from 'react-uuid'
import Total from './Total'

export class TodoData extends Component{
    constructor(props){
        super(props)
        this.state={
            item:''
        }
    }

    handleChange = (e) => {
        this.setState({
            item : e.target.value
        })
    }

    handleClick = () => {
        if(this.state.item===''){
            alert('Please Fill the Task Todo')
        }
        else{
            let data = {
                name:this.state.item,
                id:uuid(),
                isdone:false,
            }
            this.props.add_todo(data)
            this.props.count()
            this.reset()
        }
    }

    handleToggle = (id) => {
        this.props.toggle_todo(id)
        this.props.count()
    }

    handleDel = (id) => {
        this.props.delete_todo(id)
        this.props.count()
    }

    reset = () => {
        this.setState({
            item:''
        })
    }

    render(){
        return(
            <div className="container shadow-lg">
                <h2 className="text-primary text-center font-weight-bold mb-5 mt-1 display-4">To-Do App</h2>
                <div className="d-flex col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 my-2">
                    <input type="text" 
                        onChange={this.handleChange} 
                        value={this.state.item} 
                        className="form-control mr-2" 
                        placeholder="Enter Todo Task"
                    />
                    <button onClick={this.handleClick} 
                        className="btn btn-outline-primary">
                        ADD
                    </button>
                </div>

                <div className="p-2">
                    <h3 className="text-center text-primary font-weight-bold my-3">List of To-Do's</h3>
                    {this.props.todo_list.map(element =>
                        <div className="col-12 col-md-8 col-lg-6 offset-lg-3 border-0">
                            <div className="card" key={element.id}>
                                <div className="bg-dark d-flex py-2 shadow-lg">
                                    <div className="col-md-4">
                                        <input type="checkbox" onClick={() => this.handleToggle(element.id)} className="mt-2"/>
                                    </div>
                                    <div className="col-md-4">
                                        <h5 style={{color:element.isdone ? "white":"orange" , textDecoration : element.isdone ?"line-through" : ""}} className="pt-1 font-weight-bold">
                                            {element.name.toUpperCase()}
                                        </h5>   
                                    </div>
                                    <div className="col-md-4">
                                        <div onClick={() => this.handleDel(element.id)} className={element.isdone ? "btn btn-danger":"btn btn-outline-light"}>Delete</div>   
                                    </div>
                                </div>
                            </div>    
                        </div>
                    )}
                </div>
                <Total />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    todo_list : state.todo
})

const mapDispatchToProps = (dispatch) => ({
    add_todo : (payload) => dispatch(add_todo(payload)),
    toggle_todo : (payload) => dispatch(toggle_todo(payload)),
    delete_todo : (payload) => dispatch(delete_todo(payload)),
    count : () => dispatch(count())
}) 

export default connect (mapStateToProps,mapDispatchToProps)(TodoData)

