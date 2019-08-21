import { keyframes } from 'styled-components';

export const fadeInTop = keyframes`
0% { top: 250px; opacity: 0.5; }
100% { top: 0px; opacity: 1; }
`;

export const fadeInBottom = keyframes`
0% { top: -250px; opacity: 0.5; }
100% { top: 0px; opacity: 1; }
`;