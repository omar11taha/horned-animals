import React from "react";
import HornedBeasts from "./HorendBeasts";

class Main extends React.Component {
  render() {
    return (
      <main>
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
