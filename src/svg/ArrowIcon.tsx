import * as React from 'react';
import { SvgXml } from 'react-native-svg';

export function ArrowIconLeft(props) {
  const xml = `<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 15L1.5 8L8.5 1" stroke="#353534" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


`;
  return <SvgXml {...props} xml={xml} />;
}
