import React from 'react'

const RepoTable = (props) =>{
    return(
        <div className='container'>
            <div className='table-responsive col-12'>
                <table className='table '>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Profile Pic</th>
                            <th>Repo Name</th>
                            <th>Repo Id</th>
                            <th>Created At</th>
                            <th>Forks count</th>
                            <th>HTML Url</th>
                            <th>Profile Info</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {props.data.map((element)=>(
                                <tr key={element.id}>
                                    <td>{<img src = {element.owner.avatar_url} height={100} width={100} />}</td>
                                    <td>{element.repo}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default RepoTable