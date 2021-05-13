import * as React from 'react';
import { SvgXml } from 'react-native-svg';

export function CheckBoxActiveIcon(props) {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="23" height="23" rx="4.5" fill="white" stroke="#FF9139"/>
<path d="M18 7.5L9.75 15.75L6 12" stroke="#FF9139" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;
  return <SvgXml {...props} xml={xml} />;
}

export function CheckBoxInactiveIcon(props) {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="23" height="23" rx="4.5" fill="white" stroke="#CCCCCC"/>
</svg>

`;
  return <SvgXml {...props} xml={xml} />;
}
