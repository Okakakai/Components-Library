import styled from '@emotion/styled';
import { ChakraBreakPoint } from '../utils/mediaQueryUtils';
import SplitLayoutRightImage from '../components/styledImage/SplitLayoutRightImage';
import { ParallaxBackgroudImageContainer } from '../components/styledImage/ParallaxBackgroudImageContainer';

type directionType = 'left' | 'right';
type Props = {
  direction?: directionType;
};

const Split = ({ direction }: Props) => {
  const directionStyle = direction === 'right' ? 'row' : 'row-reverse';
  return (
    <FlexSplitContainer directionStyle={directionStyle}>
      <FlexSplitRight>
        <ParallaxBackgroudImageContainer />
        <SplitLayoutRightImage />
        <SplitLayoutRightImage />
      </FlexSplitRight>
      <FlexSplitLeft>
        <StickContainer />
      </FlexSplitLeft>
    </FlexSplitContainer>
  );
};

export default Split;

const PositionRelative = styled.div`
  position: relative;
`;

type FlexSplitContainerProps = {
  directionStyle: string;
};

const FlexSplitContainer = styled.div<FlexSplitContainerProps>`
  /* box-sizing: content-box; */
  ${ChakraBreakPoint.mq.lg} {
    scroll-snap-align: start;
    flex-direction: ${(props) => props.directionStyle};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
    align-content: stretch;
    width: 100%;
  }
`;

const FlexSplitRight = styled.div`
  /* box-sizing: inherit; */
  width: 100%;
  ${ChakraBreakPoint.mq.lg} {
    width: 63.82812%;
  }
  border-right: 1px solid #000;
`;

const FlexSplitLeft = styled.div`
  /* box-sizing: inherit; */
  width: 100%;
  padding: 5rem 7.69231% 5rem;
  ${ChakraBreakPoint.mq.lg} {
    width: 36.17188%;
    padding: 0 9.6875% 0 6.09375%;
  }
`;

const StickyContent = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
`;

const StickyContentInner = styled.div`
  padding: 11.25rem 0 3.125rem;
`;

const StickContainer = () => {
  return (
    <StickyContent>
      <StickyContentInner>
        <h2>Content</h2>
        <div>content</div>
        <div>aaaaa</div>
      </StickyContentInner>
    </StickyContent>
  );
};
