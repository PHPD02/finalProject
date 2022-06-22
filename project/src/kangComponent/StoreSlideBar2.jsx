import React from "react";
import Carousel from "better-react-carousel";
import Restaurant from "./restaurant";

class StoreSlidrBar2 extends React.Component {
  state = {
    restaurant: [],
  };
  componentDidMount() {
    fetch("http://localhost:3005/restaurant")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          restaurant: data,
        });
      });
  };

  

  render() {
    return (

      <div >
      <Carousel cols={4} rows={1} gap={40} dotColorActive={'red'} loop scrollSnap>
        {this.state.restaurant.map((r) => {
          return (
            <Carousel.Item style={{}}>
              <div  key={r.Id}>
                <Restaurant restaurant={r} />
              </div>
            </Carousel.Item>
          );
        })}

      </Carousel>
      
      </div>
    );
  }
}

export default StoreSlidrBar2;
// https://github.com/devpanther/better-react-carousel?ref=reactjsexample.com