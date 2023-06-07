import styled from '@emotion/styled';
import { ChakraBreakPoint } from '../../../utils/mediaQueryUtils';
import Split from '../../../layout/split';

const SplitLayout = () => {
  return (
    <Container>
      <Split />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 200vh;
  ${ChakraBreakPoint.mq.lg} {
    height: 50vh;
  }
`;

export default SplitLayout;
