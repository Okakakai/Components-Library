import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const opacityScaleAnimation = keyframes`
    from {
        opacity: 0;
        transform: scale(1.2);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`;

type CoverBackgroundImageProps = {
  image: string;
};

export const CoverBackgroundImage = styled.div<CoverBackgroundImageProps>`
  /* background-image: url('/sub01@2x.jpg'); */
  background-image: ${(props) => `url(${props.image})`};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: 50% 50% !important;
  transform: scale(1.2);
  animation: ${opacityScaleAnimation} 4s infinite;
  transition: animation 0.8s, transform 1.4s;
`;

/* transition: ${animation} 0.8s, transform 1.4s cubic-bezier(0, 0.62, 0, 1); */
