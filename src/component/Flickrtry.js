import React from "react";
import axios from "axios";
import Card from "./Card";
import "./FlickrShowImg.css";

class Flickrtry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: "",
      data: null
    };
  }

  handleClick = async () => {
    try {
      const response = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://api.flickr.com/services/feeds/photos_public.gne?tags=" +
          this.state.tag +
          "&format=json&nojsoncallback=true"
      );
      this.setState({ data: response.data });
    } catch (err) {
      console.log("error");
    }
  };

  getImgs = () => {
    return (
      <div>
        {this.state.data.items.map((item, index) => {
          console.log(item);
          return (
            index < 3 && (
              <Card
                key={index}
                cardInfo={{
                  title: item.title,
                  subTitle: "",
                  img: item.media.m
                }}
              />
            )
          );
        })}
      </div>
    );
  };

  updateInput = e => {
    this.setState({ tag: e.target.value });
  };

  render() {
    return (
      <div>
        <div className="FlickrShowImg">
          <input onChange={this.updateInput} placeholder="input a tag" />
          <button onClick={this.handleClick}>feed flickr</button>
        </div>
        {this.state.data && this.getImgs()}
      </div>
    );
  }
}

export default Flickrtry;
