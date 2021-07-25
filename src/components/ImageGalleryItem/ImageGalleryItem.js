import styles from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";

function ImageGalleryItem({ src, alt, activeImage }) {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={src}
        alt={alt}
        className={styles["ImageGalleryItem-image"]}
        onClick={activeImage}
      />
    </li>
  );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  activeImage: PropTypes.func.isRequired,
};
