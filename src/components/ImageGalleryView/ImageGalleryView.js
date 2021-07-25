import { Component } from "react";
import ImageGallery from "../ImageGallery";
import LoadMoreBtn from "../Button";
import Loadmore from "../Loader";
import ImagesApi from "../utils/getImages-api";
import { scroll } from "../utils/scroll";

const galleryImages = new ImagesApi();

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

class ImageGalleryView extends Component {
  state = {
    images: null,
    error: null,
    status: Status.IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    if (prevProps.nameImage !== this.props.nameImage) {
      this.setState({ status: Status.PENDING });
      // console.log('prevProps.nameImage', prevProps.nameImage);
      // console.log('next-nameImage',this.props.nameImage);

      // const getImages = new ImagesApi(this.props.nameImage);
      galleryImages.query = this.props.nameImage;
      galleryImages.resetPage();

      galleryImages
        .getImage()
        .then(({ hits }) => {
          // console.log('images', hits);
          this.setState({ images: hits, status: Status.RESOLVED });
        })
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }

  loadMore = () => {
    galleryImages.incrementPage();

    galleryImages
      .getImage()
      .then(({ hits }) => {
        // console.log('images', hits);
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          status: Status.RESOLVED,
        }));
        scroll();
      })
      .catch(error => this.setState({ error, status: Status.REJECTED }));
  };

  activeImage = (src, alt) => {
    this.props.controlModal(src, alt);
  };

  render() {
    const { images, error, status } = this.state;

    if (status === "idle") {
      return <p>Введите название картинки/фото</p>;
    }

    if (status === "pending") {
      return <Loadmore />;
    }

    if (status === "rejected") {
      return <p>{error.message}</p>;
    }

    if (status === "resolved") {
      if (images.length < galleryImages.imagesPerPage) {
        return <ImageGallery images={images} />;
      } else {
        return (
          <>
            <ImageGallery images={images} activeImage={this.activeImage} />
            <LoadMoreBtn onLoadMore={this.loadMore} />
          </>
        );
      }
    }
  }
}

export default ImageGalleryView;
