import styled from '@emotion/styled';
import { ChakraBreakPoint } from '../../../utils/mediaQueryUtils';
import { ImageWrapAnimation } from '../../../components/imageAnimation/slideAnimation';
// import { Curtain } from '../../../components/imageAnimation/slideAnimation';

const CurtainPage = () => {
  return (
    <Container>
      <ImageWrapAnimation />
    </Container>
  );
};

export default CurtainPage;
const Container = styled.div`
  width: 100%;
  height: 200vh;
  ${ChakraBreakPoint.mq.lg} {
    height: 100vh;
  }
`;
