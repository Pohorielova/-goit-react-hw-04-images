import React from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';
export default function ImageGalleryItem({
  id,
  webformatURL,
  tags,
  modalFn,
  largeImageURL,
}) {
  return (
    <GalleryItem key={id}>
      <GalleryItemImg
        src={webformatURL}
        alt={tags}
        onClick={e => {
          modalFn(e.target.attributes[2].value);
        }}
        data-large={largeImageURL}
      />
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  modalFn: PropTypes.func.isRequired,
};
