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
    const { nameImg, showModal } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGalleryView nameImage={nameImg} controlModal={this.openModal} />
        {this.state.showModal && (
          <Modal
            onClose={this.closeModal}
            src={showModal.src}
            alt={showModal.alt}
          />
        )}
      </div>
    );
  }
}

export default App;
