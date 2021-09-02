import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class HorendBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votNum: 0,
    };
  }
  votNum = () => {
    this.setState({
      votNum: this.state.votNum + 1,
    });
    this.props.handleShowMain(
      this.props.title,
      this.props.image_url,
      this.props.description
    );
  };

  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={this.props.image_url}
            onClick={this.votNum}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Button onClick={this.votNum} variant="primary">
              vote
            </Button>
            <p>❤️ {this.state.votNum}</p>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default HorendBeasts;
