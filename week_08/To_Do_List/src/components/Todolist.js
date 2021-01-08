import React from 'react';

const Todolist  = (props) => { 
    return( 
        <div> 
            <h4 className='text-center text-success h2 mt-2'>{props.label}</h4>
            {props.data.map((element)=> 
                <div className='row' key={element.id}>
                    <div className='col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 my-1'>
                        <div className='card bg-warning py-2'>
                            <div className='d-flex'>
                                {props.label==='Todo List' ?
                                    <div className='col-md-4'>
                                        <input type="checkbox" onClick={() => props.performClick(element.id)} />
                                    </div>
                                    :''
                                }
                                <div className='col-md-4'>
                                    <h4 style={{color:`${element.isdone ? 'green' :'black'}`, textDecoration:`${element.isdone ? 'line-through':''}`}}>{element.task}</h4>
                                </div>
                                <div className='col-md-4'>
                                    <button className='btn btn-outline-danger' onClick={() => props.performDelete(element.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Todolist