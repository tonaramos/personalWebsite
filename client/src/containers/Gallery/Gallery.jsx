import React from 'react';
import Segment from '../../hoc/Segment/Segment';

function Gallery() {
  return (
    <Segment>
      <div className="galleryContainer">
        <div className="galleryBlock" key="item1">
          Item 1
        </div>
        <div className="galleryBlock" key="item2">
          Item 2
        </div>
        <div className="galleryBlock" key="item3">
          Item 3
        </div>
        <div className="galleryBlock" key="item4">
          Item 4
        </div>
        <div className="galleryBlock" key="item5">
          Item 5
        </div>
        <div className="galleryBlock" key="item6">
          Item 6
        </div>
      </div>
    </Segment>
  );
}

export default Gallery;
