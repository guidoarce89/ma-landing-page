import React from 'react';

function Icon(props) {
  const {
    src,
    alt,
    size
  } = props;

  return (
    <img src={src} alt={alt} width={size} height={size} />
  )
}

export default Icon;