import styles from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ src, alt }) {
  return (
    <li className={styles.ImageGalleryItem}>
      <img src={src} alt={alt} className={styles["ImageGalleryItem-image"]} />
    </li>
  );
}

export default ImageGalleryItem;
