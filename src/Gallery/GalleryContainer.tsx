import * as React from "react";
import Gallery from "./Gallery";
import { getFilteredPicturesApi } from "../apiHelpers";
import {
  createPhotoLinks,
  FlickrImageType,
  FlickrImageLink
} from "./galleryHelpers";

type Props = {
  /* */
};

type State = {
  images: FlickrImageLink[];
  pagesLoaded: number;
  totalPages: number;
  imagesLoading: boolean;
};

class GalleryContainer extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      images: [],
      pagesLoaded: 1,
      totalPages: 1,
      imagesLoading: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  async componentDidMount() {
    const response = await this.getImages();
  }

  async getImages() {
    try {
      this.setState({ imagesLoading: true });
      const response = await getFilteredPicturesApi(this.state.pagesLoaded);
      if (response && response.data) {
        const photos = response.data.photos.photo;
        const photoLinks = createPhotoLinks(photos);
        const concatImages = this.state.images;
        concatImages.push(...photoLinks);
        this.setState({
          images: concatImages,
          totalPages: response.data.photos.pages,
          imagesLoading: false
        });
      }
      window.addEventListener("scroll", this.handleScroll);
    } catch (e) {
      console.error(e); // 💩
    }
  }

  handleScroll(event) {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (
      windowBottom >= docHeight * 0.9 &&
      this.state.pagesLoaded < this.state.totalPages &&
      this.state.imagesLoading === false
    ) {
      this.setState({ pagesLoaded: this.state.pagesLoaded + 1 });
      this.getImages();
    }
  }

  render() {
    return <Gallery images={this.state.images} />;
  }
}

export default GalleryContainer;
