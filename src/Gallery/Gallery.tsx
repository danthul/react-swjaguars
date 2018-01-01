import * as React from "react";
import Masonry from "react-masonry-component";
import GalleryImage from "./GalleryImage";
import Panel from "../Panel";
import styled from "styled-components";
import { FlickrImageLink } from "./galleryHelpers";

type GalleryProps = {
  images: FlickrImageLink[];
};

const masonryOptions = {
  gutter: 5
};

const GalleryContainer = styled.div`
  padding-left: 20px;
`;

const Gallery: React.SFC<GalleryProps> = ({ images }: GalleryProps) => (
  <div className="container">
    <div className="row">
      <main className="col-md-12">
        <Panel heading="Southwest Images">
          <GalleryContainer>
            <Masonry options={masonryOptions}>
              {images
                ? images.map(image => {
                    return (
                      <GalleryImage
                        key={image.id}
                        source={image.thumbnail}
                        datetaken={image.datetaken}
                      />
                    );
                  })
                : ""}
            </Masonry>
          </GalleryContainer>
        </Panel>
      </main>
    </div>
  </div>
);

export default Gallery;
