import React, { Component } from 'react';
import Photo from './Photo';
import NoPhotos from './NoPhotos';

class PhotoContainer extends Component {
  render() {
    const results = this.props.data;
    let photos = ' '
      
    if (results.length > 0) {
      photos = results.map(photo =>
        <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />);
    } else {
      photos = <NoPhotos />
    }

    return (
      <div className="photo-container">
        <h2>Results</h2>
        <ul>
          {photos}
        </ul>
      </div>
    );
  }
}
export default PhotoContainer;