import * as React from 'react';
import { SvgXml } from 'react-native-svg';

export function ProfileIcon(props) {
  const xml = `<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.05836 5.35387C4.05836 3.19392 5.82642 1.43696 8 1.43696C10.1736 1.43696 11.9416 3.19392 11.9416 5.35387C11.9416 7.51281 10.1736 9.26977 8 9.26977C5.82642 9.26977 4.05836 7.51281 4.05836 5.35387ZM2.61233 5.35387C2.61233 8.30479 5.02943 10.7067 8 10.7067C10.9706 10.7067 13.3867 8.30479 13.3867 5.35387C13.3867 2.40194 10.9706 0 8 0C5.02943 0 2.61233 2.40194 2.61233 5.35387ZM6.97761 19.985C7.3127 19.995 7.65384 20 8 20C11.4345 20 16 19.619 16 16.3301C16 12.6392 9.97836 12.6392 8 12.6392C4.56553 12.6392 0 13.0202 0 16.3101C0 17.2951 0.460881 18.624 2.6566 19.363C3.03597 19.493 3.44453 19.288 3.57333 18.913C3.70113 18.538 3.49887 18.131 3.1205 18.004C1.61811 17.4981 1.44503 16.7951 1.44503 16.3101C1.44503 14.8271 3.65082 14.0751 8 14.0751C12.3492 14.0751 14.555 14.8341 14.555 16.3301C14.555 17.8121 12.3492 18.563 8 18.563C7.66792 18.563 7.34088 18.559 7.01887 18.55C6.63245 18.553 6.2883 18.851 6.27723 19.247C6.26516 19.644 6.57912 19.975 6.97761 19.985Z" fill="#200E32"/>
</svg>
`;
  return <SvgXml {...props} xml={xml} />;
}

export function FavoriteIcon(props) {
  const xml = `<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.761 18.8538C8.5904 17.5179 6.57111 15.9456 4.73929 14.1652C3.45144 12.8829 2.47101 11.3198 1.8731 9.59539C0.797144 6.25031 2.05393 2.42083 5.57112 1.28752C7.41961 0.692435 9.43845 1.03255 10.9961 2.20148C12.5543 1.03398 14.5725 0.693978 16.4211 1.28752C19.9383 2.42083 21.2041 6.25031 20.1281 9.59539C19.5302 11.3198 18.5498 12.8829 17.2619 14.1652C15.4301 15.9456 13.4108 17.5179 11.2402 18.8538L11.0051 19L10.761 18.8538Z" stroke="#26262D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.7393 5.05298C15.8046 5.39328 16.5615 6.34968 16.6561 7.47496" stroke="#26262D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;
  return <SvgXml {...props} xml={xml} />;
}

export function HistoryIcon(props) {
  const xml = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M-0.000183105 9.99976C-0.000183105 4.48476 4.48582 -0.000244141 9.99982 -0.000244141C15.5138 -0.000244141 19.9998 4.48476 19.9998 9.99976C19.9998 15.5138 15.5138 19.9998 9.99982 19.9998C6.87282 19.9998 3.98282 18.5768 2.07282 16.0978C1.82782 15.7788 1.88782 15.3218 2.20582 15.0778C2.52382 14.8318 2.97882 14.8928 3.22482 15.2098C4.85782 17.3298 7.32682 18.5458 9.99982 18.5458C14.7118 18.5458 18.5458 14.7128 18.5458 9.99976C18.5458 5.28776 14.7118 1.45376 9.99982 1.45376C5.28782 1.45376 1.45482 5.28776 1.45482 9.99976C1.45482 10.4378 1.48682 10.8728 1.55182 11.2988C1.61182 11.6948 1.33982 12.0658 0.942817 12.1268C0.543817 12.1928 0.174817 11.9158 0.114817 11.5188C0.0388169 11.0208 -0.000183105 10.5098 -0.000183105 9.99976ZM8.93392 5.83716C8.93392 5.43516 9.25992 5.10916 9.66092 5.10916C10.0619 5.10916 10.3879 5.43516 10.3879 5.83716V10.2832L13.8119 12.3252C14.1569 12.5312 14.2699 12.9772 14.0639 13.3222C13.9289 13.5492 13.6869 13.6762 13.4399 13.6762C13.3129 13.6762 13.1839 13.6432 13.0679 13.5742L9.28792 11.3202C9.06892 11.1882 8.93392 10.9512 8.93392 10.6952V5.83716Z" fill="#353534"/>
</svg>

`;
  return <SvgXml {...props} xml={xml} />;
}

