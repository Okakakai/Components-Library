import styled from '@emotion/styled';
import Split from '../../layout/split';
import { StyledBorderBox } from '../../components/border/BorderBox';
import { ThreeColumnLayout } from '../../components/ThreeColumnLayout';
import { ChakraBreakPoint } from '../../utils/mediaQueryUtils';
import { CoverWithTextImage } from '../../components/styledImage/CoverWithTextImage';
import { TopBorderBox } from '../../components/border/SplitLayoutTopBorderBox';
import { BottomBorderBox } from '../../components/border/SplitLayoutBottomBorderBox';
import ImageWithText from '../components/images/ImageWithText';
import { motion } from 'framer-motion';
import { css } from '@emotion/css';
import {
  TitleAnimation,
  TitleAnimation2,
} from '../../components/title/titleAnimation';

const Wireframe = () => {
  const containerVariants = {};
  return (
    <motion.div
      transition={{ ease: 'linear', duration: 2, x: { duration: 3 } }}
      initial={{ opacity: 0 }} // 初期状態
      animate={{ opacity: 1 }} // マウント時
      exit={{ opacity: 0 }} // アンマウント時
    >
      <Container>
        <CaruselDemo>
          {/* <TitleAnimation /> */}
          <TitleAnimation2 />
        </CaruselDemo>
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
    </motion.div>
  );
};

const CaruselDemo = styled.div`
  width: 100%;
  height: 65vh;
  scroll-snap-align: start;
  background-color: gray;
  ${ChakraBreakPoint.mq.lg} {
    height: 100vh;
  }
  margin-bottom: 3rem;
`;

const Container = styled.div`
  width: 100%;
  overflow: auto;
  scroll-snap-type: y;
  height: 100vh;
`;

const scrollNap = css`
  scroll-snap-align: start;
`;

export default Wireframe;
