import React from 'react'
import uuid from 'react-uuid'
import Table from './Table'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            address: '',
            department: '',
            salary: '',
            id: null,
            isdata: false,
            userData: [],
            filterData: [],
            isedit:false
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { name, age, address, department, salary } = this.state
        if (name === '' || age === '' || address === '' || department === '' || salary === '') {
            alert('Please fill all the fields')
        } else {
            let data = {
                name: this.state.name,
                age: this.state.age,
                address: this.state.address,
                department: this.state.department,
                salary: this.state.salary,
                id: uuid()
            }
            this.setState({
                userData: [...this.state.userData, data],
                filterData: [...this.state.filterData, data],
                isdata: true
            })
            let localData = [...this.state.userData, data]
            localStorage.setItem('edata',JSON.stringify(localData))
            this.reset()
        }
    }
    performEdit = (id) => {
        let user = this.state.userData.find(element => element.id === id)
        this.setState({
            name:user.name,
            age:user.age,
            address:user.address,
            department:user.department,
            salary:user.salary,
            id:user.id,
            isedit:true
        })
    }

    handleUpdate = (e) => {
        e.preventDefault()
        let formData = {
            name:this.state.name,
            age:this.state.age,
            address:this.state.address,
            department:this.state.department,
            salary:this.state.salary,
            id:this.state.id
        }
        const {filterData,id} = this.state
        const newdata = filterData.map(element => {
            if(element.id === id) {
                return formData
            }
            return element
        })
        this.setState({
            userData:newdata,
            filterData:newdata,
            isedit:false,
            isdata:true
        })
        localStorage.setItem('data',JSON.stringify(newdata))
        this.reset()
    }
    performDelete = (id) => {
        let del =  this.state.filterData.filter(element => element.id !== id)
        this.setState({
            filterData:[...del],
            userData:[...del]
        })
        localStorage.setItem('data',JSON.stringify(del))
    }
    componentDidMount() {
        let data = JSON.parse(localStorage.getItem('edata'))
        if (data) {
            this.setState({
                userData: data,
                filterData: data,
                isdata: true
            })
        }
    }
    reset = () => {
        this.setState({
            name: '',
            age: '',
            address: '',
            department: '',
            salary: ''
        })
    }
    render() {
        let btnname = this.state.isedit ? "Update" : "Submit"
        let subfunc = this.state.isedit ? this.handleUpdate : this.handleSubmit
        return (
            <>
                <div className='container'>
                    <p className='text-center text-success h1'>Employee Details</p>
                    <div className='col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3'>
                        <form onSubmit={subfunc}>
                            <div className='form-group'>
                                <label>Name</label>
                                <input type="text" className='form-control' onChange={this.handleChange} name='name' value={this.state.name} placeholder='Enter Your Name' />
                            </div>
                            <div className='form-group'>
                                <label>Age</label>
                                <input type="number" name='age' value={this.state.age} onChange={this.handleChange} className='form-control' placeholder='Enter your Age' />
                            </div>
                            <div className='form-group'>
                                <label>Address</label>
                                <textarea type="text" className='form-control' onChange={this.handleChange} name='address' value={this.state.address} placeholder='Enter Your Address' />
                            </div>
                            <div className='form-group'>
                                <label>Department</label>
                                <select name="department" value={this.state.department} className='form-control' onChange={this.handleChange}>
                                    <option value="">--Select Your Department--</option>
                                    <option value="ECE">ECE</option>
                                    <option value="CSE">CSE</option>
                                    <option value="CIVIL">CIVIL</option>
                                    <option value="MECH">MECH</option>
                                    <option value="EEE">EEE</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            <div className='form-group mt-2'>
                                <label>Salary</label>
                                <input type="number" name='salary' value={this.state.salary} className='form-control ' onChange={this.handleChange} placeholder='Enter Salary' />
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-outline-success'>{btnname}</button>
                            </div>
                        </form>
                    </div>
                    {this.state.isdata && <Table data = {this.state.filterData} 
                                                 handleEdit = {this.performEdit}
                                                 handleDelete={this.performDelete}/>}
                </div>
            </>
        )
    }
}
export default Form