export function NotificationIcon(props) {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.50083 13.7871V13.5681C3.53295 12.9202 3.7406 12.2925 4.10236 11.7496C4.7045 11.0975 5.1167 10.2983 5.29571 9.43598C5.29571 8.7695 5.29571 8.0935 5.35393 7.42703C5.65469 4.21842 8.82728 2 11.9611 2H12.0387C15.1725 2 18.345 4.21842 18.6555 7.42703C18.7137 8.0935 18.6555 8.7695 18.704 9.43598C18.8854 10.3003 19.2972 11.1019 19.8974 11.7591C20.2618 12.2972 20.4698 12.9227 20.4989 13.5681V13.7776C20.5206 14.648 20.2208 15.4968 19.6548 16.1674C18.907 16.9515 17.8921 17.4393 16.8024 17.5384C13.607 17.8812 10.383 17.8812 7.18762 17.5384C6.09914 17.435 5.08576 16.9479 4.33521 16.1674C3.778 15.4963 3.48224 14.6526 3.50083 13.7871Z" stroke="#353534" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.55493 20.8518C10.0542 21.4785 10.7874 21.884 11.5922 21.9788C12.3971 22.0735 13.2072 21.8495 13.8433 21.3564C14.0389 21.2106 14.2149 21.041 14.3672 20.8518" stroke="#353534" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;
  return <SvgXml {...props} xml={xml} />;
}

export function AboutIcon(props) {
  const xml = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M-0.00012207 9.99976C-0.00012207 4.48476 4.48588 -0.000244141 9.99988 -0.000244141C15.5139 -0.000244141 19.9999 4.48476 19.9999 9.99976C19.9999 15.5138 15.5139 19.9998 9.99988 19.9998C6.87288 19.9998 3.98288 18.5768 2.07288 16.0978C1.82788 15.7788 1.88688 15.3218 2.20588 15.0778C2.52288 14.8318 2.97888 14.8928 3.22488 15.2098C4.85788 17.3298 7.32688 18.5458 9.99988 18.5458C14.7119 18.5458 18.5459 14.7128 18.5459 9.99976C18.5459 5.28776 14.7119 1.45376 9.99988 1.45376C5.28788 1.45376 1.45388 5.28776 1.45388 9.99976C1.45388 10.4378 1.48688 10.8728 1.55188 11.2988C1.61188 11.6948 1.33988 12.0658 0.942878 12.1268C0.543878 12.1928 0.174878 11.9158 0.114878 11.5188C0.0388779 11.0208 -0.00012207 10.5098 -0.00012207 9.99976ZM9.99988 5.45386C9.58588 5.45386 9.24988 5.78986 9.24988 6.20386V10.6239C9.24988 11.0379 9.58588 11.3739 9.99988 11.3739C10.4139 11.3739 10.7499 11.0379 10.7499 10.6239V6.20386C10.7499 5.78986 10.4139 5.45386 9.99988 5.45386ZM10.0101 13.0457H10.0001C9.58608 13.0457 9.25508 13.3817 9.25508 13.7957C9.25508 14.2097 9.59608 14.5457 10.0101 14.5457C10.4241 14.5457 10.7601 14.2097 10.7601 13.7957C10.7601 13.3817 10.4241 13.0457 10.0101 13.0457Z" fill="#353534"/>
</svg>


`;
  return <SvgXml {...props} xml={xml} />;
}

export function InfoIcon(props) {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#353534" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.09003 8.99996C9.32513 8.33163 9.78918 7.76807 10.4 7.40909C11.0108 7.05012 11.7289 6.9189 12.4272 7.03867C13.1255 7.15844 13.7588 7.52148 14.2151 8.06349C14.6714 8.60549 14.9211 9.29148 14.92 9.99996C14.92 12 11.92 13 11.92 13" stroke="#353534" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 17H12.01" stroke="#353534" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>



`;
  return <SvgXml {...props} xml={xml} />;
}

