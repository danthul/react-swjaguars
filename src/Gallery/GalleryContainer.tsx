import * as React from "react";
import Gallery from "./Gallery";
import { getPictures } from "../apiHelpers";
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
};

// const imgId = [1011, 883, 1074, 823, 64, 65, 839, 314, 256, 316, 92, 643];
// for (let i = 0; i < imgId.length; i++) {
//   const ih = 200 + Math.floor(Math.random() * 10) * 15;
//   const thisImage = {
//     id: String(i + 1),
//     source: "https://unsplash.it/250/" + ih + "?image=" + imgId[i]
//   };
//   imageArr.push(thisImage);
// }

class GalleryContainer extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      images: []
    };
  }

  async componentDidMount() {
    try {
      const response = await getPictures();
      if (response && response.data) {
        const photos = response.data.photos.photo;
        const photoLinks = createPhotoLinks(photos);

        this.setState({ images: photoLinks });
      }
    } catch (e) {
      console.error(e); // 💩
    }
  }

  render() {
    return <Gallery images={this.state.images} />;
  }
}

export default GalleryContainer;
