import * as React from 'react';
import { SvgXml } from 'react-native-svg';

export function CashIcon(props) {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 21H3V19.5H22.5V9H24V21Z" fill="#FF9139"/>
<path d="M19.5 6V16.5H1.5V6H19.5ZM21 4.5H0V18H21V4.5Z" fill="#FF9139"/>
<path d="M4.5 9H3V13.5H4.5V15H10.5C9.50544 15 8.55161 14.6049 7.84835 13.9017C7.14509 13.1984 6.75 12.2446 6.75 11.25C6.75 10.2554 7.14509 9.30161 7.84835 8.59835C8.55161 7.89509 9.50544 7.5 10.5 7.5H4.5V9Z" fill="#FF9139"/>
<path d="M16.5 9V7.5H10.5C11.4946 7.5 12.4484 7.89509 13.1517 8.59835C13.8549 9.30161 14.25 10.2554 14.25 11.25C14.25 12.2446 13.8549 13.1984 13.1517 13.9017C12.4484 14.6049 11.4946 15 10.5 15H16.5V13.5H18V9H16.5Z" fill="#FF9139"/>
</svg>

`;
  return <SvgXml {...props} xml={xml} />;
}

export function CreditCardIcon(props) {
  const xml = `<svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 1.5H3C2.60218 1.5 2.22064 1.65804 1.93934 1.93934C1.65804 2.22064 1.5 2.60218 1.5 3V15C1.5 15.3978 1.65804 15.7794 1.93934 16.0607C2.22064 16.342 2.60218 16.5 3 16.5H21C21.3978 16.5 21.7794 16.342 22.0607 16.0607C22.342 15.7794 22.5 15.3978 22.5 15V3C22.5 2.60218 22.342 2.22064 22.0607 1.93934C21.7794 1.65804 21.3978 1.5 21 1.5ZM3 0C2.20435 0 1.44129 0.31607 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3L0 15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H21C21.7956 18 22.5587 17.6839 23.1213 17.1213C23.6839 16.5587 24 15.7956 24 15V3C24 2.20435 23.6839 1.44129 23.1213 0.87868C22.5587 0.31607 21.7956 0 21 0H3Z" fill="#FF9139"/>
<path d="M16.5 5.25C16.5 5.05109 16.579 4.86032 16.7197 4.71967C16.8603 4.57902 17.0511 4.5 17.25 4.5H20.25C20.4489 4.5 20.6397 4.57902 20.7803 4.71967C20.921 4.86032 21 5.05109 21 5.25V6.75C21 6.94891 20.921 7.13968 20.7803 7.28033C20.6397 7.42098 20.4489 7.5 20.25 7.5H17.25C17.0511 7.5 16.8603 7.42098 16.7197 7.28033C16.579 7.13968 16.5 6.94891 16.5 6.75V5.25ZM1.5 10.5H22.5V13.5H1.5V10.5Z" fill="#FF9139"/>
</svg>


`;
  return <SvgXml {...props} xml={xml} />;
}