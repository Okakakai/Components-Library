import styled from '@emotion/styled';
import { ChakraBreakPoint } from '../utils/mediaQueryUtils';

const SplitContainer = styled.div`
  display: table;
  width: 100%;
`;

const SplitItem = styled.div`
  display: table-cell;
  padding: 80px;
  width: 50%;
`;

const SplitLeft = styled.div`
  background: #000;
  color: #fff;
  position: relative;
`;

const SplitLeftInner = styled.div`
  height: 100%;
  position: fixed;
  width: 50%;
`;

const SplitRightInner = styled.div`
  height: 200vh;
`;

const FlexSplitContainer = styled.div`
  flex-direction: row-reverse;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;
  width: 100%;
`;

const FlexSplitLeft = styled.div`
  padding: 0 9.6875% 0 6.09375%;
  /* ${ChakraBreakPoint.mq.lg} {
    width: 36.17188%;
  } */
`;

const TwoHandredVh = styled.div`
  height: 200vh;
  background: blue;
`;

const FlexSplitRight = styled.div`
  width: 63.82812%;
`;

const Split = () => {
  return (
    <>
      {/* <SplitContainer>
        <SplitItem>
          <SplitLeftInner>left</SplitLeftInner>
        </SplitItem>
        <SplitItem>
          <SplitRightInner>right</SplitRightInner>
        </SplitItem>
      </SplitContainer> */}
      <FlexSplitContainer>
        <FlexSplitRight>
          <TwoHandredVh />
        </FlexSplitRight>
        <FlexSplitLeft>
          <StickContainer />
        </FlexSplitLeft>
      </FlexSplitContainer>
    </>
  );
};

export default Split;

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
