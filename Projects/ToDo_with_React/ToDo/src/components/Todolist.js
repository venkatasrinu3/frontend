import React from 'react'
class Todolist extends React.Component{
    render(){
        let disp=(this.props.label==="Todo's")?"text-primary font-weight-bold":"text-success font-weight-bold"
        return(
            <div className="text-center mx-4 mb-3">
                <h4 className={disp}><u>{this.props.label}</u></h4>
                {this.props.data.map((element)=>
                    <div className="row" key={element.id}>
                        <div className="col-12 col-md-8 col-lg-4 offset-lg-4">
                            <div className="card">
                                <div className="bg-warning d-flex py-1">
                                    <div className="col-md-4">
                                        <input type="checkbox" onClick={()=>this.props.handleDone(element.id)} className="mt-2"/>
                                    </div>
                                    <div className="col-md-4">
                                        <h5 style={{color:`${element.isdone?"green":"black"}`,
                                        textDecoration:`${element.isdone?'line-through':''}`}}>{element.task}</h5>
                                    </div>
                                    <div className="col-md-4">
                                        <span className="text-dark" onClick={()=>this.props.handleDel(element.id)}><i className="fas fa-trash-alt"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
export default Todolist 