export function StarIcon(props) {
  const xml = `<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.10329 1.81663C9.47013 1.07346 10.5299 1.07346 10.8967 1.81663L12.8576 5.78909C13.0031 6.08394 13.2843 6.2884 13.6096 6.33595L17.9962 6.97712C18.8161 7.09696 19.1429 8.1048 18.5493 8.68296L15.3768 11.773C15.1409 12.0027 15.0333 12.3339 15.0889 12.6584L15.8374 17.0226C15.9775 17.8396 15.12 18.4626 14.3864 18.0767L10.4655 16.0148C10.1741 15.8615 9.82593 15.8615 9.53455 16.0148L5.61363 18.0767C4.88 18.4626 4.02245 17.8396 4.16257 17.0226L4.91109 12.6584C4.96675 12.3339 4.85908 12.0027 4.62321 11.773L1.45068 8.68296C0.857085 8.1048 1.18387 7.09696 2.00378 6.97712L6.39037 6.33595C6.71572 6.2884 6.99691 6.08394 7.14245 5.78909L9.10329 1.81663Z" stroke="#353534" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
  return <SvgXml {...props} xml={xml} />;
}

export function PowerIcon(props) {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.36 6.64001C19.6184 7.8988 20.4753 9.50246 20.8223 11.2482C21.1693 12.994 20.9909 14.8034 20.3096 16.4478C19.6284 18.0921 18.4748 19.4976 16.9948 20.4864C15.5148 21.4752 13.7749 22.0029 11.995 22.0029C10.2151 22.0029 8.47515 21.4752 6.99517 20.4864C5.51519 19.4976 4.36164 18.0921 3.68036 16.4478C2.99909 14.8034 2.82069 12.994 3.16772 11.2482C3.51475 9.50246 4.37162 7.8988 5.63 6.64001" stroke="#E93D25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 2V12" stroke="#E93D25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;
  return <SvgXml {...props} xml={xml} />;
}

export function ChevronDownCircle(props) {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.449 2.11357C10.9455 2.03757 11.455 1.99957 11.9634 1.99957C17.4606 1.99957 21.9329 6.48557 21.9329 11.9996C21.9329 17.5136 17.4606 21.9996 11.9634 21.9996C6.46622 21.9996 1.9939 17.5136 1.9939 11.9996C1.9939 8.87157 3.41256 5.98257 5.884 4.07257C6.20103 3.82757 6.65763 3.88757 6.90089 4.20457C7.14614 4.52257 7.08533 4.97857 6.76929 5.22557C4.65476 6.85657 3.44346 9.32657 3.44346 11.9996C3.44346 16.7116 7.26478 20.5456 11.9634 20.5456C16.661 20.5456 20.4824 16.7116 20.4824 11.9996C20.4824 7.28757 16.661 3.45357 11.9634 3.45357C11.5277 3.45357 11.0921 3.48657 10.6684 3.55157C10.2736 3.61157 9.90371 3.33957 9.84289 2.94257C9.77709 2.54357 10.0533 2.17457 10.449 2.11357ZM11.9626 14.7938C11.7642 14.7938 11.5738 14.7148 11.4332 14.5728L7.97281 11.0868C7.68071 10.7928 7.6817 10.3178 7.97481 10.0258C8.26791 9.73377 8.74047 9.73377 9.03157 10.0278L11.9626 12.9808L14.8936 10.0278C15.1848 9.73377 15.6583 9.73377 15.9514 10.0258C16.2435 10.3178 16.2445 10.7928 15.9534 11.0868L12.492 14.5728C12.3524 14.7148 12.162 14.7938 11.9626 14.7938Z" fill="#200E32"/>
</svg>

`;
  return <SvgXml {...props} xml={xml} />;
}

export function ChevronUpCircle(props) {
  const xml = `<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5905 19.0574C11.094 19.1274 10.5846 19.1625 10.0761 19.1625C4.57896 19.1625 0.106638 15.027 0.106638 9.94383C0.106638 4.86067 4.57896 0.72518 10.0761 0.72518C15.5733 0.72518 20.0457 4.86067 20.0457 9.94383C20.0457 12.8274 18.627 15.4907 16.1556 17.2514C15.8385 17.4773 15.3819 17.422 15.1387 17.1298C14.8934 16.8366 14.9542 16.4162 15.2703 16.1885C17.3848 14.685 18.5961 12.408 18.5961 9.94383C18.5961 5.6 14.7748 2.06557 10.0761 2.06557C5.37851 2.06557 1.5572 5.6 1.5572 9.94383C1.5572 14.2877 5.37851 17.8221 10.0761 17.8221C10.5118 17.8221 10.9475 17.7917 11.3712 17.7317C11.766 17.6764 12.1358 17.9272 12.1967 18.2932C12.2625 18.661 11.9863 19.0011 11.5905 19.0574ZM10.0769 7.36795C10.2753 7.36795 10.4658 7.44078 10.6063 7.57169L14.0667 10.7853C14.3588 11.0563 14.3579 11.4942 14.0647 11.7634C13.7716 12.0326 13.2991 12.0326 13.008 11.7616L10.0769 9.03929L7.14591 11.7616C6.8548 12.0326 6.38125 12.0326 6.08815 11.7634C5.79604 11.4942 5.79504 11.0563 6.08615 10.7853L9.54756 7.57169C9.68714 7.44078 9.87755 7.36795 10.0769 7.36795Z" fill="#DADADA"/>
</svg>


`;
  return <SvgXml {...props} xml={xml} />;
}