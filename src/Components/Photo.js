// Displays the image as a list element in the photo gallery.
import React from 'react';

const Photo = props => (
  <li>
    <img src={props.url} alt=""/>
  </li>
);

export default Photo;