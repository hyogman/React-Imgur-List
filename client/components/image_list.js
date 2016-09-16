import React from 'react';
import ImageDetail from './image_detail';

const IMAGES = [
  {title:'Pen', link: 'https://dummyimage.com/600x400'},
  {title:'Pine Tree', link:'https://dummyimage.com/600x400'},
  {title: 'Mug', link:'https://dummyimage.com/600x400'}
];

const ImageList = () => {
  const renderedImages = IMAGES.map(image =>
    <ImageDetail key={image.title} image={image} /> 
  );

  return (
    <ul className="media-list list-group">
      {renderedImages}
    </ul>
  );
};

export default ImageList;
