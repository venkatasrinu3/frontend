import React from 'react'   
import ShowModal from './ShowModal'

const UserTable = (props) =>{
    return(
        <div className='container'>
            <div className='col-12 table-responsive'>
                <table className='table border table-dark table-striped'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Profile Pic</th>
                            <th>Login Name</th>
                            <th>Id</th>
                            <th>HTML Url</th>
                            <th>Repo's Link</th>
                            <th>Profile Info</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {props.data.map((element)=>(
                            <tr key = {element.id}>
                                <td>
                                    {<img src={element.avatar_url} height={100} width={100}/>}
                                </td>
                                <td>{element.login}</td>
                                <td>{element.id}</td>
                                <td>{<a href={element.html_url} target='blank'>External link</a>}</td>
                                <td>{<a href={element.repos_url} target='blank'>External link</a>}</td>
                                <td><ShowModal label='User Name'
                                               name = {element.login}
                                               image = {element.avatar_url}
                                               id = {element.id}
                                               score = {element.score}
                                               tag = 'Score' />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default UserTable