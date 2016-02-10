import React from 'react';

// UI component with actions (grow, shrink) and data (width)
const Line = ({grow, shrink, width}) => {
  return (
    <div>
      <button onClick={shrink}>Shorter</button>
      <hr width={width}/>
      <div>{width}</div>
      <button onClick={grow}>Grow</button>
    </div>
  );
};

export default Line;
