import React from "react";
import HornedBeasts from "./HorendBeasts";
import Form from "react-bootstrap/Form";
import alldata from "../assest/data.json";
class Main extends React.Component {
  saveNewName = (e) => {
    let horns = e.target.value;
    const tempSelectedBeast = alldata.filter((item) => {
      return item.horns === parseInt(horns);
    });
    this.props.FilterData(tempSelectedBeast);
  };

  render() {
    return (
      <main>
        <Form.Control
          as="select"
          onChange={this.saveNewName}
          aria-label="Default select example"
        >
          <option value="0">all data</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="100">onehundred</option>
        </Form.Control>
        {this.props.animals.map((animal) => {
          return (
            <HornedBeasts
              image_url={animal.image_url}
              title={animal.title}
              description={animal.description}
              keyword={animal.keyword}
              horns={animal.horns}
              handleShowMain={this.props.showFunction}
            />
          );
        })}
        ;
      </main>
    );
  }
}

export default Main;
