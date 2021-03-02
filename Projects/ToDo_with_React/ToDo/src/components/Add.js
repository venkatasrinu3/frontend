import React from 'react'
class Add extends React.Component{
    constructor(props){
        super(props)
        this.state={
            itemname:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleClick=()=>{
        if(this.state.itemname===""){
            alert('Please Fill the Input!')
        } 
        else{
            this.props.addfunc(this.state.itemname)
        }
        this.reset()
    }

    reset=()=>{
        this.setState({
            itemname:''
        })
    }
    render(){
        return(
            <div className="container">
                <div className="row my-5 text-center">
                    <div className="col-10 offset-1 offset-md-0 col-md-6 col-lg-4 offset-lg-4 d-flex">
                        <input type="text" className="form-control mr-2" placeholder="Add a Todo Item" value={this.state.itemname} onChange={this.handleChange} name="itemname"/>
                        <button className="btn btn-primary" onClick={this.handleClick}>ADD</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Add