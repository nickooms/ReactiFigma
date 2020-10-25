import React from 'react';

const CanvasListItem = ({ children, onClick }) => (
  <li onClick={onClick}>{children}</li>
);

export default CanvasListItem;
