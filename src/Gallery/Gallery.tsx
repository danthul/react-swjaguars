import * as React from "react";
import * as Infinite from "react-infinite";
import GalleryImage from "./GalleryImage";
import Panel from "../Panel";
import styled from "styled-components";
import { FlickrImageLink } from "./galleryHelpers";

type GalleryProps = {
  images: FlickrImageLink[];
};

const GalleryContainer = styled.div`
  padding-left: 20px;
`;

const handleInfiniteLoad = function(event) {
  console.log("loading");
};

const Gallery: React.SFC<GalleryProps> = ({ images }: GalleryProps) => (
  <div className="container">
    <div className="row">
      <main className="col-md-12">
        <Panel heading="Southwest Images">
          <GalleryContainer>
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
          </GalleryContainer>
        </Panel>
      </main>
    </div>
  </div>
);

export default Gallery;
