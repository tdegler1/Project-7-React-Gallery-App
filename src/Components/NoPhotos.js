// Displays a user-friendly message when the search topic is not found.
import React from 'react';

const NoPhotos = props => (
    <li className="not-found">
      <h3>No Results Found</h3>
      <p>You search did not return any results. Please try again.</p>
    </li>
);

export default NoPhotos;