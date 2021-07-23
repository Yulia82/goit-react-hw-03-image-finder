import { Component } from "react";
import styles from "./App.module.css";
import Searchbar from "../Searchbar";
import ImageGalleryView from "../ImageGalleryView";

class App extends Component {
  state = {
    nameImg: "",
  };

  onSubmit = query => {
    this.setState({ nameImg: query });
  };

  render() {
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGalleryView nameImage={this.state.nameImg} />
      </div>
    );
  }
}

export default App;
