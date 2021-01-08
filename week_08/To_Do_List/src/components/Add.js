import React from 'react';

class Add extends React.Component{
    constructor(props){
        super(props);
        this.state={
            item:''
        }
    }
    handleChange = (e) => {
        this.setState({     
            [e.target.name]:e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.item === ''){
            alert('Please Enter the task todo!')
        }else{
            this.props.parentFunc(this.state.item)
        }
        
    }
    reset = () => {
        this.setState({
            item:'' 
        })
    }
    render(){
        return(
            <div className='container'>
                <h4 className='text-center text-primary h1 my-2'> TODO APP</h4>
                <div className='col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-4 my-2'>
                    <div  className='d-flex'>
                        <div className='form-group'>
                            <input type="text" name='item' value={this.state.item} onChange={this.handleChange} className='form-control' placeholder='Enter Item Todo'/>
                        </div>
                        <div className='text-center ml-5'>
                            <button onClick={this.handleSubmit} className='btn btn-primary'>ADD</button>
                            <button className='btn btn-primary' onClick={this.reset} >Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Add