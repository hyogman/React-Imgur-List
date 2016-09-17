import React from 'react';
import ImageDetail from './image_detail';

const ImageList = (props) => {

  const validImages = props.images.filter(image => !image.is_album);

  const renderedImages = validImages.map(image =>
    <ImageDetail key={image.title} image={image} />
  );

  return (
    <ul className="media-list list-group">
      {renderedImages}
    </ul>
  );
};

export default ImageList;
