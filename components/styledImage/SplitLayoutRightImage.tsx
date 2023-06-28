import styled from '@emotion/styled';
import { ChakraBreakPoint } from '../../utils/mediaQueryUtils';

const SplitLayoutRightImage = () => {
  return (
    <ImageContainer>
      <BgGray />
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  z-index: 0;
  position: relative;
  ::before {
    ${ChakraBreakPoint.mq.lg} {
      padding: 126.43819% 0 0;
    }
    content: '';
    display: block;
    width: 100%;
    padding: 126.41026% 0 0;
    background-color: gray;
  }
`;

const BgGray = styled.div`
  background-color: gray;
  background-size: cover !important;
`;
export default SplitLayoutRightImage;
