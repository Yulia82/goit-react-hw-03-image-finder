import { Component } from "react";
import styles from "./App.module.css";
import Searchbar from "../Searchbar";
import ImageGalleryView from "../ImageGalleryView";
import Modal from "../Modal";

class App extends Component {
  state = {
    nameImg: "",
    showModal: null,
  };

  onSubmit = query => {
    this.setState({ nameImg: query });
  };

  openModal = (src, alt) => {
    this.setState({ showModal: { src, alt } });
  };

  closeModal = () => {
    this.setState({ showModal: null });
  };

  render() {
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGalleryView
          nameImage={this.state.nameImg}
          controlModal={this.openModal}
        />
        {this.state.showModal && (
          <Modal
            onClose={this.closeModal}
            src={this.state.showModal.src}
            alt={this.state.showModal.alt}
          />
        )}
      </div>
    );
  }
}

export default App;
