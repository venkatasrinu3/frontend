import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

class ShowModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
  }
  handleClick = () => {
    this.setState({
      isShow: !this.state.isShow
    });
  };

  render() {
    return (
      <div>
        <Button color="info font-weight-bold" onClick={this.handleClick}>
          Display Profile
        </Button>
        <Modal isOpen={this.state.isShow} toggle={this.handleClick}>
          <ModalHeader toggle={this.handleClick}>
            <h4 className="text-center">
              {this.props.label} : {this.props.name}
            </h4>
          </ModalHeader>
          <ModalBody>
            <div className="text-center">
              <img src={this.props.img} height={420} width="100%" />
              <div className="mr-auto h4 mt-2">Id : {this.props.id}</div>
              <div className="h4">
                {this.props.tag} : {this.props.score}
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.handleClick}color="warning"className="mr-auto">
              Hide Modal
            </Button>
            <Button onClick={this.handleClick} color="danger">
              Close Modal
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default ShowModal;
