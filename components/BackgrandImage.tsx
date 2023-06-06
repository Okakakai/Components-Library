import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const animation = keyframes`
    from {
        opacity: 0;
        transform: scale(1.2);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`;

export const CoverBackgroundImage = styled.div`
  background-image: url('/sub01@2x.jpg');
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: 50% 50% !important;
  opacity: 1;
  /* transform: scale(1.2);
  transition: ${animation} 0.8s, transform 1.4s cubic-bezier(0, 0.62, 0, 1); */
`;
