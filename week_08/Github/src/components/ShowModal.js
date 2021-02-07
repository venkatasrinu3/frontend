import React from 'react'
import {Modal,ModalHeader,ModalBody,ModalFooter,Button} from 'reactstrap'
class ShowModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isShow : false
        }
    }
    handleClick = () =>{
        this.setState({
            isShow : !this.state.isShow
        })
    }
    render(){
        return(
            <div>
                <Button color='info font-weight-bold' onClick={this.handleClick}>
                    Display Profile
                </Button>
                <Modal isOpen={this.state.isShow} toggle={this.handleClick}>
                    <ModalHeader toggle={this.handleClick}>
                        {this.props.label} : {this.props.name}
                    </ModalHeader>
                    <ModalBody>
                        <div className='text-center'>
                            <img src={this.props.image} height={420} width='100%'/>
                            <div className='mr-auto h4 mt-2'>ID : {this.props.id}</div>
                            <div className='h4'>{this.props.tag}:{this.props.score}</div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button onCick={this.handleClick} color='warning'>Hide Modal</Button>
                        <Button onClick={this.handleClick} color='danger'>Close Modal</Button>
                    </ModalFooter>
                </Modal>
            </div>  
        )
    }
}
export default ShowModal