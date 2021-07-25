import ImageGalleryItem from "../ImageGalleryItem";
import styles from "./ImageGallery.module.css";
import PropTypes from "prop-types";

function ImageGallery({ images, activeImage }) {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            src={image.webformatURL}
            alt={image.tags}
            activeImage={() => activeImage(image.largeImageURL, image.tags)}
          />
        );
      })}
    </ul>
  );
}

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeImage: PropTypes.func,
};
