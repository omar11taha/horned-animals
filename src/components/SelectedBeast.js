import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <>
        <Button variant="primary">modal</Button>
        <Modal show={this.props.show}>
          <Modal.Header closeButton onClick={this.props.handleClose}>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <img
              src={this.props.image_url}
              alt=" "
              style={{ width: "360px", height: "360px" }}
            />
            {this.props.description}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Cansel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default SelectedBeast;
