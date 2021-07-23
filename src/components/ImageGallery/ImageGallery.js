import ImageGalleryItem from "../ImageGalleryItem";
import styles from "./ImageGallery.module.css";

function ImageGallery({ images }) {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            src={image.webformatURL}
            alt={image.webformatURL}
          />
        );
      })}
    </ul>
  );
}

export default ImageGallery;
// { id, webformatURL, largeImageURL}
