import * as React from "react";
import styled from "styled-components";

type GalleryImageProps = {
  source: string;
  datetaken: string;
};

const Image = styled.img`
  width: 210px;
  height: 210px;
  margin-bottom: -25px;
  display: block;
  padding: 4px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.3);
  }
`;

const ImageDiv = styled.div`
  margin-bottom: 20px;
  float: left !important;
`;

const ImageDate = styled.span`
  color: white;
  padding-left: 10px;
`;

const GalleryImage: React.SFC<GalleryImageProps> = ({
  source,
  datetaken
}: GalleryImageProps) => (
  <ImageDiv>
    <Image src={source} />
    <ImageDate>{datetaken}</ImageDate>
  </ImageDiv>
);

export default GalleryImage;
