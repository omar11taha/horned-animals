import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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

    //     <Container>

    //     <Row>
    //         <Col>1 of 2</Col>
    //         <Col>2 of 2</Col>
    //     </Row>

    // </Container>;
  };

  render() {
    return (
      <Card style={{ width: "18rem", display: "inline-block" }}>
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
    );
  }
}
export default HorendBeasts;
