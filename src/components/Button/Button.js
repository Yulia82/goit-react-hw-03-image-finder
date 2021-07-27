import styles from "./Button.module.css";
import PropTypes from "prop-types";

function LoadMoreBtn({ onLoadMore }) {
  return (
    <button type="button" className={styles.Button} onClick={onLoadMore}>
      Load more
    </button>
  );
}

export default LoadMoreBtn;

LoadMoreBtn.propTypes = {
  onLoadMore: PropTypes.func,
};
