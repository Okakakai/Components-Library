import styled from '@emotion/styled';
import Split from '../../layout/split';
import { StyledBorderBox } from '../../components/border/BorderBox';
import { ThreeColumnLayout } from '../../components/ThreeColumnLayout';
import { ChakraBreakPoint } from '../../utils/mediaQueryUtils';
import { CoverWithTextImage } from '../../components/styledImage/CoverWithTextImage';
import { TopBorderBox } from '../../components/border/SplitLayoutTopBorderBox';
import { BottomBorderBox } from '../../components/border/SplitLayoutBottomBorderBox';
import ImageWithText from '../components/images/ImageWithText';

const Wireframe = () => {
  return (
    <Container>
      <CaruselDemo />
      <ImageWithText />
      <TopBorderBox />
      <Split />
      <BottomBorderBox />
      <Split direction={'right'} />
      <StyledBorderBox />
      <ThreeColumnLayout />
      <CoverWithTextImage />
      <Split />
    </Container>
  );
};

const CaruselDemo = styled.div`
  width: 100%;
  height: 65vh;
  background-color: gray;
  ${ChakraBreakPoint.mq.lg} {
    height: 100vh;
  }
  margin-bottom: 3rem;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default Wireframe;
