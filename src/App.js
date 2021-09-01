import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";

import SelectedBeast from "./components/SelectedBeast";
import hornedAnimals from "./assest/data.json";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title : " ",
      image_url : " ",
      description : " ",
    };
  }

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = (title, imgurl, description) => {
    this.setState({
      show: true,
     title : title,
      image_url : imgurl,
      description : description,
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main animals={hornedAnimals} showFunction={this.handleShow} />
        <Footer />
        <SelectedBeast
          show={this.state.show}
          image_url={this.state.image_url}
          title={this.state.title}
          description={this.state.description}
          keyword={this.keyword}
          horns={this.horns}
          handleClose={this.handleClose}
        />
      </div>
    );
  }
}
export default App;
