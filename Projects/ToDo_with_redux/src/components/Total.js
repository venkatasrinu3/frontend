import React from 'react'
import { connect } from 'react-redux'

const Total = (props) => {
    const { todo,pendingCount } = props
    let incompleteTasks = todo.filter(element => element.isdone === false)
    let design = (pendingCount===0) ? 'text-success text-center' : 'text-danger text-center'  
    return(
        <div className='p-2'>
            <h3 className="text-center text-primary font-weight-bold my-2"><u>Incompleted Tasks</u></h3>
            {incompleteTasks.map(element => 
                <div id={element.id}>
                    <h5 className="text-center">{element.name.toUpperCase()}</h5>
                </div>    
            )}
            <h6 className={design}>Incomplete Tasks count : {pendingCount}</h6>
        </div>
    )
}

const mapStateToProps = (state) => ({
    todo : state.todo,
    pendingCount : state.TotalInCompleted
})

export default connect(mapStateToProps,null)(Total)