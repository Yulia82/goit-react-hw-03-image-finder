import styles from "./Button.module.css";

function LoadMoreBtn({ onLoadMore }) {
  return (
    <button type="button" className={styles.Button} onClick={onLoadMore}>
      Load more
    </button>
  );
}

export default LoadMoreBtn;
