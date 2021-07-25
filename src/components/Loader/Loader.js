import Loader from "react-loader-spinner";
import { Component } from "react";
import styles from "./Loader.module.css";

class Loadmore extends Component {
  //other logic
  render() {
    return (
      <Loader
        className={styles.LoadeMore}
        type="Puff"
        color="#00BFFF"
        height={300}
        width={300}
        timeout={3000} //3 secs
      />
    );
  }
}

export default Loadmore;
