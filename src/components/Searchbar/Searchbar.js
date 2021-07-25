import { Component } from "react";
import styles from "./Searchbar.module.css";
import PropTypes from "prop-types";

class Searchbar extends Component {
  state = {
    value: "",
  };

  InputChange = evt => {
    this.setState({ value: evt.target.value.toLowerCase() });
    // console.log(evt.target.value);
  };

  FormSubmit = e => {
    e.preventDefault();

    if (this.state.value.trim() === "") {
      alert("ENTER NAME");
      return;
    }

    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.FormSubmit}>
          <button type="submit" className={styles["SearchForm-button"]}>
            <span className={styles["SearchForm-button-label"]}>Search</span>
          </button>

          <input
            className={styles["SearchForm-input"]}
            type="text"
            value={this.state.value}
            onChange={this.InputChange}
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
