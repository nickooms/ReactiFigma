import React from 'react';

import CanvasListItem from './CanvasListItem';

const CanvasList = ({ children, onClickItem }) => (
  <ul>
    {children.map(({ name, key }) => (
      <CanvasListItem key={key} onClick={() => onClickItem(key)}>
        {name}
      </CanvasListItem>
    ))}
  </ul>
);

export default CanvasList;
