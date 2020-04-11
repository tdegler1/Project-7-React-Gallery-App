// Container that holds the Photo Gallery.
import React, { Component } from 'react';
import Photo from './Photo';
import NoPhotos from './NoPhotos';

class PhotoContainer extends Component {
  render() {
    const results = this.props.data;
    let title = this.props.query; // pulling in topic/search query as gallery title.
    let photos = ' '
    
    // Iterates through results (search data passed from app.js) and creates a url for each photo. Also assigns a unique key prop to each image.
    if (results.length > 0) {
      photos = results.map(photo =>
        <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />);
    // If the data results are blank, display the NoPhotos component with friendly error message.
    } else {
      photos = <NoPhotos />
    }

    return (
      <div className="photo-container">
        <h2>{title}</h2>
        <ul>
          {photos}
        </ul>
      </div>
    );
  }
}
export default PhotoContainer;