import React from 'react'
const Tablist = (props) =>{
    return(
        <tr>
             <td>{props.name} </td>
             <td>{props.age} </td>
             <td>{props.address} </td>
             <td>{props.department} </td>
             <td>{props.salary} </td>
             <td><button onClick={() => props.edit(props.id)} className='btn btn-info'>Edit</button> </td>
             <td><button onClick={() => props.delete(props.id)} className='btn btn-danger'>Delete</button> </td>
         </tr>

     )   
}

const Table = (props) =>{
return(
    <div>
        <div className='table-responsive'>
            <table className="table border my-3">
                <thead className='thead-dark'>
                    <tr>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>ADDRESS</th>
                        <th>DEPARTMENT</th>
                        <th>SALARY</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map(element => 
                        <Tablist key = {element.id}
                                    id = {element.id}
                                    name = {element.name}
                                    age = {element.age}
                                    address = {element.address}
                                    department = {element.department}
                                    salary = {element.salary}
                                    edit = {props.handleEdit}
                                    delete={props.handleDelete}/>
                        )}
                </tbody>
            </table>
        </div>
    </div>
)
}
export default Table