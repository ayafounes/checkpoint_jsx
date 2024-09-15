// creation of the 3rd component (Description) and exporting it to App.js

import React from 'react';
import product from './product';

function Description() {
  return <h2>{product.description}</h2>;
}

export default Description;
