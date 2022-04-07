import React from 'react';
import {Svg, Path} from 'react-native-svg';

const Bars = ({style}) => (
  <Svg width="25" height="12" viewBox="0 0 25 12" fill="none" style={style}>
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.5 0C0.67157 0 0 0.67157 0 1.5C0 2.32843 0.67157 3 1.5 3H19.5C20.3284 3 21 2.32843 21 1.5C21 0.67157 20.3284 0 19.5 0H1.5ZM5.5 9C4.67157 9 4 9.67157 4 10.5C4 11.3284 4.67157 12 5.5 12H23.5C24.3284 12 25 11.3284 25 10.5C25 9.67157 24.3284 9 23.5 9H5.5Z"
      fill="black"
    />
  </Svg>
);

export default Bars;
