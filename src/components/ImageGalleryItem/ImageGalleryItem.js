import styles from "./ImageGalleryItem.module.css";

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
