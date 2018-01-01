import * as moment from "moment";

export type FlickrImageType = {
  id: string;
  owner: string;
  title: string;
  secret: string;
  server: string;
  farm: string;
  ispublic: string;
  isfriend: string;
  isfamily: string;
  ownername: string;
  dateadded: string;
  datetaken: string;
  datetakengranularity: string;
  datetakenunknown: string;
};

export type FlickrImageLink = {
  id: string;
  url: string;
  title: string;
  thumbnail: string;
  datetaken: string;
};

export function createPhotoLinks(images: FlickrImageType[]) {
  let photoLinks: FlickrImageLink[] = [];
  for (const image of images) {
    photoLinks.push({
      id: image.id,
      url:
        "https://c3.staticflickr.com/" +
        image.farm +
        "/" +
        image.server +
        "/" +
        image.id +
        "_" +
        image.secret +
        "_b.jpg",
      title: image.title,
      thumbnail:
        "https://c3.staticflickr.com/" +
        image.farm +
        "/" +
        image.server +
        "/" +
        image.id +
        "_" +
        image.secret +
        "_q.jpg",
      datetaken: moment(image.datetaken).format("MMM D, YYYY")
    });
  }

  return photoLinks;
}
